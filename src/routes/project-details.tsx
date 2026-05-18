import { createFileRoute } from "@tanstack/react-router";
import { PageShell, TableCaption, Card } from "@/components/report";

export const Route = createFileRoute("/project-details")({
  head: () => ({
    meta: [
      { title: "Project Details — Modular Service Hubs" },
      {
        name: "description",
        content:
          "Context, design area, needs statement and significance for the Modular Service Hub project on Lama Lama Country.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="2 · Project Details" title="Project Details">
      <div className="not-prose">
        <h2></h2>
        <Card title="Context of Lama Lama Country">
          Lama Lama Country lies on eastern Cape York Peninsula in North Queensland and is
          surrounded by rough terrain and isolated landscapes, which is paired with intense wet and
          dry cycles (Engineers Without Borders Australia, 2026; Yintjingga Aboriginal Corporation,
          n.d.-a). During dry seasons, temperatures stay at 40 degrees with high humidity, while wet
          seasons cause constant flooding, rendering the main road inaccessible for six months
          (Queensland Government, 2019)
        </Card>
      </div>
      <h2></h2>
      <Card title="Needs Statement">
        Lama Lama rangers currently lack outstations in greater remote areas, which restricts their
        ability to asses and manage key sites within their region (Engineers Without Borders
        Australia, 2026; Yintjingga Aboriginal Corporation, n.d.-b). This leaves rangers having to
        travel long distances to monitor certain areas of land, which can leads to unproductive work
        and safety hazards. Providing outstations in remote areas, allows for shelter where rangers
        can stay and store certain materials without needs to drive back to their main location.
      </Card>
      <h2></h2>
      <Card title="Why the project is important">
        This project is significant for Lama Lama Country as it allows for rangers to effectively
        monitor land within their region. Rangers are able to monitor remote landscapes that are
        prone to environmental changes such as fire risks and flooding, enabling the opportunity to
        intervene before the hazard. Also, rangers are able to monitor wildlife and pests, ensuring
        the safety or the animals in Lama Lama Country.
      </Card>
      <h2>Significance to stakeholders</h2>
      <div className="not-prose grid gap-4 sm:grid-cols-2">
        <Card title="Lama Lama Community">
          The community will receive crucial information from rangers, regarding weather changes,
          like flooding and fire risks.
        </Card>
        <Card title="Lama Lama Rangers">
          Reliable outstations in remote areas which can allow them to effectively complete their
          work
        </Card>
        <Card title="YAC and partners">
          Supports governance, reporting, and partnerships with state and federal land management
          bodies.
        </Card>
        <Card title="Tourists">
          tourists are able to access the monitored information surrounding environment changes, to
          ensure safety when travelling to Lama Lama Country
        </Card>
      </div>
    </PageShell>
  );
}
