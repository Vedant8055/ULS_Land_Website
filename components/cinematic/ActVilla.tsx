"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { images } from "@/data/images";
import { villaBeats } from "@/data/scrollStory";
import { activeBeat, interpolatedCamera, interpolatedLight, localBeatProgress } from "@/lib/story-progress";
import { hasWebGL, prefersReducedData } from "@/lib/webgl";
import { SceneFallback } from "./SceneFallback";
import { usePinnedProgress } from "./usePinnedProgress";
import type { VillaFinish, VillaLandscape } from "./scenes/VillaWorld";

const VillaCanvas = dynamic(() => import("./scenes/VillaCanvas").then((mod) => mod.VillaCanvas), {
  ssr: false,
  loading: () => <div className="h-full bg-[#d5d2c6]" />,
});

const finishes: Array<{ id: VillaFinish; name: string }> = [
  { id: "basalt", name: "Basalt" },
  { id: "terracotta", name: "Terracotta" },
  { id: "timber", name: "Natural timber" },
  { id: "lime", name: "Lime plaster" },
];

const landscapes: Array<{ id: VillaLandscape; name: string }> = [
  { id: "native", name: "Native woodland" },
  { id: "court", name: "Courtyard garden" },
  { id: "roof", name: "Roof garden concept" },
];

export function ActVilla() {
  const { trackRef, pinRef, progress, reduced } = usePinnedProgress(true);
  const [ready, setReady] = useState(false);
  const [capable, setCapable] = useState(false);
  const [finish, setFinish] = useState<VillaFinish>("basalt");
  const [landscape, setLandscape] = useState<VillaLandscape>("native");
  const beat = activeBeat(progress, villaBeats);
  const camera = interpolatedCamera(progress, villaBeats);
  const light = interpolatedLight(progress, villaBeats);
  const roofLift = beat.id === "section" ? localBeatProgress(progress, beat) : beat.id === "evening" ? 0.35 : 0;

  useEffect(() => {
    setCapable(hasWebGL() && !prefersReducedData());
    setReady(true);
  }, []);

  return (
    <section id="architecture" ref={trackRef} className={`relative bg-canvas ${reduced ? "" : "lg:h-[320vh]"}`}>
      <div ref={pinRef} className={reduced ? "" : "lg:h-screen"}>
        <div className="grid min-h-[100svh] lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="relative min-h-[62vh] lg:min-h-screen">
            {!ready ? (
              <div className="h-full min-h-[62vh] bg-[#d5d2c6]" />
            ) : capable && !reduced ? (
              <VillaCanvas camera={camera} light={light} finish={finish} landscape={landscape} roofLift={roofLift} />
            ) : (
              <SceneFallback image={images.interiorCourtyard} title={beat.headline} body={beat.body} />
            )}
            <p className="absolute left-5 top-5 text-[10px] uppercase tracking-[0.16em] text-white/80">
              Illustrative concept · not a certified solar or airflow study
            </p>
          </div>
          <div className="flex flex-col justify-center bg-ivory px-6 py-12 md:px-10">
            <p className="kicker text-pine-soft">Chapter 06 · Architecture that breathes</p>
            <h2 className="mt-4 font-serif text-[clamp(2.2rem,4vw,3.8rem)] leading-[1.02] text-sage">{beat.headline}</h2>
            <p className="mt-5 max-w-md text-[15px] leading-8 text-muted">{beat.body}</p>
            <fieldset className="mt-8">
              <legend className="text-[10px] font-bold uppercase tracking-[0.16em] text-pine-soft">Material atelier</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {finishes.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`border px-3 py-2 text-[12px] ${finish === item.id ? "border-pine bg-pine text-ivory" : "border-pine/20"}`}
                    onClick={() => setFinish(item.id)}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </fieldset>
            <fieldset className="mt-5">
              <legend className="text-[10px] font-bold uppercase tracking-[0.16em] text-pine-soft">Landscape</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {landscapes.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`border px-3 py-2 text-[12px] ${landscape === item.id ? "border-pine bg-pine text-ivory" : "border-pine/20"}`}
                    onClick={() => setLandscape(item.id)}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </fieldset>
            <p className="mt-6 text-[11px] leading-6 text-basalt">
              Daylight &amp; ventilation concept. Finish changes the villa study. No approved floor plans or prices.
            </p>
            <a href="/architecture" className="mt-6 text-[11px] font-bold uppercase tracking-[0.14em] text-pine">
              Continue into the architecture vision →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
