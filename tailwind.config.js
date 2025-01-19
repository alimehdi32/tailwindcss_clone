/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none', // for Internet Explorer and Edge 
          'scrollbar-width': 'none', // for Firefox 
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};