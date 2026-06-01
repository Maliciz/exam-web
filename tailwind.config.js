/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#0a0d16',
          dark: '#111625',
          card: 'rgba(22, 29, 48, 0.65)',
          blue: '#00f0ff',
          purple: '#b927fc',
          cyan: '#06b6d4',
          fuchsia: '#d946ef',
          pink: '#ec4899',
          lightText: '#94a3b8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'neon-blue': '0 0 15px rgba(0, 240, 255, 0.4)',
        'neon-purple': '0 0 15px rgba(185, 39, 252, 0.4)',
        'neon-hover': '0 0 25px rgba(0, 240, 255, 0.6), 0 0 10px rgba(185, 39, 252, 0.6)',
      }
    },
  },
  plugins: [],
}
