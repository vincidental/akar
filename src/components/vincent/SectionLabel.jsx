import { motion } from 'framer-motion';

export default function SectionLabel({ num, title, kicker }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12"
    >
      <p className="font-tech text-[10px] tracking-[0.28em] text-[#2a7a4f] mb-3">{num}</p>
      <h2 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] tracking-tight">{title}</h2>
      {kicker && (
        <p className="text-sm text-[#1a1a1a]/50 mt-3 max-w-2xl leading-relaxed">{kicker}</p>
      )}
    </motion.div>
  );
}