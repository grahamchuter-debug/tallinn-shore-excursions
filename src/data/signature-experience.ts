import type { FAQ } from "./types";

export const SIGNATURE_EXPERIENCE_PATH = "/signature-riviera-experience";

export interface SignatureBenefit {
  emoji: string;
  title: string;
  description: string;
}

export const signatureTallinnExperience = {
  slug: "signature-riviera-experience",
  title: "Signature Baltic Tallinn Discovery",
  seoTitle: "Signature Baltic Tallinn Discovery — Future Private Day",
  metaDescription:
    "Preview a future small-group Tallinn shore experience — maximum eight guests, medieval highlights, viewpoints and flexible discovery. Not currently bookable.",
  tagline:
    "A future small-group journey through medieval Tallinn — designed around your ship, not a generic day tour.",
  overview:
    "Signature Baltic Tallinn Discovery is a product concept in preparation. The proposed experience would take no more than eight guests from Tallinn through the Old Town and Toompea viewpoints in a carefully paced format, with optional Kadriorg time, a local lunch and enough flexibility to respond to the group, weather and port timings. It does not currently exist as a bookable excursion.",
  comingSoon: true,
  benefits: [
    {
      emoji: "👥",
      title: "Maximum 8 guests",
      description: "A proposed small-group format intended to avoid coach-tour delays and support personal attention.",
    },
    {
      emoji: "🏰",
      title: "Medieval Tallinn focus",
      description: "Old Town lanes, Market Square context and Toompea viewpoints at the heart of the concept.",
    },
    {
      emoji: "📸",
      title: "Photography stops",
      description: "Time for rooftop panoramas and cathedral façades rather than images through a coach window.",
    },
    {
      emoji: "🍽️",
      title: "Local lunch",
      description: "A relaxed Tallinn lunch proposed as part of the experience, subject to final partner arrangements.",
    },
    {
      emoji: "🧭",
      title: "Flexible itinerary",
      description: "Room to adjust for weather, crowds and the interests of a small group.",
    },
    {
      emoji: "🚢",
      title: "Ship-first timing",
      description: "Planned backwards from all-aboard with a conservative Tallinn return buffer.",
    },
  ] as SignatureBenefit[],
  faqs: [
    {
      question: "Can I book Signature Baltic Tallinn Discovery now?",
      answer:
        "No. It is a future concept in preparation and is not bookable. Explore current Tallinn shore excursions or enquire for updates.",
    },
    {
      question: "How is this different from Editor's Choice?",
      answer:
        "Editor’s Choice is our current recommended introduction. Signature is a future small-group flagship concept with a stricter guest limit and more flexible pacing.",
    },
  ] as FAQ[],
};

export function getSignatureEditorialRecommendation() {
  return {
    title: signatureTallinnExperience.title,
    description: signatureTallinnExperience.tagline,
    href: SIGNATURE_EXPERIENCE_PATH,
  };
}

/** @deprecated Compatibility alias for shared components */
export const signatureRivieraExperience = signatureTallinnExperience;
