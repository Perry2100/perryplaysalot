import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { brands } from "@/content/siteData";

export function BrandsSection() {
  return (
    <Section
      id="brands"
      eyebrow="Collabs"
      title="Brands & collaborations"
      description="Placeholder logos — drop in real ones anytime."
    >
      <Card className="p-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((b) => (
            <div
              key={b}
              className="flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs font-semibold text-white/70"
            >
              {b}
            </div>
          ))}
        </div>
      </Card>
    </Section>
  );
}
