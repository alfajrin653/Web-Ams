// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2DB1B2',
        secondary: '#FF5733',
      },
      fontFamily: {
        inter: ["Instrument Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
