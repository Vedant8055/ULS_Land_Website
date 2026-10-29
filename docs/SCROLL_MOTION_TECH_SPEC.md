# Scroll motion — technical specification

## Libraries

| Package | Role |
| --- | --- |
| `gsap` + `ScrollTrigger` + `@gsap/react` | Scrub, pin, path draw, cleanup via `gsap.context` / `useGSAP` |
| `three` + `@react-three/fiber` + `@react-three/drei` (Canvas only) | Two conceptual WebGL scenes |
| Native scroll | No Lenis — avoids iOS / hash / focus breakage |

Registered in `lib/gsap-client.ts` on the client only.

## Architecture

- Homepage client tree: `components/cinematic/HomeCinematic.tsx`
- Typed beats: `data/scrollStory.ts`
- Interpolation: `lib/story-progress.ts` (`clamp01`, `activeBeat`, `interpolatedCamera`, `interpolatedLight`)
- Pin helper: `usePinnedProgress` — desktop pin + scrub; mobile scrub without pin; no pin when `prefers-reduced-motion`
- 3D isolated with `next/dynamic` `ssr: false`
- One landscape canvas serves Acts 2 and 3 (same world, changing camera/light/system)
- Villa canvas is a second context, lazy-loaded
- WebGL probe: `lib/webgl.ts` (`hasWebGL`, `?nowebgl=1`, save-data)

## Timeline logic

Pinned tracks expose `progress` 0–1. Beats have `start`/`end`. Camera and light lerp between neighbouring beats so reverse scroll reconstructs the earlier view. Manual ecosystem markers set an override camera; “Return to story” clears it so scroll remains author.

## Cleanup

`useGSAP` scopes + `matchMedia().revert()` + `ScrollTrigger.kill()` on unmount. `HomeCinematic` refreshes triggers on resize and after first paint. Route change unmounts the homepage client tree.

## Fallbacks

- No WebGL / `?nowebgl=1` / save-data: `SceneFallback` photography + same headlines
- Reduced motion: unpinned stacked layout, film paused, no camera animation
- Video: muted, loop, playsInline, user pause, dialog viewer, visibility pause

## Performance

- `dpr` capped `[1, 1.5]`
- Modest geometry, instanced-style tree count ~46, one shadow map 1024
- Images already local AVIF/WebP via Next
- Secondary routes unchanged and do not load the homepage WebGL bundle until visited home
