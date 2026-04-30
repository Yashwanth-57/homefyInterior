export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
         heading: ["Clash Display", "sans-serif"],
  body: ["General Sans", "sans-serif"],
        accent: ["Playfair Display", "serif"], // 🔥 special highlights
      },
    },
  },
  theme: {
  extend: {
    animation: {
      spin: "spin 4s linear infinite",
    },
  },
},
  plugins: [],
};