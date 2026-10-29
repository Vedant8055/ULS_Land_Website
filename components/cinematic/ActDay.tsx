"use client";

import Image from "next/image";
import { ADayTransformed } from "@/components/story/ADayTransformed";
import { images } from "@/data/images";
import { dayBeats } from "@/data/scrollStory";
import { activeBeat, beatIndexAt } from "@/lib/story-progress";
import { usePinnedProgress } from "./usePinnedProgress";

const frames = [
  { beat: dayBeats[0], image: images.heroBhandardara, overlay: "from-[#1a2a24]/70" },
  { beat: dayBeats[1], image: images.vegFarm, overlay: "from-[#3d312a]/65" },
  { beat: dayBeats[2], image: images.westernGhatsGreen, overlay: "from-[#2c3e35]/60" },
  { beat: dayBeats[3], image: images.rainLeaves, overlay: "from-[#101912]/75" },
];

export function ActDay() {
  const { trackRef, pinRef, progress, reduced } = usePinnedProgress(true);
  const index = beatIndexAt(progress, dayBeats);
  const frame = frames[index];
  const beat = activeBeat(progress, dayBeats);

  return (
    <section id="day" ref={trackRef} className={`relative bg-canvas ${reduced ? "" : "lg:h-[300vh]"}`}>
      <div ref={pinRef} className={reduced ? "" : "lg:h-screen"}>
        <div className="mx-auto grid min-h-[100svh] max-w-editorial lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <figure className="relative min-h-[58vh] overflow-hidden bg-pine lg:min-h-screen">
            {frames.map((item, i) => (
              <Image
                key={item.image.id}
                src={item.image.src}
                alt={item.image.alt}
                fill
                className="object-cover transition-opacity duration-700"
                style={{
                  opacity: i === index ? 1 : 0,
                  filter:
                    index === 0
                      ? "brightness(0.92) saturate(0.95)"
                      : index === 3
                        ? "brightness(0.72) sepia(0.12)"
                        : "none",
                }}
                sizes="(min-width:1024px) 55vw, 100vw"
              />
            ))}
            <div className={`absolute inset-0 bg-gradient-to-t ${frame.overlay} to-transparent`} />
            <figcaption className="absolute bottom-6 left-6 right-6 text-[10px] uppercase tracking-[0.14em] text-white/80">
              {beat.headline} · {frame.image.caption}
            </figcaption>
          </figure>
          <div className="flex flex-col justify-center bg-ivory px-6 py-12 md:px-10">
            <p className="kicker text-pine-soft">Chapter 05 · Life reimagined</p>
            <p className="mt-6 font-serif text-[3.4rem] leading-none text-gold">{beat.headline.split(" — ")[0]}</p>
            <h2 className="mt-4 font-serif text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.95] text-sage">
              {beat.headline.split(" — ")[1]}
            </h2>
            <p className="mt-5 max-w-md text-[16px] leading-8 text-muted">{beat.body}</p>
            <p className="mt-6 text-[11px] leading-6 text-basalt">
              Mood references — not residents, not site amenities, not a solar study.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ActDayManual() {
  return <ADayTransformed anchor="day-manual" />;
}
