import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/report";

export const Route = createFileRoute("/recommendations")({
  head: () => ({
    meta: [
      { title: "Recommendations" },
      { name: "description", content: "Recommended next steps for the Modular Service Hub project." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="12 · Recommendations" title="Recommendations">
      <p>The following next steps are recommended to progress the project responsibly:</p>
      <ol className="list-decimal pl-5">
        <li>Conduct further consultation with Traditional Owners and YAC to confirm scope, sites, and protocols.</li>
        <li>Field-test a single prototype unit through both wet and dry season conditions before scaled deployment.</li>
        <li>Obtain firm supplier quotes for the bill of materials and confirm freight logistics.</li>
        <li>Develop and deliver a maintenance training plan for the Lama Lama Rangers.</li>
        <li>Establish a long-term monitoring and evaluation framework with measurable indicators.</li>
        <li>Investigate funding pathways through Indigenous land management and infrastructure programs.</li>
      </ol>
    </PageShell>
  );
}
