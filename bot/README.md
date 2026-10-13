# Meet host bot

Google only starts a Meet's auto-transcription once the host joins, and a personal Gmail account cannot add
co-hosts. This bot keeps the organizer account (the one connected in Admin) in every booked call, mic and camera
off, so transcription starts and the existing transcript sync can pick it up.

## Setup (once)

1. Rename the Google account to the name callers/clients should see in the call (for example "Swiftrix Transcript").
2. Install: `cd bot && npm install`
3. Make sure the database has the `bot_joined_at` column: `node scripts/migrate.js` from the project root.

## Run (every day the bot should work)

1. Start Chrome with the organizer profile (signed in as the organizer account):

   ```
   "C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9994 --user-data-dir="%USERPROFILE%\chrome-debug-profile-9994" --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-renderer-backgrounding
   ```

   Leave it open. The first time, sign in to Google in that window.
2. Start the bot: `cd bot && npm start`

The bot reads upcoming meetings from the database (`DATABASE_URL` from the environment or `.env.local`), opens each
Meet one minute before it starts in a new tab of that Chrome, joins, makes sure transcription is on (starts it by hand
if the automatic start did not trigger), stays until five minutes after the planned end, then closes the tab.

Set `CHROME_CDP` to use another debugging address. The computer must be on and awake with Chrome open during calls.
