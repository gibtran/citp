import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Figure } from "@/components/report";
import option1Image from "../img/option1-modular-service-hub.png";
import howItWorks1 from "../img/howItWorks1.png";
import howItWorks2 from "../img/howItWorks2.png";
import howItWorks3 from "../img/howItWorks3.png";
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
  figureNo,
  imageSrc,
  imageAlt,
  sourceId,
  imageWork,
  workAlt,
  figureWorkNo,
  sourceWorkId,
  numberWork,
  titleWork
}: {
  number: number;
  title: string;
  description: string;
  works: string;
  strengths: string[];
  limitations: string[];
  figureNo: number;
  imageSrc: string;
  imageAlt: string;
  sourceId?: string;
  sourceWorkId?: string;
  imageWork: string;
  workAlt: string
  figureWorkNo: number;
  numberWork: number;
  titleWork: string;
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
      <figure
        id={`figure_${numberWork}_prompt`}
        style={{
          margin: "24px auto",
          textAlign: "center",
          maxWidth: "900px",
        }}
      >
        <img
          src={imageWork}
          alt={workAlt}
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
          Figure {figureWorkNo}: Concept diagram for {titleWork}.
          {sourceWorkId && (
            <>
              {" "}
              <a href={`/appendix-5-prompt-log#${sourceWorkId}`}>Source</a>
            </>
          )}
        </figcaption>
      </figure>
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
        figureNo={3.1}
        title="Modular Service Hub"
        imageSrc={option1Image}
        imageAlt="Concept image of the Modular Service Hub with raised base, enclosed rest and work area, lockable entry door
        , modular wall panels, weather-protective roof, and rainwater tank."
        sourceId="option_1_image_prompt"
        description="A purpose-built 2.5 m x 2.5 m modular hub designed for installation at selected outstations and ranger camps 
        across remote Country. It provides rangers with a dedicated, weatherproof space for rest, planning, and secure tool storage 
        addressing the lack of reliable on-site infrastructure at locations where rangers currently operate without any shelter or 
        lockable facilities during field work."
        imageWork={howItWorks1}
        titleWork="showing how Modular Service Hub works"
        workAlt="Concept image how the Modular Service Hub is aseembled and disassembled"
        figureWorkNo={3.2}
        numberWork={3.2}
        sourceWorkId="figure_3.2_prompt"
        works="Pre-fabricated floor, wall, roof, and frame panels are transported individually to remote sites by ranger vehicle or 
        small aircraft, then manually assembled on-site onto a raised footing system that keeps the structure level and dry on uneven 
        or flood-prone ground. If relocation is needed, the hub can be disassembled back into panels and rebuilt elsewhere, though this 
        takes considerable time and effort. The angled roof channels rainwater into a side or rear-mounted tank for non-drinking uses like 
        tool cleaning and handwashing. Multiple units can stand independently at different sites or be joined together as ranger program needs grow."
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
          "Take effort and time consideration for assemble and disassemble"
        ]}
      />

      <Option
        number={2}
        figureNo={4.1}
        title="Mobile Trailer Hub"
        imageSrc={option2Image}
        imageAlt="Concept image of a mobile trailer hub with temporary shelter, lockable storage, water tank, tow bar, 
        stabilising legs, and transportable base."
        sourceId="option_2_image_prompt"
        description="A trailer-mounted hub designed to be towed between multiple sites across Lama Lama Country rather than being 
        permanently installed at any single location. It provides rangers with flexible, on-demand shelter, lockable storage, and 
        basic water support for short-term field activities particularly useful for trial patrols, seasonal work, or sites where 
        a permanent structure is not yet justified."
        imageWork={howItWorks2}
        titleWork="showing how hub is transported between sites by rangers"
        workAlt="Concept image of Mobile Trailer Hub that can be moved to selected site"
        figureWorkNo={4.2}
        numberWork={4.2}
        sourceWorkId="figure_4.2_prompt"
        works="The trailer is stored at a central ranger depot when not in use. To deploy it, a ranger vehicle tows it directly to a 
        selected site along existing tracks, where stabilising legs are lowered to level the unit on uneven ground. Unlike the 
        Modular Service Hub, no assembly is required the hub arrives ready to use within minutes of reaching the site. Rangers 
        can access the sheltered work area, retrieve equipment from lockable storage compartments, and use the onboard water tank 
        for basic field hygiene. The fold-out shade panel provides additional cover for outdoor tasks beside the trailer. After the 
        field activity is complete, the legs are raised, the trailer is hitched back to the vehicle, and towed to the depot for 
        cleaning, maintenance, and secure storage ready to be deployed to a different site next time."
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
      />

      <Option
        number={3}
        figureNo={5.1}
        title="Upgraded Existing Shelter / Storage System"
        imageSrc={option3Image}
        imageAlt="Concept image of an upgraded existing shelter with weatherproof cladding, lockable storage, roof drainage, 
        ventilation, shelving, and rainwater tank."
        sourceId="option_3_image_prompt"
        description="This option upgrades existing sheds, shelters, or storage areas instead of introducing a new unit. 
        Improvements may include weatherproofing, lockable storage, roof drainage, rainwater tanks, shelving, and safer rest/planning 
        space."
        imageWork={howItWorks3}
        titleWork="showing how rangers interact with upgraded shelter"
        workAlt="Concept image of how the ranger interacts with upgraded shelter"
        figureWorkNo={5.2}
        numberWork={5.2}
        sourceWorkId="figure_5.2_prompt"
        works="The process begins with a site audit where each existing structure is assessed for its condition, safety, location, 
        and suitability for ranger use. Factors considered include structural integrity, proximity to patrol areas, floor space, and 
        whether the building can practically support the planned upgrades. Structures that pass the audit are then upgraded based on 
        the specific needs of that site. Common improvements include replacing deteriorating cladding for weatherproofing, fitting a 
        lockable door and internal shelving, installing guttering to direct rainwater into a newly added tank, and improving 
        ventilation for hot conditions. Because each upgrade is tailored to an existing building, no two sites will look identical 
        but all will meet a consistent standard of safety, security, and basic water access. Sites with no suitable existing 
        structure would not be eligible and would require one of the other two solutions instead."
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
      />
    </PageShell>
  );
}
