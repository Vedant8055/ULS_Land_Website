# Implementation notes

## Baseline

The LandWebsite folder contained only the master prompt. Source files were found in Downloads and copied into `project-inputs/`:

- Feasibility report, 16 October 2026, 13 pages
- Private Concierge prototype v2 with `hero-ambient.mp4` and `hero-poster.jpg`

No existing Next.js app was present, so a new App Router + TypeScript + Tailwind 3 + Zod + Framer-ready stack was created. Framer Motion is listed but scroll work uses CSS and IntersectionObserver to keep mobile light.

## What was preserved

- Prototype enquiry model, four experiences, four steps, consent split, demo success, local summary download
- Hero film playback rules: muted, loop, playsInline, pause/play, View film dialog, reduced motion, tab hidden, off-screen pause
- Honest claim language from the feasibility report
- Prototype photography that survived geographic review (Bhandardara hero, Sahyadri ridge, forest atmosphere, interior-as-reference)

## Design decisions

- Homepage is a full-bleed cinematic arrival, not the concierge split-hero. Concierge keeps the quieter “art of arriving” layout.
- Architecture uses material swatches rather than fake villa photography.
- Masterplan is an illustrated SVG with a survey caveat.
- Robots: indexing left conservative (`index: false`) until the owner asks to publish.

## Commands run during build

`npm run typecheck`, `npm test` (8/8), `npm run lint`, `npm run build` all passed. Route smoke and concierge demo submission are recorded in `FINAL_ACCEPTANCE_REPORT.md`.
