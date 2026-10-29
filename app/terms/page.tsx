import type { Metadata } from "next";
import { project } from "@/data/project";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-6 pb-24 pt-32 md:px-10">
      <p className="kicker text-gold">Terms of use</p>
      <h1 className="mt-4 font-serif text-5xl text-sage">A website about a vision</h1>
      <div className="mt-8 space-y-5 text-[15px] leading-8 text-muted">
        <p>
          This website describes a concept-stage community vision associated with {project.placeLong}. It is not an offer for sale, a RERA listing, a booking engine, or a representation that any amenity exists.
        </p>
        <p>
          The 16 October 2026 feasibility note is research, not an engineering approval or government clearance. Copy that says “proposed”, “envisioned” or “subject to” should be read that way.
        </p>
        <p>
          Legal entity, registered address and RERA number: {project.operator.rera}. Replace these placeholders only with verified operator details.
        </p>
        <p>Content is provided for private review. Do not treat images, the concept film, or the masterplan drawing as the finished project.</p>
      </div>
    </main>
  );
}
