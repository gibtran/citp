import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Figure, TableCaption } from "@/components/report";

export const Route = createFileRoute("/prototyping")({
  head: () => ({
    meta: [
      { title: "Prototyping" },
      { name: "description", content: "Prototype construction, testing methods, and design modifications for the Modular Service Hub." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="8 · Prototyping" title="Prototyping">
      <h2>What was prototyped and why</h2>
      <p>
        what the fuck
      </p>

      <h2>How the prototype was constructed</h2>
      <p>
        The scaled model was constructed at <em>1:10</em> using balsa, foam, and
        aluminium rod to represent the frame, cladding, and roof. The full-scale corner
        assembly used standard aluminium extrusion, gusset plates, and bolted
        connections to test stiffness and ease of assembly.
      </p>

      <Figure caption="Figure 7: Scaled prototype of the Modular Service Hub." />

      <h2>What the prototype looks like and can do</h2>
      <p>
        The prototype demonstrates the external form, internal zoning, and key joints.
        It allows reviewers to visualise scale, evaluate access, and inspect the
        integration of solar, water, and storage features.
      </p>

      <h2>Testing method</h2>
      <p>
        Each prototype was tested against criteria derived from the design brief:
        assembly time, joint stiffness, ventilation airflow, and visual fit with
        Country. Tests were performed in workshop conditions and recorded with notes
        and photographs.
      </p>

      <h2>Testing results and modifications</h2>
      <table>
        <thead>
          <tr><th>Test</th><th>Purpose</th><th>Result</th><th>Modification</th></tr>
        </thead>
        <tbody>
          <tr><td>Corner joint loading</td><td>Verify stiffness under lateral load.</td><td>Acceptable; minor flex at base plate.</td><td>Added second bolt to base plate.</td></tr>
          <tr><td>Assembly time</td><td>Evaluate field-assembly feasibility.</td><td>~6 hours by 3 people.</td><td>Pre-drilled and labelled components.</td></tr>
          <tr><td>Ventilation</td><td>Check passive airflow.</td><td>Adequate but warm under midday sun.</td><td>Added ridge vent and roof overhang.</td></tr>
          <tr><td>Lock and storage access</td><td>Confirm secure but usable access.</td><td>Lock secure; access tight for large gear.</td><td>Widened storage opening by 100 mm.</td></tr>
        </tbody>
      </table>
      <TableCaption>Table 6: Prototype testing results and design modifications.</TableCaption>
    </PageShell>
  );
}
