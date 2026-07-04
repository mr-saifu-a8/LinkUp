/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#FB4E66",
          dark: "#E2364D",
          light: "#FFE3E8",
          lighter: "#FFF3F5",
        },
        ink: {
          DEFAULT: "#1B1B29",
          light: "#6B6B7B",
          muted: "#A4A4B2",
        },
        surface: {
          DEFAULT: "#0E0E16",
          raised: "#15151F",
        },
        accent: {
          violet: "#7C6CF6",
          amber: "#FFB74E",
        },
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(251, 78, 102, 0.35)",
        card: "0 4px 24px rgba(27, 27, 41, 0.06)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: 0, transform: "scale(0.9)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        pulseSlow: {
          "0%, 100%": { transform: "scale(1)", opacity: 1 },
          "50%": { transform: "scale(1.08)", opacity: 0.85 },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(3%, -4%) scale(1.06)" },
          "66%": { transform: "translate(-2%, 3%) scale(0.96)" },
        },
        driftReverse: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(-4%, 3%) scale(0.95)" },
          "66%": { transform: "translate(3%, -2%) scale(1.05)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.45s ease-out both",
        scaleIn: "scaleIn 0.5s cubic-bezier(0.22,1,0.36,1) both",
        pulseSlow: "pulseSlow 1.8s ease-in-out infinite",
        drift: "drift 18s ease-in-out infinite",
        driftReverse: "driftReverse 22s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
