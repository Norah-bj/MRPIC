import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Offerings from "@/components/home/Offerings";
import LeadersSection from "@/components/home/LeadersSection";
import JoinOurTeam from "@/components/home/JoinOurTeam";

export default function Home() {
  return (
    <main className="bg-brand-dark text-white">
      <div className="relative">
        <Hero />
        <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1/2">
          <Stats />
        </div>
      </div>
      <LeadersSection />
      <Offerings />
      <JoinOurTeam />
    </main>
  );
}
