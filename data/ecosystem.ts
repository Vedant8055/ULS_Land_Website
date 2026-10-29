import type { ClaimStatus } from "./project";

export type LivingSystem = {
  id: string;
  index: string;
  title: string;
  short: string;
  feel: string;
  work: string;
  status: string;
  claim: ClaimStatus;
};

export const livingSystems: LivingSystem[] = [
  {
    id: "energy",
    index: "A",
    title: "Conscious energy",
    short: "Quiet power, considered first.",
    feel: "The day does not announce its infrastructure. Shade, orientation and still rooms do most of the work. Light arrives where it is wanted. Heat is kept outside. What remains is asked of the sun, then of a restrained electric system.",
    work: "Passive-first building fabric, efficient all-electric systems, rooftop and common solar PV, battery resilience sized to critical loads, smart monitoring and EV-ready charging. Demand reduction comes before generation.",
    status:
      "High early feasibility when designed from the first drawing. Absolute lifecycle zero-carbon is not claimed. Hydrogen is a later specialist option only — not first-phase household energy.",
    claim: "ambition",
  },
  {
    id: "water",
    index: "B",
    title: "Water stewardship",
    short: "Rain held, water respected.",
    feel: "Gardens drink before the tap is asked. Paths take the monsoon without drama. A household learns the difference between water that must be potable and water that may simply be clean enough to return.",
    work: "Roof harvesting, first-flush and storage or recharge, bioswales and rain gardens, treated wastewater for permitted non-potable uses, responsible planting and groundwater care. A simple annual illustration: litres = roof m² × rainfall mm × runoff coefficient.",
    status:
      "High feasibility with maintenance and monitoring. Site water autonomy is not claimed. Groundwater is not assumed to be an unlimited backup.",
    claim: "ambition",
  },
  {
    id: "waste",
    index: "C",
    title: "Circular material flows",
    short: "Nothing hurried to landfill.",
    feel: "The kitchen does not hide its leftovers. Wet and dry have a place. Soil is fed. Construction is asked to leave less behind than it usually does.",
    work: "Household segregation, shared professionally managed recycling and composting, responsible residual disposal, construction-material recovery. ‘A recycling facility for every home’ means convenient sorting — not a plant in each garden.",
    status:
      "High feasibility as an operating practice. Diversion percentages are not invented. Gated communities above applicable built-up thresholds may have bulk-generator duties under Indian solid-waste rules — to be confirmed with the local body.",
    claim: "ambition",
  },
  {
    id: "nature",
    index: "D",
    title: "Nature and biodiversity",
    short: "The Oxygen Park, rightly named.",
    feel: "A morning walk that does not feel scheduled. Shade that is older than the path. Quiet that is not emptiness — only the absence of hurry.",
    work: "Native micro-forests, shaded trails, rain gardens, forest-bathing loops and landscape-led quiet. ‘Oxygen Park’ is the proposed amenity name for these planted, walkable landscapes.",
    status:
      "A design intention, not a medical facility. No clinically significant oxygen enrichment, AQI reading or tree-survival rate is published. Planting lists await a site survey.",
    claim: "ambition",
  },
  {
    id: "food",
    index: "E",
    title: "Farm-to-table nourishment",
    short: "Food with a known origin.",
    feel: "Breakfast that can be pointed to: a garden bed, a neighbouring field, a market stall that still knows the grower’s name.",
    work: "Household kitchen gardens, seasonal produce, possible aquaponics or vertical growing where feasible, contracted local farmer partners, a proposed A2 Gir dairy and door-to-door produce concept.",
    status:
      "High–medium feasibility with farmer contracts, food safety and demand. Organic certification is not claimed. On-site Gir cattle, aquaponics and a daily dairy are operational concepts — not installed assets.",
    claim: "conditional",
  },
  {
    id: "human",
    index: "F",
    title: "Human flourishing",
    short: "Time, family, and a quieter day.",
    feel: "A child can walk to play. An elder can sit in shade. There is a place to practise, a place to gather, and a place to be left alone.",
    work: "Healthful design intentions, yoga and wellness rooms, family recreation, spirituality, education, play, sport and cultural life — with public, semi-public and private zones kept conceptually separate.",
    status:
      "Wellbeing is a design intention, not a medical outcome. School, clinic, spa and sports campus are phased, operator-dependent concepts. A hospital is not promised. No helicopter tour is offered.",
    claim: "conditional",
  },
];

export const masterplanZones = [
  {
    id: "residential",
    letter: "A",
    title: "Private residential clusters",
    summary:
      "Low-density bungalow neighbourhoods, private gardens, shaded pedestrian routes and household waste-sorting niches. Heavy service traffic kept away.",
    status: "Concept geometry only — no plot numbers, unit count or prices.",
  },
  {
    id: "greenblue",
    letter: "B",
    title: "Green-blue infrastructure",
    summary:
      "Rain gardens, swales, detention, native shade and walking loops. Stormwater routes imagined before buildings.",
    status: "Illustrative. Drainage and flood paths require a site survey.",
  },
  {
    id: "utilities",
    letter: "C",
    title: "Utility and circular-economy yard",
    summary:
      "Solar inverters and possible batteries, electrical room, STP, recycled-water tanks, composting and dry-waste sorting with vehicle access and buffers.",
    status: "Proposed. Consent and siting depend on MPCB and local authority screening.",
  },
  {
    id: "sports",
    letter: "D",
    title: "Sports and wellness campus",
    summary:
      "A clustered leisure campus that may, in later phases, hold courts, a 50 m pool concept, indoor sport and changing rooms — sharing staff, energy and parking.",
    status: "Medium–low to deliver all at once. Phase and validate demand. Not bookable.",
  },
  {
    id: "civic",
    letter: "E",
    title: "Civic and retail edge",
    summary:
      "Farmers’ market, grocery, possible school and clinic, community hall. Independent public entry so nearby villages need not cross private streets.",
    status: "Semi-public by design. Operators, licensing and access still open.",
  },
  {
    id: "quiet",
    letter: "F",
    title: "Quiet and spiritual precinct",
    summary:
      "A temple precinct with natural materials, a Jain temple, and inclusive multi-faith quiet rooms, each with its own approach and acoustic buffer.",
    status: "Proposed. Public-access and festival management must be designed, not assumed.",
  },
] as const;
