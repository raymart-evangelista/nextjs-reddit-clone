/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '600': '600px',
        '650': '650px',
        '700': '700px',
        '270': '270px',
      },
      padding: {
        'py-px-4': 'padding-top: 10px',
      },
      colors: {
        'reddit-orange': '#ff5700',
        'orangered': '#ff4500',
        'aliceblue': '#dae0e6',
      }
    },
  },
  plugins: [],
}
