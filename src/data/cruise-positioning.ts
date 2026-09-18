/**
 * Central cruise-positioning + Your Day Ashore experience categories.
 * Reusable World 2.0 pattern — destination copy lives here; component stays generic.
 */
export const cruisePositioning = {
  enabled: true,
  eyebrow: "Designed for Cruise Passengers",
  message: "Helping cruise passengers make every hour ashore count.",
  variantBMessage: "Everything here is built around your time in port.",
  activeVariant: "A" as "A" | "B",
  showDayAshoreSection: true,
} as const;

export function getCruiseTrustMessage(): string {
  if (cruisePositioning.activeVariant === "B") {
    return cruisePositioning.variantBMessage;
  }
  return cruisePositioning.message;
}

export interface DayAshoreItem {
  id: string;
  title: string;
  body: string;
  href?: string;
  icon: "clock" | "route" | "walk" | "sunrise" | "viewpoint" | "food" | "family" | "luxury";
}

export const dayAshoreIntro =
  "Where will your day in Tallinn take you? Choose the experience that fits your hours ashore — then build everything around your ship’s schedule.";

export const dayAshoreItems: DayAshoreItem[] = [
  {
    id: "history",
    title: "History",
    body: "Hanseatic streets, towers and a medieval centre that still feels lived-in.",
    href: "/shore-excursions/historic-tallinn-old-town-highlights",
    icon: "route",
  },
  {
    id: "architecture",
    title: "Architecture",
    body: "Toompea façades, Orthodox domes and Baltic Gothic details above the Lower Town.",
    href: "/shore-excursions/toompea-cathedral-tour",
    icon: "viewpoint",
  },
  {
    id: "walking",
    title: "Walking",
    body: "Cobblestones and city walls — Tallinn rewards a human pace near the ship.",
    href: "/shore-excursions/tallinn-walking-tour",
    icon: "walk",
  },
  {
    id: "photography",
    title: "Photography",
    body: "Red rooftops, spires and classic viewpoints over the Old Town.",
    href: "/guides/best-viewpoints",
    icon: "viewpoint",
  },
  {
    id: "food",
    title: "Food",
    body: "Market flavours and Tallinn tables without leaving the historic core.",
    href: "/shore-excursions/tallinn-food-experience",
    icon: "food",
  },
  {
    id: "families",
    title: "Families",
    body: "Palace gardens and manageable walks when travelling with children.",
    href: "/shore-excursions/kadriorg-palace-experience",
    icon: "family",
  },
  {
    id: "walk-it-yourself",
    title: "Walk It Yourself",
    body: "A self-guided Old Town route for one of Europe’s easiest cruise ports to explore on foot.",
    href: "/guides/explore-independently",
    icon: "walk",
  },
  {
    id: "nature",
    title: "Nature",
    body: "Lahemaa forests, manors and Baltic coastline beyond the city walls.",
    href: "/shore-excursions/lahemaa-national-park",
    icon: "sunrise",
  },
  {
    id: "editors-choice",
    title: "Editor's Choice",
    body: "Historic Tallinn & Old Town Highlights — our favourite first-time introduction.",
    href: "/shore-excursions/historic-tallinn-old-town-highlights",
    icon: "luxury",
  },
];
