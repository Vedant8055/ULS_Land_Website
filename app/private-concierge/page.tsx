import type { Metadata } from "next";
import { EnquiryWizard } from "@/components/concierge/EnquiryWizard";
import type { EnquiryInput } from "@/lib/enquiry-schema";

export const metadata: Metadata = {
  title: "Private Concierge",
  description: "A considered, personal introduction to the Transformative Living vision. Demo enquiry — nothing is booked or transmitted.",
};

const intents = new Set(["site", "virtual", "sustainability", "dossier"]);

export default async function ConciergePage({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string }>;
}) {
  const params = await searchParams;
  const intent = intents.has(params.intent ?? "") ? (params.intent as EnquiryInput["experience"]) : undefined;

  return (
    <main id="main" className="bg-linen-warm">
      <section className="mx-auto max-w-editorial px-6 pb-10 pt-32 md:px-10">
        <p className="kicker text-gold">The private concierge</p>
        <h1 className="mt-5 max-w-3xl font-serif text-[clamp(3rem,7vw,6.5rem)] font-medium leading-[0.88] text-sage">
          The art of <em className="font-normal text-pine-soft">arriving.</em>
        </h1>
        <p className="mt-6 max-w-xl text-[16px] leading-8 text-muted">
          Some places deserve more than an ordinary introduction. Discover a considered, personal way to explore a new vision for living in harmony with nature.
        </p>
      </section>
      <div className="border-y border-pine/10 bg-[#e8eae1]">
        <div className="mx-auto grid max-w-editorial grid-cols-1 gap-4 px-6 py-5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#526256] sm:grid-cols-3 md:px-10">
          <p>01 · Thoughtfully personal</p>
          <p>02 · Private by design</p>
          <p>03 · No ordinary sales pitch</p>
        </div>
      </div>
      <section className="mx-auto max-w-editorial px-6 py-20 md:px-10">
        <div className="mb-12 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="kicker text-pine-soft">The invitation</p>
            <h2 className="mt-3 font-serif text-[clamp(2.1rem,6vw,3.15rem)] leading-[1.05] text-sage">A conversation before a commitment.</h2>
          </div>
          <p className="text-[15px] leading-8 text-muted">
            This is not an enquiry about square footage. It is a way to discover the ideas behind a more intentional life. Helicopter tours are not offered. A preferred date is not a booking.
          </p>
        </div>
        <EnquiryWizard initialExperience={intent} />
      </section>
      <section className="mx-auto max-w-editorial px-6 pb-24 md:px-10">
        <h2 className="font-serif text-4xl text-sage">Considered answers.</h2>
        <div className="mt-8 divide-y divide-pine/10 border-y border-pine/10">
          {[
            ["Does a preferred date mean my visit is booked?", "No. A private site consultation must be confirmed after site access, safety and availability are checked."],
            ["Can I book a helicopter tour?", "Not at this stage. Aviation access is an unconfirmed concept. It is not part of the enquiry options."],
            ["Are the sustainability systems operational?", "No. This is a concept-stage vision. Hydrogen is a future feasibility topic, not installed infrastructure."],
            ["Will my personal details be submitted?", "Not in this demonstration. The form runs a demo adapter and does not store information remotely."],
            ["Are the images from the actual Masrul site?", "No. Photography is illustrative licensed stock, including genuine Sahyadri regional landscapes. The concept film is original artwork, not site footage."],
          ].map(([q, a]) => (
            <details key={q} className="py-5">
              <summary className="cursor-pointer text-[15px] font-semibold">{q}</summary>
              <p className="mt-3 max-w-2xl text-[13px] leading-7 text-muted">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
