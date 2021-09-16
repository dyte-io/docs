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
      screens: {
        lg: '997px',
      },
      colors: {
        primary: 'var(--color-primary)',
        text: {
          DEFAULT: 'var(--color-text)',
          100: 'var(--color-text-100)',
        },
        border: 'var(--color-border)',
        background: {
          DEFAULT: 'var(--color-background)',
          100: 'var(--color-background-100)',
          200: 'var(--color-background-200)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
