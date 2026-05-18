import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Placeholder } from "@/components/report";

export const Route = createFileRoute("/references")({
  head: () => ({
    meta: [
      { title: "References" },
      {
        name: "description",
        content: "APA 7 reference list for the Modular Service Hub design report.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="13 · References" title="References">
      <ol className="space-y-3 pl-5 [&>li]:pl-2">
        <li>
          Engineers Without Borders Australia. (2026).{" "}
          <em>Design Area 1 – Infrastructure and Access</em>. EWB Challenge.{" "}
          <a
            href="https://ewbchallenge.org/challenge/port-stewart-lama-lama/design-area-1-infrastructure-and-access/"
            target="_blank"
            rel="noreferrer"
          >
            https://ewbchallenge.org/challenge/port-stewart-lama-lama/design-area-1-infrastructure-and-access/
          </a>
        </li>

        <li>
          Queensland Government. (2019). <em>Climate change in the Cape York region</em>.{" "}
          <a
            href="https://www.qld.gov.au/__data/assets/pdf_file/0019/68140/cape-york-climate-change-impact-summary.pdf"
            target="_blank"
            rel="noreferrer"
          >
            https://www.qld.gov.au/__data/assets/pdf_file/0019/68140/cape-york-climate-change-impact-summary.pdf
          </a>
        </li>

        <li>
          Yintjingga Aboriginal Corporation. (n.d.-a). <em>Welcome to Lama Lama Country</em>.{" "}
          <a href="https://www.lamalama.org.au/" target="_blank" rel="noreferrer">
            https://www.lamalama.org.au/
          </a>
        </li>

        <li>
          Yintjingga Aboriginal Corporation. (n.d.-b). <em>Lama Lama Rangers</em>.{" "}
          <a href="https://www.lamalama.org.au/lama-lama-rangers/" target="_blank" rel="noreferrer">
            https://www.lamalama.org.au/lama-lama-rangers/
          </a>
        </li>

        <li style={{ paddingTop: "40px" }}>
          <a
            href="/appendix-5-prompt-log"
            style={{
              color: "#5b5b5b",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: "700",
              borderBottom: "1px solid #bdb4a8",
              paddingBottom: "2px",
              transition: "0.2s ease",
            }}
          >
            Click here for AI references (prompts){" "}
          </a>
        </li>
      </ol>
    </PageShell>
  );
}
