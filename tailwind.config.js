module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './src/*.{js,jsx,ts,tsx}', './public/index.html'],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      padding: {
        default: '0.5rem',
        sm: '1rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
