import { Container } from "@/components/layout/Container";
import { site } from "@/content/siteData";

const links = [
  { label: "Results", href: "#metrics" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;

export function Nav() {
  return (
    <div className="sticky top-0 z-50 border-b border-[rgba(244,176,122,0.14)] bg-[rgba(11,7,6,0.55)] backdrop-blur">
      <Container className="flex h-14 items-center">
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
        <a
          href="#top"
          className="ml-auto font-semibold tracking-tight text-(--foreground)"
        >
          {site.name}
        </a>
      </Container>
    </div>
  );
}
