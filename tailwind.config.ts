import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#f3f6f8",
        ink: "#101828",
        slate: "#52606d",
        line: "#d5dde5",
        mist: "#e9eef3",
        panel: "#ffffff",
        accent: {
          DEFAULT: "#0f766e",
          deep: "#134e4a",
          soft: "#ccfbf1",
        },
        brand: {
          navy: "#0f172a",
          steel: "#1e293b",
          gold: "#d4a24c",
        },
      },
      fontFamily: {
        sans: ["var(--font-sora)", "Avenir Next", "Segoe UI", "sans-serif"],
        display: ["var(--font-sora)", "Avenir Next", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 50px rgba(15, 23, 42, 0.09)",
        lift: "0 14px 34px rgba(15, 118, 110, 0.14)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(148, 163, 184, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.12) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-up": "fade-up 0.7s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
