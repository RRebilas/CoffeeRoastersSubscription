import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,html}', './src/app/**/**/**.{ts,html}'],
  theme: {
    fontFamily: {
      fraunces: ['Fraunces', 'serif'],
      barlow: ['Barlow', 'serif'],
    },
    fontSize: {
      base: ['1rem', { lineHeight: '1.625rem' }],
      xl: ['1.5rem', { lineHeight: '2rem' }],
      '2xl': ['2rem', { lineHeight: '2.25rem' }],
      '3xl': ['2.5rem', { lineHeight: '3rem' }],
      '4xl': ['4.5rem', { lineHeight: '4.5rem' }],
      '5xl': ['9.375rem', { lineHeight: '4.5rem' }],
      menu: ['0.75rem', { lineHeight: '0.938rem', letterSpacing: '1.0' }],
      button: ['1.125rem', { lineHeight: '1.563rem' }],
    },
    extend: {
      colors: {
        'dark-cyan': '#0E8784',
        'dark-grey-blue': '#333D4B',
        'pale-orange': '#FDD6BA',
        'light-cream': '#FEFCF7',
        grey: '#83888F',
        disabled: '#E2DEDB',
      },
    },
  },
  plugins: [],
} satisfies Config;
