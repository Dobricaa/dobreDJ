import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        dark: {
          950: "#0a0a0b",
          900: "#111113",
          800: "#18181b",
          700: "#27272a",
        },
        accent: "#eab308",
        primary: "#00ada6",
        dobre: {
          red: "#ef4444",
        },
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "fade-in-up": "fadeInUp 1s ease-out 0.2s forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
