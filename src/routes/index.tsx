import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Figure, TableCaption, Card, Placeholder } from "@/components/report";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Executive Summary — Modular Service Hubs for Lama Lama Country" },
      { name: "description", content: "Executive summary of a modular service hub system designed to support remote outstations and Lama Lama Rangers." },
      { property: "og:title", content: "Modular Service Hubs for Lama Lama Country" },
      { property: "og:description", content: "EWB Challenge engineering design report — Design Area 1: Infrastructure and Access." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell
      eyebrow="1 · Executive Summary"
      title="Modular Service Hubs for Lama Lama Country"
      lead={undefined}
    >
      <h2>Design Area</h2>
      <p className="italic text-muted-foreground">
        <span className="text-foreground text-base font-bold"> 1.4 Modular Service Hubs:</span> Create small infrastructure modules that add capacity at outstations, such as shade, storage, lighting
        and basic tools, without heavy construction.
      </p>

      <Figure caption="Figure 1: Concept render of the proposed Modular Service Hub on Lama Lama Country." />

      <h2>Key Aspects</h2>
      <table>
        <tbody>
          <tr>
            <th>Project title</th>
            <td>Modular Service Hubs for Lama Lama Country</td>
          </tr>
          <tr>
            <th>Design Area</th>
            <td>Design Area 1.4 — Modular Service Hubs</td>
          </tr>
          <tr>
            <th>Community partners</th>
            <td>Lama Lama Rangers and Yintjingga Aboriginal Corporation (YAC)</td>
          </tr>
        </tbody>
      </table>
      <TableCaption>Table 1: Project snapshot.</TableCaption>

      <h2>Proposal summary</h2>
      <p>
        The proposed solution is a transportable, modular service hub built on a 2.5 m × 2.5 m
        footprint that can be deployed to outstations and ranger camps across Lama Lama Country.
        Each unit provides lockable storage for tools and equipment, a basic sheltered workspace and
        rest area, an off-grid solar power system, and rainwater storage. The design is intended to
        be culturally appropriate, low-maintenance, and sized for transport on existing access
        tracks.
      </p>

      <h2>Overview of design</h2>
      <p>
        The hub uses a lightweight aluminium frame with a raised floor, insulated roof, and
        weather-resistant cladding. Solar panels mounted on the roof feed a battery bank that powers
        lighting, charging points, and small ranger equipment. A side-mounted water tank captures
        roof runoff. Internal layout separates secure storage from an open rest/workspace zone.
        Modules can be combined or installed individually depending on site needs.
      </p>

      <h2>Key considerations</h2>
      <div className="not-prose grid gap-4 sm:grid-cols-2">
        <Card title="Cultural appropriateness">
          Designed consultation with Traditional Owners; respects Country and existing cultural
          protocols.
        </Card>
        <Card title="Community ownership">
          We aim to support the Lama Lama people with the implementation of the modular service hubs
          for a minimum three years, and eventually, after a couple years, we intend for the Lama
          Lama people to be fully
        </Card>
        <Card title="Durability">
          Suited to tropical wet/dry conditions, cyclonic exposure, and remote site access.
        </Card>
        <Card title="Sustainability"></Card>
      </div>

      <h2>Proposed materials and indicative cost</h2>
      <table>
        <thead>
          <tr>
            <th>Component</th>
            <th>Material</th>
            <th>Indicative cost (AUD)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Frame</td>
            <td>Marine-grade aluminium</td>
            <td>
              <Placeholder>$ TBC</Placeholder>
            </td>
          </tr>
          <tr>
            <td>Floor &amp; cladding</td>
            <td>Composite panel, treated ply</td>
            <td>
              <Placeholder>$ TBC</Placeholder>
            </td>
          </tr>
          <tr>
            <td>Roof &amp; insulation</td>
            <td>Colorbond, foil-faced insulation</td>
            <td>
              <Placeholder>$ TBC</Placeholder>
            </td>
          </tr>
          <tr>
            <td>Power system</td>
            <td>Solar PV + LiFePO₄ battery</td>
            <td>
              <Placeholder>$ TBC</Placeholder>
            </td>
          </tr>
          <tr>
            <td>Water system</td>
            <td>Poly tank + first-flush diverter</td>
            <td>
              <Placeholder>$ TBC</Placeholder>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <strong>Estimated total per unit</strong>
            </td>
            <td>
              <Placeholder>$ TBC AUD</Placeholder>
            </td>
          </tr>
        </tbody>
      </table>
      <TableCaption>Table 2: Indicative bill of materials and cost summary.</TableCaption>
    </PageShell>
  );
}
