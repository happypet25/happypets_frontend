export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'site': '1920px',
      },
      colors: {
        brand: {
          magenta: '#C62E7B',
          magentaDark: '#8B1055',
          pink: '#E0337A',
          navy: '#8B1055',
          blue: '#A61965',
          teal: '#C62E7B',
          gold: '#FCC244',
          cream: '#FDF9F6',
          sage: '#FDF5FB',
          blush: '#FDEEF6',
          gray: '#5B6B78',
          border: '#F3D5E8',
          tint: {
            mint: '#F9D0E8',
            pink: '#FDC2CE',
            gold: '#FCD585',
            blue: '#F2C8E4'
          }
        },
        blue: {
          DEFAULT: '#C62E7B',
          50: '#FDF0F7',
          100: '#FDEEF6',
          200: '#F9C8E6',
          300: '#F4A0D0',
          400: '#E0337A',
          500: '#C62E7B',
          600: '#A61965',
          700: '#8B1055',
          800: '#6B0C42',
          900: '#4A0830',
        },
        cream: '#FFFFFF',
        sand: '#FFF0F8',
        charcoal: {
          DEFAULT: '#2A1A24',
          mid: '#4A2A3A',
          light: '#6B4A58',
        },
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.04em', fontWeight: '900' }],
        'display-lg': ['clamp(2.5rem, 5.5vw, 5rem)', { lineHeight: '1.0', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display-md': ['clamp(1.75rem, 3.5vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'morph': 'morph 8s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fadeIn 0.6s ease both',
        'scale-in': 'scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'marquee': 'marquee 30s linear infinite',
        'slide-in-left': 'slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'slide-in-right': 'slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'slide-left': 'slideLeft 0.9s cubic-bezier(0.16, 1, 0.3, 1) both',
        'slide-right': 'slideRight 0.9s cubic-bezier(0.16, 1, 0.3, 1) both',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'sign-swing': 'signSwing 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        morph: {
          '0%, 100%': { borderRadius: '50% 40% 50% 40% / 40% 50% 40% 50%' },
          '25%': { borderRadius: '40% 60% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '60% 40% 60% 40% / 40% 60% 40% 60%' },
          '75%': { borderRadius: '30% 70% 40% 60% / 70% 40% 60% 30%' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.92)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        signSwing: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        slideLeft: {
          from: { opacity: '0', transform: 'translateX(-40px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(40px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      boxShadow: {
        'soft': '0 4px 24px -4px rgba(198,46,123,0.15)',
        'pink': '0 8px 32px -8px rgba(198,46,123,0.35)',
        'blue': '0 8px 32px -8px rgba(139,16,85,0.25)',
        'premium': '0 20px 60px -15px rgba(198,46,123,0.12)',
        'card': '0 2px 20px rgba(0,0,0,0.06)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #FFF0F8 0%, #FDEEF6 40%, #FFF5F0 100%)',
        'pink-gradient': 'linear-gradient(135deg, #C62E7B 0%, #FDEEF6 100%)',
        'blue-gradient': 'linear-gradient(135deg, #8B1055 0%, #C62E7B 100%)',
        'cta-gradient': 'linear-gradient(135deg, #8B1055 0%, #C62E7B 50%, #A61965 100%)',
      },
    },
  },
  plugins: [],
}
