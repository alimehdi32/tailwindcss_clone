/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      width: {
        '96': '24rem', // 384px 
        'custom': '95rem', // 480px // Add more custom widths as needed
        'wider': '1000rem',
        'form': '30rem', 
        },
        margin: {
          '96': '24rem',
          'left': '45rem',
          'Left': '40rem',
        },
        bottom: {
          '96': '24rem',
          'custom': '45rem'
        },
        height: {
          '96': '384px',
          'custom': '350px'
        },
        borderRadius: {
          'lg': '8px',
          'rad': '500px'
        },
        padding: {
          '96': '24rem',
          'mid': '700rem'
        },
        backgroundImage: {
          'img': "url('https://img.youtube.com/vi/v0mwbNhmlEA/maxresdefault.jpg')",
          'image': "url('https://img.youtube.com/vi/7ggwLccuN5s/maxresdefault.jpg')",
          'imag': "url('https://img.youtube.com/vi/r0jtV9mxdI0/maxresdefault.jpg')",
          'imagee': "url('https://img.youtube.com/vi/zW5gyFoZu5A/maxresdefault.jpg')",
        },
        colors: {
          navy: '#000080',
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