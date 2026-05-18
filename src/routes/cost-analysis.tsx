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
          <tr><td>Aluminium Panel</td><td><Placeholder>6</Placeholder></td><td><Placeholder>$500</Placeholder></td><td><Placeholder>$3,000</Placeholder></td><td>https://steelmart.com.au/products/aluminium-sheet?variant=45236291895452</td></tr><tr><td>Labour</td><td><Placeholder>6</Placeholder></td><td><Placeholder>$50</Placeholder></td><td><Placeholder>$300</Placeholder></td><td>https://steelmart.com.au/products/aluminium-sheet?variant=45236291895452</td></tr><tr><td>Transportation</td><td><Placeholder>1</Placeholder></td><td><Placeholder>$1,500</Placeholder></td><td><Placeholder>$1,500</Placeholder></td><td>https://omegacargo.com.au/container-shipping-cost-and-rates-in-australia/</td></tr><tr><td>Training Per Person</td><td><Placeholder>20</Placeholder></td><td><Placeholder>$375</Placeholder></td><td><Placeholder>$7,500</Placeholder></td><td>https://www.affordabletraining.com.au/courses-brisbane/</td></tr>
        </tbody>
      </table>
      <TableCaption>Table 9: Bill of materials.</TableCaption>


      <h2>Panels</h2>
      <p>The cost of a 1m² 1.5mm aluminum panel is $80 and the panels used within our design are 6.25m² which costs $500 each therefore the total cost of $3,000.</p>
      <h2>Labour</h2>
      <p>The cost of labour for each of the panels is $50 therefore the total cost to cut each of the panels to the required format is $300.</p>
      <h2>Shipping</h2>
      <p>The total cost to ship a single hub from Sydney to north Queensland will cost $1,500.</p>
      <h2>Training</h2>
      <p>The total cost to train 20 rangers is $7,500 as each is cost $375 to train per person; however, this cost could increase or decrease depending on how many rangers are operating at the time.</p>
      <h2>Funding</h2>
      <p>Due to the scope of the project some additional funding may be necessary in order for the solution to be carried out which may be beyond what the Lama Lama people are able to provide. Therefore, a government scheme such as the Northern Australia Infrastructure Facility (NAIF) Act (2016) would assist with any funding requirements as they provide finance to projects being developed within northern parts of Australia. As stated within the 2026-27 Australian Federal Budget (2026, p. 488) under section 2.1 for NAIF within the budget $4 billion has been provided to fund projects that are in parts of northern Australia.</p>
    </PageShell>
  );
}
