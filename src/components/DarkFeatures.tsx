import { Link } from 'react-router-dom';

const features = [
  { id: 1, icon: '📹', title: 'Live Video Sessions', desc: 'Train in real-time with your expert. See instant corrections and celebrate breakthroughs together.' },
  { id: 2, icon: '📚', title: 'Interactive Courses', desc: 'Structured programs with videos, quizzes, and step-by-step instructions for every skill level.' },
  { id: 3, icon: '📊', title: 'Progress Tracking', desc: 'Visualize your pet\'s journey with weekly reports, milestone badges, and trainer feedback.' },
];

export default function DarkFeatures() {
  return (
    <section id="features" className="py-24 xl:py-32 bg-[#041a1a] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full bg-teal-500/20 blur-[100px] animate-float-slow pointer-events-none" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] rounded-full bg-tangerine-400/15 blur-[100px] animate-float-slow pointer-events-none" style={{ animationDirection: 'reverse' }} />
      <div className="absolute top-[30%] left-[60%] w-[300px] h-[300px] rounded-full bg-pink-500/10 blur-[80px] animate-pulse-dot pointer-events-none" />

      <div className="container-site relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-2.5 h-2.5 rounded-full bg-tangerine-400 animate-pulse-dot" />
            <span className="font-heading font-bold text-xs tracking-[0.12em] uppercase text-tangerine-400">How It Works</span>
          </div>
          <h2 className="font-heading font-black leading-[1.1] tracking-[-0.02em] mb-4 text-white"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Start Your Pet&apos;s<br />
            <span className="gradient-text-warm">Training Journey</span>
          </h2>
          <p className="font-body text-lg text-white/60">
            Three powerful tools to transform your pet&apos;s behavior — online or in-person.
          </p>
        </div>

        {/* Dumbbell / Pill Cards */}
        <div className="flex flex-col gap-10 lg:gap-14 max-w-[900px] mx-auto mb-20">
          {features.map((f, i) => (
            <div
              key={f.id}
              className={`flex flex-col lg:flex-row items-center animate-fade-in-up group ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Left Blob / Icon */}
              <div 
                className={`w-[110px] h-[110px] lg:w-[130px] lg:h-[130px] flex-shrink-0 rounded-full flex items-center justify-center text-4xl z-20 shadow-2xl relative
                  ${i === 0 ? 'bg-gradient-to-br from-teal-400 to-teal-600 shadow-[0_0_40px_rgba(23,107,104,0.4)]' : 
                    i === 1 ? 'bg-gradient-to-br from-[#1a3030] to-[#243333] shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/5' : 
                    'bg-gradient-to-br from-pink-400 to-pink-600 shadow-[0_0_40px_rgba(232,192,216,0.3)] border border-pink-400/30'
                  }
                `}
              >
                <span className="group-hover:scale-110 transition-transform duration-300">{f.icon}</span>
              </div>

              {/* Connecting Bar (Hidden on Mobile) */}
              <div className="hidden lg:block w-[50px] xl:w-[70px] h-[20px] bg-white/5 relative z-10 overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/30 via-pink-400/30 to-tangerine-400/30" />
              </div>

              {/* Right Content */}
              <div 
                className={`flex-1 glass-dark rounded-3xl p-8 lg:p-10 transition-all duration-300 hover:bg-white/10 hover:border-white/20
                  mt-[-20px] lg:mt-0 
                  ${i % 2 === 0 ? 'lg:ml-[-40px] lg:pl-[60px]' : 'lg:mr-[-40px] lg:pr-[60px]'}
                `}
              >
                <h3 className="font-heading font-black text-2xl text-white mb-3 leading-tight">{f.title}</h3>
                <p className="font-body text-sm text-white/60 leading-relaxed mb-6">{f.desc}</p>
                <button className="font-heading font-bold text-sm text-tangerine-400 flex items-center gap-2 hover:tracking-wide transition-all duration-200">
                  Explore <span className="text-lg leading-none">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="max-w-[1000px] mx-auto bg-gradient-to-br from-teal-500/20 to-[#0d1a1a]/50 border border-teal-500/30 rounded-3xl p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-xl relative overflow-hidden">
          {/* Top glow line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tangerine-400/50 to-transparent" />
          
          <div className="text-center lg:text-left flex-1">
            <h3 className="font-heading font-black text-3xl md:text-4xl text-white mb-3">Ready to Start?</h3>
            <p className="font-body text-white/65">
              First session is completely free. No commitment required.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-tangerine-400 hover:bg-tangerine-500 text-white font-heading font-bold text-base px-8 py-4 rounded-full shadow-tangerine transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
            >
              Book Free Session
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white/90 hover:bg-white/10 font-heading font-bold text-base px-8 py-4 rounded-full transition-all duration-300 whitespace-nowrap"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
