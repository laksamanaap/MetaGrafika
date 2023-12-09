/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0583D2", // Customize Color
        secondary: "#047392",
        tertiary: "#C1F1FF",
        accent: "#83E4FF",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
