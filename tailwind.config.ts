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
        display: ["system-ui", "ui-sans-serif", "SF Pro Display", "Inter", "sans-serif"],
        body: ["system-ui", "ui-sans-serif", "Inter", "sans-serif"]
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

