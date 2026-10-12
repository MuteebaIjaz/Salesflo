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
          DEFAULT: '#F6F4EF',
          light: '#FAF8F4',
          dark: '#EAE6DD',
          alt: '#F8F7F3',
        },
        navy: {
          DEFAULT: '#101E2D',
          deep: '#0B1520',
          dark: '#101E2D',
          light: '#182C40',
          soft: '#223B54',
          card: '#142438',
        },
        gold: {
          DEFAULT: '#B88C46',
          hover: '#A37936',
          light: '#C8A05D',
          pale: '#F4E8D3',
          border: '#D9C298',
        },
        bluegrey: {
          DEFAULT: '#DCE4E7',
          light: '#EDF2F4',
          dark: '#B0C2C8',
        },
        slate: {
          DEFAULT: '#667587',
          muted: '#8A99AA',
          light: '#CBD5E1',
        },
        border: {
          soft: '#E7E4DD',
          dark: '#1E324B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(16, 30, 45, 0.04)',
        'card': '0 4px 20px rgba(16, 30, 45, 0.06)',
        'card-hover': '0 14px 34px rgba(16, 30, 45, 0.12)',
        'elevated': '0 24px 48px -12px rgba(16, 30, 45, 0.16)',
        'glow-gold': '0 0 24px rgba(184, 140, 70, 0.18)',
      },
      maxWidth: {
        'site': '1240px',
      }
    },
  },
  plugins: [],
}
