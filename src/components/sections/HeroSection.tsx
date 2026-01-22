import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { site, stats } from "@/content/siteData";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-10 sm:pt-20 sm:pb-14">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(244,176,122,0.26),transparent_62%)] blur-2xl" />
        <div className="absolute top-40 right-[-160px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(229,143,122,0.22),transparent_62%)] blur-2xl" />
      </div>

      <Container className="relative">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>UGC</Badge>
            <Badge>Educational memes</Badge>
            <Badge>Student tech</Badge>
            <Badge>Vertical-first</Badge>
          </div>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Student-native UGC that makes productivity tools feel like part of uni life.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            {site.tagline}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={site.ctas.primary.href}>{site.ctas.primary.label}</Button>
            <Button href={site.ctas.secondary.href} variant="secondary">
              {site.ctas.secondary.label}
            </Button>
            <a
              href={site.ctas.mediaKit.href}
              className="text-sm font-semibold text-white/70 transition-colors hover:text-white"
            >
              {site.ctas.mediaKit.label}
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
              >
                <div className="text-lg font-semibold text-white">{s.value}</div>
                <div className="mt-1 text-xs text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
