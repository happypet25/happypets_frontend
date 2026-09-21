import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import { trainers, TrainerCard } from '../pages/TeamPage';

export default function TeamSection() {
  useScrollReveal();

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden z-10" style={{ background: '#FDF9F6' }}>
      <div className="container-site">
        <div className="text-center mb-10 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4" style={{ background: '#FCC244', border: '1px solid #E5A922' }}>
            <span className="font-body text-xs font-semibold uppercase tracking-widest" style={{ color: '#2A1A24' }}>Our Trainers</span>
          </div>
          <h2 className="font-heading font-black leading-tight mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
            <span style={{ color: '#2A1A24' }}>Meet Our</span> <span style={{ color: '#C62E7B' }}>Expert Team</span>
          </h2>
          <p className="font-body text-sm leading-relaxed max-w-xl mx-auto" style={{ color: '#5B6B78' }}>
            Our certified trainers bring years of experience and a deep love for animals to ensure your pet gets the best care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.slice(0, 4).map((trainer, i) => (
            <div key={trainer.id} className="reveal" style={{ '--delay': `${i * 0.1}s` } as React.CSSProperties}>
              <TrainerCard trainer={trainer} onClick={() => { window.location.href = '/team'; }} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10 reveal">
          <Link
            to="/team"
            className="inline-flex items-center gap-2 font-heading font-bold px-8 py-3.5 rounded-full transition-all hover:opacity-90 hover:gap-3"
            style={{ background: '#C62E7B', color: '#fff', fontSize: '15px' }}
          >
            View Full Team <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
