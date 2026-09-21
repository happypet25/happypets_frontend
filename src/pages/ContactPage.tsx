import Contact from '../components/Contact';
import CTABanner from '../components/CTABanner';
import useScrollReveal from '../hooks/useScrollReveal';

export default function ContactPage() {
  useScrollReveal();

  return (
    <div style={{ background: '#FDF9F6' }}>
      {/* Hero */}
      <section className="py-16 lg:py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FDEEF6 0%, #FDF9F6 50%, #FFF8EB 100%)' }}>
        {/* Paw watermark bg */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            { top: '15%', left: '8%', size: 55, opacity: 0.07, rot: -20 },
            { top: '30%', right: '6%', size: 70, opacity: 0.06, rot: 25 },
            { bottom: '20%', left: '15%', size: 40, opacity: 0.06, rot: 10 },
            { bottom: '15%', right: '20%', size: 60, opacity: 0.05, rot: -35 },
          ].map((p, i) => (
            <svg key={i} width={p.size} height={p.size} viewBox="0 0 100 100" fill="#C62E7B"
              style={{ position: 'absolute', ...p, opacity: p.opacity, transform: `rotate(${p.rot}deg)` }}>
              <ellipse cx="50" cy="65" rx="22" ry="18" />
              <ellipse cx="24" cy="42" rx="10" ry="13" />
              <ellipse cx="44" cy="32" rx="10" ry="13" />
              <ellipse cx="64" cy="32" rx="10" ry="13" />
              <ellipse cx="76" cy="42" rx="10" ry="13" />
            </svg>
          ))}
        </div>

        <div className="container-site text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full" style={{ background: '#FCC244', border: '1px solid #E5A922' }}>
            <span className="text-sm">🐾</span>
            <span className="font-body text-xs font-semibold uppercase tracking-widest" style={{ color: '#2A1A24' }}>Get In Touch</span>
          </div>
          <h1 className="font-heading font-black leading-tight mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#C62E7B' }}>
            We Are Always Here<br />
            <span style={{ color: '#FCC244' }}>For You & Your Pets</span>
          </h1>
          <p className="font-body text-sm max-w-xl mx-auto leading-relaxed" style={{ color: '#6B4A58' }}>
            Book your 1st free training session, ask questions, or just say hello. We respond within 2 hours.
          </p>
        </div>
      </section>

      <Contact />
      <CTABanner />
    </div>
  );
}
