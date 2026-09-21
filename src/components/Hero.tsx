import { Link } from 'react-router-dom';
import { PawPrint, Heart, MapPin } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

function SvgDots() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="#C62E7B" opacity="0.18">
      {[0, 1, 2, 3].map(row =>
        [0, 1, 2, 3].map(col => (
          <circle key={`${row}-${col}`} cx={col * 22 + 8} cy={row * 22 + 8} r="4" />
        ))
      )}
    </svg>
  );
}

const trustItems = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <path d="M20 4 L34 10 L34 22 C34 30 27 36 20 38 C13 36 6 30 6 22 L6 10 Z" fill="#C62E7B" opacity="0.15" stroke="#C62E7B" strokeWidth="1.5" />
        <path d="M14 20 L18 24 L26 16" stroke="#C62E7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Certified Trainers',
    sub: 'Experienced & Trained Professionals',
    bg: '#FDEEF6',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <path d="M20 34 C20 34 6 26 6 16 A8 8 0 0 1 20 12 A8 8 0 0 1 34 16 C34 26 20 34 20 34Z" fill="#C62E7B" opacity="0.25" stroke="#C62E7B" strokeWidth="1.5" />
        <path d="M20 34 C20 34 6 26 6 16 A8 8 0 0 1 20 12 A8 8 0 0 1 34 16 C34 26 20 34 20 34Z" fill="#C62E7B" opacity="0.15" />
      </svg>
    ),
    label: 'Positive Methods',
    sub: 'Humane & Effective Training',
    bg: '#FDC2CE',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect x="8" y="16" width="24" height="18" rx="3" fill="#FCC244" opacity="0.3" stroke="#D97706" strokeWidth="1.5" />
        <path d="M14 16 V12 A6 6 0 0 1 26 12 V16" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="25" r="3" fill="#D97706" opacity="0.7" />
      </svg>
    ),
    label: 'Safe & Clean',
    sub: 'Guaranteed Safety Always',
    bg: '#FCD585',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <ellipse cx="20" cy="26" rx="10" ry="8" fill="#C62E7B" opacity="0.15" stroke="#C62E7B" strokeWidth="1.5" />
        <ellipse cx="12" cy="16" rx="5" ry="6" fill="#C62E7B" opacity="0.15" stroke="#C62E7B" strokeWidth="1.2" />
        <ellipse cx="20" cy="12" rx="5" ry="6" fill="#C62E7B" opacity="0.15" stroke="#C62E7B" strokeWidth="1.2" />
        <ellipse cx="28" cy="16" rx="5" ry="6" fill="#C62E7B" opacity="0.15" stroke="#C62E7B" strokeWidth="1.2" />
      </svg>
    ),
    label: '1000+ Pets Trained',
    sub: 'Results Backed by 15 Years of Experience',
    bg: '#F9C8E6',
  },
];

const locations = ['Mumbai', 'Thane', 'Navi Mumbai', 'Virar'];

export default function Hero() {
  useScrollReveal();

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Magenta gradient blob top-right */}
      <div className="absolute top-0 right-0 w-[52%] h-[92%] pointer-events-none" style={{ background: 'linear-gradient(135deg, #FDEEF6 0%, #FDEEF6 60%, #C62E7B 100%)', borderBottomLeftRadius: '60% 40%', opacity: 0.15 }} />

      <div className="absolute top-6 right-6 pointer-events-none opacity-60">
        <SvgDots />
      </div>
      <div className="absolute bottom-20 right-[44%] pointer-events-none">
        <PawPrint size={24} style={{ color: '#C62E7B', opacity: 0.3 }} className="animate-float" />
      </div>
      <div className="absolute top-32 left-[42%] pointer-events-none">
        <Heart size={16} style={{ color: '#C62E7B', opacity: 0.35 }} className="animate-float-slow" />
      </div>

      {/* Large Goldish Paw from User Image */}
      <div className="absolute top-[30%] -left-[2%] pointer-events-none z-0 hidden lg:block animate-float-slow">
        <svg width="320" height="320" viewBox="0 0 100 100" fill="#FCC244" opacity="0.3" transform="rotate(-15)">
          <ellipse cx="50" cy="65" rx="26" ry="22" />
          <circle cx="18" cy="40" r="11" />
          <circle cx="36" cy="22" r="11" />
          <circle cx="64" cy="22" r="11" />
          <circle cx="82" cy="40" r="11" />
        </svg>
      </div>

      <div className="container-site relative z-20 pt-5 lg:pt-6">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 pb-0">

          {/* ── Left Column: text content ── */}
          <div className="flex-1 flex flex-col items-start text-left animate-slide-left w-full" style={{ animationDelay: '0.1s' }}>

            {/* Service Available Locations Strip */}
            <div className="mb-5 w-full">
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={15} style={{ color: '#C62E7B' }} />
                <span className="font-body text-xs font-semibold uppercase tracking-widest" style={{ color: '#C62E7B' }}>
                  Service available in
                </span>
                <span className="text-sm">👇🏻</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {locations.map((city, i) => (
                  <div
                    key={city}
                    className="animate-location-pulse flex items-center gap-2 px-5 py-2.5 rounded-full font-heading font-bold text-sm shadow-sm cursor-default"
                    style={{
                      background: i === 0 ? '#C62E7B' : '#FDEEF6',
                      color: i === 0 ? '#fff' : '#C62E7B',
                      border: `2px solid ${i === 0 ? '#C62E7B' : '#F3D5E8'}`,
                      animationDelay: `${i * 0.4}s`,
                    }}
                  >
                    <span className="text-sm">{i === 0 ? '🌆' : i === 1 ? '🏙️' : i === 2 ? '🌇' : '🏘️'}</span>
                    {city}
                  </div>
                ))}
              </div>
            </div>

            {/* Trust badge */}
            <div className="flex items-center gap-2 mb-5 px-4 py-2 rounded-full" style={{ background: '#FCC244', border: '1px solid #E5A922' }}>
              <span className="text-sm">🏆</span>
              <span className="font-body text-xs font-semibold" style={{ color: '#2A1A24' }}>Mumbai's #1 Trusted Dog Trainers</span>
            </div>

            {/* ── Mobile Hero Image — sits between trust badge and heading ── */}
            <div className="block lg:hidden w-full mt-8 mb-4">
              <div className="flex justify-center items-end overflow-visible">
                <div className="relative flex justify-center items-end w-full max-w-[400px]">
                  {/* Main image */}
                  <img
                    src="/herohappypets.png"
                    alt="Happy Pet Trainer with Dog"
                    className="w-[120%] max-w-[120%] h-auto object-contain object-bottom relative z-10 drop-shadow-2xl transform -translate-x-[5px]"
                  />
                  {/* 15+ badge */}
                  <div
                    className="absolute bottom-2 right-0 z-30 rounded-xl px-2.5 py-1.5 shadow-lg text-center"
                    style={{ background: '#FCC244' }}
                  >
                    <div className="font-heading font-black text-base" style={{ color: '#2A1A24', lineHeight: 1 }}>15+</div>
                    <div className="font-body text-[8px] font-bold uppercase" style={{ color: '#2A1A24' }}>Years</div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="font-heading leading-tight mb-5 mt-4" style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)' }}>
              <span style={{ color: '#C62E7B', fontWeight: 800 }}>Trusted Dog Trainers</span>
              <br />
              <span style={{ color: '#2A1A24', fontWeight: 800 }}>In Mumbai For</span>
              <br />
              <span style={{ color: '#C62E7B', fontWeight: 800 }}>Obedience, Behavior</span>
              <br />
              <span style={{ color: '#FCC244', fontWeight: 800 }}>&amp; Fun</span>
            </h1>

            <p className="font-body text-base lg:text-lg leading-relaxed mb-6 max-w-[500px]" style={{ color: '#5B6B78', fontWeight: 400 }}>
              Professional dog training built on trust, positive reinforcement, and a lifelong bond — serving families across Mumbai for over 15 years.
            </p>

            <div className="flex flex-wrap gap-4 mb-4 lg:mb-10">
              <Link to="/contact" id="hero-book-demo" className="btn-pink lg:text-base lg:px-8 lg:py-4">
                <PawPrint size={18} />
                Book Free Demo
              </Link>
              <Link to="/services" id="hero-services" className="btn-outline lg:text-base lg:px-8 lg:py-4">
                Our Services
              </Link>
            </div>
          </div>

          {/* ── Desktop Hero Image — only visible lg+ ── */}
          <div
            className="hidden lg:flex flex-shrink-0 justify-center items-end relative animate-slide-right -mt-24"
            style={{ animationDelay: '0.2s', width: 'clamp(620px, 68vw, 1000px)' }}
          >
            {/* Soft bg blob */}
            <div className="absolute top-4 right-0 pointer-events-none">
              <svg width="300" height="380" viewBox="0 0 200 280" className="opacity-25">
                <path d="M200 0 Q200 280 0 280 L200 280 Z" fill="#FDEEF6" />
              </svg>
            </div>

            {/* Floating paw decoration */}
            <div className="absolute top-[10%] left-[-8%] opacity-20 animate-float pointer-events-none text-[#FCC244]">
              <svg width="60" height="60" viewBox="0 0 100 100" fill="currentColor" transform="rotate(-15)"><path d="M50 45 C 30 45, 15 65, 20 85 C 25 105, 75 105, 80 85 C 85 65, 70 45, 50 45 Z" /><circle cx="25" cy="35" r="12" /><circle cx="40" cy="15" r="12" /><circle cx="60" cy="15" r="12" /><circle cx="75" cy="35" r="12" /></svg>
            </div>

            <div className="relative z-10 flex justify-center items-end w-full">
              {/* Image container */}
              <div
                className="relative flex-shrink-0 flex justify-center items-end w-full"
                style={{
                  height: 'clamp(520px, 58vw, 820px)',
                }}
              >
                {/* Main image */}
                <img
                  src="/herohappypets.png"
                  alt="Happy Pet Trainer with Dog"
                  className="w-[115%] h-[115%] object-contain object-bottom relative z-10 drop-shadow-2xl"
                />
              </div>

              {/* Floating card — Positive Reinforcement */}
              <div
                className="absolute bottom-16 left-[-20px] z-20 rounded-2xl px-4 py-3 shadow-xl animate-fade-in"
                style={{ background: '#C62E7B', animationDelay: '0.8s', minWidth: '185px' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Heart size={16} color="#fff" fill="#fff" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-xs text-white/80 uppercase tracking-wider">Positive</div>
                    <div className="font-heading font-bold text-xs text-white">Reinforcement</div>
                    <div className="font-heading font-bold text-xs text-[#FCC244]">Training ✓</div>
                  </div>
                </div>
              </div>

              {/* Years badge */}
              <div
                className="absolute top-32 right-[-16px] z-20 rounded-2xl px-4 py-3 shadow-xl animate-fade-in text-center"
                style={{ background: '#FCC244', animationDelay: '1s' }}
              >
                <div className="font-heading font-black text-2xl" style={{ color: '#2A1A24', lineHeight: 1 }}>15+</div>
                <div className="font-body text-[10px] font-bold uppercase tracking-wider" style={{ color: '#2A1A24' }}>Years Exp.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="relative z-0 w-full overflow-hidden" style={{ marginTop: '-8vw', transform: 'translateY(2px)' }}>
        <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block" preserveAspectRatio="none">
          <path d="M0 200L48 175C96 150 192 100 288 75C384 50 480 50 576 75C672 100 768 150 864 175C960 200 1056 200 1152 175C1248 150 1344 100 1392 75L1440 50V200H1392C1344 200 1248 200 1152 200C1056 200 960 200 864 200C768 200 672 200 576 200C480 200 384 200 288 200C192 200 96 200 48 200H0Z" fill="#FFF5FB" />
        </svg>
      </div>

      {/* Trust items strip */}
      <div className="relative z-10 pb-16" style={{ background: '#FFF5FB' }}>
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {trustItems.map((t) => (
              <div key={t.label} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 group cursor-default reveal" style={{ '--delay': '0.1s' } as React.CSSProperties}>
                <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-sm" style={{ background: t.bg }}>
                  <div style={{ transform: 'scale(1.25)' }}>
                    {t.icon}
                  </div>
                </div>
                <div className="mt-1">
                  <div className="font-heading font-black text-[17px] lg:text-[19px] leading-tight mb-1" style={{ color: '#C62E7B' }}>{t.label}</div>
                  <div className="font-body text-[13px] leading-relaxed max-w-[150px]" style={{ color: '#5B6B78' }}>{t.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
