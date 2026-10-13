import { motion } from 'framer-motion';

export default function FlowSteps({ steps, accent = '#ffffff' }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {steps.map((s, i) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8% 0px' }}
          transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white/[0.03] border border-white/8 rounded-2xl p-6"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="font-serif text-2xl font-bold" style={{ color: accent }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="font-sans text-sm font-semibold text-white uppercase tracking-wide">{s.title}</h3>
          </div>
          <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}