const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  content: [],
  theme: {
    extend: {
      fontFamily: {
        body: [
          'Avenir',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'Hiragino Sans',
          'ヒラギノ角ゴシック',
          'メイリオ',
          'Meiryo',
          'YuGothic',
          'Yu Gothic',
          'ＭＳ Ｐゴシック',
          'MS PGothic',
          'sans-serif'
        ]
      },
      colors: {
        main: '#232946',
        secondary: '#FFFFFE'
      },
      maxHeight: {
        '144': '36rem',
      },
      backgroundImage: {
        'hero-image': "url('../../public/images/hero.jpg')",
      },
    },
  },
  plugins: [],
}
