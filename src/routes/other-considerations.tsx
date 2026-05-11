import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Figure } from "@/components/report";

export const Route = createFileRoute("/other-considerations")({
  head: () => ({
    meta: [
      { title: "Other Considerations" },
      { name: "description", content: "Cultural, environmental, and long-term considerations for the Modular Service Hub." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="11 · Other Considerations" title="Other Considerations">
      <h2>Cultural approval and governance</h2>
      <p>
        Deployment of any unit is subject to approval by Traditional Owners and YAC.
        Site selection, signage, and use protocols are determined by the community.
      </p>

      <h2>Environmental impact</h2>
      <p>
        The hub is designed for minimal site disturbance, recyclable materials, and
        off-grid services to limit ongoing environmental impact. Construction avoids
        materials with high embodied emissions where possible.
      </p>

      <h2>Seasonal access</h2>
      <p>
        Wet-season conditions limit road access for several months of the year.
        Maintenance and re-supply schedules are aligned with the dry season, and the
        hub is sized to be self-sufficient through the wet season.
      </p>

      <h2>Long-term maintenance</h2>
      <p>
        A documented maintenance plan covers solar, water, and structural inspection
        intervals. Spare parts are standardised across units to simplify stocking.
      </p>

      <h2>Community ownership</h2>
      <p>
        Hubs are owned by the community and operated by the Lama Lama Rangers. Training
        is delivered as part of installation to support independent operation.
      </p>

      <Figure caption="Figure 8: Journey map showing how rangers and Traditional Owners interact with the hub." />
    </PageShell>
  );
}
