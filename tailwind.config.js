/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a0a0c',
          card: '#101014',
          elevated: '#16161c',
        },
        cream: {
          DEFAULT: '#f4ede4',
          dim: '#a8a09a',
          faint: '#5a5551',
        },
        accent: {
          DEFAULT: '#e8a4b8',
          deep: '#c76d8a',
        },
        wa: '#25d366',
      },
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite 1s',
        'float-mid': 'float 5s ease-in-out infinite 0.5s',
        'scroll': 'scroll 35s linear infinite',
        'wa-pulse': 'waPulse 2.5s infinite',
        'pulse-dot': 'pulseDot 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scroll: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        waPulse: {
          '0%': { boxShadow: '0 8px 28px rgba(37,211,102,.4), 0 0 0 0 rgba(37,211,102,.5)' },
          '70%': { boxShadow: '0 8px 28px rgba(37,211,102,.4), 0 0 0 18px rgba(37,211,102,0)' },
          '100%': { boxShadow: '0 8px 28px rgba(37,211,102,.4), 0 0 0 0 rgba(37,211,102,0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
    },
  },
  plugins: [],
}