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
        <span className="text-foreground text-base font-bold"> 1.4 Modular Service Hubs:</span>{" "}
        Create small infrastructure modules that add capacity at outstations, such as shade,
        storage, lighting and basic tools, without heavy construction.
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
            <th>Keywords</th>
            <td></td>
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
        Our proposed solution is to create portable modular service hubs out of 2.5m x 2.5m panels
        that are easily transportable by vehicle and hand. Each unit acts as an outstation for
        rangers to complete their work so basic necessities such as lighting, storage and tools will
        be included. Also, we intend to have planned locations to where the units can be assembled
        to ensure for the best outcome.
      </p>

      <h2>Overview of design</h2>
      <p>
        The modular service hubs are all constructed from 2.5m x 2.5m panels, that can easily be
        assembled by all levels of construction skills. These panels are produced using a
        lightweight aluminum frame to reduce corrosion and increase durability. This is paired with
        some elements of locally-sourced timber increase sustainability and cultural significance.
        Lastly, we included a small water tank of the side of each unit which allows for basic
        hygiene for rangers.
      </p>

      <h2>Key considerations</h2>
      <div className="not-prose grid gap-4 sm:grid-cols-2">
        <Card title="Cultural appropriateness">
         We want our designs to be culturally appropriate for Lama Lama Country, so we intend to have
          ongoing conversations with their community to ensure our designs respect the values of Lama
          Lama people.


          Designed consultation with Traditional Owners; respects Country and existing cultural
          protocols.
        </Card>
        <Card title="Community ownership">
          We aim to support the Lama Lama people throughout the implementation process of the modular
          service hubs for a minimum of two years, with the long-term plan of independent operation
          and the management of the Lama Lama people.
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
