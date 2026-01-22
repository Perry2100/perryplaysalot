import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { pillars } from "@/content/siteData";

export function PillarsSection() {
  return (
    <Section
      id="pillars"
      eyebrow="Content pillars"
      title="What I create"
      description="Fast-scrolling formats, built for student attention spans and brand clarity."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {pillars.map((p) => (
          <Card
            key={p.title}
            className="group hover:-translate-y-0.5 hover:border-white/20"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80">
                <Icon name={p.icon} className="h-5 w-5" />
              </div>
              <div>
                <div className="text-base font-semibold text-white">{p.title}</div>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  {p.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
