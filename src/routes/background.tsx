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
      <Card title="Context of the problem">
        Lama Lama rangers are not able to access certain areas of land because of the unforgiving
        landscape and intense weather cycles. This causes issues for monitoring land and wildlife
        for remote places within Lama Lama Country. This results in rangers having the travel long
        distances while carrying heavy equipment without any places to rest.
      </Card>
      <h2></h2>
      <Card title="What is currently being done">
        Currently, Lama Lama Country has outstations in areas close ot their main location, however
        these hubs are outdated and defective. The facilities within these outstations cannot
        provide the necessities for rangers, such as running water and secure storage.
      </Card>
      <h2></h2>
      <Card title="Why current solutions are not enough">
        These conditions cause rangers to not achieve the best outcome with their work as they cannot
        perform at their best. Without basic equipment, rangers aren't able to complete their job within
        local areas, let alone remote areas with longer distances. Overall, the current outstations
        result in subpar work from rangers
      </Card>
      <h2></h2>
      <Card title="What the project aims to achieve">
        Lama Lama rangers are not able to access certain areas of land because of the unforgiving
        landscape and intense weather cycles. This causes issues for monitoring land and wildlife
        for remote places within Lama Lama Country. This results in rangers having the travel long
        distances while carrying heavy equipment without any places to rest.
      </Card>
    </PageShell>
  );
}
