import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Figure } from "@/components/report";
import prototypeImage2 from "../img/prototype3.png";
import prototypeImage3 from "../img/prototype2.png";

export const Route = createFileRoute("/detailed-design")({
  head: () => ({
    meta: [
      { title: "Detailed Design — Modular Service Hub" },
      { name: "description", content: "Detailed design of the Modular Service Hub including components, operation, and community concerns." },
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
        pitched roof supports solar panels and directs rainfall into a side-mounted poly tank.
      </p>

      <Figure
        caption="Figure 5: Labelled design diagram of the Modular Service Hub."
        src={prototypeImage2}
        alt="Digital prototype front view of the Modular Service Hub"
      />

      <h2>Main physical components</h2>
      <ul className="list-disc pl-5">
        <li>
          <strong>Aluminium frame</strong> — corrosion-resistant primary structure.
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
          <strong>Solar panel and battery</strong> — roof-mounted PV with LiFePO₄ battery and small
          inverter.
        </li>
        <li>
          <strong>Water tank</strong> — poly tank with first-flush diverter and tap.
        </li>
        <li>
          <strong>Workspace / rest area</strong> — bench, charging points, shaded seating, and
          ventilation.
        </li>
      </ul>

      <h2>How the design works</h2>
      <p>
        The hub functions as an integrated off-grid base. Solar panels charge the battery during
        daylight, supplying lighting, USB charging, and small instruments. The roof captures
        rainwater into the tank for non-potable use. Rangers access the storage compartment with a
        keyed lock; the rest area provides shade and a workspace during operations.
      </p>

      <Figure caption="Figure 6: System block diagram showing power, water, and access flows." />

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
            <td>Standard parts; documented maintenance plan; ranger training.</td>
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
