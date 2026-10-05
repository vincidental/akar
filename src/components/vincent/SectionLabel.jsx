import { motion } from 'framer-motion';

export default function SectionLabel({ num, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12 flex items-center gap-4"
    >
      <span className="font-tech text-[11px] text-[#00E5A0] tracking-[0.25em]">{num}</span>
      <span className="h-px w-10 bg-[#00E5A0]/40" />
      <h2 className="font-sans text-xs md:text-sm font-medium tracking-[0.2em] text-[#8a8a8a] uppercase">
        {title}
      </h2>
    </motion.div>
  );
}