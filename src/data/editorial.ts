import type { EditorialCategory } from "./types";
import { SIGNATURE_EXPERIENCE_PATH } from "./signature-experience";
import { EXPLORE_INDEPENDENTLY_PATH } from "./explore-independently";

/**
 * Shared Editorial Promise — destination may override copy in this module.
 * Tone: editorial trust, never a sales pitch. Editor's Choice badge stays separate.
 */
export const editorialPromise = {
  eyebrow: "Our editorial promise",
  title: "We'll always recommend the experience we'd choose ourselves",
  lead: "We'll always recommend the experience we'd choose ourselves.",
  points: [
    "Sometimes that's one of our carefully selected Editor's Choice excursions.",
    "Sometimes it's a free self-guided experience.",
  ],
  closing: "Our goal is to help you enjoy the best possible day ashore.",
} as const;

export interface EditorialCategoryDef {
  id: EditorialCategory;
  label: string;
  shortLabel: string;
  description: string;
}

export const EDITORIAL_CATEGORIES: EditorialCategoryDef[] = [
  { id: "editors-choice", label: "Editor's Choice", shortLabel: "Editor's Choice", description: "Our strongest overall choice for a well-timed Tallinn cruise day." },
  { id: "best-historic", label: "Best Historic Experience", shortLabel: "Historic", description: "Medieval Old Town context, towers and Toompea history." },
  { id: "best-independent", label: "Best Independent Experience", shortLabel: "Walk It Yourself", description: "A realistic self-guided Tallinn day within easy reach of the ship — when independence is genuinely best." },
  { id: "best-coastal", label: "Best Beyond the Walls", shortLabel: "Beyond", description: "Kadriorg, countryside and Lahemaa when hours ashore allow." },
  { id: "best-view", label: "Best Views", shortLabel: "Views", description: "Toompea terraces, rooftops and church spires." },
  { id: "best-got", label: "Signature Experience", shortLabel: "Signature", description: "Our future Tallinn small-group flagship, currently in preparation." },
  { id: "best-families", label: "Best for Families", shortLabel: "Families", description: "Manageable walks and palace gardens with sensible pacing." },
  { id: "best-photography", label: "Best Photography", shortLabel: "Photography", description: "Red rooftops, viewpoints and cathedral façades." },
  { id: "best-food", label: "Best Food & Wine", shortLabel: "Food & Wine", description: "Market flavours and Tallinn café culture." },
  { id: "best-luxury", label: "Best Private Tour", shortLabel: "Private", description: "Dedicated transport and flexible pacing for your own party." },
  { id: "hidden-gem", label: "Hidden Gem", shortLabel: "Hidden Gem", description: "Quieter lanes and local stops beyond the busiest square." },
  { id: "best-value", label: "Best Value", shortLabel: "Best Value", description: "A rewarding port day without unnecessary transfers or expense." },
  { id: "best-short-port", label: "Best Short Port Call", shortLabel: "Short Port", description: "Old Town highlights when usable hours are limited." },
];

export interface EditorsCollectionItem {
  id: string;
  emoji: string;
  label: string;
  description: string;
  href: string;
  cta: string;
  signature?: boolean;
  comingSoon?: boolean;
}

export const editorsCollectionItems: EditorsCollectionItem[] = [
  {
    id: "editors-choice",
    emoji: "⭐",
    label: "Editor's Choice",
    description: "Historic Tallinn & Old Town Highlights — the best introduction for first-time cruise visitors.",
    href: "/shore-excursions/historic-tallinn-old-town-highlights",
    cta: "View our top pick",
  },
  {
    id: "first-time",
    emoji: "⛵",
    label: "Best First-Time Tour",
    description: "Historic Tallinn for first-time visitors who want context and free time afterwards.",
    href: "/shore-excursions/historic-tallinn-old-town-highlights",
    cta: "Discover Tallinn",
  },
  {
    id: "historic",
    emoji: "🏰",
    label: "Best Historic Walk",
    description: "Tallinn Walking Tour — cobbled lanes and Market Square at a human pace.",
    href: "/shore-excursions/tallinn-walking-tour",
    cta: "Explore on foot",
  },
  {
    id: "food-wine",
    emoji: "🍽️",
    label: "Best Food Experience",
    description: "Tallinn Food Experience — market flavours without leaving the walkable core.",
    href: "/shore-excursions/tallinn-food-experience",
    cta: "Taste Tallinn",
  },
  {
    id: "private",
    emoji: "🚗",
    label: "Best Beyond the City",
    description: "Lahemaa or Estonian countryside when your port call supports the road time.",
    href: "/compare/city-or-countryside",
    cta: "Compare city vs countryside",
  },
  {
    id: "photography",
    emoji: "📸",
    label: "Best Photography",
    description: "Toompea viewpoints and panoramic routing for red rooftops and spires.",
    href: "/shore-excursions/tallinn-panoramic-tour",
    cta: "Find the views",
  },
  {
    id: "families",
    emoji: "👨‍👩‍👧",
    label: "Best for Families",
    description: "Kadriorg gardens keep open space and a gentler rhythm for mixed-age parties.",
    href: "/shore-excursions/kadriorg-palace-experience",
    cta: "See Kadriorg",
  },
  {
    id: "independent",
    emoji: "🚶",
    label: "Walk It Yourself",
    description: "Walking from Tallinn port — Old Town, Toompea and cafés with a generous ship buffer.",
    href: EXPLORE_INDEPENDENTLY_PATH,
    cta: "Open the walking guide",
  },
  {
    id: "signature-experience",
    emoji: "✨",
    label: "Signature Baltic Tallinn Discovery",
    description: "A future maximum-eight-guest Tallinn day, currently in preparation and not bookable.",
    href: SIGNATURE_EXPERIENCE_PATH,
    cta: "Preview the concept",
    signature: true,
    comingSoon: true,
  },
];

export function getEditorialLabel(id: EditorialCategory): string {
  return EDITORIAL_CATEGORIES.find((category) => category.id === id)?.label ?? id;
}
