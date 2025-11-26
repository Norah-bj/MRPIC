import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2.5rem",
      },
      screens: {
        "2xl": "1240px",
      },
    },
    extend: {
      colors: {
        brand: {
          dark: "#0B0907",
          charcoal: "#181310",
          cocoa: "#2B1305",
          gold: "#C9A064",
          cream: "#FDF6E3",
          sand: "#D0B08A",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Inter", "var(--font-geist-sans)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 20px 45px rgba(0,0,0,0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
