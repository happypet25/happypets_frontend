import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';

function PawSVG({ size = 14, color = 'rgba(244,167,193,0.5)' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill={color}>
      <ellipse cx="50" cy="65" rx="22" ry="18" />
      <ellipse cx="24" cy="42" rx="10" ry="13" />
      <ellipse cx="44" cy="32" rx="10" ry="13" />
      <ellipse cx="64" cy="32" rx="10" ry="13" />
      <ellipse cx="76" cy="42" rx="10" ry="13" />
    </svg>
  );
}

function IconFacebook() {
  return <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
}
function IconInstagram() {
  return <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>;
}
function IconWhatsApp() {
  return <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.19-.011-.38-.011-.57-.011-.19 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" /></svg>;
}
function IconPin() {
  return <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>;
}

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Team', href: '/team' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];
const serviceLinks = [
  'Pet Training', 'Pet Walking', 'Pet Grooming', 'Daycare & Boarding',
];
const helpLinks = [
  { label: 'FAQs', href: '/contact' },
  { label: 'Dog Care Tips', href: '/blog' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
];

export default function Footer() {
  return (
    <footer id="footer" className="relative" style={{ background: '#6B0C42' }}>
      <div className="container-site pt-20 pb-12 lg:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-6 group">
                <div className="w-32 h-32 bg-white rounded-full p-3 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-md">
                  <img src="/logo.png" alt="Happy Pet Training" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="font-heading font-black text-base tracking-tight text-white">HAPPY PET</div>
                  <div className="font-heading font-black text-base tracking-tight text-white">TRAINING</div>
                  <div className="font-body text-[10px] tracking-widest uppercase mt-0.5" style={{ color: '#FCC244' }}>Positive Training Happy Tails</div>
                </div>
              </Link>
              <p className="font-body text-sm leading-relaxed mb-6 max-w-[240px]" style={{ color: 'rgba(255,220,240,0.8)' }}>
                Professional dog training in Mumbai built on positive reinforcement, trust, and a genuine love for animals.
              </p>
              <div className="flex items-center gap-3">
                {[
                  { Icon: IconFacebook, href: 'https://www.facebook.com/HappyPetTrainingOfficial' },
                  { Icon: IconInstagram, href: 'https://www.instagram.com/happy_pet_training/' },
                  { Icon: IconWhatsApp, href: 'https://wa.me/918879952169' },
                  { Icon: IconPin, href: '#' },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{ border: '1.5px solid rgba(255,200,230,0.3)', color: 'rgba(255,220,240,0.7)' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.6)'; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.1)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,220,240,0.7)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,200,230,0.3)'; (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}
                  >
                    <div style={{ transform: 'scale(1.2)' }}>
                      <Icon />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-5" style={{ color: '#FCC244' }}>Quick Links</h4>
              <ul className="flex flex-col gap-3">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.href}
                      className="font-body text-sm flex items-center gap-2 transition-colors duration-200"
                      style={{ color: 'rgba(255,220,240,0.75)' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#B3C6EA')}
                    >
                      <PawSVG size={12} color="rgba(255,180,220,0.6)" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-5" style={{ color: '#FCC244' }}>Services</h4>
              <ul className="flex flex-col gap-3 mb-8">
                {serviceLinks.map((s) => (
                  <li key={s}>
                    <Link
                      to="/services"
                      className="font-body text-sm flex items-center gap-2 transition-colors duration-200"
                      style={{ color: 'rgba(255,220,240,0.75)' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#B3C6EA')}
                    >
                      <PawSVG size={12} color="rgba(255,180,220,0.6)" />
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4" style={{ color: '#FCC244' }}>Helpful Links</h4>
              <ul className="flex flex-col gap-3">
                {helpLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.href}
                      className="font-body text-sm flex items-center gap-2 transition-colors duration-200"
                      style={{ color: 'rgba(255,220,240,0.75)' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#B3C6EA')}
                    >
                      <PawSVG size={12} color="rgba(255,180,220,0.6)" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-5" style={{ color: '#FCC244' }}>Contact Us</h4>
              <div className="flex flex-col gap-4 mb-8">
                {[
                  { Icon: Phone, text: '+91 88799 52169 / +91 88799 51612', href: 'tel:+91-88799-52169' },
                  { Icon: Mail, text: 'hello@happypettraining.com', href: 'mailto:hello@happypettraining.com' },
                  { Icon: MapPin, text: 'Mumbai, Maharashtra, India', href: '#' },
                ].map(({ Icon, text, href }) => (
                  <a
                    key={text}
                    href={href}
                    className="flex items-center gap-3 transition-colors duration-200"
                    style={{ color: 'rgba(255,220,240,0.75)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#B3C6EA')}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.1)' }}>
                      <Icon size={18} style={{ color: '#FCC244' }} />
                    </div>
                    <span className="font-body text-sm leading-relaxed">{text}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-5" style={{ color: '#FCC244' }}>Opening Hours</h4>
              <ul className="flex flex-col gap-3">
                {[
                  { day: 'Monday', time: '9.00AM - 9.00PM' },
                  { day: 'Tuesday', time: '9.00AM - 9.00PM' },
                  { day: 'Wednesday', time: '9.00AM - 9.00PM' },
                  { day: 'Thursday', time: '9.00AM - 9.00PM' },
                  { day: 'Friday', time: '9.00AM - 9.00PM' },
                  { day: 'Saturday', time: '9.00AM - 9.00PM' },
                  { day: 'Sunday', time: '9.00AM - 9.00PM' },
                ].map((item) => (
                  <li key={item.day} className="flex items-center justify-between font-body text-sm" style={{ color: 'rgba(255,220,240,0.8)' }}>
                    <span>{item.day}</span>
                    <span>{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,200,230,0.2)' }}>
          <div className="container-site py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2" style={{ color: '#B3C6EA' }}>
              <PawSVG size={14} color="rgba(255,180,220,0.6)" />
              <span className="font-body text-sm">© {new Date().getFullYear()} Happy Pet Training. All Rights Reserved.</span>
            </div>
            <span className="font-body text-sm flex items-center gap-1" style={{ color: '#B3C6EA' }}>
              Made with <Heart size={12} style={{ color: '#FCC244', fill: '#E6567D', margin: '0 2px' }} /> for Happy Pets
              <PawSVG size={14} color="rgba(255,180,220,0.6)" />
            </span>
          </div>
        </div>
    </footer>
  );
}
