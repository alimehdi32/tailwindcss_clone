/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      width: {
        '96': '24rem', // 384px 
        'custom': '95rem', // 480px // Add more custom widths as needed 
        },
        margin: {
          '96': '24rem',
          'left': '45rem'
        },
        bottom: {
          '96': '24rem',
          'custom': '45rem'
        }
      },
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