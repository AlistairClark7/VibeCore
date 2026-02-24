/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "../Pages/**/*.cshtml",
    "../Areas/**/*.cshtml",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
