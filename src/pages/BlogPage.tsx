import { Link } from 'react-router-dom';
import CTABanner from '../components/CTABanner';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'Why Positive Reinforcement is the Only Dog Training Method We Use — And Why It Works',
    excerpt: 'Mumbai dog trainer Harshad breaks down why reward-based training isn\'t just kinder — it\'s scientifically proven to produce better, longer-lasting results than punishment-based methods.',
    img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80',
    tag: 'Training Tips',
    date: 'Aug 20, 2026',
    readTime: '6 min read',
    featured: true,
  },
  {
    id: 2,
    title: 'The 5 Most Common Dog Behaviour Problems in Mumbai — And How to Fix Them',
    excerpt: 'Excessive barking, jumping on guests, pulling on the lead, resource guarding, and separation anxiety. Here\'s what causes each one — and how our trainers address them.',
    img: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=600&q=80',
    tag: 'Behaviour',
    date: 'Aug 12, 2026',
    readTime: '8 min read',
    featured: false,
  },
  {
    id: 3,
    title: 'Puppy\'s First Month in Mumbai: A Week-by-Week Socialisation Guide',
    excerpt: 'The first 16 weeks of a puppy\'s life are critical. Here\'s how to introduce your new pup to the sounds, sights, and experiences of Mumbai life — safely and positively.',
    img: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=600&q=80',
    tag: 'Puppy Care',
    date: 'Aug 5, 2026',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 4,
    title: 'Is Your Dog Anxious? 10 Signs Pet Parents Often Miss',
    excerpt: 'Anxiety in dogs doesn\'t always look like shaking and hiding. Yawning at the vet, lip-licking around strangers, or excessive panting at home can all be stress signals.',
    img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80',
    tag: 'Behaviour',
    date: 'Jul 28, 2026',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 5,
    title: 'A Rescue Dog\'s Journey: From "Too Anxious to Touch" to Loving Every Walk',
    excerpt: 'Bruno came to us flinching at raised hands and refusing to walk on a leash. Three months later, he\'s the calmest dog at the park. Here\'s what changed — and how.',
    img: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=600&q=80',
    tag: 'Success Stories',
    date: 'Jul 20, 2026',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 6,
    title: 'How to Choose the Right Dog Trainer in Mumbai: 7 Questions to Ask Before You Book',
    excerpt: 'Not all dog trainers are created equal. Before you hand your dog over to anyone, here are the seven questions that separate great trainers from everyone else.',
    img: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=600&q=80',
    tag: 'Training Tips',
    date: 'Jul 12, 2026',
    readTime: '5 min read',
    featured: false,
  },
];

const tagColors: Record<string, { bg: string; text: string }> = {
  'Training Tips': { bg: '#FDEEF6', text: '#C62E7B' },
  'Puppy Care': { bg: '#FDC2CE', text: '#C62E7B' },
  'Behaviour': { bg: '#FCD585', text: '#92400E' },
  'Success Stories': { bg: '#F9C8E6', text: '#C62E7B' },
  'Care Tips': { bg: '#FDEEF6', text: '#C62E7B' },
};

export default function BlogPage() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div style={{ background: '#FDF9F6' }}>
      {/* Hero */}
      <section className="py-16 lg:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FDEEF6 0%, #FDF9F6 60%, #FFF5F0 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.3 }}>
          {[...Array(6)].map((_, i) => (
            <svg key={i} width="30" height="30" viewBox="0 0 100 100" fill="#C62E7B" opacity="0.15"
              style={{ position: 'absolute', top: `${15 + i * 15}%`, left: `${5 + i * 16}%` }}>
              <path d="M50 45 C 30 45, 15 65, 20 85 C 25 105, 75 105, 80 85 C 85 65, 70 45, 50 45 Z" />
              <circle cx="25" cy="35" r="12" /><circle cx="40" cy="15" r="12" />
              <circle cx="60" cy="15" r="12" /><circle cx="75" cy="35" r="12" />
            </svg>
          ))}
        </div>
        <div className="container-site text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full" style={{ background: '#FCC244', border: '1px solid #E5A922' }}>
            <span className="text-sm">✍️</span>
            <span className="font-body text-xs font-semibold uppercase tracking-widest" style={{ color: '#2A1A24' }}>Our Blog</span>
          </div>
          <h1 className="font-heading font-black leading-tight mb-5" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', color: '#C62E7B' }}>
            Pet Care <span style={{ color: '#FCC244' }}>Tips & Stories</span>
          </h1>
          <p className="font-body max-w-2xl mx-auto text-base leading-relaxed" style={{ color: '#6B4A58' }}>
            Expert advice, training insights, and real success stories from Mumbai's happiest pet community.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pt-12 pb-6">
        <div className="container-site">
          <div className="mb-6 flex items-center gap-3">
            <div style={{ height: 2, width: 24, background: '#C62E7B', borderRadius: 2 }} />
            <span className="font-heading font-bold text-sm uppercase tracking-widest" style={{ color: '#C62E7B' }}>Featured Post</span>
          </div>
          <article
            className="rounded-3xl overflow-hidden group cursor-pointer flex flex-col lg:flex-row"
            style={{ border: '1.5px solid #F3D5E8', boxShadow: '0 8px 40px rgba(198,46,123,0.08)', background: '#fff' }}
          >
            <div className="lg:w-[55%] aspect-[16/9] lg:aspect-auto overflow-hidden relative min-h-[280px]">
              <img
                src={featured.img}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(198,46,123,0.15) 0%, transparent 60%)' }} />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 font-heading font-semibold text-[11px] uppercase tracking-wide px-3 py-1.5 rounded-full"
                  style={{ background: tagColors[featured.tag]?.bg || '#FDEEF6', color: tagColors[featured.tag]?.text || '#C62E7B' }}>
                  <Tag size={10} />
                  {featured.tag}
                </span>
              </div>
            </div>
            <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center gap-1.5 font-body text-xs" style={{ color: '#6B4A58' }}>
                  <Calendar size={12} style={{ color: '#C62E7B' }} />
                  {featured.date}
                </span>
                <span className="flex items-center gap-1.5 font-body text-xs" style={{ color: '#6B4A58' }}>
                  <Clock size={12} style={{ color: '#C62E7B' }} />
                  {featured.readTime}
                </span>
              </div>
              <h2 className="font-heading font-black mb-4 leading-snug group-hover:text-[#C62E7B] transition-colors" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: '#2A1A24' }}>
                {featured.title}
              </h2>
              <p className="font-body text-sm leading-relaxed mb-6" style={{ color: '#6B4A58' }}>
                {featured.excerpt}
              </p>
              <span className="flex items-center gap-2 font-heading font-bold text-sm w-fit group/btn" style={{ color: '#C62E7B' }}>
                Read Full Article
                <ArrowRight size={14} className="transition-transform duration-200 group-hover/btn:translate-x-1.5" />
              </span>
            </div>
          </article>
        </div>
      </section>

      {/* Rest of posts */}
      <section className="py-10 lg:py-16">
        <div className="container-site">
          <div className="mb-8 flex items-center gap-3">
            <div style={{ height: 2, width: 24, background: '#C62E7B', borderRadius: 2 }} />
            <span className="font-heading font-bold text-sm uppercase tracking-widest" style={{ color: '#C62E7B' }}>More Articles</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {rest.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-3xl overflow-hidden group cursor-pointer flex flex-col transition-all duration-300 hover:-translate-y-2"
                style={{ border: '1.5px solid #F3D5E8', boxShadow: '0 4px 20px rgba(198,46,123,0.04)' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(198,46,123,0.14)';
                  (e.currentTarget as HTMLElement).style.borderColor = '#C62E7B';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(198,46,123,0.04)';
                  (e.currentTarget as HTMLElement).style.borderColor = '#F3D5E8';
                }}
              >
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 font-heading font-semibold text-[10px] uppercase tracking-wide px-2.5 py-1 rounded-full"
                      style={{ background: tagColors[post.tag]?.bg || '#FDEEF6', color: tagColors[post.tag]?.text || '#C62E7B' }}>
                      <Tag size={9} />
                      {post.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="flex items-center gap-1 font-body text-xs" style={{ color: '#6B4A58' }}>
                      <Calendar size={11} style={{ color: '#C62E7B' }} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1 font-body text-xs" style={{ color: '#6B4A58' }}>
                      <Clock size={11} style={{ color: '#C62E7B' }} />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-heading font-bold text-base mb-3 leading-snug group-hover:text-[#C62E7B] transition-colors flex-1" style={{ color: '#2A1A24' }}>
                    {post.title}
                  </h2>
                  <p className="font-body text-sm leading-relaxed mb-5" style={{ color: '#6B4A58' }}>
                    {post.excerpt}
                  </p>
                  <span className="flex items-center gap-2 font-heading font-bold text-sm group/btn w-fit" style={{ color: '#C62E7B' }}>
                    Read More
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover/btn:translate-x-1.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="font-body text-sm mb-6" style={{ color: '#6B4A58' }}>Want expert pet care tips delivered to your inbox?</p>
            <Link to="/contact" className="btn-pink inline-flex">
              Subscribe to Our Newsletter
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
