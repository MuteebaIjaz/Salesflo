/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F8F7F3',
          light: '#FCFBF9',
          dark: '#EFECE4',
        },
        navy: {
          DEFAULT: '#142438',
          deep: '#142438',
          dark: '#101E2D',
          light: '#1E324B',
          soft: '#253C58',
        },
        gold: {
          DEFAULT: '#B58B48',
          hover: '#A0793A',
          light: '#C79F5E',
          pale: '#F4E8D3',
          border: '#D9C298',
        },
        slate: {
          DEFAULT: '#64748B',
          muted: '#94A3B8',
          light: '#CBD5E1',
        },
        border: {
          soft: '#E7E4DD',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(20, 36, 56, 0.04)',
        'card': '0 4px 20px rgba(20, 36, 56, 0.06)',
        'card-hover': '0 12px 30px rgba(20, 36, 56, 0.1)',
        'elevated': '0 20px 40px -15px rgba(20, 36, 56, 0.12)',
      },
      maxWidth: {
        'site': '1200px',
      }
    },
  },
  plugins: [],
}
