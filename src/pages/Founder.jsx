import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import FilmGrain from '@/components/founder/FilmGrain';
import ScrollProgress from '@/components/founder/ScrollProgress';
import GoldenPath from '@/components/founder/chapters/GoldenPath';
import RebuildZero from '@/components/founder/chapters/RebuildZero';
import KickingDoors from '@/components/founder/chapters/KickingDoors';
import UnendingGame from '@/components/founder/chapters/UnendingGame';

const CHAPTERS = [
  { n: '01', Component: GoldenPath },
  { n: '02', Component: RebuildZero },
  { n: '03', Component: KickingDoors },
  { n: '04', Component: UnendingGame },
];

export default function Founder() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const bg = useTransform(scrollYProgress,
    [0, 0.05, 0.12, 0.18, 0.22, 0.25, 0.48, 0.52, 0.62, 0.72, 0.78, 0.82, 0.92, 0.97, 1],
    ['#F0EDE8', '#F0EDE8', '#D8D3CB', '#5a5550', '#1a1a1a', '#0a0a0a', '#0a0a0a', '#0d1812', '#1a3a2a', '#1f4a36', '#2a5a44', '#1f4a36', '#2a5a44', '#8a8580', '#F0EDE8']
  );
  const textColor = useTransform(scrollYProgress,
    [0, 0.15, 0.20, 0.95, 1],
    ['#1a1a1a', '#1a1a1a', '#f0ede8', '#f0ede8', '#1a1a1a']
  );

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const next = v < 0.22 ? 0 : v < 0.48 ? 1 : v < 0.78 ? 2 : 3;
    setActive((prev) => (prev !== next ? next : prev));
  });

  return (
    <div ref={ref} className="relative">
      <motion.div style={{ backgroundColor: bg }} className="fixed inset-0 -z-10" />
      <FilmGrain />

      <motion.div style={{ color: textColor }}>
        <ScrollProgress progress={scrollYProgress} />

        {/* Back link */}
        <Link
          to="/"
          className="fixed top-6 left-6 z-[101] flex items-center gap-2 text-[11px] font-medium tracking-wide opacity-50 hover:opacity-90 transition-opacity"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          akar.systems
        </Link>

        {/* Chapter indicator */}
        <div className="fixed top-6 right-6 z-[101] flex items-center gap-2 text-[11px] font-medium tracking-wide opacity-50">
          <span className="font-serif">{CHAPTERS[active].n}</span>
          <span className="opacity-50">/ 04</span>
        </div>

        {/* Hero */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[10px] font-semibold uppercase tracking-[0.4em] opacity-40 mb-8"
          >
            Akar Systems
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-7xl tracking-tight leading-[1.05]"
          >
            The Founder's<br />Manifesto
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mt-20 flex flex-col items-center gap-3"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-40">Scroll to begin</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="w-px h-8 bg-current opacity-30"
            />
          </motion.div>
        </section>

        {/* Chapters */}
        {CHAPTERS.map(({ n, Component }) => (
          <Component key={n} />
        ))}

        {/* Closing */}
        <section className="py-32 px-6 text-center">
          <div className="max-w-md mx-auto flex flex-col items-center">
            <div className="w-12 h-px bg-current opacity-30 mb-8" />
            <p className="font-serif italic text-lg opacity-60 mb-10">
              Build something bigger than yourself.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] opacity-50 hover:opacity-100 transition-opacity"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to akar.systems
            </Link>
          </div>
        </section>
      </motion.div>
    </div>
  );
}