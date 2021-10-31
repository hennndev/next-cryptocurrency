module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        'detail': '250px'
      },
      width: {
        'search': '400px',
        'mobile-search': '250px'
      },
      gridTemplateColumns: {
        'coin': 'repeat(auto-fill, minmax(250px, 1fr))'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
