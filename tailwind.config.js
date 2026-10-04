/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        maroon: { DEFAULT: "#5b0f1f", deep: "#3d0914", royal: "#8a1c2b" },
        saffron: "#e8892b",
        gold: { DEFAULT: "#c9a04a", light: "#e6c776", dark: "#9a7326" },
        ivory: { DEFAULT: "#fbf4e4", dark: "#f1e5c8" },
        leaf: "#4d6b3a",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        script: ['"Great Vibes"', "cursive"],
        deva: ['"Tiro Devanagari Hindi"', "serif"],
        body: ['"Jost"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
