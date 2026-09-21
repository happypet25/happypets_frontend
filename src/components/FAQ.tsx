import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const faqs = [
  {
    q: 'What training methods does Happy Pet Training use?',
    a: 'We use 100% positive reinforcement — rewarding desired behaviours with treats, praise, and play rather than punishment or fear. This approach builds genuine understanding and trust between you and your dog, creating lasting behavioural change. No choke chains, no prong collars, no force. Ever.',
  },
  {
    q: 'How many sessions does my dog need?',
    a: 'Every dog is different. Most dogs see significant improvement within 4–8 sessions. The number depends on your dog\'s age, breed, temperament, and the specific behaviours being addressed. After your free demo, we\'ll give you an honest assessment of what to expect and how long it will take.',
  },
  {
    q: 'Do you train dogs at home or at a centre?',
    a: 'We come to you. Our in-home training sessions are especially effective because dogs learn fastest in the environment where they actually live. We cover all areas across Mumbai, Thane, and Navi Mumbai.',
  },
  {
    q: 'What is included in the free demo session?',
    a: 'The free demo includes a 30–45 minute session at your home: a behavioural assessment of your dog, an honest conversation about the challenges you\'re facing, and a customised training plan. There\'s no pressure to continue — we just want to show you what\'s possible.',
  },
  {
    q: 'My dog is a rescue with a difficult past. Can you still help?',
    a: 'Absolutely — and this is actually one of our specialties. Many of the dogs we\'ve worked with came to us described as "too anxious," "too aggressive," or "too far gone." With patience, positive reinforcement, and the right approach, most dogs make remarkable progress. We\'ve never given up on a dog.',
  },
  {
    q: 'Do you train all breeds and ages?',
    a: 'Yes. We work with all breeds — from small companion dogs to large working breeds — and all ages, including puppies as young as 8 weeks and senior dogs. Each program is completely tailored to the individual dog.',
  },
  {
    q: 'Should I be present during training sessions?',
    a: 'Yes — and we strongly encourage it. The most important part of our training isn\'t just teaching your dog; it\'s teaching you how to communicate with your dog. When you understand the techniques, you can reinforce them every single day, which is what creates lasting results.',
  },
  {
    q: 'What areas of Mumbai do you cover?',
    a: 'We currently serve Mumbai, Thane, and Navi Mumbai. If you\'re unsure whether we cover your specific area, just give us a call or send a message — we\'ll do our best to accommodate you.',
  },
  {
    q: 'How is Happy Pet Training different from other trainers?',
    a: 'Three things set us apart: 15 years of combined experience, a strict no-punishment policy (we only use positive reinforcement), and a genuine commitment to the relationship — not just the results. We treat every dog, and every owner, like family.',
  },
  {
    q: 'What if I don\'t see results?',
    a: 'We stand behind our training. If you\'re not seeing improvement, we work with you to understand why and adjust the plan. We\'ve trained hundreds of dogs across Mumbai — our success speaks for itself, but we never take that for granted with any individual dog.',
  },
];

export default function FAQ() {
  useScrollReveal();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 lg:py-24" style={{ background: '#FFF5FB' }}>
      <div className="container-site" style={{ maxWidth: 780 }}>
        <div className="text-center mb-12 reveal">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div style={{ height: 2, width: 30, background: '#C62E7B', borderRadius: 2 }} />
            <h2 className="font-heading font-black" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#C62E7B' }}>Frequently Asked Questions</h2>
            <div style={{ height: 2, width: 30, background: '#C62E7B', borderRadius: 2 }} />
          </div>
          <p className="font-body text-sm" style={{ color: '#6B4A58' }}>Everything you need to know about our pet training services in Mumbai.</p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden reveal transition-shadow duration-300"
              style={{
                border: `1.5px solid ${open === i ? '#C62E7B' : '#F3D5E8'}`,
                boxShadow: open === i ? '0 4px 20px rgba(198,46,123,0.12)' : 'none',
                transitionDelay: `${i * 0.04}s`,
                background: '#fff',
              }}
            >
              <button
                id={`faq-${i}`}
                className="w-full flex items-center justify-between gap-4 p-5 text-left transition-colors duration-200"
                style={{ background: open === i ? '#FDEEF6' : '#fff' }}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-heading font-bold text-sm pr-2" style={{ color: '#2A1A24' }}>{faq.q}</span>
                <ChevronDown
                  size={18}
                  className="flex-shrink-0 transition-transform duration-300"
                  style={{ color: '#C62E7B', transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? 300 : 0 }}
              >
                <div className="px-5 pb-5 pt-0">
                  <div className="mb-4" style={{ height: 1, background: '#F3D5E8' }} />
                  <p className="font-body text-sm leading-relaxed" style={{ color: '#6B4A58' }}>{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center reveal">
          <p className="font-body text-sm mb-4" style={{ color: '#6B4A58' }}>Still have questions? We'd love to chat.</p>
          <a
            href="tel:+91-88799-52169"
            className="btn-pink inline-flex"
          >
            📞 Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
