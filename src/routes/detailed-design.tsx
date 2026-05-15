import { createFileRoute } from "@tanstack/react-router";
import { PageShell} from "@/components/report";
import prototypeImage4 from "../img/prototype4.png";
import blockDiagram from "../img/block_diagram.png"

export const Route = createFileRoute("/detailed-design")({
  head: () => ({
    meta: [
      { title: "Detailed Design — Modular Service Hub" },
      {
        name: "description",
        content:
          "Detailed design of the Modular Service Hub including components, operation, and community concerns.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="7 · Detailed Design" title="Detailed Design">
      <h2>Description of the selected design</h2>
      <p>
        The Modular Service Hub is a 2.5 m × 2.5 m enclosed unit on a raised aluminium floor frame.
        The structure separates a lockable storage zone from an open workspace and rest area. A
        pitched roof directs rainfall into a side-mounted poly tank.
      </p>

      <figure
        style={{
          margin: "32px auto",
          textAlign: "center",
          maxWidth: "900px",
        }}
      >
        <img
          src={prototypeImage4}
          alt="Digital prototype front view of the Modular Service Hub"
          style={{
            width: "100%",
            display: "block",
            borderRadius: "12px",
            objectFit: "contain",
          }}
        />
        <figcaption
          style={{
            marginTop: "12px",
            fontStyle: "italic",
            color: "#555",
            textAlign: "center",
            width: "100%",
          }}
        >
          Figure 5: Unit of Modular Service Hubs showing modularity and construction design. (Modelled in Blender)
        </figcaption>
      </figure>

      <h2>Main physical components</h2>
      <ul className="list-disc pl-5">
        <li>
          <strong>Aluminium frame</strong> — corrosion-resistant primary structure. Standardised to simplify stocking.
        </li>
        <li>
          <strong>Timber components</strong> — Local timber is used to complete, strengthen and
          customize the Hubs (e.g. doors, shade, furniture).
          Handbooks with timber crafting examples are provided.
        </li>
        <li>
          <strong>Raised floor</strong> — protects against flooding and termites; allows airflow.
        </li>
        <li>
          <strong>Roof structure</strong> — insulated panels with overhang for shade and runoff
          capture.
        </li>
        <li>
          <strong>Lockable storage</strong> — separate compartment for tools, fuel, and ranger
          equipment.
        </li>
        <li>
          <strong>Water tank</strong> — poly tank with first-flush diverter and tap.
        </li>
        <li>
          <strong>Workspace / rest area</strong> — self-made benches out of timber, shaded seating,
          and ventilation.
        </li>
      </ul>

      <h2>How the design works</h2>
      <p>
        The hub functions as an integrated off-grid base. The roof captures rainwater into the tank
        for non-potable use. Rangers access the storage compartment with a keyed lock providing
        basic tools and equipment; the rest area provides shade and a workspace during operations.
      </p>

      <figure
        style={{
          margin: "32px auto",
          textAlign: "center",
          maxWidth: "900px",
        }}
      >
        <img
          src={blockDiagram}
          alt="Digital prototype inside view of the Modular Service Hub in Minecraft"
          style={{
            width: "100%",
            display: "block",
            borderRadius: "12px",
            objectFit: "contain",
          }}
        />
        <figcaption
          style={{
            marginTop: "12px",
            fontStyle: "italic",
            color: "#555",
            textAlign: "center",
            width: "100%",
          }}
        >
          Figure 6: System block diagram showing water, equipment and access flows.
          Minecraft)
        </figcaption>
      </figure>

      <h2>Who will use it and how</h2>
      <p>
        Primary users are Lama Lama Rangers conducting field operations and Traditional Owners
        visiting Country. Secondary users include researchers and partners invited by the community.
        Use is governed by Lama Lama protocols administered through YAC.
      </p>

      <h2>Community concerns and responses</h2>
      <table>
        <thead>
          <tr>
            <th>Concern</th>
            <th>Response in design</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Visual impact on Country</td>
            <td>Low-profile form, muted earth-tone finishes, minimal footprint.</td>
          </tr>
          <tr>
            <td>Theft and tampering</td>
            <td>Heavy-duty locks, tamper-resistant fasteners, optional perimeter signage.</td>
          </tr>
          <tr>
            <td>Ongoing maintenance burden</td>
            <td>Standard core parts; documented maintenance plan; ranger training.</td>
          </tr>
          <tr>
            <td>Cultural protocols</td>
            <td>Site selection led by Traditional Owners and YAC.</td>
          </tr>
        </tbody>
      </table>
    </PageShell>
  );
}
