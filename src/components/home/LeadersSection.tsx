import Link from "next/link";
import { leadersContent } from "@/lib/content";
import { ArrowRight } from "lucide-react";


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

      <div className="container mx-auto relative z-10 flex flex-col items-center justify-center py-20 md:py-32">
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
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid w-full max-w-6xl border border-white divide-y divide-white md:grid-cols-2 md:divide-x md:divide-y-0">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex h-full flex-col items-center justify-center bg-transparent px-6 py-12 text-center backdrop-blur-sm md:px-8 md:py-12"
            >
              <h3 className="mb-6 font-display text-xl font-bold capitalize md:text-2xl">
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
