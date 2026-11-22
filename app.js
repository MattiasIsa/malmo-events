(() => {
  const EVENTS = window.MALMO_EVENTS || [];
  const DATA_UPDATED = "2026-11-22";

  const CATEGORIES = {
    christmas: { label: "Christmas markets" },
    food:      { label: "Food & drink" },
    vintage:   { label: "Flea & vintage" },
    art:       { label: "Art" },
    design:    { label: "Design & craft" },
    music:     { label: "Music" },
    stage:     { label: "Opera & stage" },
    family:    { label: "Family" },
    comedy:    { label: "Comedy" },
    sports:    { label: "Sports" }
  };

  // ----- Dates (all handled as local calendar days, no time zones) -----
  const parse = s => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
  const iso = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };

  // ?today=YYYY-MM-DD lets you preview the site as of another date.
  const override = new URLSearchParams(location.search).get("today");
  const today = override && /^\d{4}-\d{2}-\d{2}$/.test(override) ? parse(override) : (() => { const n = new Date(); return new Date(n.getFullYear(), n.getMonth(), n.getDate()); })();

  const fmtDow = new Intl.DateTimeFormat("en-GB", { weekday: "short" });
  const fmtMon = new Intl.DateTimeFormat("en-GB", { month: "short" });
  const fmtMonthYear = new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric" });
  const fmtShort = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short" });
  const fmtLong = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" });

  const events = EVENTS.map(e => ({
    ...e,
    s: parse(e.start),
    e: parse(e.end || e.start),
    cats: [e.category, ...(e.tags || [])],
    hay: [e.title, e.venue, e.desc, e.note, e.source, ...[e.category, ...(e.tags || [])].map(c => CATEGORIES[c]?.label)].join(" ").toLowerCase()
  })).filter(e => e.e >= today);

  // ----- "When" ranges, built from today -----
  function ranges() {
    const out = [{ id: "all", label: "All upcoming", from: today, to: new Date(9999, 0, 1) }];
    const dow = today.getDay(); // 0 Sun … 6 Sat
    // Fri–Sun; on Sat/Sun it's the remainder of the current weekend.
    const weekendFrom = dow === 0 || dow === 6 ? today : addDays(today, 5 - dow);
    const weekendTo = addDays(today, dow === 0 ? 0 : 7 - dow);
    out.push({ id: "today", label: "Today", from: today, to: today });
    out.push({ id: "weekend", label: "This weekend", from: weekendFrom, to: weekendTo });
    out.push({ id: "week", label: "Next 7 days", from: today, to: addDays(today, 6) });
    // next four calendar months
    for (let i = 0; i < 4; i++) {
      const from = new Date(today.getFullYear(), today.getMonth() + i, 1);
      const to = new Date(today.getFullYear(), today.getMonth() + i + 1, 0);
      out.push({ id: `m${i}`, label: new Intl.DateTimeFormat("en-GB", { month: "long" }).format(from), from: i === 0 ? today : from, to });
    }
    return out;
  }
  const RANGES = ranges();

  // ----- State (kept in the URL hash so filtered views can be shared) -----
  const state = { q: "", when: "all", cats: new Set(), venue: "" };
  function readHash() {
    const p = new URLSearchParams(location.hash.slice(1));
    state.q = p.get("q") || "";
    state.when = RANGES.some(r => r.id === p.get("when")) ? p.get("when") : "all";
    state.cats = new Set((p.get("type") || "").split(",").filter(c => CATEGORIES[c]));
    state.venue = p.get("venue") || "";
  }
  function writeHash() {
    const p = new URLSearchParams();
    if (state.q) p.set("q", state.q);
    if (state.when !== "all") p.set("when", state.when);
    if (state.cats.size) p.set("type", [...state.cats].join(","));
    if (state.venue) p.set("venue", state.venue);
    const h = p.toString();
    history.replaceState(null, "", h ? `#${h}` : location.pathname + location.search);
  }

  // ----- Controls -----
  const $ = id => document.getElementById(id);
  const whenEl = $("when"), catsEl = $("cats"), venueEl = $("venue"), qEl = $("q");

  function chip(label, pressed, onClick, color) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "chip";
    b.setAttribute("aria-pressed", String(pressed));
    if (color) {
      const dot = document.createElement("span");
      dot.className = "dot";
      dot.style.background = color;
      b.append(dot);
    }
    b.append(label);
    b.addEventListener("click", onClick);
    return b;
  }

  function renderControls() {
    whenEl.replaceChildren(...RANGES.map(r =>
      chip(r.label, state.when === r.id, () => { state.when = r.id; update(); })));

    catsEl.replaceChildren(
      chip("All", state.cats.size === 0, () => { state.cats.clear(); update(); }),
      ...Object.entries(CATEGORIES)
        .filter(([id]) => events.some(e => e.cats.includes(id)))
        .map(([id, c]) => chip(c.label, state.cats.has(id), () => {
          state.cats.has(id) ? state.cats.delete(id) : state.cats.add(id);
          update();
        }, `var(--c-${id})`))
    );

    venueEl.value = state.venue;
    if (qEl.value !== state.q) qEl.value = state.q;
  }

  const venues = [...new Set(events.map(e => e.venue))].sort((a, b) => a.localeCompare(b, "sv"));
  venues.forEach(v => venueEl.append(new Option(v, v)));
  venueEl.addEventListener("change", () => { state.venue = venueEl.value; update(); });
  let t;
  qEl.addEventListener("input", () => { clearTimeout(t); t = setTimeout(() => { state.q = qEl.value.trim(); update(false); }, 120); });

  // ----- Filtering -----
  function filtered() {
    const r = RANGES.find(x => x.id === state.when);
    const words = state.q.toLowerCase().split(/\s+/).filter(Boolean);
    return events.filter(e =>
      e.s <= r.to && e.e >= r.from &&
      (!state.cats.size || e.cats.some(c => state.cats.has(c))) &&
      (!state.venue || e.venue === state.venue) &&
      words.every(w => e.hay.includes(w))
    ).sort((a, b) => a.s - b.s || a.e - b.e || a.title.localeCompare(b.title));
  }

  // ----- Rendering -----
  function el(tag, cls, text) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function dateLine(e) {
    if (+e.s === +e.e) return fmtLong.format(e.s);
    if (e.s < today) return `Until ${fmtShort.format(e.e)}`;
    return `${fmtShort.format(e.s)} – ${fmtShort.format(e.e)}`;
  }

  function card(e, shown) {
    const c = el("article", "card");
    c.style.setProperty("--cat", `var(--c-${e.category})`);

    const d = el("div", "date");
    d.setAttribute("aria-hidden", "true");
    d.append(el("div", "dow", fmtDow.format(shown)), el("div", "day", shown.getDate()), el("div", "mon", fmtMon.format(shown)));

    const body = el("div");
    body.append(el("h3", null, e.title));
    const meta = el("p", "meta");
    [dateLine(e), e.times, e.venue, e.price].filter(Boolean).forEach(x => meta.append(el("span", null, x)));
    body.append(meta);
    if (e.desc) body.append(el("p", "desc", e.desc));

    const tags = el("div", "tags");
    e.cats.forEach((cat, i) => {
      const t = el("span", i === 0 ? "tag cat" : "tag", CATEGORIES[cat]?.label || cat);
      if (i > 0) t.style.color = `var(--c-${cat})`;
      tags.append(t);
    });
    if (e.s < today) tags.append(el("span", "tag", "On now"));
    if (e.note) tags.append(el("span", "tag note", e.note));
    body.append(tags);

    const acts = el("div", "actions");
    const a = el("a", null, "Details & tickets");
    a.href = e.url; a.target = "_blank"; a.rel = "noopener";
    const ics = el("button", null, "Add to calendar");
    ics.type = "button";
    ics.addEventListener("click", () => downloadIcs(e));
    acts.append(a, ics, el("span", "src", `Source: ${e.source}`));
    body.append(acts);

    c.append(d, body);
    return c;
  }

  function renderList() {
    const list = $("list");
    const items = filtered();
    $("count").textContent = `${items.length} event${items.length === 1 ? "" : "s"}`;

    if (!items.length) {
      const box = el("div", "empty");
      box.append(el("p", null, "Nothing matches these filters."));
      const reset = chip("Clear filters", false, () => {
        state.q = ""; state.when = "all"; state.cats.clear(); state.venue = ""; update();
      });
      box.append(reset);
      list.replaceChildren(box);
      return;
    }

    // Each event is placed on the first day it's on inside the selected range,
    // so a run that started earlier shows up where the range begins.
    const r = RANGES.find(x => x.id === state.when);
    const rangeFrom = r.from > today ? r.from : today;
    const groups = new Map();
    const ongoing = items.filter(e => e.s < today);
    if (ongoing.length && rangeFrom <= today) groups.set("On now", ongoing.map(e => [e, today]));
    items
      .filter(e => !(e.s < today && rangeFrom <= today))
      .map(e => [e, e.s < rangeFrom ? rangeFrom : e.s])
      .sort((a, b) => a[1] - b[1] || a[0].e - b[0].e)
      .forEach(([e, d]) => {
        const k = fmtMonthYear.format(d);
        if (!groups.has(k)) groups.set(k, []);
        groups.get(k).push([e, d]);
      });

    const frag = document.createDocumentFragment();
    groups.forEach((evs, name) => {
      const g = el("section", "group");
      const h = el("h2", null, name.charAt(0).toUpperCase() + name.slice(1));
      h.append(el("small", null, `${evs.length}`));
      g.append(h, ...evs.map(([e, d]) => card(e, d)));
      frag.append(g);
    });
    list.replaceChildren(frag);
  }

  function update(rerenderControls = true) {
    writeHash();
    if (rerenderControls) renderControls();
    renderList();
  }

  // ----- Calendar export (.ics, all-day) -----
  function downloadIcs(e) {
    const esc = s => String(s || "").replace(/\\/g, "\\\\").replace(/([,;])/g, "\\$1").replace(/\n/g, "\\n");
    const day = d => iso(d).replace(/-/g, "");
    const stamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d+/, "");
    const details = [e.times, e.price, e.desc, e.url].filter(Boolean).join("\n");
    const ics = [
      "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Malmo Events//EN", "CALSCALE:GREGORIAN",
      "BEGIN:VEVENT",
      `UID:${e.id}@malmo-events`,
      `DTSTAMP:${stamp}`,
      `DTSTART;VALUE=DATE:${day(e.s)}`,
      `DTEND;VALUE=DATE:${day(addDays(e.e, 1))}`,
      `SUMMARY:${esc(e.title)}`,
      `LOCATION:${esc(e.venue + ", Malmö")}`,
      `DESCRIPTION:${esc(details)}`,
      `URL:${e.url}`,
      "END:VEVENT", "END:VCALENDAR"
    ].join("\r\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
    a.download = `${e.id}.ics`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }

  $("updated").textContent = `Listings last updated ${fmtLong.format(parse(DATA_UPDATED))}.`;
  window.addEventListener("hashchange", () => { readHash(); renderControls(); renderList(); });
  readHash();
  renderControls();
  renderList();
})();
