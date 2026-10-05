import { motion } from 'framer-motion';
import MetricCounter from './MetricCounter';

const metrics = [
  { target: 16, suffix: 'x', label: 'Revenue Unit Growth' },
  { prefix: '$', target: 100, suffix: 'K+', label: 'Bootstrapped ARR' },
  { target: 100, suffix: '/100', label: 'Top Honors (PM)' },
  { target: 7, suffix: ' Yrs', label: 'Scaling Ventures' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 py-28 overflow-hidden">
      {/* mesh orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[36rem] h-[36rem] bg-[#00E5A0]/[0.08] rounded-full blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#00E5A0]/[0.05] rounded-full blur-[110px]" />
      </div>
      {/* grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-tech text-[11px] tracking-[0.35em] text-[#00E5A0] mb-8"
        >
          VINCENTIUS THEODORE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1.02] max-w-4xl"
        >
          Proven executor across <span className="text-[#00E5A0]">Product</span>,{' '}
          <span className="text-[#00E5A0]">Operations</span>, and{' '}
          <span className="text-[#00E5A0]">Applied AI</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 text-base md:text-lg text-[#9a9a9a] leading-relaxed max-w-2xl"
        >
          I scale chaos for high-growth companies. Whether it's driving 16x revenue growth as a
          Founding Operator, rebuilding commercial CRMs as a RevOps Leader, or architecting custom
          automations as an AI Product Manager, I bridge the gap between high-level corporate
          strategy and technical execution.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden"
        >
          {metrics.map((m) => (
            <div key={m.label} className="bg-[#0a0a0a] p-5 md:p-6">
              <MetricCounter {...m} />
              <p className="font-tech text-[10px] uppercase tracking-widest text-[#6a6a6a] mt-2">
                {m.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}