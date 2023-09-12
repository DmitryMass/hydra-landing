import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        mainContainer: '1270px',
      },
      padding: {
        container: '15px',
        'button-x': '36px',
        'button-y': '16px',
      },
      borderRadius: {
        button: '40px',
      },
      fontSize: {
        xs12: ['12px', '16px'],
        s14: ['14px', '20px'],
        sm16: ['16px', '24px'],
        md24: ['24px', '32px'],
        l: ['36px', '40px'],
        xL40: ['40px', 'normal'],
        xxL46: ['46px', 'normal'],
        lg: ['64px', 'normal'],
      },
      letterSpacing: {
        tight: '1.82px',
      },
      colors: {
        blue: {
          80: '#2f2c42',
          70: '#343045',
        },
        backgroundColor: {
          'radial-1': 'rgba(64, 58, 95, 1)',
          'radial-2': 'rgba(33, 30, 46, 1)',
        },
      },
    },
  },
  plugins: [],
};
export default config;
