/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'custom-background-primary': 'var(--background-primary)',
        'custom-text-primary': 'var(--text-primary)'
      }
    },
  },
  plugins: [],
};
