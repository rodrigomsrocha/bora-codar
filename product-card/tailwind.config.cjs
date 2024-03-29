/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "bg-color": "#D9CDF7",
      primary: "#271A45",
      secondary: "#61557f",
    },
    fontFamily: {
      sans: ["Lato", "sans-serif"],
      serif: ["Crimson Pro", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
