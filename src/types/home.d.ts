export interface HeroSlide {
  id: string;
  label: string;
  image: string;
}

export interface HeroContent {
  badge: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  cards: {
    label: string;
    href: string;
  }[];
  slides: HeroSlide[];
}

export interface StatMetric {
  value: string;
  label: string;
  description: string;
}

export interface LeadersContent {
  badge: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  background: string;
  cards: {
    title: string;
    description: string;
  }[];
}

export interface ProductItem {
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface ProductsContent {
  badge: string;
  title: string;
  ctaLabel: string;
  ctaHref: string;
  products: ProductItem[];
}

export interface FooterContent {
  brand: string;
  description: string;
  navLinks: { label: string; href: string }[];
  socialLinks: { label: string; href: string; icon: string }[];
  note: string;
  poweredBy: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  highlight?: string;
}

export interface TestimonialsContent {
  badge: string;
  title: string;
  description: string;
  testimonials: Testimonial[];
}

