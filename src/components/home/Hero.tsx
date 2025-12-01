import Image from "next/image";
import Link from "next/link";
import { heroContent } from "@/lib/content";
import { Badge } from "@/components/ui/Badge";

export default function Hero() {
  const { badge, title, description, ctaHref, ctaLabel, cards, slides } =
    heroContent;
  const [primary, ...panels] = slides;

  return (
    <section className="relative isolate bg-brand-charcoal text-white">
      <div className="grid min-h-[720px] grid-cols-1  lg:grid-cols-[1.8fr_1fr_1fr]">
        {/* Primary Hero Section */}
        <div className="relative h-[520px] lg:h-auto">
          <Image
            src={primary.image}
            alt={primary.label}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="relative z-10 flex h-full flex-col justify-center px-8 py-10 md:px-16 lg:max-w-2xl">
            <Badge className="w-fit border-white/40 bg-white/10 text-white backdrop-blur-sm">
              {badge}
            </Badge>
            <div className="mt-8 space-y-6">
              <div>
                <h1 className="font-display text-5xl font-medium leading-tight tracking-wide md:text-6xl lg:text-7xl">
                  {title}
                </h1>
              </div>
              <p className="max-w-lg text-base leading-relaxed text-white/90 md:text-lg">
                {description}
              </p>
              <div className="pt-4">
                <Link
                  href={ctaHref}
                  className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:text-brand-gold"
                >
                  {ctaLabel}
                  <span className="text-xl transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Panels */}
        {panels.map((panel, index) => (
          <div
            key={panel.id}
            className="group relative h-[320px] overflow-hidden lg:h-auto"
          >
            <Image
              src={panel.image}
              alt={panel.label}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/50" />
            <div className="relative z-10 flex h-full flex-col items-center justify-center gap-8 text-center">
              <p className="font-display text-lg font-medium uppercase tracking-[0.2em] text-white">
                {panel.label}
              </p>
              <Link
                href={cards[index]?.href ?? "#"}
                className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 text-3xl font-light text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10 hover:scale-110"
              >
                +
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
