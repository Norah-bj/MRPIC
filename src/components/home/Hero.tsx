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
      <div className="grid min-h-[720px] grid-cols-1 md:grid-cols-3">
        <div className="relative h-[520px] md:h-auto">
          <Image
            src={primary.image}
            alt={primary.label}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
          <div className="relative z-10 flex h-full flex-col justify-between px-8 py-10">
            <Badge className="border-white/40 bg-white/10 text-white">
              {badge}
            </Badge>
            <div className="space-y-3">
              <div>
                <p className="text-xs uppercase tracking-[0.6em] text-white/70">
                  Guided by our
                </p>
                <h1 className="mt-3 font-display text-4xl uppercase tracking-[0.35em] md:text-5xl">
                  {title}
                </h1>
              </div>
              <p className="text-sm leading-relaxed text-white/80">
                {description}
              </p>
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.45em]"
              >
                {ctaLabel}
                <span className="text-lg">→</span>
              </Link>
            </div>
          </div>
        </div>

        {panels.map((panel, index) => (
          <div key={panel.id} className="relative h-[320px] md:h-auto">
            <Image
              src={panel.image}
              alt={panel.label}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.5em]">
                {panel.label}
              </p>
              <Link
                href={cards[index]?.href ?? "#"}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/70 text-2xl font-light transition hover:border-white"
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
