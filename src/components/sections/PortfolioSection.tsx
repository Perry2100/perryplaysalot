import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { portfolioItems } from "@/content/siteData";

export function PortfolioSection() {
  return (
    <Section
      id="portfolio"
      eyebrow="UGC samples"
      title="Portfolio (vertical-first)"
      description="Placeholder previews — swap thumbnails, captions, and labels whenever you’re ready."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((item) => (
          <Card
            key={item.title}
            className="group overflow-hidden p-0 hover:-translate-y-0.5 hover:border-white/20"
          >
            <div className="relative aspect-[9/16] w-full bg-[radial-gradient(circle_at_28%_18%,rgba(244,176,122,0.18),transparent_42%),radial-gradient(circle_at_74%_78%,rgba(229,143,122,0.16),transparent_46%),radial-gradient(circle_at_55%_55%,rgba(242,211,153,0.10),transparent_50%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]">
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                <Badge>{item.tag}</Badge>
                <div className="text-xs font-medium text-white/60">9:16</div>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="text-sm font-semibold text-white">
                  {item.title}
                </div>
                <div className="mt-1 text-xs leading-5 text-white/70">
                  {item.caption}
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <div className="absolute inset-0 bg-black/15" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
