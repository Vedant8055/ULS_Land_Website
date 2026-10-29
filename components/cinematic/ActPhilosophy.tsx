"use client";

import Image from "next/image";
import { useRef } from "react";
import { images } from "@/data/images";
import { storyActs } from "@/data/scrollStory";
import { gsap, useGSAP } from "@/lib/gsap-client";
import { usePinnedProgress } from "./usePinnedProgress";

const act = storyActs[1];
const lines = [
  "Luxury is not simply having more.",
  "It is having more time. More clarity. More connection.",
  "A place conceived to bring life back into balance.",
];

export function ActPhilosophy() {
  const { trackRef, pinRef, progress, reduced } = usePinnedProgress(true);
  const pathRef = useRef<SVGPathElement>(null);

  useGSAP(
    () => {
      if (!pathRef.current || reduced) return;
      gsap.set(pathRef.current, { strokeDasharray: 720, strokeDashoffset: 720 });
      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: trackRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
        },
      });
    },
    { scope: trackRef, dependencies: [reduced] },
  );

  const clip = Math.min(100, 28 + progress * 72);

  return (
    <section id="philosophy" ref={trackRef} className={`relative bg-linen-warm ${reduced ? "" : "lg:h-[240vh]"}`}>
      <div ref={pinRef} className={reduced ? "" : "lg:h-screen"}>
        <div className="grid min-h-[100svh] lg:grid-cols-2">
          <figure className="relative min-h-[48vh] overflow-hidden lg:min-h-full">
            <Image
              src={images.sahyadriRidge.src}
              alt={images.sahyadriRidge.alt}
              fill
              className="object-cover"
              style={{ clipPath: `inset(0 ${100 - clip}% 0 0)` }}
              sizes="(min-width:1024px) 50vw, 100vw"
            />
            <figcaption className="absolute bottom-5 left-6 max-w-sm text-[10px] uppercase tracking-[0.16em] text-white/85">
              {images.sahyadriRidge.caption}
            </figcaption>
          </figure>
          <div className="relative flex items-center px-6 py-16 md:px-14">
            <div className="max-w-xl">
              <p className="kicker text-pine-soft">Chapter 02 · {act.eyebrow}</p>
              <div className="mt-8 space-y-6">
                {lines.map((line, index) => {
                  const appear = reduced || progress > index * 0.28;
                  return (
                    <p
                      key={line}
                      className={`font-serif text-[clamp(1.7rem,4vw,3.1rem)] leading-[1.05] text-sage transition-opacity duration-500 ${index === 0 ? "" : "text-earth"}`}
                      style={{ opacity: appear ? 1 : 0.18, transform: appear ? "none" : "translateY(12px)" }}
                    >
                      {line}
                    </p>
                  );
                })}
              </div>
              <svg className="mt-10 h-16 w-full text-gold" viewBox="0 0 320 40" fill="none" aria-hidden>
                <path ref={pathRef} d="M4 28 C 60 4, 110 36, 160 18 S 250 6, 316 22" stroke="currentColor" strokeWidth="1.1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
