import { NextResponse } from 'next/server';
import { q } from '@/lib/db';
import { getSession } from '@/lib/auth';

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

export async function GET(req: Request) {
  const s = (await getSession())!;
  const u = new URL(req.url).searchParams;
  const params: any[] = [s.uid, s.role === 'admin'];
  const vis = `(($2::boolean or c.country=any(string_to_array((select u0.country from users u0 where u0.id=$1),chr(44)))) and btrim(coalesce(c.website,''))<>'')`;
  const conds: string[] = [];
  const text = (u.get('q') || '').trim().toLowerCase();
  if (text) { params.push(`%${text}%`); const n = params.length; conds.push(`(${['c.name', 'c.website', 'c.email', 'c.phone', 'c.sector'].map((f) => `lower(coalesce(${f},'')) like $${n}`).join(' or ')})`); }
  const country = u.get('country') || '';
  if (country && country !== 'all') { params.push(country); conds.push(`c.country=$${params.length}`); }
  const sector = u.get('sector') || '';
  if (sector && sector !== 'all') { params.push(sector); conds.push(`c.sector=$${params.length}`); }
  const status = STATUS[u.get('filter') || ''];

  const from = (where: string) => `from (select c.*, (c.id=any(keys.ids) or dom(c.website)=any(keys.doms) or lower(c.name)=any(keys.names)) as touched from companies c cross join keys where ${where}) v ${LAST}`;
  const allConds = [vis, ...conds].join(' and ');

  const statsP = q(
    `with ${KEYS} select count(*)::int total,
        count(*) filter (where coalesce(cnt.n,0)=0)::int never,
        count(*) filter (where ${DUE})::int due,
        count(*) filter (where lc.outcome in ('interested','meeting_booked','email_sent'))::int good
     ${from(allConds)} ${status ? 'where ' + status : ''}`,
    params
  );

  // Sector list follows country and status filters (not the sector or text filters).
  const secParams: any[] = [s.uid, s.role === 'admin'];
  const secConds = [vis, `c.sector is not null`, `c.sector<>''`];
  if (country && country !== 'all') { secParams.push(country); secConds.push(`c.country=$${secParams.length}`); }
  const sectorsP = q(
    status
      ? `with ${KEYS} select v.sector, count(*)::int n ${from(secConds.join(' and '))} where ${status} group by v.sector order by n desc, v.sector`
      : `select c.sector, count(*)::int n from companies c where ${secConds.join(' and ')} group by c.sector order by n desc, c.sector`,
    secParams
  );

  const [st, sectors] = await Promise.all([statsP, sectorsP]);
  return NextResponse.json({ stats: st[0], sectors });
}
