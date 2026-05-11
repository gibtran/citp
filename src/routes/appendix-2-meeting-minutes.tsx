import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Placeholder } from "@/components/report";

export const Route = createFileRoute("/appendix-2-meeting-minutes")({
  head: () => ({
    meta: [
      { title: "Appendix 2 — Meeting Minutes" },
      { name: "description", content: "Record of project meetings, decisions, and action items." },
    ],
  }),
  component: Page,
});

function Meeting({ n }: { n: number }) {
  return (
    <section className="mb-8 rounded-md border border-border bg-card p-5">
      <h3 className="mt-0">Meeting {n}</h3>
      <p><strong>Date:</strong> <Placeholder>DD/MM/YYYY</Placeholder> · <strong>Attendees:</strong> <Placeholder>names</Placeholder></p>
      <p><strong>Agenda:</strong> <Placeholder>summary</Placeholder></p>
      <p><strong>Decisions:</strong> <Placeholder>summary</Placeholder></p>
      <p><strong>Action items:</strong> <Placeholder>who / what / by when</Placeholder></p>
    </section>
  );
}

function Page() {
  return (
    <PageShell eyebrow="Appendix 2" title="Meeting Minutes">
      <p>A chronological record of project meetings, decisions, and action items.</p>
      {[1,2,3,4].map((n) => <Meeting key={n} n={n} />)}
    </PageShell>
  );
}
