/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Nunito",
        second: "Jost",
      },
      colors: {
        primary: "#FDC705",
      },
    },
  },
  plugins: [],
};
