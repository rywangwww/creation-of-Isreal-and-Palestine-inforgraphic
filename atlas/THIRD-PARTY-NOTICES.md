# Third-party notices

This project builds on the following material. Check each licence before reuse.

## Data and images
- **Images of people and events** come from Wikimedia Commons. Each one is public domain or under an open Creative Commons licence (CC0, CC BY or CC BY-SA).
  The author, licence and link for every image are stored in `src/data/images.json`, shown on the person and event pages, and listed under "Image credits" in the site's Sources window.
  Images under CC BY-SA must keep their attribution and, if you modify and redistribute them, be shared under the same licence.
- **Land outlines**: Natural Earth (public domain), through the `world-atlas` package (ISC licence).
- **Historical border snapshots**: [historical-basemaps](https://github.com/aourednik/historical-basemaps) by André Ourednik, GPL-3.0. The files are loaded from the jsDelivr CDN when a visitor opens the map.
  They are not copied into this repository.
- **Historical records** in `src/data/` were compiled from the sources cited in `src/data/sources.json`. All records are drafts (see the README).

## Software
- MapLibre GL JS (BSD-3-Clause), React (MIT), Vite (MIT), TopoJSON client (ISC), Vitest (MIT), and their dependencies. See `package-lock.json` for the full list.
