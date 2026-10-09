import { NextResponse } from 'next/server';
import { q } from '@/lib/db';
import { syncTranscripts } from '@/lib/transcripts';

// Every meeting with its transcript status. Opening this also pulls any transcripts that are due.
export async function GET() {
  await syncTranscripts().catch(() => 0);
  const rows = await q(
    `select m.id, m.start_at, m.end_at, m.meet_url, m.attendee_email, m.transcript_state, m.auto_transcribe,
            m.transcript_at, m.transcript_checked_at, (m.transcript is not null) as has_transcript,
            c.id as company_id, c.name, u.email as user_email
     from meetings m join companies c on c.id=m.company_id left join users u on u.id=m.user_id
     order by m.start_at desc limit 200`
  );
  return NextResponse.json(rows);
}
