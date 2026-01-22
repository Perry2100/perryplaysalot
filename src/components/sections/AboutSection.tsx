import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { about, site } from "@/content/siteData";

export function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={about.headline}
      description="Professional enough for brands, relatable enough for students."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <p className="text-sm leading-7 text-white/70 sm:text-base">
            {about.body}
          </p>
        </Card>
        <Card>
          <div className="text-sm font-semibold text-white">Quick details</div>
          <div className="mt-3 space-y-2 text-sm text-white/70">
            <div>
              <span className="text-white/50">Creator:</span> {site.name}
            </div>
            <div>
              <span className="text-white/50">Handle:</span> {site.handle}
            </div>
            <div>
              <span className="text-white/50">Base:</span> {site.location}
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
