# BridgeBack - MRU Hacks 2026 (fixed copy)

BridgeBack is a talent workspace demo. It bridges hardcoded candidates to
jobs by shared skills. The frontend demo does not need a database to run.

## What was fixed in this copy

Frontend:
- Jobs page was just "Hello". It now lists 4 hardcoded jobs, with required
  skills, location, type, best skill match, and a Save job button.
- Bridgers page was fully commented out. It now lists 4 hardcoded people
  with photos, skills, best job match, and working Bridge and Skip buttons.
- Sidebar navigation was disabled and always showed Candidates. Navigation
  now works, with Dashboard, Candidates, Matches, Jobs, Bridgers, and Settings.
- Dashboard, Matches, and Settings pages were missing. They now exist, using
  the same hardcoded data in `my-react-app/src/data/people.js`.
- `bridge.jsx` and `skip.jsx` were empty. They are now Bridge and Skip buttons.
- App.css had `cursor: not-allowed` on nav items. Nav items are now clickable.

Server and database (optional for the demo, but no longer broken):
- `server/index.js` imported `./db`, which does not exist. It now imports
  `./database/db.js`, adds `express.json()`, and adds JSON routes:
  `/`, `/health`, `/api/candidates`, `/api/jobs`, `/api/matches`, plus a
  JSON 404. The API returns the same hardcoded data as the frontend.
- `server/package.json` had invalid JSON. It is now valid, with `start` and
  `dev` scripts, and nodemon listed as a dev dependency.
- `server/database/schema.sql` had missing id types and trailing commas.
  It now uses SERIAL PRIMARY KEY and valid syntax.
- `server/database/seed.sql` said INSERT DATA INTO and had 5 values for
  4 candidate columns. It now uses INSERT INTO with correct values.
- `server/database/db.js` no longer has a password in the file. Use
  PGUSER, PGPASSWORD, PGHOST, PGPORT, and PGDATABASE environment variables.
  Never commit a real password or a `.env` file.

## Run the frontend

```
cd my-react-app
npm install
npm run dev
```

Then open the Vite URL it prints, usually http://localhost:5173

## Run the server (optional)

```
cd server
npm install
npm start
```

Then open http://localhost:5000/api/jobs

## Copying this into the team repo

This folder is not a git checkout. In VS Code, copy the changed files
over the matching files in your `dev` branch checkout, or copy the whole
`my-react-app/src` and `server` folders, then test with `npm run dev`.

If `node_modules` is still tracked in the team repo, remove it from Git
without deleting it locally:

```
git rm -r --cached node_modules
git rm -r --cached server/node_modules
```

Then commit the new `.gitignore` at the repo root.
