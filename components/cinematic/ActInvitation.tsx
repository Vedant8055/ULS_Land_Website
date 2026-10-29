"use client";

import Image from "next/image";
import Link from "next/link";
import { ConceptMasterplan } from "@/components/masterplan/ConceptMasterplan";
import { images } from "@/data/images";

export function ActInvitation() {
  return (
    <>
      <section id="future" className="relative min-h-[70vh] overflow-hidden bg-pine text-ivory">
        <Image src={images.heroBhandardara.src} alt={images.heroBhandardara.alt} fill className="object-cover opacity-55" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-pine via-pine/55 to-pine/20" />
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-editorial flex-col justify-end px-6 py-20 md:px-10">
          <p className="kicker text-gold">Chapter 08 · The long view</p>
          <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2.6rem,6vw,5.4rem)] leading-[0.95]">
            Some places are discovered.
          </h2>
          <p className="mt-6 max-w-lg font-serif text-3xl text-[#d8c89a]">Others change the way you live.</p>
        </div>
      </section>

      <section className="bg-linen-warm py-20 md:py-28">
        <div className="mx-auto max-w-editorial px-6 md:px-10">
          <p className="kicker text-pine-soft">Responsibility before spectacle</p>
          <h3 className="mt-4 max-w-2xl font-serif text-4xl text-sage">Ambition, with its working shown.</h3>
          <p className="mt-5 max-w-2xl text-[15px] leading-8 text-muted">
            Exceptional living requires accountable design. The 16 October 2026 note is pre-feasibility research — not an approval, clearance or engineering drawing.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              ["Proposed", "Passive-first homes, rooftop solar, rainwater, wastewater reuse, segregation, native landscape, farmer partnerships."],
              ["Validated", "A 16 October 2026 pre-feasibility research note. It is not an approval, clearance or engineering design."],
              ["Later / conditional", "Hydrogen, a 50 m pool, skating venue, school, hospital, spa, and any aviation idea. Helipad omitted on purpose."],
            ].map(([title, copy]) => (
              <article key={title} className="border border-pine/10 bg-ivory p-6">
                <h4 className="font-serif text-2xl text-sage">{title}</h4>
                <p className="mt-3 text-sm leading-7 text-muted">{copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/ecosystem" className="text-[11px] font-bold uppercase tracking-[0.14em] text-pine">
              Read the feasibility context →
            </Link>
            <Link href="/masterplan" className="text-[11px] font-bold uppercase tracking-[0.14em] text-pine">
              Open the concept masterplan →
            </Link>
          </div>
          <div className="mt-14">
            <ConceptMasterplan />
          </div>
        </div>
      </section>

      <section id="invitation" className="bg-sage text-ivory">
        <div className="mx-auto flex max-w-editorial flex-col items-start justify-between gap-10 px-6 py-24 md:flex-row md:items-end md:px-10 md:py-32">
          <div>
            <p className="kicker text-gold">Begin a private conversation</p>
            <h2 className="mt-5 max-w-3xl font-serif text-[clamp(2.6rem,6vw,5.2rem)] font-medium leading-[0.95]">
              Begin a private conversation.
            </h2>
            <p className="mt-6 max-w-lg text-[15px] leading-8 text-[#c5d0c4]">
              Request a private introduction, a sustainability dialogue, or interest in a project dossier when one exists. No tour is confirmed from this page.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/private-concierge" className="inline-flex min-h-14 items-center justify-center bg-ivory px-6 text-[11px] font-bold uppercase tracking-[0.14em] text-pine">
              Request a Private Introduction
            </Link>
            <Link href="/private-concierge?intent=sustainability" className="inline-flex min-h-14 items-center justify-center border border-ivory/60 px-6 text-[11px] font-bold uppercase tracking-[0.14em]">
              Discuss sustainability
            </Link>
            <Link href="/vision" className="inline-flex min-h-14 items-center justify-center text-[11px] font-bold uppercase tracking-[0.14em] text-gold">
              Explore the vision
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
