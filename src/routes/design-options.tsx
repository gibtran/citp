import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Figure } from "@/components/report";

export const Route = createFileRoute("/design-options")({
  head: () => ({
    meta: [
      { title: "Design Solution Options" },
      { name: "description", content: "Three candidate design options for the Lama Lama service hub project." },
    ],
  }),
  component: Page,
});

function Option({
  number,
  title,
  description,
  works,
  strengths,
  limitations,
  reference,
  figureNo,
}: {
  number: number;
  title: string;
  description: string;
  works: string;
  strengths: string[];
  limitations: string[];
  reference: string;
  figureNo: number;
}) {
  return (
    <section className="mb-10 rounded-lg border border-border bg-card p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        Option {number}
      </p>
      <h2 className="mt-1">{title}</h2>
      <Figure caption={`Figure ${figureNo}: Concept diagram for ${title}.`} />
      <h3>Description</h3>
      <p>{description}</p>
      <h3>How it works</h3>
      <p>{works}</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <h3 className="mt-0">Strengths</h3>
          <ul className="list-disc pl-5 text-sm">
            {strengths.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
        <div>
          <h3 className="mt-0">Limitations</h3>
          <ul className="list-disc pl-5 text-sm">
            {limitations.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">
        <strong>Reference / precedent:</strong> {reference}
      </p>
    </section>
  );
}

function Page() {
  return (
    <PageShell eyebrow="5 · Design Options" title="Design Solution Options">
      <p>
        Three candidate solutions were developed to address the user needs and design
        criteria. Each is summarised below with strengths, limitations, and a reference
        precedent placeholder.
      </p>

      <Option
        number={1}
        figureNo={2}
        title="Modular Service Hub"
        description="A purpose-built 2.5 m × 2.5 m modular unit on an aluminium frame integrating storage, workspace, solar power, and rainwater capture."
        works="Pre-assembled panels are transported to site and bolted together on a raised footing system. Roof-mounted solar feeds an internal battery; a rear-mounted tank captures roof runoff. Multiple units can be combined into larger configurations."
        strengths={[
          "Designed specifically for ranger workflows.",
          "Lightweight aluminium suits remote transport.",
          "Integrated power, water, and storage in one unit.",
          "Modular — units can be added over time.",
        ]}
        limitations={[
          "Higher initial design cost than off-the-shelf options.",
          "Requires trained crew for first-time assembly.",
        ]}
        reference="[Reference placeholder — modular remote shelter precedent]"
      />

      <Option
        number={2}
        figureNo={3}
        title="Mobile Trailer Hub"
        description="A trailer-mounted hub providing the same core functions but designed to be towed between sites rather than installed."
        works="Equipment, solar, and water are mounted on a road-registered trailer. The trailer is towed to a site, levelled, and used as a mobile base; it is returned to a central depot for storage or transferred between sites."
        strengths={[
          "Highly mobile — can serve many sites from one unit.",
          "Centralised maintenance at a single depot.",
          "No fixed site disturbance.",
        ]}
        limitations={[
          "Limited capacity; smaller storage and workspace.",
          "Restricted by track conditions and wet-season access.",
          "Does not establish a long-term presence on Country.",
        ]}
        reference="[Reference placeholder — mobile field unit example]"
      />

      <Option
        number={3}
        figureNo={4}
        title="Upgraded Existing Shelter / Storage System"
        description="Retrofit and extend existing structures with new solar, water, and security upgrades rather than introducing new units."
        works="Existing sheds and shelters are audited, weatherproofed, and fitted with off-grid solar, rainwater capture, and lockable storage cages. Upgrades are tailored to each site."
        strengths={[
          "Lower capital cost; reuses existing infrastructure.",
          "Familiar to current users.",
          "Faster to deploy where structures already exist.",
        ]}
        limitations={[
          "Limited by condition and layout of existing structures.",
          "Inconsistent across sites; harder to standardise maintenance.",
          "Does not address sites with no existing infrastructure.",
        ]}
        reference="[Reference placeholder — remote shelter upgrade case study]"
      />
    </PageShell>
  );
}
