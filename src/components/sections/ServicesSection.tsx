import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { services } from "@/content/siteData";

export function ServicesSection() {
  return (
    <Section
      id="services"
      eyebrow="Offerings"
      title="Services"
      description="Pick what you need — or bundle for a full campus campaign."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {services.map((s) => (
          <Card
            key={s.title}
            className="hover:-translate-y-0.5 hover:border-white/20"
          >
            <div className="text-base font-semibold text-white">{s.title}</div>
            <p className="mt-2 text-sm leading-6 text-white/70">
              {s.description}
            </p>
          </Card>
        ))}
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <div className="text-sm font-semibold text-white">Popular bundles</div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm font-semibold text-white">Starter</div>
              <div className="mt-1 text-xs text-white/60">
                2x UGC videos + 2x meme posts
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm font-semibold text-white">Launch</div>
              <div className="mt-1 text-xs text-white/60">
                4x UGC videos (ad + organic variants)
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm font-semibold text-white">Campus campaign</div>
              <div className="mt-1 text-xs text-white/60">
                6–8 pieces across memes + demos + POVs
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm font-semibold text-white">Add-ons</div>
              <div className="mt-1 text-xs text-white/60">
                Hooks, scripting, VO, raw footage
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="text-sm font-semibold text-white">Turnaround</div>
          <div className="mt-2 text-sm text-white/70">
            Most projects deliver in <span className="text-white">48–72h</span>
            after product access + brief.
          </div>
          <div className="mt-4 text-xs text-white/60">
            Usage rights, whitelisting, and deliverables are flexible.
          </div>
        </Card>
      </div>
    </Section>
  );
}
