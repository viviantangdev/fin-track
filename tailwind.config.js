/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'custom-background-primary': 'rgba(var(--background-primary))',
        'custom-background-secondary': 'var(--background-secondary)',
        'custom-text-primary': 'var(--text-primary)',
        'custom-accent': 'var(--accent)',
        'custom-border': 'var(--border)',
        'custom-hover': 'var(--hover)',
      },
    },
  },
  plugins: [],
};
