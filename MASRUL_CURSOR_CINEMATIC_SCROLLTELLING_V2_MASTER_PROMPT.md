# CURSOR MASTER PROMPT — MASRUL TRANSFORMATIVE LIVING
## V2: Immersive Scrollytelling, Selective 3D, and Cinematic Interaction

> Copy this entire prompt into Cursor Agent with the EXISTING Masrul codebase open. Execute it as an upgrade to the already working website — NOT as a new unrelated app.

## ROLE & EXECUTION MODE

You are operating as an integrated team of: (1) global luxury-brand creative director, (2) cinematic interaction designer, (3) storytelling copywriter, (4) senior Next.js/React/TypeScript engineer, (5) creative WebGL/Three.js engineer, (6) accessibility/performance specialist, and (7) QA engineer.

**Execute, do not merely advise.** Audit the existing code, prepare a short implementation plan, then implement the site enhancement end-to-end. Do not stop at wireframes, descriptions, mocked screen images, installation instructions, or a proof-of-concept with missing chapters. Use the repository and supplied assets as the source of truth. Do not state a check has passed unless it has actually run.

The existing site has already passed typecheck, lint, build, 8 unit tests, 10 route smokes and key interaction checks. It contains an eight-chapter homepage, the secondary routes, a functional demo-only four-step concierge form, an original 15-second concept film, genuine regional stock imagery, a claims matrix and a feasibility study. **Retain all of this existing functionality** while substantially upgrading the creative execution.

This is a **VISUAL AND EXPERIENTIAL TRANSFORMATION**, not a request for a larger number of sections or more fade-in effects.

## 1. NON-NEGOTIABLE CREATIVE BRIEF

**Project:** Transformative Living — Masrul, Nashik, Maharashtra, India.

**Positioning:** A concept-stage, ultra-premium, nature-connected, potentially self-sustaining community inspired by the Sahyadri landscape. It seeks to unite passive architecture, solar energy, water-conscious systems, responsible waste management, local agriculture, biodiversity, mindfulness, private luxury and meaningful community life.

**Brand message:** “More than a home. A different way to live.”

**Emotional objective:** The user should experience a transformation as they scroll: from a noisy outside world to stillness; from nature to ingenious systems; from systems to deeply human moments; and ultimately to a private invitation.

**Do NOT build:** a property portal, an ordinary sustainability corporate website, a section-per-card landing page, an animated PowerPoint, a scrolling grid of service tiles, a gaming/metaverse world, a 3D model showroom, or a site where all content is reduced to decorative movement without a meaningful narrative.

**DO build:** a **scroll-directed cinematic narrative** in which the viewer's wheel/touchpad/touch progress controls changes in camera, lighting, foreground/background depth, typography, 3D states, photography and meaning. The site should feel authored: carefully paced, emotionally coherent, tactile, restrained, and expensive.

Reference *techniques*, not layouts or proprietary assets, from world-class editorial scrollytelling and luxury campaigns. Do not clone any existing brand. Every transition must serve the narrative. Create an original, Masrul-appropriate visual language.

### Creative pillars

- Quiet luxury: large editorial typography, disciplined color palette, carefully chosen negative space, fine lines, understated calls to action.
- Living nature: textures, mist, leaves, tree shadows, natural daylight, water and architectural materiality.
- Invisible technology: show systems through subtle visual metaphors, not sci-fi neon or glowing circuitry everywhere.
- Human flourishing: the final payoff is healthier routines, connection, personal time, harmony and wellbeing — do not turn the homepage into an engineering manual.
- Truthfulness: distinguish a *vision, illustrative concept, proposed feature, feasibility-dependent option*, and *verified project commitment*.

## 2. FIRST AUDIT AND BASELINE

Before changing code:

1. Inventory routes, components, existing dependencies, animation libraries, video/image assets, claims matrix, README, docs and tests.
2. Inspect the current homepage structure, current scroll behavior, menu, focus handling, responsive design, and the concierge four-step flow.
3. Read any available `Sustainable_Gated_Community_Feasibility_Research_Report.pdf`, copy/design brief, image register, and claims matrix. If files are unavailable, explicitly say so; rely on content already present in the repository and do not infer approval details.
4. Run existing `npm run typecheck`, `npm test`, `npm run lint` and `npm run build`; record the baseline and any failures.
5. Capture **before** desktop 1440x900 and mobile 390x844 screenshots (and a short local capture of scrolling if supported).
6. Identify the existing Next.js and React versions before choosing compatible graphics libraries.
7. Summarize an implementation map identifying components to reuse, replace or add. Then proceed to implementation without waiting for confirmation.

**Do not delete functioning routes, remove the film, weaken validation, or make the demo API submit real enquiries.** Work in a dedicated branch if a Git repository is present; do not discard unrelated uncommitted changes.

## 3. EXPERIENCE ARCHITECTURE — ONE CONTINUOUS STORY

Build the **homepage** as a continuous immersive narrative with 8 interconnected acts. All other already implemented routes must remain available and coherent with this experience.

Use a shared semantic narrative structure with anchored acts. The experience must work scrolling forward AND backward. It must support navigation jumps, keyboard scrolling, touch scrolling, reduced motion, and deep links. The user must never become trapped in a pin or an endless interstitial.

The eight acts below are *directorial requirements*, not eight ordinary static stacked sections. Desktop may use 2–4 carefully chosen pinned sequences, with genuine scroll-scrubbed transformations. Mobile should adapt intelligently, favoring shorter sequences, legible imagery and robust native scrolling.

### ACT 0 — THE ARRIVAL / THE WORLD FALLS QUIET

**Visual:** Full-viewport genuine landscape photography or the EXISTING concept video as an atmospheric asset; actual photography should lead whenever the stylized film appears visibly illustrative. Use original source files, not hotlinked low-resolution thumbnails. Introduce subtle mist/parallax with CSS and natural image layers. Never imply this is verified footage of the actual estate.

**Opening copy:**
- Eyebrow: `MASRUL · NASHIK · A VISION FOR TRANSFORMATIVE LIVING`
- Headline, first frame: `What if life could feel different?`
- Supporting line, revealed delicately: `Beyond the ordinary. Closer to what matters.`
- Discreet scroll cue: `Scroll to enter`.

**As scroll progress advances:**
- Foreground leaves/near ridge move slightly faster than the distant mountains; keep parallax restrained.
- Typography transitions from the opening question to `More than a home. A different way to live.`
- A tasteful, slow camera push makes visitors feel they are approaching the landscape.
- Soft crossfade/dissolve leads to the next chapter; **do not abruptly cut** from a huge image to a row of cards.
- Include a skip-to-content control; scene remains readable if video never starts.

### ACT 1 — THE PHILOSOPHY / FROM POSSESSION TO PRESENCE

**Purpose:** Establish the emotional thesis before discussing amenities.

**Visual grammar:** editorial text on warm linen surfaces layered above rich texture; nature photography becomes a recurring visual motif. Use masks, clipped photography reveals and measured typography transitions rather than generic motion presets.

**Copy direction:**
- `Luxury is not simply having more.`
- `It is having more time. More clarity. More connection.`
- `A place conceived to bring life back into balance.`

**Scroll beat:** Pause the picture as each line resolves. A single ribbon/path motif gradually becomes the connective thread between nature, energy, water and the person. This path must be elegant, minimal and technically reliable — no cartoonish dots chasing the scrollbar.

### ACT 2 — THE LIVING LANDSCAPE / THE FIRST 3D REVEAL

**Hero 3D sequence #1 — REQUIRED WORKING REAL WEBGL (NOT CSS FAKE-3D):**

Create a **stylized, high-end conceptual 3D landscape diorama** representing the relationships between a hillside, native forest, low-density residences, gardens, water retention, solar surfaces and communal pathways. Use `three` with React Three Fiber and Drei if supported by installed React/Next versions. It should feel like an elegant architectural concept model, not a game environment.

**Truthfulness:** Because actual site coordinates, final topology, surveys and approved masterplan are missing, DO NOT create a realistic-looking supposedly accurate Masrul map. Label visibly: `Conceptual ecosystem visualization · Not an approved site plan`. Avoid presenting fabricated roads, plot layouts, altitude, distances or precise solar orientation as factual.

**Choreography tied to scroll:**
1. Begin with a wide elevated view of the conceptual landscape.
2. Camera descends with very slow orbital movement.
3. The native tree layer appears subtly in depth.
4. Low-density housing and gardens emerge.
5. Water corridors and essential services become visually legible.
6. Scroll takes the camera toward one residence, creating continuity into the next acts.

**Interaction:** A small persistent `Explore the ecosystem` control permits manual access to forest, water, energy, soil and community markers. If a user clicks a marker, the camera glides to it and the overlay explains its intended role. Manual interaction and scroll-scrub behavior must not fight each other; define a clear priority/return-to-story behavior.

**Visual safeguards:** No floating pseudo-factual percentages, unrealistic oxygen globes, oversaturated greenery, invented project buildings, or fake plot labels.

### ACT 3 — THE INVISIBLE INTELLIGENCE / HOW NATURE AND TECHNOLOGY WORK TOGETHER

**Hero 3D sequence #2 — reuse the same diorama and camera where possible.** This is the signature educational piece: viewers should understand that the community is conceived as connected systems, not isolated amenities.

Build a **single pinned visual sequence** with successive scroll beats; do not create five disconnected marketing cards.

1. **SUN / CONSCIOUS ENERGY** — soft sunlight passes over roofs. Solar surfaces glow minimally and power moves toward shared systems in a restrained overlay. Story: `Harness what nature gives.` Technical support: passive design, solar, efficient systems and possible shared storage. **Green hydrogen is FUTURE FEASIBILITY ONLY, not represented as live or guaranteed.**
2. **RAIN / WATER CIRCULARITY** — lighting shifts towards overcast; water falls, follows a conceptual rainwater catchment path, moves through storage/treatment/reuse motifs. Story: `Respect every drop.` No claims of 100% water independence. Note actual water yield depends on rainfall, engineering and approvals.
3. **SOIL / RESOURCE CIRCULARITY** — a refined cutaway reveals household separation, shared organic processing, compost as soil amendment subject to validation, and productive gardens. Story: `Let nothing useful go to waste.` No unsupported 'zero waste achieved' claim.
4. **FOOD / NOURISHMENT** — the camera moves from soil to kitchen gardens, nearby farmers, local food and farm-to-home possibilities. Story: `Know where nourishment begins.` Proposed dairy and 'organic' labeling must remain conditional unless documented.
5. **FOREST / BIODIVERSITY** — native canopy takes focus; paths, shade and open courtyards become central. Story: `Make room for life to flourish.` Do not imply parks medically increase oxygen concentration or cure conditions.

**Execution:** Each beat is controlled by normalized progress through one GSAP scroll timeline. Overlay copy and camera/3D state change together, without unmounting/recreating the canvas for every system. Scrubbing backwards fully reverses it. Provide reduced-motion static equivalents for every beat.

**Interactive supplementary tools:** Keep existing energy and rainwater explorers from the working site, but place them in an optional `Explore the system` panel or deeper ecosystem route. Do not interrupt the main emotional story with data-entry widgets.

### ACT 4 — LIFE REIMAGINED / A DAY TRANSFORMED

**Goal:** Transition from infrastructure to human experience, showing HOW all of this changes daily life.

Create a photographic storytelling chapter with four phases controlled by scrolling:
- `06:00 — Breathe`: woodland walks, sunlight, quiet reflection.
- `09:00 — Nourish`: farm-to-table ingredients, local food, mindful morning routine.
- `16:00 — Flourish`: learning, sport, family/community, nature.
- `20:00 — Restore`: warm home interiors, a calmer evening.

Use REAL photography featuring authentic Indian or regionally credible environments and people, licensed and registered in the image register. Show honest human details and natural imperfections rather than synthetic 'perfect' models. **Stock scenes are mood references, not actual residents or site amenities.**

The light quality should shift from warm dawn to afternoon to dusk, through carefully authored crossfades/lighting overlays. The time label, micro-copy and imagery must change in lockstep with scroll. Preserve the existing clickable day-timeline as a secondary/manual access option.

**Narrative phrases (adapt tastefully, avoid repetitive overuse):**
- `Wake with the light, not the noise.`
- `Eat closer to the source.`
- `Rediscover the luxury of time.`
- `Come home to stillness.`

### ACT 5 — ARCHITECTURE THAT BREATHES / SECOND REAL 3D MOMENT

**Required conceptual 3D architecture interaction:** A carefully designed low-poly-to-medium-detail **villa study model** with realistic material cues, built as an illustrative architectural study (not a claimed project render). The exterior must align with design language: basalt/stone, reclaimed/ethically sourced timber where feasible, lime-plaster-like surfaces, deep overhangs, green courtyard, large shaded windows. Do not create an enormous photoreal AI-generated villa or fake build approval.

**Scroll transformation:**
- From a distance, a light architectural form emerges amid greenery.
- The camera makes a measured arc toward the courtyard.
- Roof/section can lift or become semi-transparent to reveal natural light and shaded voids.
- Time-of-day controls shift lighting direction and shadow positions illustratively.
- Labels highlight cross-ventilation intent, shading, natural light, tactile finishes and privacy.

**Interactive `Material Atelier`:** Retain the existing atelier but allow distinct material selections to actually change 3D model appearance (stone, timber, terracotta, plaster), and support a graceful image/2D fallback if WebGL is unavailable. Clearly label any daylight path or airflow representation as `Illustrative concept, not a certified solar/airflow engineering study`. Prefer `Daylight & Nature` / `Daylight & Ventilation Concept` over a scientifically unsupported 'oxygen simulation'.

**Story:** `Designed around the rhythm of life.`  The villa is a vessel for wellbeing, not the main sales proposition.

### ACT 6 — A WORLD WITHIN / CONNECTION AND COMMUNITY

Shift from 3D imagery to human-scale authentic photography and tactility: temple/quiet contemplative architecture, yoga pavilion, learning, sports, responsible farming, wellness and low-density open space. Use asymmetrical photographic editorial compositions, not rows of generic amenity cards.

**Keep statuses honest:** Some high-capacity facilities in the feasibility report — 50m pool, school, hospital, sports arena, skating, helipad and hydrogen — remain potential phased features. Feature only as `envisioned`, `under feasibility review`, or `subject to approvals/operator decisions`, as supported by the existing claims matrix. Do not create booking links for amenities that do not exist.

**Emotional transition:** `A place where belonging feels natural.` Each activity should be about human connection, not inventory. Present a calm, not over-stimulating, experience.

### ACT 7 — THE LONG VIEW / RESPONSIBILITY AND PRIVATE INVITATION

Pull back to a broad landscape texture or conceptual site aerial — a visual echo of the opening. Explain that exceptional living requires accountable design.

A slim factual panel should link to evidence-based sustainability plans and the existing claims matrix. If unverified, use `design intention`, `proposed`, or `subject to technical validation` — never invent metrics or awards.

**Close with:**
- `Some places are discovered.`
- `Others change the way you live.`
- `Begin a private conversation.`

The final `Request a Private Introduction` CTA transitions smoothly into the ALREADY IMPLEMENTED `/private-concierge` route, preserving the validated four-step form. Also provide a clearly marked `Explore the vision` / `Read the feasibility context` path for detail-seeking visitors.

**End elegantly.** No cheap sales countdown, pseudo-exclusivity numbers, fake sold-out labels, forced contact gate, autoplay sound, or misleading instant booking confirmation.

## 4. STORYBOARD, COPY AND SCROLL TIMELINE CONFIGURATION

Create a typed, data-driven storyboard in the repository, e.g. `src/content/scrollStory.ts` (adapt to existing project layout), with these per-scene fields:

- `id`, `anchor`, `chapterNumber`, `eyebrow`, `headline`, `body`, `mobileBody`, `assetIds`
- `motionMode` (`hero`, `pinned-diorama`, `ecosystem-sequence`, `photographic-day`, `villa`, `editorial`, `closing`)
- `scrollBeats` with start/end progress, camera target/state, light state, transition and copy states
- `claimStatus` and `claimsMatrixId` for any factual concept-related content
- `reducedMotionFallback`

Do not hard-code all text or visual coordinates across scattered `useEffect` calls. Keep time/scroll mapping predictable and testable.

**Pacing principles:**
- Establish the core promise in the first 4–6 seconds without requiring scrolling.
- Use a small number of meaningful pinned acts, never pin every section.
- Give visitors agency to advance, scroll backward, jump to an anchor or skip cinematic effects.
- For each pinned act, progress must create visibly different states throughout the interval. A pinned static photograph with scrolling text is insufficient.
- Allow breathing room and natural reading; no motion should outrun comprehension.
- Typography and imagery must remain readable with all text present in accessible DOM content rather than encoded into video or canvas.

## 5. TECHNICAL ANIMATION & 3D ARCHITECTURE

**Keep existing project structure and compatible versions. Do not replatform just because this prompt names libraries.**

Recommended building blocks (install ONLY if compatible and justified):
- **GSAP + ScrollTrigger + `@gsap/react`** for scrubbing, pinning, staggered editorial reveals and route-safe cleanup.
- **Three.js + `@react-three/fiber` + `@react-three/drei`** for the two genuinely useful conceptual 3D experiences.
- Existing Framer Motion / Motion library if already installed for micro-interactions, not as a competing scroll coordinator.
- **Lenis** only if smooth scrolling improves experience *and* native scroll, iOS Safari, anchors, focus and ScrollTrigger synchronization all remain reliable. Native scroll is preferable to broken custom smoothing.

Use official guidance:
- https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- https://gsap.com/resources/React/
- https://r3f.docs.pmnd.rs/advanced/scaling-performance
- https://github.com/darkroomengineering/lenis
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion

### Required design architecture

- Isolate expensive scenes into client-only, lazy-loaded components so server rendering and SEO remain sound.
- Implement a shared narrative timeline (`ScrollDirector`, `StoryChapter`, `SceneProgress`, or equivalent); avoid each chapter creating unsynchronized animation managers.
- Initialize GSAP with `useGSAP` and scoped refs/`gsap.context`; clean up triggers on route exit, resize, remount and motion-preference change.
- If React Three Fiber is used, match its major version to installed React major. Confirm this before installing.
- Use a persistently mounted scene for related ecosystem beats, not one WebGL context per chapter.
- Use geometries/instances for trees, modest mesh complexity, texture reuse, compressed/optimized assets, and controlled device pixel ratio.
- Keep 3D materials tasteful: matte/mineral stone, lightly rough timber and realistic daylight; avoid neon emissive grids, excessive bloom, sparks, holographic science graphics and particles everywhere.
- Camera should be scroll-driven with interpolation/damping and safe near/far planes; scrolling backwards reproduces the earlier view.
- Pause scene updates when offscreen/hidden where feasible; cap pixel ratio and adapt quality with device checks or Drei performance monitoring.
- Ensure no canvas/event overlay blocks clicks, scroll, keyboard navigation, links, forms or dialogs. Canvas should not swallow interaction outside intentional hotspots.
- Wrap client-only rendering with WebGL availability detection, graceful loader, usable fallback imagery and error boundary.
- Respect `prefers-reduced-motion`, reduced-data preferences when available, and low-powered mobile hardware; retain full content even if all animations are disabled.
- Keep the original concept video integrated where it improves the narrative but do not let its stylized character undermine genuine natural imagery. It must remain labelled as `Concept film` and not actual-site footage.
- Avoid scroll-jacking, inaccessible custom cursors, forced sound, disabling scrollbar, or preventing native touch scrolling.

### Responsive experience

- Desktop (>= 1024px): cinematic pinned chapters, immersive transitions, full 3D where capable, floating minimal chapter navigation.
- Tablet: fewer simultaneous visual layers, shorter pins, shallower depth and responsive copy placement.
- Mobile (320–767px): native-friendly scroll, either optimized lightweight 3D or cinematic 2D sequence; no oversize canvas or impossible swipe interactions. Mobile should look intentionally art-directed, NOT like an awkwardly scaled desktop page.
- Reduced motion / no WebGL: elegant sequential stills and text with complete functional parity.

## 6. AUTHENTICITY, IMAGE SOURCING & CONTENT CLAIMS

The user explicitly does **not** want AI-generated-looking imagery. Strictly apply the following:

1. **Use genuine photography** for nature, landscapes, people, farm environments and material close-ups. Prefer project-supplied real footage/images; otherwise appropriately licensed real editorial stock, with source and license record in `docs/IMAGE_REGISTER.md`.
2. Do not generate new supposedly real photos of Masrul or fake property renders. Do not use AI images for nature or people; code-rendered abstract/conceptual 3D diagrams are allowed **only when clearly identified as conceptual visualizations**.
3. Never use photography from another estate as though it depicted the actual planned development.
4. Do not invent a real aerial drone flythrough or field survey. The 3D landscape is a stylized explanatory model only.
5. Continue to obey the pre-feasibility document: solar/passive-first, rainwater/treated reuse, circular waste and farmer connections as strong design pillars; hydrogen and aviation conditional; school, hospital, competition pool and large sports amenities conditional/phased.
6. No claims such as `Nashik's first zero-carbon sanctuary`, `100% energy independent`, `100% water autonomous`, `oxygen-enriched air`, `300+ validated days of sunlight`, `certified organic A2 dairy`, `approved helipad`, or `Olympic-standard pool` without specific verified evidence and clear contextual boundaries.
7. No invented air quality numbers, oxygen concentration, carbon offsets, water balance, solar yield, legal approvals, RERA status, project location coordinates, pricing, dates or testimonials.
8. Preserve/extend the existing `CLAIMS_MATRIX` mapping, including every new storytelling assertion.

## 7. BRAND DESIGN SYSTEM

Preferred colors:
- Deep forest: `#152B23`
- Forest sage: `#2C3E35`
- Deep earth brown: `#3D312A`
- Warm linen: `#F5F2EB`
- Champagne gold: `#C5A059`

Typography: refined serif such as Cormorant Garamond for expressive headings, neutral sans such as Plus Jakarta Sans for clarity. Distinct editorial scales and line lengths, measured tracking, authentic composition, soft natural shadows.

**No generic startup UI:** avoid rounded dashboard cards everywhere, gradient SaaS blobs, numerous colored icons, aggressive primary buttons, dark techno dashboards, loud typography, and over-explained bullet lists. Design with large photographs, carefully timed reveals, textured transitions and meaningful whitespace.

If creating transitions between photos and WebGL, apply art direction so they have aligned color temperature, perspective and composition; do not drop a cartoonish model on an unrelated photoreal landscape.

## 8. NAVIGATION, SECONDARY PAGES, CONCIERGE

Existing routes must remain operational:

`/`, `/vision`, `/ecosystem`, `/architecture`, `/experiences`, `/place`, `/masterplan`, `/private-concierge`, `/privacy`, `/terms`, plus sitemap/robots and custom 404.

- Homepage: the immersive emotional narrative and gateway to deeper detail.
- Secondary routes: complementary premium editorial reading/exploration, not duplicates of the full homepage animation.
- Provide subtle `Chapter 01 / 08` progress indication on desktop, anchor-based chapter jumps and a skip-animation / skip-to-content affordance.
- Back/forward navigation, URL hashes, reloading in the middle of the page and focus management must work.
- Maintain the full functional Private Concierge four-step Zod-validated demo flow, consent, review, reset, downloadable summary, and honest “Demo request prepared; not sent” acknowledgement.
- Keep the backend demo-only. Do not introduce emails, CRM integrations, scheduling, payment, authentication or fabricated booking guarantees without separately provided specs and credentials.
- A CTA in the immersive narrative should pass the user's chosen interest/entry context to the concierge page when supported, without leaking personal information in URL query parameters.

## 9. PERFORMANCE & ACCESSIBILITY — SHIP REAL WORK, NOT A SHOWREEL

The scene must feel responsive even on an ordinary device. Optimize the experience with progressive enhancement.

Performance **targets to measure**, not metrics to invent:
- LCP <= 2.5s and CLS <= 0.1 on realistic test conditions.
- INP <= 200ms where lab/test tooling can assess it reliably.
- Desktop scroll animation ideally near display refresh; mobile is tuned for fluid interaction instead of a mandatory high-fidelity 3D effect.
- Home's noncritical models, video, large photography and secondary routes are deferred appropriately.

Required safeguards:
- Use optimized image variants; set dimensions and responsive `sizes` to avoid layout shifts.
- Lazy-load noncritical 3D; show informative fallback rather than blank canvas.
- Provide poster frame for video, muted autoplay only, user-controlled play/pause and no automatic unmuting.
- Provide keyboard-accessible navigation, visible focus rings, semantic headings, accessible buttons, captions/alt for visuals, and proper dialog focus trap/return.
- Support reduced motion with full information access and no cinematic movement.
- Avoid overlapping sticky layers, scroll pin jitter, impossible click targets, broken anchor links, and content buried under z-index overlays.
- Respect browser back/forward and native scrolling on all tested breakpoints.

## 10. PROGRESSIVE IMPLEMENTATION ORDER

Implement in this order, keeping the app running throughout:

**Phase A — Audit/Storyboard**: inspect baseline, map current content to new acts, identify assets and claims. Save `docs/SCROLL_STORYBOARD.md` with visual states, copy, trigger points, mobile fallbacks and asset provenance.

**Phase B — Motion Infrastructure**: introduce scroll director, lifecycle-safe animation primitives, reduced-motion branch, and chapter navigation. Implement Act 0 and Act 1 at exceptional quality. Verify forward/backward and responsive behavior.

**Phase C — First Actual 3D Experience**: build conceptual 3D landscape with camera choreography and smooth 2D fallback. Ensure it looks like a premium architectural concept model, not a wireframe test scene. Check scroll direction reversal and device fallback.

**Phase D — Ecosystem Story**: extend the same coherent 3D environment across sun, rain, soil, food and forest beats with synchronized overlays and no fake metrics. Protect the existing deep-dive interactions.

**Phase E — Human Story and Villa**: build four-stage photographic day-in-the-life chapter and conceptual architecture/material/daylight scene.

**Phase F — The Emotional Close**: community, responsibility, seamless finale, concierge CTA and mobile art direction.

**Phase G — QA/Optimization**: add interaction tests, optimize resources, visual review at three breakpoints, accessibility, scrolling and performance checks. Fix findings, not just report them.

If time or technical resources are constrained, prioritize one spectacular, complete end-to-end scroll narrative with real interaction and production-quality fallbacks over several half-working 3D gimmicks. But implement all required chapters as meaningful experiences; do not silently omit them.

## 11. SPECIFIC AUTOMATED AND MANUAL ACCEPTANCE TESTS

Re-run old tests and expand coverage. Add browser-level Playwright tests if the environment supports browser installation/execution; otherwise provide honest manual instructions and clearly mark the automation as not run.

### Automated baseline
- `npm run typecheck` — pass.
- `npm test` — preserve all existing passing tests and add targeted tests for typed storyboard state/progress logic if meaningful.
- `npm run lint` — pass.
- `npm run build` — pass.
- Route smoke for every existing path, `/robots.txt`, `/sitemap.xml`, and unknown route.

### Browser journeys: desktop 1440x900, tablet 768x1024, mobile 390x844 and narrow mobile 320px

1. Initial landing renders immediately with legible first message.
2. Scroll through every chapter and verify each chapter produces the promised visual/copy state, not just a section fade.
3. Scroll backwards through all pinned transitions. Earlier states reconstruct correctly; no snap, freeze or blank gap.
4. Navigate directly to each chapter using anchor/progress navigator; no stuck scroll/pin.
5. Manually click 3D ecosystem hotspots; correct explanation and camera target appear; resume story gracefully.
6. Verify real WebGL render on a capable browser. Check a browser with WebGL disabled or a mocked unavailability path and confirm the non-WebGL fallback.
7. Verify energy/water/soil storytelling never displays unverified quantitative claims.
8. Switch villa materials and time of day; model/fallback visibly changes.
9. Test reduced-motion mode: all content and controls are present and fully readable without parallax/pinning motion.
10. Test screen reader/keyboard tab sequence, focus visibility, motion toggle, dialogs and menu navigation.
11. Test hero play/pause and viewer; video fails gracefully and respects reduced-motion/visibility state.
12. Confirm all prior site interactions still work (day timeline, system explorer, masterplan conceptual map, material atelier).
13. Complete Concierge happy path; verify validation and demo-only acknowledgment, not real submission.
14. Test visibility changes, rapid reverse scrolling, resizing during pinned scenes, route changes, and browser back/forward; check browser console for memory leaks, runtime errors and hydration errors.
15. Run at least one realistic network-throttled/mobile performance check if tools are present; report measured values honestly.

Capture final before/after screenshots at every key narrative beat (not merely route landing screens). Save under `docs/screenshots/v2/` with meaningful filenames. Capture a short scrolling video if browser automation supports it; otherwise document that a video was not captured.

### Non-negotiable creative acceptance criteria
- The homepage is **visibly a cinematic story controlled by scrolling**, not eight conventional marketing sections.
- There is at least one functioning, artistically polished 3D scene that changes camera/object state with scroll progress; preferably the landscape ecosystem plus a villa study.
- Each system (energy, water, waste/soil, food, forest) has a meaningful sequential visual explanation linked to the same narrative.
- Photographic-to-3D transitions are tasteful, coherent and smooth.
- Mobile and reduced-motion experiences are complete products, not broken variants.
- Existing routes and Concierge functionality have not regressed.
- The website makes **no unsupported environmental, engineering, regulatory or amenity claims**.

## 12. DOCUMENTATION AND FINAL DELIVERY

Deliver actual repository changes and the following:

1. `docs/SCROLL_STORYBOARD.md` — cinematic acts, headlines, sequential scroll beats, 3D states, visual assets, and emotional outcome.
2. `docs/SCROLL_MOTION_TECH_SPEC.md` — motion architecture, libraries/versions, fallback design, 3D performance, timeline logic, cleanup.
3. `docs/SCROLL_ACCEPTANCE_REPORT.md` — pass/fail for every acceptance test, including browser versions, screenshots, actual performance numbers when available, and honest blockers.
4. Updated `docs/IMAGE_REGISTER.md` with origin/license for new real photographs and an explicit `conceptual` tag for generated 3D models.
5. Updated `docs/CLAIMS_MATRIX.md` or equivalent, aligned to pre-feasibility and approved claims.
6. Desktop/mobile screenshots for each major visual act; short scroll-capture video when possible.
7. Local start commands; list of changed files; any asset licensing or owner decisions required before public launch.

**Don't claim 'award-winning', 'photorealistic', 'fully production-ready', 'performance passed' or 'playwright passed' without demonstrable evidence.** A compile-successful site with attractive screenshots but no real scrollytelling does not satisfy this task.

## 13. DEFINITION OF DONE / FINAL COMMAND TO EXECUTE

The final visitor experience must feel like this:

> I arrive amid the Sahyadris. I slowly enter a quieter world. The landscape reveals a living community. As I move, I see the sun powering it, water circulating through it, soil feeding it, and nature renewing it. I step toward a thoughtfully designed home and experience light, material, and privacy. Then the focus changes to people — nourishment, peace, education, wellness, connection. By the time I reach the final private invitation, I understand not only *what the project proposes*, but *why life here could feel fundamentally different*.

**Now inspect the repository, document the baseline, and implement this entire creative upgrade. Don't stop at suggestions, an isolated 3D experiment, or a generic animation layer. Preserve existing successful functionality. Finish with evidence.**
