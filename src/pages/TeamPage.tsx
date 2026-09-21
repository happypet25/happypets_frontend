import { useState } from 'react';
import { Phone, Mail, X, Award, Clock, Star, MessageCircle } from 'lucide-react';
import CTABanner from '../components/CTABanner';
import useScrollReveal from '../hooks/useScrollReveal';

const PHONE = '+91 88799 52169';
const EMAIL = 'info@happypettraining.com';
const WHATSAPP = 'https://wa.me/918879952169';

export type Trainer = {
  id: string;
  name: string;
  role: string;
  img: string;
  bio: string;
  experience: string;
  yearsExp: string;
  specialties: string[];
  accentColor: string;
  bgGrad: string;
};

export const trainers: Trainer[] = [
  {
    id: 'yagnesh',
    name: 'Yagnesh Chokshi',
    role: 'Professional Dog Trainer',
    img: '/trainers/Yagnesh-Chokshi-Pet-Trainer.webp',
    bio: 'Yagnesh Chokshi is a skilled dog trainer dedicated to creating positive transformations in pets through patience, care, and structured training methods. He focuses on obedience training, behavior improvement, and socialization to ensure dogs are happy, confident, and well-adjusted.',
    experience: 'With 4 years of professional experience in dog training across Mumbai, Yagnesh has worked with a wide variety of breeds and temperaments. His compassionate approach and consistent results have earned the trust of many pet parents.',
    yearsExp: '4+ Years',
    specialties: ['Obedience Training', 'Behavior Improvement', 'Socialization', 'Puppy Training'],
    accentColor: '#C62E7B',
    bgGrad: 'linear-gradient(135deg, #FDEEF6 0%, #FFF0F8 100%)',
  },
  {
    id: 'harshad',
    name: 'Harshad Waghela',
    role: 'Certified Dog Trainer',
    img: '/trainers/Harshad-Waghela-pet-Trainer.webp',
    bio: 'Harshad Waghela is a certified dog trainer passionate about helping pets and their owners build strong, happy relationships. He specializes in obedience training, behavior correction, puppy care, and socialization, using positive reinforcement techniques to ensure every dog is confident, well-behaved, and joyful.',
    experience: 'With over 5 years of hands-on experience training dogs across Mumbai, Harshad has successfully helped countless pet owners address behavioral challenges, train puppies, and strengthen the bond between pets and their families. His approach combines expertise, patience, and a genuine love for animals.',
    yearsExp: '5+ Years',
    specialties: ['Behavior Correction', 'Puppy Care', 'Socialization', 'Positive Reinforcement'],
    accentColor: '#C62E7B',
    bgGrad: 'linear-gradient(135deg, #FDE8F1 0%, #FFF0F8 100%)',
  },
  {
    id: 'atul',
    name: 'Atul Darji',
    role: 'Expert Dog Trainer',
    img: '/trainers/atul-darji.webp',
    bio: 'Atul Darji is a dedicated dog trainer passionate about helping pets become well-behaved, confident, and happy. He specializes in obedience training, behavior correction, and puppy care, using positive reinforcement techniques for effective results.',
    experience: 'With 4.8 years of hands-on experience training dogs across Mumbai, Atul has successfully worked with a variety of breeds and temperaments. His expertise, patience, and love for animals make him a trusted trainer for pet owners seeking lasting results.',
    yearsExp: '4.8 Years',
    specialties: ['Obedience Training', 'Behavior Correction', 'Puppy Care', 'All Breeds'],
    accentColor: '#C62E7B',
    bgGrad: 'linear-gradient(135deg, #FDEEF6 0%, #FFF0F8 100%)',
  },
  {
    id: 'kaushik',
    name: 'Kaushik Chauhan',
    role: 'Professional Dog Trainer',
    img: '/trainers/Kaushik-Chauhan-2-scaled.webp',
    bio: 'Kaushik Chauhan is a dedicated dog trainer committed to helping pets develop good behavior, confidence, and a strong bond with their owners. He specializes in obedience training, behavior correction, and puppy care using positive reinforcement techniques.',
    experience: 'With 3.4 years of hands-on experience training dogs across Mumbai, Kaushik has successfully worked with various breeds and temperaments. His expertise, patience, and commitment make him a trusted trainer for pet parents seeking effective results.',
    yearsExp: '3.4 Years',
    specialties: ['Obedience Training', 'Behavior Correction', 'Puppy Training', 'Bond Building'],
    accentColor: '#C62E7B',
    bgGrad: 'linear-gradient(135deg, #FDEEF6 0%, #FFF0F8 100%)',
  },
  {
    id: 'viraj',
    name: 'Viraj',
    role: 'Expert Dog Trainer',
    img: '/trainers/Viraj-Pet-Trainer.webp',
    bio: 'Viraj is a dedicated dog trainer passionate about helping pets develop good behavior, confidence, and strong bonds with their owners. He specializes in obedience training, behavior correction, and puppy care using positive reinforcement techniques.',
    experience: 'With 4 years of hands-on experience training dogs across Mumbai, Viraj has successfully worked with various breeds and temperaments. His expertise, patience, and commitment make him a trusted trainer for pet parents seeking lasting results.',
    yearsExp: '4 Years',
    specialties: ['Obedience Training', 'Behavior Correction', 'Puppy Care', 'Bond Building'],
    accentColor: '#C62E7B',
    bgGrad: 'linear-gradient(135deg, #FDE8F1 0%, #FFF0F8 100%)',
  },
  {
    id: 'sebastian',
    name: 'Sebastian Chetty',
    role: 'Expert Dog Trainer',
    img: '/trainers/sebastian.webp',
    bio: 'Sebastian Chetty is a dedicated dog trainer passionate about helping pets become well-behaved, confident, and happy. He specializes in obedience training, behavior correction, and puppy care, using positive reinforcement techniques for effective results.',
    experience: 'With 3.5 years of hands-on experience training dogs across Mumbai, Sebastian has successfully worked with a variety of breeds and temperaments. His expertise, patience, and love for animals make him a trusted trainer for pet owners seeking lasting results.',
    yearsExp: '3.5 Years',
    specialties: ['Obedience Training', 'Behavior Correction', 'Puppy Care', 'Positive Reinforcement'],
    accentColor: '#C62E7B',
    bgGrad: 'linear-gradient(135deg, #FDE8F1 0%, #FFF0F8 100%)',
  },
  {
    id: 'mehul',
    name: 'Mehul Ratola',
    role: 'Expert Dog Trainer',
    img: '/trainers/mehul.webp',
    bio: 'Mehul Ratola is a certified dog trainer passionate about helping pets and their owners build strong, happy relationships. He specializes in obedience training, behavior correction, puppy care, and socialization, using positive reinforcement techniques to ensure every dog is confident, well-behaved, and joyful.',
    experience: 'With over 4.5 years of hands-on experience training dogs across Mumbai, Mehul has successfully helped countless pet owners address behavioral challenges, train puppies, and strengthen the bond between pets and their families. His approach combines expertise, patience, and a genuine love for animals.',
    yearsExp: '4.5 Years',
    specialties: ['Behavior Correction', 'Puppy Care', 'Socialization', 'All Breeds'],
    accentColor: '#C62E7B',
    bgGrad: 'linear-gradient(135deg, #FDEEF6 0%, #FFF0F8 100%)',
  },
];

export function TrainerCard({ trainer, onClick }: { trainer: Trainer; onClick: () => void }) {
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div
        className="relative rounded-3xl overflow-hidden"
        style={{
          background: '#fff',
          border: '2px solid #F3D5E8',
          boxShadow: '0 4px 24px rgba(198,46,123,0.06)',
          transition: 'border 0.3s, box-shadow 0.3s, transform 0.35s cubic-bezier(0.4,0,0.2,1)',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.border = `2px solid ${trainer.accentColor}`;
          el.style.boxShadow = `0 20px 50px rgba(198,46,123,0.2)`;
          el.style.transform = 'translateY(-8px)';
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.border = '2px solid #F3D5E8';
          el.style.boxShadow = '0 4px 24px rgba(198,46,123,0.06)';
          el.style.transform = 'translateY(0)';
        }}
      >
        {/* Photo section */}
        <div className="relative overflow-hidden" style={{ height: 230, background: trainer.bgGrad }}>
          {/* Animated blob decoration */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: `radial-gradient(ellipse 60% 70% at 50% 100%, ${trainer.accentColor}18 0%, transparent 70%)`,
          }} />
          <div className="absolute top-[-20px] right-[-20px] w-36 h-36 rounded-full pointer-events-none animate-float-slow"
            style={{ background: `${trainer.accentColor}0D` }} />
          <div className="absolute bottom-[-10px] left-[-10px] w-28 h-28 rounded-full pointer-events-none animate-float"
            style={{ background: `${trainer.accentColor}0A` }} />

          {/* Paw watermark */}
          <div className="absolute top-3 left-3 opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 100" fill={trainer.accentColor} width={40} height={40}>
              <ellipse cx="50" cy="65" rx="22" ry="18" />
              <ellipse cx="24" cy="42" rx="10" ry="13" />
              <ellipse cx="44" cy="32" rx="10" ry="13" />
              <ellipse cx="64" cy="32" rx="10" ry="13" />
              <ellipse cx="76" cy="42" rx="10" ry="13" />
            </svg>
          </div>

          {/* Circular photo */}
          <div className="absolute inset-0 flex items-center justify-center pt-2">
            <div
              className="relative group-hover:scale-105 rounded-full overflow-hidden shadow-xl"
              style={{ width: 165, height: 165, border: '4px solid #fff', transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)' }}
            >
              <img
                src={trainer.img}
                alt={trainer.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Years badge */}
          <div
            className="absolute top-4 right-4 px-2.5 py-1 rounded-full font-heading font-black text-[11px] shadow-lg"
            style={{ background: '#FCC244', color: '#2A1A24' }}
          >
            {trainer.yearsExp}
          </div>

          {/* Stars bottom */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={10} fill="#FCC244" color="#FCC244" />
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="p-5 text-center">
          <h3 className="font-heading font-black text-lg leading-tight mb-1 group-hover:text-[#C62E7B] transition-colors" style={{ color: '#2A1A24' }}>
            {trainer.name}
          </h3>
          <p className="font-body text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: trainer.accentColor }}>
            {trainer.role}
          </p>

          <button
            className="w-full py-2.5 rounded-2xl font-heading font-bold text-xs tracking-wide"
            style={{ background: '#FCC244', color: '#2A1A24', transition: 'opacity 0.3s' }}
          >
            View Profile →
          </button>
        </div>
      </div>
    </div>
  );
}

function TrainerModal({ trainer, onClose }: { trainer: Trainer; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6"
      style={{ background: 'rgba(42,26,36,0.85)', backdropFilter: 'blur(12px)' }}
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[92vh] flex flex-col overflow-hidden animate-fade-in-up"
        style={{ border: `3px solid ${trainer.accentColor}` }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative flex-shrink-0 overflow-hidden" style={{ background: trainer.bgGrad, minHeight: 180 }}>
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); onClose(); }}
            className="absolute top-4 right-4 z-50 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
            style={{ background: 'rgba(255,255,255,0.95)', border: `2px solid ${trainer.accentColor}40`, transition: 'transform 0.2s, background 0.2s', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            onMouseEnter={e => e.currentTarget.style.background = '#fff'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.95)'}
            aria-label="Close"
          >
            <X size={18} style={{ color: trainer.accentColor }} />
          </button>

          {/* Decor circles */}
          <div className="absolute top-[-30px] right-[-30px] w-48 h-48 rounded-full opacity-20 pointer-events-none"
            style={{ background: trainer.accentColor }} />
          <div className="absolute bottom-[-20px] left-[-20px] w-36 h-36 rounded-full opacity-10 pointer-events-none"
            style={{ background: trainer.accentColor }} />

          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 px-8 pt-8 pb-6 relative z-10">
            {/* Photo */}
            <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 shadow-xl border-4 border-white"
              style={{ background: `${trainer.accentColor}22` }}>
              <img src={trainer.img} alt={trainer.name} className="w-full h-full object-cover object-top" />
            </div>

            {/* Name */}
            <div className="text-center sm:text-left pb-2">
              <h2 className="font-heading font-black text-2xl sm:text-3xl leading-tight" style={{ color: '#2A1A24' }}>
                {trainer.name}
              </h2>
              <p className="font-body font-semibold text-sm mt-1 mb-2" style={{ color: trainer.accentColor }}>
                {trainer.role}
              </p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-body font-bold text-xs"
                style={{ background: '#FCC244', color: '#2A1A24' }}>
                <Clock size={10} /> {trainer.yearsExp} Experience
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 px-6 sm:px-8 py-6 flex flex-col gap-5">
          <div className="w-12 h-1 rounded-full" style={{ background: trainer.accentColor }} />

          <p className="font-body text-sm leading-relaxed" style={{ color: '#2A1A24' }}>{trainer.bio}</p>

          <div>
            <h3 className="font-heading font-black text-base mb-2" style={{ color: '#2A1A24' }}>Experience:</h3>
            <p className="font-body text-sm leading-relaxed" style={{ color: '#5B6B78' }}>{trainer.experience}</p>
          </div>

          <div>
            <h3 className="font-heading font-black text-base mb-3" style={{ color: '#2A1A24' }}>Specialties:</h3>
            <div className="flex flex-wrap gap-2">
              {trainer.specialties.map(s => (
                <span key={s} className="flex items-center gap-1.5 font-body text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{ background: `${trainer.accentColor}15`, color: trainer.accentColor, border: `1px solid ${trainer.accentColor}30` }}>
                  <Award size={10} /> {s}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FCC244" color="#FCC244" />)}
            <span className="font-body text-xs ml-2" style={{ color: '#5B6B78' }}>5.0 Rated Trainer</span>
          </div>

          {/* Contact info */}
          <div className="rounded-2xl p-5 flex flex-col gap-4" style={{ background: '#FDEEF6', border: '1.5px solid #F3D5E8' }}>
            <div className="font-heading font-bold text-sm uppercase tracking-wider" style={{ color: trainer.accentColor }}>
              Information:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a href="tel:+91-88799-52169"
                className="flex items-center gap-3 px-4 py-3 rounded-xl font-heading font-bold text-sm"
                style={{ background: '#fff', color: '#2A1A24', border: '1.5px solid #F3D5E8' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#C62E7B' }}>
                  <Phone size={14} color="#fff" />
                </div>
                {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 px-4 py-3 rounded-xl font-heading font-bold text-sm"
                style={{ background: '#fff', color: '#2A1A24', border: '1.5px solid #F3D5E8' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#C62E7B' }}>
                  <Mail size={14} color="#fff" />
                </div>
                {EMAIL}
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+91-88799-52169"
              className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-heading font-bold text-sm"
              style={{ background: trainer.accentColor, color: '#fff', transition: 'opacity 0.2s' }}>
              <Phone size={15} /> Call Now
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-heading font-bold text-sm"
              style={{ background: '#22c55e', color: '#fff', transition: 'opacity 0.2s' }}>
              <MessageCircle size={15} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TeamPage() {
  useScrollReveal();
  const [selected, setSelected] = useState<Trainer | null>(null);

  return (
    <div className="bg-transparent relative z-10">
      {/* Hero */}
      <section className="py-16 lg:py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #FFF0F6 0%, #FFFFFF 60%, #EEF0FB 100%)' }}>
        <div className="absolute inset-0 paw-bg pointer-events-none" style={{ opacity: 0.3 }} />
        <div className="absolute top-0 right-0 w-[40%] h-[80%] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top right, #FDEEF6 0%, transparent 70%)' }} />

        <div className="container-site text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 font-body text-xs font-bold uppercase tracking-widest"
            style={{ background: '#FCC244', color: '#2A1A24', border: '1px solid #E5A922' }}>
            🐾 Meet Our Team
          </div>

          <h1 className="font-heading font-black leading-tight mb-5"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#2A1A24' }}>
            Meet Our{' '}
            <span style={{ color: '#C62E7B' }}>Expert</span>{' '}
            <span style={{ color: '#2E3E8E' }}>Trainers</span>
          </h1>
          <p className="font-body text-base leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: '#5B6B78' }}>
            Our certified trainers bring years of experience and a deep love for animals. Each trainer is specially vetted, trained, and passionate about helping your pet thrive.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {[
              { num: '7+', label: 'Expert Trainers' },
              { num: '1000+', label: 'Pets Trained' },
              { num: '15+', label: 'Years of Trust' },
              { num: '5★', label: 'Avg Rating' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="font-heading font-black text-2xl sm:text-3xl" style={{ color: '#C62E7B' }}>{stat.num}</div>
                <div className="font-body text-xs" style={{ color: '#5B6B78' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-16 lg:py-24 bg-transparent">
        <div className="container-site">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {trainers.map((trainer, i) => (
              <div key={trainer.id} className="reveal" style={{ '--delay': `${i * 0.08}s` } as React.CSSProperties}>
                <TrainerCard trainer={trainer} onClick={() => setSelected(trainer)} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Trainers */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #2A1A24 0%, #3D1F35 100%)' }}>
        <div className="container-site text-center">
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-white mb-10">
            Why Choose Our <span style={{ color: '#FCC244' }}>Trainers?</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🎓', title: 'Certified & Trained', desc: 'Every trainer holds professional certifications and undergoes continuous education.' },
              { icon: '❤️', title: 'Animal Lovers', desc: "Our team genuinely loves animals — it's not just a job, it's a passion." },
              { icon: '✅', title: 'Positive Methods', desc: 'We exclusively use positive reinforcement — no fear, no force, no pain.' },
              { icon: '📊', title: 'Proven Results', desc: '1000+ pets successfully trained with measurable behavioral improvement.' },
            ].map(item => (
              <div key={item.title} className="rounded-2xl p-6 text-left"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-heading font-bold text-base text-white mb-2">{item.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />

      {selected && <TrainerModal trainer={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
