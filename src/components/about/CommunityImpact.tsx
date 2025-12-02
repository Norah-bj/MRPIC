import { communityImpactContent } from "@/lib/content";

export default function CommunityImpact() {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "partnership":
        return (
          <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case "solar":
        return (
          <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case "health":
        return (
          <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-block border border-gray-400 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-gray-700 mb-4">
            {communityImpactContent.badge}
          </span>
          <h2 className="mb-4 text-4xl font-bold text-black">
            {communityImpactContent.title}
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            {communityImpactContent.description}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {communityImpactContent.stats.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-br from-[#431800]/10 to-orange-400/10 rounded-full -mr-16 -mt-16 transition-transform duration-300 group-hover:scale-150" />
              <div className="relative">
                <div className="mb-3 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#431800] to-orange-600">
                  {stat.value}
                </div>
                <h3 className="mb-2 text-xl font-bold text-black">
                  {stat.label}
                </h3>
                <p className="text-sm text-gray-600">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Programs Section */}
        <div>
          <h3 className="mb-10 text-center text-3xl font-bold text-black">
            Community Programs
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {communityImpactContent.programs.map((program, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl"
              >
                {/* Icon Container */}
                <div className="mb-6 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#431800] to-orange-500 p-2 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {getIcon(program.icon)}
                </div>
                
                {/* Content */}
                <h4 className="mb-3 text-lg font-bold text-black leading-tight">
                  {program.title}
                </h4>
                <p className="text-sm leading-relaxed text-gray-600">
                  {program.description}
                </p>

                {/* Decorative element */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#431800] to-orange-500 transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
