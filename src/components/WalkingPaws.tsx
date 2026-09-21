import { useEffect, useRef } from 'react';

interface Paw {
  x: number;
  y: number;
  angle: number;
  id: number;
  size: number;
  side: 'left' | 'right';
}

export default function WalkingPaws() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pawsRef = useRef<Paw[]>([]);
  const animFrameRef = useRef<number>(0);
  const lastScrollRef = useRef(0);
  const pawIdRef = useRef(0);
  const stepXRef = useRef(80);
  const stepYRef = useRef(0);
  const sideRef = useRef<'left' | 'right'>('left');

  useEffect(() => {
    const PAW_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="#F4A7C1">
      <ellipse cx="50" cy="65" rx="22" ry="18"/>
      <ellipse cx="24" cy="42" rx="10" ry="13"/>
      <ellipse cx="44" cy="32" rx="10" ry="13"/>
      <ellipse cx="64" cy="32" rx="10" ry="13"/>
      <ellipse cx="76" cy="42" rx="10" ry="13"/>
    </svg>`;

    const encodedSVG = 'data:image/svg+xml;base64,' + btoa(PAW_SVG);

    const container = containerRef.current;
    if (!container) return;

    const MAX_PAWS = 18;

    const spawnPaw = (scrollY: number) => {
      const viewportW = window.innerWidth;
      const side = sideRef.current;

      const baseX = viewportW * 0.35 + (side === 'left' ? -30 : 30);
      const baseY = scrollY + window.innerHeight * 0.5;
      const angle = side === 'left' ? -12 : 12;

      const paw: Paw = {
        x: baseX + stepXRef.current,
        y: baseY + stepYRef.current,
        angle,
        id: pawIdRef.current++,
        size: 38,
        side,
      };

      stepXRef.current = (side === 'left' ? -1 : 1) * (Math.random() * 20 + 30);
      stepYRef.current = Math.random() * 16 - 8;
      sideRef.current = side === 'left' ? 'right' : 'left';

      pawsRef.current = [...pawsRef.current.slice(-MAX_PAWS), paw];

      const img = document.createElement('img');
      img.src = encodedSVG;
      img.style.cssText = `
        position: fixed;
        left: ${paw.x - paw.size / 2}px;
        top: ${paw.y - scrollY - paw.size / 2}px;
        width: ${paw.size}px;
        height: ${paw.size}px;
        transform: rotate(${paw.angle}deg);
        opacity: 0;
        pointer-events: none;
        z-index: 1;
        transition: opacity 0.3s ease;
      `;
      img.dataset.pawId = String(paw.id);
      container.appendChild(img);

      requestAnimationFrame(() => {
        img.style.opacity = '0.12';
      });

      setTimeout(() => {
        img.style.opacity = '0';
        setTimeout(() => img.remove(), 400);
      }, 2200);
    };

    let lastSpawnY = 0;
    const SPAWN_INTERVAL = 80;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const delta = Math.abs(scrollY - lastSpawnY);

      if (delta > SPAWN_INTERVAL) {
        spawnPaw(scrollY);
        lastSpawnY = scrollY;
      }
      lastScrollRef.current = scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    />
  );
}
