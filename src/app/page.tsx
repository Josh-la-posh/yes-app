import BlogSection from "@/components/home-components/blog-section";
import FAQ from "@/components/home-components/faq";
import Footer from "@/components/home-components/footer";
import Header from "@/components/home-components/header";
import HeroSection from "@/components/home-components/heroSection";
import HowItWorks from "@/components/home-components/how-it-works";
import ContractBanner from "@/components/home-components/ocntract-banner";
import Offerings from "@/components/home-components/offerings";
import Pricing from "@/components/home-components/pricing";
import TrustedBy from "@/components/home-components/trusted-by";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen px-12 md:px-16 lg:px-20">
      <Header />
      <main className="mt-12 md:mt-24 space-y-16">
        <HeroSection />
        <TrustedBy />
        <HowItWorks />
        <Offerings />
        <Pricing />
        <BlogSection />
        <FAQ />
        <ContractBanner />
      </main>
      <Footer />
    </div>
  );
}
