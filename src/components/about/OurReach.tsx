import { communityImpactContent } from "@/lib/content";
import { MapPin } from "lucide-react";

export default function OurReach() {
  const { reach } = communityImpactContent;

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center space-y-8">
          <div>
            <h3 className="text-3xl font-bold text-black mb-4">
              {reach.title}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {reach.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {reach.areas.map((area, index) => (
              <div
                key={index}
                className="group flex items-center gap-3 rounded-full border-2 border-[#431800] bg-orange-50 px-6 py-3 transition-all hover:bg-[#431800] hover:text-white"
              >
                <MapPin className="h-5 w-5 text-[#431800] group-hover:text-white" />
                <span className="font-semibold text-black group-hover:text-white">
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
