import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function BentoSection() {
  useScrollReveal();

  return (
    <section id="approach" className="py-16 lg:py-24" style={{ background: 'linear-gradient(180deg, #fff 0%, #FFF0F6 100%)' }}>
      <div className="container-site">
        <div className="text-center mb-12 reveal">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div style={{ height: 1, width: 40, background: '#e5e7eb' }} />
            <h2 className="font-heading font-black" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#1A2424' }}>
              Our Approach
            </h2>
            <div style={{ height: 1, width: 40, background: '#e5e7eb' }} />
          </div>
          <h3 className="font-heading font-black" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: '#1A2424' }}>
            Train Your Pet <span style={{ color: '#2E3E8E' }}>In Your Own Home</span>
          </h3>
          <p className="font-body text-sm mt-2 max-w-lg mx-auto" style={{ color: '#6B8080' }}>
            Our expert trainers come directly to you, providing personalized one-on-one sessions in your pet's natural environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          <div
            className="md:col-span-5 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[300px] group cursor-default reveal-left"
            style={{ background: 'linear-gradient(135deg, #2E3E8E 0%, #3347B8 100%)' }}
          >
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
              {[20, 45, 70, 30, 60].map((top, i) => (
                <div key={i} className="absolute" style={{ top: `${top}%`, left: `${(i * 20) + 5}%`, opacity: 0.07 }}>
                  <svg width="24" height="24" viewBox="0 0 100 100" fill="white">
                    <ellipse cx="50" cy="65" rx="22" ry="18" />
                    <ellipse cx="24" cy="42" rx="10" ry="13" />
                    <ellipse cx="44" cy="32" rx="10" ry="13" />
                    <ellipse cx="64" cy="32" rx="10" ry="13" />
                    <ellipse cx="76" cy="42" rx="10" ry="13" />
                  </svg>
                </div>
              ))}
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <span className="w-2 h-2 rounded-full bg-pink-300 animate-pulse" />
                  <span className="font-heading font-bold text-[10px] uppercase tracking-widest text-white/90">Live</span>
                </div>
                <div className="px-3 py-1.5 rounded-full font-heading font-bold text-[10px] tracking-wide uppercase text-blue-700 bg-white">
                  At Home
                </div>
              </div>
              <h3 className="font-heading font-black text-3xl text-white leading-tight mb-3">
                In-Home<br />Sessions
              </h3>
              <p className="font-body text-sm text-white/90 leading-relaxed max-w-[220px]">
                Real-time guidance from certified experts right in your living room or local park.
              </p>
            </div>
            <div className="absolute -right-12 -bottom-12 w-44 h-44 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(244,167,193,0.2)' }} />
          </div>

          <div className="md:col-span-4 bg-white rounded-3xl p-6 flex flex-col gap-4 group cursor-default reveal" style={{ border: '1.5px solid #FFE1EB', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}>
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full font-heading font-semibold text-[10px] uppercase tracking-wide" style={{ background: '#FFF0F6', color: '#F4A7C1' }}>
                Custom Plans
              </span>
            </div>
            <div>
              <h3 className="font-heading font-black text-xl mb-1" style={{ color: '#1A2424' }}>Tailored Paths</h3>
              <p className="font-body text-xs" style={{ color: '#6B8080' }}>Step-by-step personalized programs.</p>
            </div>
            <div className="flex flex-col gap-3 pt-3 mt-auto" style={{ borderTop: '1px solid #FFE1EB' }}>
              {[
                { name: 'Puppy Basics', pct: 100, color: '#F4A7C1' },
                { name: 'Obedience Pro', pct: 65, color: '#2E3E8E' },
                { name: 'Agility Master', pct: 30, color: '#F9B3CE' },
              ].map((c) => (
                <div key={c.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-heading font-semibold text-xs" style={{ color: '#1A2424' }}>{c.name}</span>
                    <span className="font-body text-xs font-semibold" style={{ color: c.color }}>{c.pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full w-full" style={{ background: '#FFF0F6' }}>
                    <div className="h-full rounded-full" style={{ width: `${c.pct}%`, background: c.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 rounded-3xl p-6 flex flex-col gap-3 group cursor-default reveal-right" style={{ background: 'linear-gradient(135deg, #1A2424 0%, #2a3636 100%)', border: '1.5px solid rgba(255,255,255,0.05)' }}>
            <span className="inline-flex items-center px-3 py-1 rounded-full font-heading font-semibold text-[10px] uppercase tracking-wide text-white/60" style={{ background: 'rgba(255,255,255,0.07)', width: 'fit-content' }}>
              Analytics
            </span>
            <h3 className="font-heading font-black text-xl text-white">Track Results</h3>
            <p className="font-body text-xs text-white/80">Monitor behavioral milestones.</p>
            <div className="flex items-end justify-between gap-1.5 mt-auto" style={{ height: 72 }}>
              {[40, 60, 45, 80, 70, 95, 88].map((h, i) => (
                <div key={i} className="flex-1 flex items-end h-full group/bar">
                  <div
                    className="w-full rounded-t-sm transition-all duration-300 group-hover/bar:opacity-80"
                    style={{ height: `${h}%`, background: i % 2 === 0 ? '#F4A7C1' : '#DCE6FF', opacity: 0.7 }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-8 bg-white rounded-3xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-8 reveal" style={{ border: '1.5px solid #FFE1EB', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}>
            <div className="flex flex-col gap-2 flex-1">
              <h3 className="font-heading font-black text-xl" style={{ color: '#1A2424' }}>Flexible Schedule</h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: '#6B8080' }}>
                Mornings, evenings, or weekends — we adapt to you.
              </p>
              <Link to="/contact" className="font-heading font-bold text-sm flex items-center gap-1 transition-colors duration-200 w-fit mt-1 hover:gap-2" style={{ color: '#F4A7C1' }}>
                View Calendar <ArrowRight size={13} />
              </Link>
            </div>
            <div className="flex gap-2 overflow-x-auto hide-scrollbar">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => {
                const isActive = i === 2 || i === 4;
                const isBooked = i === 0;
                return (
                  <div
                    key={day}
                    className="flex flex-col items-center justify-center gap-1.5 rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1 flex-shrink-0"
                    style={{
                      minWidth: 50, padding: '10px 8px',
                      background: isActive ? '#2E3E8E' : isBooked ? '#F4A7C1' : '#FFF0F6',
                      color: isActive || isBooked ? '#fff' : '#6B8080',
                    }}
                  >
                    <span className="font-heading font-bold text-[10px] uppercase tracking-wider">{day}</span>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: isActive || isBooked ? 'rgba(255,255,255,0.6)' : '#F4A7C1' }} />
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className="md:col-span-4 rounded-3xl p-6 flex flex-col gap-4 group cursor-default reveal-right"
            style={{ background: 'linear-gradient(135deg, #FFF0F6 0%, #FFE1EB 100%)', border: '1.5px solid #FFE1EB' }}
          >
            <div className="w-13 h-13 rounded-2xl bg-white flex items-center justify-center text-2xl shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3" style={{ width: 52, height: 52 }}>
              👨‍🏫
            </div>
            <div>
              <h3 className="font-heading font-black text-xl mb-1" style={{ color: '#1A2424' }}>Elite Trainers</h3>
              <p className="font-body text-xs leading-relaxed" style={{ color: '#6B8080' }}>
                Certified, vetted, and highly experienced behavioral experts.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {['Certified', '10+ Years', 'Vetted'].map((tag) => (
                <span
                  key={tag}
                  className="font-heading font-bold text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full bg-white"
                  style={{ border: '1px solid #FFE1EB', color: '#6B8080' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
