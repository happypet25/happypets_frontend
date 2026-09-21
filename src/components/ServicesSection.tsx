import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MessageCircle, Star } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

/* ─── Constants ───────────────────────────────────────────────── */
const ENQUIRY_PHONE = '+91 88799 52169';
const WHATSAPP_LINK = 'https://wa.me/918879952169';

const PAW = (color = '#C62E7B', size = 10) => (
  <svg viewBox="0 0 100 100" fill={color} width={size} height={size} className="flex-shrink-0 mt-[2px]">
    <ellipse cx="50" cy="65" rx="22" ry="18" />
    <ellipse cx="24" cy="42" rx="10" ry="13" />
    <ellipse cx="44" cy="32" rx="10" ry="13" />
    <ellipse cx="64" cy="32" rx="10" ry="13" />
    <ellipse cx="76" cy="42" rx="10" ry="13" />
  </svg>
);

/* ─── Types ──────────────────────────────────────────────────── */
export type TrainingPlan = {
  name: string;
  duration: string;
  sessions: number;
  sessionDuration: string;
  benefits: string[];
  originalPrice?: number;
  price?: number;
};

export type PricingPackage = {
  name: string;
  originalPrice?: number;
  price: number;
  unit: string;
  description?: string;
  features: string[];
  tab?: string;
};

export type ServiceItem = {
  id: string;
  category: string;
  emoji: string;
  icon: React.ReactNode;
  iconBg: string;
  accentColor: string;
  tagline: string;
  features: string[];       // Used on card hover & ServicesPage list
  enquiryPhone: string;
  whatsapp: string;
  image: string;
  startPrice?: string;
  startUnit?: string;
  trainingPlans?: TrainingPlan[];   // Only for pet-training
  pricing?: PricingPackage[];       // For walking, grooming, daycare
};

/* ─── Training Plans Data ─────────────────────────────────────── */
export const trainingPlans: TrainingPlan[] = [
  {
    name: 'Puppy Training',
    duration: '1 Month',
    sessions: 12,
    sessionDuration: '30 min each',
    originalPrice: 10800,
    price: 8000,
    benefits: [
      'Potty / Pee Training',
      'Basic Social Etiquettes',
      'Puppy Biting Correction',
      'Instruction — Sit, Down, Stay',
      'Walking — Come, Go',
    ],
  },
  {
    name: 'Basic Training',
    duration: '2 Months',
    sessions: 24,
    sessionDuration: '30 min each',
    originalPrice: 19200,
    price: 15000,
    benefits: [
      'Advance Potty / Pee Training',
      'Biting / Mouthing Correction',
      '7 Basic Commands — Sit, Down, Stay, Hi5, Handshake, Come, Go',
      '5 No Commands — No, Don\'t Jump, Don\'t Bark, Don\'t Pull, Don\'t Eat',
    ],
  },
  {
    name: 'Obedience Training',
    duration: '3 Months',
    sessions: 36,
    sessionDuration: '30 min each',
    originalPrice: 28800,
    price: 21000,
    benefits: [
      'Leash Walking — Heel Walk, Turn, Slow Walk, Fast Walk',
      'Lower Acrobat Module — Crawl, Rollover, Lie Down, Sleep (Play dead)',
      'Advanced Potty / Pee Training',
      'Basic Social Etiquettes — Don\'t Jump, Don\'t Pull, Boundaries in house',
      'Biting / Mouthing Correction',
      '7 Basic Commands — Sit, Down, Stay, Hi5, Handshake, Come, Go',
      '5 No Commands — No, Don\'t Jump, Don\'t Bark, Don\'t Pull, Don\'t Eat',
    ],
  },
  {
    name: 'Smart Training',
    duration: '4 Months',
    sessions: 48,
    sessionDuration: '30 min each',
    originalPrice: 38400,
    price: 28000,
    benefits: [
      'Smart Commands — Go To Bed, Spin',
      'Advanced Play — Hula Hoop Jumps, Fetch & Drops',
      'Advanced Greeting — Namaste, Shake Hand, High Five',
      'Counting 1 to 5',
      'Lower Acrobat Module — Crawl, Rollover, Lie Down, Sleep (Play dead)',
      'Basic Social Etiquettes — Don\'t Jump, Don\'t Pull, Boundaries in house',
      'Biting / Mouthing Correction',
      '7 Basic Commands — Sit, Down, Stay, Hi5',
      '5 No Commands — No, Don\'t Jump, Don\'t Bark, Don\'t Pull, Don\'t Eat',
      'Leash Walking — Heel Walk, Turn, Slow Walk, Fast Walk',
    ],
  },
  {
    name: 'Advanced Training',
    duration: '6 Months',
    sessions: 72,
    sessionDuration: '30 min each',
    originalPrice: 61200,
    price: 44000,
    benefits: [
      'Advanced Off Leash Walking — Without Leash Walking',
      'Advanced Obedience Training',
      'Advanced Potty / Pee Training',
      'Advanced Crate Training & Free Diet Chart Provided',
      'Smart Commands — Go To Bed, Spin',
      'Advanced Play — Hula Hoop Jumps, Fetch & Drops',
      'Advanced Greeting — Namaste, Shake Hand, High Five',
      'Counting 1 to 5',
      'Lower Acrobat Module — Crawl, Rollover, Lie Down, Sleep (Play dead)',
      'Basic Social Etiquettes — Don\'t Jump, Don\'t Pull, Boundaries in house',
      'Biting / Mouthing Correction',
      '7 Basic Commands — Sit, Down, Stay, Hi5',
      '5 No Commands — No, Don\'t Jump, Don\'t Bark, Don\'t Pull, Don\'t Eat',
      'Leash Walking — Heel Walk, Turn, Slow Walk, Fast Walk',
    ],
  },
  {
    name: 'Behaviour Training',
    duration: '4 Months',
    sessions: 48,
    sessionDuration: '30 min each',
    originalPrice: 48800,
    price: 32000,
    benefits: [
      'Excessive Barking',
      'Growling',
      'Biting',
      'Lunging on Other People',
      'Fear Anxiety',
      'Hyperactivity',
      'Separation Anxiety',
      'Aggressive Behaviour',
      'Excessive Leash Pulling',
      'Excessive Chewing of Household Items',
    ],
  },
  {
    name: 'All-in-One Training',
    duration: '12 Months',
    sessions: 144,
    sessionDuration: '30 min each',
    originalPrice: 129600,
    price: 96000,
    benefits: [
      'Advanced Agility Training — Hurdle Jump, Corn Cross Walk, Between the Legs Walk (Weave)',
      'Theatrics — Play Dead Act, Statue/Freeze',
      'Sniff & Search',
      'Advanced Behaviour Training',
      'Protection & Guard Module — Guarding Position, Hold & Bark in Guarding Position',
      'Protection & Guard Module — Alert Bark on Doorbell, Alert Bark on Strangers',
      'Protection & Guard Module — Attack, Stop',
      'Smart Commands — Go To Bed, Fetch, Newspaper',
      'Advanced Play — Hula Hoop Jumps, Fetch & Drop, Spin',
      'Advanced Greeting — Namaste, Shake Hand, High Five',
      'Counting 1 to 5',
      'Advanced Off Leash Walking — Without Leash Walking',
      'Lower Acrobat Module — Crawl, Rollover, Lie Down, Sleep (Play dead)',
      'Advanced Potty / Pee Training',
      'Basic Social Etiquettes — Don\'t Jump, Don\'t Pull, Boundaries in House',
      'Biting / Mouthing Correction',
      '7 Basic Commands — Sit, Down, Stay, Hi5, Handshake, Come, Go',
      '5 No Commands — No, Don\'t Jump, Don\'t Bark, Don\'t Pull, Don\'t Eat',
      'Leash Walking — Heel Walk, Slow Walk, Fast Walk',
    ],
  },
];

/* ─── Pet Walking Pricing ─────────────────────────────────────── */
const walkingPricing: PricingPackage[] = [
  {
    tab: '1-Month',
    name: 'Once-a-Day Walking',
    originalPrice: 5000,
    price: 4000,
    unit: '/-',
    description: '26 Walks – 30 min per day (Mon – Sat)',
    features: [
      'Professional & Trusted Walkers',
      'Reliable Care & Safe Handling',
      'Walk Everyday (Sunday Off)',
      '30 Minutes Walk Each',
      'Safe, Professional, & Pet-Friendly Handling',
      'Specialized Care for Aggressive or Anxious Dogs',
    ],
  },
  {
    tab: '1-Month',
    name: 'Twice-a-Day Walking',
    originalPrice: 9000,
    price: 7500,
    unit: '/-',
    description: '52 Walks – 30 min per session (Morning & Evening)',
    features: [
      'Professional & Trusted Walkers',
      'Reliable Care & Safe Handling',
      'Walk Everyday (Sunday Off)',
      '30 Minutes Walk Each session',
      'Safe, Professional, & Pet-Friendly Handling',
      'Specialized Care for Aggressive or Anxious Dogs',
    ],
  },
  {
    tab: '3-Month',
    name: 'Once-a-Day Walking',
    originalPrice: 12000,
    price: 10500,
    unit: '/-',
    description: '78 Walks – 30 min per day (Mon – Sat)',
    features: [
      'Professional & Trusted Walkers',
      'Reliable Care & Safe Handling',
      'Walk Everyday (Sunday Off)',
      '30 Minutes Walk Each',
      'Safe, Professional, & Pet-Friendly Handling',
      'Specialized Care for Aggressive or Anxious Dogs',
    ],
  },
  {
    tab: '3-Month',
    name: 'Twice-a-Day Walking',
    originalPrice: 22500,
    price: 21000,
    unit: '/-',
    description: '156 Walks – 30 min per day (Mon – Sat)',
    features: [
      'Professional & Trusted Walkers',
      'Reliable Care & Safe Handling',
      'Walk Everyday (Sunday Off)',
      '30 Minutes Walk Each session',
      'Safe, Professional, & Pet-Friendly Handling',
      'Specialized Care for Aggressive or Anxious Dogs',
    ],
  },
  {
    tab: '6-Month',
    name: 'Once-a-Day Walking',
    originalPrice: 24000,
    price: 21000,
    unit: '/-',
    description: '156 Walks – 30 min per day (Mon – Sat)',
    features: [
      'Professional & Trusted Walkers',
      'Reliable Care & Safe Handling',
      'Walk Everyday (Sunday Off)',
      '30 Minutes Walk Each',
      'Safe, Professional, & Pet-Friendly Handling',
      'Specialized Care for Aggressive or Anxious Dogs',
    ],
  },
  {
    tab: '6-Month',
    name: 'Twice-a-Day Walking',
    originalPrice: 45000,
    price: 42000,
    unit: '/-',
    description: '312 Walks – 30 min per session (Mon – Sat)',
    features: [
      'Professional & Trusted Walkers',
      'Reliable Care & Safe Handling',
      'Walk Everyday (Sunday Off)',
      '30 Minutes Walk Each session',
      'Safe, Professional, & Pet-Friendly Handling',
      'Specialized Care for Aggressive or Anxious Dogs',
    ],
  },
  {
    tab: '12-Month',
    name: 'Once-a-Day Walking',
    originalPrice: 48000,
    price: 42000,
    unit: '/-',
    description: '312 Walks – 30 min per day (Mon – Sat)',
    features: [
      'Professional & Trusted Walkers',
      'Reliable Care & Safe Handling',
      'Walk Everyday (Sunday Off)',
      '30 Minutes Walk Each',
      'Safe, Professional, & Pet-Friendly Handling',
      'Specialized Care for Aggressive or Anxious Dogs',
    ],
  },
  {
    tab: '12-Month',
    name: 'Twice-a-Day Walking',
    originalPrice: 90000,
    price: 85000,
    unit: '/-',
    description: '624 Walks – 30 min per day (Mon – Sat)',
    features: [
      'Professional & Trusted Walkers',
      'Reliable Care & Safe Handling',
      'Walk Everyday (Sunday Off)',
      '30 Minutes Walk Each session',
      'Safe, Professional, & Pet-Friendly Handling',
      'Specialized Care for Aggressive or Anxious Dogs',
    ],
  },
];

/* ─── Pet Grooming Pricing ────────────────────────────────────── */
const groomingPricing: PricingPackage[] = [
  {
    name: 'Bath & Brush',
    originalPrice: 2198,
    price: 1099,
    unit: '/-',
    description: '50% OFF',
    features: [
      'Shampoo & Conditioner',
      'Blow Dry',
      'Coat Brush Out',
      'Nail Clipping',
      'Ear Cleaning',
      'Anal Gland cleaning',
      'Paw Cleaning',
      'Pet Perfume',
    ],
  },
  {
    name: 'Hygiene Cut & Bath',
    originalPrice: 2798,
    price: 1399,
    unit: '/-',
    description: '50% OFF',
    features: [
      'Private Part Haircut',
      'Tail Haircut',
      'Shampoo & Conditioning',
      'Blow Dry',
      'Paw Cleaning with Paw Area Haircut',
      'Nail Clipping',
      'Ear Cleaning',
      'Anal Gland cleaning',
      'Pet Perfume',
      'Coat Brush Out',
    ],
  },
  {
    name: 'Full Grooming',
    originalPrice: 3998,
    price: 1999,
    unit: '/-',
    description: 'Professional & Hygienic. 50% OFF',
    features: [
      'Full Body Haircut',
      'Full Body Massage',
      'Coat Brush Out',
      'Nail Clipping',
      'Blow Dry',
      'Ear Cleaning',
      'Paw Cleaning with Paw Area Haircut',
      'Shampoo & Conditioner',
      'Tail Haircut',
      'Ear Haircut',
      'Private Part Haircut',
      'Anal Gland cleaning',
      'Pet Perfume',
    ],
  },
];

/* ─── Daycare & Boarding Pricing ──────────────────────────────── */
const daycarePrice: PricingPackage[] = [
  {
    name: 'Under 1 week',
    price: 1400,
    unit: '/- Per Day',
    features: [
      '1 pick-up provided by the company',
      '2 meals per day',
      '2 walks per day',
      'Off-leash playtime & no cage environment',
    ],
  },
  {
    name: '1 week or more days',
    price: 1200,
    unit: '/- Per Day',
    features: [
      '1 pick-up provided by the company',
      '2 meals per day',
      '2 walks per day',
      'Off-leash playtime & no cage environment',
    ],
  },
  {
    name: '15 days or more',
    price: 999,
    unit: '/-',
    description: 'Home-like environment filled with love, care & fun',
    features: [
      '1 pick-up provided by the company',
      '2 meals per day',
      '2 walks per day',
      'Off-leash playtime & no cage environment',
      '1 complimentary bath & brush (stays of 15 days or more)',
    ],
  },
];

/* ─── Service Data ────────────────────────────────────────────── */
export const services: ServiceItem[] = [
  {
    id: 'pet-training',
    category: 'Pet Training',
    emoji: '🐕',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-6 h-6">
        <circle cx="24" cy="18" r="9" stroke="#C62E7B" strokeWidth="2" fill="#F9C8E6" />
        <path d="M12 38 C12 30 36 30 36 38" stroke="#C62E7B" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="18" r="4" fill="#C62E7B" opacity="0.4" />
      </svg>
    ),
    iconBg: '#FDEEF6',
    accentColor: '#C62E7B',
    tagline: 'Expert certified trainers. Positive reinforcement methods.',
    features: [
      'Puppy Training (12 Sessions)',
      'Basic Training (24 Sessions)',
      'Obedience Training (36 Sessions)',
      'Smart Training (48 Sessions)',
      'Advanced Training (72 Sessions)',
      'Behaviour Training (48 Sessions)',
      'All-in-One Training (144 Sessions)',
    ],
    enquiryPhone: ENQUIRY_PHONE,
    whatsapp: WHATSAPP_LINK,
    image: '/service/service1.png',
    trainingPlans,
  },
  {
    id: 'pet-walking',
    category: 'Pet Walking',
    emoji: '🦮',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-6 h-6">
        <circle cx="28" cy="14" r="8" fill="#FDC2CE" stroke="#C62E7B" strokeWidth="2" />
        <path d="M10 38 Q18 28 28 22" stroke="#C62E7B" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="10" cy="38" r="3" fill="#C62E7B" opacity="0.5" />
      </svg>
    ),
    iconBg: '#FDC2CE',
    accentColor: '#C62E7B',
    tagline: 'Daily structured walks for healthy, happy & socialised dogs.',
    features: [
      'Once-a-Day or Twice-a-Day options',
      'GPS-tracked walks for your peace of mind',
      'Trained professional walkers',
      'Post-walk report & photos sent to owner',
      'Socialisation with other dogs during walks',
      'Leash manners reinforced on every walk',
      'Safe & hygienic equipment used',
      'Flexible scheduling to match your routine',
    ],
    enquiryPhone: ENQUIRY_PHONE,
    whatsapp: WHATSAPP_LINK,
    image: '/service/service2.png',
    startPrice: '₹154',
    startUnit: '/ walk',
    pricing: walkingPricing,
  },
  {
    id: 'pet-grooming',
    category: 'Pet Grooming',
    emoji: '✂️',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-6 h-6">
        <path d="M16 32 Q24 20 32 32" fill="#FCD585" stroke="#D97706" strokeWidth="1.5" />
        <path d="M20 16 L28 16 L30 24 L18 24 Z" fill="#FCD585" stroke="#D97706" strokeWidth="1.5" />
        <circle cx="24" cy="12" r="4" fill="#D97706" opacity="0.4" stroke="#D97706" strokeWidth="1.5" />
      </svg>
    ),
    iconBg: '#FCD585',
    accentColor: '#D97706',
    tagline: 'Premium grooming, bathing & styling by certified groomers.',
    features: [
      'Bath & Blow Dry',
      'Brushing & De-matting',
      'Nail Clipping & Filing',
      'Ear Cleaning',
      'Hygiene Trim — paws, face, sanitary area',
      'Full Haircut & Breed-specific Styling',
      'Tick & Flea Treatment',
      'Bandana / Bow Finishing Touch',
      'Cologne & Paw Balm Application',
    ],
    enquiryPhone: ENQUIRY_PHONE,
    whatsapp: WHATSAPP_LINK,
    image: '/service/service3.png',
    startPrice: '₹1099',
    startUnit: '/ session',
    pricing: groomingPricing,
  },
  {
    id: 'daycare-boarding',
    category: 'Pet Daycare & Boarding',
    emoji: '🏠',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-6 h-6">
        <rect x="10" y="20" width="28" height="18" rx="4" fill="#F9C8E6" stroke="#C62E7B" strokeWidth="1.5" />
        <path d="M16 20 V16 A8 8 0 0 1 32 16 V20" stroke="#C62E7B" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="29" r="3" fill="#C62E7B" opacity="0.6" />
      </svg>
    ),
    iconBg: '#F9C8E6',
    accentColor: '#C62E7B',
    tagline: 'Safe, supervised & fun environment while you\'re away.',
    features: [
      'Full-day or half-day daycare options',
      'Supervised group play sessions',
      'Socialisation with other well-behaved pets',
      'Nutritious meal included (daycare)',
      'AC rooms & cozy beds for overnight boarding',
      'CCTV monitored facility 24/7',
      'Medical care on-call',
      'Daily activity update & photo report to owner',
    ],
    enquiryPhone: ENQUIRY_PHONE,
    whatsapp: WHATSAPP_LINK,
    image: '/service/service4.png',
    startPrice: '₹999',
    startUnit: '/ day',
    pricing: daycarePrice,
  },
];

/* ─── Home Service Card ──────────────────────────────────────── */
function HomeServiceCard({ service }: { service: ServiceItem }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="reveal flex flex-col rounded-2xl overflow-hidden bg-white relative cursor-default"
      style={{
        border: hovered ? `2px solid ${service.accentColor}` : '2px solid #F3D5E8',
        boxShadow: hovered ? `0 16px 40px rgba(198,46,123,0.16)` : '0 2px 12px rgba(198,46,123,0.05)',
        transition: 'border 0.3s, box-shadow 0.3s, transform 0.35s cubic-bezier(0.4,0,0.2,1)',
        transform: hovered ? 'translateY(-6px) scale(1.01)' : 'translateY(0) scale(1)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top right details button */}
      <div className="absolute top-3 right-3 z-20">
        <Link
          to={`/services/${service.id}`}
          className="flex items-center gap-1 font-heading font-bold text-[10px] px-3 py-1.5 rounded-full transition-all hover:opacity-90 shadow-sm"
          style={{ background: '#FCC244', color: '#2A1A24' }}
        >
          View Details <ArrowRight size={10} />
        </Link>
      </div>
      {/* Top: icon + title */}
      <div className="p-4 flex items-center gap-2.5 flex-shrink-0">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background: service.iconBg,
            transition: 'transform 0.3s',
            transform: hovered ? 'rotate(-6deg) scale(1.1)' : 'scale(1)',
          }}
        >
          <div style={{ transform: 'scale(1.2)' }}>{service.icon}</div>
        </div>
        <div className="min-w-0">
          <h3 className="font-heading font-black text-[15px] leading-tight" style={{ color: '#2A1A24' }}>
            {service.category}
          </h3>
          <div className="flex items-center gap-0.5 mt-0.5 mb-1.5">
            {[...Array(5)].map((_, i) => <Star key={i} size={8} fill="#FCC244" color="#FCC244" />)}
            <span className="font-body text-[9px] ml-1" style={{ color: '#9CA3AF' }}>Expert</span>
          </div>
          {service.id === 'pet-training' ? (
            <div className="font-body text-[12px] font-bold mt-2" style={{ color: service.accentColor }}>
              Contact Us for Pricing
            </div>
          ) : (
            <div className="flex items-baseline gap-1 mt-1">
              <span className="font-body text-[10px] text-gray-500 uppercase tracking-wider">Starts at</span>
              <span className="font-heading font-black text-lg" style={{ color: service.accentColor }}>
                {service.startPrice}
              </span>
              <span className="font-body text-[10px] text-gray-500">
                {service.startUnit}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Middle: image OR feature panel */}
      <div className="relative flex-1" style={{ minHeight: '150px' }}>
        {/* Dog image */}
        <div
          className="absolute inset-0 flex items-end justify-center overflow-hidden"
          style={{
            opacity: hovered ? 0 : 1,
            transition: 'opacity 0.3s',
            pointerEvents: hovered ? 'none' : 'auto',
          }}
        >
          <img
            src={service.image}
            alt={service.category}
            className="w-[82%] object-contain object-bottom"
            style={{ maxHeight: '140px', mixBlendMode: 'multiply' }}
            loading="lazy"
          />
        </div>

        {/* Hover feature panel */}
        <div
          className="absolute inset-0 overflow-y-auto px-4 py-3"
          style={{
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.3s',
            pointerEvents: hovered ? 'auto' : 'none',
          }}
        >
          <div className="text-[10px] font-heading font-bold uppercase tracking-wider mb-1.5" style={{ color: service.accentColor }}>
            {service.id === 'pet-training' ? 'Training Plans' : 'Benefits'}
          </div>
          <ul className="space-y-1">
            {service.features.slice(0, 6).map((f) => (
              <li key={f} className="flex items-start gap-1.5 font-body text-[11px]" style={{ color: '#2A1A24' }}>
                {PAW(service.accentColor, 8)}
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom action bar */}
      <div className="flex items-center justify-between px-4 py-3 flex-shrink-0 gap-2" style={{ borderTop: '1px solid #F3D5E8' }}>
        <a
          href="tel:+91-88799-52169"
          className="flex items-center gap-1 font-heading font-bold text-[11px] px-3 py-2 rounded-full transition-all hover:opacity-90"
          style={{ background: '#FDEEF6', color: service.accentColor, border: `1px solid ${service.accentColor}30` }}
          onClick={e => e.stopPropagation()}
        >
          <Phone size={10} /> Call
        </a>
        <a
          href={service.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 font-heading font-bold text-[11px] px-3 py-2 rounded-full transition-all hover:opacity-90"
          style={{ background: '#22c55e', color: '#fff' }}
          onClick={e => e.stopPropagation()}
        >
          <MessageCircle size={10} /> WhatsApp
        </a>
      </div>
    </div>
  );
}

/* ─── Main Section (Home page) ────────────────────────────────── */
export default function ServicesSection() {
  useScrollReveal();

  return (
    <section id="services" className="py-12 lg:py-20 relative overflow-hidden z-10">
      <div className="container-site">
        {/* Heading */}
        <div className="text-center mb-8 reveal">
          <div className="flex items-center justify-center gap-4 mb-2">
            <div style={{ height: 2, width: 28, background: '#C62E7B', borderRadius: 2 }} />
            <h2 className="font-heading font-black" style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2rem)', color: '#C62E7B' }}>
              Our Services
            </h2>
            <div style={{ height: 2, width: 28, background: '#C62E7B', borderRadius: 2 }} />
          </div>
          <p className="font-body text-xs" style={{ color: '#5B6B78' }}>
            Hover a card to see benefits · Click Details to explore
          </p>
        </div>

        {/* 4-column card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <HomeServiceCard key={s.id} service={s} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 reveal">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-heading font-bold px-8 py-3.5 rounded-full transition-all hover:opacity-90 hover:gap-3"
            style={{ background: '#C62E7B', color: '#fff', fontSize: '15px' }}
          >
            Explore All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Decorative paws */}
      <div className="absolute top-1/4 left-[3%] opacity-10 animate-float-slow pointer-events-none text-[#FCC244]">
        <svg width="55" height="55" viewBox="0 0 100 100" fill="currentColor" transform="rotate(-15)">
          <path d="M50 45 C 30 45, 15 65, 20 85 C 25 105, 75 105, 80 85 C 85 65, 70 45, 50 45 Z" />
          <circle cx="25" cy="35" r="12" /><circle cx="40" cy="15" r="12" /><circle cx="60" cy="15" r="12" /><circle cx="75" cy="35" r="12" />
        </svg>
      </div>
      <div className="absolute bottom-1/4 right-[3%] opacity-10 animate-float pointer-events-none text-[#FCC244]">
        <svg width="45" height="45" viewBox="0 0 100 100" fill="currentColor" transform="rotate(25)">
          <path d="M50 45 C 30 45, 15 65, 20 85 C 25 105, 75 105, 80 85 C 85 65, 70 45, 50 45 Z" />
          <circle cx="25" cy="35" r="12" /><circle cx="40" cy="15" r="12" /><circle cx="60" cy="15" r="12" /><circle cx="75" cy="35" r="12" />
        </svg>
      </div>
    </section>
  );
}
