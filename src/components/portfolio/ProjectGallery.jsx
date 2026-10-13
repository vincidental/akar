import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectGallery({ images }) {
  const [idx, setIdx] = useState(null);
  const open = idx !== null;

  const prev = () => setIdx((i) => (i === null ? i : (i - 1 + images.length) % images.length));
  const next = () => setIdx((i) => (i === null ? i : (i + 1) % images.length));

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setIdx(null);
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, idx]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((src, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            onClick={() => setIdx(i)}
            className="group relative rounded-xl overflow-hidden border border-white/8 hover:border-white/20 transition-colors aspect-square bg-white/3"
          >
            <img
              src={src}
              alt={`Project documentation ${i + 1}`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setIdx(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              onClick={() => setIdx(null)}
            >
              <X className="w-5 h-5 text-white" />
            </button>
            {images.length > 1 && (
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
            )}
            {images.length > 1 && (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            )}
            <motion.img
              key={idx}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              src={images[idx]}
              alt={`Project documentation ${idx + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/50 tabular-nums">
                {idx + 1} / {images.length}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}