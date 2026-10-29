import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { ADayTransformed } from "@/components/story/ADayTransformed";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "The Vision",
  description: "The Transformative Living manifesto — a different way to live in the Sahyadri landscape. Concept-stage.",
};

const principles = [
  ["Time before spectacle", "The first luxury is an unhurried morning, not a longer feature list."],
  ["Nature as daily life", "Hills, rain, shade and soil are not weekend scenery. They are the setting of ordinary hours."],
  ["Systems that stay quiet", "Energy, water and waste should be excellent and mostly invisible."],
  ["Family across ages", "A child, a working adult and an elder should each find a pace here."],
  ["Honesty of status", "What is envisioned is said as envisioned. What is unproven stays unproven."],
  ["Community without performance", "Gathering is offered; solitude is protected."],
];

export default function VisionPage() {
  return (
    <main id="main">
      <PageHero
        kicker="The Vision"
        title="More than a home."
        lede="A manifesto for life in harmony with nature — written before any villa is drawn as a product."
        image={images.westernGhatsGreen}
      />
      <section className="mx-auto max-w-editorial px-6 py-24 md:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="kicker text-pine-soft">The belief</p>
            <h2 className="mt-4 font-serif text-5xl leading-tight text-sage">We are not selling luxury villas.</h2>
            <p className="mt-6 text-[16px] leading-8 text-muted">
              We are introducing a different way to live. Solar power, a possible future hydrogen study, circular waste, rainwater, native landscapes, soil, community agriculture and wellness are enabling systems — not isolated amenities, and not a medical programme.
            </p>
          </div>
          <blockquote className="font-serif text-3xl leading-snug text-sage md:text-4xl">
            “Not just a place to live. A new way to experience life.”
          </blockquote>
        </div>
        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {principles.map(([title, copy]) => (
            <article key={title} className="border-t border-gold/50 pt-6">
              <h3 className="font-serif text-2xl text-sage">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <figure className="relative h-[50vh] min-h-[360px]">
        <Image src={images.rainLeaves.src} alt={images.rainLeaves.alt} fill className="object-cover" sizes="100vw" />
        <figcaption className="absolute bottom-5 left-6 text-[10px] uppercase tracking-[0.16em] text-white">
          {images.rainLeaves.caption}
        </figcaption>
      </figure>
      <ADayTransformed />
      <section className="bg-pine px-6 py-20 text-ivory md:px-10">
        <div className="mx-auto flex max-w-editorial flex-col justify-between gap-8 md:flex-row md:items-end">
          <p className="max-w-xl font-serif text-4xl">Nature and intelligent engineering belong together — without pretending the engineering is finished.</p>
          <Link href="/private-concierge" className="bg-ivory px-6 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-pine">
            Begin a conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
