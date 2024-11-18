/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#171719",
        primary: "#6A71F2",
        secondary: "#E6FF72",
      },
      fontFamily: {
        inter: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
