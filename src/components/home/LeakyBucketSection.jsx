import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const problemSteps = [
  { label: 'Ad Click', sub: 'You pay for every visitor' },
  { label: 'Slow Website', sub: '3s+ load → visitor leaves' },
  { label: 'Confusing Info', sub: 'No clear CTA or trust signals' },
  { label: 'Lead Bounces', sub: 'Revenue lost forever' },
];

const solutionSteps = [
  { label: 'Ad Click', sub: 'Traffic enters the pipeline' },
  { label: 'Sub-second Load', sub: 'Vercel Edge Network' },
  { label: 'Crystal Clear UI', sub: 'Conversion-first design' },
  { label: 'Lead Captured', sub: 'Form + WhatsApp routing' },
  { label: 'Instant Notif', sub: 'You get pinged immediately' },
];

export default function LeakyBucketSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-[#F0EDE8]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-4">The Core Problem</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] tracking-tight leading-[1.1]">
            Two outcomes.<br />
            <em className="not-italic text-green-600">Same ad spend.</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white rounded-2xl p-7 border border-black/8"
          >
            <p className="text-xs uppercase tracking-widest text-[#1a1a1a]/35 font-semibold mb-1">Without Akar</p>
            <h3 className="font-serif text-xl text-[#1a1a1a] mb-6">The leaky funnel</h3>
            <div className="space-y-2">
              {problemSteps.map((step, i) => (
                <div key={i} className={`flex items-center gap-3 p-3 rounded-xl ${i === problemSteps.length - 1 ? 'bg-red-50 border border-red-100' : 'bg-[#F5F2ED]'}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${i === problemSteps.length - 1 ? 'bg-red-400 text-white' : 'bg-[#1a1a1a]/10 text-[#1a1a1a]/40'}`}>
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#1a1a1a]">{step.label}</p>
                    <p className="text-xs text-[#1a1a1a]/45">{step.sub}</p>
                  </div>
                  {i < problemSteps.length - 1 && <ArrowRight className="w-3 h-3 text-[#1a1a1a]/20 ml-auto" />}
                </div>
              ))}
            </div>
            <div className="mt-5 p-3 bg-red-50 rounded-xl border border-red-100 text-center">
              <p className="text-xs font-semibold text-red-500">Every bounce = wasted ad budget</p>
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="bg-white rounded-2xl p-7 border border-black/8"
          >
            <p className="text-xs uppercase tracking-widest text-green-600 font-semibold mb-1">With Akar</p>
            <h3 className="font-serif text-xl text-[#1a1a1a] mb-6">The sealed pipeline</h3>
            <div className="space-y-2">
              {solutionSteps.map((step, i) => (
                <div key={i} className={`flex items-center gap-3 p-3 rounded-xl ${i === solutionSteps.length - 1 ? 'bg-green-50 border border-green-100' : 'bg-[#F5F2ED]'}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${i === solutionSteps.length - 1 ? 'bg-green-500 text-white' : 'bg-[#1a1a1a] text-white'}`}>
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#1a1a1a]">{step.label}</p>
                    <p className="text-xs text-[#1a1a1a]/45">{step.sub}</p>
                  </div>
                  {i < solutionSteps.length - 1 && <ArrowRight className="w-3 h-3 text-[#1a1a1a]/20 ml-auto" />}
                </div>
              ))}
            </div>
            <div className="mt-5 p-3 bg-green-50 rounded-xl border border-green-100 text-center">
              <p className="text-xs font-semibold text-green-600">Every lead captured, qualified, delivered</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}