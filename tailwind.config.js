const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      gray: {
        900: '#121214',
        800: '#202024',
        300: '#c4c4cc',
        100: '#e1e1e6',
      },
      green: {
        500: '#00875f',
        300: '#00b37e',
      },
    },
  },
  plugins: [],
};
