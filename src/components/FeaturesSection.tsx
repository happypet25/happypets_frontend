import { Link } from 'react-router-dom';
import { ArrowRight, PawPrint, Bone } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const features = [
  { emoji: '🎓', title: 'Obedience Training', desc: 'Correct unwanted behaviour with positive reinforcement — no force, ever.' },
  { emoji: '🦮', title: 'Dog Walking', desc: 'Daily walks by certified handlers for a healthy, happy dog.' },
  { emoji: '🏡', title: 'Daycare & Boarding', desc: "Safe, supervised, and fun environment while you're away." },
  { emoji: '🧠', title: 'Behaviour Correction', desc: 'Resolve aggression, anxiety, and bad habits effectively.' },
];

export default function FeaturesSection() {
  useScrollReveal();

  return (
    <section className="py-16 lg:py-24 bg-transparent relative z-10">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-2 relative reveal-right">
            <div
              className="absolute -top-5 -left-5 pointer-events-none rounded-3xl"
              style={{ inset: '-16px', background: 'linear-gradient(135deg, #FDEEF6 0%, #FFF8EB 100%)', opacity: 0.5, borderRadius: '1.5rem', zIndex: 0 }}
            />
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl w-full sm:w-[90%] lg:w-[85%] mx-auto" style={{ border: '3px solid rgba(198,46,123,0.15)' }}>
              <img
                src="/trainer-with-dog.webp"
                alt="Trainer with Dog"
                className="w-full h-[450px] lg:h-[820px] object-cover object-top"
              />
            </div>
            <div
              className="absolute -bottom-5 -right-5 z-20 bg-white rounded-2xl p-4 shadow-lg animate-float"
              style={{ border: '1.5px solid #F3D5E8' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: '#FDEEF6' }}><Bone size={20} color="#C62E7B" /></div>
                <div>
                  <div className="font-heading font-black text-sm" style={{ color: '#C62E7B' }}>15+ Years</div>
                  <div className="font-body text-xs" style={{ color: '#6B4A58' }}>of Experience</div>
                </div>
              </div>
            </div>
            <div
              className="absolute -top-4 right-4 z-20 bg-white rounded-xl px-3 py-2 shadow-lg"
              style={{ border: '1.5px solid #F3D5E8' }}
            >
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <span key={i} style={{ color: '#C62E7B', fontSize: 12 }}>★</span>)}</div>
                <span className="font-body text-xs" style={{ color: '#6B4A58' }}>500+ Happy Pets</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-1 reveal-left">
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full" style={{ background: '#FCC244', border: '1px solid #E5A922' }}>
              <PawPrint size={14} color="#2A1A24" />
              <span className="font-body text-xs font-semibold uppercase tracking-widest" style={{ color: '#2A1A24' }}>1st Free Training Session</span>
            </div>
            <h2 className="font-heading font-black leading-tight mb-5" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: '#2A1A24' }}>
              Start Your Dog's{' '}
              <span style={{ color: '#C62E7B' }}>1st Free Training Session.</span>
            </h2>
            <p className="font-body text-sm leading-relaxed mb-8 max-w-md" style={{ color: '#6B4A58' }}>
              Experience our exclusive behavioural courses designed to bring out the very best in your companion — built on trust, not fear.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className="flex items-start gap-3 p-4 rounded-2xl group cursor-default transition-all duration-300"
                  style={{ background: '#FFF5FB', border: '1.5px solid #F3D5E8', transitionDelay: `${i * 0.07}s` }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#C62E7B'; (e.currentTarget as HTMLDivElement).style.background = '#fff'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 16px rgba(198,46,123,0.12)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#F3D5E8'; (e.currentTarget as HTMLDivElement).style.background = '#FFF5FB'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; }}
                >
                  <span className="text-lg flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-125">{f.emoji}</span>
                  <div>
                    <div className="font-heading font-bold text-sm mb-0.5" style={{ color: '#2A1A24' }}>{f.title}</div>
                    <div className="font-body text-xs leading-relaxed" style={{ color: '#6B4A58' }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="btn-pink">
                Book 1st Free Session <ArrowRight size={15} />
              </Link>
              <Link to="/services" className="btn-outline">
                Browse Services <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
