/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#171719",
        primary: "#6A71F2",
        secondary: "#E6FF72",
        secondaryBackground: "#F2F4F0",
        buttonPrimary: "#D3F26A",
        buttonSecondary: "#66C555",
        buttonBlend: "#EBF8E9",
        search: "#202022",
        grayBackground: "#383838",
      },
      fontFamily: {
        inter: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
