import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts, html}'],
  theme: {
    fontFamily: {
      fraunces: ['Fraunces', 'serif'],
      barlow: ['Barlow', 'serif'],
    },
    colors: {
      'dark-cyan': '#0E8784',
      'dark-grey-blue': '#333D4B',
      'pale-orange': '#FDD6BA',
      'light-cream': '#FEFCF7',
      grey: '#83888F',
    },
    fontSize: {
      menu: ['1.2rem', { lineHeight: '1.5rem', letterSpacing: '1.0' }],
      base: ['1.6rem', { lineHeight: '2.6rem' }],
      xl: ['2.4rem', { lineHeight: '3.2rem' }],
      '2xl': ['3.2rem', { lineHeight: '3.6rem' }],
      '3xl': ['4rem', { lineHeight: '4.8rem' }],
      '4xl': ['7.2rem', { lineHeight: '7.2rem' }],
      '5xl': ['15rem', { lineHeight: '7.2rem' }],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
