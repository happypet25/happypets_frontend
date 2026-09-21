import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Phone, MessageCircle, Star, ChevronDown, ChevronUp, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { services, ServiceItem, TrainingPlan, PricingPackage } from '../components/ServicesSection';
import CTABanner from '../components/CTABanner';

/* ─── Training Plan Accordion Card ───────────────────────────── */
function TrainingPlanCard({ plan, index }: { plan: TrainingPlan; index: number }) {
  const [open, setOpen] = useState(false);

  const planColors = [
    { bg: '#FFF3CD', border: '#FCC244', badge: '#D97706' },
    { bg: '#FDE8F3', border: '#C62E7B', badge: '#C62E7B' },
    { bg: '#E8F5E9', border: '#22c55e', badge: '#16a34a' },
    { bg: '#E3F2FD', border: '#3B82F6', badge: '#1D4ED8' },
    { bg: '#F3E8FF', border: '#A855F7', badge: '#7C3AED' },
    { bg: '#FFF1F0', border: '#EF4444', badge: '#DC2626' },
    { bg: '#F0FDF4', border: '#10B981', badge: '#059669' },
  ];

  const color = planColors[index % planColors.length];

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        border: `2px solid ${open ? color.border : color.border + '60'}`,
        background: open ? color.bg : '#fff',
        boxShadow: open ? `0 8px 32px ${color.border}22` : '0 2px 8px rgba(0,0,0,0.04)',
      }}
    >
      {/* Header / clickable row */}
      <button
        className="w-full flex items-center gap-4 px-5 py-4 text-left"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        {/* Session badge */}
        <div
          className="flex-shrink-0 w-14 h-14 rounded-xl flex flex-col items-center justify-center"
          style={{ background: color.badge, color: '#fff' }}
        >
          <span className="font-heading font-black text-lg leading-none">{plan.sessions}</span>
          <span className="font-body text-[9px] uppercase tracking-wider opacity-90 leading-none mt-0.5">sessions</span>
        </div>

        {/* Name & meta */}
        <div className="flex-1 min-w-0">
          <div className="font-heading font-black text-base sm:text-lg leading-tight" style={{ color: '#2A1A24' }}>
            {plan.name}
          </div>
          <div className="flex flex-wrap items-center gap-2 mt-1">
            <span className="font-body text-xs px-2 py-0.5 rounded-full" style={{ background: color.border + '22', color: color.badge }}>
              {plan.duration}
            </span>
            <span className="font-body text-xs" style={{ color: '#6B7280' }}>
              {plan.sessionDuration}
            </span>
          </div>
        </div>

        {/* Expert badge + chevron */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="hidden sm:block font-body text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider"
            style={{ background: '#FCC244', color: '#2A1A24' }}>
            Expert Trainers
          </span>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
            style={{ background: open ? color.border : color.border + '20', color: open ? '#fff' : color.badge }}
          >
            {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>
        </div>
      </button>

      {/* Expanded benefits */}
      {open && (
        <div className="px-5 pb-5">
          <div className="h-px mb-4" style={{ background: color.border + '40' }} />
          <div className="font-heading font-bold text-xs uppercase tracking-wider mb-3" style={{ color: color.badge }}>
            What's Included
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {plan.benefits.map((b) => (
              <div key={b} className="flex items-start gap-2.5 font-body text-[13px]" style={{ color: '#2A1A24' }}>
                <CheckCircle2 size={14} style={{ color: color.badge, flexShrink: 0, marginTop: 1 }} />
                <span>{b}</span>
              </div>
            ))}
          </div>

          {/* CTA inside expanded */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-5 pt-4" style={{ borderTop: `1px solid ${color.border}40` }}>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+91-88799-52169"
                className="flex items-center gap-2 font-heading font-bold text-sm px-5 py-2.5 rounded-full transition-all hover:opacity-90"
                style={{ background: color.badge, color: '#fff' }}
              >
                <Phone size={13} /> Enquire Now
              </a>
              <a
                href="https://wa.me/918879952169"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-heading font-bold text-sm px-5 py-2.5 rounded-full transition-all hover:opacity-90"
                style={{ background: '#22c55e', color: '#fff' }}
              >
                <MessageCircle size={13} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Pricing Package Card ────────────────────────────────────── */
function PricingCard({ pkg, accent, featured = false }: { pkg: PricingPackage; accent: string; featured?: boolean }) {
  return (
    <div
      className="rounded-2xl flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        background: featured ? `linear-gradient(135deg, ${accent} 0%, ${accent}cc 100%)` : '#fff',
        border: `2px solid ${featured ? accent : accent + '30'}`,
        boxShadow: featured ? `0 12px 40px ${accent}33` : '0 4px 16px rgba(0,0,0,0.06)',
      }}
    >
      {featured && (
        <div className="text-center py-1.5 text-xs font-heading font-bold uppercase tracking-wider"
          style={{ background: '#FCC244', color: '#2A1A24' }}>
          ⭐ Most Popular
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* Plan name & description */}
        <div className="mb-4">
          <div className="font-heading font-black text-lg" style={{ color: featured ? '#fff' : '#2A1A24' }}>
            {pkg.name}
          </div>
          {pkg.description && (
            <div className="font-body text-xs mt-1" style={{ color: featured ? 'rgba(255,255,255,0.75)' : '#6B7280' }}>
              {pkg.description}
            </div>
          )}
        </div>

        {/* Pricing */}
        <div className="mb-5 pb-5 border-b" style={{ borderColor: featured ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.05)' }}>
          <div className="flex items-end gap-2">
            <span className="font-heading font-black text-4xl" style={{ color: featured ? '#fff' : accent }}>
              ₹{pkg.price.toLocaleString('en-IN')}
            </span>
            <span className="font-body text-xs pb-1" style={{ color: featured ? 'rgba(255,255,255,0.8)' : '#6B7280' }}>
              {pkg.unit}
            </span>
          </div>
          {pkg.originalPrice && (
            <div className="font-body text-xs mt-1.5 flex items-center gap-2">
              <span className="line-through" style={{ color: featured ? 'rgba(255,255,255,0.6)' : '#9CA3AF' }}>
                ₹{pkg.originalPrice.toLocaleString('en-IN')}
              </span>
              <span className="font-bold px-2 py-0.5 rounded text-[10px]" style={{ background: featured ? 'rgba(255,255,255,0.2)' : '#dcfce7', color: featured ? '#fff' : '#16a34a' }}>
                Save ₹{(pkg.originalPrice - pkg.price).toLocaleString('en-IN')}
              </span>
            </div>
          )}
        </div>        {/* Features */}
        <div className="flex-1 space-y-2 mb-6">
          {pkg.features.map((f) => (
            <div key={f} className="flex items-start gap-2 font-body text-[13px]"
              style={{ color: featured ? 'rgba(255,255,255,0.9)' : '#374151' }}>
              <CheckCircle2 size={14} style={{ color: featured ? '#FCC244' : accent, flexShrink: 0, marginTop: 1 }} />
              <span>{f}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex gap-2">
          <a
            href="tel:+91-88799-52169"
            className="flex-1 flex items-center justify-center gap-1.5 font-heading font-bold text-sm py-3 rounded-xl transition-all hover:opacity-90"
            style={{
              background: featured ? '#fff' : accent,
              color: featured ? accent : '#fff',
            }}
          >
            <Phone size={13} /> Book Now
          </a>
          <a
            href="https://wa.me/918879952169"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 font-heading font-bold text-sm px-4 py-3 rounded-xl transition-all hover:opacity-90"
            style={{ background: '#22c55e', color: '#fff' }}
          >
            <MessageCircle size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Training Detail Page ────────────────────────────────────── */
function TrainingDetailPage({ service }: { service: ServiceItem }) {
  const plans = service.trainingPlans ?? [];

  return (
    <div>
      {/* Hero Banner */}
      <section
        className="py-14 lg:py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #FDEEF6 0%, #FFF5FB 60%, #FFF3CD 100%)' }}
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
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-heading font-bold text-sm px-4 py-2 rounded-full mb-6 transition-all hover:opacity-80"
            style={{ background: '#FDEEF6', color: '#C62E7B', border: '1px solid #F3D5E8' }}
          >
            <ArrowLeft size={14} /> Back to Services
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 ml-3"
            style={{ background: '#FDEEF6', border: '1px solid #F3D5E8' }}>
            <span className="text-sm">🏆</span>
            <span className="font-body text-xs font-semibold" style={{ color: '#C62E7B' }}>
              Expert Trainers · Positive Reinforcement
            </span>
          </div>

          <h1
            className="font-heading font-black leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#2A1A24' }}
          >
            <span style={{ color: '#C62E7B' }}>Pet Training</span> Packages
          </h1>
          <p className="font-body text-base leading-relaxed max-w-2xl mx-auto mb-6" style={{ color: '#5B6B78' }}>
            Choose from 7 expertly designed training programmes — from basic puppy essentials to full dog show preparation. Every session is 30 minutes with certified trainers.
          </p>

          {/* Star rating */}
          <div className="flex items-center justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#FCC244" color="#FCC244" />)}
            <span className="font-body text-sm ml-2" style={{ color: '#5B6B78' }}>5.0 · 200+ Verified Reviews</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="tel:+91-88799-52169"
              className="inline-flex items-center gap-2 font-heading font-bold px-7 py-3.5 rounded-full"
              style={{ background: '#C62E7B', color: '#fff', fontSize: '15px' }}>
              <Phone size={15} /> Call to Enquire
            </a>
            <a href="https://wa.me/918879952169" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-heading font-bold px-7 py-3.5 rounded-full"
              style={{ background: '#22c55e', color: '#fff', fontSize: '15px' }}>
              <MessageCircle size={15} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Plans List */}
      <section className="py-12 lg:py-20">
        <div className="container-site">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-4 mb-2">
              <div style={{ height: 2, width: 28, background: '#C62E7B', borderRadius: 2 }} />
              <h2 className="font-heading font-black" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', color: '#2A1A24' }}>
                Choose Your <span style={{ color: '#C62E7B' }}>Training Plan</span>
              </h2>
              <div style={{ height: 2, width: 28, background: '#C62E7B', borderRadius: 2 }} />
            </div>
            <p className="font-body text-sm" style={{ color: '#5B6B78' }}>
              Click on any plan to see full details · All plans include Expert Trainers
            </p>
          </div>

          <div className="flex flex-col gap-4 max-w-4xl mx-auto">
            {plans.map((plan, i) => (
              <TrainingPlanCard key={plan.name} plan={plan} index={i} />
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-12 max-w-2xl mx-auto text-center">
            <div
              className="rounded-2xl p-6"
              style={{ background: 'linear-gradient(135deg, #FDEEF6 0%, #FFF3CD 100%)', border: '1.5px solid #F3D5E8' }}
            >
              <div className="font-heading font-black text-base mb-2" style={{ color: '#2A1A24' }}>
                🎓 Not sure which plan is right?
              </div>
              <p className="font-body text-sm mb-4" style={{ color: '#5B6B78' }}>
                Get a free consultation with our expert trainers. We'll assess your dog and recommend the perfect plan.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="tel:+91-88799-52169"
                  className="inline-flex items-center gap-2 font-heading font-bold text-sm px-6 py-3 rounded-full"
                  style={{ background: '#C62E7B', color: '#fff' }}>
                  <Phone size={14} /> Book Free Demo
                </a>
                <a href="https://wa.me/918879952169" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-heading font-bold text-sm px-6 py-3 rounded-full"
                  style={{ background: '#22c55e', color: '#fff' }}>
                  <MessageCircle size={14} /> Chat with Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}

/* ─── Standard Service Detail Page (walking / grooming / daycare) */
function StandardServiceDetailPage({ service }: { service: ServiceItem }) {
  const pricing = service.pricing ?? [];
  const tabs = Array.from(new Set(pricing.map((p) => p.tab).filter(Boolean))) as string[];
  const [activeTab, setActiveTab] = useState(tabs[0] || '');

  const displayedPricing = tabs.length > 0
    ? pricing.filter(p => p.tab === activeTab)
    : pricing;

  return (
    <div>
      {/* Hero Banner */}
      <section
        className="py-14 lg:py-20 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${service.accentColor}10 0%, #FFF9F6 60%, ${service.accentColor}08 100%)`,
        }}
      >
        <div className="absolute top-4 right-8 opacity-10 pointer-events-none">
          <svg width="200" height="200" viewBox="0 0 100 100" fill={service.accentColor}>
            <ellipse cx="50" cy="65" rx="22" ry="18" />
            <ellipse cx="24" cy="42" rx="10" ry="13" />
            <ellipse cx="44" cy="32" rx="10" ry="13" />
            <ellipse cx="64" cy="32" rx="10" ry="13" />
            <ellipse cx="76" cy="42" rx="10" ry="13" />
          </svg>
        </div>

        <div className="container-site relative z-10 flex flex-col items-center text-center">
          <div className="w-full text-center sm:text-center mb-6">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-heading font-bold text-sm px-4 py-2 rounded-full transition-all hover:opacity-80"
              style={{ background: service.iconBg, color: service.accentColor, border: `1px solid ${service.accentColor}30` }}
            >
              <ArrowLeft size={14} /> Back to Services
            </Link>
          </div>

          <h1
            className="font-heading font-black leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: '#2A1A24' }}
          >
            <span style={{ color: service.accentColor }}>{service.category.split(' ')[0]}</span>{' '}
            {service.category.split(' ').slice(1).join(' ')}
          </h1>

          <p className="font-body text-base leading-relaxed mb-6 max-w-xl mx-auto" style={{ color: '#5B6B78' }}>
            {service.tagline}
          </p>

          {/* Stars */}
          <div className="flex items-center justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FCC244" color="#FCC244" />)}
            <span className="font-body text-sm ml-2" style={{ color: '#5B6B78' }}>5.0 · Expert Rated</span>
          </div>

          {/* Image centered */}
          <div className="flex justify-center w-full max-w-[320px] mx-auto mt-2">
            <img
              src={service.image}
              alt={service.category}
              className="w-full object-contain"
              style={{ maxHeight: '350px', mixBlendMode: 'multiply' }}
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {pricing.length > 0 && (
        <section className="py-12 lg:py-20" style={{ background: '#FFF9F6' }}>
          <div className="container-site">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-4 mb-2">
                <div style={{ height: 2, width: 28, background: service.accentColor, borderRadius: 2 }} />
                <h2 className="font-heading font-black" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', color: '#2A1A24' }}>
                  Pricing <span style={{ color: service.accentColor }}>Packages</span>
                </h2>
                <div style={{ height: 2, width: 28, background: service.accentColor, borderRadius: 2 }} />
              </div>
              <p className="font-body text-sm" style={{ color: '#5B6B78' }}>
                Transparent pricing · No hidden charges
              </p>
            </div>

            {tabs.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="font-heading font-bold text-sm px-6 py-2.5 rounded-full transition-all duration-300"
                    style={{
                      background: activeTab === tab ? service.accentColor : '#fff',
                      color: activeTab === tab ? '#fff' : '#5B6B78',
                      border: `1.5px solid ${activeTab === tab ? service.accentColor : '#e5e7eb'}`,
                      boxShadow: activeTab === tab ? `0 4px 12px ${service.accentColor}33` : 'none'
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto justify-center">
              {displayedPricing.map((pkg, i) => (
                <PricingCard
                  key={pkg.name + (pkg.tab || '')}
                  pkg={pkg}
                  accent={service.accentColor}
                  featured={tabs.length > 0 ? (i === 1 || pkg.name.toLowerCase().includes('twice')) : (i === 1)}
                />
              ))}
            </div>

            <p className="text-center font-body text-xs mt-6" style={{ color: '#9CA3AF' }}>
              * Prices may vary based on breed size and specific requirements. Contact us for a personalised quote.
            </p>
          </div>
        </section>
      )}

      {/* CTA banner */}
      <CTABanner />
    </div>
  );
}

/* ─── Main Route Component ────────────────────────────────────── */
export default function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  if (service.id === 'pet-training') {
    return <TrainingDetailPage service={service} />;
  }

  return <StandardServiceDetailPage service={service} />;
}
