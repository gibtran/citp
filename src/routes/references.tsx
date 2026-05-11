import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Placeholder } from "@/components/report";

export const Route = createFileRoute("/references")({
  head: () => ({
    meta: [
      { title: "References" },
      { name: "description", content: "APA 7 reference list for the Modular Service Hub design report." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="13 · References" title="References">
      <p className="text-sm text-muted-foreground">
        References are formatted in APA 7 style. Replace placeholders with full citations.
      </p>
      <ol className="space-y-3 pl-5 [&>li]:pl-2">
        <li>Author, A. A. (Year). <em>Title of work</em>. Publisher. <Placeholder>[URL or DOI]</Placeholder></li>
        <li>Author, B. B., &amp; Author, C. C. (Year). Title of article. <em>Journal Name</em>, <em>volume</em>(issue), pages. <Placeholder>[DOI]</Placeholder></li>
        <li>Engineers Without Borders Australia. (Year). <em>EWB Challenge design brief: Lama Lama Country</em>. <Placeholder>[URL]</Placeholder></li>
        <li>Yintjingga Aboriginal Corporation. (Year). <em>Lama Lama healthy Country plan</em>. <Placeholder>[URL]</Placeholder></li>
        <li>Standards Australia. (Year). <em>AS/NZS standard number: Title</em>. SAI Global. <Placeholder>[URL]</Placeholder></li>
        <li><Placeholder>[Additional reference placeholder]</Placeholder></li>
        <li><Placeholder>[Additional reference placeholder]</Placeholder></li>
      </ol>
    </PageShell>
  );
}
