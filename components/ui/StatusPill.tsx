import { claimLabels, type ClaimStatus } from "@/data/project";

const tones: Record<ClaimStatus, string> = {
  verified: "border-pine/20 bg-pine/5 text-pine",
  ambition: "border-gold/40 bg-[#f6f0e4] text-[#8e7147]",
  conditional: "border-terracotta/30 bg-[#f6eee8] text-[#7a4f3d]",
  unverified: "border-error/30 bg-[#f8ecea] text-error",
};

export function StatusPill({ status }: { status: ClaimStatus }) {
  return (
    <span className={`inline-flex max-w-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${tones[status]}`}>
      {claimLabels[status]}
    </span>
  );
}
