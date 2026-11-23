(() => {
  const EVENTS = window.MALMO_EVENTS || [];
  const DATA_UPDATED = "2026-11-23";

  const CATEGORIES = {
    christmas: "Christmas markets",
    food:      "Food & drink",
    vintage:   "Flea & vintage",
    art:       "Art",
    design:    "Design & craft",
    music:     "Music",
    stage:     "Opera & stage",
    family:    "Family",
    comedy:    "Comedy",
    sports:    "Sports"
  };

  // ----- Dates: everything is a local calendar day, no time zones -----
  const parse = s => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
  const iso = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
  const isoRe = /^\d{4}-\d{2}-\d{2}$/;
  const FAR = new Date(9999, 0, 1);

  // ?today=YYYY-MM-DD previews the site as of another date.
  const override = new URLSearchParams(location.search).get("today");
  const today = override && isoRe.test(override) ? parse(override)
    : (() => { const n = new Date(); return new Date(n.getFullYear(), n.getMonth(), n.getDate()); })();

  const fmt = o => new Intl.DateTimeFormat("en-GB", o);
  const fmtDow = fmt({ weekday: "short" });
  const fmtMonthYear = fmt({ month: "long", year: "numeric" });
  const fmtShort = fmt({ day: "numeric", month: "short" });
  const fmtLong = fmt({ day: "numeric", month: "long", year: "numeric" });
  const fmtMonth = fmt({ month: "long" });

  // `days` (optional, 0 = Sun … 6 = Sat) marks events that only happen on some weekdays within their run.
  const events = EVENTS.map(e => ({
    ...e,
    s: parse(e.start),
    e: parse(e.end || e.start),
    cats: [e.category, ...(e.tags || [])],
    hay: [e.title, e.venue, e.desc, e.note, e.source, ...[e.category, ...(e.tags || [])].map(c => CATEGORIES[c])].join(" ").toLowerCase()
  })).filter(e => e.e >= today);

  const occursOn = (e, d) => d >= e.s && d <= e.e && (!e.days || e.days.includes(d.getDay()));

  // First day the event is on within [from, to], or null.
  function firstIn(e, from, to) {
    let d = e.s > from ? e.s : from;
    const end = e.e < to ? e.e : to;
    if (!e.days) return d <= end ? d : null;
    for (let i = 0; d <= end && i < 400; i++, d = addDays(d, 1)) if (e.days.includes(d.getDay())) return d;
    return null;
  }

  // ----- Preset ranges -----
  const dow = today.getDay();
  const PRESETS = [
    { id: "all", label: "All upcoming", from: today, to: FAR },
    { id: "today", label: "Today", from: today, to: today },
    { id: "tomorrow", label: "Tomorrow", from: addDays(today, 1), to: addDays(today, 1) },
    // Fri–Sun; on Sat/Sun it's the rest of the current weekend.
    { id: "weekend", label: "This weekend", from: dow === 0 || dow === 6 ? today : addDays(today, 5 - dow), to: addDays(today, dow === 0 ? 0 : 7 - dow) },
    { id: "week", label: "Next 7 days", from: today, to: addDays(today, 6) },
    ...[0, 1, 2, 3].map(i => {
      const from = new Date(today.getFullYear(), today.getMonth() + i, 1);
      return { id: `m${i}`, label: fmtMonth.format(from), from: i === 0 ? today : from, to: new Date(today.getFullYear(), today.getMonth() + i + 1, 0) };
    })
  ];

  // ----- State, mirrored in the URL hash so any view can be shared -----
  const state = { q: "", when: "all", from: null, to: null, cats: new Set(), venue: "" };
  let calMonth = new Date(today.getFullYear(), today.getMonth(), 1);

  function range() {
    if (state.when === "custom") return { from: state.from, to: state.to };
    return PRESETS.find(p => p.id === state.when) || PRESETS[0];
  }

  function readHash() {
    const p = new URLSearchParams(location.hash.slice(1));
    state.q = p.get("q") || "";
    const from = p.get("from"), to = p.get("to");
    if (from && isoRe.test(from)) {
      state.when = "custom";
      state.from = parse(from) < today ? today : parse(from);
      state.to = to && isoRe.test(to) && parse(to) >= state.from ? parse(to) : state.from;
      calMonth = new Date(state.from.getFullYear(), state.from.getMonth(), 1);
    } else {
      state.when = PRESETS.some(r => r.id === p.get("when")) ? p.get("when") : "all";
      state.from = state.to = null;
    }
    state.cats = new Set((p.get("type") || "").split(",").filter(c => CATEGORIES[c]));
    state.venue = p.get("venue") || "";
  }

  function writeHash() {
    const p = new URLSearchParams();
    if (state.q) p.set("q", state.q);
    if (state.when === "custom") {
      p.set("from", iso(state.from));
      if (+state.to !== +state.from) p.set("to", iso(state.to));
    } else if (state.when !== "all") p.set("when", state.when);
    if (state.cats.size) p.set("type", [...state.cats].join(","));
    if (state.venue) p.set("venue", state.venue);
    const h = p.toString();
    history.replaceState(null, "", h ? `#${h}` : location.pathname + location.search);
  }

  // ----- Helpers -----
  const $ = id => document.getElementById(id);
  function el(tag, cls, text) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function opt(label, pressed, onClick) {
    const b = el("button", "opt", label);
    b.type = "button";
    b.setAttribute("aria-pressed", String(pressed));
    b.addEventListener("click", onClick);
    return b;
  }

  // Everything except the date filter — the calendar uses this to show which days have something.
  function matchesNonDate(e) {
    const words = state.q.toLowerCase().split(/\s+/).filter(Boolean);
    return (!state.cats.size || e.cats.some(c => state.cats.has(c))) &&
      (!state.venue || e.venue === state.venue) &&
      words.every(w => e.hay.includes(w));
  }

  // ----- Controls -----
  const whenEl = $("when"), catsEl = $("cats"), venueEl = $("venue"), qEl = $("q");

  function renderControls() {
    whenEl.replaceChildren(...PRESETS.map(r => opt(r.label, state.when === r.id, () => {
      state.when = r.id; state.from = state.to = null;
      calMonth = new Date(r.from.getFullYear(), r.from.getMonth(), 1);
      update();
    })));

    catsEl.replaceChildren(
      opt("All", state.cats.size === 0, () => { state.cats.clear(); update(); }),
      ...Object.entries(CATEGORIES)
        .filter(([id]) => events.some(e => e.cats.includes(id)))
        .map(([id, label]) => opt(label, state.cats.has(id), () => {
          state.cats.has(id) ? state.cats.delete(id) : state.cats.add(id);
          update();
        }))
    );

    venueEl.value = state.venue;
    if (qEl.value !== state.q) qEl.value = state.q;
  }

  [...new Set(events.map(e => e.venue))].sort((a, b) => a.localeCompare(b, "sv"))
    .forEach(v => venueEl.append(new Option(v, v)));
  venueEl.addEventListener("change", () => { state.venue = venueEl.value; update(); });
  let typing;
  qEl.addEventListener("input", () => {
    clearTimeout(typing);
    typing = setTimeout(() => { state.q = qEl.value.trim(); update(false); }, 120);
  });

  // ----- Calendar -----
  const calEl = $("cal"), hintEl = $("cal-hint");
  const lastDay = events.reduce((m, e) => (e.e > m ? e.e : m), today);
  const lastMonth = new Date(lastDay.getFullYear(), lastDay.getMonth(), 1);

  function pickDay(d) {
    if (state.when === "custom" && +state.from === +state.to && d > state.from) {
      state.to = d; // second click on a later day makes a range
    } else if (state.when === "custom" && +state.from === +state.to && +d === +state.from) {
      state.when = "all"; state.from = state.to = null; // click the chosen day again to clear
    } else {
      state.when = "custom"; state.from = state.to = d;
    }
    update();
  }

  // Five equal-width steps between the quietest and busiest day of the month on screen.
  // Per month, because the calendar's job is "which day this month"; the legend prints the
  // month's real end values so the shading is never read against a hidden scale.
  function heatScale(counts) {
    const live = counts.filter(c => c > 0);
    if (!live.length) return { min: 0, max: 0, step: () => 1 };
    const min = Math.min(...live), max = Math.max(...live);
    if (min === max) return { min, max, step: () => 3 };
    return { min, max, step: c => 1 + Math.min(4, Math.floor(((c - min) / (max - min + 1)) * 5)) };
  }

  // Hover / focus tooltip: the count leads, the date and the breakdown by type follow.
  let tipEl = null;
  function showTip(cell, d, dayEvents) {
    if (!tipEl) return;
    const byType = new Map();
    dayEvents.forEach(e => byType.set(e.category, (byType.get(e.category) || 0) + 1));
    const rows = [...byType.entries()].sort((a, b) => b[1] - a[1]);
    const n = dayEvents.length;
    const head = el("div", "cal-tip-head");
    head.append(el("strong", null, `${n} event${n === 1 ? "" : "s"}`), el("span", null, fmtLong.format(d)));
    const list = el("div", "cal-tip-rows");
    rows.slice(0, 5).forEach(([cat, c]) => {
      const row = el("div", "cal-tip-row");
      row.append(el("span", null, CATEGORIES[cat] || cat), el("span", "num", String(c)));
      list.append(row);
    });
    if (rows.length > 5) list.append(el("div", "cal-tip-more", `+ ${rows.length - 5} more types`));
    tipEl.replaceChildren(head, ...(n ? [list] : []));
    tipEl.hidden = false;
    // Sit above the cell, kept inside the calendar's width.
    const box = calEl.getBoundingClientRect(), c = cell.getBoundingClientRect();
    const w = tipEl.offsetWidth;
    const left = Math.min(Math.max(0, c.left - box.left + c.width / 2 - w / 2), box.width - w);
    tipEl.style.left = `${left}px`;
    tipEl.style.top = `${c.top - box.top - tipEl.offsetHeight - 8}px`;
  }
  function hideTip() { if (tipEl) tipEl.hidden = true; }

  function renderCalendar() {
    const y = calMonth.getFullYear(), m = calMonth.getMonth();
    const r = range();
    const pool = events.filter(matchesNonDate);

    const head = el("div", "cal-head");
    head.append(el("span", "cal-title", fmtMonthYear.format(calMonth)));
    const nav = el("div", "cal-nav");
    const prev = el("button", null, "‹"), next = el("button", null, "›");
    prev.type = next.type = "button";
    prev.setAttribute("aria-label", "Previous month");
    next.setAttribute("aria-label", "Next month");
    prev.disabled = y === today.getFullYear() && m === today.getMonth();
    next.disabled = calMonth >= lastMonth;
    prev.addEventListener("click", () => { calMonth = new Date(y, m - 1, 1); renderCalendar(); });
    next.addEventListener("click", () => { calMonth = new Date(y, m + 1, 1); renderCalendar(); });
    nav.append(prev, next);
    head.append(nav);

    const grid = el("div", "cal-grid");
    ["M", "T", "W", "T", "F", "S", "S"].forEach(d => grid.append(el("span", "cal-dow", d)));
    const lead = (new Date(y, m, 1).getDay() + 6) % 7; // Monday first
    for (let i = 0; i < lead; i++) grid.append(el("span"));

    // Heatmap: each day's fill is one step of a single-hue (indigo) ramp, light → dark = fewer → more.
    // The scale comes from every upcoming day under the current filters, so it stays
    // put while you page through months and re-scales when you filter.
    const daysInMonth = new Date(y, m + 1, 0).getDate();
    const perDay = Array.from({ length: daysInMonth }, (_, i) => {
      const d = new Date(y, m, i + 1);
      return d < today ? [] : pool.filter(e => occursOn(e, d));
    });
    const scale = heatScale(perDay.map(list => list.length));
    for (let n = 1; n <= daysInMonth; n++) {
      const d = new Date(y, m, n);
      const b = el("button", "cal-day");
      b.type = "button";
      b.append(el("span", null, n));
      const dayEvents = perDay[n - 1];
      const count = dayEvents.length;
      b.setAttribute("aria-label", `${fmtLong.format(d)}, ${count} event${count === 1 ? "" : "s"}`);
      if (d < today) b.disabled = true;
      else if (!count) b.classList.add("quiet");
      else b.dataset.heat = scale.step(count);
      if (+d === +today) b.classList.add("today");
      if (state.when !== "all" && r.to !== FAR && d >= r.from && d <= r.to) {
        b.classList.add(+d === +r.from || +d === +r.to ? "selected" : "in-range");
        b.setAttribute("aria-pressed", "true");
      }
      b.addEventListener("click", () => pickDay(d));
      if (d >= today) {
        const show = () => showTip(b, d, dayEvents);
        b.addEventListener("pointerenter", show);
        b.addEventListener("focus", show);
        b.addEventListener("pointerleave", hideTip);
        b.addEventListener("blur", hideTip);
      }
      grid.append(b);
    }

    // Scale legend: the five steps with the real end values under them.
    const legend = el("div", "cal-legend");
    legend.setAttribute("aria-label", scale.max
      ? `Shading shows events per day this month, from ${scale.min} to ${scale.max}`
      : "No events this month under these filters");
    if (scale.max) {
      legend.append(el("span", "cal-legend-end", String(scale.min)));
      const sw = el("span", "cal-legend-steps");
      const steps = scale.min === scale.max ? [3] : [1, 2, 3, 4, 5];
      steps.forEach(i => { const s = el("span"); s.dataset.heat = i; sw.append(s); });
      legend.append(sw, el("span", "cal-legend-end", scale.min === scale.max ? "a day this month" : `${scale.max} a day this month`));
    } else {
      legend.append(el("span", "cal-legend-end", "Nothing this month"));
    }
    tipEl = el("div", "cal-tip");
    tipEl.setAttribute("role", "tooltip");
    tipEl.hidden = true;
    calEl.replaceChildren(head, grid, legend, tipEl);

    if (state.when === "custom") {
      const txt = +state.from === +state.to
        ? `${fmtLong.format(state.from)}. Pick a later day to make a range.`
        : `${fmtShort.format(state.from)} – ${fmtShort.format(state.to)}`;
      const clear = el("button", null, "Clear");
      clear.type = "button";
      clear.addEventListener("click", () => { state.when = "all"; state.from = state.to = null; update(); });
      hintEl.replaceChildren(txt, clear);
    } else {
      hintEl.textContent = "Darker days have more on. Pick a day, then a later day for a range.";
    }
  }

  // ----- List -----
  function dateLine(e) {
    const when = +e.s === +e.e ? fmtLong.format(e.s)
      : e.s < today ? `Until ${fmtShort.format(e.e)}`
      : `${fmtShort.format(e.s)} – ${fmtShort.format(e.e)}`;
    return when;
  }

  function item(e, shown) {
    const c = el("article", "item");

    const d = el("div", "date");
    d.setAttribute("aria-hidden", "true");
    d.append(el("span", "day", shown.getDate()), el("span", "dow", fmtDow.format(shown)));

    const body = el("div");
    body.append(el("h3", null, e.title));
    const meta = el("p", "meta");
    [dateLine(e), e.times, e.venue, e.price].filter(Boolean).forEach(x => meta.append(el("span", null, x)));
    body.append(meta);
    if (e.desc) body.append(el("p", "desc", e.desc));

    const tags = el("div", "tags");
    e.cats.forEach(cat => tags.append(el("span", "tag", CATEGORIES[cat] || cat)));
    if (e.note) tags.append(el("span", "tag note", e.note));
    body.append(tags);

    const acts = el("div", "actions");
    const a = el("a", null, "Details & tickets");
    a.href = e.url; a.target = "_blank"; a.rel = "noopener";
    const ics = el("button", null, "Add to calendar");
    ics.type = "button";
    ics.addEventListener("click", () => downloadIcs(e));
    acts.append(a, ics, el("span", "src", e.source));
    body.append(acts);

    c.append(d, body);
    return c;
  }

  function renderList() {
    const list = $("list");
    const r = range();
    const from = r.from > today ? r.from : today;

    // Place each event on the first day it's on inside the chosen range.
    const placed = events
      .filter(matchesNonDate)
      .map(e => [e, firstIn(e, from, r.to)])
      .filter(([, d]) => d)
      .sort((a, b) => a[1] - b[1] || a[0].e - b[0].e || a[0].title.localeCompare(b[0].title));

    $("count").textContent = `${placed.length} event${placed.length === 1 ? "" : "s"}`;

    if (!placed.length) {
      const box = el("div", "list-empty");
      box.append(el("p", null, "Nothing matches these filters."));
      const reset = el("button", null, "Clear filters");
      reset.type = "button";
      reset.addEventListener("click", () => {
        state.q = ""; state.when = "all"; state.from = state.to = null; state.cats.clear(); state.venue = "";
        update();
      });
      box.append(reset);
      list.replaceChildren(box);
      return;
    }

    const groups = new Map();
    placed.forEach(([e, d]) => {
      const k = +d === +today ? "Today"
        : +d === +addDays(today, 1) ? "Tomorrow"
        : fmtMonthYear.format(d);
      if (!groups.has(k)) groups.set(k, []);
      groups.get(k).push([e, d]);
    });

    const frag = document.createDocumentFragment();
    groups.forEach((evs, name) => {
      const g = el("section", "group");
      const h = el("h2", null, name);
      h.append(el("small", null, String(evs.length)));
      g.append(h, ...evs.map(([e, d]) => item(e, d)));
      frag.append(g);
    });
    list.replaceChildren(frag);
  }

  // Small screens: the calendar and filters fold away; the toggle shows what's active.
  const sideEl = document.querySelector(".side"), toggleEl = $("toggle");
  toggleEl.addEventListener("click", () => {
    const open = sideEl.classList.toggle("open");
    toggleEl.setAttribute("aria-expanded", String(open));
    toggleEl.querySelector(".toggle-mark").textContent = open ? "－" : "＋";
  });
  function renderToggle() {
    const r = range();
    const bits = [];
    if (state.when === "custom") bits.push(+r.from === +r.to ? fmtShort.format(r.from) : `${fmtShort.format(r.from)} – ${fmtShort.format(r.to)}`);
    else if (state.when !== "all") bits.push(r.label);
    state.cats.forEach(c => bits.push(CATEGORIES[c]));
    if (state.venue) bits.push(state.venue);
    $("toggle-sum").textContent = bits.join(" · ");
  }

  function update(rerenderControls = true) {
    writeHash();
    if (rerenderControls) renderControls();
    renderCalendar();
    renderToggle();
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

  // ----- Theme: Auto follows the system, Light/Dark are remembered on this device -----
  const themeBtns = [...document.querySelectorAll("[data-theme-choice]")];
  function readTheme() {
    try { const t = localStorage.getItem("theme"); return t === "light" || t === "dark" ? t : "auto"; }
    catch (e) { return "auto"; }
  }
  function applyTheme(choice) {
    if (choice === "auto") delete document.documentElement.dataset.theme;
    else document.documentElement.dataset.theme = choice;
    try { choice === "auto" ? localStorage.removeItem("theme") : localStorage.setItem("theme", choice); } catch (e) {}
    themeBtns.forEach(b => b.setAttribute("aria-pressed", String(b.dataset.themeChoice === choice)));
  }
  themeBtns.forEach(b => b.addEventListener("click", () => applyTheme(b.dataset.themeChoice)));
  applyTheme(readTheme());

  $("updated").textContent = `Listings last updated ${fmtLong.format(parse(DATA_UPDATED))}.`;
  window.addEventListener("hashchange", () => { readHash(); renderControls(); renderCalendar(); renderToggle(); renderList(); });
  readHash();
  renderControls();
  renderCalendar();
  renderToggle();
  renderList();
})();
