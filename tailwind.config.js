
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true
  },
  fill: (theme) => ({
    'red': theme('colors.red.500'),
  }),
  content: [
    "./src/**/*.{html, js, ts, vue}", 
  "./src/**/*"
],
  theme: {
    colors: {
      white: {
        normal: "#ffffff",

      },
      black: {
        normal: '#000000',
      }
    },
    // FONTS
    fontFamily: {
      // Poppins
      'poppins-300': ['"Poppins"', 'sans-serif;'],
      'poppins-400': ['"Poppins"', 'sans-serif;'],
      'poppins-500': ['"Poppins"', 'sans-serif;'],
      'poppins-600': ['"Poppins"', 'sans-serif;'],
    }
  },
  variants: {
    extend: {
      display: ['group-hover'],
    }
  }
};

