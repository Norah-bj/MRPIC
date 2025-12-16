"use client";

import { useState } from "react";
import clsx from "clsx";
import ContactHero from "@/components/contact/Hero";
import ContactForm from "@/components/forms/ContactForm";
import Socials from "@/components/contact/Socials";
import Map from "@/components/ui/Map";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"offices" | "contact">("contact");

  return (
    <>
      <ContactHero />
      
      <section className="bg-white py-24">
        <div className="container mx-auto max-w-6xl px-6">
          {/* Header */}
          <div className="text-center space-y-8 mb-10">
            <h2 className="text-4xl font-bold text-black md:text-5xl">
              Connnect With Us WorldWide
            </h2>
            
            {/* Tabs */}
            <div className="flex items-center justify-center gap-6">
              <button
                onClick={() => setActiveTab("contact")}
                className={clsx(
                  "relative pb-4 text-base font-semibold transition-colors",
                  activeTab === "contact"
                    ? "text-[#000000]"
                    : "text-[#000000]/60 hover:text-[#000000]"
                )}
              >
                Contact us
                {activeTab === "contact" && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[2.5px] bg-[#431800]" />
                )}
              </button>

              <span className="h-2 w-2 rounded-full bg-[#431800]" />

              <button
                onClick={() => setActiveTab("offices")}
                className={clsx(
                  "relative pb-4 text-base font-semibold transition-colors",
                  activeTab === "offices"
                    ? "text-[#000000]"
                    : "text-[#000000]/60 hover:text-[#000000]"
                )}
              >
                Our Offices
                {activeTab === "offices" && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[2.5px] bg-[#431800]" />
                )}
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="mt-12">
            {activeTab === "contact" ? (
              <div className="flex flex-col lg:flex-row gap-16 justify-between">
                <ContactForm />
                <div className="lg:w-1/3">
                  <Socials />
                </div>
              </div>
            ) : (
              <div className="flex flex-col lg:flex-row gap-16 justify-between">
                <div className="w-full">
                  <Map />
                </div>
                <div className="lg:w-1/3">
                  <Socials />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
