import { motion } from 'framer-motion';

export default function GrowthChart() {
  return (
    <svg viewBox="0 0 300 120" className="w-full h-auto" preserveAspectRatio="none">
      <defs>
        <linearGradient id="vchart" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00E5A0" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#00E5A0" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d="M0,112 C50,110 90,104 130,88 C170,70 210,40 300,10"
        fill="none"
        stroke="#00E5A0"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: 'easeInOut' }}
        style={{ filter: 'drop-shadow(0 0 6px rgba(0,229,160,0.7))' }}
      />
      <motion.path
        d="M0,112 C50,110 90,104 130,88 C170,70 210,40 300,10 L300,120 L0,120 Z"
        fill="url(#vchart)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 0.4 }}
      />
    </svg>
  );
}