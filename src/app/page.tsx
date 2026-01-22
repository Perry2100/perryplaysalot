import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { AboutSection } from "@/components/sections/AboutSection";
import { BrandsSection } from "@/components/sections/BrandsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MetricsSection } from "@/components/sections/MetricsSection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhySection } from "@/components/sections/WhySection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
      >
        Skip to content
      </a>

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(244,176,122,0.16),transparent_42%),radial-gradient(circle_at_88%_28%,rgba(229,143,122,0.14),transparent_46%),radial-gradient(circle_at_52%_92%,rgba(242,211,153,0.10),transparent_48%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />
      </div>

      <main id="content" className="pb-10">
        <Nav />
        <HeroSection />
        <PillarsSection />
        <PortfolioSection />
        <MetricsSection />
        <BrandsSection />
        <WhySection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
