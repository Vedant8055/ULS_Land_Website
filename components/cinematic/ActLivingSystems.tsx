"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import { images } from "@/data/images";
import { ecosystemBeats, ecosystemMarkers, landscapeBeats } from "@/data/scrollStory";
import { activeBeat, interpolatedCamera, interpolatedLight } from "@/lib/story-progress";
import { hasWebGL, prefersReducedData } from "@/lib/webgl";
import { SceneFallback } from "./SceneFallback";
import { usePinnedProgress } from "./usePinnedProgress";

const LandscapeCanvas = dynamic(
  () => import("./scenes/LandscapeCanvas").then((mod) => mod.LandscapeCanvas),
  { ssr: false, loading: () => <div className="h-full bg-[#c5cebf]" /> },
);

export function ActLivingSystems() {
  const { trackRef, pinRef, progress, reduced } = usePinnedProgress(true);
  const [ready, setReady] = useState(false);
  const [capable, setCapable] = useState(false);
  const [overrideId, setOverrideId] = useState<string | null>(null);

  useEffect(() => {
    setCapable(hasWebGL() && !prefersReducedData());
    setReady(true);
  }, []);

  const landscapeProgress = Math.min(1, progress / 0.42);
  const ecoProgress = progress <= 0.42 ? 0 : (progress - 0.42) / 0.58;
  const inEco = progress > 0.42;
  const beats = inEco ? ecosystemBeats : landscapeBeats;
  const local = inEco ? ecoProgress : landscapeProgress;
  const beat = activeBeat(local, beats);
  const camera = interpolatedCamera(local, beats);
  const light = interpolatedLight(local, beats);

  const override = useMemo(() => {
    if (!overrideId) return null;
    const match = [...landscapeBeats, ...ecosystemBeats].find((item) => item.system === overrideId);
    return match?.camera ?? null;
  }, [overrideId]);

  return (
    <section ref={trackRef} className={`relative bg-[#1b241d] text-ivory ${reduced ? "" : "lg:h-[520vh]"}`}>
      <div id="landscape" className="absolute top-0 h-px w-px" />
      <div id="ecosystem" className="absolute top-[42%] h-px w-px" />
      <div ref={pinRef} className={reduced ? "relative" : "lg:h-screen"}>
        <div className="relative grid min-h-[100svh] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div className="relative min-h-[62vh] lg:min-h-screen">
            {!ready ? (
              <div className="h-full min-h-[62vh] bg-[#c5cebf]" />
            ) : capable && !reduced ? (
              <LandscapeCanvas camera={camera} light={light} override={override} system={beat.system} />
            ) : (
              <SceneFallback
                image={inEco ? images.ghatsForest : images.westernGhatsGreen}
                title={beat.headline}
                body={beat.body}
              />
            )}
            <p className="pointer-events-none absolute left-5 top-5 z-10 max-w-xs text-[10px] uppercase tracking-[0.16em] text-white/75">
              Conceptual ecosystem visualization · Not an approved site plan
            </p>
          </div>
          <div className="relative flex flex-col justify-end bg-[#152018] px-6 py-12 md:px-10 lg:justify-center">
            <p className="kicker text-gold">{inEco ? "Chapter 04 · Invisible intelligence" : "Chapter 03 · The living landscape"}</p>
            <h2 className="mt-4 font-serif text-[clamp(2.1rem,4vw,4rem)] leading-[1.02]">{beat.headline}</h2>
            <p className="mt-5 max-w-md text-[15px] leading-8 text-[#c5d0c4]">{beat.body}</p>
            <div className="mt-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9aab9d]">Explore the ecosystem</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {ecosystemMarkers.map((marker) => (
                  <button
                    key={marker.id}
                    type="button"
                    className={`border px-3 py-2 text-[11px] ${overrideId === marker.id ? "border-gold bg-gold/15 text-gold" : "border-white/20"}`}
                    onClick={() => setOverrideId((current) => (current === marker.id ? null : marker.id))}
                  >
                    {marker.label}
                  </button>
                ))}
              </div>
              {overrideId ? (
                <p className="mt-4 text-sm leading-7 text-[#d5ddd3]">
                  {ecosystemMarkers.find((item) => item.id === overrideId)?.hint}{" "}
                  <button type="button" className="underline decoration-gold/50" onClick={() => setOverrideId(null)}>
                    Return to story
                  </button>
                </p>
              ) : null}
            </div>
            <a href="/ecosystem" className="mt-8 text-[11px] font-bold uppercase tracking-[0.14em] text-gold">
              Explore the system in depth →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
