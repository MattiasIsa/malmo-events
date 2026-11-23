# Malmö Events

A static, dependency-free site listing upcoming events in Malmö: Christmas markets, food and drink, flea and vintage, art, design and craft, plus concerts, opera and stage, family shows, comedy and Malmö Redhawks home games.

**Live site:** https://mattiasisa.github.io/malmo-events/

## Run locally

```powershell
python -m http.server 5173
```

Then open http://localhost:5173. Opening `index.html` directly also works.

## Features

- Calendar heatmap: each day is shaded on a single indigo ramp by how many events it has (five steps between the month's quietest and busiest day, legend shows the real values). Hover or focus a day for the count and a breakdown by type. Pick a day, or a day and then a later day for a range
- Quick ranges: today, tomorrow, this weekend, next 7 days and the coming months
- Filter by type and venue, plus free-text search
- Filter state lives in the URL hash, so filtered views can be shared
- Each event is listed on the first day it's on in the chosen range. Past events are hidden automatically
- "Add to calendar" downloads an `.ics` file
- Japanese-minimalist paper-and-ink design, light and dark mode. On phones the calendar and filters fold behind a toggle
- `?today=YYYY-MM-DD` previews the site as of another date

## Updating events

All data is in [`events.js`](events.js). Each event links to the source it came from. Events that only run on some weekdays (e.g. a Thu–Sun market) use `days`, so they only show on those days. Dates change, so re-check sources and bump `DATA_UPDATED` in `app.js` when you refresh the data.

## Deploying

The site is plain HTML/CSS/JS and can be served as-is from GitHub Pages (Settings → Pages → deploy from branch, root folder).
