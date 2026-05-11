import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Placeholder } from "@/components/report";

export const Route = createFileRoute("/appendix-4-testing-results")({
  head: () => ({
    meta: [
      { title: "Appendix 4 — Testing Results" },
      { name: "description", content: "Detailed prototype testing data and observations." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="Appendix 4" title="Testing Results">
      <p>Detailed test data supporting the summary in Section 8.</p>
      <table>
        <thead>
          <tr><th>Test ID</th><th>Date</th><th>Method</th><th>Observation</th><th>Outcome</th></tr>
        </thead>
        <tbody>
          <tr><td>T-01</td><td><Placeholder>date</Placeholder></td><td><Placeholder>method</Placeholder></td><td><Placeholder>obs</Placeholder></td><td><Placeholder>pass/fail</Placeholder></td></tr>
          <tr><td>T-02</td><td><Placeholder>date</Placeholder></td><td><Placeholder>method</Placeholder></td><td><Placeholder>obs</Placeholder></td><td><Placeholder>pass/fail</Placeholder></td></tr>
          <tr><td>T-03</td><td><Placeholder>date</Placeholder></td><td><Placeholder>method</Placeholder></td><td><Placeholder>obs</Placeholder></td><td><Placeholder>pass/fail</Placeholder></td></tr>
          <tr><td>T-04</td><td><Placeholder>date</Placeholder></td><td><Placeholder>method</Placeholder></td><td><Placeholder>obs</Placeholder></td><td><Placeholder>pass/fail</Placeholder></td></tr>
        </tbody>
      </table>
    </PageShell>
  );
}
