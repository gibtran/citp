import { createFileRoute } from "@tanstack/react-router";
import { PageShell, TableCaption } from "@/components/report";

export const Route = createFileRoute("/project-details")({
  head: () => ({
    meta: [
      { title: "Project Details — Modular Service Hubs" },
      { name: "description", content: "Context, design area, needs statement and significance for the Modular Service Hub project on Lama Lama Country." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="2 · Project Details" title="Project Details">
      <h2>Context of Lama Lama Country</h2>
      <p>
        Lama Lama Country lies on eastern Cape York Peninsula in Far North Queensland.
        The region is characterised by tropical wet and dry seasons, dispersed
        outstations and camps, and seasonally restricted vehicle access. The Lama Lama
        people, through Yintjingga Aboriginal Corporation (YAC) and the Lama Lama
        Rangers, manage Country across significant cultural, ecological, and freshwater
        landscapes.
      </p>

      <h2>Selected design area and project opportunity</h2>
      <p>
        This report addresses <strong>Design Area 1: Infrastructure and Access</strong>.
        The opportunity is to develop transportable, modular infrastructure that supports
        ranger operations and outstation use without large permanent buildings. A
        modular service hub can be deployed where it is most needed and relocated as
        priorities shift.
      </p>

      <h2>Needs statement</h2>
      <p>
        The Lama Lama Rangers and outstation users need durable, lockable, off-grid
        infrastructure that provides shelter, secure storage, basic power, and water at
        remote sites — so that they can work safely on Country, protect equipment, and
        maintain a presence at culturally and environmentally significant locations.
      </p>

      <h2>Why the project is important</h2>
      <p>
        Reliable remote infrastructure supports cultural continuity, ranger safety,
        environmental management, and economic independence. Without it, equipment is
        damaged or lost, ranger time is lost to repeated transport, and outstations are
        underused. A modular approach allows incremental, low-risk investment.
      </p>

      <h2>Summary</h2>
      <table>
        <tbody>
          <tr><th>Location</th><td>Lama Lama Country, Cape York Peninsula, QLD</td></tr>
          <tr><th>Partner</th><td>Lama Lama Rangers / Yintjingga Aboriginal Corporation</td></tr>
          <tr><th>Design Area</th><td>1 — Infrastructure and Access</td></tr>
          <tr><th>Primary users</th><td>Rangers, Traditional Owners, outstation visitors</td></tr>
          <tr><th>Project goal</th><td>Provide modular, durable, off-grid service hubs</td></tr>
        </tbody>
      </table>
      <TableCaption>Table 3: Project context summary.</TableCaption>
    </PageShell>
  );
}
