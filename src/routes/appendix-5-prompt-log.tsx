import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Placeholder } from "@/components/report";

export const Route = createFileRoute("/appendix-5-prompt-log")({
  head: () => ({
    meta: [
      { title: "Appendix 4 — Prompt Log" },
      {
        name: "description",
        content:
          "Record of AI prompts used during the design process and how outputs were verified.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="Appendix 4" title="Prompt Log">
      <p>
        Record of AI prompts used during the design process, including purpose, outputs, and how the
        outputs were reviewed and verified.
      </p>
      <table>
        <thead>
          <tr>
            <th>Link</th>
            <th>Date</th>
            <th>Tool</th>
            <th>Prompt</th>
            <th>Use of output</th>
            <th>Verification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td id={"option_1_image_prompt"}>
              <a href="/design-options#option_1_figure">Figure 3.1: Concept diagram for Modular Service Hub</a>
            </td>
            <td>
              <Placeholder>15/05/2026</Placeholder>
            </td>
            <td>
              <Placeholder>ChatGPT</Placeholder>
            </td>
            <td>
              <Placeholder>
                Create a clean 3D concept image of a compact modular service hub for remote
                outstations. The design should show a raised base, enclosed rest/work area,
                lockable entry door, modular wall panels, weather-protective roof, roof runoff
                connection, and rainwater tank. Do not include solar panels, electricity, batteries,
                or device charging features.
              </Placeholder>
            </td>
            <td>
              <Placeholder>
                Generated a concept image for Option 1 to visually communicate the proposed
                Modular Service Hub design.
              </Placeholder>
            </td>
            <td>
              <Placeholder>
                Reviewed by the team against the design description. Solar and electricity features
                were excluded to match the final design scope.
              </Placeholder>
            </td>
          </tr>

          <tr>
            <td id={"option_2_image_prompt"}>
              <a href="/design-options#option_2_figure">Figure 4.1: Concept diagram for Mobile Trailer Hub</a>
            </td>
            <td>
              <Placeholder>15/05/2026</Placeholder>
            </td>
            <td>
              <Placeholder>ChatGPT</Placeholder>
            </td>
            <td>
              <Placeholder>
                Create a clean 3D concept image of a mobile trailer hub for remote ranger
                activities. The image should show a trailer-mounted shelter with fold-out shade,
                lockable storage, water tank, stabilising legs, tow bar, and compact field base
                layout. Do not include solar panels, electricity, batteries, or device charging
                features.
              </Placeholder>
            </td>
            <td>
              <Placeholder>
                Generated a concept image for Option 2 to show how a trailer-mounted hub could
                provide temporary shelter, storage, and water support.
              </Placeholder>
            </td>
            <td>
              <Placeholder>
                Reviewed by the team for consistency with the option description and limitations,
                especially wet-season access and towing constraints.
              </Placeholder>
            </td>
          </tr>

          <tr>
            <td id={"option_3_image_prompt"}>
              <a href="/design-options#option_3_figure">Figure 5.1: Concept diagram for Upgraded Existing Shelter / Storage System</a>
            </td>
            <td>
              <Placeholder>15/05/2026</Placeholder>
            </td>
            <td>
              <Placeholder>ChatGPT</Placeholder>
            </td>
            <td>
              <Placeholder>
                Create a clean 3D concept image of an upgraded existing shelter or storage system
                for a remote outstation. The image should show weatherproof cladding, roof drainage,
                lockable storage, ventilation, shelving, raised supports, and a rainwater tank.
                Do not include solar panels, electricity, batteries, or device charging features.
              </Placeholder>
            </td>
            <td>
              <Placeholder>
                Generated a concept image for Option 3 to show how an existing shelter could be
                upgraded with storage, weather protection, roof drainage, and water support.
              </Placeholder>
            </td>
            <td>
              <Placeholder>
                Reviewed by the team to ensure it represented an upgrade of existing infrastructure
                rather than a new modular unit.
              </Placeholder>
            </td>
          </tr> 

          <tr>
            <td id={"block_diagram_prompt"}>
              <a href="/detailed-design#block_diagram_id">Figure 7: Block diagram</a>
            </td>
            <td>
              <Placeholder>15/05/2026</Placeholder>
            </td>
            <td>
              <Placeholder>ChatGPT</Placeholder>
            </td>
            <td>
              <Placeholder>
                Create a clean infographic-style system block diagram of a Modular Service Hub with
                aluminium walls, a raised platform, rainwater tank, and timber interior furniture.
                Show simple flows for daylight, rainfall to watertank, safe platform access, and
                tools/storage/planning areas. Use a light background, dark text, arrows, and keep it
                simple.
              </Placeholder>
            </td>
            <td>
              <Placeholder>Generated a block diagram to visualise design</Placeholder>
            </td>
            <td>
              <Placeholder>Human oversight</Placeholder>
            </td>
          </tr>
          <tr>
            <td id={"journey_map_prompt"}>
              <a href="/other-considerations#journey_map">Figure 10: Journey Map</a>
            </td>
            <td>
              <Placeholder>15/05/2026</Placeholder>
            </td>
            <td>
              <Placeholder>ChatGPT</Placeholder>
            </td>
            <td>
              <Placeholder>
                Create a clean infographic-style journey map for a Modular Service Hub used by
                Rangers and Traditional Owners. Show simple step-by-step stages: travel, arrive, use
                the hub, go out on Country, return, and maintain. The hub should have aluminium
                walls, a raised platform, a watertank, and timber interior furniture. Use a light
                background, dark text, arrows, and a simple engineering-report style.
              </Placeholder>
            </td>
            <td>
              <Placeholder>
                Generated a journey map to show the use of Modular Service Hubs by Rangers and
                Traditional Owners.
              </Placeholder>
            </td>
            <td>
              <Placeholder>Human oversight</Placeholder>
            </td>
          </tr>

          <tr>
            <td id={"website_layout_prompt"}>
              <a href="https://lovable.dev/dashboard">Website layout and structure</a>
            </td>
            <td>
              <Placeholder>10/05/2026</Placeholder>
            </td>
            <td>
              <Placeholder>Loveable Dev</Placeholder>
            </td>
            <td>
              <Placeholder>
                Create a professional academic Google Sites website template for an EWB Challenge
                engineering design report. The website should include clear navigation, section
                headings, tables, figure placeholders and appendix pages for a Modular Service Hub
                project.
              </Placeholder>
            </td>
            <td>
              <Placeholder>
                Generated the website layout, page structure, section order, table ideas and
                appendix organisation. The output helped the team organise the report into clear
                website pages.
              </Placeholder>
            </td>
            <td>
              <Placeholder>Human oversight</Placeholder>
            </td>
          </tr>

          <tr>
          <td id={"figure_3.2_prompt"}>
            <a href="/design-options#figure_3.2_prompt">Figure 3.2: Concept diagram for showing how Modular Service Hub works</a>
          </td>
          <td>
            <Placeholder>16/06/2026</Placeholder>
          </td>
          <td>
            <Placeholder>ChatGPT</Placeholder>
          </td>
          <td>
            <Placeholder>
              Create a clean 3D concept image of a compact modular service hub for remote outstations.
              The design should show a raised base, enclosed rest/work area, lockable entry door, modular
              wall panels, weather-protective roof, roof runoff connection, and rainwater tank. Can you
              make this image look likes it is assembled and disassembled by ranger.
            </Placeholder>
          </td>
          <td>
            <Placeholder>
              Generated a concept image for Figure 3.2 to illustrate how the Modular Service Hub panels
              are assembled and disassembled by rangers on-site, supporting the explanation of how the
              hub is deployed and relocated across remote locations.
            </Placeholder>
          </td>
          <td>
            <Placeholder>
              Reviewed by the team to confirm the image accurately reflects the assembly process described
              in the How It Works section. Panels were checked to appear modular and manually handled
              rather than machine-installed.
            </Placeholder>
          </td>
          </tr>
          <tr>
          <td id={"figure_4.2_prompt"}>
            <a href="/design-options#figure_4.2_prompt">Figure 4.2: Concept diagram for showing how hub is transported between sites by rangers</a>
          </td>
          <td>
            <Placeholder>16/06/2026</Placeholder>
          </td>
          <td>
            <Placeholder>ChatGPT</Placeholder>
          </td>
          <td>
            <Placeholder>
              Create a clean 3D concept image of a mobile trailer hub for remote ranger activities.
              The image should show a trailer-mounted shelter with fold-out shade, lockable storage,
              water tank, stabilising legs, tow bar, and compact field base layout. Can you make it
              look like it moving site by sites in lama lama country.
            </Placeholder>
          </td>
          <td>
            <Placeholder>
              Generated a concept image for Figure 4.2 to visually demonstrate how the Mobile Trailer
              Hub is towed between multiple sites across Lama Lama Country, supporting the explanation
              of its flexibility and mobility compared to a fixed installation.
            </Placeholder>
          </td>
          <td>
            <Placeholder>
              Reviewed by the team to ensure the image clearly conveyed movement between sites rather
              than permanent installation. Confirmed the trailer elements such as the tow bar, wheels,
              and stabilising legs were visible and consistent with the design description.
            </Placeholder>
          </td>
        </tr>
        <tr>
        <td id={"figure_5.2_prompt"}>
          <a href="/design-options#figure_5.2_prompt">Figure 5.2: Concept diagram for showing how rangers interact with upgraded shelter</a>
        </td>
        <td>
          <Placeholder>16/06/2026</Placeholder>
        </td>
        <td>
          <Placeholder>ChatGPT</Placeholder>
        </td>
        <td>
          <Placeholder>
            Create a clean 3D concept image of an upgraded existing shelter or storage system for a
            remote outstation. The image should show weatherproof cladding, roof drainage, lockable
            storage, ventilation, shelving, raised supports, and a rainwater tank. And can you draw
            the rangers, the one interacting with this upgraded shelter.
          </Placeholder>
        </td>
        <td>
          <Placeholder>
            Generated a concept image for Figure 5.2 to illustrate how rangers would interact with
            the upgraded shelter in a real field context, helping communicate the human scale and
            practical use of the design to the reader.
          </Placeholder>
        </td>
        <td>
          <Placeholder>
            Reviewed by the team to confirm the rangers depicted were shown using the shelter
            appropriately, such as accessing lockable storage or working under the sheltered area.
            Checked that the upgraded features remained clearly visible and not obscured by the figures.
          </Placeholder>
        </td>
      </tr>

        <tr>
      <td id={"figure_1_extendable_modular_service_hub"}>
        <a href="/#figure_1">Figure 1: Concept render of the proposed Modular Service Hub on Lama Lama Country</a>
      </td>
      <td>
        <Placeholder>17/06/2026</Placeholder>
      </td>
      <td>
        <Placeholder>ChatGPT</Placeholder>
      </td>
      <td>
        <Placeholder>
          Create a clean 3D concept image of a compact modular service hub for remote outstations.
          The design should show a raised base, enclosed rest/work area, lockable entry door, modular
          wall panels, weather-protective roof, roof runoff connection, and rainwater tank. Can you
          create one more picture that shows how to extend the hubs by attaching multiple together,
          because our ideas were creating the hub that can be extendable too, with connection joint,
          so it can fit more.
        </Placeholder>
      </td>
      <td>
        <Placeholder>
          Generated a concept image for Figure 1 to visually demonstrate how multiple Modular Service
          Hub units can be connected together using joining joints, illustrating the expandability of
          the design as ranger program needs grow at a single outstation.
        </Placeholder>
      </td>
      <td>
        <Placeholder>
          Reviewed by the team to confirm the connection joints between units were clearly visible
          and that the extended configuration still reflected the core hub design. Checked that the
          image supported the expandability feature described in the design strengths section.
        </Placeholder>
      </td>
    </tr>

        </tbody>
      </table>
    </PageShell>
  );
}
