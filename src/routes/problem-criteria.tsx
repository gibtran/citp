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
        The Lama Lama Rangers and outstation users need a transportable, weather-resistant facility
        that securely stores equipment, provides shelter for short rest periods and basic work.
      </p>

      <h2>Problem and ideal future situation</h2>
      <p>
        Currently, ranger work is constrained by the lack of secure, comfortable bases at priority
        sites. In the ideal future situation, modular service hubs are deployed across Lama Lama
        Country, owned and maintained by the community, allowing rangers and Traditional Owners to
        spend more productive time on Country with less reliance on external services.
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
            <td>Design respects Country, cultural protocols, and Traditional Owner guidance.</td>
            <td>Essential for community acceptance and ongoing use.</td>
            <td>Supports cultural continuity and self-determination.</td>
          </tr>
          <tr>
            <td>Durability</td>
            <td>Withstands tropical wet/dry climate, UV, and cyclonic exposure.</td>
            <td>Remote sites are not easily serviced; failures are costly.</td>
            <td>Reduces maintenance burden on rangers.</td>
          </tr>
          <tr>
            <td>Ease of transport &amp; installation</td>
            <td>Fits on existing tracks; assembled by a small crew with hand tools.</td>
            <td>Site access is restricted seasonally; heavy machinery is rare.</td>
            <td>Enables more sites to be served with the same resources.</td>
          </tr>
          <tr>
            <td>Maintainability</td>
            <td>Uses standard parts and locally serviceable systems.</td>
            <td>Specialised parts are slow and expensive to source.</td>
            <td>Supports long service life and local skills.</td>
          </tr>
          <tr>
            <td>Cost feasibility</td>
            <td>Per-unit cost suits available grant and program funding.</td>
            <td>Funding is limited; many sites need support.</td>
            <td>More units can be deployed across Country.</td>
          </tr>
          <tr>
            <td>Environmental impact</td>
            <td>Low site disturbance; recyclable materials; off-grid services.</td>
            <td>Sites are within sensitive cultural and ecological landscapes.</td>
            <td>Protects Country for future generations.</td>
          </tr>
        </tbody>
      </table>
      <TableCaption>Table 4: Design criteria.</TableCaption>
    </PageShell>
  );
}
