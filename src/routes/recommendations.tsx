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
        For the project to be successful, Traditional Owners and YAC should lead the official process of 
        choosing sites and giving cultural approval. They should decide which outstations should be 
        prioritised based on how often rangers visit, whether the sites can be reached during different 
        seasons, and their cultural importance. The client will also need to apply for funding through 
        programs such as the Indigenous Protected Areas Program or regional infrastructure grants from 
        the Queensland Government, and confirm supplier prices for the current costs listed in the bill 
        of materials. A transport plan for delivering materials to remote sites during the dry season 
        should also be organised with a local transport or logistics company in Cape York. 
      </p>
      <h2>Further research</h2>
      <p>
        Before building the full system, information should be collected to understand how the aluminium frame, 
        composite panels, and roof insulation will perform in Lama Lama’s tropical climate, very hot 
        temperatures, and cyclone conditions. Rainwater quality should also be tested at each planned site 
        to check if the first-flush diverter is enough to make the water safe for non-drinking purposes. The 
        amount of labour and time needed to assemble the system is still to be confirmed and should be tested 
        through a supervised trial with rangers. Feedback from rangers about the inside layout and the timber 
        customisation options should also be collected before deciding to fully install the system. 
      </p>
      
    </PageShell>
  );
}
