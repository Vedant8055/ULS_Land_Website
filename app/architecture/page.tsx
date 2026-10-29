import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { MaterialAtelier } from "@/components/architecture/MaterialAtelier";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Architecture",
  description: "A biophilic, climate-responsive architectural vision for Transformative Living. No approved floor plans or villa inventory.",
};

export default function ArchitecturePage() {
  return (
    <main id="main">
      <PageHero
        kicker="Architecture"
        title="The quiet confidence of thoughtful design."
        lede="Material honesty, shade, air and privacy — described as a language, not a catalogue of units."
        image={images.sahyadriRidge}
      />
      <section className="mx-auto max-w-editorial px-6 py-24 md:px-10">
        <div className="grid gap-12 lg:grid-cols-3">
          {[
            ["Passive first", "Orientation, deep eaves, cross-ventilation, reflective roofs and daylight control before mechanical cooling is asked to work."],
            ["Invisible technology", "Sensors, irrigation and comfort automation as proposals — present only when they disappear into the day."],
            ["Low density as an aspiration", "Clustered homes, shaded streets, no invented unit count, plot size or possession date."],
          ].map(([title, copy]) => (
            <article key={title}>
              <h2 className="font-serif text-3xl text-sage">{title}</h2>
              <p className="mt-4 text-sm leading-8 text-muted">{copy}</p>
            </article>
          ))}
        </div>
        <div className="mt-20">
          <h2 className="font-serif text-4xl text-sage">Private Villa Design Atelier</h2>
          <p className="mt-4 max-w-2xl text-sm leading-8 text-muted">
            Finish, light and landscape explorations. Double-glazed low-E glazing is a planned specification, not an installed fact. No fabricated approved renders.
          </p>
          <div className="mt-10">
            <MaterialAtelier />
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-6 border-t border-pine/10 pt-10 md:flex-row md:items-center">
          <p className="max-w-xl text-sm leading-7 text-muted">When architectural drawings are approved, they can replace these material studies without rewriting the page.</p>
          <Link href="/private-concierge?intent=virtual" className="bg-pine px-6 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-ivory">
            Virtual design conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
