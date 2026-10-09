import { q } from '@/lib/db';
import { fetchTranscript } from '@/lib/google';

let running: Promise<number> | null = null;

// Pulls transcripts for meetings that ended at least 10 minutes ago and have none yet.
// Each meeting is retried at most every 10 minutes for 3 days after it ended. Returns how many transcripts were stored.
export function syncTranscripts(): Promise<number> {
  if (!running) running = run().finally(() => { running = null; });
  return running;
}

async function run() {
  const due = await q(
    `select id, meet_code from meetings
     where transcript is null and meet_code is not null
       and end_at < now() - interval '10 minutes' and end_at > now() - interval '3 days'
       and (transcript_checked_at is null or transcript_checked_at < now() - interval '10 minutes')
     order by end_at limit 10`
  );
  let got = 0;
  for (const m of due) {
    try {
      const r = await fetchTranscript(m.meet_code);
      await q(
        'update meetings set transcript=coalesce($2,transcript), transcript_state=$3, transcript_checked_at=now(), transcript_at=case when $2::text is not null then now() else transcript_at end where id=$1',
        [m.id, r.text || null, r.state]
      );
      if (r.text) got++;
    } catch (e: any) {
      await q('update meetings set transcript_state=$2, transcript_checked_at=now() where id=$1', [m.id, ('error: ' + e.message).slice(0, 200)]);
    }
  }
  return got;
}
