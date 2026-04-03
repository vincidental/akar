import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

export default function ProjectDetailModal({ project, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const screenshots = project?.screenshots || [];

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [currentIndex, screenshots.length]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const prev = () => setCurrentIndex((i) => (i - 1 + screenshots.length) % screenshots.length);
  const next = () => setCurrentIndex((i) => (i + 1) % screenshots.length);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-5xl bg-[#111] border border-white/10 rounded-3xl overflow-hidden flex flex-col max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
          style={{ boxShadow: `0 0 80px ${project.accentColor}20, 0 40px 80px rgba(0,0,0,0.6)` }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/8 shrink-0">
            <div className="flex items-center gap-4">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: project.accentColor, boxShadow: `0 0 8px ${project.accentColor}` }}
              />
              <div>
                <h2 className="font-serif text-lg text-white leading-tight">{project.title}</h2>
                <p className="text-xs text-white/35 mt-0.5">{project.category}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-white/50 hover:text-white transition-colors border border-white/10 hover:border-white/25 rounded-full px-3 py-1.5"
              >
                Visit Live
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/8 hover:bg-white/15 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-white/60" />
              </button>
            </div>
          </div>

          {/* Screenshot Viewer */}
          <div className="relative flex-1 overflow-hidden bg-[#0a0a0a] min-h-0">
            {screenshots.length > 0 ? (
              <>
                {/* Scrollable screenshot */}
                <div className="h-full overflow-y-auto overflow-x-hidden">
                  <motion.img
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    src={screenshots[currentIndex]}
                    alt={`${project.title} screenshot ${currentIndex + 1}`}
                    className="w-full block"
                  />
                </div>

                {/* Nav arrows — only show if multiple screenshots */}
                {screenshots.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/10 hover:bg-black/80 flex items-center justify-center transition-all backdrop-blur-sm"
                    >
                      <ChevronLeft className="w-5 h-5 text-white" />
                    </button>
                    <button
                      onClick={next}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/10 hover:bg-black/80 flex items-center justify-center transition-all backdrop-blur-sm"
                    >
                      <ChevronRight className="w-5 h-5 text-white" />
                    </button>

                    {/* Dot indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {screenshots.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentIndex(i)}
                          className="w-1.5 h-1.5 rounded-full transition-all duration-200"
                          style={{
                            backgroundColor: i === currentIndex ? project.accentColor : 'rgba(255,255,255,0.25)',
                            transform: i === currentIndex ? 'scale(1.3)' : 'scale(1)',
                          }}
                        />
                      ))}
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="flex items-center justify-center h-64 text-white/20 text-sm">
                No screenshots available
              </div>
            )}
          </div>

          {/* Footer — metrics */}
          <div className="px-6 py-4 border-t border-white/8 flex items-center justify-between shrink-0">
            <div className="flex gap-4">
              {project.metrics.map((m, i) => (
                <div key={i} className="text-center">
                  <p className="text-sm font-bold" style={{ color: project.accentColor }}>{m.value}</p>
                  <p className="text-[10px] text-white/30 uppercase tracking-wide">{m.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5 justify-end">
              {project.tech.map((t, i) => (
                <span key={i} className="px-2 py-0.5 bg-white/6 border border-white/8 rounded-full text-[10px] text-white/40">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}