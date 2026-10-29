import { describe, expect, it } from "vitest";
import { rainwaterLitres } from "./water";

describe("rainwaterLitres", () => {
  it("matches the feasibility-report illustration", () => {
    expect(rainwaterLitres(200, 600, 0.8)).toBe(96000);
  });

  it("returns zero for invalid input", () => {
    expect(rainwaterLitres(-1, 600, 0.8)).toBe(0);
    expect(rainwaterLitres(200, Number.NaN, 0.8)).toBe(0);
  });
});
