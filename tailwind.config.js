/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dominant': '#ffffff',
        'secondary': '#fffaf9',
        'accent': '#ff9b0b',
        'font-strong': '#123141',
        'font-light': '#677983',
      },
      spacing: {
        '100': '33rem',
        '200': '66rem',
      },
    },
  },
  plugins: [],
}
