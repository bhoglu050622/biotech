/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Professional Color Palette
        'primary-navy': '#0A0E1A',
        'secondary-navy': '#1A1F2E',
        'accent-navy': '#2A3142',
        
        'primary-blue': '#1E3A8A',
        'secondary-blue': '#3B82F6',
        'accent-blue': '#60A5FA',
        'light-blue': '#93C5FD',
        
        'primary-cyan': '#0891B2',
        'secondary-cyan': '#22D3EE',
        'accent-cyan': '#67E8F9',
        
        'primary-emerald': '#059669',
        'secondary-emerald': '#10B981',
        'accent-emerald': '#34D399',
        
        'primary-violet': '#7C3AED',
        'secondary-violet': '#A855F7',
        'accent-violet': '#C084FC',
        
        // Legacy colors for compatibility
        'military-dark': '#0A0E1A',
        'military-navy': '#1A1F2E',
        'military-blue': '#2A3142',
        'electric-cyan': '#22D3EE',
        'violet-accent': '#A855F7',
        'soft-teal': '#10B981',
        'glass-white': 'rgba(255, 255, 255, 0.05)',
        'glass-white-strong': 'rgba(255, 255, 255, 0.1)',
        'deep-indigo': '#1E1B4B',
        'neural-purple': '#7C3AED',
        'cyber-green': '#10B981',
        'warning-orange': '#F59E0B',
        'error-red': '#EF4444',
      },
      fontFamily: {
        'display': ['Space Grotesk', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'neural-pulse': 'neural-pulse 2s ease-in-out infinite',
        'cyber-glow': 'cyber-glow 3s ease-in-out infinite',
        'data-stream': 'data-stream 4s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'professional-bounce': 'professional-bounce 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
      },
      keyframes: {
        'neural-pulse': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'cyber-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(34, 211, 238, 0.6)' },
        },
        'data-stream': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'professional-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'neural-pattern': 'linear-gradient(45deg, rgba(34, 211, 238, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
        'cyber-grid': 'linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)',
        'professional-gradient': 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 50%, #22D3EE 100%)',
        'accent-gradient': 'linear-gradient(135deg, #7C3AED 0%, #A855F7 50%, #C084FC 100%)',
        'success-gradient': 'linear-gradient(135deg, #059669 0%, #10B981 50%, #34D399 100%)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'cyber': '0 0 20px rgba(34, 211, 238, 0.3)',
        'neural': '0 0 30px rgba(168, 85, 247, 0.4)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'professional': '0 10px 25px rgba(0, 0, 0, 0.15)',
        'professional-lg': '0 20px 40px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
}