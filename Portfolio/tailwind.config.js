/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",     
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      fontFamily: {
        baskerville: ['Libre Baskerville', 'serif'],
      },
    },
  },
  plugins: [],
};