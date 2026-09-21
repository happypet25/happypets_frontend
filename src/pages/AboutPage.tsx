import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';
import useScrollReveal from '../hooks/useScrollReveal';
import FAQ from '../components/FAQ';

const values = [
  { emoji: '❤️', bg: '#FDEEF6', border: '#F9C8E6', title: 'Love & Compassion', desc: 'Every pet is treated like our own family member with patience and unconditional love.' },
  { emoji: '🛡️', bg: '#FFF8EB', border: '#FCD585', title: 'Safety First', desc: 'All training environments and methods are vetted for maximum pet safety.' },
  { emoji: '🏆', bg: '#FDEEF6', border: '#F9C8E6', title: 'Excellence', desc: 'Our certified trainers hold the highest qualifications and continuously update skills.' },
  { emoji: '👨‍👩‍👧', bg: '#FFF8EB', border: '#FCD585', title: 'Community', desc: 'We build lasting relationships with pet parents across Mumbai and beyond.' },
];

export default function AboutPage() {
  useScrollReveal();

  return (
    <div style={{ background: '#FDF9F6' }}>

      {/* ── Hero / Brand Story ── */}
      <section className="py-16 lg:py-28 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FDEEF6 0%, #FDF9F6 50%, #FFF8EB 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.15 }}>
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="40" height="40" viewBox="0 0 100 100" fill="#C62E7B"
              style={{ position: 'absolute', top: `${10 + i * 20}%`, left: `${3 + i * 20}%` }}>
              <path d="M50 45 C 30 45, 15 65, 20 85 C 25 105, 75 105, 80 85 C 85 65, 70 45, 50 45 Z" />
              <circle cx="25" cy="35" r="12" /><circle cx="40" cy="15" r="12" /><circle cx="60" cy="15" r="12" /><circle cx="75" cy="35" r="12" />
            </svg>
          ))}
        </div>
        <div className="container-site relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal-left">
              <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full" style={{ background: '#FCC244', border: '1px solid #E5A922' }}>
                <span className="text-sm">🐾</span>
                <span className="font-body text-xs font-semibold uppercase tracking-widest" style={{ color: '#2A1A24' }}>Our Story</span>
              </div>
              <h1 className="font-heading font-black leading-tight mb-5" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#C62E7B' }}>
                Every Dog Has a Story.<br />
                <span style={{ color: '#FCC244' }}>We Help Write a Happier One.</span>
              </h1>
              <p className="font-body text-base leading-relaxed mb-4 max-w-lg" style={{ color: '#6B4A58' }}>
                It usually starts the same way. A dog who won't stop jumping on guests. A rescue who flinches at raised hands. A puppy who's already learned that the world is something to bark at, not trust. And an owner who loves them completely — and doesn't know what to do next.
              </p>
              <p className="font-body text-base leading-relaxed mb-4 max-w-lg" style={{ color: '#6B4A58' }}>
                That's where Happy Pet Training begins. For over <strong style={{ color: '#C62E7B' }}>15 years of combined experience</strong>, our trainers have worked with the dogs other people gave up on — described as "too much," "too anxious," or "too far gone." We don't believe in that.
              </p>
              <p className="font-body text-base leading-relaxed mb-8 max-w-lg" style={{ color: '#6B4A58' }}>
                We believe every dog is capable of calm, of trust, of connection — it just takes the right method, and the right patience, to get there. <strong style={{ color: '#C62E7B' }}>No fear. No force. No shortcuts.</strong>
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/team" className="btn-pink">Meet Our Team</Link>
                <Link to="/contact" className="btn-outline">Book Free Demo</Link>
              </div>
            </div>
            <div className="relative reveal-right">
              <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl pointer-events-none" style={{ background: 'linear-gradient(135deg, #FDEEF6, #FFF8EB)', opacity: 0.6, borderRadius: '1.5rem' }} />
              <img
                src="https://images.unsplash.com/photo-1593134257782-e89567b7718a?w=800&q=85&auto=format&fit=crop"
                alt="Happy dog with trainer"
                className="relative z-10 w-full object-cover shadow-2xl"
                style={{ height: 440, borderRadius: '1.5rem' }}
              />
              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex gap-3">
                {[
                  { val: '500+', label: 'Pets Trained' },
                  { val: '15+', label: 'Years Exp.' },
                  { val: '99%', label: 'Success Rate' },
                ].map(s => (
                  <div key={s.label} className="flex-1 text-center rounded-2xl py-3 px-2" style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(10px)' }}>
                    <div className="font-heading font-black text-xl" style={{ color: '#C62E7B' }}>{s.val}</div>
                    <div className="font-body text-[10px] font-bold uppercase tracking-widest" style={{ color: '#6B4A58' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Full Brand Story ── */}
      <section className="py-16 lg:py-20" style={{ background: '#fff' }}>
        <div className="container-site" style={{ maxWidth: 900 }}>
          <div className="text-center mb-12 reveal">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div style={{ height: 2, width: 30, background: '#C62E7B', borderRadius: 2 }} />
              <h2 className="font-heading font-black" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#C62E7B' }}>The Happy Pet Training Story</h2>
              <div style={{ height: 2, width: 30, background: '#C62E7B', borderRadius: 2 }} />
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 reveal">
            {/* Story text */}
            <div className="lg:col-span-3 space-y-5">
              <p className="font-body text-base leading-loose" style={{ color: '#6B4A58' }}>
                That method is <strong style={{ color: '#C62E7B' }}>positive reinforcement</strong>. No fear. No force. No shortcuts that leave a dog obedient but afraid. Just consistency, clarity, and a relationship built on trust between dog and trainer — and, just as importantly, between dog and owner.
              </p>
              <p className="font-body text-base leading-loose" style={{ color: '#6B4A58' }}>
                We've walked thousands of dogs across <strong style={{ color: '#C62E7B' }}>Mumbai, Thane, and Navi Mumbai</strong>. We've sat on living room floors with families who'd nearly given up. We've watched dogs who used to jump on every visitor learn to sit calmly at the door instead — not because they were forced to, but because they finally <em>understood</em> what was being asked of them.
              </p>
              <p className="font-body text-base leading-loose" style={{ color: '#6B4A58' }}>
                That's the transformation we're in the business of. Not obedience for its own sake — a genuinely happier home, for the dog and the people who love them.
              </p>
              <div className="pt-4">
                <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl" style={{ background: '#FDEEF6', border: '2px solid #F3D5E8' }}>
                  <span className="text-2xl">🐾</span>
                  <div>
                    <div className="font-heading font-black text-sm" style={{ color: '#C62E7B' }}>Happy Pet Training</div>
                    <div className="font-body text-xs" style={{ color: '#6B4A58' }}>Calmer dogs. Happier homes.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlight blocks */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {[
                { icon: '🚫', title: 'No Force, Ever', desc: 'We never use punishment, intimidation, or fear. Period.' },
                { icon: '🏠', title: 'In Your Home', desc: 'Training in the environment your dog actually lives in.' },
                { icon: '🤝', title: 'Owner Included', desc: 'We teach you — not just your dog. You\'re part of the team.' },
                { icon: '📍', title: 'Mumbai-Wide', desc: 'Covering Mumbai, Thane & Navi Mumbai.' },
              ].map(b => (
                <div key={b.title} className="flex items-start gap-4 p-4 rounded-2xl" style={{ background: '#FFF5FB', border: '1.5px solid #F3D5E8' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg" style={{ background: '#FDEEF6' }}>{b.icon}</div>
                  <div>
                    <div className="font-heading font-bold text-sm mb-0.5" style={{ color: '#C62E7B' }}>{b.title}</div>
                    <div className="font-body text-xs leading-relaxed" style={{ color: '#6B4A58' }}>{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Founder's Letter ── */}
      <section className="py-16 lg:py-24" style={{ background: '#FFF5FB' }}>
        <div className="container-site" style={{ maxWidth: 860 }}>
          <div className="text-center mb-10 reveal">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div style={{ height: 2, width: 30, background: '#C62E7B', borderRadius: 2 }} />
              <h2 className="font-heading font-black" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#C62E7B' }}>A Letter from Our Founder</h2>
              <div style={{ height: 2, width: 30, background: '#C62E7B', borderRadius: 2 }} />
            </div>
          </div>

          <div
            className="rounded-[32px] p-8 lg:p-14 relative overflow-hidden reveal"
            style={{ background: '#fff', border: '1.5px solid #F3D5E8', boxShadow: '0 16px 60px rgba(198,46,123,0.08)' }}
          >
            {/* Decorative quote mark */}
            <div className="absolute top-6 right-8 font-heading font-black opacity-5 select-none pointer-events-none" style={{ fontSize: '12rem', lineHeight: 1, color: '#C62E7B' }}>"</div>

            {/* Letter content */}
            <div className="relative z-10 space-y-5">
              <p className="font-body text-[15px] lg:text-base leading-loose" style={{ color: '#6B4A58' }}>
                <span className="font-heading font-black text-base" style={{ color: '#C62E7B' }}>Dear pet parent,</span>
              </p>
              <p className="font-body text-[15px] lg:text-base leading-loose" style={{ color: '#6B4A58' }}>
                If you're reading this, chances are your dog is doing something that worries you, embarrasses you, or breaks your heart a little — the jumping, the barking at every sound, the way they cower when a stranger reaches out to say hello. Maybe you've already tried a few things. Maybe you're not sure training can actually help. I understand that hesitation, because I've sat across from hundreds of families who felt exactly the same way before we started.
              </p>
              <p className="font-body text-[15px] lg:text-base leading-loose" style={{ color: '#6B4A58' }}>
                I started Happy Pet Training because I kept meeting dogs who weren't "bad" — they were <strong style={{ color: '#C62E7B' }}>misunderstood</strong>. And I kept meeting owners who weren't failing — they just hadn't been given the right tools yet. Somewhere along the way, "dog training" got a reputation for being harsh, or for being something you only do if your dog is a "problem." I wanted to build something different: a team of certified trainers who lead with patience and positive reinforcement, and who treat every dog — and every owner — like family, not a case number.
              </p>
              <p className="font-body text-[15px] lg:text-base leading-loose" style={{ color: '#6B4A58' }}>
                Twenty-seven years in, that hasn't changed. What has changed is how many families we've been able to help — dogs who used to lunge at other dogs on walks, now walking calmly beside their owners. Dogs who used to hide from visitors, now leaning in for a pat. It never gets old.
              </p>
              <p className="font-body text-[15px] lg:text-base leading-loose" style={{ color: '#6B4A58' }}>
                If you're on the fence about reaching out, here's what I'd say: you don't need to have the "perfect" dog to start, and you don't need to have already tried everything. You just need to be willing to show up for your dog the way we'll show up for both of you.
              </p>
              <p className="font-body text-[15px] lg:text-base leading-loose font-semibold" style={{ color: '#6B4A58' }}>
                We'd love to meet you both.
              </p>
            </div>

            {/* Signature */}
            <div className="relative z-10 flex items-center gap-5 mt-8 pt-8" style={{ borderTop: '1px solid #F3D5E8' }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl flex-shrink-0" style={{ background: '#FDEEF6', border: '2px solid #F3D5E8' }}>
                🐾
              </div>
              <div>
                <div className="font-heading font-black text-lg" style={{ color: '#C62E7B' }}>Harshad</div>
                <div className="font-body text-sm" style={{ color: '#6B4A58' }}>Founder, Happy Pet Training</div>
                <div className="font-body text-xs mt-0.5" style={{ color: '#C62E7B' }}>Mumbai · Thane · Navi Mumbai</div>
              </div>
              <div className="ml-auto hidden sm:block">
                <div className="px-5 py-2 rounded-full font-heading font-bold text-sm" style={{ background: '#C62E7B', color: '#fff' }}>
                  15+ Years ✓
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Stand For ── */}
      <section className="py-16 lg:py-20" style={{ background: '#fff' }}>
        <div className="container-site">
          <div className="text-center mb-12 reveal">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div style={{ height: 2, width: 30, background: '#C62E7B', borderRadius: 2 }} />
              <h2 className="font-heading font-black" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#C62E7B' }}>What We Stand For</h2>
              <div style={{ height: 2, width: 30, background: '#C62E7B', borderRadius: 2 }} />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="p-6 rounded-2xl text-center group cursor-default transition-all duration-300 reveal"
                style={{ border: `1.5px solid ${v.border}`, transitionDelay: `${i * 0.08}s`, background: '#fff' }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = v.bg; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(198,46,123,0.12)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = '#fff'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" style={{ background: v.bg }}>
                  {v.emoji}
                </div>
                <h3 className="font-heading font-bold text-sm mb-2" style={{ color: '#C62E7B' }}>{v.title}</h3>
                <p className="font-body text-xs leading-relaxed" style={{ color: '#6B4A58' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />
      <CTABanner />
    </div>
  );
}
