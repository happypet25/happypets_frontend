import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

const reasons = [
  {
    icon: '🛡️',
    bg: '#FDEEF6', border: '#F9C8E6', titleColor: '#C62E7B', descColor: '#5B6B78',
    label: 'Builds Trust',
    desc: 'Positive reinforcement creates lasting confidence in your pet.',
  },
  {
    icon: '❤️',
    bg: '#FFF8EB', border: '#FCD585', titleColor: '#D97706', descColor: '#5B6B78',
    label: 'Emotional Bond',
    desc: 'Training that deepens the relationship between pet and owner.',
  },
  {
    icon: '🐕 🐈',
    bg: '#FDEEF6', border: '#F9C8E6', titleColor: '#C62E7B', descColor: '#5B6B78',
    label: 'Reduces Anxiety',
    desc: 'Calm, patient methods that help even the most anxious pets flourish.',
  },
  {
    icon: '👨‍👩‍👧',
    bg: '#FFF8EB', border: '#FCD585', titleColor: '#D97706', descColor: '#5B6B78',
    label: 'Family Friendly',
    desc: 'Every session is designed so the whole family can participate.',
  },
  {
    icon: '🐾',
    bg: '#FDEEF6', border: '#F9C8E6', titleColor: '#C62E7B', descColor: '#5B6B78',
    label: 'Lasting Results',
    desc: 'Techniques that stick — because you understand the why, not just the how.',
  },
];



export default function WhyChooseUs() {
  useScrollReveal();

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-transparent relative overflow-hidden z-10">
      {/* Background decorations */}
      <div className="absolute top-[10%] left-[8%] opacity-10 animate-float pointer-events-none hidden lg:block text-[#C62E7B]">
        <svg width="60" height="60" viewBox="0 0 100 100" fill="currentColor" transform="rotate(-15)"><path d="M50 45 C 30 45, 15 65, 20 85 C 25 105, 75 105, 80 85 C 85 65, 70 45, 50 45 Z" /><circle cx="25" cy="35" r="12" /><circle cx="40" cy="15" r="12" /><circle cx="60" cy="15" r="12" /><circle cx="75" cy="35" r="12" /></svg>
      </div>
      <div className="absolute bottom-[20%] right-[8%] opacity-10 animate-float-slow pointer-events-none hidden lg:block text-[#FCC244]">
        <svg width="50" height="50" viewBox="0 0 100 100" fill="currentColor" transform="rotate(35)"><path d="M30 40 L70 40 L70 60 L30 60 Z"/><circle cx="30" cy="35" r="15"/><circle cx="30" cy="65" r="15"/><circle cx="70" cy="35" r="15"/><circle cx="70" cy="65" r="15"/></svg>
      </div>
      
      {/* Big Bone Left (partially hidden) */}
      <div className="absolute top-[20%] -left-[10%] opacity-[0.05] animate-float pointer-events-none hidden lg:block text-[#C62E7B]" style={{ animationDuration: '8s' }}>
        <svg width="300" height="300" viewBox="0 0 100 40" fill="currentColor" transform="rotate(30)">
          <rect x="28" y="14" width="44" height="12" rx="4" />
          <circle cx="22" cy="12" r="9" />
          <circle cx="22" cy="28" r="9" />
          <circle cx="78" cy="12" r="9" />
          <circle cx="78" cy="28" r="9" />
        </svg>
      </div>
      
      {/* Big Bone Right (partially hidden) */}
      <div className="absolute top-[60%] -right-[10%] opacity-[0.05] animate-float-slow pointer-events-none hidden lg:block text-[#FCC244]" style={{ animationDuration: '10s' }}>
        <svg width="350" height="350" viewBox="0 0 100 40" fill="currentColor" transform="rotate(-40)">
          <rect x="28" y="14" width="44" height="12" rx="4" />
          <circle cx="22" cy="12" r="9" />
          <circle cx="22" cy="28" r="9" />
          <circle cx="78" cy="12" r="9" />
          <circle cx="78" cy="28" r="9" />
        </svg>
      </div>

      <div className="container-site relative z-10">
        <div className="text-center mb-12 reveal">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div style={{ height: 2, width: 30, background: '#C62E7B', borderRadius: 2 }} />
            <h2 className="font-heading font-black" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#C62E7B' }}>
              Why Choose Us
            </h2>
            <div style={{ height: 2, width: 30, background: '#C62E7B', borderRadius: 2 }} />
          </div>
          <p className="font-body text-sm" style={{ color: '#6B4A58' }}>
            15 years of experience. Hundreds of happy pets. One simple promise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal-left relative flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="relative w-full mt-2 lg:mt-6 flex flex-col items-center lg:items-start">
              <img src="/whychooseus.png" alt="Dog standing on text" className="w-[180px] sm:w-[200px] lg:w-[280px] h-auto object-contain transform translate-y-3 lg:translate-y-5 relative z-10 pointer-events-none" />
              <h3 className="font-heading font-black leading-none mb-6 relative z-0 w-full" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: '#2A1A24' }}>
                Caring For Your Pets<br />
                <span style={{ color: '#C62E7B' }}>Like Our Own</span>
              </h3>
            </div>
            <p className="font-body text-base lg:text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0" style={{ color: '#6B4A58' }}>
              Our certified trainers use positive reinforcement to build trust, understanding, and a lifelong bond between you and your pet. No force. No fear. Just results that last.
            </p>

            <div className="flex items-center gap-6 md:gap-12 pt-8 border-t max-w-lg" style={{ borderColor: '#F3D5E8' }}>
              <div className="text-center">
                <div className="font-heading font-black text-3xl mb-1" style={{ color: '#C62E7B' }}>500+</div>
                <div className="font-body text-[10px] font-bold tracking-widest uppercase" style={{ color: '#6B4A58' }}>Pets Trained</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-black text-3xl mb-1" style={{ color: '#C62E7B' }}>15+</div>
                <div className="font-body text-[10px] font-bold tracking-widest uppercase" style={{ color: '#6B4A58' }}>Years Exp.</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-black text-3xl mb-1" style={{ color: '#C62E7B' }}>99%</div>
                <div className="font-body text-[10px] font-bold tracking-widest uppercase" style={{ color: '#6B4A58' }}>Success Rate</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-black text-3xl mb-1" style={{ color: '#FCC244' }}>3</div>
                <div className="font-body text-[10px] font-bold tracking-widest uppercase" style={{ color: '#6B4A58' }}>Locations</div>
              </div>
            </div>

            <Link to="/contact" className="btn-pink mt-10 inline-block text-base px-8 py-4">
              Book a Free Demo Session
            </Link>
          </div>

          <div className="reveal-right mt-16 lg:mt-0 relative max-w-2xl mx-auto lg:ml-auto lg:mr-0 animate-sign-swing origin-top">
            {/* Sign board */}
            <div className="relative p-6 sm:p-8 rounded-[32px] shadow-2xl" style={{ background: '#C62E7B', border: '10px solid #C62E7B' }}>
              {/* Pattern overlay */}
              <div className="absolute inset-0 rounded-[24px] opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)' }} />

              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-5 h-5 rounded-full bg-[#C62E7B] opacity-90 shadow-inner flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-[#6B0C42]" /></div>
              <div className="absolute top-4 right-4 w-5 h-5 rounded-full bg-[#C62E7B] opacity-90 shadow-inner flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-[#6B0C42]" /></div>
              <div className="absolute bottom-4 left-4 w-5 h-5 rounded-full bg-[#C62E7B] opacity-90 shadow-inner flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-[#6B0C42]" /></div>
              <div className="absolute bottom-4 right-4 w-5 h-5 rounded-full bg-[#C62E7B] opacity-90 shadow-inner flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-[#6B0C42]" /></div>

              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {reasons.map((r, i) => (
                  <div
                    key={r.label}
                    className="rounded-2xl p-5 flex items-center gap-4 border-b-4 shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    style={{ background: r.bg, borderColor: r.border, transitionDelay: `${i * 0.1}s` }}
                  >
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 text-3xl shadow-inner bg-white/70" style={{ border: `2px solid ${r.border}` }}>
                      {r.icon}
                    </div>
                    <div>
                      <div className="font-heading font-black text-lg tracking-wide mb-0.5" style={{ color: r.titleColor }}>{r.label}</div>
                      <div className="font-body text-xs leading-tight pr-1" style={{ color: r.descColor }}>{r.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hanging chains */}
            <div className="absolute -top-14 left-10 -z-10 text-[#FCC244] transform -rotate-12">
               <svg width="30" height="60" viewBox="0 0 40 100" fill="currentColor">
                  <path d="M15 20 L25 20 L25 80 L15 80 Z"/><circle cx="12" cy="15" r="10"/><circle cx="28" cy="15" r="10"/><circle cx="12" cy="85" r="10"/><circle cx="28" cy="85" r="10"/>
               </svg>
            </div>
            <div className="absolute -top-14 right-10 -z-10 text-[#FCC244] transform rotate-12">
               <svg width="30" height="60" viewBox="0 0 40 100" fill="currentColor">
                  <path d="M15 20 L25 20 L25 80 L15 80 Z"/><circle cx="12" cy="15" r="10"/><circle cx="28" cy="15" r="10"/><circle cx="12" cy="85" r="10"/><circle cx="28" cy="85" r="10"/>
               </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
