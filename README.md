# Hindu Wedding Invitation

React + TypeScript + Tailwind + Vite.

## Customize
Edit **src/data/wedding.ts** only (names, year, events, venue, gallery, story, RSVP endpoint).
Replace images in `public/images/` (keep names, or update the config). Put your song at `public/music/wedding-song.mp3`.

## Run
npm install && npm run dev

## Build / Deploy
npm run build  -> `dist/`. Deploy `dist/` to Netlify, Vercel, GitHub Pages or any static host
(build command `npm run build`, output dir `dist`).

## RSVP backend
Set `rsvpEndpoint` in wedding.ts to any URL accepting JSON POST (Google Apps Script, Formspree, your API).
Until then RSVPs are saved in the browser's localStorage under `rsvps`.
