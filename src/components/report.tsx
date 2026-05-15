import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const NAV_SECTIONS: { label: string; to: string }[] = [
  { label: "1. Executive Summary", to: "/" },
  { label: "2. Project Details", to: "/project-details" },
  { label: "3. Background", to: "/background" },
  { label: "4. Problem & Criteria", to: "/problem-criteria" },
  { label: "5. Design Options", to: "/design-options" },
  { label: "6. Design Selection", to: "/design-selection" },
  { label: "7. Detailed Design", to: "/detailed-design" },
  { label: "8. Prototyping", to: "/prototyping" },
  { label: "9. Implementation Plan", to: "/implementation" },
  { label: "10. Cost Analysis", to: "/cost-analysis" },
  { label: "11. Other Considerations", to: "/other-considerations" },
  { label: "12. Recommendations", to: "/recommendations" },
  { label: "13. References", to: "/references" },
];

export const APPENDIX_SECTIONS: { label: string; to: string }[] = [
  { label: "Appendix 1: Group Charter", to: "/appendix-1-group-charter" },
  { label: "Appendix 2: Meeting Minutes", to: "/appendix-2-meeting-minutes" },
  { label: "Appendix 3: Prototype Details", to: "/appendix-3-prototype-details" },
  { label: "Appendix 4: Prompt Log", to: "/appendix-5-prompt-log" },
];

export function PageShell({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-10 lg:py-14">
      <header className="mb-8 border-b border-border pb-6">
        {eyebrow && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {eyebrow}
          </p>
        )}
        <h1>{title}</h1>
        {lead && <p className="mt-3 text-lg text-muted-foreground">{lead}</p>}
      </header>
      {children}
      <PageNavFooter currentPath={typeof window !== "undefined" ? window.location.pathname : ""} />
    </article>
  );
}

function PageNavFooter({ currentPath }: { currentPath: string }) {
  const all = [...NAV_SECTIONS, ...APPENDIX_SECTIONS];
  const idx = all.findIndex((s) => s.to === currentPath);
  const prev = idx > 0 ? all[idx - 1] : null;
  const next = idx >= 0 && idx < all.length - 1 ? all[idx + 1] : null;
  return (
    <nav className="mt-14 flex items-center justify-between border-t border-border pt-6 text-sm">
      <div>
        {prev && (
          <Link to={prev.to} className="text-muted-foreground hover:text-primary">
            ← {prev.label}
          </Link>
        )}
      </div>
      <div>
        {next && (
          <Link to={next.to} className="text-muted-foreground hover:text-primary">
            {next.label} →
          </Link>
        )}
      </div>
    </nav>
  );
}

export function Figure({ caption, label }: { caption: string; label?: string }) {
  return (
    <figure>
      <div className="flex aspect-[16/9] w-full items-center justify-center rounded-md border border-dashed border-border bg-secondary/60 text-sm text-muted-foreground">
        {label ?? "[Figure placeholder — insert diagram or image]"}
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export function TableCaption({ children }: { children: ReactNode }) {
  return <p className="caption mb-4">{children}</p>;
}

export function Card({
  title,
  children,
  accent,
}: {
  title: string;
  children: ReactNode;
  accent?: boolean;
}) {
  return (
    <div
      className={
        "rounded-lg border p-5 " +
        (accent ? "border-accent/40 bg-accent/5" : "border-border bg-card")
      }
    >
      <h3 className="mt-0 mb-2 text-base">{title}</h3>
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  );
}

export function Placeholder({ children }: { children: ReactNode }) {
  return (
    <span className="rounded bg-secondary px-1.5 py-0.5 font-mono text-[0.8em] text-secondary-foreground">
      {children}
    </span>
  );
}
