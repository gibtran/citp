import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Placeholder } from "@/components/report";

export const Route = createFileRoute("/appendix-5-prompt-log")({
  head: () => ({
    meta: [
      { title: "Appendix 5 — Prompt Log" },
      { name: "description", content: "Record of AI prompts used during the design process and how outputs were verified." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="Appendix 5" title="Prompt Log">
      <p>
        Record of AI prompts used during the design process, including purpose,
        outputs, and how the outputs were reviewed and verified.
      </p>
      <table>
        <thead>
          <tr><th>Date</th><th>Tool</th><th>Prompt</th><th>Use of output</th><th>Verification</th></tr>
        </thead>
        <tbody>
          <tr><td><Placeholder>date</Placeholder></td><td><Placeholder>tool</Placeholder></td><td><Placeholder>prompt</Placeholder></td><td><Placeholder>how used</Placeholder></td><td><Placeholder>how verified</Placeholder></td></tr>
          <tr><td><Placeholder>date</Placeholder></td><td><Placeholder>tool</Placeholder></td><td><Placeholder>prompt</Placeholder></td><td><Placeholder>how used</Placeholder></td><td><Placeholder>how verified</Placeholder></td></tr>
        </tbody>
      </table>
    </PageShell>
  );
}
