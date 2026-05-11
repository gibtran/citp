import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Card } from "@/components/report";

export const Route = createFileRoute("/background")({
  head: () => ({
    meta: [
      { title: "Background — Modular Service Hubs" },
      { name: "description", content: "Background, stakeholder significance, and existing solutions for remote infrastructure on Lama Lama Country." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="3 · Background" title="Background">
      <h2>Context of the problem</h2>
      <p>
        Remote outstations and ranger camps on Lama Lama Country are difficult to access
        for much of the wet season. Equipment must be transported in and out repeatedly,
        increasing wear and exposing tools to weather and theft. Existing structures are
        ageing, ad-hoc, or unsuited to long-term ranger operations.
      </p>

      <h2>Significance to stakeholders</h2>
      <div className="not-prose grid gap-4 sm:grid-cols-2">
        <Card title="Traditional Owners">Maintaining a presence on Country supports cultural responsibilities, intergenerational knowledge, and Caring for Country obligations.</Card>
        <Card title="Lama Lama Rangers">Reliable bases reduce equipment loss, improve safety, and increase time spent on conservation work.</Card>
        <Card title="YAC and partners">Supports governance, reporting, and partnerships with state and federal land management bodies.</Card>
        <Card title="Wider community">Strengthens local employment, training pathways, and self-determination.</Card>
      </div>

      <h2>What is already being done</h2>
      <p>
        Existing solutions include shipping containers, donga sheds, and informal
        structures. Some outstations have small solar systems and rainwater tanks.
        These approaches deliver partial benefits but are difficult to transport,
        thermally uncomfortable, or not designed for long-term ranger workflows.
      </p>

      <h2>Why current solutions are not enough</h2>
      <p>
        Containers are heavy and difficult to deploy on tracks that flood. Dongas are
        not easily relocatable and often lack integrated power, water, and storage.
        Cultural fit is rarely considered in the procurement of off-the-shelf shelters.
        A purpose-designed modular system can address these gaps.
      </p>

      <h2>What the project aims to achieve</h2>
      <p>
        This project aims to design a culturally appropriate, modular, and maintainable
        service hub that integrates shelter, power, water, and storage; that can be
        transported on existing tracks; and that can be owned and operated by the Lama
        Lama community.
      </p>
    </PageShell>
  );
}
