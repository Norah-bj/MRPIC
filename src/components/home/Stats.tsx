import { statsMetrics } from "@/lib/content";

export default function Stats() {
  return (
    <section className="relative z-20 mx-auto max-w-7xl px-6 md:px-26">
      <div className="rounded-xl border border-white/30 bg-black/20 px-2 py-2 text-white backdrop-blur-sm md:px-8 md:py-12">
        <div className="grid text-center sm:grid-cols-2 lg:grid-cols-4">
          {statsMetrics.map((metric) => (
            <div key={metric.label} className="flex flex-col items-center">
              <p className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                {metric.value}
              </p>
              <p className="mt-1 text-[12px] font-bold tracking-[0.15em] text-white/80">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline Visual */}
        <div className="mt-4 flex items-center gap-2 md:mt-5">
          <button
            type="button"
            aria-label="Previous"
            className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-white/30 text-lg text-white transition-colors"
          >
            ←
          </button>
          <div className="relative flex-1 px-4">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-white/30" />
            <div className="relative flex justify-between">
              {statsMetrics.map((metric, i) => (
                <div
                  key={`${metric.label}-node`}
                  className="relative z-10 h-3 w-3 rounded-full border border-white bg-transparent ring-4 ring-transparent"
                />
              ))}
            </div>
          </div>
          <button
            type="button"
            aria-label="Next"
            className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-white/30 text-lg text-white transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
