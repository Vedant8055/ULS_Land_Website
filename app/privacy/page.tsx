import type { Metadata } from "next";
import { project } from "@/data/project";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-6 pb-24 pt-32 md:px-10">
      <p className="kicker text-gold">Privacy</p>
      <h1 className="mt-4 font-serif text-5xl text-sage">How this website treats information</h1>
      <div className="mt-8 space-y-5 text-[15px] leading-8 text-muted">
        <p>
          {project.brand} is a concept-stage presentation. The Private Concierge form is in demo mode. Submitting it does not transmit, store or sell personal information. A local text summary can be downloaded on the visitor’s device only.
        </p>
        <p>
          A production launch will need a project-specific privacy notice, a named data fiduciary, retention rules, and a review against the Digital Personal Data Protection Act, 2023. This page does not claim DPDP compliance.
        </p>
        <p>
          Operator: {project.operator.legalName}. Contact: {project.operator.email}. No analytics cookies are set by this build. Essential hosting logs, if any, are a matter for the eventual host — none are configured here.
        </p>
        <p>Photography is used under the Unsplash License as editorial illustration. It is not personal data about residents.</p>
      </div>
    </main>
  );
}
