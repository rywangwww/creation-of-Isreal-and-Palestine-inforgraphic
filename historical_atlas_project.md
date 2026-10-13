# Historical PATHWAY: People, Places, and Events

## Project vision

Build an interactive map-based visualization of the history of Israel and Palestine. Historical figures appear as labeled bubbles at their documented locations. As the user advances a timeline, the bubbles move to new locations when the historical record supports a journey, residence, meeting, or event. When multiple recorded figures attend an event, their bubbles converge on the event location; afterward, they follow their own documented histories.

The experience should help students understand **who was where, when, and why**, and how individual lives intersected with major historical developments. It should not imply precise locations or simultaneous attendance without evidence.

## What the experience looks like

### Main screen

- **Central map:** A geographically accurate, zoomable map spanning Europe, the Middle East, and other relevant regions. Historical borders and place names can change with the selected date.
- **Character bubbles:** Colored circles with a portrait or initials and a name. Clicking one opens a biography, current documented location, and its source.
- **Timeline:** A horizontal date slider along the bottom, with play/pause, speed controls, previous/next event buttons, and markers for significant events.
- **Event panel:** A side panel describing the selected event, its date and location, participants, significance, and supporting sources.
- **Character roster:** Search and toggle individual figures; select one to follow its path or compare several figures at once.
- **Map legend:** Distinguishes confirmed location, approximate location, unknown location, event site, and inferred movement.

### Conceptual layout

```text
+-----------------------------------------------------------------------+
| Historical Atlas          Search people/events     Layers   Sources   |
+-----------------------------------------------+-----------------------+
|                                               | CHARACTER / EVENT     |
|              INTERACTIVE MAP                  | Chaim Weizmann        |
|                                               | London, 1917          |
|  [Balfour] [Weizmann]                          |                       |
|       London                                  | Balfour Declaration   |
|                                               | Context + people      |
|                ... historical locations ...   | Evidence + confidence |
|                                               | [Read sources]        |
+-----------------------------------------------+-----------------------+
|  [Back] [Play/Pause] [Next event]   Speed 1x / 5x / 20x              |
|  1874 ----------- 1900 -------- 1917 -------- 1948 -------- 1952     |
|  Event markers:                  ^                                     |
+-----------------------------------------------------------------------+
```

## Core interactions

1. **Scrub through time:** Moving the date slider updates visible characters, their locations, historical borders, and the event panel.
2. **Play history:** Playback advances the date. Bubbles transition between recorded locations, but an animated transition is a visual aid, **not** a claim about the actual travel route or duration.
3. **Select a character:** Highlight their documented movement trail, biography, major events, and associated people.
4. **Select an event:** Focus the map on the event location, show verified attendees or participants, and explain the event.
5. **Compare characters:** Enable several bubbles at once to see where their paths intersect or diverge.
6. **Inspect uncertainty:** Each location has a date range, source, and confidence classification. If no location is known for a date, show “location unknown” rather than silently treating the previous position as fact.
7. **Explore sources:** Each event and location links to its evidence; disputed interpretations are attributed to their sources.

## First prototype: Chaim Weizmann (1874–1952)

Start with one historical figure and a limited set of milestones. These are initial research targets, **not a complete day-by-day itinerary**:

| Date/year | Location | Event or status |
|---|---|---|
| 1874 | Motol (now Belarus) | Birth |
| 1890s | Darmstadt, Berlin, Fribourg | Chemistry education |
| 1901 | Geneva | Academic work |
| 1904 | Manchester | Moves to Britain for university work |
| 1906 | Manchester | Meeting with Arthur Balfour |
| 1907 | Ottoman Palestine | First visit |
| 1917 | London | Zionist diplomacy surrounding the Balfour Declaration |
| 1918 | Jerusalem | Zionist Commission and Hebrew University cornerstone ceremony |
| 1919 | London | Faisal–Weizmann Agreement |
| 1925 | Jerusalem | Hebrew University opening |
| 1930s | Rehovot | Research institute and residence |
| 1948 | Washington, DC | Meeting with President Truman |
| 1949–1952 | Israel | First president of Israel; died in Rehovot in 1952 |

Each milestone needs a more precise date and source verification before publication. For years between documented observations, show an explicit unknown or approximate location state rather than an asserted position.

### Example scene: 1917, London

- The map focuses on London.
- Weizmann's bubble is visible with a “documented activity in London” indicator.
- The event panel explains the Balfour Declaration and its political context.
- Balfour and Lloyd George may appear as **associated figures** in the panel; their bubbles should appear at the same site only when their presence at a specific documented meeting is independently supported.
- Clicking the event reveals dates, correspondence, and primary/secondary sources.

### Example scene: 1919, London

- Weizmann and Emir Faisal can be shown together for a verified meeting or signing of the Faisal–Weizmann Agreement, with the exact location/date validated against historical sources.
- The event panel describes the agreement, its conditions, and differing historical interpretations.

## Visual design

- **Style:** Modern educational atlas, understated colors, readable labels, uncluttered map.
- **Bubbles:** Distinct colors per character or role, with portraits or initials; avoid assigning simplistic moral meanings to colors.
- **Movement:** Smooth transitions only between documented waypoints; optionally display a dashed connection labeled “schematic movement.”
- **Events:** Pins with icons for meetings, diplomacy, conflict, institutions, travel, and political milestones.
- **Time:** Historical borders, city names, and political jurisdictions correspond to the selected date where reliable data exists.
- **Accessibility:** Keyboard controls, text alternatives, high-contrast option, color-blind-safe distinctions, and reduced-motion mode.

## Data model

Store people, places, location observations, events, event participation, and sources separately so the same event can connect many people.

```json
{
  "person": {
    "id": "chaim-weizmann",
    "name": "Chaim Weizmann",
    "birth_date": "1874-11-27",
    "death_date": "1952-11-09"
  },
  "place": {
    "id": "london",
    "name": "London",
    "latitude": 51.5074,
    "longitude": -0.1278
  },
  "location_observation": {
    "person_id": "chaim-weizmann",
    "place_id": "london",
    "start_date": "1917-01-01",
    "end_date": "1917-12-31",
    "date_precision": "year",
    "confidence": "approximate",
    "source_ids": []
  },
  "event": {
    "id": "balfour-declaration-1917",
    "title": "Balfour Declaration",
    "date": "1917-11-02",
    "place_id": "london",
    "participant_ids": [],
    "associated_person_ids": ["chaim-weizmann"],
    "source_ids": []
  }
}
```

The example location observation is an illustrative coarse record, not proof of uninterrupted residence throughout 1917. `participant_ids` should mean verified attendance; `associated_person_ids` can include individuals who influenced an event without being physically present. Source IDs must be populated during research.

## Historical integrity rules

- Never invent daily locations, routes, or meetings to fill timeline gaps.
- Distinguish residence, verified presence, approximate presence, and unknown location.
- Distinguish event attendance from broader involvement or influence.
- Show uncertainty in dates, coordinates, and historical interpretations.
- Attach citations to each meaningful historical claim, not just a general bibliography.
- Use sources representing different perspectives, including Palestinian, Israeli, British, Ottoman, and independent academic scholarship as appropriate.
- Avoid portraying animated travel as evidence of the route taken.

## Suggested implementation

- **Frontend:** React + TypeScript.
- **Map:** MapLibre GL JS with a historical basemap/layer system; Leaflet is an alternative for a simpler prototype.
- **Animation:** Timeline-driven interpolation between known waypoints, with visible uncertainty handling.
- **Data:** Start with version-controlled JSON; migrate to a relational database such as PostgreSQL/PostGIS as the project expands.
- **Content management:** A lightweight editor to add characters, events, participants, locations, and citations.
- **Sources:** Primary archival materials, scholarly biographies, historical atlases, and well-documented institutional collections.

## Development phases

### Phase 1 — Weizmann proof of concept

Build the map, one bubble, timeline controls, 10–20 researched milestones, movement trail, event descriptions, and citations. Validate behavior at dates with no known location.

### Phase 2 — Interacting figures

Add Arthur Balfour, Emir Faisal, and other relevant figures. Introduce shared events, meeting verification, overlapping bubbles, and filtering.

### Phase 3 — Wider historical coverage

Expand to Palestinian political figures, Zionist leaders, Ottoman and British officials, and other important actors. Add historical boundary layers and major developments from the late Ottoman period through 1948, then expand beyond as needed.

### Phase 4 — Research and learning tools

Add relationship views, comparison mode, thematic event filters, source inspection, curated learning paths, and user-contributed corrections with review.

## Definition of success for version 1

A user can open the map, select Weizmann, scrub or play the timeline, see his bubble at documented locations, select major events, read who was involved, and inspect the evidence. When the record is incomplete, the interface communicates uncertainty rather than displaying false precision.

## Useful references

- [Chaim Weizmann House](https://www.chaimweizmann.org.il/en/chaim-weizmann)
- [University of Fribourg: Biography of Chaim Weizmann](https://www.unifr.ch/chem/en/assets/public/PDFWordDocuments/BIOGRAPHY-OF-CHAIM-WEIZMANN.pdf)
- [Palestine Open Maps](https://palopenmaps.org/en)
- [LifeContext](https://lifecontext.org/)
- [Balfour 100 timeline](https://balfour100.org.uk/timeline/)

