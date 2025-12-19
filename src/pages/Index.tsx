import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DestinationsCarousel from "@/components/DestinationsCarousel";
import CuisineSection from "@/components/CuisineSection";
import HotelsSection from "@/components/HotelsSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import ChatButton from "@/components/ChatButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* SEO Meta - handled by index.html */}
      
      <Header />
      <HeroSection />
      <DestinationsCarousel />
      <CuisineSection />
      <HotelsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
      <ChatButton />
    </main>
  );
};

export default Index;
