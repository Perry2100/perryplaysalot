import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { site } from "@/content/siteData";

function mailtoHref() {
  const subject = encodeURIComponent("UGC collaboration inquiry");
  const body = encodeURIComponent(
    "Hi!\n\nWe’d love to collaborate. Here are the details:\n- Brand:\n- Product:\n- Timeline:\n- Budget range:\n\nLink to brief (optional):\n\n—",
  );

  return `mailto:${site.email}?subject=${subject}&body=${body}`;
}

export function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s make student-native content that converts"
      description="If you’re a brand manager: send the brief + timeline and I’ll reply with next steps."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <div className="text-sm font-semibold text-white">Fastest way</div>
          <div className="mt-2 text-sm leading-6 text-white/70">
            Email me at <span className="text-white">{site.email}</span> with your
            product, timeline, and budget range.
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Button href={mailtoHref()}>Email me</Button>
            <Button href="#portfolio" variant="secondary">
              Review UGC samples
            </Button>
          </div>
          <div className="mt-5 text-xs text-white/60">
            Typical reply time: same day (unless I’m in class).
          </div>
        </Card>
        <Card>
          <div className="text-sm font-semibold text-white">Best-fit brands</div>
          <div className="mt-3 space-y-2 text-sm text-white/70">
            <div>EdTech & study platforms</div>
            <div>Note-taking / productivity tools</div>
            <div>Student SaaS & campus startups</div>
            <div>Laptops / accessories for students</div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
