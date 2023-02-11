/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./*.html",
    "./dist/*.html"
  ],
  theme: {
    extend: {
      colors:{
        primary: '#ffa800',
        facebook: '#196ddb',
        twitter: '#007bff',
        youtube: '#fa0910',
        instagram: '#a73699',
        whatsapp: '#25D366',
        mutedcustom: '#b3b2b1'
      },
      rotate: {
        '360': '360deg'
      }
    },
  },
  plugins: [],
}
