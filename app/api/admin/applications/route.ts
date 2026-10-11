import { NextResponse } from 'next/server';
import { q } from '@/lib/db';
import { decideApplication } from '@/lib/applications';

// Comma-separated country codes (a caller can cover several countries), same clean-up as /api/admin/users.
const cleanCountries = (v: unknown) => (typeof v === 'string' ? v.split(',').map((x) => x.trim().toLowerCase()).filter((x) => /^[a-z]{2,5}$/.test(x)).join(',') : '') || null;

// Admin only (proxy.ts guards /api/admin). Approve turns a pending applicant
// into a normal caller, optionally with the country whose companies they see.
// Reject deletes the application. Only pending applications can be touched
// here, so this can never remove a real user by mistake.
export async function POST(req: Request) {
  const { id, action, country } = await req.json().catch(() => ({}));
  if (!Number.isInteger(id) || (action !== 'approve' && action !== 'reject')) {
    return NextResponse.json({ error: 'id and action (approve or reject) required' }, { status: 400 });
  }
  const done = await decideApplication(q, id, action, cleanCountries(country));
  if (!done) return NextResponse.json({ error: 'No pending application with that id' }, { status: 404 });
  return NextResponse.json({ ok: true });
}
