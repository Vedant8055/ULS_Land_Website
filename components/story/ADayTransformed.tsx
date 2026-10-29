"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { images, type ImageAsset } from "@/data/images";

type Moment = {
  time: string;
  title: string;
  verb: string;
  copy: string;
  image: ImageAsset;
  tone: string;
};

const moments: Moment[] = [
  {
    time: "06:00",
    title: "Breathe",
    verb: "Dawn",
    copy: "Light finds the ridge before it finds the room. A walk among native trees. No dashboard of the day — only the first quiet hour.",
    image: images.heroBhandardara,
    tone: "from-[#1a2a24]/70",
  },
  {
    time: "09:00",
    title: "Nourish",
    verb: "Breakfast",
    copy: "Fruit and grain with a known origin. A kitchen garden if the household wants one. A proposed local dairy, if operations ever make it real. Nothing certified until it is certified.",
    image: images.vegFarm,
    tone: "from-[#3d312a]/60",
  },
  {
    time: "13:00",
    title: "Live",
    verb: "Midday",
    copy: "Shade does the work that machines should not. Courtyards hold still air. The house is responsive, and mostly invisible.",
    image: images.ghatsForest,
    tone: "from-[#152b23]/65",
  },
  {
    time: "17:00",
    title: "Flourish",
    verb: "Late light",
    copy: "Family, a court, a path, a lesson under trees. Recreation imagined as daily life — not a brochure of unused amenities.",
    image: images.westernGhatsGreen,
    tone: "from-[#2c3e35]/60",
  },
  {
    time: "20:00",
    title: "Restore",
    verb: "Night",
    copy: "Warm rooms. A garden that keeps its privacy. The day ends without performing itself.",
    image: images.rainLeaves,
    tone: "from-[#101912]/70",
  },
];

const seasons = ["Summer", "Monsoon", "Winter"] as const;
const daylights = ["Morning", "Afternoon", "Evening"] as const;

export function ADayTransformed({ anchor = "day" }: { anchor?: string }) {
  const [index, setIndex] = useState(0);
  const [season, setSeason] = useState<(typeof seasons)[number]>("Monsoon");
  const [daylight, setDaylight] = useState<(typeof daylights)[number]>("Morning");
  const moment = moments[index];
  const filter = useMemo(() => {
    const seasonFilter =
      season === "Monsoon" ? "saturate(0.95) contrast(0.96)" : season === "Winter" ? "saturate(0.7) brightness(1.05)" : "saturate(1.05) brightness(1.04)";
    const lightFilter =
      daylight === "Evening" ? "brightness(0.78) sepia(0.12)" : daylight === "Afternoon" ? "brightness(1.05)" : "brightness(0.96)";
    return `${seasonFilter} ${lightFilter}`;
  }, [season, daylight]);

  return (
    <section id={anchor} className="bg-canvas py-24 md:py-32">
      <div className="mx-auto max-w-editorial px-6 md:px-10">
        <p className="kicker text-pine-soft">Chapter 03 · Experience the day before the address</p>
        <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2.6rem,5vw,4.8rem)] font-medium leading-[0.95] text-sage">
          A day transformed.
        </h2>
        <p className="mt-5 max-w-xl text-[15px] leading-8 text-muted">
          A hypothetical day in this vision. Imagery changes with the hour. The season and daylight toggles are storytelling only — not a solar study, CFD model or AQI reading.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-editorial gap-0 px-6 md:px-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <figure className="relative min-h-[58vh] overflow-hidden bg-pine lg:sticky lg:top-24 lg:min-h-[72vh]">
          <Image
            key={moment.image.src}
            src={moment.image.src}
            alt={moment.image.alt}
            fill
            className="object-cover transition-[filter] duration-500"
            style={{ filter }}
            sizes="(min-width: 1024px) 55vw, 100vw"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${moment.tone} to-transparent`} />
          <figcaption className="absolute bottom-5 left-5 right-5 text-[10px] uppercase tracking-[0.14em] text-white/80">
            {moment.time} · {moment.title} · {moment.image.caption}
          </figcaption>
        </figure>

        <div className="bg-ivory px-6 py-10 md:px-10">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Hours of the day">
            {moments.map((item, i) => (
              <button
                key={item.time}
                type="button"
                role="tab"
                aria-selected={i === index}
                className={`min-h-11 border px-3 text-[11px] tracking-[0.08em] ${i === index ? "border-pine bg-pine text-ivory" : "border-pine/15 bg-linen"}`}
                onClick={() => setIndex(i)}
              >
                {item.time}
              </button>
            ))}
          </div>

          <p className="kicker mt-10 text-gold">{moment.verb}</p>
          <h3 className="mt-3 font-serif text-5xl text-sage">{moment.title}</h3>
          <p className="mt-5 text-[15px] leading-8 text-muted">{moment.copy}</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <fieldset>
              <legend className="text-[10px] font-bold uppercase tracking-[0.16em] text-pine-soft">Season · illustrative</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {seasons.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={`border px-3 py-2 text-[11px] ${item === season ? "border-pine bg-pine text-white" : "border-pine/20"}`}
                    onClick={() => setSeason(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-[10px] font-bold uppercase tracking-[0.16em] text-pine-soft">Daylight · illustrative</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {daylights.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={`border px-3 py-2 text-[11px] ${item === daylight ? "border-pine bg-pine text-white" : "border-pine/20"}`}
                    onClick={() => setDaylight(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>
          <p className="mt-6 text-[11px] leading-6 text-basalt">
            Illustrative visualization. No site solar, airflow or oxygen data is implied.
          </p>
        </div>
      </div>
    </section>
  );
}
