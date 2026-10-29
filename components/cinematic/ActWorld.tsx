"use client";

import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";
import { gsap, useGSAP } from "@/lib/gsap-client";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";
import { useRef } from "react";

const panels = [
  {
    title: "A park named for breath, not for medicine",
    copy: "The Oxygen Park is imagined as native shade, walking loops and rain gardens. The name is an amenity title. It does not claim clinically enriched air.",
    image: images.leafClose,
    status: "Envisioned landscape",
  },
  {
    title: "Food that can still be pointed to",
    copy: "Kitchen gardens, a seasonal market and farmer partnerships come before any promise of certified milk, aquaponics or a dairy herd.",
    image: images.vegFarm,
    status: "Subject to operations",
  },
  {
    title: "Quiet that includes everyone",
    copy: "A temple precinct, a Jain temple and multi-faith rooms, each with its own approach. Festival crowds should never have to cross private streets.",
    image: images.ghatsForest,
    status: "Design intention",
  },
];

export function ActWorld() {
  const root = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (reduced) return;
      const frames = gsap.utils.toArray<HTMLElement>("[data-world-panel]");
      frames.forEach((frame) => {
        gsap.fromTo(
          frame.querySelector("[data-world-image]"),
          { yPercent: 12, scale: 1.08 },
          {
            yPercent: -6,
            scale: 1,
            ease: "none",
            scrollTrigger: { trigger: frame, start: "top 80%", end: "bottom top", scrub: 0.6 },
          },
        );
      });
    },
    { scope: root, dependencies: [reduced] },
  );

  return (
    <section id="experiences" ref={root} className="bg-pine text-ivory">
      <div className="mx-auto max-w-editorial px-6 py-24 md:px-10 md:py-32">
        <p className="kicker text-gold">Chapter 07 · A world within</p>
        <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2.6rem,5vw,4.8rem)] font-medium leading-[0.95]">
          A place where belonging feels natural.
        </h2>
        <p className="mt-5 max-w-xl text-[15px] leading-8 text-[#c5d0c4]">
          Human-scale photographs, not an amenity grid. Every facility below is envisioned or phased. None is open, certified or included in a home price.
        </p>
        <div className="mt-16 space-y-10">
          {panels.map((item, index) => (
            <article key={item.title} data-world-panel className={`grid min-h-[460px] overflow-hidden md:grid-cols-12 ${index % 2 ? "" : ""}`}>
              <figure className={`relative min-h-[280px] overflow-hidden ${index === 1 ? "md:col-span-7 md:order-2" : "md:col-span-7"}`}>
                <div data-world-image className="absolute inset-0">
                  <Image src={item.image.src} alt={item.image.alt} fill className="object-cover" sizes="(min-width:768px) 58vw, 100vw" />
                </div>
              </figure>
              <div className={`flex items-center bg-[#1b3329] px-8 py-12 md:px-12 ${index === 1 ? "md:col-span-5" : "md:col-span-5"}`}>
                <div>
                  <p className="kicker text-gold">{item.status}</p>
                  <h3 className="mt-4 font-serif text-4xl leading-tight">{item.title}</h3>
                  <p className="mt-5 max-w-md text-[15px] leading-8 text-[#c5d0c4]">{item.copy}</p>
                  <p className="mt-6 text-[10px] uppercase tracking-[0.14em] text-[#9aab9d]">{item.image.caption}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <details className="mt-12 border-t border-white/15 pt-6">
          <summary className="cursor-pointer text-[12px] font-bold uppercase tracking-[0.14em] text-gold">
            Expand the full conceptual index
          </summary>
          <ul className="mt-6 grid gap-4 text-sm leading-7 text-[#c5d0c4] md:grid-cols-2">
            <li>Oxygen parks and forest-bathing loops — proposed landscape, not a medical claim.</li>
            <li>Yoga pavilion and outdoor meditation — design intention.</li>
            <li>Temple precinct, Jain temple, multi-faith quiet rooms — proposed.</li>
            <li>Farm-to-table market and kitchen gardens — subject to operations.</li>
            <li>Proposed A2 Gir dairy — not certified, not installed.</li>
            <li>Wellness spa with possible hydrotherapy — if professionally operated.</li>
            <li>School / nature academy — future institution, licensing required.</li>
            <li>Tennis, 50 m pool concept, indoor sport, skating — demand not proven.</li>
            <li>Clinic concept — a hospital is not promised.</li>
            <li>Helipad / helicopter tour — not offered. Aviation unestablished.</li>
          </ul>
        </details>
        <p className="mt-10">
          <Link href="/experiences" className="text-[11px] font-bold uppercase tracking-[0.14em] text-gold">
            Walk the experiences →
          </Link>
        </p>
      </div>
    </section>
  );
}
