"use client";

import Image from "next/image";
import { images } from "@/data/images";

const lines = [
  "Imagine a place where nature is not a weekend escape.",
  "Where energy is considered, water is respected, food has a known origin,",
  "and the day begins with room to breathe.",
  "Not another address. A different way to live.",
];

export function Manifesto() {
  return (
    <section id="philosophy" className="bg-linen-warm">
      <div className="grid min-h-[92vh] lg:grid-cols-2">
        <figure className="relative min-h-[52vh] lg:min-h-full">
          <Image
            src={images.sahyadriRidge.src}
            alt={images.sahyadriRidge.alt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <figcaption className="absolute bottom-5 left-6 max-w-sm text-[10px] uppercase tracking-[0.16em] text-white/85">
            {images.sahyadriRidge.caption}
          </figcaption>
        </figure>
        <div className="flex items-center px-6 py-20 md:px-14 lg:px-16">
          <div className="max-w-xl">
            <p className="kicker text-pine-soft">Chapter 02 · More than a home</p>
            <h2 className="mt-5 font-serif text-[clamp(2.6rem,5vw,4.6rem)] font-medium leading-[0.95] tracking-[-0.03em] text-sage">
              Traditional luxury measures ownership.
            </h2>
            <p className="mt-6 text-[1.05rem] leading-8 text-muted">
              Transformative luxury measures the quality of a life: cleaner design choices, privacy, nature, nourishment, meaning, time, intergenerational connection, and thoughtful resource use.
            </p>
            <span className="gold-rule my-8 block" />
            <div className="space-y-4 font-serif text-[1.45rem] leading-snug text-sage md:text-[1.7rem]">
              {lines.map((line, index) => (
                <p key={line} className={index === lines.length - 1 ? "text-earth" : ""}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
