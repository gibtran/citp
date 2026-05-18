import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/report";
import journeyMap from "../img/journey_map.png";

export const Route = createFileRoute("/other-considerations")({
  head: () => ({
    meta: [
      { title: "Other Considerations" },
      {
        name: "description",
        content:
          "Cultural, environmental, and long-term considerations for the Modular Service Hub.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="11 · Other Considerations" title="Other Considerations">
      <h2>Cultural approval and governance</h2>
      <p>
        Deployment of any unit is subject to approval by Traditional Owners and YAC. Site selection,
        signage, and use protocols are determined by the community (EWB Challenge, 2026; Yintjingga
        Aboriginal Corporation, n.d.).
      </p>

      <h2>Environmental impact</h2>
      <p>
        The hub is designed for minimal site disturbance, recyclable materials, and off-grid
        services to limit ongoing environmental impact. Construction avoids materials with high
        embodied emissions where possible.
      </p>

      <h2>Seasonal access</h2>
      <p>
        Wet-season conditions limit road access for several months of the year. Maintenance and
        re-supply schedules are aligned with the dry season, and the hub is sized to be
        self-sufficient through the wet season (EWB Challenge, 2026).
      </p>

      <h2>Long-term maintenance and sustainability</h2>
      <p>
        A documented maintenance plan covers water and structural inspection intervals. Spare parts
        are standardised across units to simplify stocking and handbooks with ideas and instructions
        for timber crafting are provided.
      </p>

      <h2>Community ownership</h2>
      <p>
        Hubs are owned by the community and operated by the Lama Lama Rangers. Training is delivered
        as part of installation to support independent operation.
      </p>

      <figure
        id={"journey_map"}
        style={{
          margin: "32px auto",
          textAlign: "center",
          maxWidth: "900px",
        }}
      >
        <img
          src={journeyMap}
          alt="Journey map showing how rangers and Traditional Owners interact with the hub."
          style={{
            width: "100%",
            display: "block",
            borderRadius: "12px",
            objectFit: "contain",
          }}
        />
        <figcaption
          style={{
            marginTop: "12px",
            fontStyle: "italic",
            color: "#555",
            textAlign: "center",
            width: "100%",
          }}
        >
          Figure 10: Journey map showing how rangers and Traditional Owners interact with the hub.
          <a href="/appendix-5-prompt-log#journey_map_prompt"> Source</a>
        </figcaption>
      </figure>
    </PageShell>
  );
}
