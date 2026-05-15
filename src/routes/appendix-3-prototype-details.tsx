import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Figure, Placeholder } from "@/components/report";
import prototypeImage from "../img/prototype.png";
import prototypeImage2 from "../img/prototype3.png";
import prototypeImage3 from "../img/prototype2.png";
export const Route = createFileRoute("/appendix-3-prototype-details")({
  head: () => ({
    meta: [
      { title: "Appendix 3 — Prototype Details" },
      {
        name: "description",
        content:
          "Detailed prototype documentation including drawings, materials, and assembly notes.",
      },
    ],
  }),
  component: Page,
});
function Page() {
  return (
    <PageShell eyebrow="Appendix 3" title="Prototype Details">
      {" "}
      <h2>Drawings</h2>
      <figure>
        <img
          src={prototypeImage}
          alt="Digital prototype view 2"
          style={{ width: "100%", borderRadius: "12px" }}
        />
        <figcaption>
          Figure A3.2: Alternative digital prototype view of the Modular Service Hub.
        </figcaption>
      </figure>
      <figure>
        <img
          src={prototypeImage3}
          alt="Digital prototype view 3"
          style={{ width: "100%", borderRadius: "12px" }}
        />
        <figcaption>
          Figure A3.3: Additional digital prototype view of the Modular Service Hub.
        </figcaption>
      </figure>
      <h2>Assembly notes</h2>{" "}
      <p>
        {" "}
        <p>
          The prototype is used to communicate the design concept and support design evaluation. It
          does not represent a fully engineered model and has not been physically tested for
          structural strength, weather resistance or material durability.
        </p>{" "}
      </p>{" "}
    </PageShell>
  );
}
