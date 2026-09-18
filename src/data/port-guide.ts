import type { FAQ } from "./types";

export interface Terminal {
  name: string;
  quay: string;
  usedBy: string;
  cityAccess: string;
}

export interface PortGuideSection {
  heading: string;
  paragraphs: string[];
}

export const portGuideContent = {
  title: "Tallinn Cruise Port Guide",
  subtitle:
    "Terminal access, walking times to the Old Town, Toompea viewpoints, food, transport toward Kadriorg and Lahemaa, and sensible return-to-ship planning.",
  terminals: [
    {
      name: "Tallinn passenger terminals",
      quay: "Cruise berths at the Port of Tallinn passenger area on the edge of the city centre",
      usedBy: "Most cruise ships calling at Tallinn on Baltic itineraries",
      cityAccess:
        "Often around 15–25 minutes on foot to the Old Town edge depending on berth and pace; taxis available at peak turnaround",
    },
    {
      name: "Alternative harbour positions",
      quay: "Occasional alternative berths within the wider port complex",
      usedBy: "Selected calls when specific berths are assigned",
      cityAccess:
        "Walking times vary — follow terminal signage and allow a conservative buffer",
    },
  ] as Terminal[],
  sections: [
    {
      heading: "Where cruise ships dock in Tallinn",
      paragraphs: [
        "Cruise ships use Tallinn’s passenger terminal area on the edge of the city centre. Unlike sprawling mega-ports that strand guests far from sightseeing, Tallinn places a UNESCO medieval Old Town within a realistic walk for many passengers.",
        "Check the ship’s daily programme and terminal signage on arrival. Shuttle arrangements vary by line and berth; many guests walk directly toward Viru Gate and the Lower Town.",
        "Tallinn is an excellent base for a city day on foot. Kadriorg, countryside and Lahemaa are separate journeys requiring road time and different timing.",
      ],
    },
    {
      heading: "Walking from the port",
      paragraphs: [
        "From the main passenger terminals, follow signs toward the Old Town rather than wandering the working port.",
        "Allow roughly 15–25 minutes to reach the Old Town edge in normal conditions. Routes include urban pavements before cobbles begin; Toompea adds slopes.",
        "If mobility, weather or luggage are factors, take a short taxi instead of proving a point.",
      ],
    },
    {
      heading: "Tallinn Old Town highlights",
      paragraphs: [
        "Market Square anchors most Lower Town visits — allow time to absorb the atmosphere rather than a single exterior photograph.",
        "City walls and towers offer elevated outlooks; queues and stairs vary by season.",
        "Toompea Hill delivers the classic red-roof panorama and Alexander Nevsky Cathedral façades.",
      ],
    },
    {
      heading: "Food and Baltic flavour",
      paragraphs: [
        "Café culture and market flavours sit inside a walkable historic centre — you do not need a long transfer to eat well.",
        "Build lunch into your Old Town loop so you stay oriented toward the ship.",
        "A guided food experience helps if you want curated tastings; otherwise independent café hopping works well.",
      ],
    },
    {
      heading: "Transport beyond the Old Town",
      paragraphs: [
        "Taxis wait at or near the terminal when ships are in port. Show the driver the cruise terminal or your ship name for the return.",
        "Trams and local transport help toward districts such as Kadriorg, but cruise windows favour simple plans.",
        "Countryside and Lahemaa days need operators who plan backwards from all-aboard — a best-case journey time is not an adequate return plan.",
      ],
    },
    {
      heading: "A realistic independent city day",
      paragraphs: [
        "Start toward the Old Town before coach groups concentrate at Market Square.",
        "Climb Toompea for viewpoints, then spend the afternoon in lanes, walls or cafés without another long transfer.",
        "Keep the final hour ashore oriented toward the terminal so an unexpected queue does not threaten all-aboard.",
      ],
    },
    {
      heading: "Return-to-ship planning",
      paragraphs: [
        "Confirm all-aboard time — earlier than published departure. For a Tallinn city day, reach the terminal 60–90 minutes before all-aboard.",
        "For countryside or Lahemaa drives, the operator should plan with road traffic contingency.",
        "Independent travellers are responsible for reaching the ship. If a long road trip does not leave a conservative margin, choose the Old Town instead.",
      ],
    },
  ] as PortGuideSection[],
  faqs: [
    {
      question: "Can I walk into Tallinn from the cruise terminal?",
      answer:
        "Yes. Many passengers reach the Old Town within roughly 15–25 minutes on foot from the main passenger terminal area.",
    },
    {
      question: "What can I see close to Tallinn port?",
      answer:
        "The UNESCO Old Town, Market Square, city walls, Toompea viewpoints and café streets are all within a compact walking area for most guests.",
    },
    {
      question: "Do I need transport for Tallinn Old Town?",
      answer:
        "Usually not. It is walkable from many berths, though cobbles and gentle slopes may suit comfortable footwear.",
    },
    {
      question: "Is Lahemaa an easy independent trip from the port?",
      answer:
        "Rarely on a cruise day. Road time and return risk make an organised excursion the more realistic approach.",
    },
    {
      question: "How early should I be back?",
      answer:
        "Reach the terminal 60–90 minutes before all-aboard for a city day, with a larger road contingency for countryside or Lahemaa.",
    },
  ] as FAQ[],
};

export const terminals = portGuideContent.terminals;
export const portGuideSections = portGuideContent.sections;
export const portGuideFaqs = portGuideContent.faqs;
