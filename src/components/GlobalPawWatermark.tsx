import { useEffect, useRef } from 'react';

function PawMark({ size = 48, rotate = 0, opacity = 0.15 }: { size?: number; rotate?: number; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ opacity, transform: `rotate(${rotate}deg)`, display: 'block' }}>
      <ellipse cx="50" cy="65" rx="26" ry="22" fill="#EAB308" />
      <circle cx="18" cy="40" r="11" fill="#EAB308" />
      <circle cx="36" cy="22" r="11" fill="#EAB308" />
      <circle cx="64" cy="22" r="11" fill="#EAB308" />
      <circle cx="82" cy="40" r="11" fill="#EAB308" />
    </svg>
  );
}

function BoneMark({ width = 56, rotate = 0, opacity = 0.13 }: { width?: number; rotate?: number; opacity?: number }) {
  return (
    <svg width={width} height={Math.round(width * 0.42)} viewBox="0 0 100 40" style={{ opacity, transform: `rotate(${rotate}deg)`, display: 'block' }}>
      <rect x="28" y="14" width="44" height="12" rx="4" fill="#EAB308" />
      <circle cx="22" cy="12" r="9" fill="#EAB308" />
      <circle cx="22" cy="28" r="9" fill="#EAB308" />
      <circle cx="78" cy="12" r="9" fill="#EAB308" />
      <circle cx="78" cy="28" r="9" fill="#EAB308" />
    </svg>
  );
}

type Mark = { left: string; top: number; type: 'paw' | 'bone'; size: number; rotate: number; opacity: number };

function seeded(seed: number): number {
  const s = Math.sin(seed * 9301 + 49297) * 233280;
  return s - Math.floor(s);
}

/**
 * 5 wide columns, 300px tall rows → plenty of breathing room on mobile.
 * Max paw = 44px, max bone = 52px so even at 375px wide they can't collide.
 */
function buildMarks(): Mark[] {
  // 5 columns with generous gaps — safe even on 360px screens
  const cols = [5, 23, 43, 63, 82]; // left %
  const rowH = 300; // taller rows = more spacing
  const rows = 34; // 34 × 300 = ~10,200px total

  const marks: Mark[] = [];
  let idx = 0;

  for (let row = 0; row < rows; row++) {
    for (let ci = 0; ci < cols.length; ci++) {
      idx++;
      const r = seeded(idx);
      // Skip ~35% for a natural scattered look
      if (r < 0.35) continue;

      const r2 = seeded(idx + 1000);
      const r3 = seeded(idx + 2000);
      const r4 = seeded(idx + 3000);
      const r5 = seeded(idx + 4000);

      const type: 'paw' | 'bone' = r2 < 0.60 ? 'paw' : 'bone';
      // Kept small enough to never overlap even on 360px screens
      const size = type === 'paw'
        ? 28 + Math.round(r3 * 16)  // 28–44px
        : 36 + Math.round(r3 * 16); // 36–52px wide
      const rotate = Math.round((r4 - 0.5) * 70);
      const opacity = 0.14 + r5 * 0.08;

      // Jitter: small so items stay inside their column cell
      const jitterX = (seeded(idx + 5000) - 0.5) * 7; // ±3.5%
      const jitterY = Math.round((seeded(idx + 6000) - 0.5) * 60); // ±30px

      marks.push({
        left: `${cols[ci] + jitterX}%`,
        top: row * rowH + 40 + jitterY,
        type,
        size,
        rotate,
        opacity,
      });
    }
  }

  return marks;
}

const MARKS = buildMarks();

export default function GlobalPawWatermark() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0, height: '10200px' }}
    >
      {MARKS.map((m, i) => (
        <div key={i} style={{ position: 'absolute', left: m.left, top: m.top }}>
          {m.type === 'paw' ? (
            <PawMark size={m.size} rotate={m.rotate} opacity={m.opacity} />
          ) : (
            <BoneMark width={m.size} rotate={m.rotate} opacity={m.opacity} />
          )}
        </div>
      ))}
    </div>
  );
}

export function BoneDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className="relative w-full overflow-hidden flex items-center justify-center" style={{ height: 80, zIndex: 10 }} aria-hidden="true">
      <div className="absolute inset-0 flex items-center" style={{ overflow: 'hidden' }}>
        <div className="flex gap-10 items-center animate-marquee whitespace-nowrap" style={{ transform: flip ? 'scaleX(-1)' : undefined }}>
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4 flex-shrink-0">
              <svg width="48" height="20" viewBox="0 0 100 40" fill="none">
                <rect x="28" y="14" width="44" height="12" rx="4" fill="#FCC244" opacity="0.22" />
                <circle cx="22" cy="12" r="9" fill="#FCC244" opacity="0.22" />
                <circle cx="22" cy="28" r="9" fill="#FCC244" opacity="0.22" />
                <circle cx="78" cy="12" r="9" fill="#FCC244" opacity="0.22" />
                <circle cx="78" cy="28" r="9" fill="#FCC244" opacity="0.22" />
              </svg>
              <svg width="22" height="22" viewBox="0 0 100 100" fill="#EAB308" opacity="0.20">
                <ellipse cx="50" cy="65" rx="26" ry="22" />
                <circle cx="18" cy="40" r="11" />
                <circle cx="36" cy="22" r="11" />
                <circle cx="64" cy="22" r="11" />
                <circle cx="82" cy="40" r="11" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function RightEdgePawBone({ top = '20%', color = '#EAB308', opacity = 0.18 }: { top?: string; color?: string; opacity?: number }) {
  return (
    <div className="absolute right-[-10px] pointer-events-none hidden xl:flex flex-col items-center gap-4" style={{ top, zIndex: 1 }} aria-hidden="true">
      <div className="animate-float" style={{ opacity }}>
        <svg width="60" height="24" viewBox="0 0 100 40" fill={color} style={{ transform: 'rotate(35deg)' }}>
          <rect x="28" y="14" width="44" height="12" rx="4" />
          <circle cx="22" cy="12" r="9" /><circle cx="22" cy="28" r="9" />
          <circle cx="78" cy="12" r="9" /><circle cx="78" cy="28" r="9" />
        </svg>
      </div>
      <div className="animate-float-slow" style={{ opacity: opacity * 0.8 }}>
        <svg width="44" height="44" viewBox="0 0 100 100" fill={color} style={{ transform: 'rotate(-20deg)' }}>
          <ellipse cx="50" cy="65" rx="26" ry="22" />
          <circle cx="18" cy="40" r="11" />
          <circle cx="36" cy="22" r="11" />
          <circle cx="64" cy="22" r="11" />
          <circle cx="82" cy="40" r="11" />
        </svg>
      </div>
    </div>
  );
}

export function BoneClipCard({ children, className = '', style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleEnter = () => { el.style.clipPath = 'polygon(0% 5%, 5% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 5% 100%, 0% 95%)'; };
    const handleLeave = () => { el.style.clipPath = 'none'; };
    el.addEventListener('mouseenter', handleEnter);
    el.addEventListener('mouseleave', handleLeave);
    return () => { el.removeEventListener('mouseenter', handleEnter); el.removeEventListener('mouseleave', handleLeave); };
  }, []);

  return (
    <div ref={ref} className={className} style={{ transition: 'clip-path 0.4s ease', ...style }}>
      {children}
    </div>
  );
}
