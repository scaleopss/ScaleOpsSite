import { Navbar } from '@/components/layout/navbar';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { ToolSection } from '@/components/sections/tool-section';
import { ProcessSection } from '@/components/sections/process-section';
import { CredibilitySection } from '@/components/sections/credibility-section';
import { PortfolioSection } from '@/components/sections/portfolio-section';
import { PricingSection } from '@/components/sections/pricing-section';
import { CtaSection } from '@/components/sections/cta-section';
import { Footer } from '@/components/layout/footer';

export default function HomePage() {
  return (
    <main className="bg-[#FAFAFA] text-[#111111]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ToolSection />
      <ProcessSection />
      <CredibilitySection />
      <PortfolioSection />
      <PricingSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
