import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { site } from "@/content/siteData";

const links = [
  { label: "Work", href: "#portfolio" },
  { label: "Results", href: "#metrics" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;

export function Nav() {
  return (
    <div className="sticky top-0 z-50 border-b border-[rgba(244,176,122,0.14)] bg-[rgba(11,7,6,0.55)] backdrop-blur">
      <Container className="flex h-14 items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight text-white">
          {site.handle}
        </a>
        <div className="hidden items-center gap-6 text-sm text-white/70 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-(--accent)"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button href={site.ctas.primary.href} size="sm" className="hidden sm:inline-flex">
            {site.ctas.primary.label}
          </Button>
          <Button href={site.ctas.primary.href} size="sm" className="sm:hidden">
            {site.ctas.primary.label}
          </Button>
        </div>
      </Container>
    </div>
  );
}
