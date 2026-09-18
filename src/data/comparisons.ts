import type { Comparison } from "./types";

export const comparisons: Comparison[] = [
  {
    slug: "tour-or-independent",
    title: "Tour or Independent?",
    seoTitle: "Tallinn Tour or Independent? Honest Cruise Advice",
    metaDescription:
      "Should you book a Tallinn shore excursion or explore the Old Town independently? Honest comparison for cruise passengers.",
    kind: "versus",
    optionA: "Independent",
    optionB: "Guided tour",
    summary:
      "Tallinn is one of Europe’s easiest cruise ports to explore on foot. Independence wins for flexible café days; a guided tour wins for historical narrative, mobility support and days beyond the walls.",
    verdict:
      "Choose independence when the Old Town is your priority and you enjoy self-paced walking. Choose a tour when you want stories, structured pacing, or destinations such as Kadriorg, countryside or Lahemaa.",
    overview: [
      "Many guests walk from the passenger terminals into the UNESCO Old Town without an organised excursion.",
      "Guided highlights tours add centuries of context while still leaving free time afterwards.",
      "Beyond-city days almost always need organised transport to protect return timing.",
    ],
    comparisonTable: [
      { category: "Best for", optionA: "Flexible Old Town wandering", optionB: "History narrative or beyond-city reach" },
      { category: "Cost", optionA: "Lower", optionB: "Higher" },
      { category: "Walking", optionA: "Self-paced cobbles", optionB: "Guided pace on historic surfaces" },
      { category: "Return timing", optionA: "Your responsibility", optionB: "Cruise-aware operator planning" },
      { category: "Beyond the walls", optionA: "Harder without transport", optionB: "Practical with organised routing" },
    ],
    faqs: [
      {
        question: "Can I explore Tallinn without an excursion?",
        answer:
          "Yes. Independent Old Town days are common and often excellent.",
      },
      {
        question: "When is a tour clearly better?",
        answer:
          "When you want historical context, limited-mobility support, or Kadriorg / countryside / Lahemaa within limited hours.",
      },
    ],
    relatedSlugs: ["first-time-tallinn-day", "best-shore-excursions", "city-or-countryside"],
    imageKey: "compare",
  },
  {
    slug: "old-town-or-kadriorg",
    title: "Old Town or Kadriorg?",
    seoTitle: "Tallinn Old Town or Kadriorg Palace?",
    metaDescription:
      "Compare Tallinn Old Town and Kadriorg for a cruise day — walking, atmosphere, timing and which to prioritise. Practical cruise-day timing, walking advice…",
    kind: "versus",
    optionA: "Old Town",
    optionB: "Kadriorg",
    summary:
      "The Old Town is Tallinn’s essential medieval experience. Kadriorg adds baroque gardens and a calmer park rhythm beyond the walls.",
    verdict:
      "First-time visitors should prioritise the Old Town. Add Kadriorg when you have half a day or more remaining, or when gardens matter more than another medieval lane.",
    overview: [
      "Old Town is walkable from many berths; Kadriorg usually needs a short transfer.",
      "Trying both deeply on a short call creates unnecessary stress.",
    ],
    comparisonTable: [
      { category: "Headline", optionA: "Medieval UNESCO core", optionB: "Baroque palace gardens" },
      { category: "From port", optionA: "Often walkable", optionB: "Short urban transfer" },
      { category: "Atmosphere", optionA: "Cobbled, historic, busier", optionB: "Open, elegant, calmer" },
      { category: "Best for", optionA: "First-time Tallinn", optionB: "Gardens and contrast" },
    ],
    faqs: [
      {
        question: "Can I do both?",
        answer:
          "Yes on a longer call with disciplined timing. On shorter calls, choose the Old Town.",
      },
    ],
    relatedSlugs: ["tour-or-independent", "first-time-tallinn-day"],
    imageKey: "private",
  },
  {
    slug: "city-or-countryside",
    title: "City or Countryside?",
    seoTitle: "Tallinn City or Estonian Countryside / Lahemaa?",
    metaDescription:
      "Stay in medieval Tallinn or leave for Estonian countryside and Lahemaa? Honest cruise-day trade-offs. Practical cruise-day timing, walking advice and…",
    kind: "versus",
    optionA: "Tallinn city",
    optionB: "Countryside / Lahemaa",
    summary:
      "The city delivers Europe’s medieval highlight reel beside the ship. Countryside and Lahemaa reward longer calls with forests, manors and coastline — at the cost of road time.",
    verdict:
      "Choose the city unless you deliberately want nature and have a long, unhurried port call. Do not attempt both deeply.",
    overview: [
      "Old Town needs no long transfer.",
      "Lahemaa and countryside days require organised transport and a generous return buffer.",
    ],
    comparisonTable: [
      { category: "Travel time", optionA: "Minimal", optionB: "Significant" },
      { category: "Experience", optionA: "Medieval streets and viewpoints", optionB: "Forests, manors, coastline" },
      { category: "Risk to buffer", optionA: "Lower", optionB: "Higher" },
      { category: "Best call length", optionA: "Short to full day", optionB: "Long full day" },
    ],
    faqs: [
      {
        question: "Is Lahemaa worth missing Old Town time?",
        answer:
          "Only if nature is your priority. Tallinn’s Old Town is exceptional — skipping it entirely is a deliberate choice, not a default.",
      },
    ],
    relatedSlugs: ["best-shore-excursions", "tour-or-independent"],
    imageKey: "nature",
  },
  {
    slug: "best-shore-excursions",
    title: "Best Shore Excursions",
    seoTitle: "Best Tallinn Shore Excursions for Cruise Passengers",
    metaDescription:
      "Best Tallinn shore excursions compared: Historic Old Town highlights, walking tours, Toompea, Kadriorg, panoramic and Lahemaa days.",
    kind: "guide",
    summary:
      "Start with Historic Tallinn & Old Town Highlights for first-timers. Choose walking or Toompea formats for city depth, Kadriorg for gardens, and Lahemaa only on long calls.",
    verdict:
      "Editor’s Choice remains the clearest first-time pick. Match everything else to hours ashore and appetite for walking versus road time.",
    overview: [
      "City experiences stay close to the ship and protect timing.",
      "Beyond-city days need honest clock management.",
    ],
    guideItems: [
      {
        name: "Historic Tallinn & Old Town Highlights",
        slug: "historic-tallinn-old-town-highlights",
        href: "/shore-excursions/historic-tallinn-old-town-highlights",
        reason: "Best introduction — context plus free time afterwards.",
        topExcursion: "Historic Tallinn & Old Town Highlights",
        returnConfidence: "High",
        walkingDifficulty: "Moderate",
      },
      {
        name: "Tallinn Walking Tour",
        slug: "tallinn-walking-tour",
        href: "/shore-excursions/tallinn-walking-tour",
        reason: "Shorter guided circuit with independent time left.",
        topExcursion: "Tallinn Walking Tour",
        returnConfidence: "Very high",
        walkingDifficulty: "Relaxed–moderate",
      },
      {
        name: "Lahemaa National Park",
        slug: "lahemaa-national-park",
        href: "/shore-excursions/lahemaa-national-park",
        reason: "Nature day when your call is long enough.",
        topExcursion: "Lahemaa National Park",
        returnConfidence: "Good with generous buffer",
        walkingDifficulty: "Moderate",
      },
    ],
    faqs: [
      {
        question: "What is Editor's Choice?",
        answer:
          "Historic Tallinn & Old Town Highlights — selected for first-time cruise visitors who want history and free time afterwards.",
      },
    ],
    relatedSlugs: ["first-time-tallinn-day", "tour-or-independent"],
    imageKey: "historic",
  },
  {
    slug: "first-time-tallinn-day",
    title: "First-Time Tallinn Day",
    seoTitle: "First Time in Tallinn on a Cruise — How to Spend the Day",
    metaDescription:
      "First-time Tallinn cruise day plan: Old Town priorities, Toompea viewpoints, independent vs tour, and what to skip. Practical cruise-day timing, walking…",
    kind: "guide",
    summary:
      "First-timers should anchor the day in the medieval Old Town and Toompea viewpoints. Add Kadriorg or countryside only when hours remain.",
    verdict:
      "Do not try to see all of Estonia. See Tallinn well — then decide if a future call deserves Lahemaa.",
    overview: [
      "Walk or take a short taxi from the terminals toward the Old Town.",
      "Use Market Square for orientation, then climb Toompea for the classic view.",
      "Consider Editor’s Choice if you want guided context with free time after.",
    ],
    guideItems: [
      {
        name: "Old Town",
        slug: "tallinn-old-town",
        href: "/guides/old-town-guide",
        reason: "The essential first Tallinn experience.",
        topExcursion: "Historic Tallinn & Old Town Highlights",
        returnConfidence: "Very high on foot with buffer",
        walkingDifficulty: "Moderate",
      },
      {
        name: "Toompea",
        slug: "toompea-hill",
        href: "/guides/toompea-hill",
        reason: "Viewpoints and Upper Town elegance.",
        topExcursion: "Toompea & Cathedral Tour",
        returnConfidence: "High",
        walkingDifficulty: "Moderate slopes",
      },
      {
        name: "Independent plan",
        slug: "explore-independently",
        href: "/guides/explore-independently",
        reason: "DIY routes when you prefer flexibility.",
        topExcursion: "Tallinn Walking Tour",
        returnConfidence: "Your discipline",
        walkingDifficulty: "Self-paced",
      },
    ],
    faqs: [
      {
        question: "Should first-timers book a tour?",
        answer:
          "Optional. Book for narrative and orientation; explore independently if you prefer cafés and flexible photography time.",
      },
    ],
    relatedSlugs: ["best-shore-excursions", "tour-or-independent", "old-town-or-kadriorg"],
    imageKey: "historic",
  },
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export function getComparisonDisplayTitle(c: Comparison): string {
  if (c.kind === "versus" && c.optionA && c.optionB) {
    return `${c.optionA} or ${c.optionB}?`;
  }
  return c.title;
}

export function getAllComparisonSlugs(): string[] {
  return comparisons.map((c) => c.slug);
}
