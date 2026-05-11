import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { NAV_SECTIONS, APPENDIX_SECTIONS } from "@/components/report";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Return to Executive Summary
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a href="/" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "EWB Challenge Report — Modular Service Hubs for Lama Lama Country" },
      { name: "description", content: "Engineering design report for modular service hubs supporting Lama Lama Country outstations and Rangers." },
      { name: "author", content: "EWB Challenge Team" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function SiteHeader() {
  return (
    <header className="border-b border-border bg-card/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="no-underline">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent">
            EWB Challenge · Design Report
          </p>
          <p className="font-serif text-lg font-semibold text-foreground">
            Modular Service Hubs — Lama Lama Country
          </p>
        </Link>
        <span className="hidden text-xs text-muted-foreground md:block">
          Design Area 1 · Infrastructure and Access
        </span>
      </div>
    </header>
  );
}

function Sidebar() {
  return (
    <aside className="hidden w-72 shrink-0 border-r border-border bg-secondary/30 lg:block">
      <nav className="sticky top-0 max-h-screen overflow-y-auto p-6 text-sm">
        <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-wider text-muted-foreground">
          Report Sections
        </p>
        <ul className="space-y-1">
          {NAV_SECTIONS.map((s) => (
            <li key={s.to}>
              <Link
                to={s.to}
                className="block rounded px-2 py-1.5 text-foreground no-underline hover:bg-secondary"
                activeProps={{ className: "block rounded px-2 py-1.5 bg-primary/10 text-primary font-medium no-underline" }}
                activeOptions={{ exact: true }}
              >
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 mb-2 text-[0.7rem] font-semibold uppercase tracking-wider text-muted-foreground">
          Appendices
        </p>
        <ul className="space-y-1">
          {APPENDIX_SECTIONS.map((s) => (
            <li key={s.to}>
              <Link
                to={s.to}
                className="block rounded px-2 py-1.5 text-foreground no-underline hover:bg-secondary"
                activeProps={{ className: "block rounded px-2 py-1.5 bg-primary/10 text-primary font-medium no-underline" }}
              >
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

function MobileNav() {
  return (
    <details className="border-b border-border bg-card lg:hidden">
      <summary className="cursor-pointer px-6 py-3 text-sm font-medium text-foreground">
        Contents
      </summary>
      <div className="px-6 pb-4 text-sm">
        <ul className="space-y-1">
          {[...NAV_SECTIONS, ...APPENDIX_SECTIONS].map((s) => (
            <li key={s.to}>
              <Link to={s.to} className="block py-1 text-foreground no-underline">
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-muted-foreground">
        <p>
          EWB Challenge · Modular Service Hubs for Lama Lama Country. Acknowledging the
          Lama Lama people as the Traditional Owners of the lands and waters on which this
          project is based.
        </p>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background">
        <SiteHeader />
        <MobileNav />
        <div className="mx-auto flex w-full max-w-6xl flex-1">
          <Sidebar />
          <main className="min-w-0 flex-1">
            <Outlet />
          </main>
        </div>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
