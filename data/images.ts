export type ImageAsset = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  photographer: string;
  sourceUrl: string;
  unsplashId: string;
  license: string;
  illustrative: true;
  regionNote: string;
};

const unsplash = "Unsplash License — https://unsplash.com/license";

export const images = {
  heroBhandardara: {
    id: "hero-bhandardara",
    src: "/media/images/hero-bhandardara.jpg",
    alt: "Monsoon cloud over forested basalt hills in the Bhandardara region of the Western Ghats",
    caption: "Illustrative regional photograph — Bhandardara / Western Ghats. Not the Masrul site.",
    photographer: "Piyanshu Sharma",
    sourceUrl: "https://unsplash.com/photos/l1kV3iAxtNE",
    unsplashId: "photo-1689473679858-52767a72609f",
    license: unsplash,
    illustrative: true,
    regionNote: "Nashik-adjacent Sahyadri landscape used as atmosphere, not a project view.",
  },
  sahyadriRidge: {
    id: "sahyadri-ridge",
    src: "/media/images/sahyadri-ridge.jpg",
    alt: "Green monsoon grass on a steep Sahyadri escarpment with a distant basalt plateau",
    caption: "Illustrative Sahyadri ridge photography — not the project site.",
    photographer: "Unsplash contributor",
    sourceUrl: "https://unsplash.com/photos/a170af256f67",
    unsplashId: "photo-1663079156029-a170af256f67",
    license: unsplash,
    illustrative: true,
    regionNote: "Western Ghats tableland character; parcel geometry unknown.",
  },
  westernGhatsGreen: {
    id: "western-ghats-green",
    src: "/media/images/western-ghats-green.jpg",
    alt: "Rolling monsoon-green hills under cloud, Western Ghats character",
    caption: "Illustrative Western Ghats grassland — not Masrul.",
    photographer: "Rahul",
    sourceUrl: "https://unsplash.com/photos/WQAzQyRo2Fc",
    unsplashId: "photo-1622725859789-8e9ccf920693",
    license: unsplash,
    illustrative: true,
    regionNote: "Shola-grassland character of the wider Ghats, used editorially.",
  },
  ghatsForest: {
    id: "ghats-forest",
    src: "/media/images/ghats-forest.jpg",
    alt: "Deciduous forested ridges and distant plateaus under monsoon cloud",
    caption: "Illustrative Deccan / Sahyadri woodland — not the project site.",
    photographer: "Abhishek Kirloskar",
    sourceUrl: "https://unsplash.com/photos/75a9474fecb0",
    unsplashId: "photo-1660294534711-75a9474fecb0",
    license: unsplash,
    illustrative: true,
    regionNote: "Seasonally dry woodland typical of inland Maharashtra hills.",
  },
  rainLeaves: {
    id: "rain-leaves",
    src: "/media/images/rain-leaves.jpg",
    alt: "Raindrops hanging in the air beside a sunlit leafy branch",
    caption: "Illustrative nature detail — monsoon light and water.",
    photographer: "Unsplash contributor",
    sourceUrl: "https://unsplash.com/photos/photo-1518173946687-a4c8892bbd9f",
    unsplashId: "photo-1518173946687-a4c8892bbd9f",
    license: unsplash,
    illustrative: true,
    regionNote: "Atmospheric close-up, not a site botanical survey.",
  },
  leafClose: {
    id: "leaf-close",
    src: "/media/images/leaf-close.jpg",
    alt: "Close study of layered green foliage",
    caption: "Illustrative foliage texture.",
    photographer: "Unsplash contributor",
    sourceUrl: "https://unsplash.com/photos/photo-1518531933037-91b2f5f229cc",
    unsplashId: "photo-1518531933037-91b2f5f229cc",
    license: unsplash,
    illustrative: true,
    regionNote: "Used as a material of nature, not a species inventory.",
  },
  vegFarm: {
    id: "veg-farm",
    src: "/media/images/veg-farm.jpg",
    alt: "Baskets of bitter gourd, cucumber, carrots and chillies at a produce stall",
    caption: "Illustrative local-market produce — not an on-site farm photograph.",
    photographer: "Unsplash contributor",
    sourceUrl: "https://unsplash.com/photos/photo-1464226184884-fa280b87c399",
    unsplashId: "photo-1464226184884-fa280b87c399",
    license: unsplash,
    illustrative: true,
    regionNote: "Food-system storytelling only; no certified organic claim.",
  },
  gardenBeds: {
    id: "garden-beds",
    src: "/media/images/garden-beds.jpg",
    alt: "Dark potting soil, a garden scoop and pruning shears on a work surface",
    caption: "Illustrative soil and garden-work still life.",
    photographer: "Unsplash contributor",
    sourceUrl: "https://unsplash.com/photos/photo-1416879595882-3373a0480b5b",
    unsplashId: "photo-1416879595882-3373a0480b5b",
    license: unsplash,
    illustrative: true,
    regionNote: "Kitchen-garden concept, not an installed plot.",
  },
  solarRoof: {
    id: "solar-roof",
    src: "/media/images/solar-roof.jpg",
    alt: "Rows of photovoltaic panels under a bright sky",
    caption: "Illustrative solar technology — not an installed array at Masrul.",
    photographer: "Unsplash contributor",
    sourceUrl: "https://unsplash.com/photos/photo-1509391366360-2e959784a276",
    unsplashId: "photo-1509391366360-2e959784a276",
    license: unsplash,
    illustrative: true,
    regionNote: "Technology reference only. Yield and siting are unverified.",
  },
  monsoonFalls: {
    id: "monsoon-falls",
    src: "/media/images/monsoon-falls.jpg",
    alt: "A tall seasonal waterfall on a forested Western Ghats escarpment",
    caption: "Illustrative Western Ghats monsoon water — not a feature of the project parcel.",
    photographer: "Amrutha Hebbar",
    sourceUrl: "https://unsplash.com/photos/x3gMNhtwnmA",
    unsplashId: "photo-1609775015123-e7573e73a7a7",
    license: unsplash,
    illustrative: true,
    regionNote: "Regional climate character. Do not read as a site waterfall.",
  },
  forestCanopy: {
    id: "forest-canopy",
    src: "/media/images/forest-canopy.jpg",
    alt: "Mist moving through a still forest interior",
    caption: "Illustrative forest atmosphere — not Maharashtra woodland and not the project site.",
    photographer: "Sebastian Unrau",
    sourceUrl: "https://unsplash.com/photos/photo-1448375240586-882707db888b",
    unsplashId: "photo-1448375240586-882707db888b",
    license: unsplash,
    illustrative: true,
    regionNote: "Preserved from the Private Concierge prototype as atmospheric reference only.",
  },
  interiorCourtyard: {
    id: "interior-courtyard",
    src: "/media/images/interior-courtyard.jpg",
    alt: "Sunlit contemporary living room with timber stair and garden light",
    caption: "Representative architectural photography — not project imagery or an approved villa.",
    photographer: "Unsplash contributor",
    sourceUrl: "https://unsplash.com/photos/photo-1600566753086-00f18fb6b3ea",
    unsplashId: "photo-1600566753086-00f18fb6b3ea",
    license: unsplash,
    illustrative: true,
    regionNote: "Used only to suggest quiet interior light. Not a Masrul residence.",
  },
} as const satisfies Record<string, ImageAsset>;

export const heroPoster = {
  src: "/media/hero-poster.jpg",
  alt: "Stylised layered-hill artwork used as the concept-film poster",
};

export const heroFilm = {
  src: "/media/hero-ambient.mp4",
  label: "Concept film | Illustrative",
  note: "Original 15-second silent atmospheric animation. Not drone footage, not a constructed villa, and not a verified view from Masrul.",
};
