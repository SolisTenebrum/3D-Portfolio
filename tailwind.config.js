/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000b19",
        secondary: "#95a8de",
        tertiary: "#101c30",
        "black-100": "#0d1125",
        "black-200": "#000626",
        "white-100": "#f3f3f3",
        scrollButton: "#ffffff"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};