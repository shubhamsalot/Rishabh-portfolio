/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        surface: {
          DEFAULT: '#141414',
          subtle: '#181818',
          hover: '#1F1F1F',
          elevated: '#242424',
        },
        border: {
          DEFAULT: '#222222',
          subtle: 'rgba(255, 255, 255, 0.07)',
          highlight: 'rgba(232, 51, 46, 0.3)',
        },
        brand: {
          red: '#E8332E',
          'red-hover': '#FF4742',
          'red-dark': '#B82320',
          'red-glow': 'rgba(232, 51, 46, 0.25)',
          'red-subtle': 'rgba(232, 51, 46, 0.10)',
        },
        muted: {
          DEFAULT: '#8E8E93',
          light: '#A1A1AA',
          dark: '#52525B',
        }
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'red-glow': '0 0 35px -5px rgba(232, 51, 46, 0.35)',
        'red-glow-lg': '0 0 60px -10px rgba(232, 51, 46, 0.45)',
        'card-glow': '0 10px 40px -15px rgba(0, 0, 0, 0.7)',
        'inner-glow': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}
