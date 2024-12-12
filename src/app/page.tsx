import Features from "@/components/features";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import HowItWorks from "@/components/how-it-works";
import Newsletter from "@/components/newsletter";
import Offerings from "@/components/offerings";
import Pricing from "@/components/pricing";
import ProductShowcase from "@/components/product-showcase";
import TrustedBy from "@/components/trusted-by";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <Header />
    //   <HeroSection />
    // </div>
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrustedBy />
        <HowItWorks />
        <Offerings />
        <Features />
        <ProductShowcase />
        <Pricing />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
