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
        heading: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        none: '0px',
        sm: '12px',
        DEFAULT: '12px',
        md: '12px',
        lg: '12px',
        xl: '12px',
        '2xl': '12px',
        '3xl': '12px',
        full: '12px',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(16, 30, 45, 0.05)',
        'card': 'none',
        'card-hover': 'none',
        'elevated': 'none',
        'glow-gold': 'none',
      },
      maxWidth: {
        'site': '1100px',
      }
    },
  },
  plugins: [],
}
