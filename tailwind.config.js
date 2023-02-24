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
    extend: {
      spacing: {
        container: '1180px',
      },
      maxWidth: {
        container: '1180px',
      },
      gradientColorStops: {
        test: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
      },
    },

    fontSize: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },
  plugins: [require('daisyui')],
};
