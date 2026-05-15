import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Placeholder } from "@/components/report";

export const Route = createFileRoute("/appendix-5-prompt-log")({
  head: () => ({
    meta: [
      { title: "Appendix 5 — Prompt Log" },
      { name: "description", content: "Record of AI prompts used during the design process and how outputs were verified." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="Appendix 5" title="Prompt Log">
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
        </tbody>
      </table>
    </PageShell>
  );
}
