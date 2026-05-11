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
    </PageShell>
  );
}
