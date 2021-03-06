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
          825: '#1b232e',
          850: '#1a222b',
          875: '#181e26',
        },
        blurple: {
          300: '#97a6db',
          400: '#8295d9',
          500: '#7289DA', // Default color
          600: '#5a78e6',
          700: '#4368f0',
        },
        dRed: '#ED4245',
        dFuchsia: '#EB459E',
        dYellow: '#FEE75C',
        dGreen: '#57F287',
        dark: '#2C2F33',
        darker: '#23272A',
      },
    },
  },
  variants: {
    extend: {
      backgroundOpacity: ['active'],
      backgroundColor: ['active'],
    },
  },
  plugins: [
    '@tailwindcss/typography',
  ],
};
