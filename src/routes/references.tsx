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
      <p className="text-sm text-muted-foreground">
        References are formatted in APA 7 style. Replace placeholders with full citations.
      </p>
      <ol className="space-y-3 pl-5 [&>li]:pl-2">
        <li>
          Aakurru (Our home) – Welcome to Lama Lama Country. (2026). <em>Lamalama.org.au</em>.{" "}
          <a href="https://www.lamalama.org.au/country/" target="_blank" rel="noreferrer">
            https://www.lamalama.org.au/country/
          </a>
        </li>

        <li>
          As Jenny Ran Foundation. (2024, January 19).{" "}
          <em>Respect for diversity &amp; understanding differences</em>.{" "}
          <a
            href="https://asjennyran.org/respecting-cultural-diversity/"
            target="_blank"
            rel="noreferrer"
          >
            https://asjennyran.org/respecting-cultural-diversity/
          </a>
        </li>

        <li>
          Davies, A., &amp; Earl, C. (2018, December 19). Life on the land with the Lama Lama
          rangers – a picture essay. <em>The Guardian</em>.{" "}
          <a
            href="https://www.theguardian.com/environment/2018/dec/20/life-on-the-land-with-the-lama-lama-rangers-a-picture-essay"
            target="_blank"
            rel="noreferrer"
          >
            https://www.theguardian.com/environment/2018/dec/20/life-on-the-land-with-the-lama-lama-rangers-a-picture-essay
          </a>
        </li>

        <li>
          Engineers Without Borders Australia. (2024).{" "}
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
          Langeek English. (n.d.). <em>Shelter vocabulary</em>.{" "}
          <a
            href="https://dictionary.langeek.co/en/word/166521?entry=shelter"
            target="_blank"
            rel="noreferrer"
          >
            https://dictionary.langeek.co/en/word/166521?entry=shelter
          </a>
        </li>

        <li>
          Manomin. (n.d.). <em>Timber vs wood: What's the difference? Complete guide</em>.{" "}
          <a href="https://mrtimbers.com/timber-vs-wood/" target="_blank" rel="noreferrer">
            https://mrtimbers.com/timber-vs-wood/
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
          Industrial Metal Service. (n.d.).{" "}
          <em>Understanding the different types of aluminum alloys</em>.{" "}
          <a
            href="https://industrialmetalservice.com/metal-university/different-types-of-aluminum-alloys/"
            target="_blank"
            rel="noreferrer"
          >
            https://industrialmetalservice.com/metal-university/different-types-of-aluminum-alloys/
          </a>
        </li>

        <li>
          Aussie Demountables. (n.d.). <em>How to transport a demountable</em>.{" "}
          <a
            href="https://www.aussiedemountables.com.au/blog/how-to-transport-a-demountable/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.aussiedemountables.com.au/blog/how-to-transport-a-demountable/
          </a>
        </li>

        <li>
          Inhabitat. (n.d.).{" "}
          <em>Sliding Hubs prefab modular housing has 64 different combinations</em>.{" "}
          <a
            href="https://inhabitat.com/sliding-hubs-prefab-modular-housing-has-64-different-combinations/"
            target="_blank"
            rel="noreferrer"
          >
            https://inhabitat.com/sliding-hubs-prefab-modular-housing-has-64-different-combinations/
          </a>
        </li>

        <li>
          Lama Lama Country. (n.d.). <em>About us</em>.{" "}
          <a href="https://www.lamalama.org.au/about-us/" target="_blank" rel="noreferrer">
            https://www.lamalama.org.au/about-us/
          </a>
        </li>

        <li>
          Outback Portable Buildings. (n.d.). <em>Modular commercial buildings</em>.{" "}
          <a
            href="https://outbackportablebuildings.com.au/modular-commercial-buildings/"
            target="_blank"
            rel="noreferrer"
          >
            https://outbackportablebuildings.com.au/modular-commercial-buildings/
          </a>
        </li>
      </ol>
    </PageShell>
  );
}
