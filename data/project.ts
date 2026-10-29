export const project = {
  brand: "Transformative Living",
  monogram: "T.",
  place: "Masrul · Nashik",
  placeLong: "Masrul, Nashik, Maharashtra, India",
  landscape: "Sahyadri / Western Ghats landscape context",
  status: "Concept-stage vision",
  statusLong:
    "A concept-stage, low-density, nature-centric community vision. This website describes an intended way of living, not a completed development, approved inventory, or bookable resort.",
  year: 2026,
  positioning: [
    "More than a home. A different way to live.",
    "A vision for life in harmony with nature.",
    "Where innovation grows quieter, and life grows richer.",
  ],
  coreThought: "Not just a place to live. A new way to experience life.",
  operator: {
    legalName: "Information to be supplied",
    address: "Information to be supplied",
    email: "Information to be supplied",
    phone: "Information to be supplied",
    rera: "Not supplied — do not treat this website as a RERA listing",
  },
  demoMode: true,
  report: {
    title: "Sustainable Gated Community – Feasibility & Master-Planning Research",
    date: "16 October 2026",
    status: "Pre-feasibility research; not a statutory submission or engineering design",
    jurisdiction: "Nashik / Maharashtra, India — provisional assumption",
  },
} as const;

export const navItems = [
  { href: "/vision", label: "The Vision" },
  { href: "/ecosystem", label: "Living Ecosystem" },
  { href: "/architecture", label: "Architecture" },
  { href: "/experiences", label: "Experiences" },
  { href: "/place", label: "The Place" },
] as const;

export const chapters = [
  { id: "arrival", label: "Arrival", short: "01" },
  { id: "philosophy", label: "Philosophy", short: "02" },
  { id: "landscape", label: "Landscape", short: "03" },
  { id: "ecosystem", label: "Ecosystem", short: "04" },
  { id: "day", label: "A Day", short: "05" },
  { id: "architecture", label: "Architecture", short: "06" },
  { id: "experiences", label: "The World Within", short: "07" },
  { id: "invitation", label: "Invitation", short: "08" },
] as const;

export type ClaimStatus =
  | "verified"
  | "ambition"
  | "conditional"
  | "unverified";

export const claimLabels: Record<ClaimStatus, string> = {
  verified: "Verified for publication",
  ambition: "Design ambition · conceptual",
  conditional: "Subject to feasibility, licensing or phasing",
  unverified: "Unverified · not published as fact",
};
