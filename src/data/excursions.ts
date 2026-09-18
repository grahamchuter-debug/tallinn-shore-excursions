import type { ExcursionPage } from "./types";

const PORT_LOGISTICS =
  "Cruise ships berth at Tallinn’s passenger terminals on the edge of the city centre. The UNESCO Old Town is typically a walkable distance from the exit — often around 15–25 minutes depending on berth, pace and route. Follow terminal signage toward the Old Town rather than wandering the working port. For Kadriorg, countryside or Lahemaa days, confirm meeting instructions and plan from your ship’s all-aboard time, not merely the published departure. Aim to be back at the terminal 60–90 minutes early; longer countryside days need the larger end of that buffer.";

const SEG_SUPPLIER = {
  kind: "shore-excursions-group" as const,
  name: "Shore Excursions Group",
  notes: "Partner network — confirm availability for your sailing",
};

const RETURN_GUARANTEE =
  "Return to ship guarantee: itineraries are planned around your Tallinn cruise call so you are back at the terminal with time before all-aboard. If an operational delay on our side causes you to miss the ship, we work with the local provider under the published return-to-ship assurance for that booking.";

export const excursions: ExcursionPage[] = [
  {
    slug: "historic-tallinn-old-town-highlights",
    title: "Historic Tallinn & Old Town Highlights",
    seoTitle: "Historic Tallinn & Old Town Highlights | Editor's Choice",
    metaDescription:
      "Editor's Choice Tallinn shore excursion through the medieval Old Town — historical context, key landmarks and free time afterwards for cruise passengers.",
    category: "Editor's Choice",
    tagline: "The best introduction for first-time visitors to medieval Tallinn.",
    duration: "Approximately 3–4 hours",
    pace: "Moderate",
    bestFor:
      "First-time cruise visitors who want historical context in the Old Town while still keeping free time afterwards",
    overview:
      "Tallinn’s greatest attraction is its wonderfully preserved medieval Old Town. This Editor’s Choice introduction brings centuries of history to life with a knowledgeable guide, then leaves space to explore independently before you return to the ship.",
    body: [
      "We chose this tour because Tallinn’s greatest attraction is its wonderfully preserved medieval Old Town. A knowledgeable guide helps bring centuries of history to life while still leaving time to explore independently afterwards.",
      "It particularly suits first-time visitors who want orientation, stories and key landmarks without spending the entire day on a coach.",
      "Guests who prefer a slower café-led wander, or who already know the Old Town well, may be happier walking independently — and that is a perfectly good choice from this port.",
      "Expect cobblestones, gentle slopes toward Toompea and seasonal crowds around Market Square. Exact sequencing flexes with group pace and ship timing.",
    ],
    highlights: [
      "Guided introduction to the UNESCO Old Town",
      "Historical context for towers, squares and lanes",
      "Free time afterwards for cafés or viewpoints",
      "Cruise-timed meeting near the passenger terminals",
      "Ideal first Tallinn day without a long transfer",
    ],
    itinerary: [
      {
        title: "Meet near the cruise port",
        detail:
          "Join your guide close to the passenger terminal area and confirm timing against your all-aboard.",
      },
      {
        title: "Lower Town highlights",
        detail:
          "Walk through medieval lanes toward Market Square with commentary on Tallinn’s Hanseatic and Estonian layers.",
      },
      {
        title: "Upper Town context",
        detail:
          "Continue toward Toompea viewpoints and cathedral façades as timing and pace allow.",
      },
      {
        title: "Free time",
        detail:
          "Enjoy independent time for photographs, coffee or shopping before returning toward the ship with a buffer.",
      },
    ],
    included: [
      "Port meeting and return planning in Tallinn",
      "English-speaking guide commentary",
      "Old Town and Toompea orientation",
      "Return planned around the ship’s all-aboard",
    ],
    notIncluded: [
      "Entrance fees for towers, churches or museums unless stated on your voucher",
      "Lunch and personal purchases",
      "Gratuities",
      "Hotel or airport transfers",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Wear comfortable shoes — cobbles and gentle slopes",
      "Bring a light layer; viewpoints can be breezy",
      "If you want maximum unstructured wandering, consider exploring independently instead",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Why is this Editor's Choice?",
        answer:
          "It is the best introduction for first-time visitors: historical context, the essential Old Town highlights, and free time afterwards — perfectly suited to cruise passengers.",
      },
      {
        question: "Do I need this tour, or can I walk alone?",
        answer:
          "You can walk alone. Choose the tour when you want narrative and orientation; choose independence when you prefer flexible pacing and café stops.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "Moderate walking on historic surfaces. Guests with limited mobility should ask about step-heavy sections and alternative pacing in advance.",
      },
    ],
    relatedExcursionSlugs: [
      "tallinn-walking-tour",
      "toompea-cathedral-tour",
      "tallinn-panoramic-tour",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — cobblestones and gentle Toompea slopes",
    cruiseSuitability: "Best with a solid half day or more usable time ashore",
    editorChoice: true,
    whyWeChose: {
      lead: "Tallinn’s greatest attraction is its wonderfully preserved medieval Old Town — best understood with a guide, then enjoyed at your own pace.",
      whyRecommended:
        "First-time visitors often want more than photographs. This experience delivers historical context while still protecting free time afterwards — the cruise-day balance we look for.",
      whoItSuits:
        "Curious first-timers, history lovers and guests who want orientation without a long countryside transfer.",
      whatMakesItSpecial:
        "You leave with stories behind the towers and squares — not only a checklist of façades — and still have room for an independent café or viewpoint.",
      cruiseFit:
        "Stays close to the ship’s hinterland, which makes protecting a return buffer more realistic than distant Estonia days.",
      theExperience:
        "You understand why Tallinn is one of Europe’s most rewarding medieval cruise ports — and you still walk back with composure.",
    },
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "tallinn-walking-tour",
    title: "Tallinn Walking Tour",
    seoTitle: "Tallinn Walking Tour — Old Town Shore Excursion",
    metaDescription:
      "Cruise-friendly Tallinn walking tour through the medieval Old Town — cobbled streets, Market Square and city-wall atmosphere near the port.",
    category: "Walking",
    tagline: "A focused walking introduction to Tallinn’s medieval streets.",
    duration: "Approximately 2–3 hours",
    pace: "Relaxed",
    bestFor: "Guests who want a shorter guided walk with time left for independent exploring",
    overview:
      "This walking tour concentrates on Tallinn’s Lower Town atmosphere — Market Square, lanes and wall views — without turning the whole port call into a coach day.",
    body: [
      "Tallinn rewards walking. A shorter guided circuit helps you find your bearings, then frees the rest of your day for cafés, towers or Toompea at your own pace.",
      "It suits guests who want some narrative without the fuller Historic Tallinn highlights format.",
      "If you prefer complete independence, our walking-from-port and explore-independently guides cover DIY routes honestly.",
    ],
    highlights: [
      "Guided Lower Town walking circuit",
      "Market Square orientation",
      "City-wall and lane atmosphere",
      "Short format near the cruise port",
      "Time left for independent exploration",
    ],
    itinerary: [
      {
        title: "Meet near the Old Town approach",
        detail: "Join your guide and set a comfortable walking pace from the port side of the centre.",
      },
      {
        title: "Medieval lanes and square",
        detail: "Explore key Lower Town streets and Market Square with local context.",
      },
      {
        title: "Walls and free time",
        detail: "Finish near a practical return point so you can continue independently or head back.",
      },
    ],
    included: [
      "English-speaking walking guide",
      "Old Town orientation",
      "Cruise-aware pacing",
    ],
    notIncluded: [
      "Tower or museum entrance fees unless stated on your voucher",
      "Food and drinks",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Comfortable shoes for cobbles",
      "Excellent choice when you also want unstructured café time",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Is this different from the Editor's Choice tour?",
        answer:
          "Yes. This is a shorter walking focus. Historic Tallinn & Old Town Highlights is our fuller first-time introduction with more structured free time afterwards.",
      },
    ],
    relatedExcursionSlugs: [
      "historic-tallinn-old-town-highlights",
      "toompea-cathedral-tour",
      "tallinn-food-experience",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Relaxed to moderate — historic streets",
    cruiseSuitability: "Works well on shorter or flexible port calls",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "toompea-cathedral-tour",
    title: "Toompea & Cathedral Tour",
    seoTitle: "Toompea & Cathedral Tour — Tallinn Shore Excursion",
    metaDescription:
      "Toompea Hill and cathedral façades on a Tallinn cruise day — Upper Town viewpoints, Alexander Nevsky Cathedral and Baltic architecture.",
    category: "Architecture",
    tagline: "Upper Town viewpoints, cathedral façades and Toompea’s quieter elegance.",
    duration: "Approximately 2–3 hours",
    pace: "Moderate",
    bestFor: "Architecture lovers and guests who want Toompea context without a full city circuit",
    overview:
      "Toompea Hill crowns Tallinn’s skyline. This tour focuses on Upper Town atmosphere, cathedral façades — including Alexander Nevsky Cathedral — and the viewpoints that make Tallinn unforgettable.",
    body: [
      "The climb to Toompea is part of the experience: red rooftops open below, and the Upper Town feels calmer than Market Square at peak hours.",
      "A guide helps decode the political and religious layers written into the hilltop — Estonian, Russian Orthodox and Baltic German histories sharing the same ridge.",
      "Guests seeking maximum Lower Town café time may prefer a shorter walking tour or independent exploration instead.",
    ],
    highlights: [
      "Toompea Hill orientation",
      "Alexander Nevsky Cathedral façades",
      "Classic Old Town viewpoints",
      "Upper Town lanes and architecture",
      "Cruise-aware timing from the port",
    ],
    itinerary: [
      {
        title: "Ascent to Toompea",
        detail: "Make your way to the Upper Town with commentary on Tallinn’s layered history.",
      },
      {
        title: "Cathedral façades",
        detail: "View Alexander Nevsky Cathedral and neighbouring landmarks from the exterior.",
      },
      {
        title: "Viewpoints",
        detail: "Stop for rooftop panoramas before descending toward a practical return route.",
      },
    ],
    included: [
      "English-speaking guide",
      "Toompea and cathedral orientation",
      "Viewpoint stops as timing allows",
    ],
    notIncluded: [
      "Interior entrance fees unless stated on your voucher",
      "Food and drinks",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Expect slopes and cobbles — not a flat promenade",
      "Photography is often best in clear morning light",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Will we go inside the cathedral?",
        answer:
          "Interior access depends on opening times, services and your voucher. Façade and viewpoint time is the reliable core of the experience.",
      },
    ],
    relatedExcursionSlugs: [
      "historic-tallinn-old-town-highlights",
      "tallinn-panoramic-tour",
      "tallinn-walking-tour",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — slopes to the Upper Town",
    cruiseSuitability: "Best with at least a half day ashore",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "kadriorg-palace-experience",
    title: "Kadriorg Palace Experience",
    seoTitle: "Kadriorg Palace Experience — Tallinn Shore Excursion",
    metaDescription:
      "Kadriorg Palace and gardens from Tallinn cruise port — baroque elegance beyond the medieval Old Town for a balanced shore day.",
    category: "Families",
    tagline: "Baroque palace gardens a short ride from the medieval centre.",
    duration: "Approximately 3–4 hours",
    pace: "Relaxed",
    bestFor: "Guests who want palace gardens and a change of pace beyond the Old Town walls",
    overview:
      "Kadriorg offers a different Tallinn: formal gardens, a baroque palace and a calmer rhythm than Market Square. It pairs well with a morning in the Old Town when your hours ashore allow.",
    body: [
      "Many first-time visitors never leave the walls — and that can be enough. Kadriorg is for guests who want Estonian elegance beyond the medieval core.",
      "Gardens are often as memorable as the palace exterior. Families and photography-minded guests usually enjoy the open space.",
      "If your call is short, prioritise the Old Town independently or on a city walking tour instead.",
    ],
    highlights: [
      "Kadriorg Palace and park setting",
      "Baroque garden atmosphere",
      "Contrast with the medieval Old Town",
      "Manageable walking for many families",
      "Transport planned around cruise timing",
    ],
    itinerary: [
      {
        title: "Meet and transfer",
        detail: "Meet near the cruise port and transfer to the Kadriorg district.",
      },
      {
        title: "Palace and gardens",
        detail: "Explore the palace exterior and gardens with guided context.",
      },
      {
        title: "Return buffer",
        detail: "Return toward the terminal with time before all-aboard.",
      },
    ],
    included: [
      "Round-trip transport from the cruise port area",
      "English-speaking guide commentary",
      "Garden and palace orientation",
    ],
    notIncluded: [
      "Museum entrance fees unless stated on your voucher",
      "Lunch and personal purchases",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Combine with an independent Old Town morning only if your call is long enough",
      "Wear comfortable shoes for park paths",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Is Kadriorg walkable from the Old Town?",
        answer:
          "It is a longer urban walk or a short tram/taxi ride for most guests. Organised transport keeps cruise timing simpler.",
      },
    ],
    relatedExcursionSlugs: [
      "estonian-countryside",
      "historic-tallinn-old-town-highlights",
      "tallinn-panoramic-tour",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Relaxed — park paths and palace approaches",
    cruiseSuitability: "Best with half a day or more after Old Town time",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "tallinn-panoramic-tour",
    title: "Tallinn Panoramic Tour",
    seoTitle: "Tallinn Panoramic Tour — Cruise Shore Excursion",
    metaDescription:
      "Panoramic Tallinn shore excursion with city viewpoints, Old Town context and cruise-timed routing from the passenger terminals.",
    category: "Photography",
    tagline: "Viewpoints and city orientation without walking every cobble.",
    duration: "Approximately 3 hours",
    pace: "Relaxed",
    bestFor: "Guests who want Tallinn’s skyline and highlights with less continuous walking",
    overview:
      "A panoramic format suits passengers who want viewpoints, exterior landmarks and a clear sense of Tallinn’s layout — especially helpful when mobility or energy is limited.",
    body: [
      "You will still encounter cobbles at key stops, but the day leans on vehicle orientation between viewpoints rather than a long continuous walk.",
      "Photographers often prefer this for classic rooftop angles; history enthusiasts may prefer the Editor’s Choice walking emphasis.",
      "Independent walkers who love long strolls may not need this format.",
    ],
    highlights: [
      "Classic Tallinn viewpoints",
      "Old Town exterior orientation",
      "Less continuous walking than a full walking tour",
      "Useful for limited energy or mixed-mobility groups",
      "Cruise-timed return planning",
    ],
    itinerary: [
      {
        title: "Port meet",
        detail: "Meet near the terminals and confirm the panoramic route against your all-aboard.",
      },
      {
        title: "Viewpoints and façades",
        detail: "Stop for skyline photographs and exterior landmark context.",
      },
      {
        title: "Return",
        detail: "Return toward the ship with a deliberate buffer.",
      },
    ],
    included: [
      "Transport and guide commentary",
      "Viewpoint stops as traffic and timing allow",
      "Cruise-aware routing",
    ],
    notIncluded: [
      "Entrance fees unless stated on your voucher",
      "Food and drinks",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Bring a camera or phone with storage — viewpoints are the point",
      "Still expect some short walks at stops",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Is this suitable for limited mobility?",
        answer:
          "Often more suitable than a long walking tour, but stops can still include cobbles and kerbs. Ask about accessibility for your sailing before booking.",
      },
    ],
    relatedExcursionSlugs: [
      "toompea-cathedral-tour",
      "historic-tallinn-old-town-highlights",
      "kadriorg-palace-experience",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Light to moderate at viewpoint stops",
    cruiseSuitability: "Flexible half-day option for many calls",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "tallinn-food-experience",
    title: "Tallinn Food Experience",
    seoTitle: "Tallinn Food Experience — Culinary Shore Excursion",
    metaDescription:
      "Tallinn food experience for cruise passengers — market flavours and local tastes woven through the historic centre. Practical cruise-day timing, walking…",
    category: "Food",
    tagline: "Local flavours in the medieval centre — culture you can taste.",
    duration: "Approximately 2–3 hours",
    pace: "Relaxed",
    bestFor: "Food-curious guests who want Tallinn’s flavours without leaving the walkable core",
    overview:
      "Tallinn’s food scene rewards curiosity: market halls, café culture and Baltic-Nordic plates sit inside a walkable historic centre. This experience keeps you close to the ship while tasting the city.",
    body: [
      "You do not need a long transfer to eat well in Tallinn. Staying central protects your return buffer and leaves room for Old Town wandering afterwards.",
      "Dietary requirements should be raised at booking. Exact venues flex with season and group size.",
      "Guests who prefer a pure history walk should choose Historic Tallinn or the walking tour instead.",
    ],
    highlights: [
      "Guided tasting stops in or near the centre",
      "Market and café culture context",
      "Walkable format close to the cruise port",
      "Time left for independent exploration",
      "Cruise-aware pacing",
    ],
    itinerary: [
      {
        title: "Meet in the centre",
        detail: "Join near the Old Town approach and outline the tasting route.",
      },
      {
        title: "Tasting stops",
        detail: "Sample local flavours with commentary on Estonian and Baltic food culture.",
      },
      {
        title: "Finish near the walls",
        detail: "End within easy reach of independent time or a return walk to the terminal.",
      },
    ],
    included: [
      "English-speaking food guide",
      "Included tastings as stated on your voucher",
      "Central Tallinn routing",
    ],
    notIncluded: [
      "Additional food and drinks beyond included tastings",
      "Gratuities",
      "Alcohol for guests under local legal age",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Mention allergies when you enquire or book",
      "Wear comfortable shoes — tasting walks still use cobbles",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Is this a full meal?",
        answer:
          "It is a tasting experience rather than a formal restaurant lunch. Expect several samples; hungry guests may still want a later café stop.",
      },
    ],
    relatedExcursionSlugs: [
      "tallinn-walking-tour",
      "historic-tallinn-old-town-highlights",
      "kadriorg-palace-experience",
    ],
    featured: false,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Relaxed — short distances between stops",
    cruiseSuitability: "Strong option for shorter or flexible calls",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "estonian-countryside",
    title: "Estonian Countryside",
    seoTitle: "Estonian Countryside Shore Excursion from Tallinn",
    metaDescription:
      "Estonian countryside day from Tallinn cruise port — manors, rural landscapes and a slower Baltic rhythm beyond the Old Town.",
    category: "Nature",
    tagline: "Manors, open landscape and Estonia beyond the medieval walls.",
    duration: "Approximately 5–6 hours",
    pace: "Moderate",
    bestFor: "Guests with a fuller port call who want rural Estonia rather than a city-only day",
    overview:
      "Beyond Tallinn’s walls, Estonia opens into forests, manor landscapes and quieter villages. This countryside day is for passengers who have enough hours ashore — and who accept meaningful road time.",
    body: [
      "Be honest with the clock: countryside beauty costs transfer time. If your call is short, stay in the Old Town.",
      "The reward is a different Estonia — not a rushed checklist of city façades.",
      "Guests who want wilder nature specifically should compare Lahemaa National Park.",
    ],
    highlights: [
      "Rural Estonian landscapes",
      "Manor or village stops as itinerary allows",
      "Contrast with the medieval Old Town",
      "Cruise-timed transport from Tallinn",
      "Best on a longer, unhurried call",
    ],
    itinerary: [
      {
        title: "Depart Tallinn",
        detail: "Meet at the cruise port area and drive into the surrounding countryside.",
      },
      {
        title: "Manor and landscape stops",
        detail: "Visit selected countryside highlights with time for photographs and short walks.",
      },
      {
        title: "Return to port",
        detail: "Return with a generous buffer before all-aboard.",
      },
    ],
    included: [
      "Round-trip transport from Tallinn cruise port",
      "English-speaking driver-guide or guide",
      "Countryside orientation",
    ],
    notIncluded: [
      "Lunch unless stated on your voucher",
      "Entrance fees unless stated on your voucher",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Only choose this with a solid full day ashore",
      "Keep a Plan B Old Town walk if your call is shortened",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "How much time do I need?",
        answer:
          "A fuller port call. Shorter windows are better spent in the Old Town on foot or on a city walking tour.",
      },
    ],
    relatedExcursionSlugs: [
      "lahemaa-national-park",
      "kadriorg-palace-experience",
      "historic-tallinn-old-town-highlights",
    ],
    featured: false,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — short rural walks at stops",
    cruiseSuitability: "Requires a longer usable day ashore",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "lahemaa-national-park",
    title: "Lahemaa National Park",
    seoTitle: "Lahemaa National Park Shore Excursion from Tallinn",
    metaDescription:
      "Lahemaa National Park from Tallinn cruise port — forests, Baltic coastline and manor landscapes for a nature-led day ashore.",
    category: "Nature",
    tagline: "Forests, coastline and manor landscapes east of Tallinn.",
    duration: "Approximately 6–7 hours",
    pace: "Moderate",
    bestFor: "Nature lovers with a long port call who accept the longer drive from Tallinn",
    overview:
      "Lahemaa is Estonia’s classic national-park escape from Tallinn: pine forest, Baltic shoreline and historic manors. It rewards the road time when your ship gives you enough hours — and punishes anyone who cuts the return buffer fine.",
    body: [
      "Choose Lahemaa when you want nature more than another medieval lane. Choose the Old Town when time is tight.",
      "Weather matters: forest paths and coastal viewpoints are more rewarding in clear conditions.",
      "This is not an independent walk-from-port option — organised transport is the practical path.",
    ],
    highlights: [
      "Lahemaa forest and coastal scenery",
      "Manor landscapes as itinerary allows",
      "Nature contrast to the Old Town",
      "Longer road time — honest cruise-day trade-off",
      "Return planned around all-aboard",
    ],
    itinerary: [
      {
        title: "Drive to Lahemaa",
        detail: "Depart the Tallinn cruise port area for the national park region.",
      },
      {
        title: "Park highlights",
        detail: "Visit selected forest, coastal or manor stops with time for short walks and photographs.",
      },
      {
        title: "Return to ship",
        detail: "Drive back with a conservative buffer before all-aboard.",
      },
    ],
    included: [
      "Round-trip transport from Tallinn",
      "English-speaking guide commentary",
      "National-park orientation",
    ],
    notIncluded: [
      "Lunch unless stated on your voucher",
      "Entrance fees unless stated on your voucher",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Confirm your usable hours ashore before choosing Lahemaa",
      "Wear layers and walking shoes",
      "Do not attempt this on a short call",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Is Lahemaa better than staying in Tallinn?",
        answer:
          "Different, not better. Tallinn’s Old Town is exceptional. Lahemaa is for guests who deliberately want nature and accept less city time.",
      },
      {
        question: "Can I do Old Town and Lahemaa in one day?",
        answer:
          "Not properly. Pick one priority and protect your return to the ship.",
      },
    ],
    relatedExcursionSlugs: [
      "estonian-countryside",
      "kadriorg-palace-experience",
      "historic-tallinn-old-town-highlights",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — forest and coastal paths at stops",
    cruiseSuitability: "Only with a long, unhurried port call",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
];

export function getFeaturedExcursions(): ExcursionPage[] {
  return excursions.filter((e) => e.featured);
}

export function getExcursionBySlug(slug: string): ExcursionPage | undefined {
  return excursions.find((e) => e.slug === slug);
}

export function getAllExcursionSlugs(): string[] {
  return excursions.map((e) => e.slug);
}

export function getEditorsChoiceExcursions(): ExcursionPage[] {
  return excursions.filter((e) => e.editorChoice === true);
}
