# Malmö Events

A static, dependency-free site listing upcoming events in Malmö: Christmas markets, food and drink, flea and vintage, art, design and craft, plus concerts, opera and stage, family shows, comedy and Malmö Redhawks home games.

**Live site:** https://mattiasisa.github.io/malmo-events/

## Run locally

```powershell
python -m http.server 5173
```

Then open http://localhost:5173. Opening `index.html` directly also works.

## Features

- Filter by date range (today, this weekend, next 7 days, month), type and venue, plus free-text search
- Filter state lives in the URL hash, so filtered views can be shared
- Multi-day runs that have already started are shown under **On now**
- Past events are hidden automatically
- "Add to calendar" downloads an `.ics` file
- Light and dark mode, mobile layout
- `?today=YYYY-MM-DD` previews the site as of another date

## Updating events

All data is in [`events.js`](events.js). Each event links to the source it came from. Listings were compiled on 2026-11-22 from organiser and ticket sites. Dates change, so re-check sources and bump `DATA_UPDATED` in `app.js` when you refresh the data.

## Deploying

The site is plain HTML/CSS/JS and can be served as-is from GitHub Pages (Settings → Pages → deploy from branch, root folder).
