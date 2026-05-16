import { createFileRoute } from "@tanstack/react-router";
import { PageShell, TableCaption, Placeholder } from "@/components/report";

export const Route = createFileRoute("/cost-analysis")({
  head: () => ({
    meta: [
      { title: "Cost Analysis" },
      { name: "description", content: "Bill of materials, labour, transport, maintenance and end-of-life cost analysis for the Modular Service Hub." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="10 · Cost Analysis" title="Cost Analysis">
      <h2>Bill of materials</h2>
      <table>
        <thead>
          <tr><th>Item</th><th>Quantity</th><th>Est. unit cost (AUD)</th><th>Total (AUD)</th><th>Source / assumption</th></tr>
        </thead>
        <tbody>
          <tr><td>Aluminium Panel</td><td><Placeholder>6</Placeholder></td><td><Placeholder>$400</Placeholder></td><td><Placeholder>$2,400</Placeholder></td><td>https://steelmart.com.au/products/aluminium-sheet?variant=45236291895452</td></tr><tr><td>Labour</td><td><Placeholder>6</Placeholder></td><td><Placeholder>$50</Placeholder></td><td><Placeholder>$300</Placeholder></td><td>https://steelmart.com.au/products/aluminium-sheet?variant=45236291895452</td></tr><tr><td>Transportation</td><td><Placeholder>1</Placeholder></td><td><Placeholder>$1,500</Placeholder></td><td><Placeholder>$1,500</Placeholder></td><td>https://omegacargo.com.au/container-shipping-cost-and-rates-in-australia/</td></tr><tr><td>Training Per Person</td><td><Placeholder>20</Placeholder></td><td><Placeholder>$375</Placeholder></td><td><Placeholder>$7,500</Placeholder></td><td>https://www.affordabletraining.com.au/courses-brisbane/</td></tr>
        </tbody>
      </table>
      <TableCaption>Table 9: Bill of materials.</TableCaption>

      <h2>Labour and transport</h2>
      <p>
        Estimated labour: pre-fabrication at <Placeholder>X person-days</Placeholder> and
        on-site assembly at <Placeholder>Y person-days</Placeholder>. Transport assumes
        a single 4WD trailer trip from the regional supply point to the pilot site,
        with an allowance for wet-season contingency.
      </p>

      <h2>Maintenance costs</h2>
      <p>
        Annual maintenance is estimated at <Placeholder>$ TBC</Placeholder> per unit,
        covering battery checks, fastener inspection, water system flushing, and roof
        cleaning.
      </p>

      <h2>End-of-life and disposal</h2>
      <p>
        The aluminium frame and metal roofing are recyclable. Battery disposal will
        follow manufacturer take-back where available. Composite panels are designed
        for long service life with later refurbishment.
      </p>

      <h2>Estimated total cost</h2>
      <p>
        Indicative total cost per unit (materials + labour + transport):
        <Placeholder> $ TBC AUD</Placeholder>.
      </p>

      <h2>Possible funding / grant support</h2>
      <p>
        Potential funding pathways include Indigenous land management programs, regional
        infrastructure grants, and partner contributions. <Placeholder>[Funding source placeholder]</Placeholder>
      </p>
    </PageShell>
  );
}
