import { DollarSign, PieChart, Shield } from "lucide-react";

export default function InvestmentSections() {
  const sections = [
    {
      icon: DollarSign,
      title: "Land Investment",
      description: "Invest in agricultural land development with guaranteed returns and ownership options.",
      returns: "12-15% annual returns",
    },
    {
      icon: PieChart,
      title: "Production Partnership",
      description: "Partner with us in rice and maize production and processing operations for shared profits.",
      returns: "12-15% annual returns",
    },
    {
      icon: Shield,
      title: "Sustainability",
      description: "Low-risk investment bonds backed by our agricultural assets and operations.",
      returns: "12-15% annual returns",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Title */}
        <h2 className="text-4xl font-bold text-black text-center mb-16 md:text-5xl">
          Investment Sections
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                className="text-center space-y-6 p-8"
              >
                {/* Icon */}
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-black">
                  {section.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-black/70 leading-relaxed">
                  {section.description}
                </p>

                {/* Returns */}
                <p className="text-base font-bold text-black">
                  {section.returns}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
