import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0f2947',
        'primary-blue': '#1e5a96',
        'primary-green': '#16a34a',
        'accent-cyan': '#06b6d4',
        'neutral-dark': '#1f2937',
        'neutral-light': '#f9fafb',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
      },
    },
  },
};

export default config;
