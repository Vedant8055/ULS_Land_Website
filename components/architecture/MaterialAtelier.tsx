"use client";

import { useState } from "react";

const finishes = [
  { id: "basalt", name: "Basalt", note: "Locally appropriate dark stone. Cool to the touch, honest in monsoon light.", swatch: "linear-gradient(145deg,#2b2a28,#5a534c 55%,#3a342f)" },
  { id: "terracotta", name: "Terracotta", note: "Fired earth for roofs, jaalis and quiet colour. A craft material, not a cladding fashion.", swatch: "linear-gradient(145deg,#8a4b32,#c2784d 50%,#a35a38)" },
  { id: "timber", name: "Natural timber", note: "Warm interior planes and screened verandahs. Species and treatment subject to architect approval.", swatch: "linear-gradient(145deg,#6b4a2b,#c4a06a 48%,#8a6238)" },
  { id: "lime", name: "Lime plaster", note: "Breathable, mineral walls that take daylight softly. Not a synthetic white render.", swatch: "linear-gradient(145deg,#e7e0d2,#f7f3ea 60%,#d8d0c2)" },
] as const;

const lights = [
  { id: "dawn", name: "Dawn", overlay: "rgba(255,214,170,0.18)" },
  { id: "noon", name: "High shade", overlay: "rgba(255,255,255,0.08)" },
  { id: "dusk", name: "Dusk", overlay: "rgba(80,40,20,0.28)" },
] as const;

const landscapes = [
  { id: "native", name: "Native woodland" },
  { id: "court", name: "Courtyard garden" },
  { id: "roof", name: "Roof garden concept" },
] as const;

export function MaterialAtelier() {
  const [finish, setFinish] = useState<(typeof finishes)[number]["id"]>("basalt");
  const [light, setLight] = useState<(typeof lights)[number]["id"]>("dawn");
  const [landscape, setLandscape] = useState<(typeof landscapes)[number]["id"]>("native");
  const current = finishes.find((item) => item.id === finish)!;
  const lightTone = lights.find((item) => item.id === light)!;

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
      <div className="relative min-h-[420px] overflow-hidden border border-pine/10 bg-[#1c1814]">
        <div className="absolute inset-0 transition-[background] duration-500" style={{ background: current.swatch }} />
        <div className="absolute inset-0 transition-colors duration-500" style={{ background: lightTone.overlay }} />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-7 text-ivory">
          <p className="kicker text-gold">Design exploration</p>
          <h3 className="mt-3 font-serif text-4xl">{current.name} · {lightTone.name}</h3>
          <p className="mt-3 max-w-md text-sm leading-7 text-ivory/80">{current.note}</p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.14em] text-ivory/70">
            Landscape preference: {landscapes.find((item) => item.id === landscape)?.name}
          </p>
        </div>
      </div>
      <div>
        <p className="text-[12px] leading-6 text-basalt">
          Private Villa Design Atelier — options subject to architect approval. No approved floor plans, room counts or prices exist in this website.
        </p>
        <fieldset className="mt-6">
          <legend className="text-[10px] font-bold uppercase tracking-[0.16em] text-pine-soft">Finish</legend>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {finishes.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFinish(item.id)}
                className={`flex items-center gap-3 border px-3 py-3 text-left text-sm ${finish === item.id ? "border-pine" : "border-pine/15"}`}
              >
                <span className="h-8 w-8 border border-black/10" style={{ background: item.swatch }} />
                {item.name}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset className="mt-6">
          <legend className="text-[10px] font-bold uppercase tracking-[0.16em] text-pine-soft">Lighting mood</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {lights.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setLight(item.id)}
                className={`border px-3 py-2 text-[12px] ${light === item.id ? "border-pine bg-pine text-ivory" : "border-pine/20"}`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset className="mt-6">
          <legend className="text-[10px] font-bold uppercase tracking-[0.16em] text-pine-soft">Landscape</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {landscapes.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setLandscape(item.id)}
                className={`border px-3 py-2 text-[12px] ${landscape === item.id ? "border-pine bg-pine text-ivory" : "border-pine/20"}`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </fieldset>
      </div>
    </div>
  );
}
