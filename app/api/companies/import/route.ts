import { NextResponse } from 'next/server';
import { q } from '@/lib/db';
import { getSession } from '@/lib/auth';
import { inferCountry, parseCountry } from '@/lib/countries';

const FIELDS: Record<string, RegExp> = {
  name: /^(name|company|company name|firma|spolocnost|společnost|imone|įmonė|pavadinimas|unternehmen|nazov|názov)/i,
  email: /(e-?mail|el\.? ?pa[sš]tas|mail)/i,
  phone: /(phone|tel|mobil|telefon|numeris)/i,
  website: /(web|url|site|domain|www|svetain)/i,
  country: /(country|land|salis|šalis|lietuva|krajina|štát|stat\b|nation|region)/i,
  sector: /^(sector|industry|niche|branche|branža|veikla|odvetv)/i,
};

const digits = (p: string | null) => (p || '').replace(/\D/g, '');
const CHUNK = 500;

export async function POST(req: Request) {
  const s = (await getSession())!;
  if (s.role !== 'admin') return NextResponse.json({ error: 'Only the admin can import companies' }, { status: 403 });
  // The browser parses the sheet and sends it in batches so it can show progress.
  const body = await req.json();
  const assign = String(body.assignTo || 'me');
  let owners: number[] = [s.uid];
  if (assign === 'split') {
    const callers = await q("select id from users where role='user' order by id");
    if (callers.length) owners = callers.map((c: any) => c.id);
  } else if (/^\d+$/.test(assign)) {
    const u = await q('select id from users where id=$1', [Number(assign)]);
    if (u[0]) owners = [u[0].id];
  }
  // Cold callers need a number to dial, so by default a row without a phone is not imported.
  const onlyPhones = body.onlyPhones !== false;
  const rows: any[] = Array.isArray(body.rows) ? body.rows : [];
  if (!rows.length) return NextResponse.json({ error: 'Empty sheet' }, { status: 400 });

  const headers = Object.keys(rows[0]);
  const map: Record<string, string> = {};
  for (const f of ['name', 'email', 'phone', 'website', 'sector', 'country']) {
    const h = headers.find((h) => FIELDS[f].test(h.trim()) && !Object.values(map).includes(h));
    if (h) map[f] = h;
  }
  if (!map.name) map.name = headers[0];

  // A re-import of an updated list must not double the companies, so a phone already in the
  // studio (or repeated in the file) is skipped.
  const filePhones = [...new Set(rows.map((r) => digits(map.phone ? String(r[map.phone] ?? '') : '')).filter(Boolean))];
  const seen = new Set<string>(filePhones.length
    ? (await q("select regexp_replace(phone, '[^0-9]', '', 'g') as d from companies where regexp_replace(phone, '[^0-9]', '', 'g') = any($1)", [filePhones])).map((r: any) => r.d)
    : []);

  type Row = [number, string, string | null, string | null, string | null, string | null, string];
  const batch: Row[] = [];
  let added = 0, noPhone = 0, duplicate = 0;
  const byCountry: Record<string, number> = {};
  const byOwner: Record<number, number> = {};
  for (const r of rows) {
    const name = String(r[map.name] || '').trim();
    if (!name) continue;
    const g = (k: string) => (map[k] ? String(r[map[k]]).trim() || null : null);
    const phone = g('phone');
    if (onlyPhones && !digits(phone)) { noPhone++; continue; }
    const d = digits(phone);
    if (d) {
      if (seen.has(d)) { duplicate++; continue; }
      seen.add(d);
    }
    const country = parseCountry(g('country')) || inferCountry(g('website'), phone);
    const owner = owners[added % owners.length];
    batch.push([owner, name, g('email'), phone, g('website'), g('sector'), country]);
    byOwner[owner] = (byOwner[owner] || 0) + 1;
    added++;
    byCountry[country] = (byCountry[country] || 0) + 1;
  }
  // Multi-row inserts: one round trip per CHUNK rows instead of one per company.
  for (let i = 0; i < batch.length; i += CHUNK) {
    const part = batch.slice(i, i + CHUNK);
    const params: any[] = [];
    const values = part.map((row, n) => {
      params.push(...row);
      const b = n * 7;
      return `($${b + 1},$${b + 2},$${b + 3},$${b + 4},$${b + 5},$${b + 6},$${b + 7})`;
    });
    await q(`insert into companies(owner_id,name,email,phone,website,sector,country) values ${values.join(',')}`, params);
  }
  return NextResponse.json({ added, noPhone, duplicate, mapped: map, byCountry, assignedTo: Object.keys(byOwner).length });
}
