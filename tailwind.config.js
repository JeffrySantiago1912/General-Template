/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#de2c4d",
        secondary: "#fb923c",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        averia: ["Averia Serif Libre", "serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",  
        },
      },
    },
  },
  plugins: [],
};
