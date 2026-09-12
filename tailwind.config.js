/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#08070D',          // deep near-black page background
        surface: '#100E1A',      // card / panel background
        'surface-2': '#16132A',  // hover state for panels
        line: '#231E3A',         // hairline borders / dividers
        text: {
          DEFAULT: '#F2EEFF',    // crisp near-white with a cool purple tint (~16:1 contrast)
          muted: '#C9BEE8',      // soft lavender — readable secondary text (~7:1 contrast)
          faint: '#8C82AA',      // visible purple-grey for timestamps/labels (~3.5:1 contrast)
        },
        accent: {
          DEFAULT: '#A855F7',    // violet-purple primary accent
          dim: '#7C3AED',        // darker purple for hover states
          glow: '#C084FC',       // bright lilac for glow effects
        },
        ember: '#E879F9',        // fuchsia — used sparingly as a secondary pop
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
          'linear-gradient(180deg, transparent 0%, rgba(8,7,13,0.95) 90%)',
        'purple-glow':
          'radial-gradient(ellipse 70% 60% at 50% -10%, rgba(168,85,247,0.18) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-purple': '0 0 40px -8px rgba(168,85,247,0.45)',
        'glow-sm': '0 0 16px -4px rgba(168,85,247,0.3)',
      },
    },
  },
  plugins: [],
}
