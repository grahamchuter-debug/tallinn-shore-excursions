import type { ExperienceCard, FAQ, VisitorType } from "./types";

export const homepageTagline =
  "Step into one of Europe's best-preserved medieval cities.";

export const homepageSubheading =
  "Walk through cobbled streets, explore ancient towers, enjoy spectacular viewpoints and discover why Tallinn is one of the Baltic's most rewarding cruise destinations.";

export const homepageDestinationLine =
  "Old Town · Toompea · Alexander Nevsky · Kadriorg · Lahemaa";

export const visitorTypes: VisitorType[] = [
  {
    id: "port-day",
    label: "I'm visiting Tallinn for the day on a cruise",
    shortLabel: "Port day",
    description:
      "Match your hours ashore to the medieval Old Town, Toompea viewpoints, or a longer Estonian countryside day — with a proper return buffer.",
    href: "/shore-excursions",
    cta: "Plan my port day",
  },
  {
    id: "first-time",
    label: "It's my first time in Tallinn",
    shortLabel: "First visit",
    description:
      "Compare walking the Old Town independently, a guided historic introduction, or venturing beyond the walls before you choose.",
    href: "/compare/first-time-tallinn-day",
    cta: "See first-time picks",
  },
  {
    id: "independent",
    label: "I prefer to explore independently",
    shortLabel: "Independent",
    description:
      "Tallinn is one of Europe's easiest cruise ports to explore on foot — many guests reach the Old Town without an organised tour.",
    href: "/guides/explore-independently",
    cta: "Walk It Yourself",
  },
  {
    id: "planner",
    label: "I want help choosing my day",
    shortLabel: "Cruise planner",
    description:
      "Tell us your port times, interests, mobility and pace for a tailored Tallinn plan.",
    href: "/cruise-planner",
    cta: "Use the planner",
  },
];

export interface HomeSection {
  slug: string;
  number: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

export const coreSections: HomeSection[] = [
  {
    slug: "excursions",
    number: "01",
    title: "Shore excursions",
    description:
      "Carefully selected experiences across medieval Tallinn, Toompea, Kadriorg and Estonia beyond the walls — designed around cruise timing.",
    href: "/shore-excursions",
    cta: "Browse excursions",
  },
  {
    slug: "guides",
    number: "02",
    title: "Port & city guides",
    description:
      "Honest advice on walking from the cruise port, the Old Town, Toompea, viewpoints and when an organised tour actually helps.",
    href: "/guides",
    cta: "Read the guides",
  },
  {
    slug: "schedules",
    number: "03",
    title: "Cruise ship schedule",
    description:
      "Ship call data for Tallinn will appear here once confirmed schedules are available for publication.",
    href: "/ship-schedules",
    cta: "View schedules",
  },
];

export const spiritOfPlace = {
  title: "Medieval Tallinn. Baltic elegance.",
  body: [
    "Tallinn is not a port that asks you to invent a destination. Red rooftops, church spires and intact city walls rise a short walk from the cruise terminals — one of Europe’s most complete medieval centres still lived in every day.",
    "We write like an independent cruise concierge: fewer recommendations, clearer trade-offs, and always a plan that protects your return to the ship. Guided days add history and reach; walking independently is often the finest choice of all.",
  ],
};

export const honestAdvicePoints = [
  {
    title: "The Old Town is genuinely close",
    body: "Many cruise passengers walk into Tallinn’s UNESCO Old Town from the passenger terminals. Independent exploration is a first-class option — not a consolation prize.",
  },
  {
    title: "Guides shine when you want context — or distance",
    body: "A knowledgeable guide brings centuries of Hanseatic and Estonian history to life. Organised transport matters most when you leave for Kadriorg, the countryside or Lahemaa.",
  },
  {
    title: "All-aboard beats published departure",
    body: "Plan from the moment you must be aboard, then add a buffer. The ship will not wait for one more rooftop photograph.",
  },
];

export function getHomepageFaqs(): FAQ[] {
  return [
    {
      question: "Can I explore Tallinn without an excursion?",
      answer:
        "Yes. Tallinn is one of Europe’s easiest cruise ports for independent exploration. Many visitors walk into the Old Town, climb Toompea viewpoints and return on foot with a sensible buffer. An organised excursion becomes especially useful for historical narrative, limited mobility, or attractions beyond the walls.",
    },
    {
      question: "How far is the Old Town from the cruise port?",
      answer:
        "Typically a walkable distance from the passenger terminals into the Lower Town — often around 15–25 minutes depending on berth, pace and route. Exact timing varies; follow port signage and allow extra time if mobility is limited.",
    },
    {
      question: "Should I book a tour?",
      answer:
        "Book a tour when you want guided history, Toompea and cathedral context with less navigation effort, or a day beyond Tallinn. Skip a tour when you prefer flexible wandering, café time and self-paced photography in the Old Town.",
    },
    {
      question: "What is your Editor's Choice excursion?",
      answer:
        "Historic Tallinn & Old Town Highlights — the best introduction for first-time visitors, with historical context and free time afterwards.",
    },
  ];
}

export const featuredExperienceCards: ExperienceCard[] = [
  {
    slug: "explore-independently",
    type: "walk-it-yourself",
    title: "Walk It Yourself",
    eyebrow: "Free self-guided route",
    description:
      "Discover Tallinn’s medieval Old Town at your own pace — often the finest day ashore from the cruise port.",
    href: "/guides/explore-independently",
    cta: "Open the walking guide",
    imageKey: "walking",
    duration: "2.5–4 hours",
    distance: "Approximately 3–5 km",
    difficulty: "Easy to moderate",
    idealFor: "Independent cruise passengers",
  },
  {
    slug: "history",
    type: "history",
    title: "History",
    description:
      "A guided introduction through cobbled streets and towers when you want the stories behind the stones.",
    href: "/shore-excursions/historic-tallinn-old-town-highlights",
    cta: "Explore historic Tallinn",
    imageKey: "historic",
  },
  {
    slug: "nature",
    type: "nature",
    title: "Nature & beyond",
    description:
      "Countryside, palaces and Baltic coastline when your hours ashore allow travel beyond the walls.",
    href: "/shore-excursions/lahemaa-national-park",
    cta: "See beyond Tallinn",
    imageKey: "nature",
  },
];

export const experienceCards: ExperienceCard[] = [
  {
    slug: "explore-independently",
    type: "walk-it-yourself",
    title: "Walk It Yourself",
    eyebrow: "Free self-guided route",
    description: "Self-guided Old Town route for one of Europe’s easiest cruise ports to explore on foot.",
    href: "/guides/explore-independently",
    cta: "Walk It Yourself",
    imageKey: "walking",
    duration: "2.5–4 hours",
    distance: "3–5 km",
    difficulty: "Easy to moderate",
    idealFor: "Independent explorers",
  },
  {
    slug: "history",
    type: "history",
    title: "History",
    description: "Medieval streets, towers and Hanseatic stories in the Old Town.",
    href: "/shore-excursions/historic-tallinn-old-town-highlights",
    cta: "Explore history",
    imageKey: "historic",
  },
  {
    slug: "photography",
    type: "photography",
    title: "Photography",
    description: "Red rooftops, spires and viewpoints above the Lower Town.",
    href: "/guides/best-viewpoints",
    cta: "Find viewpoints",
    imageKey: "photography",
  },
  {
    slug: "food-wine",
    type: "food-wine",
    title: "Food & Wine",
    description: "Market flavours and Tallinn tables without leaving the centre.",
    href: "/shore-excursions/tallinn-food-experience",
    cta: "Taste Tallinn",
    imageKey: "food",
  },
  {
    slug: "families",
    type: "families",
    title: "Families",
    description: "Manageable walks and palace gardens when travelling with children.",
    href: "/shore-excursions/kadriorg-palace-experience",
    cta: "Family-friendly days",
    imageKey: "family",
  },
  {
    slug: "nature",
    type: "nature",
    title: "Nature",
    description: "Lahemaa forests, manors and Baltic coastline beyond Tallinn.",
    href: "/shore-excursions/lahemaa-national-park",
    cta: "Plan Lahemaa",
    imageKey: "nature",
  },
  {
    slug: "private",
    type: "private",
    title: "Private Experiences",
    description: "Flexible private pacing when your party wants the day shaped around you.",
    href: "/shore-excursions",
    cta: "Browse private options",
    imageKey: "private",
  },
];

/** Homepage hero — destination copy (components stay generic). */
export const homepageHero = {
  eyebrow: "Tallinn Shore Excursions",
  headline: homepageTagline,
  subheading: homepageSubheading,
  destinationLine: homepageDestinationLine,
  primaryCta: { href: "/shore-excursions", label: "Explore Shore Excursions" },
  secondaryCta: { href: "/guides/explore-independently", label: "Walk It Yourself" },
} as const;

export interface ChooseYourDayCard {
  slug: string;
  emoji: string;
  title: string;
  tagline: string;
  highlights: readonly string[];
  cta: string;
  href: string;
  imageKey: string;
  wide?: boolean;
}

export const chooseYourDay = {
  eyebrow: "Choose Your Day",
  title: "How would you like to experience Tallinn?",
  subtitle:
    "Stay inside the medieval walls, explore on your own, or discover Estonia beyond the city — three clear paths shaped around your hours ashore.",
  cards: [
    {
      slug: "medieval-tallinn",
      emoji: "🏰",
      title: "Medieval Tallinn",
      tagline:
        "Historic walking experiences through cobbled streets, towers and Market Square — with a guide when you want the stories behind the stones.",
      highlights: [
        "Best introduction for first-time visitors",
        "Old Town and Toompea highlights",
        "Historical context without rushing",
        "Free time afterwards for cafés or viewpoints",
        "Ideal when you want narrative, not just wandering",
      ],
      cta: "View Editor’s Choice",
      href: "/shore-excursions/historic-tallinn-old-town-highlights",
      imageKey: "historic",
      wide: true,
    },
    {
      slug: "explore-independently",
      emoji: "🚶",
      title: "Walk It Yourself",
      tagline:
        "A carefully paced Old Town walking guide for one of Europe’s easiest cruise ports to explore on foot.",
      highlights: [
        "Walkable distance from many berths",
        "UNESCO Old Town on your own schedule",
        "Viewpoints and Market Square at your pace",
        "Local café recommendations, not tourist traps",
        "Honest return-to-ship buffers",
      ],
      cta: "Open Walk It Yourself",
      href: "/guides/explore-independently",
      imageKey: "walking",
      wide: true,
    },
    {
      slug: "discover-estonia",
      emoji: "🌲",
      title: "Discover Estonia",
      tagline:
        "Countryside, palaces and nature beyond Tallinn — choose this when your port call supports the travel time.",
      highlights: [
        "Kadriorg palace gardens",
        "Estonian countryside manors",
        "Lahemaa forests and coastline",
        "Best on a fuller, unhurried call",
        "Honest trade-off versus Old Town time",
      ],
      cta: "See beyond the walls",
      href: "/shore-excursions/lahemaa-national-park",
      imageKey: "nature",
      wide: false,
    },
  ] as const satisfies readonly ChooseYourDayCard[],
};

export const honestAdviceContent = {
  eyebrow: "Honest advice",
  title: "Do You Need a Shore Excursion in Tallinn?",
  subtitle:
    "The honest answer: Tallinn is one of Europe’s easiest cruise ports to explore. Many visitors happily walk into the Old Town independently. Guided excursions are ideal when you want history brought to life, attractions beyond the city, or simply a clearer structure for your hours ashore.",
  independent: {
    title: "You can explore Tallinn independently — and many passengers do",
    body: "The medieval Old Town sits a walkable distance from the cruise port, making a flexible, lower-cost day realistic for most guests:",
    items: [
      "Market Square and Lower Town lanes",
      "City walls and tower viewpoints",
      "Toompea Hill and cathedral façades",
      "Café time before walking back to the ship",
    ],
    note: "Set a 60–90 minute return buffer and confirm your all-aboard time. The ship will not wait.",
  },
  organised: {
    title: "When a guided day is the better choice",
    body: "Organised commentary and transport matter when you want more than wandering — or when you leave the walkable core:",
    items: [
      {
        label: "Historic Tallinn",
        detail: "centuries of context while still leaving free time afterwards",
      },
      {
        label: "Toompea & cathedrals",
        detail: "Upper Town orientation without getting lost on cobbles",
      },
      {
        label: "Kadriorg & countryside",
        detail: "palace gardens and Estonia beyond the walls",
      },
      {
        label: "Lahemaa",
        detail: "national-park scenery with longer road time — plan the buffer carefully",
      },
    ],
  },
  links: [
    { href: "/compare/tour-or-independent", label: "Tour or independent?" },
    { href: "/guides/explore-independently", label: "Walk It Yourself" },
    { href: "/guides/walking-from-port", label: "Walking from the cruise port" },
  ],
} as const;

export const featuredSectionCopy = {
  eyebrow: "When you're ready",
  title: "Featured shore excursions",
  subtitle:
    "Curated Tallinn experiences planned around your cruise day. Live booking opens once EUR selling prices and fulfilment routes are verified.",
} as const;
