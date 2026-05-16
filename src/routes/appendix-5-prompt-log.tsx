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
              <a href="/design-options#option_1_figure">Figure 2: Modular Service Hub concept image</a>
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
              <a href="/design-options#option_2_figure">Figure 3: Mobile Trailer Hub concept image</a>
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
              <a href="/design-options#option_3_figure">Figure 4: Upgraded Existing Shelter concept image</a>
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
              <a href="/detailed-design#block_diagram_id">Figure 6: Block diagram</a>
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
              <a href="/other-considerations#journey_map">Figure 8: Journey Map</a>
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
        </tbody>
      </table>
    </PageShell>
  );
}
