/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a8a', // Blue-900 (Deep Blue)
          light: '#3b82f6',   // Blue-500 (Bright Blue)
        },
        accent: {
          DEFAULT: '#60a5fa', // Blue-400 (Sky Blue)
          hover: '#93c5fd',   // Blue-300
        },
        text: {
          light: '#f8fafc', // White-ish
          muted: '#94a3b8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
