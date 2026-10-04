import { motion } from 'framer-motion';

export default function PullQuote({ children, dataEra }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="my-14 md:my-20"
    >
      <motion.blockquote
        animate={{ scale: [1, 1.006, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        data-era-trigger={dataEra}
        className="font-serif italic text-2xl md:text-4xl leading-[1.15] tracking-tight"
      >
        {children}
      </motion.blockquote>
    </motion.div>
  );
}