export default function CoreValues() {
  const values = [
    {
      title: "Quality Excellence",
      description: "Committed to producing the highest quality products through modern processing facilities and quality control.",
      icon: (
        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: "Community Focus",
      description: "Zero-waste approach using by-products from rice and maize processing to create animal feed and eco-friendly briquettes.",
      icon: (
        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Sustainability",
      description: "Zero-waste approach using by-products from rice and maize processing to create animal feed and eco-friendly briquettes.",
      icon: (
        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold uppercase tracking-wide text-black">
          OUR CORE VALUES
        </h2>
        
        {/* First Row */}
        <div className="mb-12 grid grid-cols-1 gap-28 md:grid-cols-3">
          {values.map((value, index) => (
            <div key={`row1-${index}`} className="flex flex-col items-center space-y-4 text-center">
              <div className="text-black">{value.icon}</div>
              <h3 className="text-lg font-bold text-black">{value.title}</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row (duplicate) */}
        <div className="grid grid-cols-1 gap-28 md:grid-cols-3">
          {values.map((value, index) => (
            <div key={`row2-${index}`} className="flex flex-col items-center space-y-4 text-center">
              <div className="text-black">{value.icon}</div>
              <h3 className="text-lg font-bold text-black">{value.title}</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
