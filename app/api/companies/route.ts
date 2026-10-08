import { NextResponse } from 'next/server';
import { q } from '@/lib/db';
import { getSession } from '@/lib/auth';
import { inferCountry, parseCountry } from '@/lib/countries';

const PAGE = 200;

// A company counts as "called" when any call sits on the same company by id, website domain or name,
// so a caller sees when a colleague already phoned them. The call keys are collected once; only
// the few companies that match them need the per-company lookups below.
const KEYS = `keys as (select coalesce(array_agg(distinct c2.id),'{}') ids,
    coalesce(array_agg(distinct dom(c2.website)) filter (where dom(c2.website)<>''),'{}') doms,
    coalesce(array_agg(distinct lower(c2.name)),'{}') names
  from calls k join companies c2 on c2.id=k.company_id)`;
const MATCH = `(c2.id=v.id or (dom(v.website)<>'' and dom(c2.website)=dom(v.website)) or lower(c2.name)=lower(v.name))`;
const LAST = `left join lateral (select k.outcome,k.followup_at from calls k join companies c2 on c2.id=k.company_id where v.touched and ${MATCH} order by k.created_at desc limit 1) lc on true
     left join lateral (select count(*)::int n from calls k join companies c2 on c2.id=k.company_id where v.touched and ${MATCH}) cnt on true`;
const DUE = `(lc.outcome='call_back' and lc.followup_at is not null and lc.followup_at<=current_date)`;
const STATUS: Record<string, string> = {
  todo: `(coalesce(cnt.n,0)=0 or ${DUE})`,
  new: `coalesce(cnt.n,0)=0`,
  due: DUE,
  meeting_booked: `lc.outcome='meeting_booked'`,
  interested: `lc.outcome='interested'`,
  email_sent: `lc.outcome='email_sent'`,
  noans: `lc.outcome in ('no_answer','voicemail')`,
  not_interested: `lc.outcome in ('not_interested','wrong_number')`,
};

// Paged: ?q=&filter=&country=&sector=&smart=1&page=0. Also returns whole-list stats and the sector list.
export async function GET(req: Request) {
  const s = (await getSession())!;
  const u = new URL(req.url).searchParams;
  const page = Math.max(0, Number(u.get('page')) || 0);
  const params: any[] = [s.uid, s.role === 'admin'];
  // Companies without a website can't be researched, so they are left out of the list, stats and sectors.
  const vis = `(($2::boolean or c.country=(select u0.country from users u0 where u0.id=$1)) and btrim(coalesce(c.website,''))<>'')`;
  const conds: string[] = [];
  const text = (u.get('q') || '').trim().toLowerCase();
  if (text) { params.push(`%${text}%`); const n = params.length; conds.push(`(${['c.name', 'c.website', 'c.email', 'c.phone', 'c.sector'].map((f) => `lower(coalesce(${f},'')) like $${n}`).join(' or ')})`); }
  const country = u.get('country') || '';
  if (country && country !== 'all') { params.push(country); conds.push(`c.country=$${params.length}`); }
  const sector = u.get('sector') || '';
  if (sector && sector !== 'all') { params.push(sector); conds.push(`c.sector=$${params.length}`); }
  const status = STATUS[u.get('filter') || ''];
  const order = u.get('smart') === '0'
    ? 'v.created_at desc, v.id desc'
    : `(case when ${DUE} then 0 when coalesce(cnt.n,0)=0 then 1 when lc.outcome in ('no_answer','voicemail') then 2 else 3 end), v.created_at desc, v.id desc`;

  const from = (where: string) => `from (select c.*, (c.id=any(keys.ids) or dom(c.website)=any(keys.doms) or lower(c.name)=any(keys.names)) as touched from companies c cross join keys where ${where}) v ${LAST}`;
  const pageRows = await q(
    `with ${KEYS} select v.id, count(*) over()::int as total ${from([vis, ...conds].join(' and '))} ${status ? 'where ' + status : ''} order by ${order} limit ${PAGE} offset ${page * PAGE}`,
    params
  );
  const total = pageRows[0]?.total ?? 0;
  const ids = pageRows.map((r: any) => r.id);
  const rows = ids.length ? await q(
    `select c.*,
        (select json_agg(json_build_object('id',d.id,'lang',d.lang,'share_token',d.share_token,'created_at',d.created_at,'has_slides',(d.slides is not null),'has_presenter',(d.presenter is not null),'slides_early',d.slides_early) order by d.created_at desc)
           from decks d where d.company_id=c.id) as decks,
        (exists(select 1 from calls k0 where k0.company_id=c.id and k0.outcome='meeting_booked') or exists(select 1 from meetings m0 where m0.company_id=c.id)) as agreed,
        lc.outcome as last_outcome, lc.note as last_note, lc.created_at as last_at, lc.followup_at::text as last_followup,
        lc.email as last_by, (lc.user_id is distinct from $1) as last_by_other,
        coalesce(cnt.n,0) as call_count
     from companies c
     left join lateral (
        select k.outcome,k.note,k.created_at,k.followup_at,k.user_id,u.email
        from calls k join companies c2 on c2.id=k.company_id left join users u on u.id=k.user_id
        where c2.id=c.id or (dom(c.website)<>'' and dom(c2.website)=dom(c.website)) or lower(c2.name)=lower(c.name)
        order by k.created_at desc limit 1) lc on true
     left join lateral (
        select count(*)::int n from calls k join companies c2 on c2.id=k.company_id
        where c2.id=c.id or (dom(c.website)<>'' and dom(c2.website)=dom(c.website)) or lower(c2.name)=lower(c.name)) cnt on true
     where c.id = any($2::int[]) order by array_position($2::int[], c.id)`,
    [s.uid, ids]
  ) : [];

  const st = (await q(
    `with ${KEYS} select count(*)::int total,
        count(*) filter (where coalesce(cnt.n,0)=0)::int never,
        count(*) filter (where ${DUE})::int due,
        count(*) filter (where lc.outcome in ('interested','meeting_booked','email_sent'))::int good
     ${from(vis)}`,
    [s.uid, s.role === 'admin']
  ))[0];
  // Sector list follows the country and status filters (not the sector or text filters)
  const secParams: any[] = [s.uid, s.role === 'admin'];
  const secConds = [vis, `c.sector is not null`, `c.sector<>''`];
  if (country && country !== 'all') { secParams.push(country); secConds.push(`c.country=$${secParams.length}`); }
  const sectors = await q(
    status
      ? `with ${KEYS} select v.sector, count(*)::int n ${from(secConds.join(' and '))} where ${status} group by v.sector order by n desc, v.sector`
      : `select c.sector, count(*)::int n from companies c where ${secConds.join(' and ')} group by c.sector order by n desc, c.sector`,
    secParams
  );
  return NextResponse.json({ rows, total, page, pageSize: PAGE, stats: st, sectors });
}

export async function POST(req: Request) {
  const s = (await getSession())!;
  if (s.role !== 'admin') return NextResponse.json({ error: 'Only the admin can add companies' }, { status: 403 });
  const b = await req.json();
  if (!b.name?.trim()) return NextResponse.json({ error: 'Name required' }, { status: 400 });
  const country = parseCountry(b.country) || inferCountry(b.website, b.phone);
  let owner = s.uid;
  if (b.assignTo && Number(b.assignTo) !== s.uid) {
    const u = await q('select id from users where id=$1', [Number(b.assignTo)]);
    if (!u[0]) return NextResponse.json({ error: 'Unknown user' }, { status: 400 });
    owner = u[0].id;
  }
  const rows = await q('insert into companies(owner_id,name,email,phone,website,sector,country) values($1,$2,$3,$4,$5,$6,$7) returning *', [
    owner, b.name.trim(), b.email || null, b.phone || null, b.website || null, b.sector?.trim() || null, country,
  ]);
  return NextResponse.json(rows[0]);
}
