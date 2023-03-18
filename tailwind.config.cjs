/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'inter': ['Inter']
    },
    extend: {
      colors: {
        'custom-orange': {
          100: '#FFF7ED',
          200: '#FFEAD0',
          300: '#FF8C38',
          400: '#FFCC8D',
          500: '#FFDDB2'
        },
        'custom-gray': {
          100: '#4D4D4D',
          200: '#161616',
          300: '#B9B9B9',
          400: '#AAAAAA',
          800: '#252525',
          900: '#000000'
        },
        'interactive-states': {
          100: '#E17654',
          200: '#161616',
          300: '#115E59'
        }
      }
    },
  },
  plugins: [],
}
