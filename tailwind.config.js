/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
    },
    fontFamily: {
      // outfit: ["Outfit", "sans-serif"],
      // pathway: ["Pathway Extreme", "sans-serif"],
      SFProDisplay: ["SF Pro Display", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [], // Add plugins here
};
