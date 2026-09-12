/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0C10',        // page background
        surface: '#12151B',    // panels / cards
        'surface-2': '#171B22',// hover state for panels
        line: '#22262E',       // hairline borders/dividers
        text: {
          DEFAULT: '#E9EBEF',
          muted: '#8890A0',
          faint: '#5B6270',
        },
        accent: {
          DEFAULT: '#5B8DEF',  // signal blue - primary accent
          dim: '#3C5B99',
        },
        ember: '#E2A857',       // secondary accent, used sparingly
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
          'linear-gradient(180deg, transparent 0%, rgba(10,12,16,0.9) 90%)',
      },
    },
  },
  plugins: [],
}
