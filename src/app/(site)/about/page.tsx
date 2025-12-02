import Hero from "@/components/about/Hero";
import VisionSection from "@/components/about/VisionSection";
import CommunityImpact from "@/components/about/CommunityImpact";
import OurReach from "@/components/about/OurReach";
import Testimonials from "@/components/home/Testimonials";
import CoreValues from "@/components/about/CoreValues";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Hero />
      <VisionSection />
      <CommunityImpact />
      <OurReach />
      <Testimonials />
      <CoreValues />
    </main>
  );
}
