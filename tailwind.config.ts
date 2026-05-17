import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        display: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      colors: {
        parchment: "#f5ecd7",
        parchmentDark: "#e9dcb8",
        ink: "#2b1d0e",
        gold: "#b8860b",
        wine: "#6b1e2b",
      },
      boxShadow: {
        page: "inset 0 0 60px rgba(120,80,30,0.18), 0 8px 30px rgba(0,0,0,0.25)",
      },
      backgroundImage: {
        paper:
          "radial-gradient(ellipse at top, rgba(255,255,255,0.4), transparent 60%), radial-gradient(ellipse at bottom right, rgba(184,134,11,0.15), transparent 60%)",
      },
    },
  },
  plugins: [],
};
export default config;
