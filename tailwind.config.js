module.exports = {
  purge: {
    enabled: true,
    content: ['./pages/**/*.js', './components/**/*.js'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      nunito: ['nunito', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
