/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Acme: ['Acme', "sans-serif"],
        Alkalami: ['Alkalami', "serif"],
        Amatic: ['Amatic SC', "cursive"],
        Caveat: ['Caveat', "cursive"],
        Cedarville: ['Cedarville Cursive', "cursive"],
        ComfortorBrush: ['Comforter Brush', "cursive"],
        DancingScript: ['Dancing Script', "cursive"],
        another: ['Edu NSW ACT Foundation', "cursive"],
        Fasthand: ['Fasthand', "cursive"],
        fuzzyBubbles: ['Fuzzy Bubbles', "cursive"],
        GrapeNuts: ['Grape Nuts', "cursive"],
        Pacifico: ['Pacifico', "cursive"]
      },
      screens: {
        'xs': '400px',
        'sm': '550px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}