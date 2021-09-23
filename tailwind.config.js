const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/theme/**/*.{js,jsx}',
    './docs/**/**/*.{md,mdx}',
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', defaultTheme.fontFamily.sans],
      },
      screens: {
        lg: '997px',
      },
      colors: {
        primary: 'var(--docs-color-primary)',
        text: {
          DEFAULT: 'var(--docs-color-text)',
          100: 'var(--docs-color-text-100)',
        },
        border: 'var(--docs-color-border)',
        background: {
          DEFAULT: 'var(--docs-color-background)',
          100: 'var(--docs-color-background-100)',
          200: 'var(--docs-color-background-200)',
          300: 'var(--docs-color-background-300)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
