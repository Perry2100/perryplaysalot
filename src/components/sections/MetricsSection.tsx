import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";

export function MetricsSection() {
  return (
    <Section
      id="metrics"
      eyebrow="Social proof"
      title="Results brands care about"
      description="Clean, scannable metrics (swap with your real numbers)."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:-translate-y-0.5 hover:border-white/20">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80">
              <Icon name="bolt" className="h-5 w-5" />
            </div>
            <div>
              <div className="text-lg font-semibold text-white">6–12%</div>
              <div className="text-xs text-white/60">Avg engagement</div>
            </div>
          </div>
        </Card>
        <Card className="hover:-translate-y-0.5 hover:border-white/20">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80">
              <Icon name="spark" className="h-5 w-5" />
            </div>
            <div>
              <div className="text-lg font-semibold text-white">300K+</div>
              <div className="text-xs text-white/60">Monthly views</div>
            </div>
          </div>
        </Card>
        <Card className="hover:-translate-y-0.5 hover:border-white/20">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80">
              <Icon name="check" className="h-5 w-5" />
            </div>
            <div>
              <div className="text-lg font-semibold text-white">Brand-safe</div>
              <div className="text-xs text-white/60">Humor, but approved</div>
            </div>
          </div>
        </Card>
        <Card className="hover:-translate-y-0.5 hover:border-white/20">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80">
              <Icon name="tech" className="h-5 w-5" />
            </div>
            <div>
              <div className="text-lg font-semibold text-white">48–72h</div>
              <div className="text-xs text-white/60">Typical turnaround</div>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-6 text-white/70">
        <span className="font-semibold text-white">What this means:</span> you get
        student-native hooks, clear product demos, and edits optimized for retention
        — without the content feeling like an ad.
      </div>
    </Section>
  );
}
