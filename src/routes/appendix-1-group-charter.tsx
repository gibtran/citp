import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Placeholder } from "@/components/report";

export const Route = createFileRoute("/appendix-1-group-charter")({
  head: () => ({
    meta: [
      { title: "Appendix 1 — Group Charter" },
      { name: "description", content: "Group charter outlining team roles, expectations, and ways of working." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="Appendix 1" title="Group Charter">
      <h2>Team members and roles</h2>
      <table>
        <thead><tr><th>Name</th><th>Role</th><th>Contact</th></tr></thead>
        <tbody>
          <tr><td><Placeholder>Member 1</Placeholder></td><td>Project lead</td><td><Placeholder>email</Placeholder></td></tr>
          <tr><td><Placeholder>Member 2</Placeholder></td><td>Design lead</td><td><Placeholder>email</Placeholder></td></tr>
          <tr><td><Placeholder>Member 3</Placeholder></td><td>Research lead</td><td><Placeholder>email</Placeholder></td></tr>
          <tr><td><Placeholder>Member 4</Placeholder></td><td>Documentation lead</td><td><Placeholder>email</Placeholder></td></tr>
        </tbody>
      </table>

      <h2>Shared expectations</h2>
      <ul className="list-disc pl-5">
        <li>Respect for cultural protocols and project partners.</li>
        <li>Equitable distribution of work.</li>
        <li>Timely communication and meeting attendance.</li>
        <li>Constructive feedback and shared decision-making.</li>
      </ul>

      <h2>Communication</h2>
      <p>Primary channel: <Placeholder>messaging app</Placeholder>. Weekly meetings: <Placeholder>day/time</Placeholder>.</p>

      <h2>Conflict resolution</h2>
      <p>Concerns are raised in meetings; unresolved issues are escalated to the project tutor.</p>

      <h2>Signatures</h2>
      <p><Placeholder>[Signatures and date placeholder]</Placeholder></p>
    </PageShell>
  );
}
