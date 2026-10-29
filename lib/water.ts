/** Simple annual rainwater illustration. Not a site water-autonomy model. */
export function rainwaterLitres(
  roofM2: number,
  rainfallMm: number,
  runoff: number,
): number {
  if (![roofM2, rainfallMm, runoff].every((n) => Number.isFinite(n) && n >= 0)) {
    return 0;
  }
  const cappedRunoff = Math.min(1, Math.max(0, runoff));
  return Math.round(roofM2 * rainfallMm * cappedRunoff);
}

export function formatLitres(value: number): string {
  return new Intl.NumberFormat("en-IN").format(value);
}
