import { NextResponse } from 'next/server';
import { q } from '@/lib/db';
import { getSession } from '@/lib/auth';
import { cancelMeeting } from '@/lib/google';

// Cancel a meeting: removes the Google Calendar event (attendees are notified) and the record.
export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const s = (await getSession())!;
  const { id } = await params;
  const m = (await q('select user_id,event_id from meetings where id=$1', [id]))[0];
  if (!m || (s.role !== 'admin' && m.user_id !== s.uid)) return NextResponse.json({ error: 'not found' }, { status: 404 });
  if (m.event_id) {
    try { await cancelMeeting(m.event_id); } catch (e: any) { return NextResponse.json({ error: 'Could not cancel the Google event: ' + e.message }, { status: 502 }); }
  }
  await q('delete from meetings where id=$1', [id]);
  return NextResponse.json({ ok: true });
}

const RESULTS =['interested', 'maybe', 'not_interested', 'no_show'];

// After-the-call debrief: outcome flag plus price, tools and agreement notes.
// Callers can edit their own meetings, admins any.
export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const s = (await getSession())!;
  const { id } = await params;
  const m = (await q('select user_id from meetings where id=$1', [id]))[0];
  if (!m || (s.role !== 'admin' && m.user_id !== s.uid)) return NextResponse.json({ error: 'not found' }, { status: 404 });
  const b = await req.json();
  const result = b.result ? String(b.result) : null;
  if (result && !RESULTS.includes(result)) return NextResponse.json({ error: 'Invalid result' }, { status: 400 });
  const t = (v: any) => (String(v || '').trim().slice(0, 2000) || null);
  await q(
    'update meetings set result=$2, price=$3, tools=$4, agreement=$5, debrief=$6, debrief_at=now() where id=$1',
    [id, result, t(b.price), t(b.tools), t(b.agreement), t(b.debrief)]
  );
  return NextResponse.json({ ok: true });
}
