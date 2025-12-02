import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function InvestmentOpportunity() {
  const benefits = [
    "Transparent operations and regular reporting",
    "High returns on agricultural investments",
    "Sustainable and eco-friendly farming practices",
    "Direct ownership of productive assets",
    "Professional management by expert agronomists",
    "Contribution to local community development",
    "Partnership with COOPRORIZ-ABAHUZABIKORWA cooperative",
    "Support for 1000+ farmers and 52+ permanent employees",
  ];

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center space-y-2 mb-2">
          <h2 className="text-4xl font-bold text-black md:text-5xl">
            Investment opportunities
          </h2>
          <p className="text-base text-black/70 max-w-2xl mx-auto">
            Join us in revolutionizing agriculture and building a sustainable future. Invest in real assets with real returns.
          </p>
        </div>

        {/* Why Invest Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center py-10">
          {/* Left: Benefits List */}
          <div className="space-y-6 flex flex-col items-center">
            <h3 className="text-3xl font-bold text-black">
              Why Invest With Us?
            </h3>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle className="w-4.5 h-4.5 text-black flex-shrink-0 mt-0.5" />
                  <p className="text-base text-black">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <button className="bg-[#431800] text-white px-8 py-3 rounded font-semibold hover:bg-[#431800]/90 transition-colors">
                Request investment information
              </button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-[250px] lg:h-[350px] w-full max-w-md mx-auto">
            <Image
              src="/Recipe 1.png"
              alt="Investment opportunity"
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
