module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    rotate: {
      360: '360deg',
    },
    extend: {
      colors: {
        gray: {
          850: '#1b232e',
        },
        blurple: {
          300: '#7883f5',
          400: '#616ded',
          500: '#5865F2', // Default color
          600: '#3b4af5',
          700: '#2a3bf5',
        },
        dRed: '#ED4245',
        dFuchsia: '#EB459E',
        dYellow: '#FEE75C',
        dGreen: '#57F287',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    '@tailwindcss/typography',
  ],
};
