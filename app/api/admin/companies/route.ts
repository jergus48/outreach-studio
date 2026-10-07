import { NextResponse } from 'next/server';
import { q } from '@/lib/db';

const PAGE = 200;

// Visibility is by country (a caller sees every company of the country set on their user),
// so the list is filtered by search / country / status, not by owner.
function where(p: { q?: string; country?: string; sector?: string }) {
  const conds: string[] = [];
  const params: any[] = [];
  const s = (p.q || '').trim().toLowerCase();
  if (s) { params.push(`%${s}%`); conds.push(`(lower(c.name) like $${params.length} or lower(coalesce(c.website,'')) like $${params.length} or lower(coalesce(c.phone,'')) like $${params.length} or lower(coalesce(c.sector,'')) like $${params.length})`); }
  if (p.country) { params.push(p.country); conds.push(`c.country=$${params.length}`); }
  if (p.sector) { params.push(p.sector); conds.push(`c.sector=$${params.length}`); }
  return { sql: conds.length ? 'where ' + conds.join(' and ') : '', params };
}

const LATERALS = `left join lateral (select k.outcome,k.created_at,uu.email from calls k left join users uu on uu.id=k.user_id where k.company_id=c.id order by k.created_at desc limit 1) lc on true
     left join lateral (select count(*)::int n from calls k where k.company_id=c.id) cnt on true`;

function stateSql(state: string) {
  if (!state) return '';
  if (state === 'never') return 'and coalesce(cnt.n,0)=0';
  if (state === 'called') return 'and coalesce(cnt.n,0)>0';
  return 'and lc.outcome=$STATE';
}

// Admin only (enforced by proxy.ts). Paged: ?q=&country=&state=&page=0
export async function GET(req: Request) {
  const u = new URL(req.url).searchParams;
  const state = u.get('state') || '';
  const page = Math.max(0, Number(u.get('page')) || 0);
  const w = where({ q: u.get('q') || '', country: u.get('country') || '', sector: u.get('sector') || '' });
  const params = [...w.params];
  let st = stateSql(state);
  if (st.includes('$STATE')) { params.push(state); st = st.replace('$STATE', `$${params.length}`); }
  const cols = `c.id,c.name,c.website,c.phone,c.email,c.country,c.sector,lc.outcome as last_outcome, lc.created_at as last_at, lc.email as last_by, coalesce(cnt.n,0) as call_count`;
  let rows: any[], total: number;
  if (!st) {
    // No status filter: page the companies first so the per-company lookups run for 200 rows only.
    total = (await q(`select count(*)::int n from companies c ${w.sql}`, w.params))[0].n;
    rows = await q(
      `select ${cols} from (select c.* from companies c ${w.sql} order by c.created_at desc, c.id desc limit ${PAGE} offset ${page * PAGE}) c ${LATERALS} order by c.created_at desc, c.id desc`,
      w.params
    );
  } else {
    const all = await q(`select ${cols}, c.created_at from companies c ${LATERALS} ${w.sql ? w.sql + ' ' : 'where true '}${st} order by c.created_at desc, c.id desc`, params);
    total = all.length;
    rows = all.slice(page * PAGE, page * PAGE + PAGE);
  }
  const sectors = await q(`select sector, count(*)::int n from companies where sector is not null and sector<>'' group by sector order by n desc, sector`);
  return NextResponse.json({ rows, total, page, pageSize: PAGE, sectors });
}

// Delete by ids, or every company matching a filter: { all: true, q, country, state }
export async function DELETE(req: Request) {
  const b = await req.json();
  if (b.all) {
    const w = where(b);
    const params = [...w.params];
    let st = stateSql(b.state || '');
    if (st.includes('$STATE')) { params.push(b.state); st = st.replace('$STATE', `$${params.length}`); }
    const r = await q(
      `delete from companies where id in (select c.id from companies c ${LATERALS} ${w.sql ? w.sql + ' ' : 'where true '}${st}) returning id`,
      params
    );
    return NextResponse.json({ ok: true, deleted: r.length });
  }
  const { ids } = b;
  if (!Array.isArray(ids) || !ids.length) return NextResponse.json({ error: 'ids required' }, { status: 400 });
  await q('delete from companies where id = any($1::int[])', [ids.map(Number)]);
  return NextResponse.json({ ok: true, deleted: ids.length });
}
