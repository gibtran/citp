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
          <tr><th>Iem</th><th>Quantity</th><th>Est. unit cost (AUD)</th><th>Total (AUD)</th><th>Source / assumption</th></tr>
        </thead>
        <tbody>
          <tr><td>Aluminium Panel</td><td><Placeholder>$600</Placeholder></td><td><Placeholder>$2,400</Placeholder></td><td><Placeholder>$ TBC</Placeholder></td><td>Local supplier quote</td></tr>
          <tr><td>Composite floor panel</td><td><Placeholder>TBC</Placeholder></td><td><Placeholder>$ TBC</Placeholder></td><td><Placeholder>$ TBC</Placeholder></td><td>Manufacturer estimate</td></tr>
          <tr><td>Roof panels &amp; insulation</td><td><Placeholder>TBC</Placeholder></td><td><Placeholder>$ TBC</Placeholder></td><td><Placeholder>$ TBC</Placeholder></td><td>Industry pricing</td></tr>
          <tr><td>Solar PV (≈400 W)</td><td>2</td><td><Placeholder>$ TBC</Placeholder></td><td><Placeholder>$ TBC</Placeholder></td><td>Off-grid solar supplier</td></tr>
          <tr><td>Battery (LiFePO₄)</td><td>1</td><td><Placeholder>$ TBC</Placeholder></td><td><Placeholder>$ TBC</Placeholder></td><td>Off-grid solar supplier</td></tr>
          <tr><td>Inverter / charge controller</td><td>1</td><td><Placeholder>$ TBC</Placeholder></td><td><Placeholder>$ TBC</Placeholder></td><td>Off-grid solar supplier</td></tr>
          <tr><td>Water tank (poly)</td><td>1</td><td><Placeholder>$ TBC</Placeholder></td><td><Placeholder>$ TBC</Placeholder></td><td>Local supplier</td></tr>
          <tr><td>Locks, fasteners, fittings</td><td><Placeholder>TBC</Placeholder></td><td><Placeholder>$ TBC</Placeholder></td><td><Placeholder>$ TBC</Placeholder></td><td>Hardware supplier</td></tr>
          <tr><td colSpan={3}><strong>Materials subtotal</strong></td><td><Placeholder>$ TBC</Placeholder></td><td>—</td></tr>
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
