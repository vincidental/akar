import { motion, useScroll, useSpring } from 'framer-motion';
import FilmGrain from '@/components/founder/FilmGrain';
import Hero from '@/components/vincent/Hero';
import Thesis from '@/components/vincent/Thesis';
import BentoGrid from '@/components/vincent/BentoGrid';
import Timeline from '@/components/vincent/Timeline';
import Terminal from '@/components/vincent/Terminal';
import Academic from '@/components/vincent/Academic';
import Closing from '@/components/vincent/Closing';

export default function Vincent() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <div className="relative bg-[#050505] text-[#f0f0f0] min-h-screen overflow-x-hidden selection:bg-[#00E5A0]/30 selection:text-white">
      <FilmGrain />
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#00E5A0] origin-left z-[101] shadow-[0_0_12px_rgba(0,229,160,0.7)]"
      />
      <Hero />
      <Thesis />
      <BentoGrid />
      <Timeline />
      <Terminal />
      <Academic />
      <Closing />
    </div>
  );
}