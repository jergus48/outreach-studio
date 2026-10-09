import { NextResponse } from 'next/server';
import { syncTranscripts } from '@/lib/transcripts';

// For an external scheduler (every 10-15 min) so transcripts arrive even when nobody has the admin page open.
// Disabled unless CRON_SECRET is set; call with "Authorization: Bearer <CRON_SECRET>".
export async function GET(req: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret || req.headers.get('authorization') !== `Bearer ${secret}`) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  return NextResponse.json({ stored: await syncTranscripts() });
}
