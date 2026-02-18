import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { PremiumSection } from "@/components/sections/PremiumSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <TrustSection />
      <ServicesSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <PremiumSection />
      <FaqSection />
      <FinalCTASection />
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Index;
