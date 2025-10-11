/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Dark theme only - no theme switching
  theme: {
    extend: {
      colors: {
        // Clinical/Medical Blue Palette - Professional & Trustworthy
        'deep-indigo': '#0A0E1A',
        'dark-navy': '#0B1120',
        
        // Primary Blues
        'primary-blue': '#0066FF',
        'secondary-blue': '#0747A6',
        'accent-blue': '#2684FF',
        'light-blue': '#4C9AFF',
        
        // Additional Colors
        'success-green': '#00875A',
        'warning-amber': '#FF991F',
        
        // Backward compatibility
        'electric-cyan': '#0066FF',
        'violet-accent': '#0747A6',
        'soft-teal': '#2684FF',
        
        // Glass Effects
        'glass-white': 'rgba(255, 255, 255, 0.05)',
        'glass-white-strong': 'rgba(255, 255, 255, 0.10)',
        
        // Gray Scale
        'gray-50': '#FAFBFC',
        'gray-100': '#F4F5F7',
        'gray-200': '#EBECF0',
        'gray-300': '#DFE1E6',
        'gray-400': '#C1C7D0',
        'gray-500': '#A5ADBA',
        'gray-600': '#7A869A',
        'gray-700': '#505F79',
        'gray-800': '#42526E',
        'gray-900': '#253858',
        
        // Text Colors
        'text-primary': '#FFFFFF',
        'text-secondary': '#E5E7EB',
        'text-tertiary': '#9CA3AF',
        'text-gray': '#D1D5DB',
      },
      fontFamily: {
        'inter': ['var(--font-inter)', 'Inter', 'sans-serif'],
        'display': ['var(--font-outfit)', 'Outfit', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.5' }],     // 14px
        'base': ['1rem', { lineHeight: '1.6' }],       // 16px
        'lg': ['1.125rem', { lineHeight: '1.6' }],     // 18px
        'xl': ['1.25rem', { lineHeight: '1.6' }],      // 20px
        '2xl': ['1.5rem', { lineHeight: '1.5' }],      // 24px
        '3xl': ['1.875rem', { lineHeight: '1.4' }],    // 30px
        '4xl': ['2.25rem', { lineHeight: '1.3' }],     // 36px
        '5xl': ['3rem', { lineHeight: '1.2' }],        // 48px
        '6xl': ['3.75rem', { lineHeight: '1.1' }],     // 60px
        '7xl': ['4.5rem', { lineHeight: '1.1' }],      // 72px
        '8xl': ['6rem', { lineHeight: '1' }],          // 96px
      },
      spacing: {
        '18': '4.5rem',     // 72px
        '30': '7.5rem',     // 120px
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'sm': '0.375rem',   // 6px
        'DEFAULT': '0.5rem', // 8px
        'md': '0.75rem',    // 12px
        'lg': '1rem',       // 16px
        'xl': '1.5rem',     // 24px
        '2xl': '2rem',      // 32px
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'soft-lg': '0 4px 16px rgba(0, 0, 0, 0.1)',
        'soft-xl': '0 8px 24px rgba(0, 0, 0, 0.15)',
        'blue': '0 4px 16px rgba(0, 102, 255, 0.2)',
        'blue-lg': '0 8px 24px rgba(0, 102, 255, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in': 'fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scaleIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 102, 255, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 102, 255, 0.5)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      transitionTimingFunction: {
        'natural': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
    },
  },
  plugins: [],
}
