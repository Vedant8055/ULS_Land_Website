import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "The Place",
  description: "Masrul and Nashik in the Sahyadri landscape — general regional context without invented coordinates.",
};

export default function PlacePage() {
  return (
    <main id="main">
      <PageHero
        kicker="The Place"
        title="Masrul, against the Sahyadris."
        lede="A working location context in Nashik, Maharashtra. The exact parcel, access road and coordinates have not been supplied — so they are not invented."
        image={images.ghatsForest}
      />
      <section className="mx-auto max-w-editorial px-6 py-24 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl text-sage">A region, not a pin</h2>
            <p className="mt-5 text-[15px] leading-8 text-muted">
              Nashik sits on the Deccan, with the Western Ghats rising to the west. Monsoon greens the basalt. Winter is clearer and cooler. Summers ask buildings to shade themselves. That climate is the brief. It is not a promise of 300 bright days, a private microclimate, or a measured AQI.
            </p>
            <p className="mt-5 text-[15px] leading-8 text-muted">
              Masrul is named as the project’s place-word. Public maps show more than one settlement spelling in the district. Until a survey, title and planning authority are confirmed, this website shows only a general regional illustration.
            </p>
          </div>
          <aside className="border border-pine/10 bg-ivory p-8">
            <p className="kicker text-gold">What we will not publish</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-muted">
              <li>Exact coordinates or a cadastral outline</li>
              <li>Unverified distance to an airport or railway</li>
              <li>A live weather or clean-air widget</li>
              <li>A landmark treated as an amenity of the project</li>
            </ul>
          </aside>
        </div>
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          <figure className="relative min-h-[300px]">
            <Image src={images.heroBhandardara.src} alt={images.heroBhandardara.alt} fill className="object-cover" sizes="50vw" />
            <figcaption className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.14em] text-white">{images.heroBhandardara.caption}</figcaption>
          </figure>
          <figure className="relative min-h-[300px]">
            <Image src={images.monsoonFalls.src} alt={images.monsoonFalls.alt} fill className="object-cover" sizes="50vw" />
            <figcaption className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.14em] text-white">{images.monsoonFalls.caption}</figcaption>
          </figure>
        </div>
        <div className="relative mt-16 overflow-hidden border border-pine/10 bg-[#d7d3c4] p-8">
          <p className="kicker text-pine">Regional illustration</p>
          <svg viewBox="0 0 400 160" className="mt-6 w-full" role="img" aria-label="General Nashik and Western Ghats region, not a site map">
            <rect width="400" height="160" fill="#cfc8b4" />
            <path d="M0 120 C 40 100, 80 130, 130 110 C 180 90, 220 125, 280 100 C 330 84, 370 110, 400 96 L 400 160 L 0 160 Z" fill="#8f9d7b" />
            <path d="M0 70 C 60 40, 110 80, 170 50 C 230 24, 300 70, 400 40 L 400 0 L 0 0 Z" fill="#9aa88c" />
            <circle cx="210" cy="88" r="4" fill="#152b23" />
            <text x="220" y="92" fontSize="10" fill="#152b23">Nashik region</text>
            <text x="16" y="24" fontSize="9" fill="#3d312a">WESTERN GHATS · illustrative west</text>
            <text x="16" y="148" fontSize="9" fill="#3d312a">No parcel boundary · no airport pin · no claimed drive-time</text>
          </svg>
        </div>
      </section>
    </main>
  );
}
