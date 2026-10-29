import type { ClaimStatus } from "./project";

export type MotionMode =
  | "hero"
  | "pinned-diorama"
  | "ecosystem-sequence"
  | "photographic-day"
  | "villa"
  | "editorial"
  | "closing";

export type CameraState = {
  position: [number, number, number];
  target: [number, number, number];
  fov: number;
};

export type LightState = {
  sunAzimuth: number;
  sunElevation: number;
  intensity: number;
  warmth: number;
  overcast: number;
};

export type ScrollBeat = {
  id: string;
  start: number;
  end: number;
  headline: string;
  body: string;
  camera: CameraState;
  light: LightState;
  system?: "overview" | "energy" | "water" | "waste" | "food" | "nature";
};

export type StoryAct = {
  id: string;
  anchor: string;
  chapterNumber: string;
  eyebrow: string;
  headline: string;
  body: string;
  mobileBody: string;
  assetIds: string[];
  motionMode: MotionMode;
  claimStatus: ClaimStatus;
  claimsMatrixId: string;
  reducedMotionFallback: string;
  scrollBeats: ScrollBeat[];
};

const day = {
  sunAzimuth: 0.55,
  sunElevation: 0.72,
  intensity: 1.15,
  warmth: 0.42,
  overcast: 0.08,
};

const overcast = {
  sunAzimuth: 0.2,
  sunElevation: 0.45,
  intensity: 0.55,
  warmth: 0.15,
  overcast: 0.72,
};

export const landscapeBeats: ScrollBeat[] = [
  {
    id: "wide",
    start: 0,
    end: 0.16,
    headline: "A hillside held with care.",
    body: "A conceptual model of how a low-density community might sit with forest, water and path. Not a survey. Not an approved plan.",
    camera: { position: [16.4, 11.2, 18.6], target: [0.2, 0.4, 0], fov: 36 },
    light: day,
    system: "overview",
  },
  {
    id: "orbit",
    start: 0.16,
    end: 0.3,
    headline: "The land is the first neighbour.",
    body: "The camera descends. Shade, slope and still air do more work than any machine we might later add.",
    camera: { position: [11.2, 7.8, 14.4], target: [0.4, 0.55, 0.2], fov: 34 },
    light: day,
    system: "overview",
  },
  {
    id: "forest",
    start: 0.3,
    end: 0.44,
    headline: "Native canopy first.",
    body: "Trees are shown as a living layer, not decoration around plots. Species and densities await a real survey.",
    camera: { position: [5.4, 5.2, 9.6], target: [-3.6, 1.1, -1.8], fov: 32 },
    light: { ...day, intensity: 0.95 },
    system: "nature",
  },
  {
    id: "homes",
    start: 0.44,
    end: 0.58,
    headline: "Few dwellings. Deep gardens.",
    body: "Low houses appear as massing studies. No plot numbers, unit count or prices are implied.",
    camera: { position: [8.2, 4.6, 8.1], target: [2.1, 0.55, 1.1], fov: 32 },
    light: day,
    system: "overview",
  },
  {
    id: "waterways",
    start: 0.58,
    end: 0.74,
    headline: "Water is given a route.",
    body: "A conceptual corridor for rain, detention and reuse. Drainage requires a measured site, not this drawing.",
    camera: { position: [3.8, 4.4, 11.2], target: [0.2, 0.15, 2.4], fov: 33 },
    light: overcast,
    system: "water",
  },
  {
    id: "residence",
    start: 0.74,
    end: 1,
    headline: "Toward one quiet threshold.",
    body: "The view approaches a single dwelling so the next chapters can speak of light, material and daily life.",
    camera: { position: [6.4, 4.2, 8.2], target: [2.0, 0.6, 1.1], fov: 32 },
    light: { ...day, warmth: 0.55, sunElevation: 0.5 },
    system: "overview",
  },
];

export const ecosystemBeats: ScrollBeat[] = [
  {
    id: "energy",
    start: 0,
    end: 0.2,
    headline: "Harness what nature gives.",
    body: "Soft light finds the roofs. Passive fabric first, then solar, then restrained storage. Green hydrogen is a later feasibility question — not shown as live power.",
    camera: { position: [9.4, 7.2, 6.8], target: [2.2, 1.05, 1.1], fov: 31 },
    light: { sunAzimuth: 0.85, sunElevation: 0.78, intensity: 1.35, warmth: 0.62, overcast: 0.04 },
    system: "energy",
  },
  {
    id: "water",
    start: 0.2,
    end: 0.4,
    headline: "Respect every drop.",
    body: "The sky cools. Rain is imagined moving from roof to garden to shared storage. Yield depends on rainfall, engineering and approvals — never 100% autonomy.",
    camera: { position: [5.6, 6.4, 12.2], target: [0.1, 0.2, 2.2], fov: 34 },
    light: overcast,
    system: "water",
  },
  {
    id: "waste",
    start: 0.4,
    end: 0.6,
    headline: "Let nothing useful go to waste.",
    body: "A refined cutaway of sorting, shared composting and soil return. No diversion percentage is invented. Nothing is ‘zero waste achieved’.",
    camera: { position: [7.4, 5.6, 9.2], target: [1.5, 0.45, 0.8], fov: 32 },
    light: { ...day, intensity: 0.8, warmth: 0.35 },
    system: "waste",
  },
  {
    id: "food",
    start: 0.6,
    end: 0.8,
    headline: "Know where nourishment begins.",
    body: "From soil to kitchen garden to neighbouring fields. A proposed dairy stays conditional until operations exist. Organic certification is not claimed.",
    camera: { position: [6.8, 4.8, 8.6], target: [-0.4, 0.4, 1.8], fov: 33 },
    light: { ...day, warmth: 0.5 },
    system: "food",
  },
  {
    id: "nature",
    start: 0.8,
    end: 1,
    headline: "Make room for life to flourish.",
    body: "Canopy, shade and open courts take the foreground. Parks are for walking and weather — not medically enriched air.",
    camera: { position: [-1.8, 5.1, 8.4], target: [-4.8, 1.8, -2.6], fov: 33 },
    light: { ...day, intensity: 0.9, sunElevation: 0.6 },
    system: "nature",
  },
];

export const dayBeats: ScrollBeat[] = [
  {
    id: "breathe",
    start: 0,
    end: 0.25,
    headline: "06:00 — Breathe",
    body: "Wake with the light, not the noise. A walk among native trees. The first hour is not a dashboard.",
    camera: { position: [0, 0, 0], target: [0, 0, 0], fov: 40 },
    light: { sunAzimuth: 0.15, sunElevation: 0.28, intensity: 0.7, warmth: 0.7, overcast: 0.1 },
  },
  {
    id: "nourish",
    start: 0.25,
    end: 0.5,
    headline: "09:00 — Nourish",
    body: "Eat closer to the source. Fruit, grain, a garden bed if the household wants one. Nothing certified until it is certified.",
    camera: { position: [0, 0, 0], target: [0, 0, 0], fov: 40 },
    light: { sunAzimuth: 0.4, sunElevation: 0.55, intensity: 1, warmth: 0.45, overcast: 0.08 },
  },
  {
    id: "flourish",
    start: 0.5,
    end: 0.75,
    headline: "16:00 — Flourish",
    body: "Rediscover the luxury of time. Learning, play, a path, a lesson under trees — recreation as daily life, not unused amenities.",
    camera: { position: [0, 0, 0], target: [0, 0, 0], fov: 40 },
    light: { sunAzimuth: 0.7, sunElevation: 0.48, intensity: 1.05, warmth: 0.55, overcast: 0.06 },
  },
  {
    id: "restore",
    start: 0.75,
    end: 1,
    headline: "20:00 — Restore",
    body: "Come home to stillness. Warm rooms. A garden that keeps its privacy. The day ends without performing itself.",
    camera: { position: [0, 0, 0], target: [0, 0, 0], fov: 40 },
    light: { sunAzimuth: 0.9, sunElevation: 0.12, intensity: 0.35, warmth: 0.75, overcast: 0.2 },
  },
];

export const villaBeats: ScrollBeat[] = [
  {
    id: "approach",
    start: 0,
    end: 0.28,
    headline: "Designed around the rhythm of life.",
    body: "A light architectural form amid greenery. An illustrative villa study — not an approved type or a claimed render.",
    camera: { position: [9.2, 5.4, 9.6], target: [0, 0.55, 0], fov: 34 },
    light: { sunAzimuth: 0.35, sunElevation: 0.4, intensity: 1.05, warmth: 0.5, overcast: 0.08 },
  },
  {
    id: "courtyard",
    start: 0.28,
    end: 0.55,
    headline: "A court that holds the weather.",
    body: "The camera arcs toward shade, void and a planted heart. Privacy is a plan, not a slogan.",
    camera: { position: [6.2, 3.8, 7.4], target: [0.1, 0.7, 0.1], fov: 32 },
    light: { sunAzimuth: 0.55, sunElevation: 0.62, intensity: 1.15, warmth: 0.4, overcast: 0.05 },
  },
  {
    id: "section",
    start: 0.55,
    end: 0.8,
    headline: "Light before machinery.",
    body: "The roof lifts conceptually to show daylight and shaded rooms. Illustrative — not a certified solar or airflow study.",
    camera: { position: [7.1, 6.4, 8.0], target: [0, 0.85, 0], fov: 34 },
    light: { sunAzimuth: 0.7, sunElevation: 0.7, intensity: 1.2, warmth: 0.35, overcast: 0.04 },
  },
  {
    id: "evening",
    start: 0.8,
    end: 1,
    headline: "A vessel for wellbeing.",
    body: "The house is not the product. It is a quiet instrument for time, family and rest.",
    camera: { position: [8.2, 3.8, 8.6], target: [0, 0.65, 0.15], fov: 33 },
    light: { sunAzimuth: 0.92, sunElevation: 0.28, intensity: 0.92, warmth: 0.72, overcast: 0.1 },
  },
];

export const storyActs: StoryAct[] = [
  {
    id: "arrival",
    anchor: "arrival",
    chapterNumber: "01",
    eyebrow: "Masrul · Nashik · A vision for transformative living",
    headline: "What if life could feel different?",
    body: "Beyond the ordinary. Closer to what matters.",
    mobileBody: "A quieter way to arrive — scroll to enter the story.",
    assetIds: ["hero-bhandardara", "hero-ambient"],
    motionMode: "hero",
    claimStatus: "ambition",
    claimsMatrixId: "concept-stage",
    reducedMotionFallback: "Still landscape photograph with the opening question and a skip control.",
    scrollBeats: [
      {
        id: "question",
        start: 0,
        end: 0.45,
        headline: "What if life could feel different?",
        body: "Beyond the ordinary. Closer to what matters.",
        camera: { position: [0, 0, 1], target: [0, 0, 0], fov: 40 },
        light: day,
      },
      {
        id: "promise",
        start: 0.45,
        end: 1,
        headline: "More than a home. A different way to live.",
        body: "A private vision of regenerative living, crafted around the things that make life meaningful.",
        camera: { position: [0, 0, 0.82], target: [0, 0, 0], fov: 36 },
        light: day,
      },
    ],
  },
  {
    id: "philosophy",
    anchor: "philosophy",
    chapterNumber: "02",
    eyebrow: "From possession to presence",
    headline: "Luxury is not simply having more.",
    body: "It is having more time. More clarity. More connection. A place conceived to bring life back into balance.",
    mobileBody: "Time, clarity and connection — before any amenity list.",
    assetIds: ["sahyadri-ridge"],
    motionMode: "editorial",
    claimStatus: "ambition",
    claimsMatrixId: "positioning",
    reducedMotionFallback: "Editorial photograph and the full manifesto copy, unpinned.",
    scrollBeats: [],
  },
  {
    id: "landscape",
    anchor: "landscape",
    chapterNumber: "03",
    eyebrow: "The living landscape",
    headline: "A hillside, held as a community.",
    body: "Conceptual ecosystem visualization · Not an approved site plan.",
    mobileBody: "A stylized model of forest, water and low houses — not a map of Masrul.",
    assetIds: ["western-ghats-green"],
    motionMode: "pinned-diorama",
    claimStatus: "unverified",
    claimsMatrixId: "masterplan-concept",
    reducedMotionFallback: "Sequential stills of the conceptual landscape with the same captions.",
    scrollBeats: landscapeBeats,
  },
  {
    id: "ecosystem",
    anchor: "ecosystem",
    chapterNumber: "04",
    eyebrow: "Invisible intelligence",
    headline: "Nature and technology, working quietly.",
    body: "Sun, rain, soil, food and forest as one metabolism — not five amenity tiles.",
    mobileBody: "Five connected systems, told in sequence.",
    assetIds: ["solar-roof", "rain-leaves", "garden-beds", "veg-farm", "ghats-forest"],
    motionMode: "ecosystem-sequence",
    claimStatus: "ambition",
    claimsMatrixId: "six-systems",
    reducedMotionFallback: "Still frames for energy, water, waste, food and forest with honest status lines.",
    scrollBeats: ecosystemBeats,
  },
  {
    id: "day",
    anchor: "day",
    chapterNumber: "05",
    eyebrow: "Life reimagined",
    headline: "A day transformed.",
    body: "How the systems become a morning, a meal, an afternoon, a quieter night. Mood references — not residents or site amenities.",
    mobileBody: "Four hours of a hypothetical day.",
    assetIds: ["hero-bhandardara", "veg-farm", "western-ghats-green", "rain-leaves"],
    motionMode: "photographic-day",
    claimStatus: "ambition",
    claimsMatrixId: "day-story",
    reducedMotionFallback: "Clickable hour timeline with still photographs.",
    scrollBeats: dayBeats,
  },
  {
    id: "architecture",
    anchor: "architecture",
    chapterNumber: "06",
    eyebrow: "Architecture that breathes",
    headline: "Designed around the rhythm of life.",
    body: "A conceptual villa study in stone, timber, lime and shade. Not a claimed project render.",
    mobileBody: "Material, courtyard and daylight as an architectural study.",
    assetIds: ["sahyadri-ridge", "interior-courtyard"],
    motionMode: "villa",
    claimStatus: "ambition",
    claimsMatrixId: "architecture-language",
    reducedMotionFallback: "Material atelier stills and daylight labels without camera motion.",
    scrollBeats: villaBeats,
  },
  {
    id: "experiences",
    anchor: "experiences",
    chapterNumber: "07",
    eyebrow: "A world within",
    headline: "A place where belonging feels natural.",
    body: "Quiet rooms, nourishment, learning and care — each marked as envisioned, phased or subject to an operator.",
    mobileBody: "Human-scale photographs, not an amenity grid.",
    assetIds: ["leaf-close", "veg-farm", "ghats-forest"],
    motionMode: "editorial",
    claimStatus: "conditional",
    claimsMatrixId: "amenities-phasing",
    reducedMotionFallback: "Asymmetric editorial photographs with status copy.",
    scrollBeats: [],
  },
  {
    id: "invitation",
    anchor: "invitation",
    chapterNumber: "08",
    eyebrow: "The long view",
    headline: "Some places are discovered.",
    body: "Others change the way you live. Begin a private conversation.",
    mobileBody: "A private introduction — nothing is booked from this page.",
    assetIds: ["hero-bhandardara"],
    motionMode: "closing",
    claimStatus: "ambition",
    claimsMatrixId: "invitation",
    reducedMotionFallback: "Closing landscape still, claims panel and concierge links.",
    scrollBeats: [],
  },
];

export const ecosystemMarkers = [
  { id: "nature", label: "Forest", hint: "Native canopy and walking shade — a landscape intention, not a medical park." },
  { id: "water", label: "Water", hint: "Rain imagined as a route. Autonomy is not claimed." },
  { id: "energy", label: "Energy", hint: "Passive first, then solar. Hydrogen is not first-phase power." },
  { id: "waste", label: "Soil", hint: "Sorting and compost as a loop. No invented diversion rate." },
  { id: "food", label: "Community", hint: "Gardens and neighbouring farms before any certified dairy." },
] as const;
