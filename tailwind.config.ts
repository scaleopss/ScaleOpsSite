import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAFAFA',
        foreground: '#111111',
        ink: '#0A0A0A',
        soft: '#F3F3F3',
        line: '#E5E5E5',
        accent: '#7C3AED',
        pink: '#EC4899',
        orange: '#F97316',
        mint: '#A7F3D0',
        warning: '#FDE68A',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(17,17,17,0.08)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #7C3AED 0%, #EC4899 48%, #F97316 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
