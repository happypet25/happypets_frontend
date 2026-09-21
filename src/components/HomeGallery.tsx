import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

// Using images from public/image_with_trainer
const galleryImages = [
  { src: '/image_with_trainer/12.webp', alt: 'Happy Customer Family' },
  { src: '/image_with_trainer/1753260410898~2(1).jpg', alt: 'Happy Customer Family' },
  { src: '/image_with_trainer/1759531925080.jpg', alt: 'Happy Customer Family' },
  { src: '/image_with_trainer/1759598632523.jpg', alt: 'Happy Customer Family' },
  { src: '/image_with_trainer/1759598904648.jpg', alt: 'Happy Customer Family' },
  { src: '/image_with_trainer/1767475575651.jpg', alt: 'Happy Customer Family' },
  { src: '/image_with_trainer/1767597476873.jpg', alt: 'Happy Customer Family' },
  { src: '/image_with_trainer/1767650739922~2.jpg', alt: 'Happy Customer Family' },
  { src: '/image_with_trainer/1770375137075.jpg', alt: 'Happy Customer Family' },
  { src: '/image_with_trainer/1770673603843.jpg', alt: 'Happy Customer Family' },
  { src: '/image_with_trainer/1770829147146.jpg', alt: 'Happy Customer Family' },
  { src: '/image_with_trainer/1772460750955.jpg', alt: 'Happy Customer Family' },
  { src: '/image_with_trainer/1775289532973.jpg', alt: 'Happy Customer Family' },
  { src: '/image_with_trainer/1780326693662.jpg', alt: 'Happy Customer Family' },
  { src: '/image_with_trainer/1781363092122.jpg', alt: 'Happy Customer Family' },
  { src: '/image_with_trainer/1781786069025.jpg', alt: 'Happy Customer Family' },
  { src: '/image_with_trainer/1781786308339.jpg', alt: 'Happy Customer Family' },
  { src: '/image_with_trainer/1781786578502.jpg', alt: 'Happy Customer Family' },
  { src: '/image_with_trainer/18 (Copy).webp', alt: 'Happy Customer Family' },
  { src: '/image_with_trainer/25.webp', alt: 'Happy Customer Family' },
  { src: '/image_with_trainer/7.webp', alt: 'Happy Customer Family' },
];

export default function HomeGallery() {
  useScrollReveal();

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden z-10 bg-white">
      <div className="container-site">
        <div className="flex flex-col items-center mb-10 reveal text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-2" style={{ background: '#FCC244', border: '1px solid #E5A922' }}>
            <span className="font-body text-xs font-semibold uppercase tracking-widest" style={{ color: '#2A1A24' }}>Our Happy Families</span>
          </div>
          <h2 className="font-heading font-black leading-tight mb-1" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
            <span style={{ color: '#2A1A24' }}>Glimpses of</span> <span style={{ color: '#C62E7B' }}>Joy</span>
          </h2>
          <p className="font-body text-sm max-w-lg mx-auto" style={{ color: '#5B6B78' }}>
            See our furry friends enjoying their training, grooming, and playtime sessions with us.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 reveal">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="aspect-square rounded-2xl overflow-hidden group relative cursor-pointer"
              style={{ background: '#FDEEF6' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center reveal">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 font-heading font-bold px-8 py-3.5 rounded-full transition-all hover:opacity-90 hover:gap-3 w-full justify-center"
            style={{ background: '#C62E7B', color: '#fff', fontSize: '15px' }}
          >
            View Full Gallery <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
