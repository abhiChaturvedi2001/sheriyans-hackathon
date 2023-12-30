/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubikGlitch': ['Rubik Glitch', 'sans-serif'],
        'rubikMaps': ['Rubik Maps', 'sans-serif'],
        'poppins': ['poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}