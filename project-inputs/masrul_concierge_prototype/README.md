# Transformative Living – Private Concierge Prototype

**Location context:** Masrul, Nashik, Maharashtra, India.

## Open the prototype

Double-click `index.html` in a modern browser. It is a responsive, single-file interactive website (HTML, CSS, JavaScript); no build step or package installation is necessary.

The **hero MP4 and poster are bundled locally** and play without an internet connection. Real Unsplash photos and Google Fonts are loaded online; the site and entire enquiry flow still work when offline. The generated film is intentionally artistic and **not photorealistic site footage**.

## Original cinematic video: new in this version

- `assets/hero-ambient.mp4` — original, silent 15-second H.264 (1280 × 720) concept animation with slow layered-hill movement, ambient mist and a seamless return to start.
- `assets/hero-poster.jpg` — bundled static fallback for browsers that do not load video or users who prefer reduced motion.
- Website hero background combines an **authentic photograph from the wider Sahyadri / Western Ghats landscape** (online) with this original low-key animated visual layer. When offline, the animation itself is used as the background.
- **Pause motion / Play motion** toggle; **View film** opens a larger, closable media dialog; both use the locally bundled MP4. Motion is reduced/paused for visitors who have selected `prefers-reduced-motion`, and hero playback pauses when scrolled out of view or when the tab is hidden.
- There is **no background audio**, no streaming dependency for the MP4, and no video analytics.
- The full-screen film displays an **artistic animation**, not live-action video. It must never be described as actual footage, a constructed villa, or a verified view from Masrul.
- `assets/generate_ambient_film.py` provides reproducible source code for the artwork if a designer wants to revise the film. Requires Python, NumPy, Pillow, OpenCV and FFmpeg.

## Included interaction

- Four invitation experiences: private site consultation, virtual design conversation, sustainability dialogue, project dossier interest.
- Four-stage enquiry: interests → preferences → contact → review.
- Conditional contact validation, optional enquiry notes, preferred date and time, marketing opt-in separate from required contact consent.
- Demo completion and local `txt` summary download.
- Mobile navigation and accessible keyboard controls.

**No backend is connected. No data is transmitted, stored in a database, or actually submitted. No booking is confirmed.**

## Authentic photographic sources

These are genuine Unsplash-hosted photographic images, not generated art. They are editorial references, **not verified pictures of the Masrul site or project**.

1. Hero photograph (actual Bhandardara/Western Ghats landscape, photographer Piyanshu Sharma): https://images.unsplash.com/photo-1689473679858-52767a72609f  — source: https://unsplash.com/photos/l1kV3iAxtNE
2. Forest atmosphere: https://images.unsplash.com/photo-1448375240586-882707db888b
3. Contemporary residential interior: https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea

Unsplash License: https://unsplash.com/license . Commercial uses may still require checking model/property releases for recognizable people, logos, and private property. Confirm image ownership and permissions before final publication. Photos should be replaced with verified site photography and architect-approved imagery when available.

## Video performance and operating notes

- MP4 is bundled beside `index.html` under `assets/`; **do not move it without updating the HTML paths**. A single ZIP contains both.
- Optimized for a silent, muted, looping background at an intentionally moderate 720p resolution for smaller payloads. Replace with licensed real motion footage from the actual property when available.
- When integrating with React, use `<video autoPlay muted loop playsInline preload="metadata" poster="...">` with a local MP4 source and keep accessible play/pause and reduced-motion logic.
- The original film is custom digital artwork. Natural photographs remain the source for genuinely photoreal visuals.

## Before real deployment

- Final brand name and identity; verified actual plot/site photographs.
- Approved project description, project status and regulatory disclaimers.
- Verified official contact details and authorized availability.
- Privacy policy, data retention settings, consent records, CRM endpoint, spam protection, and transactional notifications.
- Properly secured server-side validation, HTTPS, rate limits, CSRF mitigation where needed, input sanitation and GDPR/India DPDP compliance review as applicable.
- Marketing claims clearance (e.g., zero carbon/water independence, hydrogen, oxygen-enrichment, aviation and amenities).

This is a concept website demonstration, not a final live booking system.
