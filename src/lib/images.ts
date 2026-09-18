export interface SiteImage {
  src: string;
  alt: string;
  base: string;
}

const B = "/images";

function img(base: string, alt: string): SiteImage {
  return { base, src: `${B}/${base}.jpg`, alt };
}

export const siteImages = {
  hero: img(
    "hero",
    "Medieval Tallinn Old Town rooftops and church spires from Toompea",
  ),
  ogDefault: img(
    "og-default",
    "Tallinn Market Square and medieval Old Town — Tallinn Shore Excursions",
  ),
  logo: {
    base: "logo-mark",
    src: `${B}/logo-mark.svg`,
    alt: "Tallinn Shore Excursions",
  },
  port: img("cruise-port", "Tallinn cruise port area — gateway to the medieval Old Town"),
} as const;

export const subjectImages: Record<string, SiteImage> = {
  historic: img("historic", "Tallinn Old Town historic streets and towers"),
  coast: img("coastal", "Tallinn skyline and Baltic setting from upper viewpoints"),
  coastal: img("coastal", "Tallinn skyline and Baltic setting from upper viewpoints"),
  walking: img("walking", "Walking Tallinn Old Town cobblestone streets from the cruise port"),
  food: img("food-and-wine", "Tallinn Old Town cafés and food culture"),
  "food-and-wine": img("food-and-wine", "Tallinn Old Town cafés and food culture"),
  private: img("private", "Kadriorg Palace and gardens near Tallinn"),
  photography: img("photography", "Tallinn rooftop viewpoints and church spires"),
  wine: img("food-and-wine", "Tallinn dining and Baltic flavours"),
  compare: img("compare", "Comparing Tallinn shore excursion options"),
  port: img("cruise-port", "Tallinn cruise passenger terminal area"),
  highlights: img("historic", "Tallinn Old Town highlights for cruise visitors"),
  city: img("historic", "Medieval Tallinn city centre from the cruise port"),
  nature: img("nature", "Lahemaa National Park forests and Estonian nature"),
  family: img("family", "Kadriorg gardens — family-friendly Tallinn day ashore"),
  "hero-home": img("hero", "Medieval Tallinn rooftops — Europe's best-preserved medieval city"),
  "tallinn-old-town": img("tallinn-old-town", "Tallinn UNESCO Old Town Market Square"),
  toompea: img("toompea", "View over Tallinn from Toompea Hill"),
  "alexander-nevsky": img("alexander-nevsky", "Alexander Nevsky Cathedral on Toompea Hill"),
  kadriorg: img("kadriorg", "Kadriorg Palace in Tallinn"),
  lahemaa: img("lahemaa", "Lahemaa National Park in Estonia"),
  "market-square": img("market-square", "Tallinn Town Hall Square — Raekoja plats"),
  "city-walls": img("city-walls", "Tallinn medieval city walls and towers"),
  viewpoints: img("viewpoints", "Classic Tallinn Old Town viewpoint over red rooftops"),
};

function pick(key: string): SiteImage {
  return subjectImages[key] ?? siteImages.ogDefault;
}

const excursionImageKeys: Record<string, string> = {
  "historic-tallinn-old-town-highlights": "tallinn-old-town",
  "tallinn-walking-tour": "walking",
  "toompea-cathedral-tour": "toompea",
  "kadriorg-palace-experience": "kadriorg",
  "tallinn-panoramic-tour": "viewpoints",
  "tallinn-food-experience": "food",
  "estonian-countryside": "nature",
  "lahemaa-national-park": "lahemaa",
};

export function getExcursionImage(slug: string): SiteImage {
  return pick(excursionImageKeys[slug] ?? "highlights");
}

export const excursionsHubImage = pick("tallinn-old-town");

const highlightImageKeys: Record<string, string> = {
  "tallinn-old-town": "tallinn-old-town",
  "toompea-hill": "toompea",
  "alexander-nevsky-cathedral": "alexander-nevsky",
  "kadriorg-palace": "kadriorg",
  "market-square": "market-square",
  "city-walls": "city-walls",
  "best-viewpoints": "viewpoints",
  lahemaa: "lahemaa",
};

const comparisonImageKeys: Record<string, string> = {
  "tour-or-independent": "compare",
  "old-town-or-kadriorg": "kadriorg",
  "city-or-countryside": "nature",
  "best-shore-excursions": "historic",
  "first-time-tallinn-day": "tallinn-old-town",
};

export function getComparisonImage(slug: string): SiteImage {
  return pick(comparisonImageKeys[slug] ?? "compare");
}

export function getHighlightImage(slug: string): SiteImage {
  return pick(highlightImageKeys[slug] ?? "highlights");
}

export function getExperienceImage(slug: string): SiteImage {
  return pick(slug);
}

export const guidesHubImage = pick("highlights");

const guideImageKeys: Record<string, string> = {
  historic: "historic",
  walking: "walking",
  compare: "compare",
  port: "port",
  food: "food",
  private: "private",
  coast: "coast",
  coastal: "coastal",
  nature: "nature",
  photography: "photography",
};

export function getGuideImage(imageKey: string): SiteImage {
  return pick(guideImageKeys[imageKey] ?? imageKey);
}

export function getHotelImage(_slug?: string): SiteImage {
  return pick("city");
}

export function getTransferImage(_slug?: string): SiteImage {
  return pick("private");
}
