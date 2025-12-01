"use client";

import Image from "next/image";
import clsx from "clsx";
import { whatWeDoContent } from "@/lib/content";
import { useState, Fragment } from "react";

export default function Products() {
  const { badge, title, tabs, consumableProducts, otherProducts } = whatWeDoContent;
  const [activeTab, setActiveTab] = useState("consumable");

  const displayProducts = activeTab === "consumable" 
    ? consumableProducts 
    : otherProducts;

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[680px] w-full">
        {/* Background Image */}
        <Image
          src="/Product-bg.png"
          alt="Products background"
          fill
          className="object-cover"
          priority
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-start justify-end px-6 md:px-[10%]">
          <div className="space-y-6">
            <span className="inline-block border border-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
              {badge}
            </span>
            <h1 className="text-5xl font-bold text-white mb-18 md:text-6xl">
              Our products
            </h1>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-white py-24 text-[#431800]">
        <div className="container mx-auto max-w-6xl px-6 space-y-16">
          {/* Title */}
          <div className="text-center space-y-4">
            <h3 className="text-xl font-bold text-[#000000]">
              {badge}
            </h3>
            <h2 className="font-display text-4xl font-bold tracking-tight text-[#000000] md:text-5xl">
              {title}
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex items-center justify-center gap-6">
            {tabs.map((tab, index) => (
              <Fragment key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={clsx(
                    "relative pb-4 text-base font-semibold transition-colors",
                    activeTab === tab.id
                      ? "text-[#000000]"
                      : "text-[#000000]/60 hover:text-[#000000]"
                  )}
                >
                  {tab.label}
                  
                  {/* Active indicator underline */}
                  {activeTab === tab.id && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[2.5px] bg-[#431800]" />
                  )}
                </button>
                
                {/* Dot separator between tabs */}
                {index < tabs.length - 1 && (
                  <span className="h-3 w-3 rounded-full bg-[#431800]" />
                )}
              </Fragment>
            ))}
          </div>

          {/* Products Grid */}
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {displayProducts.map((product, index) => (
                <article
                  key={index}
                  className={clsx(
                    "relative flex flex-col items-center space-y-6 p-8 text-center",
                    // Horizontal divider (bottom) - inset for rows except last
                    index < displayProducts.length - 3 && "after:absolute after:bottom-0 after:left-8 after:right-8 after:h-px after:bg-[#431800]",
                    // Vertical divider (right) - inset for columns except last in row
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
    </>
  );
}
