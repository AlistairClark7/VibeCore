/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "../Pages/**/*.cshtml",
    "../Areas/**/*.cshtml",
  ],
  theme: {
    extend: {
      colors: {
        // Light mode color palette
        slate: {
          25: "#fafafa",
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: ".95" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(56, 189, 248, 0.5)" },
          "50%": { boxShadow: "0 0 30px rgba(56, 189, 248, 0.8)" },
        },
      },
      boxShadow: {
        "sm-light": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "md-light": "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        "lg-light": "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        "xl-light": "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
        "dark": "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
        "inset-dark": "inset 0 1px 3px 0 rgba(0, 0, 0, 0.3)",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#475569",
            "&.dark": {
              color: "#cbd5e1",
            },
          },
        },
      },
      transitionDuration: {
        250: "250ms",
        350: "350ms",
      },
    },
  },
  plugins: [],
};
