import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

function PawSVG({ size = 28, opacity = 1 }: { size?: number; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="#C62E7B" style={{ opacity }}>
      <ellipse cx="50" cy="65" rx="22" ry="18" />
      <ellipse cx="24" cy="42" rx="10" ry="13" />
      <ellipse cx="44" cy="32" rx="10" ry="13" />
      <ellipse cx="64" cy="32" rx="10" ry="13" />
      <ellipse cx="76" cy="42" rx="10" ry="13" />
    </svg>
  );
}

export default function CTABanner() {
  useScrollReveal();

  return (
    <section className="py-12 lg:py-20 relative">
      <div className="container-site">
        <div
          className="relative overflow-hidden rounded-[40px] px-8 py-14 lg:px-20 lg:py-16 shadow-xl w-full"
          style={{ background: 'linear-gradient(135deg, #C62E7B 0%, #C62E7B 60%, #A61965 100%)' }}
        >
          {/* Inner floating elements */}
          <div className="absolute top-[10%] left-[5%] opacity-80 animate-float pointer-events-none text-[#FCC244]">
            <svg width="60" height="60" viewBox="0 0 100 100" fill="currentColor" transform="rotate(-20)"><path d="M50 45 C 30 45, 15 65, 20 85 C 25 105, 75 105, 80 85 C 85 65, 70 45, 50 45 Z" /><circle cx="25" cy="35" r="12" /><circle cx="40" cy="15" r="12" /><circle cx="60" cy="15" r="12" /><circle cx="75" cy="35" r="12" /></svg>
          </div>
          <div className="absolute bottom-[10%] left-[35%] opacity-60 animate-float-slow pointer-events-none hidden lg:block" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <svg width="40" height="40" viewBox="0 0 100 100" fill="currentColor" transform="rotate(35)"><path d="M30 40 L70 40 L70 60 L30 60 Z" /><circle cx="30" cy="35" r="15" /><circle cx="30" cy="65" r="15" /><circle cx="70" cy="35" r="15" /><circle cx="70" cy="65" r="15" /></svg>
          </div>
          <div className="absolute top-[20%] right-[40%] opacity-50 animate-float pointer-events-none hidden lg:block" style={{ color: 'rgba(255,255,255,0.3)' }}>
            <svg width="50" height="50" viewBox="0 0 100 100" fill="currentColor" transform="rotate(15)"><path d="M50 45 C 30 45, 15 65, 20 85 C 25 105, 75 105, 80 85 C 85 65, 70 45, 50 45 Z" /><circle cx="25" cy="35" r="12" /><circle cx="40" cy="15" r="12" /><circle cx="60" cy="15" r="12" /><circle cx="75" cy="35" r="12" /></svg>
          </div>

          {/* Paw print background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[20%] left-[5%]"><PawSVG size={40} opacity={0.3} /></div>
            <div className="absolute top-[60%] left-[45%]"><PawSVG size={60} opacity={0.2} /></div>
            <div className="absolute top-[10%] left-[30%]"><PawSVG size={30} opacity={0.2} /></div>
            <div className="absolute bottom-[15%] left-[20%]"><PawSVG size={45} opacity={0.25} /></div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10 w-full">

            <div className="flex-1 text-left reveal-left max-w-2xl">
              <h3 className="font-heading font-black text-white text-3xl lg:text-4xl mb-2">
                Ready to see the change?
              </h3>
              <h2 className="font-heading font-black leading-tight mb-5" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#FCC244' }}>
                Book a Free Demo Today!
              </h2>
              <p className="font-body text-lg text-white/90 mb-10 max-w-md leading-relaxed">
                Let's create a happier tomorrow for your pet — no force, no fear, just results.
              </p>

              <div className="flex flex-wrap items-center gap-5">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 font-heading font-bold text-base px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{ background: '#FCC244', color: '#C62E7B' }}
                >
                  <svg width="24" height="24" viewBox="0 0 100 100" fill="currentColor">
                    <ellipse cx="50" cy="65" rx="22" ry="18" />
                    <ellipse cx="24" cy="42" rx="10" ry="13" />
                    <ellipse cx="44" cy="32" rx="10" ry="13" />
                    <ellipse cx="64" cy="32" rx="10" ry="13" />
                    <ellipse cx="76" cy="42" rx="10" ry="13" />
                  </svg>
                  Book Free Demo
                </Link>
                <a
                  href="tel:+91-88799-52169"
                  className="inline-flex items-center gap-3 font-heading font-bold text-base px-8 py-4 rounded-xl border-2 transition-all duration-300 hover:bg-white/10"
                  style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}
                >
                  <Phone size={20} />
                  +91 88799 52169
                </a>
              </div>
            </div>

            <div className="w-full lg:w-[40%] relative reveal-right flex justify-end">
              <img
                src="cta.png"
                alt="Dog getting a treat"
                className="w-full h-[280px] lg:h-[360px] object-cover object-center rounded-[32px] lg:rounded-l-none lg:rounded-r-[32px] shadow-2xl"
                style={{ filter: 'brightness(1.05)' }}
              />
              <div className="absolute bottom-6 right-4 transform translate-x-4">
                <svg width="80" height="40" viewBox="0 0 100 50" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                  <path d="M10,40 Q30,30 40,20 Q45,10 50,15 Q55,10 60,20 Q70,30 90,40" />
                  <path d="M40,20 Q45,15 50,25 Q55,15 60,20 Q55,30 50,35 Q45,30 40,20" />
                </svg>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
