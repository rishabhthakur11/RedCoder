import BannerSection from "@/components/landingComponents/BannerSection";
import ChoosingSection from "@/components/landingComponents/ChoosingSection";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/landingComponents/HeroSection";
import { OperationSection } from "@/components/landingComponents/OperationSection";

export default function Home() {
  return (
    <>
      <main className="scroll-smooth">
        {/* HeaderSection */}
        <section className="sticky top-0 z-50 bg-mildBrown pt-3 pb-3 lg:p-3">
          <Header problemPage={false} />
        </section>
        <section id="heroSection">
          <HeroSection />
        </section>
        <section id="operationSection">
          <OperationSection />
        </section>
        <section id="choosingSection">
          <ChoosingSection />
        </section>
        <section id="bannerSection">
          <BannerSection />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
