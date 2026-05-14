/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: 'oklch(75% 0.183 55.934)', // The Vibrant Amber
          dim: 'oklch(75% 0.183 55.934 / 0.1)',
          glow: 'oklch(75% 0.183 55.934 / 0.5)',
        },
        background: 'oklch(15% 0.02 55.934)',
      },
      fontFamily: {
        heading: ['Anuphan', 'Space Grotesk', 'sans-serif'],
        thai: ['IBM Plex Sans Thai', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan': 'scan 3s linear infinite',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        }
      }
    },
  },
  plugins: [],
}
