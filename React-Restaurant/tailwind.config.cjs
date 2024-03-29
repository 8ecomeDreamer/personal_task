/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppins: "Poppins",
    },
    screens: {
      ss: "480px",
      sm: "600px",
      md: "768px",
      lg: "976px",
      xl: "1200px"
    },
    // borderRadius: {
    //   'none': '0',
    //   'default': '1rem',
    //   'sm': '0.125rem',
    //   'md': '0.375rem',
    //   'lg': '0.5rem',
    //   'large': '1rem',
    // },
    extend: {
      colors: {
        back: "#f1edee",
        glass: "rgba(255,255,255,0.15)"
      },
    },
  },
  plugins: [],
};
