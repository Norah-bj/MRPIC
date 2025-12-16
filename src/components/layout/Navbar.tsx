"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Who we are", href: "/about" },
  { label: "What we do", href: "/products" },
  { label: "Investment", href: "/investment" },
  { label: "Gallery", href: "/gallery" },
];

const brandName = "MRPIC";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-xl bg-[#0f0d0c]/15 border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-white/5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-white">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.3em]"
        >
          {brandName}
        </Link>

        <div className="hidden gap-8 text-sm font-medium md:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === link.href
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  isActive ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/contact"
          className="rounded-3xl border border-white/70 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/10"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}
