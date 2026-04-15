import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function FeatureModal({ feature, onClose }) {
  if (!feature) return null;
  const Icon = feature.icon;

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-6"
        style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(6px)' }}
        onClick={onClose}
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top accent bar */}
          <div className="h-1 w-full bg-gradient-to-r from-green-400 to-green-600" />

          {/* Header */}
          <div className="flex items-start justify-between px-6 pt-6 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-green-50 border border-green-100 rounded-2xl flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="font-serif text-xl text-[#1a1a1a] leading-tight">{feature.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#1a1a1a]/6 hover:bg-[#1a1a1a]/12 flex items-center justify-center transition-colors shrink-0 ml-2"
            >
              <X className="w-4 h-4 text-[#1a1a1a]/50" />
            </button>
          </div>

          {/* Divider */}
          <div className="mx-6 h-px bg-black/6" />

          {/* Body */}
          <div className="px-6 py-5">
            <p className="text-sm text-[#1a1a1a]/60 leading-relaxed">{feature.desc}</p>
          </div>

          {/* Footer */}
          <div className="px-6 pb-6">
            <button
              onClick={onClose}
              className="w-full py-3 rounded-full bg-[#1a1a1a] text-white text-sm font-semibold hover:bg-[#333] transition-colors"
            >
              Got it
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}