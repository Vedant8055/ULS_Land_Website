# CURSOR AGENT MASTER PROMPT
# MASRUL TRANSFORMATIVE LIVING - CINEMATIC, STORY-DRIVEN WEBSITE

You are the lead creative director, luxury experience strategist, editorial copywriter, senior product designer, frontend architect, full-stack developer, accessibility engineer, QA lead, and performance engineer for this project.

YOUR TASK IS TO INSPECT THE WORKSPACE AND BUILD THE COMPLETE WEBSITE. Do not respond with a plan only. Create, edit, integrate, run, test, fix, and document the actual deliverable. Work iteratively, preserve existing working functionality, and leave an executable, production-minded codebase. If the repository already uses an appropriate stack, extend it rather than rebuilding blindly.

IMPORTANT: THIS IS NOT AN ORDINARY REAL ESTATE WEBSITE. It must feel like entering a secluded, serene, architecturally refined sanctuary. It is a cinematic editorial journey about transforming human life through nature, conscious systems, profound calm, wellness, family, and innovation. Houses are one part of the proposition, NOT the primary narrative.

## 0. INPUTS, SOURCE OF TRUTH, AND CURRENT ASSETS

Review any project files already provided in the workspace before touching code. In particular, when available, inspect:
- `Sustainable_Gated_Community_Feasibility_Research_Report.pdf`: concept-stage feasibility report from 16 October 2026. Use for accurate scope, operational realism, public/private zoning, phased delivery, and claim restrictions. It is not an engineering approval, government clearance, or proof of delivered systems.
- `Masrul_Private_Concierge_With_Video.zip` OR existing `masrul_concierge_prototype/`: preserve and evolve the existing working Private Concierge flow and visual patterns; do not throw away working logic.
- `Masrul_Original_Concept_Film.mp4` or bundled `masrul_concierge_prototype/assets/hero-ambient.mp4`: use this video as an immediately available asset if present. This is a 15-second, silent, stylized 1280x720 original concept animation. It is not actual site footage or photorealistic drone footage.
- `masrul_concierge_prototype/assets/hero-poster.jpg`: use as a video fallback if present.
- Any approved logos, brand identity, actual site photos, architectural drawings, approved renders, masterplan geometry, developer details, or project data that have been provided.

If a source asset is absent, continue with documented fallbacks; do not invent a file, image, video, approved plan, property data, or partner. Make a short asset inventory and requirements checklist in `/docs/` before implementation. No need to stop for approval unless a genuine technical blocker prevents meaningful progress.

Priority order for conflicts: (1) explicit requirements in this prompt, (2) verified project material and approvals, (3) existing working prototype and assets, (4) carefully labelled illustrative design content, (5) sensible implementation defaults. Never let marketing copy override engineering or legal reality.

## 1. THE PROJECT AND ITS CENTRAL IDEA

Working brand: TRANSFORMATIVE LIVING
Location context: Masrul, Nashik, Maharashtra, India, against the Sahyadri / Western Ghats landscape.
Category: Concept-stage ultra-luxury, low-density, nature-centric integrated community / eco-sanctuary.
Audience: discerning families, entrepreneurs, global Indians, HNIs, multi-generational households, people seeking privacy, authentic nature, architecture, long-term wellbeing, and environmentally responsible living.

Core belief: We are not selling luxury villas. We are introducing a different way to live. Solar power, potential hydrogen systems, circular waste, rainwater strategies, native landscapes, soil, community agriculture, and wellness are enabling systems, not isolated amenities.

Positioning:
"More than a home. A different way to live."
"A vision for life in harmony with nature."
"Where innovation grows quieter, and life grows richer."

Brand promise: A living ecosystem designed to reconnect people with the natural world while offering uncompromising comfort, privacy, craftsmanship, and meaningful community relationships.

The user's voice direction is essential: highlight SOLAR, HYDROGEN AS A FUTURE FEASIBILITY OPTION, ZERO WASTE, OXYGEN PARKS, and the broader ecosystem, but bring them together under TRANSFORMATIVE LIVING. Do not build a premium-house sales catalogue. Show how this vision can enrich the HUMAN experience: time, peace, active life, nourishment, intergenerational connection, mindful living, and relationship with nature. Do not suggest human physiology is literally modified or guarantee health outcomes.

## 2. WHAT THE FINAL WEBSITE MUST FEEL LIKE

Creative reference category: world-class nature-led hospitality, architectural journals, contemplative luxury retreats, editorial travel films, and premium design studios. Never imitate one particular brand.

The visitor should feel these emotions in sequence:
1. Curiosity - where am I?
2. Awe - nature and architecture in rare harmony.
3. Reassurance - this vision has a thoughtful philosophy.
4. Discovery - I can understand the ecosystem behind it.
5. Desire - I can imagine the lived experience here.
6. Trust - ambitious statements are supported by transparent status and feasibility.
7. Invitation - I want a private conversation.

Rule: SHOW the transformation, then EXPLAIN the infrastructure, then INTRODUCE the residences, then INVITE enquiry.

Avoid corporate dashboards, generic sustainability icon grids, cookie-cutter property listing cards, glossy gold everywhere, enormous CTA repetition, heavy card shadows, artificial neon green, random spinning 3D objects, fake testimonials, and instant 'Book Now' commerce language.

## 3. VISUAL ART DIRECTION - MANDATORY

Design tokens:
- Forest sage `#2C3E35`
- Deep pine `#152B23`
- Earth brown `#3D312A`
- Warm linen `#F5F2EB` / `#F7F4ED`
- Champagne gold `#C5A059` used sparingly
- Off-white text over dark films; basalt gray for subdued captions

Typography:
- Cinematic editorial headings: Cormorant Garamond (or an equally high-quality accessible serif)
- Body / navigation / forms: Plus Jakarta Sans or DM Sans
- Large expressive type with tight editorial copy; keep readable contrast and avoid extremely thin small text.

Photography:
- Use genuine, licensed, non-AI photography, preferably verified photography of Masrul/Nashik/Sahyadris when supplied. Otherwise use genuine relevant regional/architectural stock as clearly labelled illustrative imagery.
- Natural monsoon greens, realistic seasonal hills, basalt textures, native woodland, morning haze, rain on stone, gentle sunlight, courtyards, handmade materials, gardens, family moments without stock-photo posing, authentic farming, and quiet ritual.
- Realistic Maharashtra geography and climate. Do not pass off Alps, Balinese tropical resorts, fake waterfalls, implausible mountain villas, or random aerial images as Masrul.
- No AI-generated imagery. No synthetic-looking luxury villas, impossible greenery, exaggerated HDR, plastic grass, neon skies, fake building plans, or imaginary approved architecture.
- Download and optimize properly licensed images as local assets where permitted; avoid unstable hotlinks in the final production build. Document source URL, creator/license/attribution requirements, and whether the image is illustrative in `/docs/IMAGE_ASSET_REGISTER.md`.
- Never represent stock imagery, conceptual art, 3D mockups, or the supplied stylized concept film as site-verified footage.

Video:
- Hero MUST use the bundled original concept MP4 if available (`assets/hero-ambient.mp4` or `Masrul_Original_Concept_Film.mp4`). Copy to the appropriate public media folder; preserve source in repo where permissible.
- Use a high-quality poster and fallback image; do not ship a blank hero if video is missing.
- Use a muted, autoplaying, looping, playsInline hero video on eligible devices; allow pause/play and 'View Film' in an accessible dialog. Do not autoplay audio. Honor reduced motion, visibility, low-power contexts, and data-saving preferences. Consider adaptive smaller mobile media or poster-only when appropriate.
- Do not add a fake audio button if there is no sound track. Do not invent a photorealistic video or replace the bundled film with a broken hosted URL.
- Clearly label as 'Concept film | Illustrative', not footage of a completed project.

Layout principles:
- Full-bleed opening frames, disciplined whitespace, beautiful asymmetry, immersive image sequences, restrained linework, beautiful negative space, thin editorial dividers, subtle image masks, layered depth, panoramic transitions, and occasional intimate close-up frames.
- Scrolling should feel like chapters in a documentary, NOT like stacking standard web sections.
- Movement should be deliberate and graceful: gentle slow zoom, subtle fades, small vertical reveals, foreground-background depth when performant. Never obstruct reading or navigation.
- Every interaction MUST work on touch/mobile; provide a non-animated fallback.

## 4. SITEMAP AND NAVIGATION

Create a polished responsive multi-page experience with a powerful narrative homepage:
- `/` - Immersive storytelling homepage / full experience
- `/vision` - Philosophy, Transformative Living manifesto, a day transformed
- `/ecosystem` - Six living systems, energy/water/waste/nature/food/human life
- `/architecture` - Biophilic residences, materiality, light, privacy, customization
- `/experiences` - Wellness, nature, farm, spirituality, sports, education and community
- `/place` - Masrul/Nashik landscape, genuine location context, no fabricated coordinates
- `/masterplan` - Illustrative interactive masterplan, status clearly indicated
- `/private-concierge` - Complete concierge journey and enquiry
- `/privacy` and `/terms` - truthful basic privacy/legal pages based on known operator details; use clear 'information to be supplied' placeholders if unknown, not fabricated legal claims.

Top-level nav should remain restrained: 'The Vision', 'Living Ecosystem', 'Architecture', 'Experiences', 'The Place', and the prominent but understated 'Private Concierge'. Masterplan may live under Architecture or Experiences, and legal links in footer.

Homepage chapters should remain navigable with anchor links and a discreet progress indication. A user must be able to skip cinematic content and go directly to enquiry. Persistent menu must be legible over both dark and light scenes. On mobile, use accessible menu with properly managed focus.

## 5. EXACT NARRATIVE HOMEPAGE STORYBOARD

Build and polish the following eight chapters. Do not reduce them to generic feature cards. Use meaningful imagery, editorial headlines, custom composition, meaningful animation, and differentiated layouts per chapter.

CHAPTER 01 - THE ARRIVAL / 'A different rhythm of life'
Scene: cinematic video of Sahyadri-inspired landscape, soft moving mist, subtle ambient motion. Present brand and the project as a vision, not as delivered construction.
Eyebrow: 'MASRUL | NASHIK | A NEW VISION OF LIVING'
Headline option: 'Life, as nature intended. Luxury, as you deserve.'
Supporting line: 'A private vision of regenerative living, crafted around the things that make life meaningful.'
CTA primary: 'Enter the Story' -> smooth scroll to manifesto.
CTA secondary: 'Request a Private Introduction' -> concierge.
Add elegant scroll invitation and a non-intrusive 'Concept film' indication. Video must remain subordinate to legible headline text.

CHAPTER 02 - THE PHILOSOPHY / 'More than a home'
Scene: calm editorial layout with a single full-height nature photo on one side and meticulously typeset manifesto on the other.
Key message: Traditional luxury measures ownership. Transformative luxury measures quality of life: cleaner design choices, privacy, nature, nourishment, meaning, time, intergenerational connection, and thoughtful resource use.
Manifesto sample: 'Imagine a place where nature is not a weekend escape. Where energy is considered, water is respected, food has a known origin, and the day begins with room to breathe. Not another address. A different way to live.'
Use a purposeful animated line or highlighted phrase as viewer scrolls. No inflated claims.

CHAPTER 03 - A DAY TRANSFORMED / 'Experience the day before the address'
THE SIGNATURE INTERACTIVE ELEMENT. Create a beautiful timeline for a hypothetical day with at least five states:
- 06:00 | Breathe: dawn light, garden walk, native trees, mindfulness.
- 09:00 | Nourish: breakfast, local produce, gardens, proposed local dairy.
- 13:00 | Live: shaded courtyards, responsive architecture, quiet smart systems.
- 17:00 | Flourish: family, recreation, sport, learning, nature experiences.
- 20:00 | Restore: intimate warm interiors, night gardens, calm, privacy.
On desktop, consider pinned image/film panel while the timeline scrolls. On mobile use swipeable or button-controlled steps, no hostile scroll-jacking. User can click any time; each state changes real imagery, title, caption and scene tone. Include keyboard support.
Optional 'Season / Daylight' toggle: summer/monsoon/winter and morning/afternoon/evening, with visual storytelling only. Do not claim precise site solar study, air-flow CFD, AQI, or oxygen data without actual model/sensors. Label any schematic 'illustrative visualization'.

CHAPTER 04 - THE LIVING ECOSYSTEM / 'Six systems. One living philosophy'
Visual: bespoke circular ecosystem map / organic interactive ribbon / intelligent SVG illustration showing how systems support each other. This is not a dashboard and not six plain stock cards.
Six primary interconnected pillars:
A. Conscious energy: passive-first building design, efficient all-electric systems, solar PV, battery resilience, smart monitoring, EV charging; hydrogen only an assessed FUTURE option.
B. Water stewardship: harvesting, bioswales, retention, treatment, recycled non-potable water, responsible landscaping, groundwater care.
C. Circular material flows: segregation at homes, shared managed recycling, compost, responsible disposal, soil regeneration, construction material recovery.
D. Nature and biodiversity: native micro-forests, shaded trails, rain gardens, biodiversity, forest bathing, landscape-led quiet spaces. 'Oxygen Park' may be used as the proposed amenity name but NEVER claim clinically significant enriched oxygen levels.
E. Farm-to-table nourishment: household kitchen gardens, seasonal produce, aquaponics/vertical growing where feasible, local farmer partners, proposed A2 Gir dairy and door-to-door produce concept subject to operations and verification.
F. Human flourishing: healthful design intentions, yoga, wellness, family, spirituality, education, play, sport, cultural life and community connection.
Interaction: clicking a system opens a graceful panel with three layers: 'How life may feel', 'How the system could work', and 'Current project status / what requires verification'. On mobile present accessible accordion/tabs. Reuse this content on `/ecosystem` in greater depth.

CHAPTER 05 - ARCHITECTURE IN HARMONY / 'The quiet confidence of thoughtful design'
Visual: authentic material details and natural architectural reference photography: locally appropriate basalt, lime plaster, natural wood, terracotta, crafted brick, double-glazed low-E glazing as a planned specification, deep shade, cross-ventilation, natural daylight, private courtyards, indoor-outdoor connections, high-volume ceilings and considered privacy.
Copy emphasizes purity of material choices, craftsmanship, climate-responsive comfort, private space and 'invisible technology' (sensors, irrigation, comfort automation) as proposals.
Show villa categories ONLY if verified by plans; otherwise create aspirational material / design-language experiences, not fake floorplans, invented room counts or prices.
Create a functional moodboard-like 'Private Villa Design Atelier' with finish selections (basalt, terracotta, natural timber, lime), lighting mood, landscape preference and roof garden concept. State 'Design exploration - options subject to architect approval'. If architectural imagery is missing, use neutral real reference photos or abstract material swatches, never fabricated approved renders.

CHAPTER 06 - THE WORLD WITHIN / 'A community shaped around living well'
Present a richly photographed editorial journey of aspirations:
- Oxygen parks, shaded forest-bathing loops, yoga pavilions, outdoor meditation.
- Temple precinct with natural materials, Jain temple and inclusive multi-faith quiet facilities, respecting public/private access.
- Proposed farm-to-table market, kitchen gardens, produce partnerships and Gir cattle dairy concept.
- Wellness spa with possible hydrotherapy and natural therapies, where feasible and professionally operated.
- School / nature academy and learning environments as future institution subject to operator, licensing, demand and phasing.
- Tennis, 50m pool concept, indoor sports, mini-golf, skating and family recreation, subject to site area, standards, lifecyle cost and operator viability.
- Health/clinic concept; do not promise a full hospital until operator/capacity/licensing are verified.
Avoid presenting amenities as built, open, available to book, internationally certified or included in home price if unknown.
Prefer 2-3 immersive interludes or story spreads to a long directory of amenity tiles; provide a separate expandable index for visitors seeking complete information.

CHAPTER 07 - THE FUTURE / 'Designed to give the future more consideration'
Tell the systems story with sober ambition. Include an interactive design/impact exploration that is transparent and never fabricates live metrics.
Components to consider:
- Illustrative energy balance explorer with user-visible assumptions, NEVER unverified '100% carbon neutral power'.
- Rainwater concept calculator only with user-supplied roof area, rainfall and runoff factor. Formula: liters = roof catchment m2 * annual rainfall mm * runoff coefficient. Explain that this is a simple annual illustration, not site water autonomy.
- Waste-loop diagram with household segregation -> managed processing -> reuse/disposal; no fabricated diversion numbers.
- Tree / biodiversity narrative with objectives, not invented survival rates or oxygen measurements.
- A 'What is proposed / what is validated / what comes later' status explanation. If available, render measured data only from real verified feeds with collection times and sources; do not label fake counts as LIVE.
- Optional future integration of solar + hydrogen technology as a 'subject to specialist feasibility' concept, never active guaranteed infrastructure.
Add a tasteful location/masterplan preview, with interactive zone pins and clear non-survey caveat if precise plan not supplied.

CHAPTER 08 - PRIVATE INVITATION / 'Every extraordinary place begins with a conversation'
Transition from emotional storytelling to understated conversion. Avoid hard sales and scarcity pressure.
Invite to 'Request a Private Introduction', 'Explore the Vision with Our Team', 'Discuss Sustainability', 'Request the Project Dossier'. Link or embed the working Private Concierge journey.
Closing line: 'We invite you to explore a different way to live.'
Build a premium cinematic footer with meaningful navigation and truthful legal/project disclosure.

## 6. FULL SECONDARY PAGE REQUIREMENTS

`/vision`: full editorial manifesto, principles, 'A Day Transformed' expanded view, human-centered design, why nature and intelligent engineering belong together; no forced claims about medical benefits.

`/ecosystem`: six-system deep dive with interactive flows and maps. Include solar-energy strategy; prospective hydrogen (clearly feasibility-only); water harvesting/recycling; soil, compost and waste; native planting/Oxygen Park; local foods/farm/dairy; dashboard methodology and long-term environmental governance. Use simple explanatory illustrations with annotations, not stock charts.

`/architecture`: architectural vision, responsible materiality, passive-first comfort, daylight and ventilation, privacy, low-density aspiration, design atelier, contact CTA. Do not create fake approved floor plans.

`/experiences`: journey through nature, mindful spaces, multi-faith areas, farming, nutrition, wellness, sport, education, healthcare and family life. Label conceptual/phased amenities discretely and truthfully.

`/place`: grounded story of Masrul, Nashik and the regional Sahyadri landscape. If exact parcel coordinates, boundary, roads, distances or approved access information are missing, show only a general region illustration and avoid inaccurate pins, unverified distance-to-airport promises and unsupported clean-air/microclimate readings.

`/masterplan`: Build an attractive, responsive INTERACTIVE CONCEPT MAP using SVG or high-quality illustrated layout, not a fake cadastral survey. Group zones: private residential clusters; green-blue infrastructure; utility/waste zone; sports & wellness; civic/retail edge; quiet/spiritual zones. Public edge, semi-public civic center, private residential core should be kept conceptually separate. Pins open details with proposed facilities, status and visitor-facing explanation. Do not imply scale, boundaries, plot numbers, legal approvals or precise layouts if not supplied. Only use a photoreal 3D masterplan if an approved model exists.

`/private-concierge`: reuse and improve the prior working prototype rather than swapping it for a contact form.

## 7. PRIVATE CONCIERGE - FUNCTIONAL END-TO-END UX

Provide four choices:
1. Private Site Consultation (REQUEST ONLY; subject to safe/site availability; not instantly confirmed)
2. Virtual Design Conversation
3. Sustainability Dialogue
4. Request the Project Dossier (if no approved dossier exists, register interest instead of promising immediate document delivery)

Create a graceful four-step process:
Step 1: Experience + interests. Select intent and relevant subjects: energy, water, nature, architecture, food, wellbeing, community.
Step 2: Visit/contact preferences. In-person / virtual / phone / email, preferred future date/time window, city, number of visitors if relevant, optional notes.
Step 3: Contact details. First/last name, email, internationalized phone if supplied, preferred contact method, required request-contact consent, separately OPTIONAL marketing consent.
Step 4: Review + edit + send request. Clear progress, back/forward, field-level validation, keyboard and screen reader support, no data loss between steps. On success show 'Enquiry received' ONLY if a functioning backend actually persisted/delivered it, otherwise explicitly say 'Demo request prepared; not sent'. Never 'Your tour is confirmed' without real scheduling backend and availability.

The helicopter concept must NOT be offered as a guaranteed tour or a live booking option. Aviation permissions and site feasibility have not been established.

Backend strategy:
- If genuine server, database and outbound email/CRM configuration are available: implement secure `/api/enquiries` using typed validated schema (e.g. Zod), rate limiting, spam honeypot/bot defense, safe logging without unnecessary PII, sensible data retention, error handling and idempotency against double submissions; save securely and notify only approved recipients. Keep credentials server-side through environment variables. Do not invent contact recipients, email credentials, client databases or send unauthorised email.
- If not configured: implement a polished demo adapter with explicit 'Demo mode - no information transmitted or stored remotely', local-only preview/download if appropriate, and `/docs/CRM_INTEGRATION_SPEC.md` describing exact production wiring. No fake persistence or false success notifications.
- Document privacy basis and consent expectations in India; do not make a false claim that DPDP or RERA compliance is guaranteed. Obtain project-specific legal review prior to going live.

## 8. VERIFY FACTS AND AVOID GREENWASHING

Create `/docs/CONTENT_CLAIMS_MATRIX.md` with every material public claim classified as:
- Verified / approved for publication (source documented)
- Design ambition / conceptual (clearly labelled)
- Conditional / subject to feasibility, licensing, ownership, or phasing
- Unverified / do not publish as factual

STRICT NON-NEGOTIABLES:
- Do NOT say 'Nashik's first zero-carbon sanctuary' unless independently substantiated and legally approved.
- Do NOT claim absolute zero carbon, net positive, 100% renewable electricity, 100% water autonomy, zero chemical food, medical-grade oxygen benefits, 300+ days of optimized sunlight, or real-time air quality without corresponding verified studies, certification, instrumentation and legal/marketing approval.
- Do NOT imply hydrogen is economically viable or installed. Report treats it as possible specialist future consideration only.
- Do NOT say a helipad, helicopter tour or aviation transfer is available. Feasibility and authority clearances are conditional.
- Do NOT say 'organic certified' for milk/food/suppliers unless certified and verified. Do NOT treat on-site Gir cattle, aquaponics, a school, hospital, Olympic/competition-certified pool, international arena, or spa as completed or guaranteed.
- Do NOT invent unit inventory, prices, projected ROI, possession date, actual address/coordinates, architect credentials, partners, RERA registration, sustainability awards, specific climate readings, or testimonials.
- When site-specific details are missing, use tasteful and precise placeholders in editable project content configuration, NOT public-facing fake information.
- Express aspirations as 'envisioned', 'proposed', 'planned subject to approvals' where appropriate. Consider the distinction between net-zero operational energy and full lifecycle carbon. Sustainability is a measurable practice, not an empty promise.

The feasibility report recommends a phased low-carbon mixed-use development and indicates that passive design, rooftop/common solar, water harvesting/reuse, waste processing and farmer partnerships are the strongest early priorities. Hydrogen, helipad and several high-capital facilities remain conditional. Follow that hierarchy in visuals and copy.

## 9. IMPLEMENTATION ARCHITECTURE AND COMPONENTS

First inspect actual repo and installed tools. Prefer extending existing sound stack. If starting from scratch, recommended production-minded stack:
- Next.js App Router + TypeScript
- Tailwind CSS for layout/tokens plus focused custom CSS for cinematic typography and sequence transitions
- Framer Motion/Motion or GSAP ScrollTrigger selectively for scroll scenes (choose one main animation system, avoid package bloat)
- Server Components when possible, use client components only where needed
- Optimized `<Image>` for real photography, semantic `<video>` for hero, native accessible controls
- Zod validation for enquiries and typed content
- Playwright for critical browser flows if available; unit tests for logic and validation

Proposed component organization (adapt to actual repo):
- `components/layout/` Header, Navigation, Progress, Footer
- `components/story/` HeroFilm, EditorialScene, SceneTransitions, ADayTransformed, Manifesto, StoryProgress
- `components/ecosystem/` EcosystemMap, SystemDetail, CircularFlow, ImpactExplorer
- `components/architecture/` MaterialAtelier, LightAndAirView, VillaConcept
- `components/masterplan/` ConceptMasterplan, ZoneDetail
- `components/concierge/` ExperienceSelector, JourneyStepper, ContactForm, Review, Confirmation
- `components/ui/` controls, dialog, disclosure, typography, media fallbacks
- `data/` editable narrative chapters, amenities, statuses, assets and all project-specific content
- `lib/` schema, privacy helpers, integrations, analytics, validation
- `public/media/` verified project and licensed illustrative assets
- `docs/` source register, assumptions, claims matrix, editorial guidelines, asset registry, integration/QA notes

Use strong separation of project facts, design-copy, and UI. A content editor must be able to change a pending concept to confirmed after written approval without rewriting components.

Avoid installing heavy 3D libraries or global smooth-scroll frameworks simply for visual novelty. Dynamic imports and graceful fallback for any complex feature. Avoid scroll-jacking and stutter on midrange mobile devices.

## 10. UI/UX AND ACCESSIBILITY ACCEPTANCE

- Full responsive experience at 320, 375, 430, 768, 1024, 1440 and 1920 CSS pixel widths; no horizontal overflow and no unreadable tiny copy.
- Distinct desktop and mobile art direction, not just shrinking desktop.
- Sections show sufficient contrast over video/photos; use readable overlays.
- Navigation, mobile menu, accordions, tab interactions, project map, configurator, impact calculator, media viewer, and enquiry steps all FUNCTION.
- Keyboard focus is always visible; Escape closes modal; focus returns to trigger; form error text accessible; images have meaningful alt text; semantic headings.
- Respect reduced motion, zoom up to 200%, screen readers, and touch input; no essential story content is only revealed on hover or with animation.
- Include explicit video pause/play and fallback poster; audio defaults silent.
- Use sensible gallery controls rather than autoplaying multi-image carousels.
- Enquiry progress is preserved when navigating backward; guard double-submits; meaningful server/offline/error states.
- Navigation CTA and all interactive elements have correct destinations; never leave a decorative fake button.

## 11. CONTENT, SEO, PRIVACY AND PERFORMANCE

SEO:
- Relevant page-specific metadata, title descriptions, OG images with rights clearance, semantic H1-H3 hierarchy, sitemap and robots as appropriate.
- Structured data only for verified facts; do not publish invented LocalBusiness addresses, product/offers, coordinates or reviews.
- Genuine natural-language copy; avoid keyword-stuffed phrases and fake rankings.

Performance:
- Target Core Web Vitals: LCP <=2.5s, CLS <0.1, INP <=200ms under realistic test conditions; report achieved results honestly rather than claiming them.
- Compress/streamline hero MP4; explicit poster; critical still image fallback; optimize real images to WebP/AVIF where appropriate; lazy-load below fold; preload only critical media.
- Avoid huge JS bundles, expensive perpetual canvas effects, and animations of layout properties when transform/opacity suffice.
- Media loading, fallback, and error paths must not leave black screens.

Security and privacy:
- Never commit `.env` secrets, developer keys or unapproved visitor personal data.
- If analytics is enabled, record privacy-conscious events (e.g., chapter_viewed, experience_selected, concierge_step_completed, enquiry_submitted) without PII; don't invent analytics integrations.
- If cookies/non-essential trackers are introduced, implement appropriate consent UX. Do not show a meaningless cookie banner when none is needed.
- Use safe external links, server validation, rate limiting, CSRF protection when architecture requires it, and dependable error feedback.
- Disclose concept-stage project status where appropriate. Use neutral placeholder for project legal/operator details until supplied.

## 12. VISUAL MICRO-INTERACTIONS - QUALITY BAR

Implement some, not necessarily all, of these carefully chosen high-quality interactions:
- Chapter progress indicator that marks Arrival -> Philosophy -> Day -> Ecosystem -> Architecture -> Experiences -> Future -> Private Invitation.
- Scroll-revealed manifest line with editorial pacing.
- Slow hero media zoom and subtle fade to first story scene.
- The 'A Day Transformed' pinned desktop visual with time selections, mobile alternate layout.
- Ecosystem connections that subtly illuminate when an element is chosen.
- Honest solar/water flow graphics with meaningful narration, not fabricated live telemetry.
- In-place material swatch transitions in the Villa Atelier.
- Concept masterplan pins with considered detail drawers and keyboard support.
- Understated page transitions and hover states.
- Private Concierge step changes that feel calm and reassuring, not gamified.

Prioritize stillness, clarity, refinement and reliability over effects. No gratuitous page loader longer than actual assets require. No giant animated mouse cursor.

## 13. EXECUTION PLAN - DO THE WORK, DO NOT ONLY DESCRIBE IT

PHASE A - INVENTORY AND BASELINE
1. Inspect repo, app stack, existing routes/components, assets, tests, package scripts, working prototype and feasibility report.
2. Record baseline build/test state and changes in `/docs/IMPLEMENTATION_NOTES.md`.
3. Preserve working assets, private concierge interactions, project files, and existing links. Do not destroy unrelated files or production data.
4. Create `/docs/REQUIREMENTS_TRACEABILITY.md` mapping these sections to implementation files and validation.

PHASE B - DESIGN SYSTEM AND MEDIA
5. Define tokens and responsive editorial typography, grids, focus states, buttons, media controls.
6. Integrate hero film and poster locally; verify playback and fallback.
7. Build image asset registry with genuine photography and license/source records. If network access is unavailable, produce graceful local fallbacks and document any missing images rather than silently substituting AI renders.

PHASE C - IMPLEMENT NARRATIVE
8. Build complete homepage scenes in exact conceptual order above.
9. Build `A Day Transformed`, six-system interactive ecosystem, material atelier, illustrative masterplan and any transparent impact calculations.
10. Build all secondary pages with cohesive content and routes.
11. Preserve or rebuild the concierge flow with parity to existing working features and improved integration. Never regress existing validation or mobile behavior.

PHASE D - REAL FUNCTIONALITY
12. Implement enquiry API or explicit demo adapter based on actual credentials/infrastructure. Add validation, spam mitigation, privacy/consent, and error feedback.
13. Wire all navigation, buttons, modals, inputs, calculators, light/view switches, filters and downloads. No inert features.
14. Implement SEO, privacy, error boundaries, empty states, accessibility, responsive media loading and operational documentation.

PHASE E - QA AND POLISH
15. Run install (as appropriate), typecheck, lint, build, existing unit tests, browser interaction checks, and route smoke tests.
16. Exercise full desktop and mobile story; check film, menus, tabs, map, atelier, impact explorer, all enquiry paths, validation, review/back buttons, submitted/demo state, reduced motion, keyboard accessibility and media fallbacks.
17. Capture desktop and mobile screenshots at key chapters and compare against the premium art direction. Iterate where layouts feel generic, stretched, overcrowded, inconsistent, synthetic, or broken.
18. Remove placeholder lorem ipsum and broken links. Keep only legitimate, clearly marked unknown project details.
19. Write `/docs/FINAL_ACCEPTANCE_REPORT.md` identifying completed features, test commands and results, design decisions, missing source assets, project statements awaiting owner verification, and deployment blockers.
20. Finish with a concise summary: changed/created files, runnable commands, URL/routes, asset use, screenshot locations, which features are real vs demos, known gaps, and next steps. Do not claim production-ready when integration or legal/source verification remains incomplete.

## 14. FINAL ACCEPTANCE GATES

Do not declare complete until the following conditions are true or the specific blocker is honestly documented:
[ ] The site tells a coherent luxury lifestyle STORY, not a list of houses/features.
[ ] Hero contains integrated functioning video or an explicitly documented fallback.
[ ] Existing concept film is not mislabelled as actual property video.
[ ] Real natural imagery is used; no generative-AI-looking site images.
[ ] Major sections and full route structure are built with excellent responsive design.
[ ] Six pillars are represented accurately, with status differentiation.
[ ] Solar, hydrogen, zero-waste, water, parks, farming, spirituality, school/sports/healthcare and architecture topics are covered.
[ ] A Day Transformed is meaningfully interactive on desktop and mobile.
[ ] Architecture/material experience is functional and avoids fictitious approved plans.
[ ] Masterplan is usable and labelled concept-only until verified geometry is supplied.
[ ] No fabricated ecological figures, oxygen health claims, market/approval statements, prices, inventory, or tours.
[ ] All concierge experiences can be selected and progress through all form stages.
[ ] Visitor data is not falsely claimed to be submitted without a working backend.
[ ] Keyboard, mobile, reduced-motion and accessible media controls work.
[ ] Build/typecheck/tests executed; problems corrected or explicitly documented.
[ ] Source/asset registry, claims matrix, integration instructions and launch checklist exist.

## 15. CREATIVE DIRECTOR'S FINAL TEST

Before finalizing, look at the first 90 seconds of scroll through the website and ask:

'If I removed the logos and the project name, would this still be identifiable as a distinctive, serene, profoundly premium nature sanctuary? Or would it look like any other housing website?'

If it feels generic, redesign the narrative sections and imagery until the first answer is clearly YES. Do not fix mediocrity with more animations or stock amenities. Fix it with authentic atmosphere, meaningful editorial storytelling, better composition, silence, and detail.

The core brand thought must remain unmistakable from first frame through last invitation:

'NOT JUST A PLACE TO LIVE. A NEW WAY TO EXPERIENCE LIFE.'

START NOW: inspect the workspace and assets, make an implementation checklist, then build and verify the full experience. Do not stop at a wireframe, high-level plan, Figma-style image, or static homepage. Deliver working code and honest evidence of completed functionality.
