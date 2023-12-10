/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0583D2",
        secondary: "#047392",
        tertiary: "#C1F1FF",
        accent: "#83E4FF",
        white: "#F9F9F9",
        black: "#001917",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        'faq-background': "url('/src/img/FAQbg.png')",
        'hero-background': "url('/src/img/tropicalIsland.png')",
      },
    },
  },
  plugins: [],
};