import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/report";

export const Route = createFileRoute("/appendix-2-meeting-minutes")({
  head: () => ({
    meta: [
      { title: "Appendix 2 — Meeting Minutes" },
      {
        name: "description",
        content:
          "Chronological record of group meetings, decisions and action items for the EWB Challenge website.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="Appendix 2" title="Meeting Minutes">
      <section className="rounded-xl border p-6 my-6">
        <h2>Meeting 1 — Background Research and Initial Design Solution</h2>
        <p>
          <strong>Date:</strong> 9 April 2026 · <strong>Duration:</strong> approximately 3 hours
        </p>
        <p>
          <strong>Agenda:</strong> Discuss the background information of Lama Lama Country and
          develop the initial direction for the design solution.
        </p>
        <p>
          <strong>Discussion:</strong> The team reviewed the project context, design area, user
          needs and the key challenges affecting remote infrastructure on Lama Lama Country. The
          group discussed how the proposed solution should respond to limited infrastructure, remote
          access, harsh environmental conditions and the needs of Yintjingga Aboriginal Corporation
          and Lama Lama Rangers.
        </p>
        <p>
          <strong>Decisions:</strong> The team agreed to focus on a modular infrastructure solution
          that could support storage, rest and basic fieldwork activities.
        </p>
      </section>

      <section className="rounded-xl border p-6 my-6">
        <h2>Meeting 2 — Solution Evaluation, Design and Implementation</h2>
        <p>
          <strong>Date:</strong> 27 April 2026 · <strong>Duration:</strong> approximately 4 hours
        </p>
        <p>
          <strong>Agenda:</strong> Prepare for Assignment 2B by evaluating the selected solution,
          improving the solution design and discussing implementation and costing.
        </p>
        <p>
          <strong>Discussion:</strong> The team reviewed whether the Modular Service Hub was
          practical for remote use and whether it addressed the design criteria. The group discussed
          the design layout, module functions, possible materials, staged implementation, transport
          issues, labour requirements and broad cost considerations.
        </p>
        <p>
          <strong>Decisions:</strong> The team confirmed the Modular Service Hub as the preferred
          solution. The group also agreed that the design should be presented as flexible and
          expandable, rather than as one large fixed structure.
        </p>
      </section>

      <section className="rounded-xl border p-6 my-6">
        <h2>Meeting 3 — Digital Prototype Discussion</h2>
        <p>
          <strong>Date:</strong> 30 April 2026 · <strong>Duration:</strong> approximately 3 hours
        </p>
        <p>
          <strong>Agenda:</strong> Discuss the prototype and decide how the Modular Service Hub
          should be represented visually.
        </p>
        <p>
          <strong>Discussion:</strong> The team discussed the digital prototype, including the
          layout, storage module, work/rest space, raised base, roof structure and possible
          expansion points. The group considered how the prototype could communicate the concept
          clearly, even though no physical prototype or real-world testing had been completed.
        </p>
        <p>
          <strong>Decisions:</strong> The team agreed to present the prototype as a digital concept
          model. The prototype section would focus on design evaluation rather than physical
          testing.
        </p>
      </section>

      <section className="rounded-xl border p-6 my-6">
        <h2>Meeting 4 — Design Revision and Costing Update</h2>
        <p>
          <strong>Date:</strong> 13 May 2026 · <strong>Duration:</strong> approximately 4 hours
        </p>
        <p>
          <strong>Agenda:</strong> Revise the design solution and improve the costing section for
          the final website.
        </p>
        <p>
          <strong>Discussion:</strong> The team reviewed feedback from previous work and identified
          areas that needed improvement for Assignment 3. The main focus was to make the design
          explanation clearer in sustainability criteria, improve the costing structure and include
          broader cost categories such as materials, transport, labour, training, maintenance and
          contingency.
        </p>
        <p>
          <strong>Decisions:</strong> The group agreed to remove solar power of Modular Service Hub
          for sustainability and maintainability purpose. The costing section was revised to better
          reflect remote implementation challenges and long-term feasibility.
        </p>
      </section>
    </PageShell>
  );
}
