const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-nunito)", ...defaultTheme.fontFamily.sans],
        highlight: ["var(--font-peomy)", "display"],
      },
      colors: {
        softPink: "#f5a9b8",
        hotPink: "#fd4e91",
      },
    },
  },
  plugins: [],
};
