import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { CruisePlanner } from "@/components/CruisePlanner";

const path = "/cruise-planner";
const description =
  "Build a personalised Tallinn cruise plan. Enter your port times, party size, interests, mobility, budget and travel style for tailored medieval Tallinn recommendations.";

export const metadata = buildMetadata({
  title: "Tallinn Cruise Planner — medieval Tallinn Port Day Itinerary",
  description,
  path,
  keywords: ["Tallinn cruise planner", "medieval Tallinn cruise day plan", "Tallinn port day itinerary", "Toompea from Tallinn planner"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Tallinn Cruise Planner", path },
];

export default function CruisePlannerPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Tallinn Cruise Planner", description, path })]} />
      <PageHero
        title="Tallinn Cruise Planner"
        subtitle="Tell us your ship's hours ashore, who is travelling and what you enjoy — get editorial recommendations for the Old Town, Toompea, Tallinn Old Town and independent days."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <CruisePlanner />
        </div>
      </section>
    </>
  );
}
