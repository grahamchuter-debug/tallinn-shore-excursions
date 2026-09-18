import type { GuidePage } from "./types";

export const experiencePages: GuidePage[] = [
  {
    slug: "walking-from-port",
    title: "Walking From The Cruise Port",
    seoTitle: "Walking From Tallinn Cruise Port to the Old Town",
    metaDescription:
      "How to walk from Tallinn cruise terminals into the medieval Old Town, typical timing, route tips and when a taxi is smarter.",
    tagline: "One of Europe’s easiest cruise ports to reach on foot — the medieval centre begins a short walk from the ship.",
    overview:
      "Tallinn’s passenger terminals sit on the edge of the city centre. Many guests reach Viru Gate, Market Square and the Lower Town within a walkable window, depending on berth and pace.",
    body: [
      "Follow terminal signage toward the Old Town rather than wandering the working port.",
      "Expect roughly 15–25 minutes for many berths at a steady pace; allow longer with children, mobility limits or peak crowds.",
      "If heat, luggage or limited mobility are factors, take a short taxi instead of proving a point.",
      "Always leave a buffer to re-clear terminal security before all-aboard.",
    ],
    highlights: [
      "Walkable for many berths",
      "Old Town close to passenger terminals",
      "Viru Gate as a visual anchor",
      "Taxi backup always available",
    ],
    tips: [
      "Wear shoes suited to cobbles and occasional slopes",
      "Mark the terminal entrance on your map before you explore",
      "Morning light on the rooftops is calmer than mid-afternoon crowds",
    ],
    faqs: [
      {
        question: "Do I need a tour to see Tallinn itself?",
        answer:
          "Not necessarily. A walking tour adds context; independent exploration works well when your call is flexible and you prefer your own pace.",
      },
      {
        question: "How long does the walk take?",
        answer:
          "Often around 15–25 minutes to the Old Town edge from the main passenger terminal area, depending on berth and route.",
      },
    ],
    recommendations: [
      {
        category: "best-independent",
        title: "Historic Tallinn & Old Town Highlights",
        description: "Guided context when you want stories without leaving the medieval core.",
        href: "/shore-excursions/historic-tallinn-old-town-highlights",
      },
    ],
    relatedSlugs: ["explore-independently", "old-town-guide", "cruise-tips"],
    imageKey: "walking",
    hubPath: "/guides",
  },
  {
    slug: "explore-independently",
    title: "Walk It Yourself",
    seoTitle: "Walk It Yourself | Independent Tallinn Old Town Walking Guide",
    metaDescription:
      "A cruise-friendly independent walking guide to Tallinn’s medieval Old Town — route, cafés, viewpoints and honest return-to-ship timing from the cruise port. Walk It Yourself.",
    tagline:
      "Tallinn’s UNESCO Old Town is close enough to explore on foot from the cruise terminals — often the finest day ashore of all.",
    overview:
      "If you have a clear head, comfortable shoes and a few hours ashore, Tallinn rewards independent exploration unusually well. The medieval Lower Town, Market Square and Toompea viewpoints sit a short walk from the passenger terminals. This guide helps you choose that honest option — without pretending a tour is always necessary.",
    body: [
      "Exit the passenger terminal and follow signage toward the Old Town — typically 15–25 minutes depending on berth and pace.",
      "Enter through Viru Gate, orient at Market Square, then wander quieter lanes before climbing to Toompea for the classic rooftop views.",
      "Save Kadriorg, countryside and Lahemaa for days when you book transport — the walkable core is richest at a human pace.",
      "Aim to be back at the terminal 60–90 minutes before all-aboard. Independent days fail only when the buffer is optimistic.",
    ],
    highlights: [
      "Old Town walkable from terminals",
      "Flexible pacing and café stops",
      "No transfer required for core sights",
      "Generous return buffer still essential",
    ],
    tips: [
      "Confirm your all-aboard time before you leave the terminal — then plan backwards",
      "Wear shoes for cobbles; the Toompea climb is gentle but real",
      "Do not cut the return to terminal fine",
    ],
    faqs: [
      {
        question: "Is Tallinn safe to explore independently?",
        answer:
          "The terminal-to-Old-Town area is generally straightforward for cruise visitors using normal city awareness. Crowds thicken around Viru Gate and the square when several ships are in.",
      },
      {
        question: "When should I book an excursion instead?",
        answer:
          "When you want guided historical narrative, limited-mobility support, Kadriorg, countryside or Lahemaa — or simply prefer a structured day. Historic Tallinn & Old Town Highlights is the natural next step when a walk alone is not quite enough.",
      },
    ],
    recommendations: [
      {
        category: "editors-choice",
        title: "Historic Tallinn & Old Town Highlights",
        description:
          "When a self-guided loop is not quite enough — deeper context with free time afterwards.",
        href: "/shore-excursions/historic-tallinn-old-town-highlights",
      },
    ],
    relatedSlugs: ["walking-from-port", "one-day-in-tallinn", "best-viewpoints"],
    imageKey: "walking",
    hubPath: "/guides",
    independentWalk: {
      eyebrow: "Free self-guided route",
      idealFor: [
        "Cruise passengers with 4+ hours ashore",
        "First-time visitors who enjoy walking at their own pace",
        "Photographers and café explorers",
        "Guests who already know the Old Town highlights",
      ],
      duration: "2.5–4 hours",
      distance: "Approximately 3–5 km",
      difficulty: "Easy to moderate — cobbles and a gentle climb to Toompea",
      bestFor: [
        "Independent explorers",
        "Families comfortable with cobblestones",
        "Anyone who prefers café pauses over a fixed itinerary",
      ],
      familyFriendly: true,
      wheelchairFriendly: false,
      recommendedReturnBuffer:
        "Aim to be back at the terminal 60–90 minutes before all-aboard. Independent days fail only when the buffer is optimistic.",
      route: [
        {
          number: 1,
          title: "Cruise terminal to the city walls",
          description:
            "Exit the passenger terminal area and follow clear signage toward the Old Town. The walk is typically 15–25 minutes depending on berth, pace and route. You will feel the medieval skyline before you reach the gates.",
          durationMinutes: 20,
          tip: "Confirm your all-aboard time before you leave the terminal — then plan backwards.",
        },
        {
          number: 2,
          title: "Viru Gate and the Lower Town",
          description:
            "Enter through the iconic Viru Gate towers and drift into the Lower Town’s lanes. Let the first streets be about orientation rather than photographs — the crowds thin a few turns off the main approach.",
          durationMinutes: 25,
          tip: "If Viru Street feels packed, peel into a parallel lane and rejoin closer to the square.",
        },
        {
          number: 3,
          title: "Town Hall Square (Raekoja plats)",
          description:
            "Tallinn’s Market Square is the heart of the medieval city — Town Hall, painted façades and a natural pause for people-watching. Take the classic photograph, then move on before the square becomes your entire day.",
          durationMinutes: 25,
          tip: "Morning light is kinder; midday can feel busiest when several ships are in.",
        },
        {
          number: 4,
          title: "St. Catherine’s Passage & quieter lanes",
          description:
            "Seek out St. Catherine’s Passage and the artisan workshops, then wander the quieter streets toward the city walls. This is where Tallinn feels lived-in rather than performed.",
          durationMinutes: 30,
        },
        {
          number: 5,
          title: "Toompea Hill viewpoints",
          description:
            "Climb gently to Toompea for the classic red-rooftop panoramas and a look at Alexander Nevsky Cathedral and the surrounding Upper Town. The views are the reward; you do not need every church interior.",
          durationMinutes: 40,
          tip: "Kohtuotsa and Patkuli viewing platforms are the usual favourites — arrive patiently if coach groups are rotating through.",
        },
        {
          number: 6,
          title: "Café pause, then loop toward the ship",
          description:
            "Descend toward a local café or bakery before tracing your way back to the terminals. Keep an eye on time once you leave Toompea — the walk back is straightforward, but cobbles slow tired legs.",
          durationMinutes: 35,
        },
      ],
      dontMiss: [
        {
          category: "Best viewpoints",
          title: "Kohtuotsa viewing platform",
          description:
            "The classic postcard of red roofs and church spires. Worth the short climb even if you skip every museum.",
        },
        {
          category: "Best viewpoints",
          title: "Patkuli viewing platform",
          description:
            "A slightly different angle over the Lower Town and harbour — useful when Kohtuotsa is crowded.",
        },
        {
          category: "Hidden streets",
          title: "St. Catherine’s Passage",
          description:
            "A narrow medieval corridor with craft workshops — atmospheric without needing a ticketed attraction.",
        },
        {
          category: "Hidden streets",
          title: "Lanes off Viru and Vene",
          description:
            "A few turns away from the main tourist flow, Tallinn still feels residential and calm.",
        },
        {
          category: "Architecture",
          title: "Town Hall and square façades",
          description:
            "Gothic Town Hall and the painted merchant houses that define Tallinn’s Hanseatic character.",
        },
        {
          category: "Architecture",
          title: "Alexander Nevsky Cathedral",
          description:
            "Onion domes on Toompea — striking from outside even if you do not join an interior visit.",
        },
        {
          category: "Photo spots",
          title: "Viru Gate towers",
          description:
            "The twin towers frame the Old Town arrival beautifully — step back for the wider shot.",
        },
        {
          category: "Photo spots",
          title: "City wall towers",
          description:
            "Sections of wall and defensive towers photograph well in softer late-morning or afternoon light.",
        },
        {
          category: "Markets & museums",
          title: "Town Hall Square atmosphere",
          description:
            "Seasonal markets and terrace life come to the square — enjoyable even without a shopping mission.",
        },
        {
          category: "Churches",
          title: "St. Olaf’s and Lower Town churches",
          description:
            "Choose one interior if time allows; otherwise enjoy the spires as part of the skyline walk.",
        },
      ],
      coffeeStops: [
        {
          name: "Café Maiasmokk",
          description:
            "Tallinn’s historic confectionery near the Old Town — a classic stop for coffee and cakes with real local pedigree rather than a generic square-front menu.",
          specialty: "Coffee, cakes and confectionery",
          nearStop: "Near Town Hall Square / Lower Town",
        },
        {
          name: "A quiet bakery lane stop",
          description:
            "If Maiasmokk is busy, step one street off the square and choose a small bakery or café where Estonians are actually queuing. Look for fresh pastries and a calmer room — quality over terrace frontage.",
          specialty: "Pastries and a short pause",
          nearStop: "Lower Town lanes near the square",
        },
      ],
      localTips: [
        {
          label: "Public toilets",
          detail:
            "Use terminal facilities before you leave. In the Old Town, cafés, shopping streets and some museums are the practical options — carry a little cash or card readiness.",
        },
        {
          label: "Cash / card",
          detail:
            "Cards are widely accepted in Tallinn. A little cash still helps for small bakeries or market stalls.",
        },
        {
          label: "Water",
          detail:
            "Bring a bottle from the ship. You can restock at cafés and small shops around the square without a long detour.",
        },
        {
          label: "Wi-Fi",
          detail:
            "Ship Wi-Fi fades once you leave the terminal. Cafés and many public spots offer connection if you need a quick schedule check.",
        },
        {
          label: "Safety",
          detail:
            "Tallinn’s Old Town is generally comfortable by day. Use normal city awareness in crowds around Viru Gate and the square.",
        },
        {
          label: "Accessibility",
          detail:
            "Cobblestones, thresholds and the Toompea climb limit wheelchair and limited-mobility access. Stay in the flatter Lower Town if steps are a concern.",
        },
        {
          label: "Best time to walk",
          detail:
            "Earlier morning feels magical and quieter. Midday brings ship crowds. Late afternoon light on the rooftops is excellent if your all-aboard allows.",
        },
      ],
      backToShip: {
        latestDeparture:
          "Leave Toompea or your furthest café stop early enough for the walk back plus your personal buffer — do not cut it fine from the viewpoints.",
        walkingTime:
          "Budget 20–35 minutes from the Old Town / Toompea area back to the passenger terminals, depending on pace, crowds and exact berth.",
        taxiAlternative:
          "Taxis and rideshares are available around the city edge and near major hotels if legs tire or weather turns — agree the cruise terminal clearly.",
        safetyMargin:
          "Aim to be back at the terminal 60–90 minutes before all-aboard. Independent days fail only when the buffer is optimistic.",
        notes:
          "If multiple ships are in port, allow extra time through Viru Gate and the approach roads. Comfortable shoes matter more than any packing tip.",
      },
      exploreFurther: {
        excursionSlug: "historic-tallinn-old-town-highlights",
        title: "Want more than a self-guided loop?",
        body: "If you'd like to experience more than a self-guided loop through the historic centre — deeper context, or places beyond comfortable walking distance — our Editor's Choice excursion, Historic Tallinn & Old Town Highlights, is the natural next step. It is never required; it is simply the day we recommend when a walk alone is not quite enough.",
        href: "/shore-excursions/historic-tallinn-old-town-highlights",
        ctaLabel: "Read about Editor’s Choice",
      },
    },
  },
  {
    slug: "old-town-guide",
    title: "Tallinn Old Town Guide",
    seoTitle: "Tallinn Old Town Guide for Cruise Passengers",
    metaDescription:
      "Cruise guide to Tallinn’s UNESCO Old Town — Market Square, city walls, Lower Town lanes and how to enjoy Europe’s best-preserved medieval centre.",
    tagline: "A living medieval city of red rooftops, towers and cobbled lanes.",
    overview:
      "Tallinn’s Old Town is the reason most cruise ships call. It is compact, atmospheric and rich enough to fill a day — or simply a few unhurried hours.",
    body: [
      "The Lower Town centres on Market Square; the Upper Town on Toompea. Both reward slow walking more than a stressed checklist.",
      "City walls and towers offer viewpoints; queues and steps vary by season.",
      "You can explore independently or join a guided highlights tour for historical context.",
    ],
    highlights: [
      "UNESCO medieval core",
      "Market Square atmosphere",
      "City walls and towers",
      "Walkable from the cruise port",
    ],
    tips: [
      "Visit key viewpoints early if you want clearer photographs",
      "Cobbles are uneven — choose footwear carefully",
    ],
    faqs: [
      {
        question: "How much time do I need in the Old Town?",
        answer:
          "Two to four hours covers highlights without rushing. A full day lets you add Toompea, cafés and wall walks.",
      },
    ],
    relatedSlugs: ["toompea-hill", "best-viewpoints", "walking-from-port"],
    imageKey: "historic",
    hubPath: "/guides",
  },
  {
    slug: "toompea-hill",
    title: "Toompea Hill Guide",
    seoTitle: "Toompea Hill Guide — Tallinn Upper Town for Cruise Guests",
    metaDescription:
      "Visit Toompea Hill from Tallinn cruise port: Upper Town viewpoints, cathedral façades, walking tips and timing advice. Practical cruise-day timing, walking…",
    tagline: "The ridge above the Lower Town — viewpoints, cathedrals and quieter lanes.",
    overview:
      "Toompea crowns Tallinn. Climb for rooftop panoramas, cathedral façades and a calmer Upper Town atmosphere.",
    body: [
      "Expect slopes and cobbles on the ascent.",
      "Alexander Nevsky Cathedral and neighbouring landmarks define the hilltop skyline.",
      "Pair Toompea with Lower Town time rather than rushing both as a checklist.",
    ],
    highlights: [
      "Classic rooftop viewpoints",
      "Upper Town architecture",
      "Quieter than Market Square peaks",
      "Photogenic spires and red roofs",
    ],
    tips: [
      "Allow time for the climb and descent",
      "Breezes are stronger on open viewpoints",
    ],
    faqs: [
      {
        question: "Is Toompea hard to walk?",
        answer:
          "Moderate for most visitors. Limited-mobility guests may prefer a panoramic tour format with fewer continuous slopes.",
      },
    ],
    relatedSlugs: ["alexander-nevsky-cathedral", "best-viewpoints", "old-town-guide"],
    imageKey: "historic",
    hubPath: "/guides",
  },
  {
    slug: "alexander-nevsky-cathedral",
    title: "Alexander Nevsky Cathedral",
    seoTitle: "Alexander Nevsky Cathedral Tallinn — Cruise Visitor Guide",
    metaDescription:
      "Alexander Nevsky Cathedral on Toompea Hill — onion domes, viewing tips and how to include it in a Tallinn cruise day. Practical cruise-day timing, walking…",
    tagline: "Onion domes above the medieval roofs — Tallinn’s most recognisable hilltop silhouette.",
    overview:
      "Alexander Nevsky Cathedral is one of Tallinn’s most photographed landmarks. Even from the exterior, its domes frame the Upper Town skyline.",
    body: [
      "Interior access depends on opening times and services — façade and viewpoint time is always the reliable plan.",
      "Combine with Toompea viewpoints rather than treating the cathedral as a drive-by stop.",
      "Respect active worship if you enter.",
    ],
    highlights: [
      "Iconic Toompea landmark",
      "Strong exterior photography",
      "Pairs with Upper Town walks",
      "Close to classic viewpoints",
    ],
    tips: [
      "Check dress expectations if entering",
      "Morning light flatters the domes",
    ],
    faqs: [
      {
        question: "Do I need a tour to see the cathedral?",
        answer:
          "No. Independent visitors reach Toompea easily. A guided Toompea tour adds architectural and historical context.",
      },
    ],
    relatedSlugs: ["toompea-hill", "old-town-guide", "best-viewpoints"],
    imageKey: "historic",
    hubPath: "/guides",
  },
  {
    slug: "kadriorg-palace",
    title: "Kadriorg Palace",
    seoTitle: "Kadriorg Palace from Tallinn Cruise Port",
    metaDescription:
      "Kadriorg Palace and gardens for Tallinn cruise passengers — how far from the Old Town, timing tips and when a guided visit helps.",
    tagline: "Baroque gardens and palace elegance beyond the medieval walls.",
    overview:
      "Kadriorg is Tallinn’s graceful counterpoint to the Old Town: formal gardens, a baroque palace and open parkland.",
    body: [
      "It sits beyond an easy Old Town stroll for many guests — tram, taxi or organised transport keeps timing simple.",
      "Gardens are often as memorable as the palace exterior.",
      "On short calls, prioritise the Old Town first.",
    ],
    highlights: [
      "Baroque palace setting",
      "Formal gardens and park paths",
      "Family-friendly open space",
      "Contrast with medieval Tallinn",
    ],
    tips: [
      "Do not attempt Old Town depth and Kadriorg on a short call",
      "Wear comfortable shoes for park walking",
    ],
    faqs: [
      {
        question: "Is Kadriorg worth it on a cruise day?",
        answer:
          "Yes when you have half a day or more after Old Town priorities, or when gardens matter more than another medieval lane.",
      },
    ],
    relatedSlugs: ["one-day-in-tallinn", "explore-independently", "old-town-guide"],
    imageKey: "private",
    hubPath: "/guides",
  },
  {
    slug: "food-guide",
    title: "Tallinn Food Guide",
    seoTitle: "Tallinn Food Guide for Cruise Passengers",
    metaDescription:
      "What to eat in Tallinn on a cruise day — market flavours, café culture and how to taste the city without missing the ship.",
    tagline: "Baltic flavours inside a walkable medieval centre.",
    overview:
      "You can eat well without leaving the Old Town hinterland. Markets, cafés and restaurants sit close enough to protect a cruise return buffer.",
    body: [
      "Build lunch into your Old Town loop rather than treating food as an afterthought.",
      "A guided food experience helps if you want curated tastings; otherwise independent café hopping works well.",
      "Mention allergies early if joining a tasting tour.",
    ],
    highlights: [
      "Walkable dining near the centre",
      "Market and café culture",
      "Easy to combine with sightseeing",
      "Protects return-to-ship timing",
    ],
    tips: [
      "Avoid overlong restaurant sittings close to all-aboard",
      "Cash and cards are both widely useful — confirm on the day",
    ],
    faqs: [
      {
        question: "Should I book a food tour?",
        answer:
          "Book when you want curated tastings and commentary. Explore independently when you prefer choosing cafés as you go.",
      },
    ],
    relatedSlugs: ["explore-independently", "old-town-guide", "one-day-in-tallinn"],
    imageKey: "food",
    hubPath: "/guides",
  },
  {
    slug: "best-viewpoints",
    title: "Best Viewpoints",
    seoTitle: "Best Viewpoints in Tallinn for Cruise Visitors",
    metaDescription:
      "Best Tallinn viewpoints for cruise passengers — Toompea panoramas, tower outlooks and rooftop angles over the medieval Old Town.",
    tagline: "Red rooftops, church spires and the classic Tallinn skyline.",
    overview:
      "Tallinn is a viewpoint city. The best photographs usually come from Toompea terraces and selected towers rather than street level alone.",
    body: [
      "Arrive early for clearer light and fewer shoulders at popular terraces.",
      "Tower climbs involve stairs and sometimes queues — budget time honestly.",
      "A panoramic tour helps guests who want viewpoints with less continuous walking.",
    ],
    highlights: [
      "Toompea terraces",
      "Tower outlooks",
      "Red-roof skyline",
      "Strong morning light",
    ],
    tips: [
      "Keep phones and cameras secured on windy terraces",
      "Do not sacrifice your ship buffer for one more panorama",
    ],
    faqs: [
      {
        question: "What is the single best viewpoint?",
        answer:
          "Toompea terraces overlooking the Lower Town are the classic cruise-day choice for most visitors.",
      },
    ],
    relatedSlugs: ["toompea-hill", "old-town-guide", "alexander-nevsky-cathedral"],
    imageKey: "photography",
    hubPath: "/guides",
  },
  {
    slug: "one-day-in-tallinn",
    title: "One Day In Tallinn",
    seoTitle: "One Day in Tallinn from a Cruise Ship",
    metaDescription:
      "How to spend one day in Tallinn on a cruise: Old Town, Toompea, food, timing and when to stay independent versus book a tour.",
    tagline: "A realistic cruise-day plan for medieval Tallinn — without pretending you can see all of Estonia.",
    overview:
      "One day in Tallinn is enough for a memorable medieval core. It is not enough for Old Town depth, Kadriorg, countryside and Lahemaa. Choose a priority.",
    body: [
      "Morning: walk from port into the Lower Town and Market Square.",
      "Late morning: climb Toompea for viewpoints and cathedral façades.",
      "Afternoon: café time, walls or a short guided highlights tour — then return with a buffer.",
      "Leave Lahemaa and long countryside days for fuller calls only.",
    ],
    highlights: [
      "Old Town first",
      "Toompea viewpoints",
      "Café buffer time",
      "Honest scope for one call",
    ],
    tips: [
      "Pick one beyond-city option at most — never three",
      "Confirm all-aboard before you leave the terminal",
    ],
    faqs: [
      {
        question: "Is one day enough?",
        answer:
          "Yes for the Old Town and Toompea. No for a full Estonia circuit. Match ambition to hours ashore.",
      },
    ],
    relatedSlugs: ["explore-independently", "cruise-tips", "tour-or-independent"],
    imageKey: "historic",
    hubPath: "/guides",
  },
  {
    slug: "cruise-tips",
    title: "Tallinn Cruise Tips",
    seoTitle: "Tallinn Cruise Tips — Port Day Advice",
    metaDescription:
      "Practical Tallinn cruise tips: walking from port, weather, money, timing, mobility and how to protect your return to the ship.",
    tagline: "Practical advice for a composed Tallinn port day.",
    overview:
      "Tallinn is welcoming and walkable, but cobbles, weather and all-aboard timing still decide whether the day feels elegant or stressed.",
    body: [
      "Plan from all-aboard, not published departure.",
      "Wear shoes for cobbles; carry a light layer for breezy viewpoints.",
      "Independent exploration is realistic; organised tours help with narrative and beyond-city logistics.",
    ],
    highlights: [
      "All-aboard first",
      "Cobble-ready footwear",
      "Walkable Old Town",
      "Taxi backup for mobility",
    ],
    tips: [
      "Screenshot offline maps",
      "Keep a Plan B if rain arrives",
    ],
    faqs: [
      {
        question: "What should I pack for a Tallinn shore day?",
        answer:
          "Comfortable walking shoes, a light layer, water, and offline confirmation of your all-aboard time.",
      },
    ],
    relatedSlugs: ["cruise-faq", "walking-from-port", "explore-independently"],
    imageKey: "port",
    hubPath: "/guides",
  },
  {
    slug: "cruise-faq",
    title: "Tallinn Cruise FAQ",
    seoTitle: "Tallinn Cruise FAQ — Shore Day Questions Answered",
    metaDescription:
      "Tallinn cruise FAQ: Can I explore without a tour? How far is the Old Town? How much walking? Is Tallinn suitable for limited mobility?",
    tagline: "Straight answers for cruise passengers planning Tallinn.",
    overview:
      "These are the questions we hear most often from guests deciding between independence and an organised Tallinn day.",
    body: [
      "Tallinn is unusually easy to explore without an excursion — that honesty is intentional.",
      "Tours still help for history, mobility support and destinations beyond the walls.",
      "Never trade your return buffer for one more stop.",
    ],
    highlights: [
      "Independent exploration is viable",
      "Old Town is walkable for many",
      "Tours add context and reach",
      "Mobility needs planning",
    ],
    tips: [
      "Read walking-from-port before you decide",
      "Compare tour vs independent honestly",
    ],
    faqs: [
      {
        question: "Can I explore Tallinn without an excursion?",
        answer:
          "Yes. Many visitors walk into the Old Town independently and have an excellent day.",
      },
      {
        question: "How far is the Old Town from the cruise port?",
        answer:
          "Often around 15–25 minutes on foot from the passenger terminal area, depending on berth and pace.",
      },
      {
        question: "Should I book a tour?",
        answer:
          "Book for historical narrative, structured pacing, limited mobility support, or days beyond the Old Town. Skip if you prefer flexible wandering.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "Cobblestones and gentle slopes are normal in the Old Town and on Toompea. Panoramic formats reduce continuous walking.",
      },
      {
        question: "Is Tallinn suitable for limited mobility?",
        answer:
          "Parts are challenging because of cobbles and slopes. Ask about panoramic or transport-assisted options and consider a taxi from the terminal.",
      },
      {
        question: "How much free time should I allow?",
        answer:
          "Protect 60–90 minutes before all-aboard after you finish sightseeing. Longer countryside days need the larger buffer.",
      },
    ],
    relatedSlugs: ["cruise-tips", "explore-independently", "walking-from-port"],
    imageKey: "compare",
    hubPath: "/guides",
  },
];

export function getExperienceBySlug(slug: string): GuidePage | undefined {
  return experiencePages.find((p) => p.slug === slug);
}

export function getAllExperienceSlugs(): string[] {
  return experiencePages.map((p) => p.slug);
}
