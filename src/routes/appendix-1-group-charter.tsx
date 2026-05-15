import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Placeholder } from "@/components/report";

export const Route = createFileRoute("/appendix-1-group-charter")({
  head: () => ({
    meta: [
      { title: "Appendix 1 — Group Charter" },
      {
        name: "description",
        content: "Group charter outlining team roles, expectations, and ways of working.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="Appendix 1" title="Group Charter">
      <h2>Team members and roles</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Main Responsibility</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Placeholder>Jesse Felipe</Placeholder>
            </td>
            <td>Team member</td>
            <td>
              <Placeholder>
                Executive Summary, Project Details, Background information of Lama Lama
              </Placeholder>
            </td>
          </tr>
          <tr>
            <td>
              <Placeholder>Hoang Hung Nguyen</Placeholder>
            </td>
            <td>Team member</td>
            <td>
              <Placeholder>Desgin Options, Recommendations</Placeholder>
            </td>
          </tr>
          <tr>
            <td>
              <Placeholder>Jan Schneider</Placeholder>
            </td>
            <td>Team member</td>
            <td>
              <Placeholder>Detailed Design, Other Considerations</Placeholder>
            </td>
          </tr>
          <tr>
            <td>
              <Placeholder>Gia Tran</Placeholder>
            </td>
            <td>Team member</td>
            <td>
              <Placeholder>Problem, Criteria, Prototyping</Placeholder>
            </td>
          </tr>
          <tr>
            <td>
              <Placeholder>Luca Zulic</Placeholder>
            </td>
            <td>Team member</td>
            <td>
              <Placeholder>Implementation Plan, Cost Analysis</Placeholder>
            </td>
          </tr>
          <tr>
            <td>
              <Placeholder>Taehyoun Lee</Placeholder>
            </td>
            <td>Team member</td>
            <td>
              <Placeholder>Design Options, Design Selection</Placeholder>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Shared expectations</h2>
      <ul className="list-disc pl-5">
        <li>Respect for cultural protocols, YAC and the Lama Lama community.</li>
        <li>Fair contribution to the project and agreed team tasks.</li>
        <li>Timely communication and attendance at agreed meetings.</li>
        <li>Constructive feedback and shared decision-making.</li>
        <li>Accurate referencing and honest reporting of project work.</li>
      </ul>

      <h2>Communication</h2>
      <p>
        Primary channel: <Placeholder>WhatsApp</Placeholder> Second channel:{" "}
        <Placeholder>Zoom meetings</Placeholder>
      </p>

      <h2>Conflict resolution</h2>
      <p>
        Concerns were first raised within the group and discussed respectfully. If an issue could
        not be resolved, the team would seek advice from the tutor or subject coordinator
      </p>

      <h2>Team Agreement</h2>
      <p>
        <Placeholder>
          All team members agreed to complete their allocated work, communicate respectfully,
          acknowledge sources correctly.
        </Placeholder>
      </p>
    </PageShell>
  );
}
