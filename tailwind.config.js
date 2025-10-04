/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-deep-indigo',
    'text-deep-indigo',
    'border-deep-indigo',
    'bg-electric-cyan',
    'text-electric-cyan',
    'border-electric-cyan',
    'bg-violet-accent',
    'text-violet-accent',
    'border-violet-accent',
    'bg-soft-teal',
    'text-soft-teal',
    'border-soft-teal',
    'bg-glass-white',
    'border-glass-white',
    'bg-glass-white-strong',
    'border-glass-white-strong',
  ],
  // Dark theme only - no theme switching
  theme: {
    extend: {
      colors: {
        // Design system colors - Dark theme only
        'deep-indigo': '#0B1020',
        'electric-cyan': '#00E6FF',
        'violet-accent': '#AA64FF',
        'soft-teal': '#6BE1C9',
        'glass-white': 'rgba(255, 255, 255, 0.06)',
        'glass-white-strong': 'rgba(255, 255, 255, 0.12)',
      },
      backgroundColor: {
        'deep-indigo': '#0B1020',
        'electric-cyan': '#00E6FF',
        'violet-accent': '#AA64FF',
        'soft-teal': '#6BE1C9',
        'glass-white': 'rgba(255, 255, 255, 0.06)',
        'glass-white-strong': 'rgba(255, 255, 255, 0.12)',
      },
      textColor: {
        'deep-indigo': '#0B1020',
        'electric-cyan': '#00E6FF',
        'violet-accent': '#AA64FF',
        'soft-teal': '#6BE1C9',
      },
      borderColor: {
        'deep-indigo': '#0B1020',
        'electric-cyan': '#00E6FF',
        'violet-accent': '#AA64FF',
        'soft-teal': '#6BE1C9',
        'glass-white': 'rgba(255, 255, 255, 0.06)',
        'glass-white-strong': 'rgba(255, 255, 255, 0.12)',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'display': ['Satoshi', 'Outfit', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'xs': '10px',
        'sm': '12px',
        'base': '14px',
        'lg': '16px',
        'xl': '18px',
        '2xl': '20px',
        '3xl': '24px',
        '4xl': '30px',
        '5xl': '36px',
        '6xl': '48px',
        '7xl': '56px',
        '8xl': '64px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      backdropBlur: {
        'xs': '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotateY(0deg)' },
          '50%': { transform: 'translateY(-8px) rotateY(4deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 230, 255, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 230, 255, 0.6)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.94)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'natural': 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
