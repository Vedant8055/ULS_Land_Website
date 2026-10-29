# Scroll storyboard — V2 cinematic homepage

Data source: `data/scrollStory.ts`. All photography is illustrative licensed stock. The 3D scenes are conceptual models, not surveys.

## Act 0 — Arrival (`#arrival`) · hero · 220vh

| Progress | Visual | Copy |
| --- | --- | --- |
| 0.00 | Full-bleed Bhandardara photograph, concept film at 30% screen blend, mist overlay | Eyebrow: Masrul · Nashik · A vision for transformative living. Headline: *What if life could feel different?* |
| 0.20 | Slow camera push (scale + vertical parallax). Near foliage layer faster than ridge | Supporting: *Beyond the ordinary. Closer to what matters.* |
| 0.45–1.00 | Deeper push; type crossfades | *More than a home. A different way to live.* |

Mobile: same copy, shorter type, native scroll, no pin. Reduced motion: still photograph, both headlines in DOM, film paused.

**Assets:** `hero-bhandardara.jpg`, `hero-ambient.mp4`, `leaf-close.jpg` (near mist).

## Act 1 — Philosophy (`#philosophy`) · editorial pin · 240vh desktop

| Progress | Visual | Copy |
| --- | --- | --- |
| 0.00 | Ridge photograph clipped from the left | *Luxury is not simply having more.* |
| 0.28 | Clip widens; gold ribbon path draws | *It is having more time. More clarity. More connection.* |
| 0.56 | Path near complete | *A place conceived to bring life back into balance.* |

Mobile: unpinned stacked editorial. **Asset:** `sahyadri-ridge.jpg`.

## Act 2–3 — Landscape + Invisible intelligence (`#landscape`, `#ecosystem`) · pinned diorama · 520vh

One persistent WebGL context. Label always visible: *Conceptual ecosystem visualization · Not an approved site plan.*

| Local progress | Camera / world | Overlay |
| --- | --- | --- |
| Landscape 0.00 | Wide elevated | A hillside held with care. |
| 0.16 | Slow orbital descent | The land is the first neighbour. |
| 0.30 | Forest canopy | Native canopy first. |
| 0.44 | Low houses | Few dwellings. Deep gardens. |
| 0.58 | Water corridor, overcast | Water is given a route. |
| 0.74 | Approach a dwelling | Toward one quiet threshold. |
| Ecosystem 0.00 | Sun on solar roofs | Harness what nature gives. Hydrogen not shown as live. |
| 0.20 | Rain motif | Respect every drop. No autonomy claim. |
| 0.40 | Soil cutaway | Let nothing useful go to waste. |
| 0.60 | Kitchen gardens | Know where nourishment begins. |
| 0.80 | Forest focus | Make room for life to flourish. No medical oxygen. |

Manual `Explore the ecosystem` markers override camera; *Return to story* clears override. Fallback: photographic stills.

## Act 4 — A day (`#day`) · photographic pin · 300vh

| Progress | Hour | Phrase | Image |
| --- | --- | --- | --- |
| 0.00 | 06:00 | Wake with the light, not the noise. | hero-bhandardara |
| 0.25 | 09:00 | Eat closer to the source. | veg-farm |
| 0.50 | 16:00 | Rediscover the luxury of time. | western-ghats-green |
| 0.75 | 20:00 | Come home to stillness. | rain-leaves |

Secondary clickable timeline remains at `#day-manual`.

## Act 5 — Villa (`#architecture`) · 3D study · 320vh

Approach → courtyard arc → roof lift (illustrative daylight) → evening. Material atelier changes mesh colour (basalt / terracotta / timber / lime). Landscape preference changes courtyard/roof planting.

## Act 6 — World within (`#experiences`) · editorial

Asymmetric photographic panels. Amenity index remains collapsed and honestly labelled.

## Act 7 — Invitation (`#future`, `#invitation`) · closing

Landscape echo, claims panel (proposed / validated / later), concept masterplan, concierge CTAs. No booking, countdown or exclusivity theatre.
