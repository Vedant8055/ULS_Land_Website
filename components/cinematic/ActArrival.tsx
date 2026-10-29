"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { heroFilm, heroPoster, images } from "@/data/images";
import { storyActs } from "@/data/scrollStory";
import { ScrollTrigger, useGSAP } from "@/lib/gsap-client";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const act = storyActs[0];

export function ActArrival() {
  const trackRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const expandedRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const reduced = usePrefersReducedMotion();
  const titleId = useId();
  const late = progress > 0.42;
  const playing = !userPaused && !reduced && !dialogOpen;

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track || reduced) return;
      const trigger = ScrollTrigger.create({
        trigger: track,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.55,
        onUpdate: (self) => setProgress(self.progress),
      });
      return () => trigger.kill();
    },
    { scope: trackRef, dependencies: [reduced] },
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) video.play().catch(() => undefined);
    else video.pause();
  }, [playing]);

  useEffect(() => {
    const onVis = () => {
      if (document.hidden) videoRef.current?.pause();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const push = 1 + progress * 0.12;
  const near = progress * 36;
  const far = progress * 14;

  return (
    <section id="arrival" ref={trackRef} className="relative bg-pine text-ivory" style={{ height: reduced ? "100vh" : "220vh" }}>
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div ref={mediaRef} className="absolute inset-0">
          <Image
            src={images.heroBhandardara.src}
            alt={images.heroBhandardara.alt}
            fill
            priority
            className="object-cover object-center"
            style={{ transform: `scale(${push}) translate3d(0, ${far}px, 0)` }}
            sizes="100vw"
          />
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-screen"
            muted
            loop
            playsInline
            preload="metadata"
            poster={heroPoster.src}
            aria-label={heroFilm.note}
            style={{ transform: `scale(${1 + progress * 0.08})` }}
          >
            <source src={heroFilm.src} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-pine/30 via-pine/20 to-pine/90" />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-pine/80 to-transparent"
            style={{ transform: `translate3d(0, ${-near * 0.35}px, 0)` }}
            aria-hidden
          />
          <div className="film-grain absolute inset-0" />
        </div>

        <div className="relative z-10 mx-auto flex h-full w-full max-w-editorial flex-col justify-end px-6 pb-20 pt-28 md:px-10">
          <p className="kicker text-gold">{act.eyebrow}</p>
          <div className="relative mt-6 min-h-[11rem] sm:min-h-[14rem]">
            <h1
              className="absolute inset-x-0 max-w-4xl font-serif text-[clamp(2.4rem,7vw,6.4rem)] font-medium leading-[0.96] tracking-[-0.03em] transition-opacity duration-500"
              style={{ opacity: late ? 0 : 1 }}
            >
              {act.scrollBeats[0].headline}
            </h1>
            <h1
              className="absolute inset-x-0 max-w-4xl font-serif text-[clamp(2.4rem,7vw,6.4rem)] font-medium leading-[0.96] tracking-[-0.03em] text-[#d8c89a] transition-opacity duration-500"
              style={{ opacity: late ? 1 : 0 }}
            >
              {act.scrollBeats[1].headline}
            </h1>
          </div>
          <p className="mt-4 max-w-md text-[1.05rem] leading-8 text-[#d5ddd3]">
            {late ? act.scrollBeats[1].body : act.body}
          </p>
          <a href="#philosophy" className="mt-10 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-ivory/80">
            <span className="gold-rule" />
            Scroll to enter
          </a>
          <p className="mt-6 max-w-sm text-[10px] uppercase leading-5 tracking-[0.14em] text-white/70">
            {images.heroBhandardara.caption} · {heroFilm.label}
          </p>
        </div>

        <div className="absolute right-5 top-[5.4rem] z-20 flex flex-wrap justify-end gap-2 md:right-10">
          <button
            type="button"
            className="border border-white/55 bg-pine/60 px-3 py-2 text-[10px] uppercase tracking-[0.12em] text-white backdrop-blur"
            aria-pressed={!playing}
            onClick={() => setUserPaused((v) => !v)}
          >
            {playing ? "Pause motion" : "Play motion"}
          </button>
          <button
            type="button"
            className="border border-white/55 bg-pine/60 px-3 py-2 text-[10px] uppercase tracking-[0.12em] text-white backdrop-blur"
            onClick={() => {
              const dialog = dialogRef.current;
              if (!dialog) return;
              setDialogOpen(true);
              dialog.showModal();
              expandedRef.current?.play().catch(() => undefined);
            }}
          >
            View film
          </button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="w-[min(1100px,94vw)] border-0 bg-[#101e17] p-0 text-ivory shadow-quiet"
        aria-labelledby={titleId}
        onClose={() => {
          expandedRef.current?.pause();
          setDialogOpen(false);
        }}
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current.close();
        }}
      >
        <div className="flex items-center justify-between gap-4 px-5 py-4 text-[10px] uppercase tracking-[0.14em]">
          <span id={titleId}>Transformative Living · Concept film</span>
          <button type="button" className="border border-white/30 px-3 py-1.5" onClick={() => dialogRef.current?.close()}>
            Close
          </button>
        </div>
        <video ref={expandedRef} controls playsInline loop preload="none" poster={heroPoster.src} className="aspect-video w-full bg-pine object-contain">
          <source src={heroFilm.src} type="video/mp4" />
        </video>
        <p className="px-5 py-4 text-[12px] leading-6 text-[#bbc8bd]">{heroFilm.note} No sound.</p>
      </dialog>
    </section>
  );
}
