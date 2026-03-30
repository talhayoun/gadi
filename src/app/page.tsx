import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import TechnicalShowcase from "@/components/TechnicalShowcase";
import TrustSection from "@/components/TrustSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        {/* <ServicesGrid /> */}
        <TechnicalShowcase />
        <TrustSection />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
