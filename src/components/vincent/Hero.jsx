import { motion } from 'framer-motion';

const figures = [
  { value: '16×', label: 'Revenue growth · McEasy' },
  { value: '30%', label: 'Churn reduction · McEasy' },
  { value: '$100K+', label: 'Year 1 revenue · Flexilis' },
  { value: '100/100', label: 'Top Honors · RevoU' },
];

export default function Hero() {
  return (
    <section className="px-6 pt-28 md:pt-36 pb-20">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-tech text-[10px] tracking-[0.3em] text-[#1a1a1a]/40 mb-6"
        >
          PROFESSIONAL DOSSIER
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl md:text-7xl text-[#1a1a1a] tracking-tight leading-[1.04] mb-7"
        >
          Vincentius Theodore
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12 }}
          className="text-lg md:text-xl text-[#1a1a1a] font-medium max-w-2xl leading-snug mb-5"
        >
          Founding Operator, RevOps leader, and AI product manager. I build the systems that turn
          growth ambition into revenue — and I ship them myself.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-base text-[#1a1a1a]/55 max-w-2xl leading-relaxed mb-9"
        >
          I've led P0 initiatives across corporate strategy, B2G consulting, and quick-commerce
          product — often in parallel with a full academic load. I work where business strategy
          meets technical execution, with the ownership of a founder.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-16"
        >
          <a
            href="mailto:vtheodore7@gmail.com"
            className="text-sm font-medium text-[#1a1a1a] underline underline-offset-4 decoration-[#1a1a1a]/20 hover:decoration-[#2a7a4f] transition-colors"
          >
            vtheodore7@gmail.com
          </a>
          <span className="text-[#1a1a1a]/20">·</span>
          <a
            href="https://wa.me/6281809006757"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#1a1a1a] underline underline-offset-4 decoration-[#1a1a1a]/20 hover:decoration-[#2a7a4f] transition-colors"
          >
            WhatsApp
          </a>
          <span className="text-[#1a1a1a]/20">·</span>
          <a
            href="https://www.linkedin.com/in/vincentiustheodore"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors"
          >
            LinkedIn
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1a1a1a]/8 border border-[#1a1a1a]/8 rounded-xl overflow-hidden"
        >
          {figures.map((f) => (
            <div key={f.label} className="bg-[#F7F5F0] p-5">
              <p className="font-serif text-3xl md:text-4xl text-[#1a1a1a] tracking-tight">{f.value}</p>
              <p className="font-tech text-[10px] uppercase tracking-widest text-[#1a1a1a]/40 mt-2">
                {f.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}