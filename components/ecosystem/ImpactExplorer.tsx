"use client";

import { useMemo, useState } from "react";
import { formatLitres, rainwaterLitres } from "@/lib/water";

export function ImpactExplorer() {
  const [roof, setRoof] = useState(200);
  const [rain, setRain] = useState(750);
  const [runoff, setRunoff] = useState(0.8);
  const [homes, setHomes] = useState(40);
  const [kwh, setKwh] = useState(18);
  const litres = useMemo(() => rainwaterLitres(roof, rain, runoff), [roof, rain, runoff]);
  const solarShare = Math.min(92, Math.round((kwh / 32) * 100));

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <article className="border border-pine/10 bg-ivory p-7">
        <p className="kicker text-gold">Rainwater illustration</p>
        <h3 className="mt-3 font-serif text-3xl text-sage">A simple annual catchment</h3>
        <p className="mt-3 text-sm leading-7 text-muted">
          litres = roof catchment m² × annual rainfall mm × runoff coefficient. This is not site water autonomy. Nashik rainfall varies; use measured series before any design claim.
        </p>
        <label className="mt-6 block text-[11px] font-bold uppercase tracking-[0.12em] text-pine-soft">
          Roof area · {roof} m²
          <input type="range" min={60} max={400} value={roof} onChange={(e) => setRoof(Number(e.target.value))} className="mt-2 w-full accent-pine" />
        </label>
        <label className="mt-4 block text-[11px] font-bold uppercase tracking-[0.12em] text-pine-soft">
          Annual rainfall · {rain} mm
          <input type="range" min={400} max={1400} value={rain} onChange={(e) => setRain(Number(e.target.value))} className="mt-2 w-full accent-pine" />
        </label>
        <label className="mt-4 block text-[11px] font-bold uppercase tracking-[0.12em] text-pine-soft">
          Runoff coefficient · {runoff.toFixed(2)}
          <input type="range" min={0.5} max={0.95} step={0.01} value={runoff} onChange={(e) => setRunoff(Number(e.target.value))} className="mt-2 w-full accent-pine" />
        </label>
        <p className="mt-6 font-serif text-5xl text-sage">{formatLitres(litres)}</p>
        <p className="mt-2 text-sm text-muted">litres / year before first-flush losses — user-supplied assumptions only.</p>
      </article>

      <article className="border border-pine/10 bg-ivory p-7">
        <p className="kicker text-gold">Energy balance · illustrative</p>
        <h3 className="mt-3 font-serif text-3xl text-sage">Demand first, then the sun</h3>
        <p className="mt-3 text-sm leading-7 text-muted">
          Move the sliders to see how a hypothetical neighbourhood might lean on rooftop solar. This is not a yield study and never reaches a “100% carbon-neutral” claim.
        </p>
        <label className="mt-6 block text-[11px] font-bold uppercase tracking-[0.12em] text-pine-soft">
          Homes in the thought-model · {homes}
          <input type="range" min={10} max={80} value={homes} onChange={(e) => setHomes(Number(e.target.value))} className="mt-2 w-full accent-pine" />
        </label>
        <label className="mt-4 block text-[11px] font-bold uppercase tracking-[0.12em] text-pine-soft">
          Assumed daily generation per roof · {kwh} kWh
          <input type="range" min={8} max={32} value={kwh} onChange={(e) => setKwh(Number(e.target.value))} className="mt-2 w-full accent-pine" />
        </label>
        <div className="mt-6 h-2 bg-canvas">
          <div className="h-full bg-pine" style={{ width: `${solarShare}%` }} />
        </div>
        <p className="mt-4 font-serif text-4xl text-sage">{solarShare}%</p>
        <p className="mt-2 text-sm leading-7 text-muted">
          Share of a notional 32 kWh household day that this assumption could cover. Residual electricity, construction carbon, commuting and refrigerants remain. Hydrogen is excluded from this first-phase picture.
        </p>
        <p className="mt-4 text-[12px] text-basalt">
          Thought-model size: {homes} homes. Not an inventory.
        </p>
      </article>
    </div>
  );
}
