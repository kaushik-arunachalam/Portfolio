/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0E16',          // deep blue-charcoal page background
        surface: '#121826',      // card / panel background
        'surface-2': '#1A2133',  // hover state for panels
        line: '#252D42',         // hairline borders / dividers
        text: {
          DEFAULT: '#EEF1F7',    // crisp cool white (~16:1 contrast)
          muted: '#A8B0C4',      // soft blue-grey — readable secondary text (~7:1 contrast)
          faint: '#6C7488',      // visible slate for timestamps/labels (~3.5:1 contrast)
        },
        accent: {
          DEFAULT: '#E3A857',    // warm gold — primary accent
          dim: '#C1893D',        // darker amber for hover states
          glow: '#F0C27B',       // pale gold for gradient/glow highlights
        },
        ember: '#4FB8AC',        // muted teal — used sparingly as a secondary pop
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        prose: '68ch',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(180deg, transparent 0%, rgba(10,14,22,0.95) 90%)',
        'purple-glow':
          'radial-gradient(ellipse 70% 60% at 50% -10%, rgba(227,168,87,0.18) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-purple': '0 0 40px -8px rgba(227,168,87,0.45)',
        'glow-sm': '0 0 16px -4px rgba(227,168,87,0.3)',
      },
    },
  },
  plugins: [],
}
