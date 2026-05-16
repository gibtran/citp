import { createFileRoute } from "@tanstack/react-router";
import { PageShell, TableCaption } from "@/components/report";

export const Route = createFileRoute("/implementation")({
  head: () => ({
    meta: [
      { title: "Implementation Plan" },
      { name: "description", content: "Stage-by-stage implementation plan and responsibility matrix for the Modular Service Hub project." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="9 · Implementation Plan" title="Implementation Plan">
      <p>
        Implementation is staged to centre community decision-making, manage seasonal
        access, and validate the design before scaled deployment.
      </p>

      <h2>Timeline</h2>
      <table>
        <thead>
          <tr><th>Stage</th><th>Activities</th><th>Indicative timing</th></tr>
        </thead>
        <tbody>
          <tr><td>1. Community consultation &amp; cultural approval</td><td>Workshops with Traditional Owners, YAC, and rangers; agreement on scope and protocols.</td><td>Months 1–2</td></tr>
          <tr><td>2. Site selection</td><td>Co-identify priority sites; cultural and access assessment.</td><td>Months 2–3</td></tr>
          <tr><td>3. Supplier &amp; material sourcing</td><td>Quotes, freight planning, procurement.</td><td>Months 3–5</td></tr>
          <tr><td>4. Prototype field trial</td><td>Install one unit at an agreed pilot site; monitor performance.</td><td>Months 5–8</td></tr>
          <tr><td>5. Training &amp; installation</td><td>Train rangers in assembly and maintenance; deploy further units.</td><td>Months 8–12</td></tr>
          <tr><td>6. Maintenance &amp; evaluation</td><td>Scheduled inspections; community review; iterative improvement.</td><td>Ongoing</td></tr>
        </tbody>
      </table>
      <TableCaption>Table 7: Implementation timeline.</TableCaption>

      <h2>Responsibility matrix</h2>
      <table>
        <thead>
          <tr><th>Activity</th><th>Traditional Owners / YAC</th><th>Lama Lama Rangers</th><th>Project team</th><th>Suppliers</th></tr>
        </thead>
        <tbody>
          <tr><td>Cultural approval</td><td>Lead</td><td>Consult</td><td>Support</td><td>—</td></tr>
          <tr><td>Site selection</td><td>Lead</td><td>Lead</td><td>Support</td><td>—</td></tr>
          <tr><td>Procurement</td><td>Approve</td><td>Consult</td><td>Lead</td><td>Deliver</td></tr>
          <tr><td>Installation</td><td>Approve</td><td>Lead</td><td>Support</td><td>Support</td></tr>
          <tr><td>Maintenance</td><td>Oversight</td><td>Lead</td><td>Consult</td><td>Parts supply</td></tr>
          <tr><td>Evaluation</td><td>Lead</td><td>Lead</td><td>Support</td><td>—</td></tr>
        </tbody>
      </table>
      <TableCaption>Table 8: Responsibility matrix (RACI-style).</TableCaption>
      <h2>Construction</h2>
      <p>Due its modular nature the each hub can be constructed and deconstructed in under an hour without any additional tools needed to connect each of the panels. In regards to training which will be used to inform rangers on how to correctly assemble and use the hubs a three day training course will consist of practical and informational training to ensure all aspects are understood.</p>
      <h2>Introduction to Community and Client</h2>
      <p>Once rangers have been introduced and are familiar with the hubs, inspections will be conducted quarter annually for 2 years to ensure that each of the hubs remain fully functional throughout this period and beyond rangers will acquire full ownership of the hubs.</p>
      <h2>Evaluation</h2>
      <p>During these inspections developers will assess that functionality is remaining consistent and ensure that conditions of the hubs are remaining within a functional state.</p>
      <h2>Affect on Community</h2>
      <p>Upon the implementation of the hubs the local community will be greatly improved as access to tools, provisions, shade and shelter when needed will ultimately improve the workflow of rangers as well as provide additional assistance to community members and visitors that require assistance especially throughout the wet season.</p>
      <h2>Repairs</h2>
      <p>In regards to the repairability of the hubs the main material of the hubs aluminium which is highly durable however it is often quite difficult to repair therefore rangers have the option to use some of the available local materials or due to the modular nature panels can be easily swapped out from other hubs that aren't actively being used.</p>
    </PageShell>
  );
}
