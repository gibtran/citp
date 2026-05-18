import { createFileRoute } from "@tanstack/react-router";
import { PageShell, TableCaption } from "@/components/report";

export const Route = createFileRoute("/problem-criteria")({
  head: () => ({
    meta: [
      { title: "Problem Description and Design Criteria" },
      {
        name: "description",
        content: "User needs statement and design criteria for the Modular Service Hub project.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="4 · Problem & Criteria" title="Problem Description and Design Criteria">
      <h2>User needs statement</h2>
      <p>
        The Lama Lama people and Rangers need a transportable and durable service hub that supports
        storage, rest, planning and fieldwork activities at remote outstations, so that they can
        work more effectively and safely (Engineers Without Borders Australia, 2026; Yintjingga
        Aboriginal Corporation, n.d.).
      </p>

      <h2>Problem and ideal future situation</h2>
      <p>
        Currently, Lama Lama Country lacks a reliable and accessible infrastructure that meets the
        necessary conditions to support Rangers (EWB, 2026). Furthermore, Lama Lama also faces harsh
        environmental conditions, including a tropical wet/dry climate, high UV exposure, and
        cyclonic weather events, highlighting the need for durable and low-maintenance
        infrastructure (Queensland Government, 2019). Ideally, we can build modular service hubs in
        Lama Lama Country, owned and maintained by the community, so that rangers and Traditional
        Owners can work more safely and effectively with less reliance on external services.
      </p>

      <h2>Design criteria</h2>
      <table>
        <thead>
          <tr>
            <th>Criteria</th>
            <th>Description</th>
            <th>Justification</th>
            <th>Community impact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cultural appropriateness</td>
            <td>Design respects Country, culture, and Traditional Owner guidance</td>
            <td>
              Aboriginal Country → Cultural and governance factors require early engagement with
              Traditional Owners and respect for community decision-making
            </td>
            <td>Supports cultural continuity and self-determination</td>
          </tr>
          <tr>
            <td>Durability</td>
            <td>The design can withstands tropical wet/dry climate, UV, and cyclonic exposure</td>
            <td>
              Remote sites are not easily having availablility of services; failures are costly
            </td>
            <td>Reduces maintenance difficulties for rangers</td>
          </tr>
          <tr>
            <td>Ease of transport &amp; installation</td>
            <td>
              The design can be transported to remote areas and assembled by a small crew using
              simple tools{" "}
            </td>
            <td>Remote conditions → require low-maintenance and practical logistics</td>
            <td>
              Reduces transport difficulty, installation delays, and reliance on specialist
              labour{" "}
            </td>
          </tr>
          <tr>
            <td>Maintainability</td>
            <td>
              The design uses standard and widely available materials that are easy to purchase,
              repair, and replace{" "}
            </td>
            <td>Standardised parts make maintenance easier when problems occur </td>
            <td>
              Supports long service life, independ from external resources, the community can
              perform basic checks and repairs themselves.{" "}
            </td>
          </tr>
          <tr>
            <td>Cost feasibility</td>
            <td>Per-unit cost suits available grant and program funding</td>
            <td>Funding is limited while many sites need support</td>
            <td>More units can be built if the design is cost-effective </td>
          </tr>
          <tr>
            <td>Environmental impact</td>
            <td>Low site disturbance; recyclable materials; off-grid services</td>
            <td>
              Lama Lama has cultural and ecological value, so construction that would have a major
              impact is unacceptable
            </td>
            <td>Helps protect Country for future generations </td>
          </tr>
        </tbody>
      </table>
      <TableCaption>Table 4: Design criteria.</TableCaption>
    </PageShell>
  );
}
