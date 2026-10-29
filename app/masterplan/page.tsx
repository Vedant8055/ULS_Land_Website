import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ConceptMasterplan } from "@/components/masterplan/ConceptMasterplan";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Concept Masterplan",
  description: "An illustrative, interactive concept map for Transformative Living. Not a cadastral survey or approved layout.",
};

export default function MasterplanPage() {
  return (
    <main id="main">
      <PageHero
        kicker="Concept Masterplan"
        title="One community, six connected zones."
        lede="A public edge, a semi-public civic centre, a private residential core. Drawn as a conversation — not a sanctioned plan."
        image={images.westernGhatsGreen}
      />
      <section className="mx-auto max-w-editorial px-6 py-24 md:px-10">
        <ConceptMasterplan />
      </section>
    </main>
  );
}
