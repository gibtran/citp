import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Card } from "@/components/report";
import outstationImage from "../img/outstation.jpg";
export const Route = createFileRoute("/background")({
  head: () => ({
    meta: [
      { title: "Background — Modular Service Hubs" },
      {
        name: "description",
        content:
          "Background, stakeholder significance, and existing solutions for remote infrastructure on Lama Lama Country.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="3 · Background" title="Background">
      <Card title="Context of the problem">
        Lama Lama rangers are not able to access certain areas of land because of the unforgiving
        landscape and intense weather cycles (Engineers Without Borders Australia, 2026; Queensland
        Government, 2019). This causes issues for monitoring land and wildlife for remote places
        within Lama Lama Country (Yintjingga Aboriginal Corporation, n.d.-b). This results in
        rangers having the travel long distances while carrying heavy equipment without any places
        to rest.
      </Card>
      <h2></h2>
      <Card title="What is currently being done">
        Currently, Lama Lama Country has outstations in areas close ot their main location, however
        these hubs are outdated and defective (Engineers Without Borders Australia, 2026; Yintjingga
        Aboriginal Corporation, n.d.-a). The facilities within these outstations cannot provide the
        necessities for rangers, such as running water and secure storage.
      </Card>
      <h2></h2>
      <Card title="Why current solutions are not enough">
        These conditions cause rangers to not achieve the best outcome with their work as they
        cannot perform at their best. Without basic equipment, rangers aren't able to complete their
        job within local areas, let alone remote areas with longer distances. Overall, the current
        outstations results in subpar work from rangers.
      </Card>
      <figure
        style={{
          margin: "32px auto",
          textAlign: "center",
          maxWidth: "900px",
        }}
      >
        <img
          src={outstationImage}
          alt="Existing outstation conditions showing the limitations of current infrastructure."
          style={{
            width: "100%",
            display: "block",
            borderRadius: "12px",
            objectFit: "contain",
          }}
        />
        <figcaption
          style={{
            marginTop: "12px",
            fontStyle: "italic",
            color: "#555",
            textAlign: "center",
          }}
        >
          Figure 2: Current facilities of outstations in Lama Lama Country
        </figcaption>
      </figure>
      <h2></h2>
      <Card title="What the project aims to achieve">
        We aim to create the best possible conditions to allow rangers to effectively monitor and
        assess remote areas within Lama Lama Country. implementing these service modular hubs,
        provide a shelter with basic necessities such as lighting, water and storage to remote
        places. This allows f or safe access points for rangers to rest without the need to
        ravelling back home.
      </Card>
    </PageShell>
  );
}
