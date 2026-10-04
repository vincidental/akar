import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useMotionValue, useTransform, animate } from 'framer-motion';
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

// Era 0: hero/golden · 1: depression (nope) · 2: rebuild · 3: kicking doors · 4: unending · 5: closing
const ERA_BG   = ['#F0EDE8', '#0a0a0a', '#0b0f14', '#1a3a2a', '#0d1622', '#F0EDE8'];
const ERA_TEXT = ['#1a1a1a', '#f0ede8', '#d8dde6', '#dce8dc', '#d0d8e4', '#1a1a1a'];

export default function Founder() {
  const ref = useRef(null);
  const [era, setEra] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const bgColor = useMotionValue(ERA_BG[0]);
  const textColor = useMotionValue(ERA_TEXT[0]);

  useEffect(() => {
    const c1 = animate(bgColor, ERA_BG[era], { duration: 1.2, ease: 'easeInOut' });
    const c2 = animate(textColor, ERA_TEXT[era], { duration: 1.2, ease: 'easeInOut' });
    return () => { c1.stop(); c2.stop(); };
  }, [era, bgColor, textColor]);

  // Trigger era changes when sentinel elements cross the viewport center.
  useEffect(() => {
    const triggers = document.querySelectorAll('[data-era-trigger]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setEra(Number(entry.target.dataset.eraTrigger));
        }
      });
    }, { rootMargin: '-50% 0px -50% 0px', threshold: 0 });
    triggers.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  const heroY = useTransform(scrollYProgress, [0, 0.05], [0, -60]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <div ref={ref} className="relative">
      <motion.div style={{ backgroundColor: bgColor }} className="fixed inset-0 -z-10" />
      <FilmGrain />

      <motion.div style={{ color: textColor }}>
        <ScrollProgress progress={scrollYProgress} />

        <Link
          to="/"
          className="fixed top-6 left-6 z-[101] flex items-center gap-2 text-[11px] font-medium tracking-wide opacity-50 hover:opacity-90 transition-opacity"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          akar.systems
        </Link>

        <div className="fixed top-6 right-6 z-[101] flex items-center gap-2 text-[11px] font-medium tracking-wide opacity-50">
          {era >= 1 && era <= 4 ? (
            <>
              <span className="font-serif">{String(era).padStart(2, '0')}</span>
              <span className="opacity-50">/ 04</span>
            </>
          ) : (
            <span className="opacity-30">—</span>
          )}
        </div>

        {/* Hero */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="flex flex-col items-center">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-[10px] font-semibold uppercase tracking-[0.4em] opacity-40 mb-8"
            >
              Akar Systems
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.h1
                animate={{ scale: [1, 1.008, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="font-serif text-5xl md:text-7xl tracking-tight leading-[1.05]"
              >
                The Founder's<br />Manifesto
              </motion.h1>
            </motion.div>
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
          </motion.div>
        </section>

        {/* Chapters */}
        {CHAPTERS.map(({ n, Component }) => (
          <Component key={n} />
        ))}

        {/* Closing */}
        <section data-era-trigger="5" className="py-32 px-6 text-center">
          <div className="max-w-md mx-auto flex flex-col items-center">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="h-px bg-current opacity-30 mb-8 origin-center w-12"
            />
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-serif italic text-lg opacity-60 mb-10"
            >
              Build something bigger than yourself.
            </motion.p>
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