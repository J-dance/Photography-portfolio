/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        black: "#001219",
        darkgreen: "#005f73",
        green: "#0a9396",
        lightgreen: "#94d2bd",
        sand: "#e9d8a6",
        orange: "#ee9b00",
        darkorange: "#ca6702",
        orangered: "#bb3e03",
        red: "#ae2012",
        darkred: "#9b2226",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        cursive: ["Shrikhand", "cursive"],
      },
    },
  },
  plugins: [],
};
