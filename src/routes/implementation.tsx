import { createFileRoute } from "@tanstack/react-router";
import { PageShell, TableCaption } from "@/components/report";

export const Route = createFileRoute("/implementation")({
  head: () => ({
    meta: [
      { title: "Implementation Plan" },
      { name: "description", content: "Stage-by-stage implementation plan and responsibility matrix for the Modular Service Hub project." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="9 · Implementation Plan" title="Implementation Plan">
      <p>
        Implementation is staged to centre community decision-making, manage seasonal
        access, and validate the design before scaled deployment.
      </p>

    
      <h2>Construction</h2>
      <p>Due its modular nature the each hub can be constructed and deconstructed in under an hour without any additional tools needed to connect each of the panels. In regards to training which will be used to inform rangers on how to correctly assemble and use the hubs a three day training course will consist of practical and informational training to ensure all aspects are understood.</p>
      <h2>Introduction to Community and Client</h2>
      <p>Once rangers have been introduced and are familiar with the hubs, inspections will be conducted quarter annually for 2 years to ensure that each of the hubs remain fully functional throughout this period and beyond rangers will acquire full ownership of the hubs.</p>
      <h2>Evaluation</h2>
      <p>During these inspections developers will assess that functionality is remaining consistent and ensure that conditions of the hubs are remaining within a functional state.</p>
      <h2>Affect on Community</h2>
      <p>Upon the implementation of the hubs the local community will be greatly improved as access to tools, provisions, shade and shelter when needed will ultimately improve the workflow of rangers as well as provide additional assistance to community members and visitors that require assistance especially throughout the wet season.</p>
      <h2>Repairs</h2>
      <p>In regards to the repairability of the hubs the main material of the hubs aluminium which is highly durable however it is often quite difficult to repair therefore rangers have the option to use some of the available local materials or due to the modular nature panels can be easily swapped out from other hubs that aren't actively being used.</p>
    </PageShell>
  );
}
