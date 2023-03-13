/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blues':'#293264',
        'lightblue':'#d6dbf5',
      }
    },
  },
  plugins: [],
}
