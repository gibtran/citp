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
          Engineers Without Borders Australia. (2026a).{" "}
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
          Engineers Without Borders Australia. (2026b).{" "}
          <em>
            Lama Lama Country: A look at the sacred places, Sea Country, ranger bases, existing
            amenities and infrastructure
          </em>
          . EWB Challenge.{" "}
          <a
            href="https://ewbchallenge.org/challenge/port-stewart-lama-lama/lama-lama-country-a-look-at-the-sacred-places/"
            target="_blank"
            rel="noreferrer"
          >
            https://ewbchallenge.org/challenge/port-stewart-lama-lama/lama-lama-country-a-look-at-the-sacred-places/
          </a>
        </li>

        <li>
          Northern Australia Infrastructure Facility. (n.d.).{" "}
          <em>NAIF Act and Investment Mandate</em>.{" "}
          <a
            href="https://www.naif.gov.au/our-organisation/governance/naif-act-and-investment-mandate/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.naif.gov.au/our-organisation/governance/naif-act-and-investment-mandate/
          </a>
        </li>

        <li>
          Omega Cargo. (n.d.). <em>Container shipping cost and rates in Australia</em>.{" "}
          <a
            href="https://omegacargo.com.au/container-shipping-cost-and-rates-in-australia/"
            target="_blank"
            rel="noreferrer"
          >
            https://omegacargo.com.au/container-shipping-cost-and-rates-in-australia/
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
          Steelmart. (n.d.). <em>Aluminium sheet</em>.{" "}
          <a
            href="https://steelmart.com.au/products/aluminium-sheet?variant=45236291895452"
            target="_blank"
            rel="noreferrer"
          >
            https://steelmart.com.au/products/aluminium-sheet?variant=45236291895452
          </a>
        </li>

        <li>
          Department of Infrastructure, Transport, Regional Development, Communications, Sport and
          the Arts. (2026). <em>Portfolio Budget Statements 2026–27</em>.{" "}
          <a
            href="https://www.infrastructure.gov.au/sites/default/files/documents/2026-27-pbs-00-complete-document-pdf_0.pdf"
            target="_blank"
            rel="noreferrer"
          >
            https://www.infrastructure.gov.au/sites/default/files/documents/2026-27-pbs-00-complete-document-pdf_0.pdf
          </a>
        </li>

        <li>
          Yintjingga Aboriginal Corporation. (n.d.-a). <em>Lama Lama Rangers</em>.{" "}
          <a href="https://www.lamalama.org.au/lama-lama-rangers/" target="_blank" rel="noreferrer">
            https://www.lamalama.org.au/lama-lama-rangers/
          </a>
        </li>

        <li>
          Yintjingga Aboriginal Corporation. (n.d.-b). <em>Welcome to Lama Lama Country</em>.{" "}
          <a href="https://www.lamalama.org.au/" target="_blank" rel="noreferrer">
            https://www.lamalama.org.au/
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
