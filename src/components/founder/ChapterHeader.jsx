import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ChapterHeader({ n, title, dataEra }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const numOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.04, 0.08, 0.04]);

  return (
    <div ref={ref} data-era-trigger={dataEra} className="relative mb-14 md:mb-20">
      <motion.span
        style={{ y, opacity: numOpacity }}
        aria-hidden
        className="absolute -top-16 -left-2 md:-left-6 font-serif text-[8rem] md:text-[13rem] leading-none pointer-events-none select-none whitespace-nowrap font-bold"
      >
        {n}
      </motion.span>

      <div className="relative">
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[10px] font-semibold uppercase tracking-[0.3em] opacity-50 mb-5"
        >
          Chapter {n}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl md:text-6xl tracking-tight leading-[1.05]"
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-current opacity-30 mt-8 origin-left w-16"
        />
      </div>
    </div>
  );
}