/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#030712',
          900: '#070d1e',
          850: '#0b132b',
          800: '#111d40',
          700: '#1c2d5a',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          neon: '#00f2fe',
        },
        electric: {
          blue: '#4facfe',
          glow: '#00d2ff',
          violet: '#7928ca'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'neon-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.45)',
        'neon-blue': '0 0 35px -5px rgba(79, 172, 254, 0.4)',
        'glow-lg': '0 0 50px -10px rgba(0, 242, 254, 0.3)',
      },
      animation: {
        'float-slow': 'floating 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}

