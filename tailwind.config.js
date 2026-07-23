/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F8ECD4',
        paper: '#FBF3E2',
        sand: '#EFDDBC',
        rust: '#A8431F',
        copper: '#BE6B33',
        ember: '#8C3115',
        deep: '#461B07',
        gold: '#B98A2E',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        arabic: ['Amiri', 'serif'],
      },
      maxWidth: {
        measure: '68ch',
        site: '76rem',
      },
      letterSpacing: {
        eyebrow: '0.22em',
      },
      transitionTimingFunction: {
        calm: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
