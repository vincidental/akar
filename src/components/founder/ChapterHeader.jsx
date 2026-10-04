import { motion } from 'framer-motion';

export default function ChapterHeader({ n, title }) {
  return (
    <div className="mb-14 md:mb-20">
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
    </div>
  );
}