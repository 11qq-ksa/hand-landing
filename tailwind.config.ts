import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        hand: {
          red: "#2350D2",
          blueLight: "#82AAFF",
          blueDeep: "#2350D2"
        }
      },
      fontFamily: {
        display: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        body: ["var(--font-zen-maru-gothic)", "system-ui", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        zenMaruGothic: ["var(--font-zen-maru-gothic)", "system-ui", "sans-serif"],
        nunito: ["var(--font-nunito)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glass: "0 18px 45px rgba(0,0,0,0.35)"
      },
      borderRadius: {
        "4xl": "2.5rem"
      },
      backgroundImage: {
        "radial-hand": "radial-gradient(circle at top, rgba(130,170,255,0.25), transparent 60%), radial-gradient(circle at bottom, rgba(255,110,80,0.25), transparent 60%)"
      }
    }
  },
  plugins: []
};

export default config;
