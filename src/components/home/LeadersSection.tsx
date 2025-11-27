import Link from "next/link";
import { leadersContent } from "@/lib/content";


export default function LeadersSection() {
  const { badge, title, ctaHref, ctaLabel, cards } = leadersContent;

  return (
    <section className="relative isolate overflow-hidden text-white">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/LeaderSection-bg.png"
          alt="Leaders background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container relative z-10 flex flex-col items-center justify-center py-20 md:py-32">
        {/* Header Content */}
        <div className="mb-16 max-w-4xl text-center">
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-white">
            {badge}
          </span>
          <h2 className="mb-6 font-display text-3xl font-semibold leading-tight md:text-5xl">
            {title}
          </h2>
          <Link
            href={ctaHref}
            className="group inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-white/80"
          >
            {ctaLabel}
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid w-full max-w-6xl border border-white divide-y divide-white md:grid-cols-2 md:divide-x md:divide-y-0">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-center justify-center bg-transparent px-8 py-16 text-center backdrop-blur-sm md:px-12 md:py-20"
            >
              <h3 className="mb-6 font-display text-2xl font-bold capitalize md:text-3xl">
                {card.title}
              </h3>
              <p className="max-w-md text-base leading-relaxed text-white/90 md:text-lg">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
