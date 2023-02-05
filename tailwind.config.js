/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        amsterdam: ["amsterdam-four", "sans-serif"],
        wondar: ["wondarQuason"],
      }
    },
  },
  plugins: [],
}
