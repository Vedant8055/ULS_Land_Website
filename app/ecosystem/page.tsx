import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { EcosystemMap } from "@/components/ecosystem/EcosystemMap";
import { ImpactExplorer } from "@/components/ecosystem/ImpactExplorer";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Living Ecosystem",
  description: "Six living systems for a concept-stage community in Masrul, Nashik — energy, water, waste, nature, food and human life.",
};

export default function EcosystemPage() {
  return (
    <main id="main">
      <PageHero
        kicker="Living Ecosystem"
        title="Six systems. One metabolism."
        lede="A practical reading of the October 2026 pre-feasibility study — without turning it into a dashboard or a promise."
        image={images.ghatsForest}
      />
      <section className="mx-auto max-w-editorial px-6 py-24 md:px-10">
        <EcosystemMap deepLink />
        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <article className="border border-pine/10 bg-ivory p-8">
            <h2 className="font-serif text-3xl text-sage">Solar now. Hydrogen later, if at all.</h2>
            <p className="mt-4 text-sm leading-8 text-muted">
              Rooftop and common solar, efficient all-electric systems and batteries sized to critical loads are the first energy sequence. Green hydrogen is treated as a possible specialist demonstration after a dedicated technical and business case. It is not household fuel, not adjacent to homes or temples, and not shown as installed infrastructure.
            </p>
          </article>
          <article className="border border-pine/10 bg-ivory p-8">
            <h2 className="font-serif text-3xl text-sage">Waste is a loop, not a number</h2>
            <svg viewBox="0 0 320 80" className="mt-6 w-full text-sage" aria-hidden>
              <rect x="4" y="22" width="70" height="36" fill="none" stroke="currentColor" />
              <text x="39" y="44" textAnchor="middle" fontSize="9">Home sort</text>
              <path d="M76 40 H104" stroke="currentColor" />
              <rect x="104" y="22" width="78" height="36" fill="none" stroke="currentColor" />
              <text x="143" y="44" textAnchor="middle" fontSize="9">Shared yard</text>
              <path d="M182 40 H210" stroke="currentColor" />
              <rect x="210" y="22" width="100" height="36" fill="none" stroke="currentColor" />
              <text x="260" y="44" textAnchor="middle" fontSize="9">Reuse / dispose</text>
            </svg>
            <p className="mt-4 text-sm leading-8 text-muted">
              Household segregation, professionally managed composting and recycling, then responsible residual disposal. No diversion percentage is invented.
            </p>
          </article>
        </div>
        <div className="mt-16">
          <h2 className="font-serif text-4xl text-sage">Transparent explorers</h2>
          <p className="mt-4 max-w-2xl text-sm leading-8 text-muted">
            User-visible assumptions only. Governance later should report measured energy, water, waste and farmer-procurement KPIs — not live widgets on a marketing site.
          </p>
          <div className="mt-10">
            <ImpactExplorer />
          </div>
        </div>
        <figure className="relative mt-16 h-[360px]">
          <Image src={images.solarRoof.src} alt={images.solarRoof.alt} fill className="object-cover" sizes="100vw" />
          <figcaption className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.16em] text-white">{images.solarRoof.caption}</figcaption>
        </figure>
      </section>
    </main>
  );
}
