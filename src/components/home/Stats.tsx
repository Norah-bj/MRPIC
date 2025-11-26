import { statsMetrics } from "@/lib/content";

export default function Stats() {
  return (
    <section className="-mt-24 md:-mt-32">
      <div className="mx-auto max-w-5xl rounded-md border border-brand-sand/40 bg-brand-cream px-8 py-10 text-brand-cocoa shadow-glow">
        <div className="grid gap-6 text-center sm:grid-cols-2 md:grid-cols-4">
          {statsMetrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-2xl font-bold tracking-tight">
                {metric.value}
              </p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.3em]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-6">
          <button
            type="button"
            aria-label="Previous"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-cocoa text-lg"
          >
            ←
          </button>
          <div className="relative flex-1">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-brand-cocoa/40" />
            <div className="relative flex justify-between">
              {statsMetrics.map((metric) => (
                <span
                  key={`${metric.label}-node`}
                  className="h-4 w-4 rounded-full border border-brand-cocoa bg-brand-cream"
                />
              ))}
            </div>
          </div>
          <button
            type="button"
            aria-label="Next"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-cocoa text-lg"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
