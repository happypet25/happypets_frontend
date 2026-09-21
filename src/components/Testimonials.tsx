import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const testimonials = [
  {
    text: 'My dog used to be very hyperactive and never listened to me. But after taking training sessions with Happy Pet Training, he has become much calmer and no longer jumps on people. He has become very well-behaved and smart — all thanks to their trainer, Mr. Harshad, from Happy Pet Training.\n\nI highly recommend Happy Pet Training to anyone who has a pet dog and is looking for effective training.\n\nThank you, Happy Pet Training, for the wonderful experience!',
    name: 'Nilesh Bais',
    title: 'Hyperactive Dog Transformed',
    avatar: null,
    breed: 'Beagle',
    stars: 5,
  },
  {
    text: "Duke was hyperactive and didn't listen to us. With Happy Pet Training, he is now calm, obedient and part of our family in the best way! The trainers genuinely care about every single pet like their own.",
    name: 'Pooja & Duke',
    title: 'Obedience Training Success',
    avatar: null,
    breed: 'Labrador',
    stars: 5,
  },
  {
    text: 'Max transformed from a hyperactive puppy to the most well-behaved dog in the park. The trainers are incredibly patient and use such positive methods! Absolutely recommend Happy Pet Training to every dog parent.',
    name: 'Priya & Max',
    title: 'Puppy Training Journey',
    avatar: null,
    breed: 'Golden Retriever',
    stars: 5,
  },
  {
    text: 'The grooming service is top-notch! Luna always comes back looking beautiful and smelling fresh. The team genuinely cares about every single pet. Best pet care service in Mumbai!',
    name: 'Rahul & Luna',
    title: 'Grooming Excellence',
    avatar: null,
    breed: 'Shih Tzu',
    stars: 5,
  },
];

export default function Testimonials() {
  useScrollReveal();
  const [active, setActive] = useState(0);
  const t = testimonials[active];
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-transparent relative overflow-hidden z-10">
      <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ transform: 'translateY(-1px)' }}>
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block" preserveAspectRatio="none">
          <path d="M0,0 L1440,0 L1440,10 Q720,100 0,10 Z" fill="#FDF9F6" />
        </svg>
      </div>

      {/* Floating paw decorations */}
      <div className="absolute top-[15%] left-[3%] opacity-25 animate-float pointer-events-none hidden lg:block text-[#FCC244]">
        <svg width="80" height="80" viewBox="0 0 100 100" fill="currentColor" transform="rotate(-20)">
          <path d="M50 45 C 30 45, 15 65, 20 85 C 25 105, 75 105, 80 85 C 85 65, 70 45, 50 45 Z" />
          <circle cx="25" cy="35" r="12" /><circle cx="40" cy="15" r="12" /><circle cx="60" cy="15" r="12" /><circle cx="75" cy="35" r="12" />
        </svg>
      </div>
      <div className="absolute top-[40%] left-[1%] opacity-15 animate-float-slow pointer-events-none hidden lg:block text-[#C62E7B]">
        <svg width="50" height="50" viewBox="0 0 100 100" fill="currentColor" transform="rotate(15)">
          <path d="M50 45 C 30 45, 15 65, 20 85 C 25 105, 75 105, 80 85 C 85 65, 70 45, 50 45 Z" />
          <circle cx="25" cy="35" r="12" /><circle cx="40" cy="15" r="12" /><circle cx="60" cy="15" r="12" /><circle cx="75" cy="35" r="12" />
        </svg>
      </div>

      {/* Right side floating bone + paw decorations */}
      <div className="absolute top-[20%] right-[2%] opacity-20 animate-float-slow pointer-events-none hidden lg:block text-[#FCC244]" style={{ transform: 'rotate(35deg)' }}>
        <svg width="60" height="24" viewBox="0 0 100 40" fill="currentColor">
          <rect x="28" y="14" width="44" height="12" rx="4" />
          <circle cx="22" cy="12" r="9" /><circle cx="22" cy="28" r="9" />
          <circle cx="78" cy="12" r="9" /><circle cx="78" cy="28" r="9" />
        </svg>
      </div>
      <div className="absolute bottom-[25%] right-[4%] opacity-20 animate-float pointer-events-none hidden lg:block text-[#C62E7B]">
        <svg width="55" height="55" viewBox="0 0 100 100" fill="currentColor" transform="rotate(15)">
          <path d="M50 45 C 30 45, 15 65, 20 85 C 25 105, 75 105, 80 85 C 85 65, 70 45, 50 45 Z" />
          <circle cx="25" cy="35" r="12" /><circle cx="40" cy="15" r="12" /><circle cx="60" cy="15" r="12" /><circle cx="75" cy="35" r="12" />
        </svg>
      </div>

      <div className="container-site relative z-10 pt-10">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16 items-center">

          <div className="reveal-left">
            <div className="w-10 h-1 rounded-full mb-5" style={{ background: '#C62E7B' }} />
            <h2 className="font-heading font-black leading-tight mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              <span style={{ color: '#C62E7B' }}>Real Stories.</span>
              <br />
              <span style={{ color: '#2A1A24' }}>Real Transformations.</span>
            </h2>
            <p className="font-body text-sm leading-relaxed mb-6 max-w-xs" style={{ color: '#5B6B78' }}>
              See what pet parents across Mumbai are saying about our trainers and services.
            </p>

            {/* Mini stat pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['1000+ Pets Trained', '5★ Avg Rating', '15+ Years Trust'].map(s => (
                <span key={s} className="font-body text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{ background: '#FDEEF6', color: '#C62E7B', border: '1px solid #F3D5E8' }}>{s}</span>
              ))}
            </div>

            <Link to="/gallery" className="btn-pink inline-flex gap-2">
              View More Stories ✨
            </Link>
          </div>

          <div className="reveal-right">
            <div
              className="bg-white rounded-3xl overflow-hidden shadow-lg"
              style={{ border: '1.5px solid #FDEEEE' }}
            >
              {/* Top colored header */}
              <div className="px-8 py-5 flex items-center gap-4" style={{ background: 'linear-gradient(135deg, #C62E7B 0%, #C62E7B 100%)' }}>
                {/* Avatar circle */}
                <div className="w-14 h-14 rounded-full flex items-center justify-center font-heading font-black text-xl text-white flex-shrink-0 shadow-lg"
                  style={{ background: 'rgba(255,255,255,0.2)', border: '2px solid rgba(255,255,255,0.3)' }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-heading font-black text-white text-base">{t.name}</div>
                  <div className="font-body text-white/70 text-xs">{t.title}</div>
                  <div className="flex gap-0.5 mt-0.5">
                    {Array.from({ length: t.stars }).map((_, i) => <Star key={i} size={10} fill="#FCC244" color="#FCC244" />)}
                  </div>
                </div>
                <div className="ml-auto flex-shrink-0">
                  <span className="font-body text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.2)', color: '#FCC244' }}>
                    🐾 {t.breed}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col gap-4">
                <div className="flex mb-1">
                  <svg viewBox="0 0 40 30" width="28" fill="#E6567D" opacity="0.5">
                    <path d="M0 30 L0 14 Q0 0 14 0 L14 6 Q7 6 7 14 L14 14 L14 30 Z" />
                    <path d="M22 30 L22 14 Q22 0 36 0 L36 6 Q29 6 29 14 L36 14 L36 30 Z" />
                  </svg>
                </div>

                <p
                  key={`text-${active}`}
                  className="font-body text-sm leading-relaxed animate-fade-in whitespace-pre-line"
                  style={{ color: '#5B6B78', fontStyle: 'italic' }}
                >
                  {t.text}
                </p>

                <div className="pt-4 flex items-center justify-between" style={{ borderTop: '1px solid #F3D5E8' }}>
                  <div className="font-heading font-bold text-sm" style={{ color: '#C62E7B' }}>
                    – {t.name}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={prev}
                      aria-label="Previous"
                      className="w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all duration-200 hover:scale-105"
                      style={{ borderColor: '#F3D5E8', color: '#5B6B78' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#E6567D'; (e.currentTarget as HTMLButtonElement).style.color = '#E6567D'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#F3D5E8'; (e.currentTarget as HTMLButtonElement).style.color = '#5B6B78'; }}
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={next}
                      aria-label="Next"
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-105"
                      style={{ background: '#C62E7B' }}
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="rounded-full transition-all duration-300"
                  style={{ width: active === i ? 24 : 8, height: 8, background: active === i ? '#E6567D' : '#F9C8E6' }}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
