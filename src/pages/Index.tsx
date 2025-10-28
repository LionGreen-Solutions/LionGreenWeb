
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceBanner from "@/components/ServiceBanner";
import HeroSlider from "@/components/home/HeroSlider";
import HeroSection from "@/components/home/HeroSection";
import CategoryShowcase from "@/components/home/CategoryShowcase";
import BenefitsSection from "@/components/home/BenefitsSection";
import QuickLinksSection from "@/components/home/QuickLinksSection";
import PartnersSection from "@/components/home/PartnersSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import OngoingProjectsSection from "@/components/home/OngoingProjectsSection";
import AboutSnippet from "@/components/home/AboutSnippet";
import ProjectHighlight from "@/components/home/ProjectHighlight";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <HeroSlider />

      <HeroSection />

      {/* Service Banner */}
      <div className="container mx-auto px-4 mt-8">
        <ServiceBanner />
      </div>

      <AboutSnippet />
      
      <CategoryShowcase />

      <ProjectHighlight />

      <OngoingProjectsSection />

      <BenefitsSection />

      <QuickLinksSection />

      <PartnersSection />

      <NewsletterSection />
      
      <Footer />
    </div>
  );
};

export default Index;
