import { statsMetrics } from "@/lib/content";

export default function Stats() {
  return (
    <section className="relative z-20 mx-auto max-w-7xl px-6 md:px-8">
      <div className="rounded-xl border border-white/30 bg-black/20 px-8 py-12 text-white backdrop-blur-sm md:px-12 md:py-16">
        <div className="grid gap-12 text-center sm:grid-cols-2 lg:grid-cols-4">
          {statsMetrics.map((metric) => (
            <div key={metric.label} className="flex flex-col items-center">
              <p className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                {metric.value}
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.15em] text-white/80">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline Visual */}
        <div className="mt-16 flex items-center gap-4 md:mt-20">
          <button
            type="button"
            aria-label="Previous"
            className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-white/30 text-lg text-white transition-colors hover:border-white hover:bg-white hover:text-brand-dark"
          >
            ←
          </button>
          <div className="relative flex-1 px-4">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-white/30" />
            <div className="relative flex justify-between">
              {statsMetrics.map((metric, i) => (
                <div
                  key={`${metric.label}-node`}
                  className={`relative z-10 h-3 w-3 rounded-full border border-white bg-transparent ring-4 ring-transparent ${
                    i === 1 ? "scale-125 border-4 bg-white" : ""
                  }`}
                />
              ))}
            </div>
          </div>
          <button
            type="button"
            aria-label="Next"
            className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-white/30 text-lg text-white transition-colors hover:border-white hover:bg-white hover:text-brand-dark"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
