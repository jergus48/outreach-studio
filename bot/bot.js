// Joins every booked Meet as the organizer account so Google starts transcription.
// Google only starts auto-transcription once the host (or a co-host) is in the call, and personal Gmail
// accounts cannot add co-hosts, so this bot sits in the call as the host with mic and camera off.
//
// It attaches to a normal Chrome that is signed in as the organizer account (no automated login, so Google
// does not block it). Start that Chrome first, see bot/README.md.
const fs = require('fs');
const path = require('path');
const { Client } = require('pg');
const { chromium } = require('playwright-core');

const root = path.join(__dirname, '..');
try {
  fs.readFileSync(path.join(root, '.env.local'), 'utf8').split(/\r?\n/).forEach((l) => {
    const i = l.indexOf('=');
    if (i > 0 && !(l.slice(0, i) in process.env)) process.env[l.slice(0, i)] = l.slice(i + 1);
  });
} catch {}

const CDP = process.env.CHROME_CDP || 'http://127.0.0.1:9994';
const EARLY_MS = 60 * 1000; // join this long before the start time
const TAIL_MS = 5 * 60 * 1000; // stay this long after the planned end
const POLL_MS = 30 * 1000;
const MAX_TRIES = 5;

const caFile = path.join(root, 'certs', 'supabase-ca.crt');
const db = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { ca: fs.existsSync(caFile) ? fs.readFileSync(caFile, 'utf8') : undefined },
});

const log = (...a) => console.log(new Date().toLocaleTimeString('en-GB'), ...a);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const active = new Set(); // meeting ids currently handled
const tries = new Map(); // meeting id -> failed attempts

let browser;
async function getBrowser() {
  if (browser && browser.isConnected()) return browser;
  browser = await chromium.connectOverCDP(CDP);
  log('attached to Chrome at', CDP);
  return browser;
}

// Click the first button whose label or text matches one of the patterns. Returns the matched label or null.
async function clickButton(page, patterns) {
  return page.evaluate((pats) => {
    const res = pats.map((p) => new RegExp(p, 'i'));
    for (const b of document.querySelectorAll('button, [role=button]')) {
      const label = (b.getAttribute('aria-label') || b.innerText || '').trim();
      if (label && res.some((r) => r.test(label))) { b.click(); return label; }
    }
    return null;
  }, patterns);
}

const inCall = (page) => page.evaluate(() => [...document.querySelectorAll('button')].some((b) => /^leave call/i.test(b.getAttribute('aria-label') || '')));

async function joinCall(page, url) {
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await sleep(6000);
  // Mic and camera off so nobody hears or sees the bot.
  for (let i = 0; i < 2; i++) {
    await clickButton(page, ['^turn off microphone', '^turn off camera']);
    await sleep(500);
  }
  const joined = await clickButton(page, ['^join now$', '^join$', '^ask to join$']);
  if (!joined) throw new Error('no join button found');
  for (let i = 0; i < 30; i++) {
    await sleep(1000);
    if (await inCall(page)) return;
  }
  throw new Error('did not get into the call (' + joined + ')');
}

// The host can start transcription by hand if the auto setting did not trigger it.
async function ensureTranscribing(page) {
  await sleep(15000);
  await clickButton(page, ['^meeting tools$']);
  await sleep(1500);
  const started = await clickButton(page, ['start transcribing']);
  if (started) {
    await sleep(1500);
    await clickButton(page, ['^start$', '^start transcription$', '^confirm$']);
    log('  started transcription manually');
  } else {
    log('  transcription already running (or not available)');
  }
  await clickButton(page, ['^close$']);
}

async function handle(m) {
  const tag = `meeting ${m.id}`;
  let page;
  try {
    const b = await getBrowser();
    const ctx = b.contexts()[0];
    page = await ctx.newPage();
    log(tag, 'joining', m.meet_url);
    await joinCall(page, m.meet_url);
    await db.query('update meetings set bot_joined_at=now() where id=$1', [m.id]);
    log(tag, 'in the call as host');
    await ensureTranscribing(page).catch((e) => log(tag, 'transcription check failed:', e.message));
    const until = new Date(m.end_at).getTime() + TAIL_MS;
    while (Date.now() < until && !page.isClosed() && (await inCall(page).catch(() => false))) await sleep(15000);
    log(tag, 'leaving');
  } catch (e) {
    const n = (tries.get(m.id) || 0) + 1;
    tries.set(m.id, n);
    log(tag, `failed (${n}/${MAX_TRIES}):`, e.message);
    if (n >= MAX_TRIES) await db.query("update meetings set bot_joined_at=now() where id=$1", [m.id]).catch(() => {});
  } finally {
    if (page && !page.isClosed()) await page.close().catch(() => {});
    active.delete(m.id);
  }
}

async function tick() {
  const r = await db.query(
    `select id, meet_url, end_at from meetings
     where meet_url is not null and bot_joined_at is null
       and start_at <= now() + ($1 || ' milliseconds')::interval and end_at > now()
     order by start_at`,
    [String(EARLY_MS)]
  );
  for (const m of r.rows) {
    if (active.has(m.id)) continue;
    active.add(m.id);
    handle(m);
  }
}

(async () => {
  if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL missing (set it or run from the project with .env.local)');
  await db.connect();
  log('bot running, checking every', POLL_MS / 1000, 's');
  for (;;) {
    try { await tick(); } catch (e) { log('tick error:', e.message); }
    await sleep(POLL_MS);
  }
})().catch((e) => { console.error(e.message); process.exit(1); });
