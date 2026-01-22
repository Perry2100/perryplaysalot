import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { reasons } from "@/content/siteData";

export function WhySection() {
  return (
    <Section
      id="why"
      eyebrow="Brand fit"
      title="Why brands hire me"
      description="Fast to scan. Easy to forward internally."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {reasons.map((r) => (
          <Card
            key={r.title}
            className="hover:-translate-y-0.5 hover:border-white/20"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80">
                <Icon name="check" className="h-5 w-5" />
              </div>
              <div>
                <div className="text-base font-semibold text-white">
                  {r.title}
                </div>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  {r.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
