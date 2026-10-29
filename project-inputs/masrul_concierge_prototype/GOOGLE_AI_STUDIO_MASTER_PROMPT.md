# GOOGLE AI STUDIO — MASTER BUILD PROMPT

## Your role
Act as a creative director, senior product designer, luxury hospitality brand strategist, conversion UX specialist, and production-quality React/TypeScript frontend engineer. Build a finished, visually sophisticated, responsive, interactive **Private Concierge** experience for a proposed ultra-luxury biophilic community in **Masrul, Nashik, Maharashtra, India**. The working brand is **TRANSFORMATIVE LIVING**; keep brand identity configurable.

The intended feeling is entering a quiet, exclusive nature estate, not visiting a generic real estate sales portal or filling out a lead-generation popup. Every interaction must embody discretion, slow luxury, serenity, craftsmanship, and personal attention.

**Primary objective:** Offer a genuine private-introduction journey, allowing a visitor to choose how they would like to learn about the vision and to submit an enquiry only when a backend is later connected. The website must be a polished, running prototype now, not a static mockup.

## Ground truth and claim boundaries
The project is currently concept-stage; the feasibility document is preliminary, not proof of installed amenities, regulatory approvals or engineering performance. Never claim any amenity is operational, approved, already built, certified, or bookable unless I provide written, verified project information. Location wording: "Masrul, Nashik"; do not invent a street address, GPS coordinates, landmarks, plot dimensions, unit inventory or completion date. Do not fabricate a real project logo, client contact address, phone number or person.

Solar power, wastewater recycling, circular waste management, local food systems, architecture, native trees and wellness are intended parts of the vision. Green hydrogen is a future specialist feasibility area, not guaranteed infrastructure. A helipad/helicopter tour is **not** to be offered as a bookable option because aviation feasibility/approval has not been demonstrated. Do not show invented oxygen / AQI statistics, carbon neutrality percentages, water autonomy metrics or 300-day sunshine claims. Do not imply nature parks medically increase oxygen levels or cure health conditions. A "site consultation" is merely a request pending actual site access, safety and team availability.

Use these truthful tonal examples:
- "A conversation before a commitment."
- "The art of arriving."
- "A quieter life. A richer connection."
- "Some places deserve more than an ordinary introduction."
- "A vision for intentional living in harmony with nature."

Avoid hard-selling copy, fake exclusivity/scarcity, fake client testimonials, pricing, invented accreditations, guaranteed returns or deceptive countdown timers.

## CRITICAL: Real photography, never AI-looking images
This requirement is NON-NEGOTIABLE.
1. Use only **authentic, real-camera photography** obtained from reputable, appropriately licensed sources such as Unsplash, Pexels, approved photographer libraries or directly supplied location photographs. Do **not** invoke generative image models, image-to-image tools or create synthetic rendered scenery.
2. The images must look natural and documentary/editorial: real Sahyadri / Western Ghats terrain, uneven foliage, genuine mist and daylight, real trees and soil, tactile stone and timber, naturally lived-in architecture, and subtle depth of field. Preserve small real-world imperfections.
3. Do **not** use glossy, artificial, cinematic CGI villas, physically impossible mountains, hyper-saturated neon-green forests, plastic-looking leaves, unnaturally perfect people, exaggerated HDR, fake light shafts or overprocessed photos.
4. Prefer carefully art-directed photography with muted greens, natural warm stone, real daylight and accurate regional character. Do not present generic foreign architecture as a photograph of this property. No recognizable third-party luxury project should be passed off as this development.
5. Use image captions when appropriate: "Illustrative regional photography — not the project site" and "Representative architectural photography — not project imagery."
6. For an immediate working prototype, you may use these genuine-photo URLs as examples:
   - Natural Western Ghats photograph (Bhandardara, not project site): https://images.unsplash.com/photo-1689473679858-52767a72609f
   - Naturally lit forest: https://images.unsplash.com/photo-1448375240586-882707db888b
   - Actual contemporary residential interior photo: https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea
   These are not proven site photos. If those images are inaccessible, choose another verifiably authentic licensed photograph or use a restrained CSS fallback, **not** an AI-generated replacement.
7. Optimize photo formats, dimensions, loading and responsive crops. Include visible image credits or an internal image-rights inventory with URLs, licenses, usage restrictions and attribution as appropriate.

## NEW: Integrate the locally generated hero film — required
The uploaded prototype now includes a **genuine working original MP4 video**; USE THIS EXACT PROVIDED FILE. Do not fabricate a streaming URL, silently drop the media, replace it with a YouTube embed, or regenerate an AI fantasy scene.

Files supplied in the uploaded ZIP:
- `assets/hero-ambient.mp4` — original 15-second **silent**, 1280×720, H.264 concept animation of layered Sahyadri-inspired green hills with atmospheric mist. Optimized to ~1 MB. It is artistic artwork, **not photography or film of the Masrul site**.
- `assets/hero-poster.jpg` — locally bundled fallback poster.
- `index.html` — updated working reference with controls, video modal and reduced-motion logic.
- `assets/generate_ambient_film.py` — reproducible procedural source if useful.

**Video implementation (must work on desktop and mobile):**
1. Place the MP4 in the public assets folder (or import it as a bundled build asset, depending on project setup) and reference an actual accessible built URL. Confirm playback in the app Preview; do NOT simply mention a missing asset. Use the original MP4 from the ZIP.
2. Integrate as a low-key, cinematic moving layer in the hero. Use a **genuine nature photograph** beneath the film when it is available: https://images.unsplash.com/photo-1689473679858-52767a72609f. Avoid passing off either scene as the actual site.
3. `autoPlay`, `muted`, `loop`, `playsInline`, `preload="metadata"`, and `poster` are appropriate for the silent background. If autoplay fails, show poster and keep a manual Play motion control.
4. Add fully functional **Pause motion / Play motion** and **View film** controls. View film opens an accessible dismissible dialog or modal with native video controls, a clear Close action, focus handling and Escape support. The hero pauses while the modal plays and resumes afterward only if user/motion settings permit.
5. Respect `prefers-reduced-motion: reduce`, screen-reader labels, tab visibility, and offscreen pausing. Do not autoplay if user settings prevent motion or browser data-saver settings make it unsuitable.
6. Do not animate form elements or block enquiry input while media loads. Forms and CTAs must be usable even if video decoding/network fails.
7. Display a discreet caption: **“Illustrative regional photograph + original moving concept artwork. Not actual project site.”**
8. Do not add music, artificial birdsong, false voiceover or claims of real drone footage. Keep this a restrained, editorial film treatment.

If the editor cannot access the ZIP assets, ask for the actual files or continue with a **clearly marked placeholder**—never claim the film works when its MP4 is missing.

## Visual art direction
- Palette: Forest sage `#2C3E35`, deeper pine `#152B23`, warm linen `#F7F4ED` or `#F5F2EB`, warm off-white `#FFFDF8`, deep earth `#3D312A`, muted champagne gold `#C5A059`, restrained terracotta `#AE755C`.
- Use **Cormorant Garamond** for large literary/editorial headings and **DM Sans** or **Plus Jakarta Sans** for body text and interfaces.
- Typography should feel like a high-end architectural journal: big elegant serif headlines, intentional line breaks, generous margins and subtle uppercase editorial labels.
- Thin borders, fine gold lines, open whitespace, textured linen backgrounds and carefully aligned grids. Dark green is an occasional anchor, not the whole page.
- Calm and luxurious, never a dashboard, generic SaaS screen, loud commercial landing page, heavy card shadows or oversaturated gold.
- Use understated hover changes, fade/slide transitions (~200–350 ms), and support `prefers-reduced-motion`. Only the **provided original silent hero concept film** may autoplay, strictly `muted`, `loop`, and `playsInline`, with an accessible pause control and poster fallback. Never autoplay audio or other videos.
- Absolutely no fake user ratings, fake testimonials, fake awards, fake carbon-footprint widgets or fake map pins.

## Required full-page architecture
Build one complete, scrollable private-concierge landing page integrated as a future route `/private-concierge` (in the prototype it may be a single page). Include all real text/copy and visuals, not wireframe placeholders:

**01. Navigation/header**
Quiet T. monogram and editable working name "TRANSFORMATIVE LIVING" / "MASRUL · NASHIK". Desktop links: "The philosophy", "Private experiences", "Questions" and "Begin a conversation". Mobile: accessible hamburger with a working drawer/menu. All links scroll or navigate correctly; no dead links.

**02. Hero — The art of arriving**
Split or slightly asymmetrical editorial layout: generous ivory text zone + authentic Western Ghats photograph with the bundled original moving atmospheric film layered carefully over it; retain locally bundled MP4 and poster fallback. Eyebrow "THE PRIVATE CONCIERGE". Main headline: "The art of arriving." Italicize or softly distinguish "arriving". Body: "Some places deserve more than an ordinary introduction. Discover a considered, personal way to explore a new vision for living in harmony with nature." Buttons: "Request a private introduction" and "Explore the experience." Discreet image provenance caption. Excellent 390px mobile hero composition.

**03. Trust and approach**
Three subdued assurances: "Thoughtfully personal", "Private by design", "No ordinary sales pitch". Then a two-column statement section with heading "A conversation before a commitment." Supporting text focuses on the prospective visitor's lifestyle aspirations, nature, wellbeing and the philosophy of the project; **do not turn this into a product-features matrix**.

**04. Four private experiences (functional selectors)**
Four refined cards with subtle index numbers:
A. "Private site consultation" — request a personal introduction, subject to availability and permissions.
B. "Virtual design conversation" — discuss architectural philosophy and intended experience remotely.
C. "Sustainability dialogue" — ask about solar, water, waste, biophilic design and the status of future innovations.
D. "Request the project dossier" — register for approved material when available.
Clicking any card should scroll to the enquiry form and pre-select the relevant enquiry purpose and a sensible contact format. No helicopter-tour booking.

**05. Emotional editorial interlude**
Full-bleed real forest photo on one side, understated evergreen background and headline "A quieter life. A richer connection." on the other. Describe how luxury is reframed as natural light, family, space, privacy and presence. Avoid exaggerated health claims.

**06. Private Concierge enquiry — PRIMARY INTERACTION**
Highly polished two-column experience: one side a credible architectural photograph with quiet overlay; on the other, a guided four-step form. On mobile, image becomes a shorter banner above the form. Visible fine-line progress bar, current stage label and back/continue controls.

Step 1 / Your interest:
- Required single-choice purpose: private site consultation, virtual design discussion, sustainability dialogue, project dossier.
- Optional multi-select interests: nature and wellness; clean energy; water and circular living; architecture and villas; farming and nourishment; community and legacy.
- Cards should use real accessible radio/checkbox elements.

Step 2 / Your preferences:
- Preferred conversation format: in-person / video call / phone call / email only.
- Optional preferred date; disable dates earlier than local today, indicate this is not real availability.
- Preferred time window: flexible / 9 am–12 pm / 12–4 pm / 4–7 pm, labelled IST.
- Guest count; optional city; optional message (450-character maximum).
- A visible subtle notice: "These are preferences, not live calendar slots. The team must confirm availability."
- For dossier interest, email-only should be the default format.

Step 3 / Contact details:
- Required first name and last name, required valid email, optional phone unless selected communication channel is phone or WhatsApp; allow international numbers.
- Preferred contact channel: email, phone, or WhatsApp.
- Required purpose-limited consent to be contacted about this enquiry; **separate unchecked** optional marketing/project-update opt-in.
- Clear, inline and keyboard-accessible validation; preserve entered data while navigating between steps.
- Sensitive lead details must never be exposed in public analytics or the URL.

Step 4 / Review:
- Display a clear summary of all selected options, requested timing and contact information.
- Back/edit without data loss.
- Final CTA: "Complete demo enquiry" in demo mode. Distinguish a request from a confirmed appointment.

Demo completion:
- Show an elegant confirmation view with headline "A considered beginning."
- Explicit wording: "This was a prototype demonstration. No enquiry has been transmitted, no meeting has been booked, and no message has been sent."
- Allow "Start again" and optionally download a local text summary of the mock enquiry.
- DO NOT invent an enquiry reference number, say a real representative will call, or falsely claim successful backend submission.
- When a real secure backend is later configured, replace mock submit with an actual endpoint and accurate backend-acknowledged confirmation state.

**07. FAQ accordion**
Answer these questions truthfully:
- Does a date preference mean my visit is booked? (No.)
- Can I book a helicopter tour? (Not currently; subject to aviation feasibility/approvals.)
- Are solar, hydrogen, water and waste systems already operational? (Concept/feasibility; do not claim.)
- Will my details be submitted? (No in demo mode.)
- Are these actual site images? (No, illustrative authentic photography.)

**08. Closing invitation + footer**
Closing text: "Every extraordinary place begins with a conversation." Single CTA returning to the form. Footer with brand, location context, concept-stage note, an honest photography disclaimer and absence of live lead collection.

## UX behavior, accessibility and responsive requirements
- Build the real working product, not mock screens. Every CTA, card, form field, stage control, accordion, mobile menu, and reset action must work.
- Responsive layouts at 1440px, 1024px, 768px, 390px and 320px, with **no horizontal overflow**.
- Semantic HTML, properly associated labels, fieldset/legend or equivalent accessible radiogroup structure, visible focus, inline form errors with aria associations, logical tab order, high contrast and screen-reader announcements for step change/confirmation.
- Keyboard interactions must work; reduced motion preference supported.
- No browser alert boxes or generic toast for core validation errors.
- Optimize for speed: image lazy-loading, no huge animations, no reliance on blocking video, and meaningful no-network fallbacks.
- Use appropriate success/error/loading states without simulating a real network request as if it succeeded.

## Engineering requirements
Implement with **React + TypeScript + Vite** (or the existing Google AI Studio React starter), clean component boundaries, lightweight CSS/Tailwind as appropriate, and clear state management. Components might include `SiteHeader`, `ConciergeHero`, `ServiceChoices`, `EditorialStatement`, `EnquiryWizard`, `StepIndicator`, `InterestStep`, `PreferenceStep`, `ContactStep`, `ReviewStep`, `DemoSuccess`, `FAQ`, `SiteFooter`.

- Provide typed form data model, validation utilities and an explicit `demoMode` boolean, default `true`.
- Never include hard-coded API keys, dummy CRM credentials or fabricated production phone/email addresses.
- No real submission or storing personal details in localStorage/sessionStorage in demo mode.
- Use local in-memory React state for input. Avoid accidental console logging of PII.
- Reserve a documented interface for a future authenticated/safeguarded lead endpoint (HTTPS, server-side validation, rate limiting, anti-bot protection, consent timestamps, retention and owner-approved privacy notice).
- No unnecessary libraries, no broken component imports, no runtime or build errors, no unhandled edge cases.
- Put image URLs and disclaimers in a central `content.ts` for replacement with actual approved photography later.

## Acceptance tests: do not finish until these pass
1. Hero CTA scrolls to the enquiry wizard.
2. Clicking the virtual experience selects it and defaults to video.
3. Clicking dossier request selects it and defaults to email-only.
4. A visitor can go forward and backward without losing selections.
5. Empty required name/email errors are visible and prevent review.
6. Invalid emails and phone/WhatsApp without valid phone are rejected.
7. The separate marketing checkbox starts unchecked.
8. Review accurately reflects data, including optional note and interests.
9. Completion says clearly "demo only" and does not claim a real submission.
10. Restart clears data and returns to step 1.
11. Nav and FAQ operate on mobile and keyboard.
12. No horizontal scroll at mobile widths and no layout shift from remote images.
13. The imagery is genuinely photographic; all photos are sourced and identified as illustrative.
14. No unsupported carbon-neutrality, water-autonomy, medical-oxygen, hydrogen, regulatory or helipad promises.
15. The bundled local MP4 is played inline when motion is allowed; Pause/Play controls work, View film modal opens and closes with Escape, and reduced-motion users see the poster instead of forced movement.
16. If the Unsplash photo is blocked/offline, the locally bundled film or poster still renders correctly without breaking the interface.

## Output expected
Create and run the fully functioning website inside Google AI Studio preview. Do **not** respond only with a description or a code dump. Build the files, apply responsive styling, and show the actual page. Explain briefly where copy, images, forms and `demoMode` can be customized. Use the highest level of polish appropriate to a premium architectural and sustainable-living brand. If the uploaded `index.html` prototype is available, use its layout, approved copy, interaction logic, styling **AND locally bundled MP4 video** as the fidelity reference while improving implementation quality. Preserve the real film. Do not merely write a video prompt in place of integrating the actual provided asset.
