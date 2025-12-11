import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'delphine-red': {
          DEFAULT: '#E10600',
          50: '#FFF0F0',
          100: '#FFD6D4',
          200: '#FFB3B1',
          300: '#FF8583',
          400: '#FF4744',
          500: '#E10600',
          600: '#C00500',
          700: '#9A0400',
          800: '#730300',
          900: '#4D0200',
        },
        'delphine-blue': {
          DEFAULT: '#6BA4D4',
          50: '#F0F6FB',
          100: '#D9E9F5',
          200: '#B8D5EC',
          300: '#92BFE2',
          400: '#6BA4D4',
          500: '#4A8BC4',
          600: '#3671A8',
          700: '#2A5882',
          800: '#1E3F5D',
          900: '#122638',
        },
        'delphine-yellow': {
          DEFAULT: '#FFD700',
          50: '#FFFDF0',
          100: '#FFF9D4',
          200: '#FFF3A8',
          300: '#FFEC71',
          400: '#FFE43A',
          500: '#FFD700',
          600: '#D4B300',
          700: '#A88E00',
          800: '#7D6900',
          900: '#524500',
        },
        cream: {
          DEFAULT: '#F5F5F0',
          50: '#FEFEFE',
          100: '#FAFAF8',
          200: '#F5F5F0',
          300: '#E8E8E0',
          400: '#D5D5CA',
          500: '#B8B8AA',
          600: '#8A8A7A',
          700: '#5C5C50',
          800: '#3A3A32',
          900: '#1D1D19',
        },
        midnight: {
          DEFAULT: '#1A1A1A',
          50: '#F5F5F5',
          100: '#E0E0E0',
          200: '#BDBDBD',
          300: '#9E9E9E',
          400: '#757575',
          500: '#616161',
          600: '#424242',
          700: '#303030',
          800: '#1A1A1A',
          900: '#0D0D0D',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Outfit', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['5rem', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.15', letterSpacing: '0.02em' }],
        'display-md': ['2.5rem', { lineHeight: '1.2', letterSpacing: '0.01em' }],
        'display-sm': ['1.875rem', { lineHeight: '1.3', letterSpacing: '0.01em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'elegant': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'elegant-lg': '0 8px 40px rgba(0, 0, 0, 0.12)',
        'product': '0 10px 50px rgba(0, 0, 0, 0.15)',
        'button': '0 4px 15px rgba(225, 6, 0, 0.3)',
      },
    },
  },
  plugins: [],
}

export default config
