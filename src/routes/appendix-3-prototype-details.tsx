import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Figure, Placeholder } from "@/components/report";

export const Route = createFileRoute("/appendix-3-prototype-details")({
  head: () => ({
    meta: [
      { title: "Appendix 3 — Prototype Details" },
      { name: "description", content: "Detailed prototype documentation including drawings, materials, and assembly notes." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="Appendix 3" title="Prototype Details">
      <h2>Drawings</h2>
      <Figure caption="Figure A3.1: Plan view of prototype." />
      <Figure caption="Figure A3.2: Elevation and section." />

      <h2>Materials list</h2>
      <table>
        <thead><tr><th>Item</th><th>Quantity</th><th>Notes</th></tr></thead>
        <tbody>
          <tr><td><Placeholder>Item</Placeholder></td><td><Placeholder>Qty</Placeholder></td><td><Placeholder>Notes</Placeholder></td></tr>
          <tr><td><Placeholder>Item</Placeholder></td><td><Placeholder>Qty</Placeholder></td><td><Placeholder>Notes</Placeholder></td></tr>
        </tbody>
      </table>

      <h2>Assembly notes</h2>
      <p><Placeholder>[Step-by-step assembly notes placeholder]</Placeholder></p>
    </PageShell>
  );
}
