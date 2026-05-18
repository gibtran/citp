import { createFileRoute } from "@tanstack/react-router";
import { PageShell, TableCaption } from "@/components/report";

export const Route = createFileRoute("/design-selection")({
  head: () => ({
    meta: [
      { title: "Design Selection" },
      { name: "description", content: "Decision matrix and justification for selecting the Modular Service Hub design." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="6 · Design Selection" title="Design Selection">
      <h2>Decision-making process</h2>
      <p>
        Each option was assessed against the design criteria established in Section 4
        using a weighted decision matrix. Criteria were rated on a 1–5 scale (1 = poor,
        5 = excellent) and weighted by importance, as agreed with the project team.
        Cultural appropriateness, durability, and maintainability were given the
        highest weights, reflecting community priorities.
      </p>

      <h2>Decision matrix</h2>
      <table>
        <thead>
          <tr>
            <th>Criteria</th>
            <th>Weight</th>
            <th>Option 1<br/>Modular Hub</th>
            <th>Option 2<br/>Mobile Trailer</th>
            <th>Option 3<br/>Upgraded Shelter</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Cultural appropriateness</td><td>5</td><td>5</td><td>3</td><td>3</td></tr>
          <tr><td>Durability</td><td>5</td><td>5</td><td>3</td><td>3</td></tr>
          <tr><td>Ease of transport &amp; install</td><td>4</td><td>4</td><td>5</td><td>3</td></tr>
          <tr><td>Maintainability</td><td>5</td><td>4</td><td>3</td><td>3</td></tr>
          <tr><td>Cost feasibility</td><td>4</td><td>3</td><td>4</td><td>5</td></tr>
          <tr><td>Environmental impact</td><td>4</td><td>4</td><td>4</td><td>3</td></tr>
          <tr>
            <td><strong>Weighted total</strong></td>
            <td>—</td>
            <td><strong>114</strong></td>
            <td><strong>97</strong></td>
            <td><strong>89</strong></td>
          </tr>
        </tbody>
      </table>

      <h2>Justification</h2>
      <p>
        Option 1, the <strong>Modular Service Hub</strong>, scored highest overall. It
        most strongly addresses cultural appropriateness, durability, and
        maintainability while still being feasible to transport and assemble on remote
        Lama Lama sites. Option 2 scores well on mobility but does not support an
        enduring presence on Country. Option 3 is cheaper but inconsistent across sites
        and limited by the condition of existing infrastructure.
      </p>

      <h2>Final selected design</h2>
      <p className="rounded-md border-l-4 border-accent bg-accent/5 p-4">
        <strong>Selected design:</strong> the Modular Service Hub — This is a transportable 
        2.5 m × 2.5 m unit that combines lockable storage, a sheltered rest/work area, a raised base, weather-resistant materials, 
        and rainwater support. It was selected because it offers the most practical long-term solution for supporting Lama Lama Rangers 
        and Traditional Owners at remote outstations while still allowing the design to be installed gradually, maintained locally, and adapted to different site needs.
      </p>
    </PageShell>
  );
}
