import { SIGNATURE_EXPERIENCE_PATH, signatureTallinnExperience } from "./signature-experience";

export interface PlannerInput {
  arrivalTime?: string;
  departureTime?: string;
  adults: number;
  children: number;
  interests: string[];
  mobility: "full" | "some" | "limited";
  budget: "budget" | "mid" | "premium";
  travelStyle: "diy" | "guided";
}

export interface PlannerLink {
  label: string;
  href: string;
  why: string;
}

export interface PlannerResult {
  headline: string;
  summary: string;
  excursions: PlannerLink[];
  transfers: PlannerLink[];
  stay: PlannerLink[];
  logistics: PlannerLink[];
  dayPlan: { time: string; text: string }[];
}

export const PLANNER_VISITOR_TYPES = [
  {
    id: "independent",
    label: "Independent Tallinn explorer",
    description: "A low-risk city day using walking, cafés and your own return buffer.",
  },
  {
    id: "medieval",
    label: "First-time medieval Tallinn visitor",
    description: "A guided Old Town introduction with historical context and free time afterwards.",
  },
  {
    id: "architecture",
    label: "Architecture & viewpoints traveller",
    description: "Toompea, cathedral façades and classic rooftop panoramas.",
  },
  {
    id: "nature",
    label: "Nature & countryside traveller",
    description: "Lahemaa or Estonian countryside when your port call supports the road time.",
  },
] as const;

export const INTEREST_OPTIONS = [
  { id: "old-town", label: "Tallinn Old Town" },
  { id: "toompea", label: "Toompea & viewpoints" },
  { id: "kadriorg", label: "Kadriorg Palace" },
  { id: "lahemaa", label: "Lahemaa National Park" },
  { id: "food", label: "Food experiences" },
  { id: "photography", label: "Photography & scenery" },
  { id: "family", label: "Family-friendly" },
  { id: "independent", label: "Independent travel" },
];

type PlanKey = "independent" | "medieval" | "architecture" | "nature";

export const TALLINN_DAY_PLANS: Record<
  PlanKey,
  { headline: string; summary: string; minimumHours: number; links: PlannerLink[]; dayPlan: PlannerResult["dayPlan"] }
> = {
  independent: {
    headline: "Independent Tallinn Old Town",
    summary:
      "The most flexible choice: walk from the terminals toward Viru Gate, Market Square, Toompea viewpoints and café streets.",
    minimumHours: 4,
    links: [
      {
        label: "Walking from Tallinn Port",
        href: "/guides/walking-from-port",
        why: "Walking route, timing and return-to-ship advice.",
      },
      {
        label: "Explore Independently",
        href: "/guides/explore-independently",
        why: "DIY Old Town plan without an organised tour.",
      },
    ],
    dayPlan: [
      { time: "Morning", text: "Walk from the cruise port into the Lower Town and Market Square." },
      { time: "Late morning", text: "Climb Toompea for rooftop viewpoints and cathedral façades." },
      { time: "Afternoon", text: "Café time, walls or quieter lanes — then return with a buffer." },
    ],
  },
  medieval: {
    headline: "Historic Tallinn introduction",
    summary:
      "A guided Old Town highlights day with historical context and free time afterwards — our favourite first-time format.",
    minimumHours: 5,
    links: [
      {
        label: "Historic Tallinn & Old Town Highlights",
        href: "/shore-excursions/historic-tallinn-old-town-highlights",
        why: "Editor’s Choice introduction for first-time cruise visitors.",
      },
      {
        label: "Tallinn Walking Tour",
        href: "/shore-excursions/tallinn-walking-tour",
        why: "Shorter walking alternative with independent time left.",
      },
    ],
    dayPlan: [
      { time: "Meet", text: "Join your guide near the passenger terminal area." },
      { time: "Guided highlights", text: "Lower Town, historical context and Toompea orientation." },
      { time: "Free time", text: "Cafés, photographs or shopping before returning to the ship." },
    ],
  },
  architecture: {
    headline: "Toompea & panoramic Tallinn",
    summary:
      "Upper Town architecture, Alexander Nevsky façades and classic viewpoints with less continuous walking than a full stroll.",
    minimumHours: 5,
    links: [
      {
        label: "Toompea & Cathedral Tour",
        href: "/shore-excursions/toompea-cathedral-tour",
        why: "Upper Town focus and cathedral façades.",
      },
      {
        label: "Tallinn Panoramic Tour",
        href: "/shore-excursions/tallinn-panoramic-tour",
        why: "Viewpoints with lighter continuous walking.",
      },
    ],
    dayPlan: [
      { time: "Morning", text: "Ascend to Toompea for architecture and panoramas." },
      { time: "Midday", text: "Cathedral façades and photography stops." },
      { time: "Afternoon", text: "Optional Lower Town free time before the return buffer." },
    ],
  },
  nature: {
    headline: "Estonia beyond the walls",
    summary:
      "Kadriorg gardens, countryside or Lahemaa — only when your usable hours support the road time.",
    minimumHours: 7,
    links: [
      {
        label: "Kadriorg Palace Experience",
        href: "/shore-excursions/kadriorg-palace-experience",
        why: "Palace gardens without the longest countryside transfer.",
      },
      {
        label: "Lahemaa National Park",
        href: "/shore-excursions/lahemaa-national-park",
        why: "Nature day for long, unhurried port calls.",
      },
    ],
    dayPlan: [
      { time: "Depart", text: "Leave the Tallinn port area with cruise-aware transport." },
      { time: "Experience", text: "Gardens, countryside or national-park stops as chosen." },
      { time: "Return", text: "Drive back with a generous all-aboard buffer." },
    ],
  },
};

function parseHour(value?: string): number | null {
  if (!value) return null;
  const m = value.match(/^(\d{1,2}):(\d{2})$/);
  if (!m) return null;
  return Number(m[1]) + Number(m[2]) / 60;
}

function usableHours(input: PlannerInput): number {
  const arrival = parseHour(input.arrivalTime);
  const departure = parseHour(input.departureTime);
  if (arrival == null || departure == null) return 8;
  let hours = departure - arrival;
  if (hours <= 0) hours += 24;
  return Math.max(1, hours - 1.5);
}

function selectPlan(input: PlannerInput, hours: number): PlanKey {
  const interests = input.interests;
  if (
    input.travelStyle === "diy" ||
    input.mobility === "limited" ||
    interests.includes("independent") ||
    interests.includes("old-town") ||
    hours < 6
  ) {
    if (input.travelStyle === "guided" && hours >= 5 && !interests.includes("independent")) {
      return interests.includes("toompea") || interests.includes("photography")
        ? "architecture"
        : "medieval";
    }
    return "independent";
  }
  if (interests.includes("lahemaa") || interests.includes("kadriorg")) return "nature";
  if (interests.includes("toompea") || interests.includes("photography")) return "architecture";
  if (interests.includes("food") && hours < 7) return "independent";
  return hours >= 6 ? "medieval" : "independent";
}

/** @deprecated Compatibility alias */
export const SAVONA_DAY_PLANS = TALLINN_DAY_PLANS;

export function generateTallinnPlan(input: PlannerInput): PlannerResult {
  const hours = usableHours(input);
  const key = selectPlan(input, hours);
  const plan = TALLINN_DAY_PLANS[key];
  const partySize = input.adults + input.children;
  const excursions = [...plan.links];

  if (input.budget === "premium") {
    excursions.push({
      label: signatureTallinnExperience.title,
      href: SIGNATURE_EXPERIENCE_PATH,
      why: "Future maximum-eight-guest Tallinn concept — in preparation and not bookable.",
    });
  }

  if (input.interests.includes("food") && key === "independent") {
    excursions.push({
      label: "Tallinn Food Experience",
      href: "/shore-excursions/tallinn-food-experience",
      why: "Central tastings without a road day.",
    });
  }

  return {
    headline: plan.headline,
    summary: `${plan.summary} Your call provides about ${hours.toFixed(1)} usable hours for ${partySize} guest${partySize === 1 ? "" : "s"}. ${hours < plan.minimumHours ? `This is shorter than the ${plan.minimumHours}-hour minimum we recommend for this style, so prefer the Old Town on foot.` : ""}`.trim(),
    excursions,
    transfers: [
      {
        label: "Tallinn Cruise Port Guide",
        href: "/cruise-port-guide",
        why: "Terminal walking times, taxis and city access.",
      },
    ],
    stay: [],
    logistics: [
      {
        label: "Tallinn Ship Schedule",
        href: "/ship-schedules/tallinn",
        why: "Recheck the published arrival and departure for your call.",
      },
      {
        label: "Compare Tallinn options",
        href: "/compare",
        why: "Review honest trade-offs before booking a long road day.",
      },
    ],
    dayPlan: [
      ...plan.dayPlan,
      {
        time: "Return buffer",
        text: "Reach the Tallinn terminal 60–90 minutes before all-aboard; countryside and Lahemaa days require additional road traffic contingency.",
      },
    ],
  };
}

/** @deprecated Compatibility aliases */
export function generateSavonaPlan(input: PlannerInput): PlannerResult {
  return generateTallinnPlan(input);
}

export function generateSplitPlan(input: PlannerInput): PlannerResult {
  return generateTallinnPlan(input);
}
