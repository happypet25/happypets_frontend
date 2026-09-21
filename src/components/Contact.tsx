import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const contactInfo = [
  { Icon: MapPin, label: 'Location', val: 'Mumbai, Thane & Navi Mumbai', bg: '#FDEEF6', iconColor: '#C62E7B' },
  { Icon: Phone, label: 'Phone 1', val: '+91 88799 52169', bg: '#FFF8EB', iconColor: '#D97706', href: 'tel:+91-88799-52169' },
  { Icon: Phone, label: 'Phone 2', val: '+91 88799 51612', bg: '#FFF8EB', iconColor: '#D97706', href: 'tel:+91-88799-51612' },
  { Icon: Mail, label: 'Email', val: 'hello@happypettraining.com', bg: '#FDEEF6', iconColor: '#C62E7B', href: 'mailto:hello@happypettraining.com' },
];

export default function Contact() {
  useScrollReveal();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      let apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      // Defensively remove trailing slash to prevent double slash (//) redirect errors on Vercel
      apiUrl = apiUrl.replace(/\/+$/, "");
      
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        e.currentTarget.reset(); // Clear the form
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 relative overflow-hidden" style={{ background: '#FDF9F6' }}>
      {/* Paw watermarks in bg */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        {[
          { top: '8%', left: '3%', size: 60, opacity: 0.06, rot: -20 },
          { top: '20%', right: '5%', size: 80, opacity: 0.05, rot: 15 },
          { top: '55%', left: '8%', size: 50, opacity: 0.07, rot: 30 },
          { bottom: '10%', right: '10%', size: 70, opacity: 0.06, rot: -10 },
          { top: '75%', left: '50%', size: 45, opacity: 0.05, rot: 45 },
        ].map((p, i) => (
          <svg key={i} width={p.size} height={p.size} viewBox="0 0 100 100" fill="#C62E7B"
            style={{ position: 'absolute', ...p, opacity: p.opacity, transform: `rotate(${p.rot}deg)` }}>
            <ellipse cx="50" cy="65" rx="22" ry="18" />
            <ellipse cx="24" cy="42" rx="10" ry="13" />
            <ellipse cx="44" cy="32" rx="10" ry="13" />
            <ellipse cx="64" cy="32" rx="10" ry="13" />
            <ellipse cx="76" cy="42" rx="10" ry="13" />
          </svg>
        ))}
      </div>

      <div className="container-site relative z-10 mx-auto px-4 sm:px-6">
        
        {/* TOP SECTION: Contact Information Grid */}
        <div className="mb-16 lg:mb-20">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 reveal-up max-w-6xl mx-auto">
            {contactInfo.map((d) => {
              const Icon = d.Icon;
              const Wrapper = d.href ? 'a' : 'div';
              return (
                <Wrapper
                  key={d.label}
                  href={d.href}
                  className={`flex flex-col items-center text-center gap-3 p-6 rounded-2xl group transition-all duration-300 ${d.href ? 'cursor-pointer hover:-translate-y-1' : 'cursor-default'}`}
                  style={{ border: '1.5px solid #F3D5E8', background: '#fff' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#C62E7B'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(198,46,123,0.1)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#F3D5E8'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110" style={{ background: d.bg }}>
                    <Icon size={24} style={{ color: d.iconColor }} />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-[11px] uppercase tracking-widest mb-1" style={{ color: '#9B6B7A' }}>{d.label}</div>
                    <div className="font-body text-[15px] font-semibold" style={{ color: '#2A1A24' }}>{d.val}</div>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>

        {/* BOTTOM SECTION: Demo Form with Image */}
        <div className="bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-[0_20px_60px_-15px_rgba(198,46,123,0.12)] reveal-up max-w-5xl mx-auto border border-[#F3D5E8]">
          
          {/* Left - Image */}
          <div className="md:w-1/2 relative h-[250px] sm:h-[350px] md:h-auto">
            <img 
              src="/contact.webp" 
              alt="Founder with golden retriever" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right - Form */}
          <div className="md:w-1/2 p-6 sm:p-10 lg:p-12 relative bg-white">
            
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-green-800 mb-2">
              Book Your Free Demo
            </h2>
            <p className="font-body text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">
              Worth <span className="line-through decoration-gray-400">₹4999</span> <span className="text-brand-magenta font-semibold ml-1">→ FREE</span> for a limited time
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              
              <div>
                <label className="block text-xs text-gray-400 mb-1.5 ml-1">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  required 
                  minLength={2}
                  maxLength={50}
                  placeholder="e.g. Priya Sharma"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-magenta focus:ring-1 focus:ring-brand-magenta transition-colors bg-white"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1.5 ml-1">Phone Number</label>
                <div className="flex gap-2">
                  <div className="w-[70px] px-2 py-3 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-gray-700 text-sm">
                    +91
                  </div>
                  <input 
                    type="tel" 
                    name="phone"
                    required 
                    pattern="[6-9]\d{9}"
                    title="Please enter a valid 10-digit Indian mobile number starting with 6-9"
                    placeholder="10-digit number"
                    onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, ''); }}
                    className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-magenta focus:ring-1 focus:ring-brand-magenta transition-colors bg-white text-sm sm:text-base"
                  />
                  <input type="hidden" name="country_code" value="+91" />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1.5 ml-1">Your City</label>
                <div className="relative">
                  <select 
                    name="city"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-magenta focus:ring-1 focus:ring-brand-magenta appearance-none bg-white transition-colors text-gray-700"
                  >
                    <option value="" disabled>Select your city</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Thane">Thane</option>
                    <option value="Navi Mumbai">Navi Mumbai</option>
                    <option value="Pune">Pune</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                </div>
              </div>

              <div>
                <input 
                  type="email" 
                  name="email"
                  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                  title="Please enter a valid email address"
                  placeholder="Email (optional)"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-magenta focus:ring-1 focus:ring-brand-magenta transition-colors bg-white placeholder:text-gray-400"
                />
              </div>

              <div>
                <input 
                  type="text" 
                  name="pincode"
                  pattern="\d{6}"
                  title="Please enter a valid 6-digit pincode"
                  placeholder="Pincode (optional)"
                  onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, ''); }}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-magenta focus:ring-1 focus:ring-brand-magenta transition-colors bg-white placeholder:text-gray-400"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#A61965] hover:bg-[#8B1055] text-white font-medium py-3.5 sm:py-4 rounded-xl mt-2 transition-all duration-300 disabled:opacity-70 shadow-md"
              >
                {isSubmitting ? 'Booking...' : 'Book Free Demo'}
              </button>

              {submitStatus === 'success' && (
                <div className="text-green-600 text-sm text-center mt-1 font-medium bg-green-50 p-2 rounded-lg border border-green-200">
                  Thank you! Your demo request has been sent. We'll contact you shortly.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="text-red-500 text-sm text-center mt-1 font-medium bg-red-50 p-2 rounded-lg border border-red-200">
                  Oops! Something went wrong. Please try again later.
                </div>
              )}

              <p className="text-center text-[11px] sm:text-xs text-gray-400 mt-2 italic">
                Monthly free demo slots filling fast. No spam, ever.
              </p>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}
