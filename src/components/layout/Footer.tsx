import Link from "next/link";
import { footerContent } from "@/lib/content";

export default function Footer() {
  const { brand, description, navLinks, socialLinks, note, poweredBy } =
    footerContent;

  return (
    <footer className="bg-brand-cocoa text-white">
      <div className="container space-y-6 py-12 text-center text-sm">
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.45em] text-brand-cream">
          <span className="text-base font-semibold tracking-[0.6em]">
            {brand}
          </span>
          <span className="text-white/40">|</span>
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30 text-[0.65rem] font-semibold hover:border-white"
            >
              {social.icon}
            </Link>
          ))}
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold uppercase tracking-[0.45em] text-brand-cream/70">
          {navLinks.map((link, index) => (
            <div key={link.href} className="flex items-center gap-4">
              <Link href={link.href} className="hover:text-white">
                {link.label}
              </Link>
              {index !== navLinks.length - 1 && (
                <span className="text-white/30">|</span>
              )}
            </div>
          ))}
        </nav>

        <p className="mx-auto max-w-3xl text-xs text-brand-cream/80">
          {description}
        </p>
        <p className="text-xs text-brand-cream/80">{note}</p>
        <p className="text-xs text-brand-cream/60">{poweredBy}</p>
      </div>
    </footer>
  );
}
