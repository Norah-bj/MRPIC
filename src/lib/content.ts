import type {
  FooterContent,
  HeroContent,
  LeadersContent,
  ProductsContent,
  StatMetric,
} from "@/types/home";

export const heroContent: HeroContent = {
  badge: "Guided by our",
  title: "Purpose",
  description:
    "Home of Buryohe rice and Umumaf maize flour. Four modern processing facilities in Mugina, Kamonyi District, transforming local harvests into premium products that serve markets across Kigali, Huye, Muhanga and beyond.",
  ctaLabel: "Discover who we are",
  ctaHref: "/about",
  cards: [
    { label: "Products", href: "/products" },
    { label: "Investment", href: "/investment" },
  ],
  slides: [
    {
      id: "purpose",
      label: "Purpose",
      image: "/down.jpg",
    },
    {
      id: "products",
      label: "Products",
      image: "/Rectangle 2.png",
    },
    {
      id: "investment",
      label: "Investment",
      image: "/Rectangle 3.png",
    },
  ],
};

export const statsMetrics: StatMetric[] = [
  {
    value: "4",
    label: "Processing facilities",
    description: "Purpose-built plants serving regional demand.",
  },
  {
    value: "500+",
    label: "Areas under cultivation",
    description: "Carefully stewarded farmland across Rwanda.",
  },
  {
    value: "1000+",
    label: "Farmers supported",
    description: "Empowered growers in long-term partnerships.",
  },
  {
    value: "30+",
    label: "Stores available",
    description: "Premium staples stocked nationwide.",
  },
];

export const leadersContent: LeadersContent = {
  badge: "Our Leaders",
  title: "Creating Growth on the foundation of trust and innovation",
  subtitle: "Meet the visionaries steering Mukunguri Rice.",
  ctaLabel: "Meet the visionaries",
  ctaHref: "/about#leadership",
  background:
    "/LeaderSection-bg.png",
  cards: [
    {
      title: "Vision",
      description:
        "To preserve and ensure the genetic integrity of the seed by encouraging farmers to adopt scientific agricultural practices and by leveraging world-class rice processing technologies.",
    },
    {
      title: "Mission",
      description:
        "To emerge as the industry benchmark for product quality and service by transforming local harvests into premium staples trusted by families and partners alike.",
    },
  ],
};

export const productsContent: ProductsContent = {
  badge: "Our products",
  title: "Delivering excellence in every field",
  ctaLabel: "Explore our products",
  ctaHref: "/products",
  products: [
    {
      title: "BURYOHE Rice",
      description:
        "Our flagship rice brand - processed at our Rice Mill from paddy rice grown in Mukunguri valley. Premium cleaned rice ready for market across Rwanda.",
      image: "/Recipe 1.png",
      alt: "Bowl of white rice",
    },
    {
      title: "UMUMAF Maize Flour",
      description:
        "Our premium maize flour brand - processed at our Maize Flour Plant from local farmers. Enriched maize meal for households and schools across Rwanda.",
      image: "/Recipe 2.png",
      alt: "Bowl of maize flour",
    },
    {
      title: "Brown Rice",
      description:
        "Nutrient-rich brown rice grown using sustainable methods. Healthier choice for conscious consumers.",
      image: "/Recipe 3.png",
      alt: "Bowl of brown rice",
    },
    {
      title: "BURYOHE Rice",
      description:
        "Our flagship rice brand - processed at our Rice Mill from paddy rice grown in Mukunguri valley. Premium cleaned rice ready for market across Rwanda.",
      image: "/Recipe 4.png",
      alt: "Serving of rice",
    },
    {
      title: "UMUMAF Maize Flour",
      description:
        "Our premium maize flour brand - processed at our Maize Flour Plant from local farmers. Enriched maize meal for households and schools across Rwanda.",
      image: "/Recipe 5.png",
      alt: "Maize flour scooped in bowl",
    },
    {
      title: "Brown Rice",
      description:
        "Nutrient-rich brown rice grown using sustainable methods. Healthier choice for conscious consumers.",
      image: "/Recipe 6.png",
      alt: "Cooked brown rice",
    },
  ],
};

export const whatWeDoContent = {
  badge: "OUR PRODUCTS",
  title: "Product Range",
  tabs: [
    {
      id: "consumable",
      label: "Consumable products",
      labelKinyarwanda: "(ibicuruzwa bikoreshwa n'abantu cyangwa amatungo)",
    },
    {
      id: "other",
      label: "Other products",
      labelKinyarwanda: "(ibicuruzwa bitari ibyo kurya cyangwa kunywa)",
    },
  ],
  consumableProducts: [
    {
      title: "Rice Snacks",
      description: "Delicious rice cakes and crisps made from premium rice varieties, perfect for a healthy snack.",
      image: "/Recipe 1.png",
      alt: "Rice snacks including cakes and crisps",
    },
    {
      title: "Ready-to-Cook Rice Mixes",
      description: "Convenient pilau mix and flavored rice options that bring authentic taste to your table.",
      image: "/Recipe 2.png",
      alt: "Ready-to-cook rice mix packages",
    },
    {
      title: "Instant Porridge Mixes",
      description: "Nutritious and easy-to-prepare porridge mixes for a wholesome breakfast.",
      image: "/Recipe 3.png",
      alt: "Instant porridge mix",
    },
    {
      title: "Poultry Feed",
      description: "High-quality feed formulated specifically for optimal poultry health and growth.",
      image: "/Recipe 4.png",
      alt: "Poultry feed",
    },
    {
      title: "Pig Feed",
      description: "Nutrient-rich feed designed to support healthy pig development and productivity.",
      image: "/Recipe 5.png",
      alt: "Pig feed",
    },
    {
      title: "Fish Feed",
      description: "Specialized aquaculture feed for sustainable fish farming operations.",
      image: "/Recipe 6.png",
      alt: "Fish feed",
    },
    {
      title: "Rice Bran Oil",
      description: "Premium cooking oil extracted from rice bran, rich in antioxidants and nutrients.",
      image: "/Recipe 1.png",
      alt: "Rice bran oil bottle",
    },
    {
      title: "Organic Compost",
      description: "Natural fertilizer and soil amendment for sustainable farming practices.",
      image: "/Recipe 2.png",
      alt: "Organic compost",
    },
    {
      title: "Rice Bran Supplements",
      description: "Nutritional supplements for animals, enhancing their diet with essential nutrients.",
      image: "/Recipe 3.png",
      alt: "Rice bran animal supplements",
    },
  ],
  otherProducts: [
    {
      title: "Rice Husk Briquettes",
      description: "Eco-friendly charcoal alternative made from rice husks for sustainable energy.",
      image: "/Recipe 4.png",
      alt: "Rice husk briquettes",
    },
    {
      title: "Animal Bedding",
      description: "Clean and absorbent bedding material for poultry and pig housing.",
      image: "/Recipe 5.png",
      alt: "Animal bedding",
    },

    {
      title: "Biodegradable Packaging",
      description: "Eco-friendly cups, plates, and trays made from rice-based materials.",
      image: "/Recipe 1.png",
      alt: "Biodegradable packaging products",
    },

    {
      title: "Rice Husk Energy",
      description: "Biogas and other energy products derived from rice processing waste.",
      image: "/Recipe 3.png",
      alt: "Rice husk energy products",
    },
    {
      title: "Branded Packaging",
      description: "Premium quality packaging bags for agricultural and commercial use.",
      image: "/Recipe 4.png",
      alt: "Branded packaging bags",
    },
    {
      title: "Milling Services",
      description: "Professional milling and drying services for rice and grain processing.",
      image: "/Recipe 5.png",
      alt: "Milling services",
    },
    {
      title: "Storage Services",
      description: "Secure warehousing and storage facilities for agricultural products.",
      image: "/Recipe 6.png",
      alt: "Storage warehousing",
    },
    {
      title: "Agri-Tourism",
      description: "Educational farm tours and agri-tourism experiences for visitors.",
      image: "/Recipe 1.png",
      alt: "Agri-tourism packages",
    },
    {
      title: "Training Services",
      description: "Professional training programs for farmers on modern agricultural practices.",
      image: "/Recipe 2.png",
      alt: "Farmer training services",
    },
  ],
};

export const footerContent: FooterContent = {
  brand: "Mukunguri Rice",
  description:
    "Thank you for trusting Mukunguri Rice. We are more than a store — we are a community built on trust, quality, and care. Every harvest is selected with your satisfaction in mind.",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Investment", href: "/investment" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
  socialLinks: [
    { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
    { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
    { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  ],
  note: "Follow us on social media for updates, offers, and more. We appreciate your support and look forward to serving you again.",
  poweredBy: "© 2025 Mukunguri | Powered by Nora",
};
