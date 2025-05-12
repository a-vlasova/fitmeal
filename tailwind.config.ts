import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#fff',
        foreground: '#292d35',
        fitmealBlack: '#292d35',
        fitmealRed: '#da2424',
        fitmealGreen: '#8ec038',
      },
      fontFamily: {
        main: ['var(--font-main)'],
        headers: ['var(--font-headers)'],
        subHeaders: ['var(--font-subheaders)'],
      },
      fontSize: {
        sm: '0.75rem',
        base: '0.875rem',
        lg: '1rem',
        xl: '1.125rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2rem',
        '5xl': '2.25rem',
        '6xl': '3rem',
        '7xl': '3.75rem',
      },
      animation: {
        slideIn: 'slideIn 0.3s ease-in-out',
        slideOut: 'slideOut 0.3s ease-in-out',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
