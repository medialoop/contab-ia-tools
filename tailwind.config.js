/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0f5',
          100: '#cce1eb',
          200: '#99c3d7',
          300: '#6497b1',
          400: '#3279a3',
          500: '#005b96',
          600: '#034a7c',
          700: '#03396c',
          800: '#022951',
          900: '#011f4b',
          950: '#011728',
        },
      },
      fontFamily: {
        sans: ['"Red Hat Display"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['"Duru Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
