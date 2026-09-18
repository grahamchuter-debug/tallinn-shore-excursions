import type { FAQ } from "./types";
import { getHomepageFaqs } from "./homepage";

export const extraFaqs: FAQ[] = [
  {
    question: "Can I explore Tallinn without an excursion?",
    answer:
      "Yes. Tallinn is one of Europe’s easiest cruise ports for independent exploration. Many visitors walk into the Old Town and enjoy a flexible day on foot.",
  },
  {
    question: "How far is the Old Town from the cruise port?",
    answer:
      "Often around 15–25 minutes on foot from the passenger terminal area, depending on berth, pace and route.",
  },
  {
    question: "Should I book a tour?",
    answer:
      "Book when you want historical narrative, structured pacing, mobility support, or days beyond the walls. Skip when you prefer self-paced wandering and café time.",
  },
  {
    question: "How much walking is involved in Tallinn?",
    answer:
      "Cobblestones and gentle slopes are normal in the Old Town and on Toompea. Panoramic formats reduce continuous walking at the cost of some stop-and-go transfers.",
  },
  {
    question: "Is Tallinn suitable for limited mobility?",
    answer:
      "Parts of the Old Town are challenging because of cobbles and slopes. Ask about panoramic or transport-assisted options and consider a taxi from the terminal.",
  },
  {
    question: "How much free time should I allow before all-aboard?",
    answer:
      "Protect 60–90 minutes after sightseeing for a city day. Longer countryside or Lahemaa days need the larger end of that buffer.",
  },
  {
    question: "What is your Editor's Choice?",
    answer:
      "Historic Tallinn & Old Town Highlights — the best introduction for first-time visitors, with historical context and free time afterwards.",
  },
  {
    question: "What currency is used?",
    answer:
      "Estonia uses the euro (EUR). We do not convert or publish placeholder prices; live booking opens once selling prices are verified.",
  },
];

export function getAllFaqs(): FAQ[] {
  const seen = new Set<string>();
  const merged: FAQ[] = [];
  for (const faq of [...getHomepageFaqs(), ...extraFaqs, ...[]]) {
    if (seen.has(faq.question)) continue;
    seen.add(faq.question);
    merged.push(faq);
  }
  return merged;
}
