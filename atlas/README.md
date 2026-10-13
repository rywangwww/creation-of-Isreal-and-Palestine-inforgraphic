# Historical Pathway

An informational, Wikipedia-style website that helps people understand **Zionism** and its context, 1874–1952, through
people and places on a map. It is written in plain English for high-school readers. Zionist, Palestinian, Arab,
British, international and Jewish non-/anti-Zionist figures all appear, and where historians disagree the site shows the views side by side.

```bash
npm install
npm run dev        # http://localhost:4180
npm run validate   # integrity checks for data, chapters and glossary
npm test           # unit tests (timeline / uncertainty rules, data validity)
npm run build
```

## What is in it

- **Stories** (home page): 15 chapters, each following one person through the years of their most important contribution. Chapters overlap in time,
  and the home page charts them on one axis. Each step moves the map to a date and place, highlights the people involved, shows "how different sides saw it",
  and cites its sources. People: Herzl, Ahad Ha'am, Rabbi Kook, Medem (the Bund), Weizmann, Szold, Jabotinsky, Faisal, Sakakini, Awni Abd al-Hadi,
  Hajj Amin al-Husseini, Magnes, Abdullah I, Ben-Gurion, Truman.
- **Strands of Zionism**: political, practical, cultural, labour, revisionist, religious and binational Zionism, with an explainer for each and a filter
  that shows its people on the map. People are coloured by group (Zionist movement, Palestinian Arab, Arab leaders and states, British, Ottoman, international, Jewish non-/anti-Zionist) or by strand.
- **Explore the map**: 184 people (102 with documented movements), 245 events, a timeline with playback, historical place names, uncertainty states
  (confirmed / approximate / "location unknown"), schematic movement labelled as such, and a side panel with biographies, events, sources and side-by-side perspectives.
- **Numbers & context**: charts for Jewish immigration, the Jewish share of the population, land ownership and settlement growth, each with a table view, a plain-English
  "how sure are we?" note and sources. Two map layers: Jewish settlements by founding year, and a 1946 population snapshot by district.
- **Images**: 165 of the 184 people have a portrait and 39 events have an image (documents, maps, period photos). All come from Wikimedia Commons, are public domain or
  openly licensed (CC BY / CC BY-SA), were checked by eye against the person or event, and are stored locally in `public/img/` (no hot-linking). Credits show on the person and event pages
  and in the Sources window; initials remain the fallback. `npm run validate` checks each image file exists and has a licence and source link.
- **Glossary**: 54 terms, underlined in the text with hover definitions.
- **Accessibility**: keyboard control, text alternatives for markers and charts, high-contrast and dark themes, reduced motion, colour-blind-safe palette with initials and ring styles
  so colour is never the only cue.

## Deploying to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and publishes the site. One-time setup in your repository: **Settings → Pages → Source: "GitHub Actions"**, then push to `main`.

- The public path is set automatically from the repository name (`/<repo>/`, or `/` for a `<user>.github.io` repo) through the `BASE_PATH` environment variable.
  To test a sub-path build locally: `BASE_PATH=/<repo>/ npm run build && BASE_PATH=/<repo>/ npm run preview`, then open `http://localhost:4180/<repo>/`.
- The workflow runs `npm run validate` and `npm test` first, so a data or logic error stops the deploy.
- Navigation uses `#` links, so no server redirects are needed.
- The historical borders layer loads from the jsDelivr CDN at runtime (see `THIRD-PARTY-NOTICES.md`).
- Choose and add a `LICENSE` for your own code before making the repository public.

## Data (`src/data/`)

People, places, location observations, events and sources are stored separately (`src/types.ts`); chapters, glossary and the context datasets (`context/`) sit beside them.
`npm run validate` enforces what can be checked mechanically: every record cites known sources, ids resolve, observations lie inside lifetimes,
tracked participants of an event have a matching location record, chapter steps match their events and dates, and so on.

## Research status (important)

- **Every record is a draft** (`review_status: "draft"`). The first four people (Weizmann, Balfour, Faisal, Musa Kazim al-Husseini) cite standard works;
  the rest of the data was researched by parallel agents, mostly from English Wikipedia and institutional pages, with standard books cited but not checked page by page.
  Treat day-level dates as leads to verify, not settled fact.
- `research-notes/` holds each researcher's notes (what could not be verified, disputed dates, suggested further people) and `editor-flags.md`
  (questions raised during the plain-English editing pass).
- Records carry a `review_note` for internal process notes; public fields should never mention how the research was done.
- Some figures in the Numbers section come from tables the researchers could only read in part (OCR of scanned censuses, summaries). They are marked draft and the page says so.

## Not yet built

- A review tool for verifying records one by one against their sources, and a content editor.
- Date-exact historical borders, and borders after 1945; more settlements and Arab villages on the map.
- Portraits (initials are used).
- Yearly immigration figures for 1942–1948 (no reliable source found yet), Arab village counts, district-level land figures.
- More chapters (e.g. Sokolow, Sharett, Golda Meir, Lawrence, Samuel, Darwaza, Abd al-Qadir al-Husayni).
