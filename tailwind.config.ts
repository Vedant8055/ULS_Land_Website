import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: "#2C3E35",
        pine: "#152B23",
        "pine-soft": "#496154",
        earth: "#3D312A",
        linen: "#F5F2EB",
        "linen-warm": "#F7F4ED",
        ivory: "#FFFDF8",
        canvas: "#EEEDE6",
        gold: "#C5A059",
        terracotta: "#AE755C",
        ink: "#24342B",
        muted: "#68776E",
        basalt: "#5C6460",
        error: "#AD453B",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        kicker: "0.26em",
      },
      maxWidth: {
        editorial: "1280px",
        measure: "38rem",
      },
      boxShadow: {
        quiet: "0 20px 75px rgba(24,45,34,0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
