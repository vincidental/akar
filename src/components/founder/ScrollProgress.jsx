import { motion } from 'framer-motion';

export default function ScrollProgress({ progress }) {
  return (
    <motion.div
      style={{ scaleX: progress }}
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[102] bg-current opacity-50"
    />
  );
}