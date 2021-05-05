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
        swipeLeft: 'swipeLeft 600ms ease-in fowards',
        swipeRight: 'swipeRight 600ms ease-in fowards',
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
        swipeLeft: {
          '0%': { transform: 'scale(1, 1) translateX(0)' },
          '33%': { transform: 'scale(0.5, 0.5) translateX(0)' },
          '66%': {
            transform: 'scale(0.5, 0.5) translateX(-100%)',
          },
          '100%': { transform: 'scale(1, 1) translateX(-100%)' },
        },
        swipeRight: {
          '0%': { transform: 'scale(1, 1)', transform: 'translateX(0)' },
          '33%': { transform: 'scale(0.5, 0.5)', transform: 'translateX(0)' },
          '66%': {
            transform: 'scale(0.5, 0.5)',
            transform: 'translateX(100%)',
          },
          '100%': { transform: 'scale(1, 1)', transform: 'translateX(100%)' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
