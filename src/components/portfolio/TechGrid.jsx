import { motion } from 'framer-motion';

export default function TechGrid({ items, accent = '#ffffff' }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8% 0px' }}
          transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 flex gap-4"
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ backgroundColor: `${accent}1f`, border: `1px solid ${accent}3d` }}
          >
            <item.icon className="w-4 h-4" style={{ color: accent }} />
          </div>
          <div>
            <h3 className="font-sans text-sm font-semibold text-white mb-1.5">{item.title}</h3>
            <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}