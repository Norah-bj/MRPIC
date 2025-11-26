import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Offerings from "@/components/home/Offerings";
import LeadersSection from "@/components/home/LeadersSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-brand-dark text-white">
      <Hero />
      <LeadersSection />
      <div className="relative z-10 -mt-10 pb-100 md:-mt-220">
        <Stats />
      </div>
      <Offerings />
      <Footer />
    </main>
  );
}
