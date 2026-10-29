import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Experiences",
  description: "Wellness, nature, farm, spirituality, sport, education and community — labelled as conceptual or phased.",
};

const journeys = [
  { title: "Nature", status: "Proposed landscape", copy: "Shaded loops, rain gardens and an Oxygen Park named for atmosphere, not clinical oxygen.", image: images.leafClose },
  { title: "Nourishment", status: "Operations required", copy: "Kitchen gardens and a farmers’ market before any organic or dairy certification.", image: images.vegFarm },
  { title: "Stillness", status: "Design intention", copy: "Yoga, outdoor meditation and quiet rooms. No guaranteed health outcome.", image: images.rainLeaves },
  { title: "The wider hills", status: "Regional context", copy: "Monsoon water belongs to the Sahyadris. It is not a waterfall on the parcel.", image: images.monsoonFalls },
];

export default function ExperiencesPage() {
  return (
    <main id="main">
      <PageHero
        kicker="Experiences"
        title="A community shaped around living well."
        lede="Mindful spaces, multi-faith rooms, farming, sport, learning and care — each marked with the humility it still needs."
        image={images.heroBhandardara}
      />
      <section className="mx-auto max-w-editorial px-6 py-24 md:px-10">
        <div className="space-y-16">
          {journeys.map((item) => (
            <article key={item.title} className="grid gap-8 md:grid-cols-2 md:items-center">
              <figure className="relative min-h-[300px]">
                <Image src={item.image.src} alt={item.image.alt} fill className="object-cover" sizes="(min-width:768px) 50vw, 100vw" />
                <figcaption className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.14em] text-white">{item.image.caption}</figcaption>
              </figure>
              <div>
                <p className="kicker text-gold">{item.status}</p>
                <h2 className="mt-3 font-serif text-4xl text-sage">{item.title}</h2>
                <p className="mt-4 text-[15px] leading-8 text-muted">{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
        <aside className="mt-16 border-l-2 border-gold bg-ivory px-6 py-6 text-sm leading-7 text-muted">
          Sport, school, spa and clinic remain subject to site area, standards, lifecycle cost, licensing and an operator. A hospital is not promised. A helicopter tour is not offered.
        </aside>
      </section>
    </main>
  );
}
