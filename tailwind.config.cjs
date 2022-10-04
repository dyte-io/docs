/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ['./src/{components,pages}/*.{js,jsx}'],
  theme: {
    extend: {
      screens: {
        sm: '997px',
      },
      colors: {
        primary: {
          DEFAULT: 'var(--docs-color-primary-200)',
          100: 'var(--docs-color-primary-100)',
          200: 'var(--docs-color-primary-200)',
        },
      },
    },
  },
  plugins: [],
};
