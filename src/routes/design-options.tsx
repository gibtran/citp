import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Figure } from "@/components/report";
import option1Image from "../img/option1-modular-service-hub.png";
import option2Image from "../img/option2-mobile-trailer-hub.png";
import option3Image from "../img/option3-upgraded-shelter.png";

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
  imageSrc,
  imageAlt,
  sourceId,
}: {
  number: number;
  title: string;
  description: string;
  works: string;
  strengths: string[];
  limitations: string[];
  reference: string;
  figureNo: number;
  imageSrc: string;
  imageAlt: string;
  sourceId?: string;
}) {
  return (
    <section className="mb-10 rounded-lg border border-border bg-card p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        Option {number}
      </p>
      <h2 className="mt-1">{title}</h2>
      <figure
        id={`option_${number}_figure`}
        style={{
          margin: "24px auto",
          textAlign: "center",
          maxWidth: "900px",
        }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
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
            width: "100%",
          }}
        >
          Figure {figureNo}: Concept diagram for {title}.
          {sourceId && (
            <>
              {" "}
              <a href={`/appendix-5-prompt-log#${sourceId}`}>Source</a>
            </>
          )}
        </figcaption>
      </figure>
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
        imageSrc={option1Image}
        imageAlt="Concept image of the Modular Service Hub with raised base, enclosed rest and work area, lockable entry door, modular wall panels, weather-protective roof, and rainwater tank."
        sourceId="option_1_image_prompt"
        description="A purpose-built 2.5 m × 2.5 m modular hub designed for selected outstations and ranger camps. It includes a sheltered rest/work area, lockable storage, a raised floor, weather-resistant cladding, and a rainwater tank for basic non-drinking water support."
        works="Separate floor, wall, roof, and frame panels are transported to site and assembled on a raised footing system. The roof directs runoff into a side or rear-mounted water tank for uses such as cleaning tools and handwashing. Units can be installed individually or combined later if a larger base is needed."
        strengths={[
          "Designed specifically for ranger workflows.",
          "Compact footprint reduces site disturbance.",
          "Modular panels support easier transport and installation.",
          "Raised floor and weather-resistant materials suit wet-season conditions.",
          "Lockable storage helps protect tools and safety equipment.",
          "Can be expanded over time.",
        ]}
        limitations={[
          "Higher initial design cost than off-the-shelf options.",
          "Requires trained crew for first-time assembly.",
          "Rainwater would need testing/treatment before drinking use.",
        ]}
        reference="[Reference placeholder — modular remote shelter precedent]"
      />

      <Option
        number={2}
        figureNo={3}
        title="Mobile Trailer Hub"
        imageSrc={option2Image}
        imageAlt="Concept image of a mobile trailer hub with temporary shelter, lockable storage, water tank, tow bar, stabilising legs, and transportable base."
        sourceId="option_2_image_prompt"
        description="A trailer-mounted hub designed to be moved between sites instead of being permanently installed. It can provide temporary shelter, lockable storage, and basic water support for short-term ranger activities."
        works="The trailer is stored at a central ranger base, towed to a selected site, levelled, and used as a temporary field base. After use, it can return to the depot for maintenance, cleaning, and storage."
        strengths={[
          "Can support multiple sites with one unit.",
          "Centralised maintenance is easier at a single depot.",
          "Minimal fixed site disturbance.",
          "Useful for temporary fieldwork or trial activities.",
        ]}
        limitations={[
          "Restricted by track conditions and wet-season access.",
          "Smaller storage and workspace capacity.",
          "Requires a suitable towing vehicle, registration, servicing, and secure storage.",
          "Does not establish a long-term presence on Country.",
        ]}
        reference="[Reference placeholder — mobile field unit example]"
      />

      <Option
        number={3}
        figureNo={4}
        title="Upgraded Existing Shelter / Storage System"
        imageSrc={option3Image}
        imageAlt="Concept image of an upgraded existing shelter with weatherproof cladding, lockable storage, roof drainage, ventilation, shelving, and rainwater tank."
        sourceId="option_3_image_prompt"
        description="This option upgrades existing sheds, shelters, or storage areas instead of introducing a new unit. Improvements may include weatherproofing, lockable storage, roof drainage, rainwater tanks, shelving, and safer rest/planning space."
        works="Existing structures are audited for condition, safety, location, and suitability for ranger use. Suitable structures are then repaired and upgraded based on each site’s needs."
        strengths={[
          "Lower cost where usable structures already exist.",
          "Reuses existing infrastructure and reduces material waste.",
          "Familiar to current users.",
          "Faster to implement at suitable sites.",
        ]}
        limitations={[
          "Only works where usable structures already exist.",
          "Existing buildings may be damaged, poorly located, or too small.",
          "Different layouts make maintenance harder to standardise.",
          "Does not help sites with no current infrastructure.",
        ]}
        reference="[Reference placeholder — remote shelter upgrade case study]"
      />
    </PageShell>
  );
}
