import Image from "next/image";
import Link from "next/link";
import { EcosystemMap } from "@/components/ecosystem/EcosystemMap";
import { ImpactExplorer } from "@/components/ecosystem/ImpactExplorer";
import { MaterialAtelier } from "@/components/architecture/MaterialAtelier";
import { ConceptMasterplan } from "@/components/masterplan/ConceptMasterplan";
import { images } from "@/data/images";

const interludes = [
  {
    title: "A park named for breath, not for medicine",
    copy: "The Oxygen Park is imagined as native shade, walking loops and rain gardens. The name is an amenity title. It does not claim clinically enriched air.",
    image: images.leafClose,
  },
  {
    title: "Food that can still be pointed to",
    copy: "Kitchen gardens, a seasonal market and farmer partnerships come before any promise of certified milk, aquaponics or a dairy herd.",
    image: images.vegFarm,
  },
  {
    title: "Quiet that includes everyone",
    copy: "A temple precinct, a Jain temple and multi-faith rooms, each with its own approach. Festival crowds should never have to cross private streets.",
    image: images.ghatsForest,
  },
];

export function EcosystemChapter() {
  return (
    <section id="ecosystem" className="bg-linen-warm py-24 md:py-32">
      <div className="mx-auto max-w-editorial px-6 md:px-10">
        <p className="kicker text-pine-soft">Chapter 04 · Six systems. One living philosophy</p>
        <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2.6rem,5vw,4.8rem)] font-medium leading-[0.95] text-sage">
          The living ecosystem.
        </h2>
        <p className="mt-5 max-w-2xl text-[15px] leading-8 text-muted">
          Solar, water, waste, nature, food and human life are not amenities to collect. They are one metabolism. Choose a system.
        </p>
        <div className="mt-14">
          <EcosystemMap />
        </div>
        <p className="mt-10">
          <Link href="/ecosystem" className="text-[11px] font-bold uppercase tracking-[0.14em] text-pine">
            Read the six systems in depth →
          </Link>
        </p>
      </div>
    </section>
  );
}

export function ArchitectureChapter() {
  return (
    <section id="architecture" className="bg-canvas py-24 md:py-32">
      <div className="mx-auto max-w-editorial px-6 md:px-10">
        <p className="kicker text-pine-soft">Chapter 05 · The quiet confidence of thoughtful design</p>
        <div className="mt-4 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-[clamp(2.6rem,5vw,4.6rem)] font-medium leading-[0.95] text-sage">
              Architecture in harmony.
            </h2>
            <p className="mt-6 text-[15px] leading-8 text-muted">
              Basalt, lime plaster, timber, terracotta. Deep shade. Cross-ventilation. Private courtyards. Technology that stays invisible. These are a design language — not approved villa types, floor plans or a price list.
            </p>
          </div>
          <figure className="relative min-h-[320px]">
            <Image src={images.sahyadriRidge.src} alt={images.sahyadriRidge.alt} fill className="object-cover" sizes="(min-width:1024px) 40vw, 100vw" />
            <figcaption className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.14em] text-white">
              Basalt landscape as material reference · {images.sahyadriRidge.caption}
            </figcaption>
          </figure>
        </div>
        <div className="mt-16">
          <MaterialAtelier />
        </div>
        <p className="mt-10">
          <Link href="/architecture" className="text-[11px] font-bold uppercase tracking-[0.14em] text-pine">
            Continue into the architecture vision →
          </Link>
        </p>
      </div>
    </section>
  );
}

export function ExperiencesChapter() {
  return (
    <section id="experiences" className="bg-pine text-ivory">
      <div className="mx-auto max-w-editorial px-6 py-24 md:px-10 md:py-32">
        <p className="kicker text-gold">Chapter 06 · A community shaped around living well</p>
        <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2.6rem,5vw,4.8rem)] font-medium leading-[0.95]">
          The world within.
        </h2>
        <p className="mt-5 max-w-xl text-[15px] leading-8 text-[#c5d0c4]">
          Prefer three deep interludes to a directory of tiles. Every facility below is envisioned or phased. None is open, certified or included in a home price.
        </p>
        <div className="mt-16 space-y-8">
          {interludes.map((item, index) => (
            <article key={item.title} className={`grid min-h-[420px] md:grid-cols-2 ${index % 2 ? "md:[&>figure]:order-2" : ""}`}>
              <figure className="relative min-h-[280px]">
                <Image src={item.image.src} alt={item.image.alt} fill className="object-cover" sizes="(min-width:768px) 50vw, 100vw" />
              </figure>
              <div className="flex items-center bg-[#1b3329] px-8 py-12 md:px-12">
                <div>
                  <p className="kicker text-gold">0{index + 1}</p>
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
            <li>Temple precinct, Jain temple, multi-faith quiet rooms — proposed, public/private access to be designed.</li>
            <li>Farm-to-table market and kitchen gardens — subject to operations and verification.</li>
            <li>Proposed A2 Gir dairy — not certified, not installed.</li>
            <li>Wellness spa with possible hydrotherapy — professionally operated, if feasible.</li>
            <li>School / nature academy — future institution, licensing and operator required.</li>
            <li>Tennis, 50 m pool concept, indoor sport, mini-golf, skating — lifecycle cost and demand not proven.</li>
            <li>Clinic concept — a hospital is not promised.</li>
            <li>Helipad / helicopter tour — not offered. Aviation feasibility unestablished.</li>
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

export function FutureChapter() {
  return (
    <section id="future" className="bg-linen-warm py-24 md:py-32">
      <div className="mx-auto max-w-editorial px-6 md:px-10">
        <p className="kicker text-pine-soft">Chapter 07 · Designed to give the future more consideration</p>
        <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2.6rem,5vw,4.6rem)] font-medium leading-[0.95] text-sage">
          Ambition, with its working shown.
        </h2>
        <p className="mt-5 max-w-2xl text-[15px] leading-8 text-muted">
          What is proposed, what is validated, what comes later. No live telemetry. No invented oxygen counts.
        </p>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            ["Proposed", "Passive-first homes, rooftop solar, rainwater, wastewater reuse, segregation, native landscape, farmer partnerships."],
            ["Validated", "A 16 October 2026 pre-feasibility research note. It is not an approval, clearance or engineering design."],
            ["Later / conditional", "Hydrogen, a 50 m pool, skating venue, school, hospital, spa, and any aviation idea. Helipad omitted on purpose."],
          ].map(([title, copy]) => (
            <article key={title} className="border border-pine/10 bg-ivory p-6">
              <h3 className="font-serif text-2xl text-sage">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{copy}</p>
            </article>
          ))}
        </div>
        <div className="mt-14">
          <ImpactExplorer />
        </div>
        <div className="mt-16">
          <h3 className="font-serif text-3xl text-sage">A first look at the concept plan</h3>
          <p className="mt-3 max-w-xl text-sm leading-7 text-muted">
            Interactive zones, not a survey. Precise coordinates have not been supplied.
          </p>
          <div className="mt-8">
            <ConceptMasterplan />
          </div>
          <Link href="/masterplan" className="mt-8 inline-block text-[11px] font-bold uppercase tracking-[0.14em] text-pine">
            Open the concept masterplan →
          </Link>
        </div>
      </div>
    </section>
  );
}

export function InvitationChapter() {
  return (
    <section id="invitation" className="bg-sage text-ivory">
      <div className="mx-auto flex max-w-editorial flex-col items-start justify-between gap-10 px-6 py-24 md:flex-row md:items-end md:px-10 md:py-32">
        <div>
          <p className="kicker text-gold">Chapter 08 · Every extraordinary place begins with a conversation</p>
          <h2 className="mt-5 max-w-3xl font-serif text-[clamp(2.6rem,6vw,5.2rem)] font-medium leading-[0.95]">
            We invite you to explore a different way to live.
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
        </div>
      </div>
    </section>
  );
}
