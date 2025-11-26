import Image from "next/image";
import Link from "next/link";
import { leadersContent } from "@/lib/content";
import { Badge } from "@/components/ui/Badge";

export default function LeadersSection() {
  const { badge, title, subtitle, ctaHref, ctaLabel, background, cards } =
    leadersContent;

  return (
    <section className="relative isolate overflow-hidden bg-brand-dark text-white">
      <div className="absolute inset-0">
        <Image
          src={background}
          alt="Leadership meeting"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90" />
      </div>

      <div className="relative container space-y-10 py-34">
        <div className="space-y-5 text-center">
          <Badge className="mx-auto border-white/40 bg-transparent">
            {badge}
          </Badge>
          <h2 className="mx-auto max-w-3xl font-display text-3xl uppercase tracking-[0.35em] md:text-4xl">
            {title}
          </h2>
          <p className="text-xs uppercase tracking-[0.45em] text-white/70">
            {subtitle}
          </p>
          <Link
            href={ctaHref}
            className="mx-auto flex w-fit items-center gap-3 rounded-full border border-white/50 px-6 py-2 text-xs font-semibold uppercase tracking-[0.4em] transition hover:border-white"
          >
            {ctaLabel}
            <span className="text-base">→</span>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white/50 bg-black/25 px-8 py-10 text-center backdrop-blur-sm md:text-left"
            >
              <h3 className="text-xl font-semibold uppercase tracking-[0.3em]">
                {card.title}
              </h3>
              <p className="mt-5 text-sm text-white/80">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
