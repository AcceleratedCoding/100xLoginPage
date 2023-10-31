/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'neutral-50': '#F9F9F9',
        'neutral-1000': '#000',
        'twitter—blue': '#1D9BF0',
        'twitter—blue-hover': '#1871CA',
        'twitter—blue-disabled': '#1E5D87',
        'neutral-700': '#404040',

        'stroke': '#546A7A',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      borderRadius: {
        'create': '4.0625rem',
      }
    },
  },
  plugins: [],
}