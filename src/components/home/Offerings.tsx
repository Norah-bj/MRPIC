import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { productsContent } from "@/lib/content";
import { Badge } from "@/components/ui/Badge";

export default function Offerings() {
  const { badge, title, ctaHref, ctaLabel, products } = productsContent;

  return (
    <section className="bg-[#FFF9F2] py-24 text-brand-cocoa">
      <div className="container space-y-12">
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-brand-cocoa/15 pb-6">
          <div className="space-y-3">
            <Badge className="border-brand-cocoa/30 bg-transparent text-brand-cocoa">
              {badge}
            </Badge>
            <h2 className="font-display text-3xl uppercase tracking-[0.25em] md:text-4xl">
              {title}
            </h2>
          </div>
          <Link
            href={ctaHref}
            className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.45em]"
          >
            {ctaLabel}
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-cocoa text-lg">
              +
            </span>
          </Link>
        </div>

        <div className="overflow-hidden rounded-2xl border border-brand-cocoa/15">
          <div className="grid grid-cols-1 divide-y divide-brand-cocoa/15 md:grid-cols-3 md:divide-y-0">
            {products.map((product, index) => (
              <article
                key={product.title + product.description}
                className={clsx(
                  "space-y-4 bg-white p-10 text-center",
                  index < 3 && "md:border-b md:border-brand-cocoa/15",
                  index % 3 !== 2 && "md:border-r md:border-brand-cocoa/15"
                )}
              >
                <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border border-brand-cocoa/20 bg-brand-cream">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold uppercase tracking-[0.25em]">
                  {product.title}
                </h3>
                <p className="text-sm text-brand-cocoa/80">
                  {product.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
