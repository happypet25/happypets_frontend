import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, BookOpen, Heart, PawPrint, ArrowRight } from 'lucide-react';
import { services as allServices } from './ServicesSection';

/* ─── Founder Letter Modal ─────────────────────────────────── */
function FounderLetterModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: 'rgba(42,26,36,0.75)', backdropFilter: 'blur(10px)' }}
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden"
        style={{ border: '2.5px solid #C62E7B' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Sticky header */}
        <div
          className="relative px-8 pt-10 pb-8 rounded-t-3xl overflow-hidden flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #C62E7B 0%, #C62E7B 100%)' }}
        >
          {/* Paw watermark */}
          <div className="absolute top-4 right-6 opacity-10 pointer-events-none">
            <svg width="120" height="120" viewBox="0 0 100 100" fill="#fff">
              <ellipse cx="50" cy="65" rx="22" ry="18" />
              <ellipse cx="24" cy="42" rx="10" ry="13" />
              <ellipse cx="44" cy="32" rx="10" ry="13" />
              <ellipse cx="64" cy="32" rx="10" ry="13" />
              <ellipse cx="76" cy="42" rx="10" ry="13" />
            </svg>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.2)' }}>
              <BookOpen size={20} color="#fff" />
            </div>
            <div>
              <p className="font-body text-xs text-white/70 uppercase tracking-widest">A message from our</p>
              <h2 className="font-heading font-black text-2xl text-white leading-tight">Founder's Letter</h2>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0"
              style={{ background: 'rgba(255,255,255,0.15)', border: '2px solid rgba(255,255,255,0.3)' }}
            >
              <img
                src="/logo.png"
                alt="Founder"
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div>
              <div className="font-heading font-black text-white text-lg">Founder, Happy Pet Training</div>
              <div className="font-body text-white/70 text-sm">15+ Years of Passion for Dogs</div>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{ background: 'rgba(255,255,255,0.2)' }}
            aria-label="Close"
          >
            <X size={18} color="#fff" />
          </button>
        </div>

        {/* Scrollable letter body */}
        <div className="px-8 py-8 overflow-y-auto flex-1">
          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div style={{ flex: 1, height: 1, background: '#F3D5E8' }} />
            <PawPrint size={16} style={{ color: '#C62E7B', opacity: 0.4 }} />
            <div style={{ flex: 1, height: 1, background: '#F3D5E8' }} />
          </div>

          <div className="font-body text-base leading-relaxed space-y-5" style={{ color: '#2A1A24' }}>
            <p style={{ color: '#C62E7B', fontWeight: 700, fontStyle: 'italic', fontSize: '1.05rem' }}>
              "To every dog parent who trusted us with their most precious companion —"
            </p>

            <p>
              Twenty-seven years ago, I started Happy Pet Training with a single belief: that every dog, no matter the breed or background, deserves to be understood, not dominated.
            </p>

            <p>
              I grew up watching dogs being trained through fear — harsh commands, punishments, and a relationship built on control. It broke my heart. Because I knew these animals were not stubborn or bad. They were simply not being spoken to in their language.
            </p>

            <p>
              So I made a promise. Every dog that comes to Happy Pet Training will be treated with love, patience, and positive reinforcement. No shortcuts. No cruelty. Just trust, built one session at a time.
            </p>

            <p>
              Over the years, we've trained thousands of dogs across Mumbai, Thane, and Navi Mumbai — from tiny Shih Tzus learning their first commands to powerful German Shepherds completing advanced agility courses. And in every single one of those journeys, the transformation was mutual. The dogs became calmer, happier, more confident. And so did their families.
            </p>

            <p>
              Today, Happy Pet Training is not just a business. It is a community — of trainers who genuinely love animals, and of pet parents who understand that a well-trained dog is a happy dog.
            </p>

            <p>
              Whether you're a new puppy parent or you've had dogs all your life, I welcome you. Your pet's journey to being their best self starts here.
            </p>

            <p style={{ marginTop: '1.5rem' }}>
              With love and paws,
            </p>
          </div>

          {/* Signature */}
          <div className="mt-4 flex items-end gap-4">
            <div>
              <div className="font-heading font-black text-xl" style={{ color: '#C62E7B' }}>
                Happy Pet Training
              </div>
              <div className="font-body text-sm" style={{ color: '#5B6B78' }}>
                Founder & Head Trainer · Since 1997
              </div>
              <div className="flex items-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} size={12} fill="#C62E7B" color="#C62E7B" />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom divider */}
          <div className="flex items-center gap-3 mt-8">
            <div style={{ flex: 1, height: 1, background: '#F3D5E8' }} />
            <PawPrint size={16} style={{ color: '#C62E7B', opacity: 0.4 }} />
            <div style={{ flex: 1, height: 1, background: '#F3D5E8' }} />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              onClick={onClose}
              className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-heading font-bold text-sm transition-all hover:opacity-90"
              style={{ background: '#C62E7B', color: '#fff' }}
            >
              Book Your Free Demo
            </Link>
            <button
              onClick={onClose}
              className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-heading font-bold text-sm transition-all hover:opacity-90"
              style={{ background: '#FDEEF6', color: '#C62E7B', border: '2px solid #F3D5E8' }}
            >
              Close Letter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Nav Links ───────────────────────────────────────────────── */

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Team', href: '/team' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Pet Training', href: '/services' },
      { label: 'Pet Walking', href: '/services' },
      { label: 'Pet Grooming', href: '/services' },
      { label: 'Daycare & Boarding', href: '/services' },
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

/* ─── Navbar ──────────────────────────────────────────────────── */

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [founderOpen, setFounderOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setMenuOpen(false); setServicesOpen(false); }, [location.pathname]);
  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {founderOpen && <FounderLetterModal onClose={() => setFounderOpen(false)} />}

      <div
        id="top-bar"
        style={{ background: 'linear-gradient(90deg, #C62E7B 0%, #C62E7B 100%)', padding: '6px 16px' }}
        className="relative z-50 overflow-hidden"
      >
        {/* Subtle paw bg */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 400 32" fill="white" preserveAspectRatio="xMidYMid slice">
            <ellipse cx="20" cy="20" rx="7" ry="6" /><ellipse cx="10" cy="13" rx="3" ry="4" /><ellipse cx="16" cy="10" rx="3" ry="4" /><ellipse cx="24" cy="10" rx="3" ry="4" /><ellipse cx="30" cy="13" rx="3" ry="4" />
            <ellipse cx="120" cy="18" rx="7" ry="6" /><ellipse cx="110" cy="11" rx="3" ry="4" /><ellipse cx="116" cy="8" rx="3" ry="4" /><ellipse cx="124" cy="8" rx="3" ry="4" /><ellipse cx="130" cy="11" rx="3" ry="4" />
            <ellipse cx="260" cy="22" rx="7" ry="6" /><ellipse cx="250" cy="15" rx="3" ry="4" /><ellipse cx="256" cy="12" rx="3" ry="4" /><ellipse cx="264" cy="12" rx="3" ry="4" /><ellipse cx="270" cy="15" rx="3" ry="4" />
            <ellipse cx="380" cy="16" rx="7" ry="6" /><ellipse cx="370" cy="9" rx="3" ry="4" /><ellipse cx="376" cy="6" rx="3" ry="4" /><ellipse cx="384" cy="6" rx="3" ry="4" /><ellipse cx="390" cy="9" rx="3" ry="4" />
          </svg>
        </div>
        <div className="container-site flex items-center justify-between gap-3 flex-wrap relative z-10">
          <span className="font-body text-white text-[11px] font-medium flex items-center gap-2">
            <img src="/logo.png" alt="Logo" width="18" height="18" className="w-[18px] h-[18px] object-contain hidden sm:block" />
            🐾 Mumbai's #1 Dog Trainers — Positive Reinforcement, Real Results
          </span>
          <div className="flex items-center gap-3">
            <a href="tel:+91-88799-52169" className="flex items-center gap-1.5 text-white font-semibold text-[11px] hover:opacity-80 transition-opacity hidden sm:flex">
              <Phone size={10} />
              +91 88799 52169
            </a>
            <div className="w-px h-4 bg-white/30 hidden sm:block" />
            {/* App Store */}
            <a href="#" aria-label="Download on App Store"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md font-body text-[10px] font-bold text-white hover:opacity-90 transition-opacity"
              style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>
            {/* Play Store */}
            <a href="#" aria-label="Get on Google Play"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md font-body text-[10px] font-bold text-white hover:opacity-90 transition-opacity"
              style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                <path d="M3.18 23.73c.38.21.82.21 1.2-.01l11.46-6.59-2.5-2.51-10.16 9.11zm-1.13-20.3C1.7 3.82 1.5 4.3 1.5 4.86v14.28c0 .56.2 1.04.55 1.43l.08.07 8.01-8.01v-.18L2.13 3.38l-.08.05zm17.65 9.23L17 10.49l-2.6 2.6 2.6 2.6 2.73-1.57c.78-.45.78-1.18-.03-1.46zm-14.65 1.53l2.6-2.61-2.6-2.6-2.6 2.6 2.6 2.61z"/>
              </svg>
              Play Store
            </a>
          </div>
        </div>
      </div>

      <nav
        id="navbar"
        className="sticky top-0 z-40 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(253,249,246,0.97)' : '#FDF9F6',
          borderBottom: '1px solid #F3D5E8',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 2px 20px rgba(198,46,123,0.08)' : 'none',
        }}
      >
        <div className="container-site flex items-center justify-between py-2">
          <Link to="/" className="flex items-center gap-3 flex-shrink-0 group" aria-label="Happy Pet Training Home">
            <div className="transition-transform duration-300 group-hover:scale-105">
              <img src="/logo.png" alt="Happy Pet Training Logo" width="64" height="64" className="w-[64px] h-[64px] object-contain" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-heading font-black text-[17px] tracking-tight" style={{ color: '#C62E7B' }}>HAPPY PET</span>
              <span className="font-heading font-black text-[17px] tracking-tight" style={{ color: '#C62E7B' }}>TRAINING</span>
              <span className="font-body text-[9px] tracking-widest uppercase mt-0.5" style={{ color: '#B45309', fontWeight: 700 }}>Positive Training Happy Tails</span>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              link.children ? (
                <li
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 font-body font-medium text-[15px] px-4 py-2 rounded-lg transition-colors duration-200"
                    style={{ color: servicesOpen || isActive(link.href) ? '#C62E7B' : '#3A1A2A' }}
                    onClick={() => setServicesOpen(o => !o)}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      style={{
                        transition: 'transform 0.2s',
                        transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        color: servicesOpen ? '#C62E7B' : undefined,
                      }}
                    />
                  </button>

                  {/* ── Mega-menu Services Panel ── */}
                  <div
                    className="absolute top-full left-1/2 mt-2 transition-all duration-250"
                    style={{
                      transform: 'translateX(-50%)',
                      width: '600px',
                      zIndex: 99,
                      opacity: servicesOpen ? 1 : 0,
                      visibility: servicesOpen ? 'visible' : 'hidden',
                      pointerEvents: servicesOpen ? 'auto' : 'none',
                      translate: servicesOpen ? '0 0' : '0 8px',
                    }}
                  >
                    <div
                      className="bg-white rounded-3xl overflow-hidden"
                      style={{ border: '2px solid #F3D5E8', boxShadow: '0 20px 60px rgba(198,46,123,0.14)' }}
                    >
                      {/* Header */}
                      <div className="px-5 pt-4 pb-3 flex items-center justify-between" style={{ borderBottom: '1px solid #F3D5E8' }}>
                        <div>
                          <div className="font-heading font-black text-base" style={{ color: '#C62E7B' }}>Our Services</div>
                          <div className="font-body text-[11px]" style={{ color: '#9CA3AF' }}>Expert-led · Positive reinforcement · Mumbai since 1997</div>
                        </div>
                        <Link
                          to="/services"
                          onClick={() => setServicesOpen(false)}
                          className="flex items-center gap-1 font-heading font-bold text-xs px-3 py-1.5 rounded-full transition-all hover:opacity-90"
                          style={{ background: '#C62E7B', color: '#fff' }}
                        >
                          All Services <ArrowRight size={11} />
                        </Link>
                      </div>

                      {/* Service grid */}
                      <div className="grid grid-cols-2 gap-0 p-3">
                        {allServices.map((svc) => (
                          <Link
                            key={svc.id}
                            to="/services"
                            onClick={() => setServicesOpen(false)}
                            className="flex items-start gap-3 p-3 rounded-2xl transition-colors duration-200"
                            style={{ textDecoration: 'none' }}
                            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#FDEEF6'; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}
                          >
                            {/* Icon */}
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200" style={{ background: svc.iconBg }}>
                              <div style={{ transform: 'scale(1.15)' }}>{svc.icon}</div>
                            </div>
                            {/* Text */}
                            <div className="flex-1 min-w-0">
                              <div className="font-heading font-bold text-[13px] leading-tight" style={{ color: '#2A1A24' }}>{svc.category}</div>
                              <div className="font-body text-[11px] leading-snug mt-0.5 line-clamp-2" style={{ color: '#5B6B78' }}>{svc.tagline}</div>
                              <div className="flex items-center gap-2 mt-1.5">
                                <span className="font-heading font-bold text-[11px] px-2 py-0.5 rounded-full" style={{ background: '#FDEEF6', color: svc.accentColor }}>Enquire Now →</span>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="px-5 py-3 flex items-center justify-between" style={{ borderTop: '1px solid #F3D5E8', background: '#FDEEF6' }}>
                        <a
                          href="tel:+91-88799-52169"
                          onClick={() => setServicesOpen(false)}
                          className="flex items-center gap-1.5 font-body font-semibold text-[12px] hover:opacity-80 transition-opacity"
                          style={{ color: '#C62E7B' }}
                        >
                          <Phone size={12} /> +91 88799 52169
                        </a>
                        <Link
                          to="/contact"
                          onClick={() => setServicesOpen(false)}
                          className="flex items-center gap-1.5 font-heading font-bold text-[12px] px-4 py-2 rounded-full hover:opacity-90"
                          style={{ background: '#C62E7B', color: '#fff' }}
                        >
                          Book Free Demo
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={link.label} className="relative">
                  <Link
                    to={link.href}
                    className="relative font-body font-medium text-[15px] px-4 py-2 rounded-lg transition-colors duration-200 inline-block"
                    style={{ color: isActive(link.href) ? '#C62E7B' : '#3A1A2A' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#C62E7B')}
                    onMouseLeave={e => (e.currentTarget.style.color = isActive(link.href) ? '#C62E7B' : '#3A1A2A')}
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <span className="absolute bottom-0.5 left-4 right-4 h-[3px] rounded-full" style={{ background: '#C62E7B' }} />
                    )}
                  </Link>
                </li>
              )
            ))}

            {/* Founder Letter — special nav item */}
            <li>
              <button
                id="nav-founder-letter"
                onClick={() => setFounderOpen(true)}
                className="flex items-center gap-1.5 font-body font-medium text-[15px] px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
                style={{ color: '#D97706' }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#FFF3CD'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
              >
                <BookOpen size={14} />
                Founder Letter
              </button>
            </li>
          </ul>

          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <Link
              to="/contact"
              id="nav-cta"
              className="btn-pink font-heading font-bold px-6 py-3 rounded-full"
              style={{ fontSize: '15px' }}
            >
              Book Free Demo
            </Link>
          </div>

          <button
            id="hamburger-btn"
            className="lg:hidden p-1.5 rounded-lg transition-colors border-2"
            style={{
              WebkitTapHighlightColor: 'transparent',
              color: '#C62E7B',
              borderColor: menuOpen ? '#FCC244' : 'transparent'
            }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 lg:hidden z-30"
          style={{ background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(4px)', top: document.getElementById('navbar')?.getBoundingClientRect().bottom || 96 }}
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div
        className="fixed right-0 lg:hidden bg-white overflow-y-auto z-40 transition-transform duration-300 w-full sm:w-[320px]"
        style={{
          top: document.getElementById('navbar')?.getBoundingClientRect().bottom || 96,
          bottom: 0,
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          borderLeft: '1px solid #F3D5E8',
          boxShadow: '-8px 0 32px rgba(198,46,123,0.1)',
        }}
      >
        <div className="container-site py-5 flex flex-col gap-1">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                to={link.href}
                className="flex items-center font-heading font-bold text-base py-3 px-4 rounded-xl transition-colors"
                style={{ color: isActive(link.href) ? '#C62E7B' : '#3A1A2A', background: isActive(link.href) ? '#FDEEF6' : 'transparent' }}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="pl-4 flex flex-col gap-0.5 mb-2">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.href}
                      className="font-body text-sm py-2 px-4 rounded-lg flex items-center gap-2 transition-colors"
                      style={{ color: '#5B6B78' }}
                    >
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#C62E7B' }} />
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Founder Letter — mobile */}
          <button
            onClick={() => { setMenuOpen(false); setFounderOpen(true); }}
            className="flex items-center gap-2 font-heading font-bold text-base py-3 px-4 rounded-xl transition-colors text-left"
            style={{ color: '#D97706', background: '#FFFBEB' }}
          >
            <BookOpen size={16} />
            Founder Letter
          </button>

          <div className="mt-3 pt-4 flex flex-col gap-3" style={{ borderTop: '1px solid #F3D5E8' }}>
            <a href="tel:+91-88799-52169" className="flex items-center justify-center gap-2 py-3 rounded-xl border font-heading font-bold text-sm" style={{ borderColor: '#F3D5E8', color: '#3A1A2A' }}>
              <Phone size={15} style={{ color: '#C62E7B' }} />
              +91 88799 52169
            </a>
            <Link to="/contact" className="btn-pink text-center py-4 rounded-2xl" style={{ justifyContent: 'center' }}>
              Book a Free Demo Session
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
