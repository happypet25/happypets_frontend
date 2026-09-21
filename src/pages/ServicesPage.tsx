import { useState } from 'react';
import { Phone, MessageCircle, CheckCircle2, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services, ServiceItem } from '../components/ServicesSection';
import CTABanner from '../components/CTABanner';
import FAQ from '../components/FAQ';

function ServiceRow({ service, reverse }: { service: ServiceItem; reverse?: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div
        className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-0 rounded-3xl overflow-hidden transition-all duration-500`}
        style={{
          background: '#fff',
          border: hovered ? `2px solid ${service.accentColor}` : `2px solid ${service.accentColor}22`,
          boxShadow: hovered ? `0 24px 60px ${service.accentColor}1a` : '0 8px 40px rgba(198,46,123,0.07)',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Left / Right: coloured sidebar */}
        <div
          className="lg:w-[280px] flex-shrink-0 flex flex-col items-center justify-end relative overflow-hidden min-h-[200px] lg:min-h-0 transition-colors duration-500"
          style={{
            background: hovered ? `linear-gradient(160deg, ${service.accentColor}22 0%, ${service.accentColor}40 100%)` : `linear-gradient(160deg, ${service.accentColor}18 0%, ${service.accentColor}30 100%)`,
          }}
        >
          {/* Emoji watermark */}
          <div className="absolute top-4 left-4 font-heading font-black text-[80px] leading-none select-none pointer-events-none" style={{ opacity: 0.08 }}>
            {service.emoji}
          </div>

          {/* Stars */}
          <div className="absolute top-5 right-5 flex flex-col items-end gap-1">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#FCC244" color="#FCC244" />)}
            </div>
            <span className="font-body text-[10px] font-bold uppercase tracking-widest" style={{ color: service.accentColor }}>
              Expert Service
            </span>
          </div>

          {/* Icon */}
          <div className="absolute top-5 left-5 flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: service.iconBg }}>
              <div style={{ transform: 'scale(1.15)' }}>{service.icon}</div>
            </div>
          </div>

          {/* Service image */}
          <img
            src={service.image}
            alt={service.category}
            className="w-full max-w-[220px] lg:max-w-full object-contain object-bottom transition-transform duration-700 ease-out"
            style={{ 
              maxHeight: '200px', 
              mixBlendMode: 'multiply',
              transform: hovered ? 'scale(1.08) translateY(-4px)' : 'scale(1) translateY(0)'
            }}
            loading="lazy"
          />
        </div>

        {/* Main content */}
        <div className="flex-1 p-6 sm:p-8 flex flex-col gap-5">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h2 className="font-heading font-black text-2xl sm:text-3xl leading-tight" style={{ color: '#2A1A24' }}>
                <span style={{ color: service.accentColor }}>{service.category.split(' ')[0]}</span>{' '}
                {service.category.split(' ').slice(1).join(' ')}
              </h2>
              <p className="font-body text-sm mt-1" style={{ color: '#5B6B78' }}>{service.tagline}</p>
            </div>
            {service.pricing && service.pricing.length > 0 ? (
              <div className="flex-shrink-0 px-4 py-2.5 rounded-xl border" style={{ background: '#fafafa', borderColor: `${service.accentColor}30` }}>
                <div className="font-heading font-bold text-[10px] uppercase tracking-wider mb-0.5" style={{ color: '#5B6B78' }}>Starting From</div>
                <div className="font-heading font-black text-xl leading-none" style={{ color: service.accentColor }}>
                  {service.startPrice} <span className="text-[12px] font-body text-gray-500 font-normal">{service.startUnit}</span>
                </div>
              </div>
            ) : (
              <div className="flex-shrink-0 px-4 py-2.5 rounded-xl border flex flex-col justify-center" style={{ background: '#fafafa', borderColor: `${service.accentColor}30` }}>
                <div className="font-heading font-black text-[15px] leading-none" style={{ color: service.accentColor }}>
                  Contact Us
                </div>
                <div className="font-body text-[10px] font-bold uppercase tracking-wider mt-1" style={{ color: '#5B6B78' }}>For Pricing</div>
              </div>
            )}
          </div>

          {/* Benefits list */}
          <div>
            <div className="font-heading font-bold text-xs uppercase tracking-wider mb-3" style={{ color: '#5B6B78' }}>
              What's Included
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {service.features.map((f) => (
                <div key={f} className="flex items-start gap-2 font-body text-[13px]" style={{ color: '#2A1A24' }}>
                  <CheckCircle2 size={14} style={{ color: service.accentColor, flexShrink: 0, marginTop: 1 }} />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Inquiry CTA */}
          <div className="flex flex-wrap items-center gap-3 pt-3 border-t" style={{ borderColor: `${service.accentColor}20` }}>
            <a
              href="tel:+91-88799-52169"
              className="flex items-center gap-2 font-heading font-bold text-sm px-6 py-3 rounded-full transition-all hover:opacity-90"
              style={{ background: service.accentColor, color: '#fff' }}
            >
              <Phone size={15} /> Call to Enquire
            </a>
            <a
              href={service.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-heading font-bold text-sm px-6 py-3 rounded-full transition-all hover:opacity-90"
              style={{ background: '#22c55e', color: '#fff' }}
            >
              <MessageCircle size={15} /> WhatsApp Us
            </a>
            <Link
              to={`/services/${service.id}`}
              className="flex items-center gap-2 font-heading font-bold text-sm px-6 py-3 rounded-full transition-all hover:opacity-90"
              style={{ background: '#FCC244', color: '#2A1A24', border: '1px solid #E5A922' }}
            >
              View Details <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

/* ─── Page ────────────────────────────────────────────────────── */
export default function ServicesPage() {
  return (
    <div>
      {/* Hero banner */}
      <section
        className="py-14 lg:py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #FDEEF6 0%, #FFF9F6 60%, #FFF3CD 100%)' }}
      >
        <div className="absolute top-4 right-8 opacity-10 pointer-events-none">
          <svg width="200" height="200" viewBox="0 0 100 100" fill="#C62E7B">
            <ellipse cx="50" cy="65" rx="22" ry="18" />
            <ellipse cx="24" cy="42" rx="10" ry="13" />
            <ellipse cx="44" cy="32" rx="10" ry="13" />
            <ellipse cx="64" cy="32" rx="10" ry="13" />
            <ellipse cx="76" cy="42" rx="10" ry="13" />
          </svg>
        </div>
        <div className="container-site text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
            style={{ background: '#FCC244', border: '1px solid #E5A922' }}>
            <span className="text-sm">🏆</span>
            <span className="font-body text-xs font-semibold" style={{ color: '#2A1A24' }}>
              Expert Care — Mumbai's #1 Pet Trainers
            </span>
          </div>
          <h1
            className="font-heading font-black leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#2A1A24' }}
          >
            Our <span style={{ color: '#C62E7B' }}>Services</span>
          </h1>
          <p className="font-body text-base leading-relaxed max-w-2xl mx-auto" style={{ color: '#5B6B78' }}>
            From puppy training to premium grooming — every service is built on positive reinforcement, expert knowledge, and genuine love for animals. Enquire via call or WhatsApp.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <a href="tel:+91-88799-52169"
              className="inline-flex items-center gap-2 font-heading font-bold px-7 py-3.5 rounded-full"
              style={{ background: '#C62E7B', color: '#fff', fontSize: '15px' }}>
              <Phone size={15} /> Call Us Now
            </a>
            <a href="https://wa.me/918879952169" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-heading font-bold px-7 py-3.5 rounded-full"
              style={{ background: '#22c55e', color: '#fff', fontSize: '15px' }}>
              <MessageCircle size={15} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Service rows */}
      <section className="py-12 lg:py-20">
        <div className="container-site flex flex-col gap-6 lg:gap-8">
          {services.map((s: ServiceItem, i: number) => (
            <ServiceRow key={s.id} service={s} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

      <FAQ />
      <CTABanner />
    </div>
  );
}
