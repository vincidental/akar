import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertTriangle, Zap, ArrowRight } from 'lucide-react';

const problemSteps = [
  { label: 'Ad Click', sub: 'You pay for every visitor' },
  { label: 'Slow Website', sub: '3s+ load time → visitor leaves' },
  { label: 'Confusing Info', sub: 'No clear CTA or trust signals' },
  { label: 'Lead Bounces', sub: 'You never knew they were there' },
];

const solutionSteps = [
  { label: 'Ad Click', sub: 'Traffic enters the pipeline' },
  { label: 'Sub-second Load', sub: 'Vercel Edge Network, CDN-optimized' },
  { label: 'Crystal Clear Info', sub: 'Conversion-first UI/UX' },
  { label: 'Instant Lead Capture', sub: 'Form + WhatsApp routing' },
  { label: 'WhatsApp Notif', sub: 'You get pinged immediately' },
];

export default function LeakyBucketSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">The Core Problem</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Two Different Outcomes.<br />
            <span className="text-gradient">Same Ad Spend.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Problem Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative rounded-2xl border border-red-100 bg-red-50/30 p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-red-500" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-red-400 font-semibold">The Problem</p>
                <h3 className="text-lg font-bold text-slate-800">Traditional Funnel</h3>
              </div>
            </div>

            <div className="space-y-3">
              {problemSteps.map((step, i) => (
                <div key={i} className="flex flex-col">
                  <div className={`flex items-center gap-3 p-3 rounded-xl ${i === problemSteps.length - 1 ? 'bg-red-100/80 border border-red-200' : 'bg-white/60 border border-red-100'}`}>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${i === problemSteps.length - 1 ? 'bg-red-500 text-white' : 'bg-red-100 text-red-600'}`}>
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{step.label}</p>
                      <p className="text-xs text-slate-500">{step.sub}</p>
                    </div>
                    {i < problemSteps.length - 1 && (
                      <div className="ml-auto text-red-300">
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Leaky visual */}
            <div className="mt-6 p-4 bg-red-100/50 rounded-xl border border-red-200 text-center">
              <p className="text-sm font-bold text-red-600">💸 Every bounce = wasted ad budget</p>
            </div>
          </motion.div>

          {/* Solution Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50/50 to-emerald-50/30 p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-blue-500 font-semibold">The Solution</p>
                <h3 className="text-lg font-bold text-slate-800">Akar Pipeline</h3>
              </div>
            </div>

            <div className="space-y-3">
              {solutionSteps.map((step, i) => (
                <div key={i} className="flex flex-col">
                  <div className={`flex items-center gap-3 p-3 rounded-xl ${i === solutionSteps.length - 1 ? 'bg-emerald-100/80 border border-emerald-200' : 'bg-white/70 border border-blue-100'}`}>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${i === solutionSteps.length - 1 ? 'bg-emerald-500 text-white' : 'bg-blue-600 text-white'}`}>
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{step.label}</p>
                      <p className="text-xs text-slate-500">{step.sub}</p>
                    </div>
                    {i < solutionSteps.length - 1 && (
                      <div className="ml-auto text-blue-300">
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Success visual */}
            <div className="mt-6 p-4 bg-emerald-100/50 rounded-xl border border-emerald-200 text-center">
              <p className="text-sm font-bold text-emerald-700">✅ Every lead captured, qualified, and delivered</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}