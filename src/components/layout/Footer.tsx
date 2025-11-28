import Link from "next/link";
import { footerContent } from "@/lib/content";
import { FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon } from "@/components/icons/SocialIcons";


export default function Footer() {
  const { brand, description, navLinks, socialLinks, note, poweredBy } =
    footerContent;

  return (
    <footer className="bg-[#2C1800] text-white">
      <div className="container mx-auto max-w-6xl space-y-8 px-6 py-8 text-center">
        {/* Brand and Social Media */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <h3 className="text-xl font-bold tracking-wider">{brand}</h3>
          <span className="text-white/40">|</span>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const IconComponent = 
                social.icon === "facebook" ? FacebookIcon :
                social.icon === "twitter" ? TwitterIcon :
                social.icon === "linkedin" ? LinkedInIcon :
                social.icon === "instagram" ? InstagramIcon :
                null;

              return (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-sm bg-white/10 text-xs font-semibold text-white transition-colors hover:bg-white/20"
                >
                  {IconComponent && <IconComponent />}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/90">
          {navLinks.map((link, index) => (
            <div key={link.href} className="flex items-center gap-6">
              <Link href={link.href} className="hover:text-white">
                {link.label}
              </Link>
              {index !== navLinks.length - 1 && (
                <span className="text-white/30">|</span>
              )}
            </div>
          ))}
        </nav>

        {/* Description */}
        <p className="mx-auto max-w-3xl text-sm leading-relaxed text-white/80">
          {description}
        </p>

        {/* Note */}
        <p className="text-sm text-white/70">{note}</p>

        {/* Copyright */}
        <p className="text-xs text-white/60">{poweredBy}</p>
      </div>
    </footer>
  );
}
