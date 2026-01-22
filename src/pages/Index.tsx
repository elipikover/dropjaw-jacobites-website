import HeroSection from "@/components/HeroSection";
import IntroducingSection from "@/components/IntroducingSection";
import ContentSection from "@/components/ContentSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <IntroducingSection />
      <ContentSection />
      <FooterSection />
    </main>
  );
};

export default Index;
