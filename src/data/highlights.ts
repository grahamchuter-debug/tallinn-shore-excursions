import type { AttractionPage } from "./types";

export const highlights: AttractionPage[] = [
  {
    slug: "tallinn-old-town",
    title: "Tallinn Old Town",
    seoTitle: "Tallinn Old Town from the Cruise Port",
    metaDescription:
      "Visit Tallinn’s UNESCO Old Town from the cruise port — Market Square, cobbled lanes, towers and how long you need ashore.",
    attractionName: "Tallinn Old Town",
    tagline: "One of Europe’s best-preserved medieval centres — walkable from the ship.",
    overview:
      "Tallinn’s Old Town is the heart of a Baltic cruise call: red rooftops, church spires, Market Square and intact walls still framing everyday life.",
    body: [
      "The Lower Town centres on Market Square; Toompea rises above with viewpoints and cathedral façades.",
      "Many cruise guests reach the walls on foot from the passenger terminals.",
      "A guided highlights tour adds historical context; independent wandering is equally valid.",
    ],
    distanceFromPort: "Walkable from most passenger berths",
    travelTime: "Often 15–25 minutes on foot",
    timeNeeded: "2–4 hours for highlights; a full day for a slower pace",
    gettingThere: [
      {
        method: "Walk",
        detail: "Follow terminal signage toward the Old Town / Viru Gate area.",
        time: "15–25 min typical",
        cost: "Free",
      },
      {
        method: "Taxi",
        detail: "Short hop if mobility, weather or time pressure matter.",
        time: "5–10 min",
        cost: "Low–moderate",
      },
    ],
    highlights: [
      "UNESCO medieval core",
      "Market Square atmosphere",
      "City walls and towers",
      "Café culture in historic lanes",
    ],
    tips: [
      "Wear cobble-ready shoes",
      "Protect a return buffer before all-aboard",
    ],
    faqs: [
      {
        question: "Can I see the Old Town without a tour?",
        answer:
          "Yes. Many passengers explore independently. Book a tour when you want historical narrative or structured pacing.",
      },
    ],
    relatedAttractionSlugs: ["market-square", "toompea-hill", "city-walls"],
    relatedExcursionSlug: "historic-tallinn-old-town-highlights",
  },
  {
    slug: "market-square",
    title: "Market Square",
    seoTitle: "Tallinn Market Square (Raekoja plats) Cruise Guide",
    metaDescription:
      "Tallinn Market Square for cruise visitors — Town Hall, café terraces and the natural heart of the Lower Town. Practical cruise-day timing, walking advice…",
    attractionName: "Market Square / Raekoja plats",
    tagline: "The social heart of the Lower Town.",
    overview:
      "Market Square is where most visitors orient themselves: Town Hall façades, seasonal terraces and lanes radiating into the medieval grid.",
    body: [
      "Use the square as a meeting point and navigation anchor.",
      "It can be busy in peak season — early morning is calmer.",
    ],
    distanceFromPort: "Inside the Old Town walk from the port",
    travelTime: "Included in Old Town walk",
    timeNeeded: "30–60 minutes, or longer with a café stop",
    gettingThere: [
      {
        method: "Walk via Old Town",
        detail: "Enter through Viru Gate approaches and follow signs to Raekoja plats.",
        time: "Part of Old Town stroll",
        cost: "Free",
      },
    ],
    highlights: [
      "Town Hall setting",
      "Café terraces",
      "Lane connections",
      "Easy meeting point",
    ],
    tips: ["Keep valuables secure in crowded moments"],
    faqs: [
      {
        question: "Is Market Square worth lingering?",
        answer:
          "Yes as an orientation point and café stop — then explore quieter lanes and Toompea for depth.",
      },
    ],
    relatedAttractionSlugs: ["tallinn-old-town", "city-walls"],
    relatedExcursionSlug: "tallinn-walking-tour",
  },
  {
    slug: "toompea-hill",
    title: "Toompea Hill",
    seoTitle: "Toompea Hill Tallinn — Viewpoints for Cruise Guests",
    metaDescription:
      "Toompea Hill viewpoints and Upper Town atmosphere for Tallinn cruise passengers. Practical cruise-day timing, walking advice and return-to-ship guidance for…",
    attractionName: "Toompea Hill",
    tagline: "Rooftop panoramas above the Lower Town.",
    overview:
      "Toompea is Tallinn’s classic viewpoint ridge — church spires, red roofs and Upper Town elegance.",
    body: [
      "Expect slopes and cobbles on the ascent.",
      "Pair with Alexander Nevsky Cathedral façades and terrace viewpoints.",
    ],
    distanceFromPort: "Upper Town beyond Lower Town walk",
    travelTime: "Additional 15–30 minutes from Market Square",
    timeNeeded: "1–2 hours including viewpoints",
    gettingThere: [
      {
        method: "Walk from Lower Town",
        detail: "Climb via Pikk Jalg / Lühike Jalg or neighbouring routes.",
        time: "15–30 min",
        cost: "Free",
      },
    ],
    highlights: [
      "Classic panoramas",
      "Upper Town lanes",
      "Cathedral façades",
      "Photography stops",
    ],
    tips: ["Breezy terraces — secure phones and hats"],
    faqs: [
      {
        question: "Is Toompea difficult?",
        answer:
          "Moderate for most walkers. Limited-mobility guests may prefer a panoramic format with fewer continuous slopes.",
      },
    ],
    relatedAttractionSlugs: ["alexander-nevsky-cathedral", "best-viewpoints"],
    relatedExcursionSlug: "toompea-cathedral-tour",
  },
  {
    slug: "alexander-nevsky-cathedral",
    title: "Alexander Nevsky Cathedral",
    seoTitle: "Alexander Nevsky Cathedral Tallinn Cruise Visit",
    metaDescription:
      "Alexander Nevsky Cathedral on Toompea — onion domes, viewing tips and cruise-day timing. Practical cruise-day timing, walking advice and return-to-ship…",
    attractionName: "Alexander Nevsky Cathedral",
    tagline: "Onion domes on the Toompea skyline.",
    overview:
      "One of Tallinn’s most recognisable silhouettes — memorable from the exterior even when interiors are limited by services.",
    body: [
      "Combine with Toompea viewpoints.",
      "Respect worship if entering.",
    ],
    distanceFromPort: "On Toompea Hill",
    travelTime: "With Toompea visit",
    timeNeeded: "20–40 minutes exterior; longer if entering",
    gettingThere: [
      {
        method: "Walk via Toompea",
        detail: "Reach Upper Town then follow cathedral façades.",
        time: "Included in Toompea walk",
        cost: "Free exterior",
      },
    ],
    highlights: ["Iconic domes", "Hilltop setting", "Strong photographs"],
    tips: ["Check opening expectations before counting on an interior visit"],
    faqs: [
      {
        question: "Do I need tickets?",
        answer:
          "Exterior viewing is free. Interior access and any fees depend on opening times and services.",
      },
    ],
    relatedAttractionSlugs: ["toompea-hill", "tallinn-old-town"],
    relatedExcursionSlug: "toompea-cathedral-tour",
  },
  {
    slug: "city-walls",
    title: "City Walls",
    seoTitle: "Tallinn City Walls — Towers and Walks",
    metaDescription:
      "Tallinn medieval city walls and towers for cruise visitors — viewpoints, stairs and timing tips. Practical cruise-day timing, walking advice and…",
    attractionName: "Tallinn City Walls",
    tagline: "Towers and curtain walls that still define the medieval skyline.",
    overview:
      "Tallinn’s walls are not a museum fence — they are part of the living Old Town silhouette and offer elevated outlooks.",
    body: [
      "Tower climbs involve stairs and sometimes queues.",
      "Even without climbing, wall stretches frame excellent street photographs.",
    ],
    distanceFromPort: "Within Old Town",
    travelTime: "Part of Old Town walk",
    timeNeeded: "30–90 minutes depending on tower climbs",
    gettingThere: [
      {
        method: "Walk",
        detail: "Approach wall sections from Lower Town lanes.",
        time: "Variable",
        cost: "Exterior free; towers may charge",
      },
    ],
    highlights: ["Tower outlooks", "Medieval silhouette", "Photogenic stretches"],
    tips: ["Budget time for stairs and queues in peak season"],
    faqs: [
      {
        question: "Which tower is best?",
        answer:
          "Popular towers vary by season and queue. Ask locally on the day, or enjoy Toompea terraces for classic panoramas without a tower ticket.",
      },
    ],
    relatedAttractionSlugs: ["tallinn-old-town", "best-viewpoints"],
    relatedExcursionSlug: "tallinn-walking-tour",
  },
  {
    slug: "best-viewpoints",
    title: "Best Viewpoints",
    seoTitle: "Best Viewpoints in Tallinn Old Town",
    metaDescription:
      "Best Tallinn viewpoints for cruise passengers — Toompea terraces and rooftop angles over red roofs and spires. Practical cruise-day timing, walking advice…",
    attractionName: "Tallinn Viewpoints",
    tagline: "Red rooftops and church spires — Tallinn’s signature view.",
    overview:
      "The finest Tallinn photographs usually come from Toompea terraces and selected towers rather than street level alone.",
    body: [
      "Arrive early for clearer light.",
      "Do not sacrifice your ship buffer for one more panorama.",
    ],
    distanceFromPort: "Toompea / Old Town",
    travelTime: "With Toompea visit",
    timeNeeded: "45–90 minutes",
    gettingThere: [
      {
        method: "Walk to Toompea",
        detail: "Climb from Lower Town to Upper Town terraces.",
        time: "15–30 min ascent",
        cost: "Free terraces",
      },
    ],
    highlights: ["Toompea terraces", "Rooftop skyline", "Morning light"],
    tips: ["Secure cameras on windy terraces"],
    faqs: [
      {
        question: "What is the classic viewpoint?",
        answer:
          "Toompea terraces overlooking the Lower Town are the standard cruise-day choice.",
      },
    ],
    relatedAttractionSlugs: ["toompea-hill", "tallinn-old-town"],
    relatedExcursionSlug: "tallinn-panoramic-tour",
  },
  {
    slug: "kadriorg-palace",
    title: "Kadriorg Palace",
    seoTitle: "Kadriorg Palace from Tallinn Cruise Port",
    metaDescription:
      "Kadriorg Palace and gardens beyond Tallinn Old Town — timing, transport and when to visit on a cruise day. Practical cruise-day timing, walking advice and…",
    attractionName: "Kadriorg Palace",
    tagline: "Baroque gardens beyond the medieval walls.",
    overview:
      "Kadriorg offers palace elegance and open parkland — a different Tallinn rhythm from Market Square.",
    body: [
      "Best when you have time beyond Old Town priorities.",
      "Tram, taxi or organised transport keeps cruise timing simpler than a long urban walk.",
    ],
    distanceFromPort: "Beyond Old Town — short urban transfer",
    travelTime: "Typically 15–25 minutes by vehicle/tram depending on traffic",
    timeNeeded: "1.5–3 hours",
    gettingThere: [
      {
        method: "Tram / taxi / tour",
        detail: "Transfer from centre or port area; organised tours simplify return timing.",
        time: "15–25 min each way typical",
        cost: "Low–moderate",
      },
    ],
    highlights: ["Palace exterior", "Formal gardens", "Family-friendly space"],
    tips: ["Do not force Kadriorg onto a short call"],
    faqs: [
      {
        question: "Old Town or Kadriorg first?",
        answer:
          "Old Town first for most first-time cruise visitors. Add Kadriorg when hours remain.",
      },
    ],
    relatedAttractionSlugs: ["tallinn-old-town"],
    relatedExcursionSlug: "kadriorg-palace-experience",
  },
];

export function getHighlightBySlug(slug: string): AttractionPage | undefined {
  return highlights.find((h) => h.slug === slug);
}

export function getAllHighlightSlugs(): string[] {
  return highlights.map((h) => h.slug);
}
