import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Figure, TableCaption } from "@/components/report";
import prototypeImage from "../img/prototype.png";
import prototypeImage2 from "../img/prototype3.png";
import prototypeImage3 from "../img/prototype2.png";
export const Route = createFileRoute("/prototyping")({
  head: () => ({
    meta: [
      { title: "Prototyping" },
      {
        name: "description",
        content:
          "Prototype construction, testing methods, and design modifications for the Modular Service Hub.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="8 · Prototyping" title="Prototype & Testing">
      <h2>What Was Prototyped</h2>
      <p>
        The team prototyped the modular layout of the service hub. This included a storage module, a
        work/rest module, a raised base, a roof structure and connection points for future
        expansion. These parts were selected because they represent the most important functions
        needed for a practical ranger support hub in remote conditions while ensuring
        sustainability.
      </p>

      <table>
        <thead>
          <tr>
            <th>Prototype Part</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Storage module</td>
            <td>To store tools, PPE, first aid equipment, maintenance items.</td>
          </tr>
          <tr>
            <td>Work/rest module</td>
            <td>
              To provide shade, rest space and a basic working area for planning and fieldwork
              preparation.
            </td>
          </tr>
          <tr>
            <td>Raised base</td>
            <td>
              To reduce contact with wet ground and improve protection from seasonal conditions.
            </td>
          </tr>
          <tr>
            <td>Roof structure</td>
            <td>To provide protection from sun and rain.</td>
          </tr>
          <tr>
            <td>Connection points</td>
            <td>To show how extra modules could be added later.</td>
          </tr>
        </tbody>
      </table>
      <TableCaption>Table 6: Prototype components and their purposes.</TableCaption>

      <h2>How the Prototype Was Constructed</h2>
      <p>
        The prototype was developed digitally using Blender to visualise the overall layout and
        function of the Modular Service Hub. The team created a digital model of one hub unit to
        explore the size, spacing, access points and arrangement of the 2.5m x 2.5m modules without
        building a physical model.
      </p>

      <p>
        This approach was suitable at the concept stage because it allowed the team to communicate
        the design clearly and review whether the modular layout could support storage, rest, work
        and future expansion. However, the digital prototype does not test structural strength,
        material performance or weather resistance.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
          alignItems: "start",
        }}
      >
        <figure style={{ margin: 0 }}>
          <img
            src={prototypeImage2}
            alt="Digital prototype front view of the Modular Service Hub"
            style={{ width: "100%", borderRadius: "12px" }}
          />
          <figcaption style={{ textAlign: "center", fontStyle: "italic", marginTop: "8px" }}>
            Figure 7: Digital prototype of the Modular Service Hub.
          </figcaption>
        </figure>

        <figure style={{ margin: 0 }}>
          <img
            src={prototypeImage3}
            alt="Digital prototype side view of the Modular Service Hub"
            style={{ width: "100%", borderRadius: "12px" }}
          />
          <figcaption style={{ textAlign: "center", fontStyle: "italic", marginTop: "8px" }}>
            Figure 8: Digital prototype of the Modular Service Hub.
          </figcaption>
        </figure>
      </div>

      <h2>Design Evaluation Method</h2>
      <p>
        Because the prototype was developed digitally, the evaluation focused on reviewing the
        design concept against the project’s design criteria rather than physical testing. The team
        reviewed whether the layout was clear, whether users could move logically between spaces,
        whether storage areas appeared accessible, and whether additional modules could be added in
        the future.
      </p>

      <table>
        <thead>
          <tr>
            <th>Evaluation Focus</th>
            <th>What Was Reviewed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Layout clarity</td>
            <td>Whether the module arrangement was clear and easy to understand.</td>
          </tr>
          <tr>
            <td>User movement</td>
            <td>Whether users could access storage, work and rest</td>
          </tr>
          <tr>
            <td>Storage access</td>
            <td>Whether the tools, first aid, equipment, etc are easy to access</td>
          </tr>
          <tr>
            <td>Future expansion</td>
            <td>
              Whether additional modules could be connected later without changing the whole design.
            </td>
          </tr>
          <tr>
            <td>Remote practicality</td>
            <td>Whether the design is simple enough for remote use, transport and maintenance.</td>
          </tr>
        </tbody>
      </table>
      <TableCaption>Table 7: Design evaluation focus for the digital prototype.</TableCaption>

      <h2>Prototype Limitations</h2>
      <p>
        The prototype was useful for testing the layout, but it could not test real structural
        strength, weather resistance or long-term durability. Further testing would be required
        before implementation, including material testing, detailed cost checking, professional
        engineering review and feedback from YAC, Traditional Owners and Lama Lama Rangers.
      </p>

      <h2>Summary</h2>
      <p>
        The digital prototype indicated that the Modular Service Hub is a practical design for
        development. It showed how a 2.5m x 2.5m module could work as a basic building unit and how
        the hub could be expanded over time through additional modules. However, further community
        feedback, technical review and real-world testing would be required before implementation.
      </p>
    </PageShell>
  );
}
