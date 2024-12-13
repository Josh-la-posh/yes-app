import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import HowItWorks from "@/components/how-it-works";
import ContractBanner from "@/components/ocntract-banner";
import Offerings from "@/components/offerings";
import Pricing from "@/components/pricing";
import TrustedBy from "@/components/trusted-by";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrustedBy />
        <HowItWorks />
        <Offerings />
        <Pricing />
        <FAQ />
        <ContractBanner />
      </main>
      <Footer />
    </div>
  );
}
