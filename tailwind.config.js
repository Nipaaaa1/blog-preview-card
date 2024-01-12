/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        brightYellow: "	#f4d04e",
        grey: "#808080",
        black: "#121212",
      },
      fontFamily: {
        Figtree: ["Figtree", "sans-serif"],
      },
      boxShadow: {
        card: "8px 8px",
      },
    },
  },
  plugins: [],
};
