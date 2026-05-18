import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Figure, TableCaption, Card, Placeholder } from "@/components/report";
import GeneralConcept from "../img/GeneralConcept.jpeg";

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
            <td>Modules, Ranger, Outstations, community, sustainable</td>
          </tr>
          <tr>
            <th>Community partners</th>
            <td>Lama Lama Rangers and Yintjingga Aboriginal Corporation (YAC)</td>
          </tr>
        </tbody>
      </table>

      <h2>Overview of design</h2>
      <div className="not-prose grid gap-4 sm:grid-cols-2">
        <Card title="Aim">
          These modular service hubs are used as outstations for rangers to complete their work in
          more remote areas
        </Card>
        <Card title="Who will use?">
          Rangers will be the main population using these modular service hubs, however other people
          within the community will be welcomed to use these units.
        </Card>
      </div>
      <p></p>
      <div className="not-prose">
        <Card title="General Information">
          The modular service hubs are all constructed from 2.5m x 2.5m panels, that can easily be
          assembled by all levels of construction skills. These panels are produced using a
          lightweight aluminum frame to reduce corrosion and increase durability. This is paired
          with some elements of locally-sourced timber to increase sustainability and cultural
          significance. Lastly, we included a small water tank on the side of each unit which allows
          for basic hygiene for rangers.
        </Card>
      </div>

  <figure className="my-8 text-center mx-auto max-w-3xl">
  <img
    src={GeneralConcept}
    alt="Concept render of the proposed Modular Service Hub on Lama Lama Country."
    className="w-full rounded-xl object-contain"
  />
  <figcaption className="mt-3 italic text-muted-foreground text-center">
    Figure 1: Concept render of the proposed Modular Service Hub on Lama Lama Country.
  </figcaption>
  </figure>
      <h2>Proposal summary</h2>
      <p>
        Our proposed solution is to create portable modular service hubs out of 2.5m x 2.5m panels
        that are easily transportable by vehicle and hand. Each unit acts as an outstation for
        rangers to complete their work so basic necessities such as lighting, storage and tools will
        be included. Also, we intend to have planned locations to where the units can be assembled
        to ensure for the best outcome.
      </p>

      <h2>Key considerations</h2>
      <div className="not-prose grid gap-4 sm:grid-cols-2">
        <Card title="Cultural appropriateness">
          We want our designs to be culturally appropriate for Lama Lama Country, so we intend to
          have ongoing conversations with their community to ensure our designs respect the values
          of Lama Lama people.
        </Card>
        <Card title="Community ownership">
          We aim to support the Lama Lama people throughout the implementation process of the
          modular service hubs for a minimum of two years, with the long-term plan of independent
          operation and the management of the Lama Lama people.
        </Card>
        <Card title="Durability">
          Our modular service hubs are primarily produced from aluminum which is a highly durable
          material that is suitable for Lama Lama Country. Aluminum thrives in hot climate due to
          its resistance to heat and corrosion. Additionally, aluminum also works well in wet
          conditions as it won't rot or degrade.
        </Card>
        <Card title="Sustainability">
          We also utilise locally-sourced timber within our designs to ensure sustainability in our
          modular service hubs. This allows issues with timber to be maintained independently
          through the Lama Lama community, without external reliance.
        </Card>
      </div>
    </PageShell>
  );
}
