import { useState, useEffect, useCallback, useRef } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import CTABanner from '../components/CTABanner';
import { VideoCard, VideoData } from '../components/VideoReviews';

/* ── All real gallery images from public/gallery ── */
const allGalleryImages = [
  { src: '/gallery/10.webp', alt: 'Happy Pet Training Session', tag: 'Training' },
  { src: '/gallery/12.webp', alt: 'Dog Training Mumbai', tag: 'Training' },
  { src: '/gallery/13.webp', alt: 'Pet Training', tag: 'Training' },
  { src: '/gallery/14.webp', alt: 'Dog Grooming', tag: 'Grooming' },
  { src: '/gallery/15.webp', alt: 'Happy Dog', tag: 'Training' },
  { src: '/gallery/16.webp', alt: 'Dog Walking', tag: 'Walking' },
  { src: '/gallery/18.webp', alt: 'Training Session', tag: 'Training' },
  { src: '/gallery/19.webp', alt: 'Pet Daycare', tag: 'Daycare' },
  { src: '/gallery/20.webp', alt: 'Dog Training', tag: 'Training' },
  { src: '/gallery/21.webp', alt: 'Grooming Session', tag: 'Grooming' },
  { src: '/gallery/22.webp', alt: 'Happy Pets', tag: 'Training' },
  { src: '/gallery/23.webp', alt: 'Dog Play', tag: 'Daycare' },
  { src: '/gallery/24.webp', alt: 'Pet Training Mumbai', tag: 'Training' },
  { src: '/gallery/25.webp', alt: 'Obedience Training', tag: 'Training' },
  { src: '/gallery/26.webp', alt: 'Dog Walking Service', tag: 'Walking' },
  { src: '/gallery/27.webp', alt: 'Pet Grooming', tag: 'Grooming' },
  { src: '/gallery/28.webp', alt: 'Dog Boarding', tag: 'Boarding' },
  { src: '/gallery/29.webp', alt: 'Training', tag: 'Training' },
  { src: '/gallery/30.webp', alt: 'Happy Dog', tag: 'Training' },
  { src: '/gallery/31.webp', alt: 'Dog Training', tag: 'Training' },
  { src: '/gallery/32.webp', alt: 'Grooming', tag: 'Grooming' },
  { src: '/gallery/5.webp', alt: 'Training Session', tag: 'Training' },
  { src: '/gallery/6.webp', alt: 'Dog Walking', tag: 'Walking' },
  { src: '/gallery/7.webp', alt: 'Happy Pets', tag: 'Training' },
  { src: '/gallery/9.webp', alt: 'Pet Training', tag: 'Training' },
  { src: '/gallery/1740251797102.jpg', alt: 'Training Session', tag: 'Training' },
  { src: '/gallery/1741000585244~2.jpg', alt: 'Happy Dog Training', tag: 'Training' },
  { src: '/gallery/1742813711876~3.jpg', alt: 'Dog with Trainer', tag: 'Training' },
  { src: '/gallery/1742924373684~2.jpg', alt: 'Pet Session', tag: 'Training' },
  { src: '/gallery/1749455485773~2.jpg', alt: 'Training Mumbai', tag: 'Training' },
  { src: '/gallery/1749481103286~2.jpg', alt: 'Dog Play Session', tag: 'Daycare' },
  { src: '/gallery/1749493213500~2.jpg', alt: 'Pet Grooming', tag: 'Grooming' },
  { src: '/gallery/1749493633458.jpg', alt: 'Happy Pet', tag: 'Training' },
  { src: '/gallery/1749627941650~2.jpg', alt: 'Training Class', tag: 'Training' },
  { src: '/gallery/1749687363754.jpg', alt: 'Dog Walking', tag: 'Walking' },
  { src: '/gallery/1751640895501~2.jpg', alt: 'Obedience', tag: 'Training' },
  { src: '/gallery/1751702592351~2.jpg', alt: 'Boarding', tag: 'Boarding' },
  { src: '/gallery/1752677803779.jpg', alt: 'Grooming Session', tag: 'Grooming' },
  { src: '/gallery/1753107585059 (1).jpg', alt: 'Training Session', tag: 'Training' },
  { src: '/gallery/1753260410898~2.jpg', alt: 'Happy Dog', tag: 'Training' },
  { src: '/gallery/1753261083796.jpg', alt: 'Pet Play', tag: 'Daycare' },
  { src: '/gallery/1754022345200~2.jpg', alt: 'Dog Training', tag: 'Training' },
  { src: '/gallery/1754141934802.jpg', alt: 'Training Mumbai', tag: 'Training' },
  { src: '/gallery/1754287270136.jpg', alt: 'Dog Session', tag: 'Training' },
  { src: '/gallery/1754558462160.jpg', alt: 'Happy Pet', tag: 'Training' },
  { src: '/gallery/1755860274565.jpg', alt: 'Training Class', tag: 'Training' },
  { src: '/gallery/1755860889221.jpg', alt: 'Dog Walking', tag: 'Walking' },
  { src: '/gallery/1755868782781.jpg', alt: 'Grooming', tag: 'Grooming' },
  { src: '/gallery/IMG-20251011-WA0059.jpg', alt: 'Training Session', tag: 'Training' },
  { src: '/gallery/IMG-20251028-WA0022.jpg', alt: 'Happy Dog', tag: 'Training' },
  { src: '/gallery/Untitled-design-3.webp', alt: 'Happy Pet Training', tag: 'Training' },
  { src: '/gallery/final (10).jpg', alt: 'Training', tag: 'Training' },
  { src: '/gallery/final (3)-1.jpg', alt: 'Dog Boarding', tag: 'Boarding' },
];


const PER_PAGE = 12;

const TRAINER_VIDEOS: VideoData[] = [
  {
    id: 'trainer-1',
    src: 'https://jdlch2zg7mcuqsny.public.blob.vercel-storage.com/Copy%20of%20today%20post%20%20%281%29%20%281%29.mp4',
    label: 'Expert Trainer',
    sub: 'Mumbai',
    stars: 5,
    cardBg: 'linear-gradient(145deg, #C62E7B 0%, #C62E7B 70%)',
    pinColor: '#FCC244',
  },
  {
    id: 'trainer-2',
    src: 'https://jdlch2zg7mcuqsny.public.blob.vercel-storage.com/today%20post%20%281%29.mp4',
    label: 'Training Session',
    sub: 'Mumbai',
    stars: 5,
    cardBg: 'linear-gradient(145deg, #7B3F00 0%, #D97706 70%)',
    pinColor: '#C62E7B',
  }
];

export default function GalleryPage() {

  const [lightbox, setLightbox] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(TRAINER_VIDEOS[0]?.id || null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleActivateVideo = useCallback((id: string) => {
    setActiveVideoId(id);
    const container = sliderRef.current;
    if (!container) return;
    const el = container.querySelector(`[data-id="${id}"]`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, []);

  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;

    const options = {
      root: container,
      rootMargin: '0px -40% 0px -40%', 
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('data-id');
          if (id) setActiveVideoId(id);
        }
      });
    }, options);

    const cards = container.querySelectorAll('.video-card-wrapper');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const filtered = allGalleryImages;
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  // Keyboard nav for lightbox
  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setLightbox(i => i !== null ? Math.min(i + 1, paginated.length - 1) : null);
      if (e.key === 'ArrowLeft') setLightbox(i => i !== null ? Math.max(i - 1, 0) : null);
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, paginated.length]);

  return (
    <div style={{ background: '#FDF9F6' }}>
      {/* Trainer Videos Section */}
      <section className="py-12 relative z-10">
        <div className="container-site">
          <div className="text-center mb-10 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4" style={{ background: '#FCC244', border: '1px solid #E5A922' }}>
              <span className="font-body text-xs font-semibold uppercase tracking-widest" style={{ color: '#2A1A24' }}>Our Trainer</span>
            </div>
            <h2 className="font-heading font-black text-2xl lg:text-3xl text-[#2A1A24] mb-2">Trainer <span className="text-[#C62E7B]">Videos</span></h2>
            <p className="font-body text-[#5B6B78] text-sm">Watch our expert trainers in action. <span style={{ color: '#C62E7B' }}>Tap any video for sound 🔊</span></p>
          </div>
          {/* FULL WIDTH SLIDER */}
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-3 sm:gap-10 w-full reveal pb-16 pt-8 hide-scrollbar" 
            style={{ 
              alignItems: 'center',
              paddingLeft: 'calc(50vw - min(30vw, 160px))', 
              paddingRight: 'calc(50vw - min(30vw, 160px))'
            }}
          >
            {TRAINER_VIDEOS.map((v) => (
              <div 
                key={v.id} 
                data-id={v.id}
                className="video-card-wrapper shrink-0 snap-center transition-all duration-500 ease-out"
                style={{ width: 'min(60vw, 320px)' }}
              >
                <VideoCard video={v} isActive={activeVideoId === v.id} onActivate={handleActivateVideo} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Hero */}
      <section className="py-16 lg:py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #EEF0FB 0%, #FFF0F6 100%)' }}>
        <div className="absolute inset-0 paw-bg pointer-events-none" style={{ opacity: 0.4 }} />

        {/* Right side paw decoration */}
        <div className="absolute top-8 right-8 opacity-15 pointer-events-none animate-float hidden lg:block text-[#C62E7B]">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor" transform="rotate(20)">
            <path d="M50 45 C 30 45, 15 65, 20 85 C 25 105, 75 105, 80 85 C 85 65, 70 45, 50 45 Z" />
            <circle cx="25" cy="35" r="12" /><circle cx="40" cy="15" r="12" /><circle cx="60" cy="15" r="12" /><circle cx="75" cy="35" r="12" />
          </svg>
        </div>
        {/* Right side tilted bone */}
        <div className="absolute bottom-4 right-16 opacity-15 pointer-events-none animate-float-slow hidden lg:block text-[#FCC244]" style={{ transform: 'rotate(-30deg)' }}>
          <svg width="80" height="32" viewBox="0 0 100 40" fill="currentColor">
            <rect x="28" y="14" width="44" height="12" rx="4" />
            <circle cx="22" cy="12" r="9" /><circle cx="22" cy="28" r="9" />
            <circle cx="78" cy="12" r="9" /><circle cx="78" cy="28" r="9" />
          </svg>
        </div>

        <div className="container-site text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 font-body text-xs font-bold uppercase tracking-widest"
            style={{ background: '#FCC244', color: '#2A1A24', border: '1px solid #E5A922' }}>
            📸 Our Gallery
          </div>
          <h1 className="font-heading font-black leading-tight mb-5"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#2A1A24' }}>
            Happy Pets in <span style={{ color: '#C62E7B' }}>Action</span>
          </h1>
          <p className="font-body text-base leading-relaxed max-w-xl mx-auto" style={{ color: '#5B6B78' }}>
            A glimpse into the joyful world of our training sessions, grooming, and pet adventures across Mumbai.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {[
              { num: `${filtered.length}+`, label: 'Moments Captured' },
              { num: '1000+', label: 'Pets Trained' },
              { num: '15+', label: 'Years of Joy' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <div className="font-heading font-black text-2xl" style={{ color: '#C62E7B' }}>{s.num}</div>
                <div className="font-body text-xs" style={{ color: '#5B6B78' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Gallery Grid */}
      <section className="py-12 lg:py-20">
        <div className="container-site">
          {/* Filter Tags removed */}

          {/* Results count */}
          <div className="text-center mb-6">
            <span className="font-body text-sm" style={{ color: '#5B6B78' }}>
              Showing <strong style={{ color: '#C62E7B' }}>{paginated.length}</strong> of <strong style={{ color: '#C62E7B' }}>{filtered.length}</strong> photos
            </span>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
            {paginated.map((img, i) => (
              <div
                key={`${page}-${i}`}
                className="aspect-square rounded-2xl overflow-hidden group relative cursor-pointer"
                style={{ background: '#FDEEF6' }}
                onClick={() => setLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3"
                  style={{ background: 'linear-gradient(to top, rgba(42,26,36,0.7) 0%, transparent 60%)' }}>
                  <span className="font-heading font-bold text-[10px] text-white px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(198,46,123,0.8)' }}>
                    {img.tag}
                  </span>
                  <ZoomIn size={16} className="text-white" />
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-12">
              <button
                onClick={() => { setPage(p => Math.max(1, p - 1)); window.scrollTo({ top: 400, behavior: 'smooth' }); }}
                disabled={page === 1}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-40"
                style={{ background: '#FDEEF6', color: '#C62E7B', border: '2px solid #F3D5E8' }}
              >
                <ChevronLeft size={16} />
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                  <button
                    key={p}
                    onClick={() => { setPage(p); window.scrollTo({ top: 400, behavior: 'smooth' }); }}
                    className="w-9 h-9 rounded-full font-heading font-bold text-sm transition-all duration-200"
                    style={{
                      background: p === page ? '#C62E7B' : '#fff',
                      color: p === page ? '#fff' : '#C62E7B',
                      border: `2px solid ${p === page ? '#C62E7B' : '#F3D5E8'}`,
                      boxShadow: p === page ? '0 4px 12px rgba(198,46,123,0.3)' : 'none',
                    }}
                  >
                    {p}
                  </button>
                ))}
              </div>

              <button
                onClick={() => { setPage(p => Math.min(totalPages, p + 1)); window.scrollTo({ top: 400, behavior: 'smooth' }); }}
                disabled={page === totalPages}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-40"
                style={{ background: '#C62E7B', color: '#fff' }}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}

          {/* Page indicator */}
          {totalPages > 1 && (
            <div className="text-center mt-4">
              <span className="font-body text-xs" style={{ color: '#9CA3AF' }}>
                Page {page} of {totalPages}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(4px)' }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors z-10"
            style={{ background: 'rgba(255,255,255,0.15)' }}
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X size={20} />
          </button>

          {/* Prev */}
          {lightbox > 0 && (
            <button
              className="absolute left-4 w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors z-10"
              style={{ background: 'rgba(255,255,255,0.15)' }}
              onClick={e => { e.stopPropagation(); setLightbox(l => l !== null ? l - 1 : null); }}
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {/* Next */}
          {lightbox < paginated.length - 1 && (
            <button
              className="absolute right-4 w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors z-10"
              style={{ background: 'rgba(255,255,255,0.15)' }}
              onClick={e => { e.stopPropagation(); setLightbox(l => l !== null ? l + 1 : null); }}
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          )}

          <img
            src={paginated[lightbox].src}
            alt={paginated[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
          <div className="absolute bottom-6 text-white/60 font-body text-xs">
            {lightbox + 1} / {paginated.length} — {paginated[lightbox].tag}
          </div>
        </div>
      )}

      <CTABanner />
    </div>
  );
}
