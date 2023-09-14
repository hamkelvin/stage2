/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#423F71',
        //header: '#292841',
        header: '#5a86a9',
        //body: '#1C1B29',
        body: '#04085b',
      },
      screens: {
        'mobile': {
          max: '768px'
        }
      },
      transitionProperty: {
        margin: 'margin',
        opacity: 'opacity',
        transform: 'transform'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar'),
  ],
}
