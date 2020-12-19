module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#118DF0',
          dark: '#0E2F56',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
