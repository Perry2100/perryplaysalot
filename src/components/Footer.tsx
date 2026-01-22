import { Container } from "@/components/layout/Container";
import { site } from "@/content/siteData";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-white/60">
          {site.handle} · {new Date().getFullYear()}
        </div>
        <div className="text-sm text-white/60">{site.email}</div>
      </Container>
    </footer>
  );
}
