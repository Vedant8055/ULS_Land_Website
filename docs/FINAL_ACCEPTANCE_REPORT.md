# Final acceptance report

Local QA completed 23 October 2026 against the master prompt, the 16 October 2026 pre-feasibility report, and the Private Concierge prototype (including the bundled concept film).

## Local URL and commands

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run typecheck
npm test
npm run lint
npm run build
npm start
```

## Completed

- Eight-chapter homepage with cinematic hero film (mute, loop, playsInline, pause, View film dialog, reduced-motion, visibility and off-screen pause)
- Secondary routes: `/vision`, `/ecosystem`, `/architecture`, `/experiences`, `/place`, `/masterplan`, `/private-concierge`, `/privacy`, `/terms`
- Interactive day timeline, ecosystem map, material atelier, concept masterplan, rainwater and energy explorers
- Concierge four-step flow with Zod validation, review, restart, local summary download
- Demo API that acknowledges a well-formed request and does **not** store or email it
- Licensed regional photography plus the original 15-second silent concept MP4
- Docs: claims matrix, image register, CRM spec, traceability, implementation notes

## Automated checks

| Check | Result |
| --- | --- |
| `npm run typecheck` | Pass |
| `npm test` (Vitest) | 8 / 8 pass (enquiry schema + rainwater maths) |
| `npm run lint` | Pass |
| `npm run build` | Pass |

## Route smoke

| Path | Status |
| --- | --- |
| `/` `/vision` `/ecosystem` `/architecture` `/experiences` `/place` `/masterplan` `/private-concierge` `/privacy` `/terms` | 200 |
| `/robots.txt` `/sitemap.xml` | 200 |
| unknown route | 404 custom page |

## Interaction QA

| Flow | Result |
| --- | --- |
| Hero Pause motion / View film | Dialog opens with film note; Close returns |
| Day timeline `09:00` | Switches to Breakfast / Nourish |
| Ecosystem system buttons | Present; Conscious energy default |
| Masterplan zone B | Switches to Green-blue infrastructure with survey caveat |
| Concierge empty review | Field errors shown |
| Concierge happy path | Virtual design → Asha Deshmukh / asha@example.com / consent → “Demo request prepared; not sent.” |
| Desktop 1440 nav | Full primary nav + Private Concierge |
| Tablet 768 / mobile 390 | Hamburger visible; headlines wrap without clipping |

## Screenshots

Saved under `docs/screenshots/`:

- Desktop 1440×900: `desktop-home.png`, `desktop-vision.png`, `desktop-ecosystem.png`, `desktop-architecture.png`, `desktop-experiences.png`, `desktop-place.png`, `desktop-masterplan.png`, `desktop-concierge.png`, `desktop-privacy.png`
- Tablet 768×1024: `tablet-home.png`
- Mobile 390×844: `mobile-home.png`, `mobile-vision.png`, `mobile-concierge.png`

## Honest gaps and dependencies

- No approved site photography, logo, operator identity, RERA number or coordinates
- Enquiry is demo-only — no CRM, email or booking (see `docs/CRM_INTEGRATION_SPEC.md`)
- No Playwright suite in CI; unit tests cover schema + rainwater maths
- Some Unsplash creator names remain generic where the photo page did not resolve a display name
- Core Web Vitals not laboratory-measured in this environment
- `metadata.robots` is `index: false` until the owner asks to publish; replace sitemap host before go-live
- Hydrogen, helipad, 50 m pool, school, hospital and high-capacity amenities remain conditional / not offered
