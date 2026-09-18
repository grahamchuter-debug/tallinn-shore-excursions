/**
 * World 2.0 Destination Configuration — Tallinn Shore Excursions
 *
 * Domain is the single source of truth for canonicals, sitemap, OG, JSON-LD and Worker CORS.
 * Do not hard-code the hostname elsewhere.
 */

import type { DestinationCurrencyCode } from "@/lib/commerce/currency";

export type DestinationRegion =
  | "europe"
  | "caribbean"
  | "alaska"
  | "british-isles"
  | "other";

/**
 * CENTRAL — public contact is info@wowatour.com only (default until forwarding works).
 * LOCAL — display hello@ / bookings@ / privacy@ on the destination domain.
 */
export type ContactMode = "central" | "local";

export type DestinationConfig = {
  slug: string;
  name: string;
  destination: string;
  descriptor: string;
  strapline: string;
  domain: string;
  url: string;
  description: string;
  locale: string;
  region: DestinationRegion;
  currency: DestinationCurrencyCode;
  bookingRefPrefix: string;
  pagesProject: string;
  paymentsWorkerName: string;
  d1DatabaseName: string;
  /**
   * Public contact presentation. Keep `central` until destination email
   * forwarding (hello/bookings/privacy) is configured, then switch to `local`.
   */
  contactMode: ContactMode;
  /** Destination-local addresses — used only when contactMode is `local`. */
  contact: {
    hello: string;
    bookings: string;
    privacy: string;
  };
  legal: {
    tradingName: string;
    legalCompanyName: string;
    companyNumber: string;
    registeredJurisdiction: string;
    registeredOfficeLines: string[];
    registeredOfficeFormatted: string;
  };
  port: {
    scheduleSlug: string;
    meetingPointLabel: string;
    country: string;
  };
  seo: {
    defaultKeywords: string[];
  };
  nav: readonly { href: string; label: string }[];
  experienceCategories: readonly string[];
};

export const destinationConfig = {
  slug: "tallinn",
  name: "Tallinn Shore Excursions",
  destination: "Tallinn",
  descriptor: "Shore Excursions",
  strapline: "Europe's Best Preserved Medieval City",
  domain: "tallinnshoreexcursion.com",
  url: "https://tallinnshoreexcursion.com",
  description:
    "Independent Tallinn shore excursions and honest cruise-port guidance — medieval Old Town, Toompea, Kadriorg and Estonia beyond the walls.",
  locale: "en_GB",
  region: "europe",
  currency: "EUR",
  bookingRefPrefix: "TA",
  pagesProject: "tallinn-shore-excursions",
  paymentsWorkerName: "tallinn-payments",
  d1DatabaseName: "tallinn-bookings",
  contactMode: "central",
  contact: {
    hello: "hello@tallinnshoreexcursion.com",
    bookings: "bookings@tallinnshoreexcursion.com",
    privacy: "privacy@tallinnshoreexcursion.com",
  },
  legal: {
    tradingName: "Tallinn Shore Excursions",
    legalCompanyName: "Wow A Tour Ltd",
    companyNumber: "11426960",
    registeredJurisdiction: "England and Wales",
    registeredOfficeLines: [
      "Kintyre House",
      "70 High Street",
      "Fareham",
      "Hampshire",
      "United Kingdom",
      "PO16 7BB",
    ],
    registeredOfficeFormatted:
      "Kintyre House, 70 High Street, Fareham, Hampshire, United Kingdom, PO16 7BB",
  },
  port: {
    scheduleSlug: "tallinn",
    meetingPointLabel: "Tallinn Cruise Port",
    country: "Estonia",
  },
  seo: {
    defaultKeywords: [
      "Tallinn Shore Excursions",
      "Tallinn Cruise Excursions",
      "Tallinn Cruise Port Guide",
      "Tallinn Old Town",
      "Walking From Tallinn Cruise Port",
      "Tallinn Walking Tour",
    ],
  },
  nav: [
    { href: "/compare", label: "Compare" },
    { href: "/shore-excursions", label: "Excursions" },
    { href: "/guides", label: "Guides" },
    { href: "/wow-collection", label: "Wow Collection" },
    { href: "/cruise-planner", label: "Planner" },
    { href: "/cruise-port-guide", label: "Port Guide" },
  ],
  experienceCategories: [
    "History",
    "Architecture",
    "Walking",
    "Photography",
    "Food",
    "Families",
    "Walk It Yourself",
    "Nature",
    "Editor's Choice",
  ],
} as const satisfies DestinationConfig;

export type AppDestinationConfig = typeof destinationConfig;
