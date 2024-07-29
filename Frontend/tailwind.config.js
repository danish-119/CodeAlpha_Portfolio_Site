/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '10p': '10%',
      },
      colors: {
        'primary-yellow': '#f39c12',
        'hover-yellow': '#e67e22',
        'text-black': '#000',
      },
    },
  },
  plugins: [],
}