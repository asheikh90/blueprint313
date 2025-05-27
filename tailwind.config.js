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
          50: 'var(--primary-50)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
          800: 'var(--primary-800)',
          900: 'var(--primary-900)',
        },
        dark: {
          50: 'var(--dark-50)',
          100: 'var(--dark-100)',
          200: 'var(--dark-200)',
          300: 'var(--dark-300)',
          400: 'var(--dark-400)',
          500: 'var(--dark-500)',
          600: 'var(--dark-600)',
          700: 'var(--dark-700)',
          800: 'var(--dark-800)',
          900: 'var(--dark-900)',
          950: 'var(--dark-950)',
        },
        accent: {
          300: 'var(--accent-300)',
          400: 'var(--accent-400)',
          500: 'var(--accent-500)',
          600: 'var(--accent-600)',
        },
        'dark-bg': 'var(--dark-bg)',
        green: {
          light: '#86efac',
          DEFAULT: '#22c55e',
          dark: '#166534',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '13': '3.25rem',
      },
      backgroundImage: {
        'green-gradient': 'linear-gradient(135deg, #4ade80 0%, #16a34a 50%, #166534 100%)',
        'dark-gradient': 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
      },
      boxShadow: {
        'green': '0 0 15px rgba(74, 222, 128, 0.5)',
        'green-sm': '0 0 5px rgba(74, 222, 128, 0.3)',
      },
    },
  },
  plugins: [],
}
