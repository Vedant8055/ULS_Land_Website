import { describe, expect, it } from "vitest";
import { landscapeBeats } from "@/data/scrollStory";
import { activeBeat, beatIndexAt, clamp01, interpolatedCamera, localBeatProgress } from "./story-progress";

describe("story progress", () => {
  it("clamps non-finite and out-of-range values", () => {
    expect(clamp01(-2)).toBe(0);
    expect(clamp01(3)).toBe(1);
    expect(clamp01(Number.NaN)).toBe(0);
  });

  it("selects landscape beats across the full interval", () => {
    expect(activeBeat(0, landscapeBeats).id).toBe("wide");
    expect(activeBeat(0.5, landscapeBeats).id).toBe("homes");
    expect(activeBeat(0.99, landscapeBeats).id).toBe("residence");
    expect(beatIndexAt(1, landscapeBeats)).toBe(landscapeBeats.length - 1);
  });

  it("interpolates camera between neighbouring beats", () => {
    const start = interpolatedCamera(0, landscapeBeats);
    const mid = interpolatedCamera(0.22, landscapeBeats);
    expect(mid.position[1]).toBeLessThan(start.position[1]);
    expect(localBeatProgress(0.16, landscapeBeats[0])).toBe(1);
  });
});
