import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/report";

export const Route = createFileRoute("/recommendations")({
  head: () => ({
    meta: [
      { title: "Recommendations" },
      { name: "description", content: "Recommended next steps for the Modular Service Hub project." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="12 · Recommendations" title="Recommendations">
      <h2>Client Action</h2>
      <p>
        For successful implementation, Traditional Owners and YAC must lead 
        formal site selection and cultural approval processes, determining which outstations 
        are prioritised based on patrol frequency, seasonal access, and cultural significance. 
        The client will also need to pursue specific funding pathways such as the Indigenous 
        Protected Areas program or Queensland Government regional infrastructure grants and finalise 
        supplier quotes for the currently costs in the bill of materials.
        A transport plan for delivering materials to remote sites during the dry season should 
        be arranged with a local Cape York logistics provider.
      </p>
      <h2>Further research</h2>
      <p>
        Material performance data for the aluminium frame, composite panels, and roof insulation under Lama 
        Lama's tropical, extremely hot and cyclonic conditions should be gathered before full-scale fabrication. 
        Rainwater quality testing at each proposed site is needed to confirm whether the first-flush diverter 
        alone is sufficient for safe non-potable use. Labour estimates for assembly remain TBC and should be 
        validated through a supervised trial with rangers. Community feedback from rangers on the internal 
        layout and timber customisation approach should also be collected before committing to full deployment.
      </p>
      
    </PageShell>
  );
}
