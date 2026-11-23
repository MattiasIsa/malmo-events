// Event data for Malmö Events.
// Compiled 2026-11-22 from public listings (organisers, ticket sites, aggregators).
// Dates can change — every event links to its source; check it before buying tickets.
//
// Fields:
//   id        unique slug
//   title     event name
//   start     first date, YYYY-MM-DD
//   end       last date (optional, for runs/series)
//   times     human-readable time info (optional)
//   venue     venue name
//   category  one of: christmas | food | vintage | art | design | music | stage | family | comedy | sports
//   tags      extra categories the event also shows up under (optional)
//   days      weekdays it runs on within start–end, 0 = Sun … 6 = Sat (optional)
//   price     human-readable price (optional)
//   note      extra info, e.g. "Sold out" (optional)
//   desc      short description
//   url       source / ticket link
//   source    name of the source site

window.MALMO_EVENTS = [
  // ---------- Christmas & markets ----------
  {
    id: "julmarknad-gustav-adolfs-torg",
    title: "Christmas market on Gustav Adolfs torg",
    start: "2026-11-26", end: "2026-12-20", days: [4, 5, 6, 0],
    times: "Thu–Sun, 11:00–18:00",
    venue: "Gustav Adolfs torg", category: "christmas", tags: ["design", "food"], price: "Free",
    desc: "Malmö City's Advent-weekend market with local and regional crafts, gifts, food and drink. Traders change from weekend to weekend.",
    url: "https://julmarknaderna.se/julmarknad-pa-gustav-adolfs-torg/", source: "julmarknaderna.se"
  },
  {
    id: "julmarknad-centralstation",
    title: "Christmas market at Malmö Centralstation",
    start: "2026-11-26", end: "2026-11-29",
    venue: "Malmö Centralstation", category: "christmas",
    desc: "A four-day Christmas market inside the central station.",
    url: "https://www.utforskamalmo.se/julmarknad-i-malmo/", source: "utforskamalmo.se"
  },
  {
    id: "jul-pa-slottet",
    title: "Jul på Slottet — Christmas at Malmö museum",
    start: "2026-11-29",
    times: "10:00–17:00",
    venue: "Malmöhus slott & Kommendanthuset", category: "christmas", tags: ["design", "family"],
    price: "Free market area",
    desc: "Crafts, music, Lucia and family activities around the castle. New this year: more designers and makers via Among Makers. Museum entry is charged as normal.",
    url: "https://malmo.se/Aktuellt/Artiklar-Malmo-stad/2026-11-17-Jul-pa-Slottet-2026.html", source: "malmo.se"
  },
  {
    id: "textiltryck-julbazaar",
    title: "Textiltryck Malmö Christmas bazaar",
    start: "2026-12-04", end: "2026-12-06",
    times: "Fri from 12:00, hours vary by day",
    venue: "Textiltryck Malmö, Korsgatan 6", category: "christmas", tags: ["design"],
    note: "@inmalmo_ lists 5–6 Dec",
    desc: "The annual Christmas bazaar in a textile-printing workshop, with printed textiles and crafts.",
    url: "https://julmarknader.se/julmarknader/i/malmo", source: "Julportalen"
  },
  {
    id: "kyndelsmarknad",
    title: "Kyndelsmarknad",
    start: "2026-12-05", times: "11:00–19:00",
    venue: "Lykttändargränd (Holmgången)", category: "christmas", tags: ["design"],
    desc: "Fantasy- and LARP-inspired Christmas market in an inner-city alley, with traders in costume.",
    url: "https://www.ilovemalmoe.se/jul-malmo-nojen.php", source: "ilovemalmoe.se"
  },
  {
    id: "bondens-egen-julmarknad",
    title: "Bondens Egen Julmarknad",
    start: "2026-12-12", times: "09:00–14:00",
    venue: "Drottningtorget", category: "christmas", tags: ["food"],
    desc: "Farmers' Christmas market where local growers sell their own produce.",
    url: "https://www.ilovemalmoe.se/jul-malmo-nojen.php", source: "ilovemalmoe.se"
  },
  {
    id: "luciakortege",
    title: "Lucia procession",
    start: "2026-12-13",
    times: "Departs 17:25 · balcony concert 18:00",
    venue: "Malmöhus slott → Stortorget", category: "christmas", tags: ["music", "family"], price: "Free",
    desc: "The Lucia procession leaves Malmöhus Castle and ends with a concert from the balcony of Residenset on Stortorget.",
    url: "https://www.ilovemalmoe.se/jul-malmo-nojen.php", source: "ilovemalmoe.se"
  },

  // ---------- Christmas markets from @inmalmo_ (post of 19 Nov 2026) ----------
  {
    id: "guns-xmas", title: "Guns Christmas market",
    start: "2026-11-27", times: "17:00–21:00",
    venue: "Guns", category: "christmas",
    desc: "An evening Christmas market.",
    url: "https://www.instagram.com/inmalmo_/p/Df7PuTiCtNI/", source: "@inmalmo_ on Instagram"
  },
  {
    id: "backa-kaken-xmas", title: "Backa Kåkens Christmas bazaar",
    start: "2026-11-28", times: "12:00–16:00",
    venue: "Backa Kåken", category: "christmas", tags: ["food"],
    desc: "Christmas bazaar with seasonal food and drink.",
    url: "https://www.instagram.com/inmalmo_/p/Df7PuTiCtNI/", source: "@inmalmo_ on Instagram"
  },
  {
    id: "limhamn-xmas", title: "Limhamn Christmas market",
    start: "2026-11-28", end: "2026-11-29", times: "Sat 11:00–16:00, hours vary by day",
    venue: "Limhamns torg", category: "christmas", tags: ["food"],
    desc: "Local producers with preserves, baked goods and Christmas treats.",
    url: "https://www.instagram.com/inmalmo_/p/Df7PuTiCtNI/", source: "@inmalmo_ on Instagram"
  },
  {
    id: "stpln-xmas", title: "STPLN Christmas market",
    start: "2026-11-28", end: "2026-11-29", times: "11:00–16:00",
    venue: "STPLN", category: "christmas", tags: ["design"],
    desc: "Makers' market with ceramics and handmade goods at the creative house in Västra Hamnen.",
    url: "https://www.instagram.com/inmalmo_/p/Df7PuTiCtNI/", source: "@inmalmo_ on Instagram"
  },
  {
    id: "mitt-mollan-xmas", title: "Mitt Möllan Christmas market",
    start: "2026-11-28", end: "2026-11-29", times: "12:00–17:00",
    venue: "Mitt Möllan", category: "christmas", tags: ["design"],
    desc: "Christmas market with ceramics and local makers.",
    url: "https://www.instagram.com/inmalmo_/p/Df7PuTiCtNI/", source: "@inmalmo_ on Instagram"
  },
  {
    id: "sarto-solidar-xmas", title: "Sarto at Solidar Christmas market",
    start: "2026-11-29", times: "11:00–17:00",
    venue: "Solidar", category: "christmas", tags: ["food"],
    desc: "Christmas market hosted by Sarto.",
    url: "https://www.instagram.com/inmalmo_/p/Df7PuTiCtNI/", source: "@inmalmo_ on Instagram"
  },
  {
    id: "lyran-xmas", title: "Lyran Christmas market",
    start: "2026-11-29", times: "12:00–18:00",
    venue: "Lyran", category: "christmas",
    desc: "Neighbourhood Christmas market.",
    url: "https://www.instagram.com/inmalmo_/p/Df7PuTiCtNI/", source: "@inmalmo_ on Instagram"
  },
  {
    id: "johannesplan-xmas", title: "Johannesplan Christmas market",
    start: "2026-12-03", end: "2026-12-06", times: "From 14:00, hours vary by day",
    venue: "Johannesplan", category: "christmas", tags: ["food", "vintage", "family"],
    desc: "Four days of local crafts, second hand, baked goods and Christmas treats, with activities for the whole family.",
    url: "https://www.instagram.com/inmalmo_/p/Df7PuTiCtNI/", source: "@inmalmo_ on Instagram"
  },
  {
    id: "fryshuset-xmas", title: "Fryshuset's Winter Christmas market",
    start: "2026-12-05", times: "12:00–16:00",
    venue: "Fryshuset", category: "christmas",
    desc: "Winter Christmas market at Fryshuset.",
    url: "https://www.instagram.com/inmalmo_/p/Df7PuTiCtNI/", source: "@inmalmo_ on Instagram"
  },
  {
    id: "kulladal-xmas", title: "Kulladal Christmas market",
    start: "2026-12-05", times: "10:00–15:00",
    venue: "Kulladal", category: "christmas",
    desc: "Neighbourhood Christmas market in Kulladal.",
    url: "https://www.instagram.com/inmalmo_/p/Df7PuTiCtNI/", source: "@inmalmo_ on Instagram"
  },
  {
    id: "mima-xmas", title: "Mima galleri Christmas market",
    start: "2026-12-05", end: "2026-12-06", times: "From 11:00, hours vary by day",
    venue: "Mima galleri", category: "christmas", tags: ["art", "design"],
    desc: "Candlelit gallery market with ceramics and art.",
    url: "https://www.instagram.com/inmalmo_/p/Df7PuTiCtNI/", source: "@inmalmo_ on Instagram"
  },
  {
    id: "far-i-hatten-xmas", title: "Far i Hatten Christmas market",
    start: "2026-12-06", times: "11:00–17:00",
    venue: "Far i Hatten, Folkets Park", category: "christmas", tags: ["design"],
    desc: "Handmade knitwear, crafts and gifts.",
    url: "https://www.instagram.com/inmalmo_/p/Df7PuTiCtNI/", source: "@inmalmo_ on Instagram"
  },
  {
    id: "freden-xmas", title: "Freden Christmas market",
    start: "2026-12-06", times: "12:00–22:00",
    venue: "Freden", category: "christmas", tags: ["food"],
    desc: "Christmas market that runs into the evening.",
    url: "https://www.instagram.com/inmalmo_/p/Df7PuTiCtNI/", source: "@inmalmo_ on Instagram"
  },
  {
    id: "ostra-grevie-xmas", title: "Östra Grevie Christmas market",
    start: "2026-12-06", times: "11:00–16:00",
    venue: "Brändan, Folkets Park", category: "christmas", tags: ["design"],
    desc: "Students from Östra Grevie folk high school sell crafts and Christmas gifts on the Brändan dance floor in Folkets Park.",
    url: "https://www.instagram.com/inmalmo_/p/Df7PuTiCtNI/", source: "@inmalmo_ on Instagram"
  },
  {
    id: "inmalmo-skewed-popup", title: "In Malmö × Skewed Christmas pop-up",
    start: "2026-12-12", times: "10:00–14:00",
    venue: "Skewed Studios", category: "christmas", tags: ["design"],
    desc: "Christmas gifts from small businesses, the limited In Malmö merch collection, drinks and music.",
    url: "https://www.instagram.com/inmalmo_/p/DfrzHC4CjTs/", source: "@inmalmo_ on Instagram"
  },
  {
    id: "sibbarp-xmas", title: "Sibbarps Kallbadhus Christmas market",
    start: "2026-12-12", end: "2026-12-13", times: "12:00–16:00",
    venue: "Sibbarps Kallbadhus", category: "christmas",
    desc: "Christmas market at the cold-water bathhouse by the sea.",
    url: "https://www.instagram.com/inmalmo_/p/Df7PuTiCtNI/", source: "@inmalmo_ on Instagram"
  },

  // ---------- More Christmas markets in Malmö (Julportalen, julmarknad.nu, Visit Malmö) ----------
  {
    id: "mollevangstorget-xmas", title: "Christmas theme market on Möllevångstorget",
    start: "2026-11-28", times: "09:00–15:00",
    venue: "Möllevångstorget", category: "christmas", tags: ["food"],
    desc: "Christmas edition of the square's recurring theme markets.",
    url: "https://julmarknader.se/julmarknader/i/malmo", source: "Julportalen"
  },
  {
    id: "st-pauli-xmas", title: "Christmas market at S:t Pauli kyrka",
    start: "2026-11-29", times: "14:00–15:30",
    venue: "S:t Pauli kyrka", category: "christmas",
    desc: "A small church Christmas market. Proceeds go to Act Svenska kyrkan.",
    url: "https://julmarknader.se/julmarknader/i/malmo", source: "Julportalen"
  },
  {
    id: "husie-xmas", title: "Christmas market at Husie parish hall",
    start: "2026-11-29", times: "11:00–13:00",
    venue: "Husie församlingshem", category: "christmas", tags: ["food", "design"],
    desc: "Wreaths and crafts from the sewing circle, gingerbread baking, fika and glögg.",
    url: "https://julmarknader.se/julmarknader/i/malmo", source: "Julportalen"
  },
  {
    id: "brukshundklubb-xmas", title: "Christmas market at Malmö Brukshundklubb",
    start: "2026-11-29", times: "11:00–14:00",
    venue: "Malmö Brukshundklubb, Limhamn", category: "christmas",
    desc: "A Christmas market for dog lovers.",
    url: "https://www.julmarknad.nu/julmarknader-malmo/", source: "julmarknad.nu"
  },
  {
    id: "katrinetorp-xmas", title: "Katrinetorp Landeri Christmas market",
    start: "2026-12-04", end: "2026-12-06", times: "Fri from 11:00, hours vary by day",
    venue: "Katrinetorp Landeri", category: "christmas", tags: ["design", "food"],
    desc: "One of Malmö's biggest Christmas markets, held at the old country estate in eastern Malmö, with lots of quality exhibitors.",
    url: "https://www.julmarknad.nu/julmarknader-malmo/", source: "julmarknad.nu"
  },
  {
    id: "dreja-greja-xmas", title: "Dreja och Greja Studio Christmas market",
    start: "2026-12-05", end: "2026-12-06", times: "11:00–15:00",
    venue: "Dreja och Greja Studio, Kungsgatan 7", category: "christmas", tags: ["design"],
    desc: "Christmas market in a ceramics studio.",
    url: "https://www.julmarknad.nu/julmarknader-malmo/", source: "julmarknad.nu"
  },
  {
    id: "saluhall-xmas", title: "Malmö Saluhall Christmas market",
    start: "2026-12-06", times: "11:00–17:00",
    venue: "Malmö Saluhall", category: "christmas", tags: ["food", "design"],
    desc: "The courtyard becomes a Christmas market with delicacies, gifts and decorations, plus local makers selling food, ceramics, flowers and wreaths. Clemens pours tasters of this year's apple glögg and Malmö Latinskola plays Advent music.",
    url: "https://www.instagram.com/malmosaluhall/p/DgDtjCexEKk/", source: "@malmosaluhall on Instagram"
  },
  {
    id: "brogatan-xmas", title: "Christmas market on Brogatan",
    start: "2026-12-06", times: "12:00–18:00",
    venue: "Brogatan 12", category: "christmas", tags: ["vintage", "design"],
    desc: "Second hand, crafts and prints.",
    url: "https://julmarknader.se/julmarknader/i/malmo", source: "Julportalen"
  },
  {
    id: "alletorget-xmas", title: "Christmas market on Allétorget, Hyllie",
    start: "2026-12-06",
    venue: "Allétorget, Hyllie", category: "christmas", tags: ["vintage", "family"],
    desc: "Santa, a Christmas flea market and crafts for kids.",
    url: "https://www.mynewsdesk.com/se/destinationssamverkan-malmo-ab/pressreleases/julen-i-malmoe-2026-fraan-moellanfynd-till-filmmys-3478530", source: "Visit Malmö"
  },
  {
    id: "caroli-xmas", title: "Caroli Christmas market",
    start: "2026-12-12", times: "10:00–16:00",
    venue: "Caroli torg", category: "christmas",
    desc: "A small market on the square between Caroli kyrka and the Caroli shopping centre, held on the same day as Bondens Egen on Drottningtorget.",
    url: "https://julmarknader.se/julmarknader/i/malmo", source: "Julportalen"
  },
  {
    id: "mitt-mollan-ceramics", title: "Ceramics Christmas market at Mitt Möllan",
    start: "2026-12-12",
    venue: "Mitt Möllan", category: "christmas", tags: ["design"],
    desc: "The ceramicists take over Mitt Möllan. Combine it with lunch in the food court.",
    url: "https://www.mynewsdesk.com/se/destinationssamverkan-malmo-ab/pressreleases/julen-i-malmoe-2026-fraan-moellanfynd-till-filmmys-3478530", source: "Visit Malmö"
  },

  // ---------- Nearby Christmas markets (under 20 km from Malmö) ----------
  {
    id: "kulturen-julstok", title: "Julstök at Kulturen",
    start: "2026-11-27", end: "2026-11-29", times: "Fri from 16:00, hours vary by day",
    venue: "Kulturen, Lund", category: "christmas", tags: ["design", "food"],
    note: "Lund",
    desc: "The museum quarter fills with a Christmas market of crafts and delicacies for three days.",
    url: "https://julmarknader.se/julmarknader/i/malmo", source: "Julportalen"
  },
  {
    id: "borgeby-xmas", title: "Christmas market at Borgeby slott",
    start: "2026-11-28", end: "2026-11-29", times: "11:00–16:00",
    venue: "Borgeby slott, Bjärred", category: "christmas", tags: ["family"],
    note: "Bjärred",
    desc: "Stalls and crafts at the castle, with dancing round the tree, pony rides and Santa.",
    url: "https://julmarknader.se/julmarknader/i/malmo", source: "Julportalen"
  },
  {
    id: "vinterlund-xmas", title: "Vinterlund Christmas market",
    start: "2026-12-05", times: "10:00–17:00",
    venue: "Domkyrkoplatsen, Lund", category: "christmas",
    note: "Lund",
    desc: "Traditional market by the cathedral with about fifty traders, choirs and orchestras.",
    url: "https://julmarknader.se/julmarknader/i/malmo", source: "Julportalen"
  },
  {
    id: "kabbarp-xmas", title: "Christmas market at Kabbarp",
    start: "2026-12-05", end: "2026-12-06", times: "11:00–16:00",
    venue: "Kabbarp, Åkarp", category: "christmas", tags: ["food"],
    note: "Åkarp",
    desc: "Advent market in Kabbarp's garden, shop and restaurant setting. Free entry and parking.",
    url: "https://julmarknader.se/julmarknader/i/malmo", source: "Julportalen"
  },
  {
    id: "vellinge-bryggeri-xmas", title: "Christmas market at the brewery",
    start: "2026-12-12", times: "11:00–16:00",
    venue: "Vellinge Bryggeri", category: "christmas", tags: ["food"],
    note: "Vellinge", price: "Free",
    desc: "Christmas market in the brewery, run by two local beer brewers.",
    url: "https://julmarknader.se/julmarknader/i/malmo", source: "Julportalen"
  },
  {
    id: "jakriborg-xmas", title: "Jakriborg Christmas market",
    start: "2026-12-12", end: "2026-12-20", days: [6, 0], times: "12–13 & 19–20 Dec, from 10:00",
    venue: "Jakriborg, Hjärup", category: "christmas",
    note: "Hjärup",
    desc: "Two weekends of Christmas market in the medieval-style streets of Jakriborg.",
    url: "https://julmarknader.se/julmarknader/i/malmo", source: "Julportalen"
  },

  {
    id: "folkets-park-isbanor", title: "Ice rinks in Folkets Park",
    start: "2026-11-27", end: "2027-01-31",
    venue: "Folkets Park", category: "family", tags: ["christmas"],
    price: "Free",
    desc: "The park's outdoor ice rinks are open all winter.",
    url: "https://www.julmarknad.nu/julmarknader-malmo/", source: "Malmö stad via julmarknad.nu"
  },

  // ---------- Lucia & church Christmas concerts ----------
  {
    id: "latinskolan-st-pauli", title: "Malmö Latinskola Christmas concert at S:t Pauli",
    start: "2026-12-08", times: "18:00",
    venue: "S:t Pauli kyrka", category: "music", tags: ["christmas"],
    desc: "The school's Christmas concert in the hexagonal S:t Pauli church.",
    url: "https://malmo.se/Uppleva-och-gora/Evenemang/Fira-hogtider-i-Malmo/Lucia.html", source: "malmo.se"
  },
  {
    id: "lucia-st-pauli", title: "Lucia concert at S:t Pauli kyrka",
    start: "2026-12-12",
    venue: "S:t Pauli kyrka", category: "music", tags: ["christmas"],
    note: "Sold out",
    desc: "Lucia concert in S:t Pauli church.",
    url: "https://www.spelning.se/malmo/lucia", source: "spelning.se"
  },
  {
    id: "lucia-nostra-st-johannes", title: "Det brinner i tusen kransar — Lucia with Nostra",
    start: "2026-12-12", times: "18:00",
    venue: "S:t Johannes kyrka", category: "music", tags: ["christmas"],
    price: "Free",
    desc: "Lucia concert with the Nostra vocal ensemble.",
    url: "https://julmarknader.se/julkonsert/det-brinner-i-tusen-kransar-lucia-malmo-2026-12-12", source: "Julportalen"
  },
  {
    id: "lucia-st-andreas", title: "Lucia concert at S:t Andreas kyrka",
    start: "2026-12-13", times: "18:00",
    venue: "S:t Andreas kyrka", category: "music", tags: ["christmas"],
    note: "Tickets via Svenska kyrkan",
    desc: "S:t Petri parish's Lucia concert, open to everyone.",
    url: "https://www.svenskakyrkan.se/malmo/nyheter/biljettkop-till-malmos-luciakonserter", source: "Svenska kyrkan"
  },
  {
    id: "lucia-st-matteus", title: "Luciahögtid at S:t Matteus kyrka",
    start: "2026-12-13", times: "18:30",
    venue: "S:t Matteus kyrka", category: "music", tags: ["christmas"],
    price: "50 SEK",
    desc: "Lucia celebration in the butterfly-shaped church.",
    url: "https://www.spelning.se/malmo/lucia", source: "spelning.se"
  },

  // ---------- More art, design & creative ----------
  {
    id: "driv-hunger-palladium", title: "Driv Hunger — dance by Malin Hellkvist Sellén",
    start: "2026-11-23", end: "2026-11-24",
    times: "23 Nov 19:30 · 24 Nov 18:00",
    venue: "Palladium", category: "stage", tags: ["art"],
    desc: "A dance work by choreographer Malin Hellkvist Sellén.",
    url: "https://skaneplus.se/julen-i-malmo-2026-guide-till-julmarknader-unika-klappar-och-lokal-julstamning/", source: "Skåne Plus"
  },
  {
    id: "inkonst-molntriptyk", title: "Molntriptyk — Olof Runsten / Dramageddon",
    start: "2026-12-11", end: "2026-12-13",
    times: "11 Dec 19:00",
    venue: "Inkonst", category: "stage", tags: ["art"],
    desc: "Performance at Inkonst.",
    url: "https://www.tickster.com/se/sv/events/by/bkz8z545crn3x5m/inkonst", source: "Tickster"
  },
  {
    id: "rostrum-sahlstrom", title: "Berit Sahlström — Med egna ögon: Vävda bilder",
    start: "2026-11-21", end: "2026-12-13",
    venue: "Galleri Rostrum", category: "art", tags: ["design"],
    desc: "Woven pictures by Berit Sahlström.",
    url: "https://rostrum.nu/", source: "rostrum.nu"
  },
  {
    id: "rostrum-members", title: "New members' group show",
    start: "2026-12-17", end: "2027-01-03",
    venue: "Galleri Rostrum", category: "art",
    desc: "Group exhibition of the gallery's newest member artists.",
    url: "https://rostrum.nu/", source: "rostrum.nu"
  },
  {
    id: "wallner-pietila", title: "Pauliina Pietilä",
    start: "2026-11-14", end: "2026-12-19",
    venue: "Galleri Thomas Wallner", category: "art",
    desc: "Exhibition at a gallery focused on new young artists from Scandinavia, Europe and the US.",
    url: "https://www.gallerithomaswallner.com/", source: "gallerithomaswallner.com"
  },
  {
    id: "kallarvalv-olprovning", title: "Classic beer tasting",
    start: "2026-12-03", times: "17:00",
    venue: "Källarvalv, Västra Hamnen", category: "food",
    desc: "A guided beer tasting.",
    url: "https://www.afterworken.se/olprovning/malmo/", source: "afterworken.se"
  },

  // ---------- Flea & vintage ----------
  {
    id: "eat-drink-vintage-xmas", title: "Eat Drink Vintage — Xmas Edition",
    start: "2026-12-06",
    venue: "Matverkstaden, Lokstallarna", category: "vintage", tags: ["food", "christmas"],
    desc: "Vintage and second-hand finds, food and music in the old railway workshops.",
    url: "https://www.mynewsdesk.com/se/destinationssamverkan-malmo-ab/pressreleases/julen-i-malmoe-2026-fraan-moellanfynd-till-filmmys-3478530", source: "Visit Malmö"
  },

  // ---------- Workshops ----------
  {
    id: "rejul-workshop", title: "RE:JUL — remake workshop",
    start: "2026-11-28",
    venue: "Medborgarskolan, Malmö", category: "design", tags: ["christmas", "vintage"],
    note: "Course, booking needed",
    desc: "Make personal Christmas presents from reused materials. 12 hours in total.",
    url: "https://www.kurser.se/kurs/hantverk-malmo", source: "kurser.se"
  },
  {
    id: "julkeramik-kurs", title: "Christmas ceramics course",
    start: "2026-12-12",
    venue: "Medborgarskolan, Malmö", category: "design", tags: ["christmas"],
    price: "From 1,350 SEK", note: "Course, booking needed",
    desc: "Clay with a Christmas theme at a relaxed pace. 12 hours in total.",
    url: "https://www.kurser.se/kurs/keramik-malmo", source: "kurser.se"
  },
  {
    id: "fdc-common-grounds", title: "Common Grounds — exhibition",
    start: "2027-01-21", end: "2027-04-04",
    venue: "Form/Design Center", category: "design",
    desc: "22 makers, designers and researchers explore what bio-based materials reveal about people, matter and place.",
    url: "https://www.formdesigncenter.com/en", source: "formdesigncenter.com"
  },

  // ---------- Design & craft ----------
  {
    id: "malmo-design-market", title: "Malmö Design Market",
    start: "2026-12-02", end: "2026-12-23", times: "Sat & Sun, 11:00–17:00",
    venue: "Norregatan 1", category: "design", tags: ["christmas", "art"],
    desc: "Artist-led Christmas design market selling work by designers and artists from Skåne.",
    url: "https://malmodesignmarket.se/", source: "malmodesignmarket.se"
  },
  {
    id: "fdc-glod", title: "Glöd — exhibition",
    start: "2026-11-14", end: "2027-01-09",
    venue: "Form/Design Center", category: "design",
    desc: "Exhibition at Malmö's meeting place for architecture, design and crafts.",
    url: "https://www.formdesigncenter.com/en", source: "formdesigncenter.com"
  },
  {
    id: "fdc-imperfect-assemblies", title: "Imperfect Assemblies & Malmö in the Making",
    start: "2026-09-04", end: "2027-01-09",
    venue: "Form/Design Center", category: "design",
    desc: "Exhibitions on how the city has grown and changed: architecture, urban development and democratic spaces.",
    url: "https://formdesigncenter.com/en/program", source: "formdesigncenter.com"
  },
  {
    id: "fdc-mdd-gathering", title: "Malmö Design Days Community Gathering",
    start: "2026-12-01", times: "17:30–19:30",
    venue: "Form/Design Center", category: "design",
    price: "Open to all",
    desc: "Meet-up ahead of Malmö Design Days, the design festival returning 19–22 May 2027.",
    url: "https://formdesigncenter.com/en/program", source: "formdesigncenter.com"
  },
  {
    id: "fdc-guided-tour", title: "Guided tour: Malmö in the Making",
    start: "2026-12-03", times: "16:00–17:00",
    venue: "Form/Design Center", category: "design",
    desc: "Guided tour of Malmö in the Making and Imperfect Assemblies.",
    url: "https://formdesigncenter.com/en/program", source: "formdesigncenter.com"
  },
  {
    id: "malmo-design-days-2027", title: "Malmö Design Days 2027",
    start: "2027-05-19", end: "2027-05-22",
    venue: "Across Malmö", category: "design",
    desc: "Malmö's international design festival, formerly Southern Sweden Design Days.",
    url: "https://malmodesigndays.com/en", source: "malmodesigndays.com"
  },

  // ---------- Art ----------
  {
    id: "konsthall-nkanga", title: "Otobong Nkanga — I dreamt of you in colours",
    start: "2026-10-10", end: "2027-03-28",
    venue: "Malmö Konsthall", category: "art",
    desc: "The first large-scale presentation of Otobong Nkanga's work in Sweden.",
    url: "https://malmokonsthall.se/en/exhibitions/", source: "malmokonsthall.se"
  },
  {
    id: "konsthall-stumvalda", title: "Stumvälda",
    start: "2026-11-11", end: "2026-12-13",
    venue: "Malmö Konsthall", category: "art",
    desc: "Smaller exhibition in the Konsthall programme.",
    url: "https://malmokonsthall.se/en/exhibitions/", source: "malmokonsthall.se"
  },
  {
    id: "konsthall-verkstan", title: "Boats, Houses, Flowers, Studies, and tons of Ronaldo",
    start: "2026-11-25", end: "2027-01-10",
    venue: "Malmö Konsthall (Verkstan)", category: "art", tags: ["family"],
    desc: "Exhibition in Verkstan, the Konsthall's workshop space.",
    url: "https://malmokonsthall.se/en/exhibitions/", source: "malmokonsthall.se"
  },
  {
    id: "moderna-poder", title: "Anu Põder",
    start: "2026-10-24", end: "2027-02-21",
    venue: "Moderna Museet Malmö", category: "art",
    desc: "Sculpture by the Estonian artist Anu Põder.",
    url: "https://www.modernamuseet.se/en/malmo/", source: "modernamuseet.se"
  },
  {
    id: "moderna-casparsson", title: "Anna Casparsson — The Isle of Bliss",
    start: "2026-10-24", end: "2027-02-21",
    venue: "Moderna Museet Malmö", category: "art",
    desc: "Exhibition of Anna Casparsson's work.",
    url: "https://www.frieze.com/gallery/moderna-museet-malm%C3%B6", source: "Frieze"
  },
  {
    id: "moderna-gies", title: "Frédéric Gies & Maison de fous",
    start: "2026-12-05", end: "2027-04-11",
    venue: "Moderna Museet Malmö", category: "art",
    desc: "A choreographic retrospective.",
    url: "https://www.modernamuseet.se/en/malmo/", source: "modernamuseet.se"
  },
  {
    id: "galleri-cc-mangrane", title: "Ariadna Mangrané",
    start: "2026-12-04", end: "2027-01-17",
    venue: "Galleri CC", category: "art",
    desc: "Exhibition at the volunteer-run gallery in Östra Sorgenfri.",
    url: "https://gallericc.se/", source: "gallericc.se"
  },

  // ---------- Food & drink ----------
  {
    id: "rocknroll-xmas-party", title: "Rock 'n' Roll Xmas Party",
    start: "2026-11-27", end: "2026-12-12",
    venue: "Lokstallarna", category: "food", tags: ["christmas", "music"],
    price: "From 1,295 SEK",
    desc: "Julbord, rock show and afterparty, with hot glögg on arrival. Drinks with dinner cost extra.",
    url: "https://www.rocknrollxmasparty.com/jul/biljetter-julshow-malmo", source: "rocknrollxmasparty.com"
  },
  {
    id: "savoy-julbord", title: "Julbord at Elite Hotel Savoy",
    start: "2026-11-26", end: "2026-12-19",
    times: "26–27 Nov, 2–5, 9–12 & 16–19 Dec",
    venue: "Elite Hotel Savoy", category: "food", tags: ["christmas"],
    price: "About 885 SEK",
    desc: "Classic Christmas buffet opposite the central station. Coffee, tea and alcohol-free glögg included.",
    url: "https://skanenytt.se/julbord-malmo-2026", source: "skanenytt.se"
  },
  {
    id: "glogg-tasting-vastra-hamnen", title: "Glögg tasting",
    start: "2026-12-03",
    venue: "Systembolaget Västra Hamnen", category: "food", tags: ["christmas"],
    price: "From about 250 SEK",
    note: "14 places per session",
    desc: "A standing tasting of about 45 minutes, themed around glögg.",
    url: "https://www.afterworken.se/vinprovning/malmo/", source: "afterworken.se"
  },
  {
    id: "quality-view-julbord", title: "Julbord with live band at Quality Hotel View",
    start: "2026-12-09", end: "2026-12-11",
    venue: "Quality Hotel View, Hyllie", category: "food", tags: ["christmas", "music"],
    price: "995 SEK ex. VAT",
    desc: "Christmas buffet with a live band and DJ, welcome drink included.",
    url: "https://skanenytt.se/julbord-malmo-2026", source: "skanenytt.se"
  },

  {
    id: "saluhall-aw-dj", title: "After-work with DJ at Malmö Saluhall",
    start: "2026-11-27", end: "2027-02-26", days: [5],
    times: "Fridays, 17:00–21:00",
    venue: "Malmö Saluhall", category: "food", tags: ["music"],
    desc: "Every Friday the food hall turns into an after-work with a DJ.",
    url: "https://www.malmosaluhall.se/", source: "malmosaluhall.se"
  },
  {
    id: "buono-piedmont", title: "Great Wines from Piedmont",
    start: "2026-12-08", times: "17:30–20:30",
    venue: "Buono Food Wine Lab", category: "food",
    price: "From 1,250 SEK",
    desc: "Wine tasting focused on Piedmont.",
    url: "https://buonomalmo.understory.io/", source: "Buono"
  },
  {
    id: "taysta-mjs-classic", title: "Classic wine tasting at Hotel MJ's",
    start: "2026-12-05",
    venue: "Hotel MJ's", category: "food",
    price: "From about 495 SEK",
    desc: "A guided wine tasting.",
    url: "https://taysta.se/provningar/vinprovning/malmo", source: "Taysta"
  },
  {
    id: "systembolaget-rioja", title: "Evening tasting: Rioja, Ribera del Duero & Priorat",
    start: "2026-12-09", times: "19:00",
    venue: "Systembolaget Malmö", category: "food",
    desc: "Systembolaget's evening tasting of Spanish reds.",
    url: "https://mapmywine.com/events/systembolaget-hansa-malmo/", source: "Map My Wine"
  },
  {
    id: "slagthuset-julbord", title: "Julbord at Slagthuset",
    start: "2026-12-11", end: "2026-12-17", days: [4, 5, 6], times: "11, 12 & 17 Dec, 18:15",
    venue: "Slagthuset", category: "food", tags: ["christmas"],
    desc: "Christmas buffet at one long table in the Saluhallen room.",
    url: "https://www.tickster.com/se/sv/events/1d65vpvcl7v8txp/2026-12-11/julbord-2026", source: "Tickster"
  },
  {
    id: "nilssons-lucialunch", title: "Lucia lunch at Restaurang Nilssons",
    start: "2026-12-11",
    venue: "Malmö Arena Hotel, Hyllie", category: "food", tags: ["christmas"],
    desc: "Lunch with a visit from Malmö's Lucia.",
    url: "https://www.visitmalmo.se/evenemang/", source: "visitmalmo.se"
  },
  {
    id: "taysta-mjs-dinner", title: "Wine tasting with dinner at Hotel MJ's",
    start: "2026-12-12", times: "16:00",
    venue: "Hotel MJ's", category: "food",
    price: "Up to about 1,349 SEK",
    desc: "An exclusive wine tasting followed by dinner.",
    url: "https://taysta.se/provningar/vinprovning/malmo", source: "Taysta"
  },
  {
    id: "taysta-kallarvalv", title: "Classic wine tasting at Källarvalv",
    start: "2026-12-17",
    venue: "Källarvalv, Västra Hamnen", category: "food",
    desc: "A guided wine tasting in the vaulted cellar.",
    url: "https://taysta.se/provningar/vinprovning/malmo", source: "Taysta"
  },
  {
    id: "taysta-glogg", title: "Glögg tasting at Vinateljé",
    start: "2026-12-19",
    venue: "Vinateljé, Västergatan", category: "food", tags: ["christmas"],
    desc: "A tasting of mulled wines.",
    url: "https://taysta.se/provningar/vinprovning/malmo", source: "Taysta"
  },
  {
    id: "mat-vin-jul", title: "Christmas at Mat & Vin i Slottsparken",
    start: "2026-12-21", end: "2026-12-22",
    venue: "Slottsparken", category: "food", tags: ["christmas"],
    desc: "A Christmas edition of Mat & Vin in the castle park.",
    url: "https://www.visitmalmo.se/en/events/", source: "visitmalmo.se"
  },
  {
    id: "brodlabbet-julbak", title: "Christmas baking day at Brödlabbet",
    start: "2026-12-06", end: "2026-12-12", days: [0, 6], times: "6 & 12 Dec, 10:00–14:00",
    venue: "Brödlabbet, Lund", category: "food", tags: ["christmas"],
    note: "Lund · booking needed",
    desc: "Bake saffron buns, sourdough crispbread and gingerbread. You leave with a recipe booklet and a bag of treats.",
    url: "https://brodlabbet.understory.io/experience/608cf38b9797def455da77015c26be42", source: "Brödlabbet"
  },
  {
    id: "pepparkaksspelen", title: "Pepparkaksspelen",
    start: "2026-12-05", end: "2026-12-06",
    venue: "Atleticum", category: "family", tags: ["christmas", "sports"],
    desc: "A Christmas-themed sports event.",
    url: "https://pepparkaksspelen.se/", source: "pepparkaksspelen.se"
  },
  {
    id: "savoy-grotfrukost", title: "Christmas porridge breakfast at Savoy",
    start: "2026-12-01", end: "2026-12-31", times: "Every morning",
    venue: "Elite Hotel Savoy", category: "food", tags: ["christmas"],
    desc: "Cosy rice-porridge breakfast every morning in December.",
    url: "https://www.mynewsdesk.com/se/destinationssamverkan-malmo-ab/pressreleases/julen-i-malmoe-2026-fraan-moellanfynd-till-filmmys-3478530", source: "Visit Malmö"
  },
  {
    id: "slottstradgarden-jultallrik", title: "Christmas plate in the greenhouse",
    start: "2026-12-04", end: "2026-12-19", days: [5, 6], times: "4–5, 11–12 & 18–19 Dec",
    venue: "Slottsträdgårdens Kafé", category: "food", tags: ["christmas"],
    note: "Booking needed",
    desc: "Book a Christmas plate in the greenhouse or dining room of the castle garden café.",
    url: "https://www.mynewsdesk.com/se/destinationssamverkan-malmo-ab/pressreleases/julen-i-malmoe-2026-fraan-moellanfynd-till-filmmys-3478530", source: "Visit Malmö"
  },
  {
    id: "spegeln-julfilm", title: "Christmas film day at Spegeln",
    start: "2026-12-23", times: "All day",
    venue: "Spegeln Bio, Bar & Bistro", category: "food", tags: ["christmas"],
    desc: "A whole day of Christmas films. Food and drink from the bistro can come into the cinema.",
    url: "https://www.mynewsdesk.com/se/destinationssamverkan-malmo-ab/pressreleases/julen-i-malmoe-2026-fraan-moellanfynd-till-filmmys-3478530", source: "Visit Malmö"
  },
  {
    id: "mat-vin-slottsparken", title: "Mat & Vin i Slottsparken",
    start: "2027-01-02",
    venue: "Slottsparken", category: "food",
    desc: "Billed as the year's first wine festival.",
    url: "https://www.visitmalmo.se/evenemang/", source: "visitmalmo.se"
  },

  // ---------- Stage: opera, musicals, shows ----------
  {
    id: "notknapparen-slagthuset", title: "The Nutcracker — International Festival Ballet",
    start: "2026-12-05",
    venue: "Slagthuset", category: "stage", tags: ["family", "christmas"],
    desc: "The Nutcracker with a live orchestra.",
    url: "https://www.mynewsdesk.com/se/destinationssamverkan-malmo-ab/pressreleases/julen-i-malmoe-2026-fraan-moellanfynd-till-filmmys-3478530", source: "Visit Malmö"
  },
  {
    id: "kvarteret-korpen",
    title: "Kvarteret Korpen",
    start: "2026-11-14", end: "2027-01-10",
    venue: "Malmö Opera", category: "stage",
    desc: "New opera production on the main stage.",
    url: "https://www.malmoopera.se/opera", source: "malmoopera.se"
  },
  {
    id: "rusalka",
    title: "Rusalka",
    start: "2026-11-21", end: "2027-01-10",
    venue: "Malmö Opera", category: "stage",
    note: "Livestream 6 Dec (125 SEK)",
    desc: "Dvořák's fairy-tale opera about a water nymph who longs to become human.",
    url: "https://www.malmoopera.se/opera", source: "malmoopera.se"
  },
  {
    id: "joyride",
    title: "Joyride the Musical",
    start: "2026-10-02", end: "2027-03-07",
    venue: "Malmö Opera", category: "stage",
    desc: "The season's big musical at Malmö Opera.",
    url: "https://www.malmoopera.se/?field_performance_type_target_id=17#startpage-performances", source: "malmoopera.se"
  },
  {
    id: "tomten-ar-far",
    title: "Tomten är far till alla barnen",
    start: "2026-12-11", end: "2026-12-13",
    venue: "Malmö Arena", category: "stage",
    desc: "Comedy stage show based on the Swedish Christmas film.",
    url: "https://www.ilovemalmoe.se/jul-malmo-nojen.php", source: "ilovemalmoe.se"
  },
  {
    id: "night-of-famous-musicals",
    title: "Night of Famous Musicals",
    start: "2027-02-13",
    venue: "Malmö Arena", category: "stage",
    desc: "Songs from the best-known musicals in one evening.",
    url: "https://stadsevent.se/malm%C3%B6/februari", source: "stadsevent.se"
  },
  {
    id: "mitt-livs-berattelse",
    title: "Mitt livs berättelse",
    start: "2027-03-19", end: "2027-05-22",
    venue: "Malmö Opera", category: "stage",
    desc: "Musical at Malmö Opera in spring 2027.",
    url: "https://www.malmoopera.se/?field_performance_type_target_id=17#startpage-performances", source: "malmoopera.se"
  },
  {
    id: "the-wreckers",
    title: "The Wreckers",
    start: "2027-05-22", end: "2027-06-09",
    venue: "Malmö Opera", category: "stage",
    note: "Livestream 30 May",
    desc: "Ethel Smyth's opera about a Cornish village that lives off shipwrecks.",
    url: "https://www.malmoopera.se/opera", source: "malmoopera.se"
  },

  // ---------- Music ----------
  {
    id: "dvorak-barber-copland",
    title: "Dvořák, Barber, Copland",
    start: "2026-11-27",
    venue: "Malmö Opera", category: "music",
    desc: "Orchestral concert with American and Czech repertoire.",
    url: "https://www.malmoopera.se/konsert", source: "malmoopera.se"
  },
  {
    id: "love-actually",
    title: "Love Actually — concert and film",
    start: "2026-12-03", end: "2026-12-05",
    times: "19:00",
    venue: "Malmö Live Konserthus", category: "music", price: "295 SEK",
    desc: "A full evening: songs from the soundtrack performed by Tingsek, Moto Boy and Esta Kirabo, followed by the film on the big screen.",
    url: "https://www.spelning.se/konsert/love-actually-malmo-live-konserthus-3-december", source: "spelning.se"
  },
  {
    id: "fatboy",
    title: "Fatboy",
    start: "2026-12-04", end: "2026-12-05",
    venue: "Victoriateatern", category: "music",
    desc: "Two nights at Victoriateatern.",
    url: "https://www.songkick.com/metro-areas/32247-sweden-malmo/december-2026", source: "Songkick"
  },
  {
    id: "jag-ar-carola",
    title: "Jag är Carola",
    start: "2026-12-06",
    times: "15:30",
    venue: "Malmö Live Konserthus", category: "music", price: "635–1440 SEK",
    desc: "Carola in concert.",
    url: "https://malmolive.se/en", source: "malmolive.se"
  },
  {
    id: "banna-sona-band",
    title: "Banna Sona Band — Christmas Edition",
    start: "2026-12-09",
    venue: "Slagthuset", category: "music",
    note: "Sold out",
    desc: "The band's Christmas tour stops in Malmö.",
    url: "https://www.ilovemalmoe.se/jul-malmo-nojen.php", source: "ilovemalmoe.se"
  },
  {
    id: "timo-raisanen",
    title: "Timo Räisänen",
    start: "2026-12-11", end: "2026-12-12",
    venue: "Victoriateatern", category: "music",
    desc: "Two nights with the Swedish singer-songwriter.",
    url: "https://www.songkick.com/metro-areas/32247-sweden-malmo/december-2026", source: "Songkick"
  },
  {
    id: "latinskolan-julkonsert",
    title: "Malmö Latinskola Christmas concert",
    start: "2026-12-14",
    times: "19:00",
    venue: "Malmö Live Konserthus", category: "music",
    desc: "The school's annual Christmas concert.",
    url: "https://www.spelning.se/konsert/malmo-latinskola-julkonsert-malmo-live-konserthus-14-december", source: "spelning.se"
  },
  {
    id: "fantastic-four",
    title: "Fantastic Four",
    start: "2026-12-19",
    venue: "Moriska Paviljongen", category: "music",
    desc: "Live at Moriska Paviljongen in Folkets Park.",
    url: "https://www.songkick.com/metro-areas/32247-sweden-malmo/december-2026", source: "Songkick"
  },
  {
    id: "weeping-willows",
    title: "Weeping Willows Christmas 2026",
    start: "2026-12-21",
    times: "19:00",
    venue: "Malmö Live Konserthus", category: "music",
    desc: "Weeping Willows' Christmas concert.",
    url: "https://malmolive.se/en", source: "malmolive.se"
  },
  {
    id: "nyarsgala",
    title: "New Year's Gala 2026",
    start: "2026-12-30", end: "2026-12-31",
    times: "30 Dec 19:00 · 31 Dec 14:00 & 17:00",
    venue: "Malmö Live Konserthus", category: "music", price: "215–595 SEK",
    desc: "Malmö SymfoniOrkester with Marianne Mörck, conductor Martyn Brabbins and soprano Maria Bengtsson.",
    url: "https://malmolive.se/program/nyarsgala-2026", source: "malmolive.se"
  },
  {
    id: "wienerafton",
    title: "Viennese evening",
    start: "2027-01-05",
    venue: "Malmö Live", category: "music",
    desc: "A Viennese New Year evening, with a waltz class on the same day.",
    url: "https://www.visitmalmo.se/evenemang/", source: "visitmalmo.se"
  },
  {
    id: "petter",
    title: "Petter",
    start: "2027-01-23",
    venue: "Malmö Live", category: "music",
    desc: "The Swedish hip-hop veteran live.",
    url: "https://www.ticketmaster.se/discover/malmo", source: "Ticketmaster"
  },
  {
    id: "lords-of-the-sound",
    title: "Lords of the Sound — The Music of Hans Zimmer",
    start: "2027-02-01",
    venue: "Slagthusets teater", category: "music",
    desc: "Hans Zimmer's film scores performed live.",
    url: "https://stadsevent.se/malm%C3%B6/februari", source: "stadsevent.se"
  },
  {
    id: "rock-sensation",
    title: "Rock Sensation",
    start: "2027-02-05",
    venue: "Malmö Arena", category: "music",
    desc: "Rock show at Malmö Arena.",
    url: "https://www.concertarchives.org/venues/malmo-arena", source: "concertarchives.org"
  },
  {
    id: "imminence",
    title: "Imminence",
    start: "2027-02-06",
    venue: "Slagthuset", category: "music",
    desc: "The Swedish metalcore band on home turf.",
    url: "https://stadsevent.se/malm%C3%B6/februari", source: "stadsevent.se"
  },
  {
    id: "kim-wilde",
    title: "Kim Wilde — The Singles Tour",
    start: "2027-02-10",
    venue: "Slagthuset", category: "music",
    desc: "Kim Wilde plays the hits.",
    url: "https://stadsevent.se/malm%C3%B6/februari", source: "stadsevent.se"
  },
  {
    id: "thomas-di-leva",
    title: "Thomas Di Leva",
    start: "2027-02-12",
    venue: "Palladium", category: "music",
    desc: "Thomas Di Leva live at Palladium.",
    url: "https://stadsevent.se/malm%C3%B6/februari", source: "stadsevent.se"
  },
  {
    id: "the-halo-effect",
    title: "The Halo Effect",
    start: "2027-02-18",
    venue: "Slagthuset", category: "music",
    desc: "Gothenburg melodic death metal.",
    url: "https://stadsevent.se/malm%C3%B6/februari", source: "stadsevent.se"
  },
  {
    id: "haydn-skapelsen",
    title: "Haydn — The Creation",
    start: "2027-02-19",
    venue: "Malmö Opera", category: "music",
    desc: "Haydn's oratorio Skapelsen.",
    url: "https://www.malmoopera.se/konsert", source: "malmoopera.se"
  },
  {
    id: "melodifestivalen-2027",
    title: "Melodifestivalen 2027 — Heat 3",
    start: "2027-02-19", end: "2027-02-20",
    times: "Dress rehearsal 19 Feb · matinée and live show 20 Feb",
    venue: "Malmö Arena", category: "music",
    desc: "The third heat of Sweden's Eurovision selection, broadcast live from Malmö.",
    url: "https://www.malmoarena.com/en/events/melodifestivalen-2027-0-0", source: "malmoarena.com"
  },
  {
    id: "bryan-adams",
    title: "Bryan Adams",
    start: "2027-04-30",
    venue: "Malmö Arena", category: "music",
    desc: "Bryan Adams in concert.",
    url: "https://www.songkick.com/metro-areas/32247-sweden-malmo/2026", source: "Songkick"
  },
  {
    id: "brit-floyd",
    title: "Brit Floyd",
    start: "2027-10-08",
    venue: "Malmö Arena", category: "music",
    desc: "The Pink Floyd tribute show.",
    url: "https://www.concertarchives.org/venues/malmo-arena", source: "concertarchives.org"
  },

  // ---------- Family ----------
  {
    id: "julstamning-familjen",
    title: "Christmas Cheer for the Family",
    start: "2026-12-10", end: "2026-12-13", days: [4, 5, 0],
    times: "10, 11 & 13 Dec, 18:00",
    venue: "Malmö Live Konserthus", category: "family", price: "185–315 SEK",
    desc: "Malmö SymfoniOrkester's traditional family Christmas concert, with Christmas music, Santas and surprises.",
    url: "https://malmolive.se/en/program/christmas-cheer-for-the-family-2026", source: "malmolive.se"
  },
  {
    id: "nalles-adventskalender",
    title: "Nalle's Advent Calendar",
    start: "2026-12-12",
    times: "11:00 & 13:00",
    venue: "Malmö Live Konserthus", category: "family", price: "125–215 SEK",
    desc: "A Christmas concert for the youngest.",
    url: "https://malmolive.se/en", source: "malmolive.se"
  },

  // ---------- Comedy ----------
  {
    id: "kevin-bridges",
    title: "Kevin Bridges",
    start: "2027-01-17",
    venue: "Slagthuset", category: "comedy",
    desc: "The Scottish stand-up comedian.",
    url: "https://www.visitmalmo.se/evenemang/", source: "visitmalmo.se"
  },
  {
    id: "sofie-hagen",
    title: "Sofie Hagen",
    start: "2027-02-26",
    venue: "Palladium", category: "comedy",
    desc: "Stand-up from the Danish-born comedian.",
    url: "https://stadsevent.se/malm%C3%B6/februari", source: "stadsevent.se"
  },

  // ---------- Sports (Malmö Redhawks, SHL) ----------
  {
    id: "redhawks-brynas",
    title: "Malmö Redhawks vs Brynäs",
    start: "2026-12-03", times: "19:00",
    venue: "Malmö Arena", category: "sports",
    desc: "SHL ice hockey.",
    url: "https://www.ticketmaster.se/artist/malmo-redhawks-biljetter/523803", source: "Ticketmaster"
  },
  {
    id: "redhawks-skelleftea",
    title: "Malmö Redhawks vs Skellefteå",
    start: "2026-12-19", times: "18:00",
    venue: "Malmö Arena", category: "sports",
    desc: "SHL ice hockey.",
    url: "https://www.ticketmaster.se/artist/malmo-redhawks-biljetter/523803", source: "Ticketmaster"
  },
  {
    id: "redhawks-linkoping",
    title: "Malmö Redhawks vs Linköping",
    start: "2026-12-26", times: "15:15",
    venue: "Malmö Arena", category: "sports",
    desc: "SHL ice hockey on Boxing Day.",
    url: "https://www.ticketmaster.se/artist/malmo-redhawks-biljetter/523803", source: "Ticketmaster"
  },
  {
    id: "redhawks-vaxjo",
    title: "Malmö Redhawks vs Växjö Lakers",
    start: "2026-12-30", times: "19:00",
    venue: "Malmö Arena", category: "sports",
    desc: "SHL ice hockey.",
    url: "https://www.ticketmaster.se/artist/malmo-redhawks-biljetter/523803", source: "Ticketmaster"
  },
  {
    id: "redhawks-2027-01-05",
    title: "Malmö Redhawks home game",
    start: "2027-01-05",
    venue: "Malmö Arena", category: "sports",
    desc: "SHL ice hockey. Opponent to be confirmed.",
    url: "https://www.ticketmaster.se/artist/malmo-redhawks-biljetter/523803", source: "Ticketmaster"
  },
  {
    id: "redhawks-2027-01-07",
    title: "Malmö Redhawks home game",
    start: "2027-01-07",
    venue: "Malmö Arena", category: "sports",
    desc: "SHL ice hockey. Opponent to be confirmed.",
    url: "https://www.ticketmaster.se/artist/malmo-redhawks-biljetter/523803", source: "Ticketmaster"
  },
  {
    id: "redhawks-2027-01-14",
    title: "Malmö Redhawks home game",
    start: "2027-01-14",
    venue: "Malmö Arena", category: "sports",
    desc: "SHL ice hockey. Opponent to be confirmed.",
    url: "https://www.ticketmaster.se/artist/malmo-redhawks-biljetter/523803", source: "Ticketmaster"
  }
];
