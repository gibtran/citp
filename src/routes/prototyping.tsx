import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Figure, TableCaption } from "@/components/report";
import prototypeImage from "../img/prototype.png";
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
        needed for a practical ranger support hub in remote conditions.
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
            <td>To store tools, PPE, first aid equipment, radios and maintenance items.</td>
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
        The prototype was made using simple materials such as cardboard, paper, tape and glue. Each
        module was built separately so the team could move and rearrange the layout. This helped
        test whether the hub could be expanded in stages instead of being built as one large fixed
        structure.
      </p>

      <figure>
        <img
          src={prototypeImage}
          alt="Digital prototype showing the Modular Service Hub layout"
          style={{ width: "100%", borderRadius: "12px" }}
        />
        <figcaption>Figure 7: Digital prototype showing the Modular Service Hub layout.</figcaption>
      </figure>

      <h2>Testing Method</h2>
      <p>
        The prototype was tested by reviewing it against the project’s design criteria. The team
        focused on whether the layout was clear, whether users could move between spaces easily,
        whether storage could be accessed safely and whether extra modules could be added later.
      </p>

      <table>
        <thead>
          <tr>
            <th>Test Focus</th>
            <th>What Was Checked</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Layout</td>
            <td>Whether the modules were arranged clearly and logically.</td>
          </tr>
          <tr>
            <td>User movement</td>
            <td>Whether users could move between spaces easily.</td>
          </tr>
          <tr>
            <td>Storage access</td>
            <td>Whether equipment could be accessed safely and efficiently.</td>
          </tr>
          <tr>
            <td>Expansion</td>
            <td>Whether extra modules could be added later without redesigning the whole hub.</td>
          </tr>
          <tr>
            <td>Practicality</td>
            <td>Whether the design was simple enough for remote use, transport and maintenance.</td>
          </tr>
        </tbody>
      </table>
      <TableCaption>Table 7: Prototype testing method.</TableCaption>

      <h2>Testing Results</h2>
      <p>
        The prototype showed that the modular system was easy to understand and could support
        different functions. One module could be used for secure storage, while another could
        provide shade, rest space and a basic work area. The testing also showed that the hub could
        be expanded over time, which supports staged implementation when funding or community needs
        increase.
      </p>
      <p>
        However, the first layout had some weaknesses. The access points were not clear enough, and
        the design needed more open space for airflow and movement. These issues helped the team
        improve the design before presenting the final concept.
      </p>

      <h2>Improvements After Testing</h2>
      <table>
        <thead>
          <tr>
            <th>Issue Found</th>
            <th>Improvement Made</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Access to storage was unclear</td>
            <td>The storage entrance was moved closer to the main access path.</td>
          </tr>
          <tr>
            <td>Layout felt too enclosed</td>
            <td>More open side access was added to improve airflow and movement.</td>
          </tr>
          <tr>
            <td>Expansion points were not obvious</td>
            <td>
              Clear connection points were added to show where future modules could be attached.
            </td>
          </tr>
          <tr>
            <td>Roof design was too basic</td>
            <td>The roof was adjusted to allow future solar panels or rainwater collection.</td>
          </tr>
          <tr>
            <td>Maintenance was not considered enough</td>
            <td>Simple access points were added for checking bolts, doors and roof parts.</td>
          </tr>
        </tbody>
      </table>
      <TableCaption>Table 8: Prototype testing results and design modifications.</TableCaption>

      <h2>Prototype Limitations</h2>
      <p>
        The prototype was useful for testing the layout, but it could not test real structural
        strength, weather resistance or long-term durability. Further testing would be required
        before implementation, including material testing, detailed cost checking, professional
        engineering review and feedback from YAC, Traditional Owners and Lama Lama Rangers.
      </p>

      <h2>Summary</h2>
      <p>
        The prototype confirmed that the Modular Service Hub is a practical design direction. It
        showed that the 2.5m x 2.5m module can work as a basic building unit and can be expanded
        over time. The testing helped improve the design by making the layout more open, easier to
        access and more suitable for staged implementation in remote conditions.
      </p>
    </PageShell>
  );
}
