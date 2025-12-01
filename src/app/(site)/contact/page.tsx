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
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl font-bold text-black md:text-5xl">
              Connnect With Us WorldWide
            </h2>
            
            {/* Tabs */}
            <div className="flex items-center justify-center gap-6">
              <button
                onClick={() => setActiveTab("offices")}
                className={clsx(
                  "relative pb-4 text-2xl font-bold transition-colors",
                  activeTab === "offices"
                    ? "text-black"
                    : "text-black/60 hover:text-black"
                )}
              >
                Our Offices
                {activeTab === "offices" && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#431800]" />
                )}
              </button>

              <span className="h-3 w-3 rounded-full bg-[#431800]" />

              <button
                onClick={() => setActiveTab("contact")}
                className={clsx(
                  "relative pb-4 text-2xl font-bold transition-colors",
                  activeTab === "contact"
                    ? "text-black"
                    : "text-black/60 hover:text-black"
                )}
              >
                Contact us
                {activeTab === "contact" && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#431800]" />
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
              <Map />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
