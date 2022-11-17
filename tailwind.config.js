const { url } = require('inspector');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        website_bg: 'url(../public/assets/medipass-bg.jpg)',
        // pattern: 'url(../public/assets/turtle-pattern.png)',
        // avtar: 'url(../public/assets/website/avtar.webp)',
      },
    },
    colors: {
      yellow: '#BDFF00',
      green: '#81B622',
      white:"#FFF",
      lightgreen:"#a3c585",
      grey:"#EBECF0",
      black:"#000",
    },
  },
  fontSize: {
   
  },
  plugins: [],
};