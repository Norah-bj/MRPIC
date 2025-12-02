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

export const contactContent = {
  title: "Contact us on",
  phone: {
    label: "Phone number",
    value: "(+250) 792050511",
  },
  email: {
    label: "Email",
    value: "bonnieumurerwa@gmail.com",
  },
  address: {
    label: "Address",
    value: "Kamonyi, Mugina",
  },
  socials: {
    instagram: "#",
    facebook: "#",
    twitter: "#",
  },
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

export const communityImpactContent = {
  badge: "OUR IMPACT",
  title: "Building Stronger Communities",
  description: "At Mukunguri Rice, we believe in creating value beyond our products. Our commitment to community development drives everything we do.",
  reach: {
    title: "Our Reach",
    description: "Serving farmers and communities across multiple sectors",
    areas: ["Nyamiyaga", "Mugina", "Kinazi"],
  },
  stats: [
    {
      value: "52+",
      label: "Permanent Employees",
      description: "Full-time jobs providing stable income for local families.",
    },
    {
      value: "1000+",
      label: "Farmers Supported",
      description: "Long-term partnerships empowering local agriculture.",
    },
    {
      value: "20",
      label: "Livestock Donated",
      description: "Cows provided to support community livelihoods.",
    },
  ],
  programs: [
    {
      title: "Partnership with COOPRORIZ-ABAHUZABIKORWA",
      description: "Collaborating with local cooperatives to strengthen the agricultural value chain and support smallholder farmers across the region. The cooperative has investment shares in our factory, benefiting directly from profits.",
      icon: "partnership",
    },
    {
      title: "Solar Lighting Program",
      description: "Providing sustainable solar lighting solutions to improve quality of life and enable productive activities after dark in rural communities. Our lights have transformed the area, making it as bright as Kigali.",
      icon: "solar",
    },
    {
      title: "Health Insurance Support",
      description: "Supporting employees and community members with health insurance coverage to ensure access to quality healthcare services for those who cannot afford it.",
      icon: "health",
    },
  ],
};

export const testimonialsContent = {
  badge: "COMMUNITY VOICES",
  title: "Stories from Our Neighbors",
  description: "Hear directly from the people whose lives have been touched by Mukunguri Rice's commitment to community development.",
  testimonials: [
    {
      name: "Uwiduhaye Claudine",
      role: "Resident, 200m from factory",
      quote: "We can't explain how good it is living near this factory because it has changed the lives of many people. They give livestock to residents, polished rice is no longer far away, they pay community health insurance for those who cannot afford it, among other things.",
      highlight: "Development has increased because previously there was total darkness. You'd walk stumbling over stones and bricks, but now everything is lit up like daytime. Mukunguri is basically Kigali level — actually, we are brighter than Kigali. We walk freely at night without any problem.",
    },
    {
      name: "Habiyezu Jean Paul",
      role: "Resident, Nearby Trading Center",
      quote: "Before, when electricity was cut, you'd see darkness immediately. But now, you walk and nothing seems changed because there is solar light that doesn't go off at night. We walk without fear.",
      highlight: "Besides the light, the factory supports us in daily life as neighbors — truly, we lack nothing.",
    },
    {
      name: "Nteziryayo Evaliste",
      role: "Factory Manager",
      quote: "When we used to go to the center in the evening, there was darkness, which could lead to crime and theft. So we realized that lighting ourselves alone was not enough. We needed to extend the light to the surrounding community to solve those problems.",
      highlight: "Here we have 52 permanent employees and expect to hire more as activities grow. Rice farmers grouped in the cooperative COOPRORIZ-ABAHUZABIKORWA are our permanent suppliers. We buy all their produce and pay them on time, and their cooperative even has investment shares in this factory.",
    },
  ],
};

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
      title: "Briquettes (Cooking Charcoal)",
      description: "Eco-friendly cooking fuel made from rice processing residues, providing sustainable energy for households.",
      image: "/Recipe 3.png",
      alt: "Cooking briquettes",
    },
    {
      title: "Organic Fertilizer",
      description: "Natural fertilizer produced from rice processing waste, supporting sustainable farming practices.",
      image: "/Recipe 1.png",
      alt: "Organic fertilizer",
    },

    {
      title: "Rice Husks",
      description: "Versatile agricultural byproduct used for animal bedding, soil amendment, and various farming applications.",
      image: "/Recipe 2.png",
      alt: "Rice husks",
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
      title: "BURYOHE Rice",
      description: "Our flagship rice brand - processed at our Rice Mill from paddy rice grown in Mukunguri valley. Premium cleaned rice ready for market across Rwanda.",
      image: "/Recipe 1.png",
      alt: "Bowl of BURYOHE rice",
    },
    {
      title: "Brown Rice",
      description: "Nutrient-rich brown rice grown using sustainable methods. Healthier choice for conscious consumers.",
      image: "/Recipe 3.png",
      alt: "Bowl of brown rice",
    },
    {
      title: "UMUMAF Maize Flour",
      description: "Our premium maize flour brand - processed at our Maize Flour Plant from local farmers. Enriched maize meal for households and schools across Rwanda.",
      image: "/Recipe 2.png",
      alt: "Bowl of maize flour",
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
      title: "Briquettes (Cooking Charcoal)",
      description: "Eco-friendly cooking fuel made from rice processing residues, providing sustainable energy for households.",
      image: "/Recipe 4.png",
      alt: "Cooking briquettes",
    },
    {
      title: "Organic Fertilizer",
      description: "Natural fertilizer produced from rice processing waste, supporting sustainable farming practices.",
      image: "/Recipe 1.png",
      alt: "Organic fertilizer",
    },

    {
      title: "Rice Husks",
      description: "Versatile agricultural byproduct used for animal bedding, soil amendment, and various farming applications.",
      image: "/Recipe 2.png",
      alt: "Rice husks",
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
