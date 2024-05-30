import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#111111',
        dark: '#1E1E1E',
        'main-green': '#79FFBD',
      },
      dropShadow: {
        lg: '-8px 8px 0 rgba(121, 255, 189, 1)',
        md: '-4px 4px 0 rgba(121, 255, 189, 1)',
        blur: '0 8px 12px rgba(17, 17, 17, 0.5)',
      },
      fontFamily: {
        geist: ['var(--font-geist)', 'sans-serif'],
      },
      fontSize: {
        150: '9.375rem',
        96: '6rem',
        64: '4rem',
        56: '3.5rem',
        48: '3rem',
        40: '2.5rem',
        36: '2.25rem',
        28: '1.75rem',
        24: '1.5rem',
        20: '1.25rem',
        16: '1rem',
        12: '0.75rem',
      },
    },
  },
  plugins: [],
};
export default config;
