import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Upgraded vibrant pastels
        lavender: '#C4A5FF',
        'lavender-light': '#E7D7FF',
        'baby-blue': '#7DD3FC',
        'baby-blue-light': '#D9EFFF',
        mint: '#34D399',
        'mint-light': '#DFFFEA',
        peach: '#FB923C',
        'peach-light': '#FFD9C2',
        blush: '#FDA4AF',
        'blush-light': '#FFE7EF',
        sky: '#38BDF8',
        'sky-light': '#CFF3FF',
        'soft-gray': '#F2F5F8',
        
        // Brand tokens
        accent: '#C4A5FF',
        accentSoft: '#E7D7FF',
        accentWarm: '#FB923C',
        bgBase: '#FAFBFC',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft-pastel': '0 10px 30px rgba(196, 165, 255, 0.4), 0 6px 20px rgba(125, 211, 252, 0.3)',
        'glow-accent': '0 0 40px rgba(196, 165, 255, 0.5), 0 0 80px rgba(196, 165, 255, 0.2)',
        'glow-warm': '0 0 30px rgba(251, 146, 60, 0.4)',
        'glass-strong': '0 8px 32px rgba(31, 38, 135, 0.15)',
      },
      backgroundImage: {
        'pastel-gradient':
          'radial-gradient(1200px 600px at 10% 10%, rgba(196,165,255,0.35), transparent 60%), radial-gradient(1200px 600px at 90% 20%, rgba(125,211,252,0.30), transparent 60%), radial-gradient(1200px 800px at 30% 80%, rgba(52,211,153,0.25), transparent 60%)',
        'gradient-radial-accent': 'radial-gradient(circle at center, rgba(196,165,255,0.4) 0%, rgba(125,211,252,0.3) 50%, transparent 100%)',
        'gradient-linear-hero': 'linear-gradient(135deg, rgba(196,165,255,0.25) 0%, rgba(125,211,252,0.2) 50%, rgba(52,211,153,0.15) 100%)',
        'gradient-cta': 'linear-gradient(135deg, #C4A5FF 0%, #7DD3FC 100%)',
        'gradient-cta-warm': 'linear-gradient(135deg, #FB923C 0%, #FDA4AF 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.5) 100%)',
      },
      backdropBlur: {
        xl: '24px',
      },
      transitionTimingFunction: {
        'soft': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}

export default config
