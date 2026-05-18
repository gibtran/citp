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
        provide the necessities for rangers to complete their job effectively. These current hubs have
        issues such as unhygienic, no running water and no storage
      </Card>
      <h2></h2>
      <Card title="Why current solutions are not enough">
        Lama Lama rangers are not able to access certain areas of land because of the unforgiving
        landscape and intense weather cycles. This causes issues for monitoring land and wildlife
        for remote places within Lama Lama Country. This results in rangers having the travel long
        distances while carrying heavy equipment without any places to rest.
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
