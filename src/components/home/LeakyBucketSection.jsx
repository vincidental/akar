import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Animated connector between steps
function Connector({ color = 'black', delay = 0 }) {
  return (
    <div className="flex flex-col items-center my-0.5">
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay }}
        className={`w-px h-5 origin-top ${color === 'red' ? 'bg-red-300' : color === 'green' ? 'bg-green-400' : 'bg-black/20'}`}
      />
      <motion.div
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: delay + 0.3 }}
        className={`w-0 h-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent ${color === 'red' ? 'border-t-red-300' : color === 'green' ? 'border-t-green-400' : 'border-t-black/20'}`}
      />
    </div>
  );
}

function StepBlock({ number, label, sub, variant = 'default', delay = 0, inView }) {
  const styles = {
    default: 'bg-white border-black/8 text-[#1a1a1a]',
    bad: 'bg-red-50 border-red-200 text-red-800',
    good: 'bg-green-50 border-green-200 text-green-800',
    end_bad: 'bg-red-100 border-red-300 text-red-800',
    end_good: 'bg-green-100 border-green-300 text-green-800',
    neutral_dark: 'bg-[#F0EDE8] border-black/10 text-[#1a1a1a]',
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border ${styles[variant]} w-full`}
    >
      <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
        variant === 'bad' || variant === 'end_bad' ? 'bg-red-300 text-white' :
        variant === 'good' || variant === 'end_good' ? 'bg-green-500 text-white' :
        'bg-[#1a1a1a]/10 text-[#1a1a1a]/50'
      }`}>
        {number}
      </div>
      <div>
        <p className="text-xs font-semibold leading-tight">{label}</p>
        {sub && <p className="text-[10px] opacity-60 mt-0.5 leading-tight">{sub}</p>}
      </div>
    </motion.div>
  );
}

// Branch connector for the split in the problem side
function BranchConnector({ delay, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.4, delay }}
      className="relative flex flex-col items-center my-0.5"
    >
      {/* Vertical line down */}
      <div className="w-px h-4 bg-red-200" />
      {/* Horizontal split line */}
      <div className="relative w-full flex items-center justify-center">
        <div className="absolute left-[25%] right-[25%] h-px bg-red-200" />
        {/* Left branch */}
        <div className="absolute left-[25%] flex flex-col items-center">
          <div className="w-px h-4 bg-red-200" />
          <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent border-t-red-200" />
        </div>
        {/* Right branch */}
        <div className="absolute right-[25%] flex flex-col items-center">
          <div className="w-px h-4 bg-red-200" />
          <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent border-t-red-200" />
        </div>
      </div>
      <div className="h-4" />
    </motion.div>
  );
}

// Re-merge connector
function MergeConnector({ delay, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.4, delay }}
      className="relative flex flex-col items-center my-0.5"
    >
      <div className="relative w-full flex items-start justify-center h-6">
        {/* Left line going up */}
        <div className="absolute left-[25%] w-px h-6 bg-red-200" />
        {/* Right line going up */}
        <div className="absolute right-[25%] w-px h-6 bg-red-200" />
        {/* Horizontal merge */}
        <div className="absolute bottom-0 left-[25%] right-[25%] h-px bg-red-200" />
      </div>
      {/* Center arrow down */}
      <div className="w-px h-3 bg-red-200" />
      <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent border-t-red-200" />
    </motion.div>
  );
}

export default function LeakyBucketSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-24 bg-[#F0EDE8]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#1a1a1a]/35 mb-4">The Core Problem</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] tracking-tight leading-[1.1]">
            Two outcomes.<br />
            <em className="not-italic text-green-600">Same ad spend.</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* PROBLEM SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white rounded-2xl p-7 border border-black/8"
          >
            <p className="text-[10px] uppercase tracking-widest text-[#1a1a1a]/35 font-semibold mb-1">Without Akar</p>
            <h3 className="font-serif text-xl text-[#1a1a1a] mb-6">The leaky funnel</h3>

            <div className="flex flex-col items-center">
              {/* Step 1 */}
              <StepBlock number="1" label="Ad Click" sub="You pay for every visitor" variant="default" delay={0.2} inView={inView} />
              {/* Branch to two paths */}
              <BranchConnector delay={0.35} inView={inView} />

              {/* Two-column branch */}
              <div className="grid grid-cols-2 gap-2 w-full">
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.45 }}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl border bg-red-50 border-red-200"
                >
                  <div className="w-4 h-4 rounded-full bg-red-300 text-white flex items-center justify-center text-[9px] font-bold shrink-0">2a</div>
                  <div>
                    <p className="text-[10px] font-semibold text-red-800 leading-tight">Unoptimized Website</p>
                    <p className="text-[9px] text-red-600/70 mt-0.5">3s+ load, no CTA</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.5 }}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl border bg-red-50 border-red-200"
                >
                  <div className="w-4 h-4 rounded-full bg-red-300 text-white flex items-center justify-center text-[9px] font-bold shrink-0">2b</div>
                  <div>
                    <p className="text-[10px] font-semibold text-red-800 leading-tight">No Website</p>
                    <p className="text-[9px] text-red-600/70 mt-0.5">Linktree or nothing</p>
                  </div>
                </motion.div>
              </div>

              <MergeConnector delay={0.6} inView={inView} />

              <StepBlock number="3" label="Confusing Info" sub="No clear CTA or trust signals" variant="bad" delay={0.7} inView={inView} />
              <Connector color="red" delay={0.85} />
              <StepBlock number="4" label="Lead Bounces" sub="Revenue lost forever" variant="end_bad" delay={0.9} inView={inView} />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.1 }}
              className="mt-5 p-3 bg-red-50 rounded-xl border border-red-100 text-center"
            >
              <p className="text-xs font-semibold text-red-500">Every bounce = wasted ad budget</p>
            </motion.div>
          </motion.div>

          {/* SOLUTION SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="bg-white rounded-2xl p-7 border border-black/8"
          >
            <p className="text-[10px] uppercase tracking-widest text-green-600 font-semibold mb-1">With Akar</p>
            <h3 className="font-serif text-xl text-[#1a1a1a] mb-6">The sealed pipeline</h3>

            <div className="flex flex-col items-center">
              {[
                { n: '1', label: 'Ad Click', sub: 'Traffic enters the pipeline', v: 'neutral_dark', d: 0.3 },
                { n: '2', label: 'Sub-second Load', sub: 'Local-optimized Edge Network', v: 'good', d: 0.45 },
                { n: '3', label: 'Crystal Clear UI', sub: 'Conversion-first design', v: 'good', d: 0.6 },
                { n: '4', label: 'Lead Captured', sub: 'Form + WhatsApp routing', v: 'good', d: 0.75 },
                { n: '5', label: 'Instant Notification', sub: 'You get pinged immediately', v: 'end_good', d: 0.9 },
              ].map((step, i) => (
                <div key={i} className="w-full flex flex-col items-center">
                  <StepBlock number={step.n} label={step.label} sub={step.sub} variant={step.v} delay={step.d} inView={inView} />
                  {i < 4 && <Connector color="green" delay={step.d + 0.1} />}
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.1 }}
              className="mt-5 p-3 bg-green-50 rounded-xl border border-green-100 text-center"
            >
              <p className="text-xs font-semibold text-green-600">Every lead captured, qualified, delivered</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}