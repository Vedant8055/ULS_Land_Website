"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { heroFilm, heroPoster, images } from "@/data/images";

export function HeroFilm() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const expandedRef = useRef<HTMLVideoElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const [userPaused, setUserPaused] = useState(false);
  const [inView, setInView] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const titleId = useId();

  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (media.matches) setUserPaused(true);
    };
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!mediaRef.current || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.08 },
    );
    observer.observe(mediaRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const play = !userPaused && !reduceMotion && !document.hidden && inView && !dialogOpen;
    if (play) video.play().catch(() => undefined);
    else video.pause();
  }, [userPaused, reduceMotion, inView, dialogOpen]);

  useEffect(() => {
    const onVis = () => {
      const video = videoRef.current;
      if (!video) return;
      if (document.hidden) video.pause();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const playing = !userPaused && !reduceMotion && inView && !dialogOpen;

  return (
    <section id="arrival" className="relative min-h-screen overflow-hidden bg-pine text-ivory" aria-label="Arrival">
      <div ref={mediaRef} className="absolute inset-0">
        <Image
          src={images.heroBhandardara.src}
          alt={images.heroBhandardara.alt}
          fill
          priority
          className="object-cover object-center hero-zoom"
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
        >
          <source src={heroFilm.src} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-pine/35 via-pine/25 to-pine/88" />
        <div className="film-grain absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-editorial flex-col justify-end px-6 pb-16 pt-28 md:px-10 md:pb-20">
        <p className="kicker text-gold">Masrul | Nashik | A new vision of living</p>
        <h1 className="mt-6 max-w-5xl break-words font-serif text-[clamp(2.35rem,8.4vw,7.6rem)] font-medium leading-[0.96] tracking-[-0.03em] sm:leading-[0.88]">
          Life, as nature intended. <em className="font-normal text-[#d8c89a]">Luxury, as you deserve.</em>
        </h1>
        <p className="mt-7 max-w-lg text-[1.02rem] leading-8 text-[#d5ddd3]">
          A private vision of regenerative living, crafted around the things that make life meaningful.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href="#philosophy" className="inline-flex min-h-14 items-center justify-center bg-ivory px-6 text-[11px] font-bold uppercase tracking-[0.14em] text-pine">
            Enter the Story
          </a>
          <Link href="/private-concierge" className="inline-flex min-h-14 items-center justify-center border border-ivory/70 px-6 text-[11px] font-bold uppercase tracking-[0.14em] text-ivory">
            Request a Private Introduction
          </Link>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-4 text-[10px] uppercase tracking-[0.16em] text-[#c9d2c8]">
          <span className="gold-rule" />
          {heroFilm.label}
        </div>
      </div>

      <div className="absolute right-5 top-[5.4rem] z-20 flex max-w-[calc(100%-2.5rem)] flex-wrap justify-end gap-2 sm:top-24 md:right-10 md:top-28">
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

      <p className="absolute bottom-5 left-6 z-20 max-w-xs text-[9px] uppercase leading-5 tracking-[0.14em] text-white/75 md:left-10">
        {images.heroBhandardara.caption}
      </p>

      <a href="#philosophy" className="absolute bottom-6 right-6 z-20 text-[10px] uppercase tracking-[0.2em] text-white/80 md:right-10">
        Scroll
      </a>

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
        <video
          ref={expandedRef}
          controls
          playsInline
          loop
          preload="none"
          poster={heroPoster.src}
          className="aspect-video w-full bg-pine object-contain"
        >
          <source src={heroFilm.src} type="video/mp4" />
        </video>
        <p className="px-5 py-4 text-[12px] leading-6 text-[#bbc8bd]">{heroFilm.note} No sound.</p>
      </dialog>
    </section>
  );
}
