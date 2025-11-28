import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { productsContent } from "@/lib/content";

export default function Offerings() {
  const { badge, title, ctaHref, ctaLabel, products } = productsContent;

  // Display only 6 products (2 rows of 3)
  const displayProducts = products.slice(0, 6);

  return (
    <section className="bg-white py-24 text-[#431800]">
      <div className="container mx-auto max-w-6xl px-6 space-y-16">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-[#431800] pb-8">
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-[#431800]">
              {badge}
            </h3>
            <h2 className="font-display text-4xl font-bold tracking-tight text-[#431800] md:text-5xl">
              {title}
            </h2>
          </div>
          <Link
            href={ctaHref}
            className="group flex items-center gap-3 text-sm font-bold text-[#431800] transition-colors hover:opacity-80"
          >
            {ctaLabel}
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#431800] text-white transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {displayProducts.map((product, index) => (
              <article
                key={index}
                className={clsx(
                  "relative flex flex-col items-center space-y-6 p-8 text-center",
                  // Horizontal divider (bottom) - inset for first row
                  index < 3 && "after:absolute after:bottom-0 after:left-8 after:right-8 after:h-px after:bg-[#431800]",
                  // Vertical divider (right) - inset
                  index % 3 !== 2 && "md:before:absolute md:before:right-0 md:before:top-8 md:before:bottom-8 md:before:w-px md:before:bg-[#431800]"
                )}
              >
                <div className="relative h-48 w-48 overflow-hidden rounded-full">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold uppercase tracking-widest text-black">
                    {product.title}
                  </h3>
                  <p className="mx-auto max-w-xs text-sm leading-relaxed text-black">
                    {product.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
