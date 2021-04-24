module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // Animations
      animation: {
        fadeInTop: 'fadeInTop 100ms ease-in forwards',
        fadeInBottom: 'fadeInBottom 100ms ease-in forwards',
      },

      // Keyframes
      keyframes: {
        fadeInTop: {
          '0%': { opacity: '0', transform: 'translateY(-30%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInBottom: {
          '0%': { opacity: '0', transform: 'translateY(30%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
