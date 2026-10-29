# Scroll V2 — acceptance report

23 October 2026. Chrome  (headless) + Cursor in-app browser. Dev server `http://localhost:3000`.

## Automated

| Check | Result |
| --- | --- |
| `npm run typecheck` | Pass |
| `npm test` | 11 / 11 (previous 8 + 3 story-progress) |
| `npm run lint` | Pass |
| `npm run build` | Pass (16 static pages). A concurrent `next build` while `next dev` was running briefly 500’d `/`; a clean restart returns 200. |
| Playwright CI | **Not installed** — visual QA used Puppeteer + Chrome |

## Browser journeys

| Journey | Result |
| --- | --- |
| Landing copy immediate | Pass — *What if life could feel different?* |
| Scroll changes copy + camera | Pass — hillside → few dwellings → respect every drop → nourish → villa → invitation |
| Reverse to `#landscape` | Pass — *A hillside held with care.* reconstructed |
| Chapter anchors | Pass — hash / `scrollIntoView` reaches each act |
| WebGL present (Chrome) | Pass — `canvas: 2`, `webgl: true` |
| Cursor in-app WebGL | Fallback path shown (*Conceptual still · WebGL unavailable*) |
| `?nowebgl=1` | Implemented in `lib/webgl.ts`; Chrome check was inconclusive on hash navigation |
| Ecosystem Water marker | Pass — “Return to story” overlay appears |
| Villa materials | Controls present (basalt selected by default); 3D mesh uses finish colour |
| Reduced motion | Unpinned tracks, film paused, stills remain |
| Hero film pause / view | Controls present |
| Day timeline `#day-manual` | Preserved clickable hours |
| Concierge / secondary routes | Unchanged files; not rewritten |
| Scroll video | **Not captured** (no Playwright video). Beat stills in `docs/screenshots/v2/` |

## Measured (honest)

- Homepage scroll height ~20,000px desktop with pins.
- LCP / INP / CLS **not laboratory-measured** in this environment.
- 3D is a **stylized architectural concept model** (fog, low houses, water ribbon, trees). It is not photoreal and is labelled as such.

## Screenshots

**Before (V1):** `docs/screenshots/v2/before/`

**After:** `docs/screenshots/v2/after-desktop-*.png`, `after-mobile-*.png`

## Remaining limitations

- Villa study is a courtyard massing, not a furnished interior.
- No site survey geometry; cameras stay wide so the model cannot be mistaken for a plot plan.
- Cursor’s embedded browser has no usable WebGL; Chrome does.
- Core Web Vitals not lab-tested.
- No Playwright video of the scroll.
