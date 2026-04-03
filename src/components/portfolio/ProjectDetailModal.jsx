import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

export default function ProjectDetailModal({ project, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const screenshots = project?.screenshots || [];

  const prev = () => setCurrentIndex((i) => (i - 1 + screenshots.length) % screenshots.length);
  const next = () => setCurrentIndex((i) => (i + 1) % screenshots.length);

  useEffect(() => {
    setCurrentIndex(0);
  }, [project?.id]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [currentIndex, project]);

  if (!project) return null;

  const modal = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/88 backdrop-blur-xl" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 28 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 28 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-5xl rounded-3xl overflow-hidden bg-[#0f0f0f] border border-white/10 flex flex-col"
        style={{
          height: 'min(90vh, 920px)',
          boxShadow: `0 0 100px ${project.accentColor}22, 0 48px 96px rgba(0,0,0,0.75)`,
        }}
      >
        {/* ── Header ── */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/8 bg-[#0f0f0f] shrink-0">
          <div className="flex items-center gap-3">
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: project.accentColor, boxShadow: `0 0 12px ${project.accentColor}` }}
            />
            <div>
              <h2 className="font-serif text-base text-white leading-tight">{project.title}</h2>
              <p className="text-[11px] text-white/35 mt-0.5">{project.category}</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            {screenshots.length > 1 && (
              <span className="text-[11px] text-white/30 tabular-nums">
                {currentIndex + 1} / {screenshots.length}
              </span>
            )}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-[11px] font-medium text-white/50 hover:text-white transition-colors border border-white/12 hover:border-white/30 rounded-full px-3 py-1.5"
            >
              Visit Live <ArrowUpRight className="w-3 h-3" />
            </a>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/6 hover:bg-white/14 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-white/55" />
            </button>
          </div>
        </div>

        {/* ── Image viewer ── */}
        <div className="relative flex-1 bg-[#080808]" style={{ minHeight: 0, overflow: 'hidden' }}>
          {/* Scrollable full-page screenshot */}
          <div
            key={currentIndex}
            className="absolute inset-0 overflow-y-auto overflow-x-hidden"
            style={{ scrollbarWidth: 'thin', scrollbarColor: `${project.accentColor}50 #111` }}
          >
            <motion.img
              key={`img-${currentIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
              src={screenshots[currentIndex]}
              alt={`${project.title} page ${currentIndex + 1}`}
              className="w-full block"
              draggable={false}
            />
          </div>

          {/* Left/Right arrows — only if multiple screenshots */}
          {screenshots.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/65 border border-white/12 hover:bg-black/85 hover:border-white/25 flex items-center justify-center transition-all backdrop-blur-sm"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/65 border border-white/12 hover:bg-black/85 hover:border-white/25 flex items-center justify-center transition-all backdrop-blur-sm"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </>
          )}

          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#0f0f0f] to-transparent pointer-events-none z-10" />
        </div>

        {/* ── Footer ── */}
        <div className="shrink-0 px-6 py-4 border-t border-white/8 bg-[#0f0f0f] flex items-center justify-between gap-4">
          {/* Metrics */}
          <div className="flex gap-5">
            {project.metrics.map((m, i) => (
              <div key={i}>
                <p className="text-sm font-bold leading-none" style={{ color: project.accentColor }}>{m.value}</p>
                <p className="text-[10px] text-white/30 uppercase tracking-wide mt-0.5">{m.label}</p>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          {screenshots.length > 1 && (
            <div className="flex gap-2">
              {screenshots.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === currentIndex ? '18px' : '6px',
                    height: '6px',
                    backgroundColor: i === currentIndex ? project.accentColor : 'rgba(255,255,255,0.2)',
                  }}
                />
              ))}
            </div>
          )}

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 justify-end">
            {project.tech.map((t, i) => (
              <span key={i} className="px-2 py-0.5 bg-white/5 border border-white/8 rounded-full text-[10px] text-white/38">
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return createPortal(modal, document.body);
}