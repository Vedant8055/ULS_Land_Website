import type { CameraState, LightState, ScrollBeat } from "@/data/scrollStory";

export function clamp01(value: number): number {
  if (!Number.isFinite(value)) return 0;
  return Math.min(1, Math.max(0, value));
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * clamp01(t);
}

export function lerpTuple(a: [number, number, number], b: [number, number, number], t: number): [number, number, number] {
  return [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
}

export function beatIndexAt(progress: number, beats: ScrollBeat[]): number {
  const p = clamp01(progress);
  const found = beats.findIndex((beat) => p >= beat.start && p < beat.end);
  return found === -1 ? beats.length - 1 : found;
}

export function activeBeat(progress: number, beats: ScrollBeat[]): ScrollBeat {
  return beats[beatIndexAt(progress, beats)] ?? beats[0];
}

export function localBeatProgress(progress: number, beat: ScrollBeat): number {
  const span = beat.end - beat.start;
  if (span <= 0) return 1;
  return clamp01((clamp01(progress) - beat.start) / span);
}

export function interpolatedCamera(progress: number, beats: ScrollBeat[]): CameraState {
  const p = clamp01(progress);
  const index = beatIndexAt(p, beats);
  const current = beats[index];
  const next = beats[index + 1] ?? current;
  const t = localBeatProgress(p, current);
  return {
    position: lerpTuple(current.camera.position, next.camera.position, t),
    target: lerpTuple(current.camera.target, next.camera.target, t),
    fov: lerp(current.camera.fov, next.camera.fov, t),
  };
}

export function interpolatedLight(progress: number, beats: ScrollBeat[]): LightState {
  const p = clamp01(progress);
  const index = beatIndexAt(p, beats);
  const current = beats[index];
  const next = beats[index + 1] ?? current;
  const t = localBeatProgress(p, current);
  return {
    sunAzimuth: lerp(current.light.sunAzimuth, next.light.sunAzimuth, t),
    sunElevation: lerp(current.light.sunElevation, next.light.sunElevation, t),
    intensity: lerp(current.light.intensity, next.light.intensity, t),
    warmth: lerp(current.light.warmth, next.light.warmth, t),
    overcast: lerp(current.light.overcast, next.light.overcast, t),
  };
}
