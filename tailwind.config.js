export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
  extend: {
    fontFamily: {
     cormorant: ['Cormorant', 'serif'],
      outfit: ['Outfit', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
       sans: ['Inter', 'sans-serif'],          // body text
        serif: ['Playfair Display', 'serif'],   // headings
           luxury: ["Playfair Display", "serif"],
         display: ["Bodoni Moda", "serif"],
      sans: ["Manrope", "sans-serif"],
           body: ["Inter", "sans-serif"],
    },
  },
},
  plugins: [],
}