import { useRef, useState, useCallback, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

export interface VideoData {
  id: string;
  src: string;
  label: string;
  sub: string;
  stars: number;
  cardBg: string;
  pinColor: string;
}


const VIDEOS: VideoData[] = [
  {
    id: 'review-2',
    src: 'https://jdlch2zg7mcuqsny.public.blob.vercel-storage.com/review%20video%20-12%20%281%29.mp4',
    label: 'Verified Review',
    sub: 'Thane',
    stars: 5,
    cardBg: 'linear-gradient(145deg, #7B3F00 0%, #D97706 70%)',
    pinColor: '#C62E7B',
  },
  {
    id: 'review-3',
    src: 'https://jdlch2zg7mcuqsny.public.blob.vercel-storage.com/review-video-.mp4',
    label: 'Real Customer',
    sub: 'Navi Mumbai',
    stars: 5,
    cardBg: 'linear-gradient(145deg, #C62E7B 0%, #C62E7B 70%)',
    pinColor: '#FCC244',
  },
  {
    id: 'review-4',
    src: 'https://jdlch2zg7mcuqsny.public.blob.vercel-storage.com/1009%20%281%29.mp4',
    label: 'Verified Review',
    sub: 'Mumbai',
    stars: 5,
    cardBg: 'linear-gradient(145deg, #7B3F00 0%, #D97706 70%)',
    pinColor: '#C62E7B',
  },
  {
    id: 'review-5',
    src: 'https://jdlch2zg7mcuqsny.public.blob.vercel-storage.com/change%20done%20review%20video%202.mp4',
    label: 'Real Customer',
    sub: 'Mumbai',
    stars: 5,
    cardBg: 'linear-gradient(145deg, #C62E7B 0%, #C62E7B 70%)',
    pinColor: '#FCC244',
  },
  {
    id: 'review-6',
    src: 'https://jdlch2zg7mcuqsny.public.blob.vercel-storage.com/review%20video%20%282%29-1.mp4',
    label: 'Verified Review',
    sub: 'Thane',
    stars: 5,
    cardBg: 'linear-gradient(145deg, #7B3F00 0%, #D97706 70%)',
    pinColor: '#C62E7B',
  },
  {
    id: 'review-7',
    src: 'https://jdlch2zg7mcuqsny.public.blob.vercel-storage.com/review%20video%20%284%292.mp4',
    label: 'Real Customer',
    sub: 'Navi Mumbai',
    stars: 5,
    cardBg: 'linear-gradient(145deg, #C62E7B 0%, #C62E7B 70%)',
    pinColor: '#FCC244',
  },
];


/* ── Hanging Bone above card ── */
export function HangingBone({ color = '#FCC244' }: { color?: string }) {
  return (
    <div className="flex flex-col items-center" style={{ userSelect: 'none', pointerEvents: 'none' }}>
      {/* Bone SVG — 1.5x */}
      <svg width="78" height="33" viewBox="0 0 100 40" fill={color} style={{ filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.22))' }}>
        <rect x="28" y="14" width="44" height="12" rx="4" />
        <circle cx="22" cy="12" r="9" />
        <circle cx="22" cy="28" r="9" />
        <circle cx="78" cy="12" r="9" />
        <circle cx="78" cy="28" r="9" />
      </svg>
      {/* Hanging string */}
      <div style={{ width: 2.5, height: 27, background: `${color}99`, borderRadius: 2 }} />
    </div>
  );
}

/* ── Corner Pin ── */
export function Pin({ pos }: { pos: 'tl' | 'tr' | 'bl' | 'br' }) {
  const p: Record<string, React.CSSProperties> = {
    tl: { top: -7, left: -7 },
    tr: { top: -7, right: -7 },
    bl: { bottom: -7, left: -7 },
    br: { bottom: -7, right: -7 },
  };
  return (
    <div style={{
      position: 'absolute', ...p[pos],
      width: 14, height: 14, borderRadius: '50%',
      background: '#FCC244', border: '2.5px solid rgba(0,0,0,0.25)',
      boxShadow: '0 2px 6px rgba(0,0,0,0.22)', zIndex: 10,
    }} />
  );
}

/* ── Individual Video Card ── */
export interface VideoCardProps {
  video: VideoData;
  isActive: boolean;
  onActivate: (id: string) => void;
}

export function VideoCard({ video, isActive, onActivate }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || isActive) return;
    el.pause(); el.muted = true;
    setIsPlaying(false); setIsMuted(true);
  }, [isActive]);

  const handleLoaded = useCallback(() => {
    setLoaded(true);
    const el = videoRef.current;
    if (!el) return;
    el.muted = true;
    el.play().catch(() => {});
    setIsPlaying(true);
  }, []);

  const handleClick = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;
    if (!isActive) {
      onActivate(video.id);
      el.muted = false; setIsMuted(false);
      el.play().catch(() => {}); setIsPlaying(true);
    } else {
      if (el.paused) { el.play().catch(() => {}); setIsPlaying(true); }
      else { el.pause(); setIsPlaying(false); }
    }
  }, [isActive, onActivate, video.id]);

  const toggleMute = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const el = videoRef.current;
    if (!el) return;
    if (!isActive) onActivate(video.id);
    el.muted = !el.muted;
    setIsMuted(el.muted);
  }, [isActive, onActivate, video.id]);

  const togglePlay = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const el = videoRef.current;
    if (!el) return;
    if (!isActive) { onActivate(video.id); el.muted = false; setIsMuted(false); }
    if (el.paused) { el.play().catch(() => {}); setIsPlaying(true); }
    else { el.pause(); setIsPlaying(false); }
  }, [isActive, onActivate, video.id]);

  return (
    /* Outer wrapper: bone + string on top + the card below */
    <div 
      className="flex flex-col items-center"
      style={{
        transition: 'all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
        transform: isActive ? 'translateY(-12px) scale(1.05)' : 'translateY(0) scale(0.92)',
        opacity: isActive ? 1 : 0.6,
      }}
    >

      {/* Hanging Bone above this card */}
      <HangingBone color={video.pinColor} />

      {/* Hanging Card (board style with gradient + corner pins) */}
      <div
        className="relative w-full"
        style={{
          background: video.cardBg,
          borderRadius: 28,
          padding: 16,
          boxShadow: isActive
            ? '0 0 0 4px #FCC244, 0 20px 60px rgba(0,0,0,0.38)'
            : '0 10px 30px rgba(0,0,0,0.15)',
          transition: 'all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
          cursor: 'pointer',
        }}
        onClick={handleClick}
      >
        {/* Corner pins */}
        <Pin pos="tl" /><Pin pos="tr" /><Pin pos="bl" /><Pin pos="br" />

        {/* Subtle paw watermark inside card */}
        <div className="absolute bottom-10 left-2 pointer-events-none opacity-10">
          <svg viewBox="0 0 100 100" fill="#fff" width={32} height={32}>
            <ellipse cx="50" cy="65" rx="26" ry="22" />
            <circle cx="18" cy="40" r="11" /><circle cx="36" cy="22" r="11" />
            <circle cx="64" cy="22" r="11" /><circle cx="82" cy="40" r="11" />
          </svg>
        </div>

        {/* Inner white video container */}
        <div
          style={{
            borderRadius: 18,
            overflow: 'hidden',
            position: 'relative',
            aspectRatio: '9/16',
            background: '#1a0a14',
          }}
        >
          <video
            ref={videoRef}
            src={video.src}
            preload="metadata"
            playsInline
            loop
            muted
            onLoadedMetadata={handleLoaded}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Loading spinner */}
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center" style={{ background: '#2a0e1e' }}>
              <div className="w-7 h-7 rounded-full border-2 border-[#C62E7B] border-t-transparent animate-spin" />
            </div>
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(20,5,15,0.80) 0%, transparent 45%)' }} />

          {/* Active badge */}
          {isActive && (
            <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-0.5 rounded-full" style={{ background: '#C62E7B' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="font-heading font-bold text-[9px] text-white uppercase tracking-wide">Live</span>
            </div>
          )}

          {/* Mute btn */}
          <button onClick={toggleMute} className="absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(4px)' }}>
            {isMuted ? <VolumeX size={11} color="#fff" /> : <Volume2 size={11} color="#fff" />}
          </button>

          {/* Bottom controls */}
          <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between">
            <div>
              <div className="flex gap-0.5">{[...Array(video.stars)].map((_, i) => <span key={i} style={{ color: '#FCC244', fontSize: 8 }}>★</span>)}</div>
            </div>
            <button onClick={togglePlay} className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(4px)' }}>
              {isPlaying ? <Pause size={10} color="#fff" /> : <Play size={10} color="#fff" style={{ marginLeft: 1 }} />}
            </button>
          </div>

          {/* Tap-for-sound hover */}
          {!isActive && loaded && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200" style={{ pointerEvents: 'none' }}>
              <div className="flex flex-col items-center gap-1">
                <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: 'rgba(198,46,123,0.9)' }}>
                  <Volume2 size={16} color="#fff" />
                </div>
                <span className="font-heading font-bold text-[10px] text-white drop-shadow">Tap for sound</span>
              </div>
            </div>
          )}
        </div>

        {/* Label row inside card below video */}
        <div className="mt-2 px-1 pb-1 flex items-center justify-between">
          <div>
            <div className="font-heading font-bold text-xs text-white leading-tight">{video.label}</div>
            <div className="font-body text-[10px] text-white/60">{video.sub}</div>
          </div>
          <div className="font-heading font-bold text-[10px] text-white/60 uppercase tracking-wider">Review</div>
        </div>
      </div>
    </div>
  );
}

/* ── Section ── */
export default function VideoReviews() {
  useScrollReveal();
  const [activeId, setActiveId] = useState<string | null>(VIDEOS[0].id);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleActivate = useCallback((id: string) => {
    setActiveId(id);
    // Smooth scroll the clicked card into the center
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

    // Trigger when a card enters the middle 20% of the container
    const options = {
      root: container,
      rootMargin: '0px -40% 0px -40%', 
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('data-id');
          if (id) setActiveId(id);
        }
      });
    }, options);

    const cards = container.querySelectorAll('.video-card-wrapper');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-10 lg:py-16 relative overflow-visible z-10 w-full">
      <div className="container-site">
        {/* Heading */}
        <div className="text-center mb-6 lg:mb-10 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4" style={{ background: '#FCC244', border: '1px solid #E5A922' }}>
            <svg viewBox="0 0 100 100" fill="#2A1A24" width={12} height={12}>
              <ellipse cx="50" cy="65" rx="26" ry="22" />
              <circle cx="18" cy="40" r="11" /><circle cx="36" cy="22" r="11" />
              <circle cx="64" cy="22" r="11" /><circle cx="82" cy="40" r="11" />
            </svg>
            <span className="font-body text-xs font-semibold uppercase tracking-widest" style={{ color: '#2A1A24' }}>Real Reviews</span>
          </div>
          <h2 className="font-heading font-black leading-tight mb-2" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', color: '#2A1A24' }}>
            What Our <span style={{ color: '#C62E7B' }}>Happy Pet Parents</span> Say
          </h2>
          <p className="font-body text-sm" style={{ color: '#6B4A58' }}>
            Real stories · no scripts · just results.{' '}
            <span style={{ color: '#C62E7B' }}>Tap any video for sound 🔊</span>
          </p>
        </div>
      </div>

      {/* FULL WIDTH SLIDER */}
      <div 
        ref={sliderRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-3 sm:gap-10 w-full reveal pb-16 pt-8 hide-scrollbar" 
        style={{ 
          alignItems: 'center',
          // Padding carefully calculated to perfectly center the first and last cards
          paddingLeft: 'calc(50vw - min(30vw, 160px))', 
          paddingRight: 'calc(50vw - min(30vw, 160px))'
        }}
      >
        {VIDEOS.map((v) => (
          <div 
            key={v.id} 
            data-id={v.id}
            className="video-card-wrapper shrink-0 snap-center transition-all duration-500 ease-out"
            style={{ width: 'min(60vw, 320px)' }}
          >
            <VideoCard video={v} isActive={activeId === v.id} onActivate={handleActivate} />
          </div>
        ))}
      </div>

      <div className="container-site">
        {/* Bottom note */}
        <div className="text-center mt-2 reveal">
          <p className="font-body text-xs" style={{ color: '#9B8A94' }}>
            ★★★★★ 5.0 avg rating · 200+ verified reviews · Mumbai, Thane, Navi Mumbai
          </p>
        </div>
      </div>
    </section>
  );
}
