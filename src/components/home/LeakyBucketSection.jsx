import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLang } from '@/lib/LanguageContext';

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

function BranchConnector({ delay, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.4, delay }}
      className="relative flex flex-col items-center my-0.5"
    >
      <div className="w-px h-4 bg-red-200" />
      <div className="relative w-full flex items-center justify-center">
        <div className="absolute left-[25%] right-[25%] h-px bg-red-200" />
        <div className="absolute left-[25%] flex flex-col items-center">
          <div className="w-px h-4 bg-red-200" />
          <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent border-t-red-200" />
        </div>
        <div className="absolute right-[25%] flex flex-col items-center">
          <div className="w-px h-4 bg-red-200" />
          <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent border-t-red-200" />
        </div>
      </div>
      <div className="h-4" />
    </motion.div>
  );
}

function MergeConnector({ delay, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.4, delay }}
      className="relative flex flex-col items-center my-0.5"
    >
      <div className="relative w-full flex items-start justify-center h-6">
        <div className="absolute left-[25%] w-px h-6 bg-red-200" />
        <div className="absolute right-[25%] w-px h-6 bg-red-200" />
        <div className="absolute bottom-0 left-[25%] right-[25%] h-px bg-red-200" />
      </div>
      <div className="w-px h-3 bg-red-200" />
      <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent border-t-red-200" />
    </motion.div>
  );
}

const copy = {
  en: {
    label: 'The Core Problem',
    heading1: 'Two outcomes.',
    heading2: 'Same ad spend.',
    badLabel: 'Without Akar',
    badTitle: 'The leaky funnel',
    goodLabel: 'With Akar',
    goodTitle: 'The sealed pipeline',
    bad: [
      { n: '1', label: 'Ad Click', sub: 'You pay for every visitor' },
      { n: '2a', label: 'Unoptimized Website', sub: '3s+ load, no CTA' },
      { n: '2b', label: 'No Website', sub: 'Linktree or nothing' },
      { n: '3', label: 'Confusing Info', sub: 'No clear CTA or trust signals', v: 'bad' },
      { n: '4', label: 'Lead Bounces', sub: 'Revenue lost forever', v: 'end_bad' },
    ],
    badFooter: 'Every bounce = wasted ad budget',
    good: [
      { n: '1', label: 'Ad Click', sub: 'Traffic enters the pipeline', v: 'neutral_dark' },
      { n: '2', label: 'Sub-second Load', sub: 'Local-optimized Edge Network', v: 'good' },
      { n: '3', label: 'Crystal Clear UI', sub: 'Conversion-first design', v: 'good' },
      { n: '4', label: 'Lead Captured', sub: 'Form + WhatsApp routing', v: 'good' },
      { n: '5', label: 'Instant Notification', sub: 'You get pinged immediately', v: 'end_good' },
    ],
    goodFooter: 'Every lead captured, qualified, delivered',
  },
  id: {
    label: 'Masalah Utamanya',
    heading1: 'Dua hasil berbeda.',
    heading2: 'Budget iklan yang sama.',
    badLabel: 'Tanpa Akar',
    badTitle: 'Funnel yang bocor',
    goodLabel: 'Dengan Akar',
    goodTitle: 'Pipeline yang rapat',
    bad: [
      { n: '1', label: 'Klik Iklan', sub: 'Anda bayar untuk setiap pengunjung' },
      { n: '2a', label: 'Website Lambat', sub: 'Muat 3 detik+, tidak ada CTA' },
      { n: '2b', label: 'Tidak Ada Website', sub: 'Linktree atau tidak ada sama sekali' },
      { n: '3', label: 'Informasi Membingungkan', sub: 'Tidak ada CTA atau tanda kepercayaan', v: 'bad' },
      { n: '4', label: 'Lead Kabur', sub: 'Pendapatan hilang selamanya', v: 'end_bad' },
    ],
    badFooter: 'Setiap bounce = budget iklan yang terbuang',
    good: [
      { n: '1', label: 'Klik Iklan', sub: 'Traffic masuk ke pipeline', v: 'neutral_dark' },
      { n: '2', label: 'Muat Kurang dari 1 Detik', sub: 'Edge network teroptimasi lokal', v: 'good' },
      { n: '3', label: 'Tampilan Jelas & Terarah', sub: 'Desain yang mendorong konversi', v: 'good' },
      { n: '4', label: 'Lead Tertangkap', sub: 'Form + routing ke WhatsApp', v: 'good' },
      { n: '5', label: 'Notifikasi Langsung', sub: 'Anda langsung dapat kabar', v: 'end_good' },
    ],
    goodFooter: 'Setiap lead tertangkap, terseleksi, terkirim',
  },
};

export default function LeakyBucketSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { lang } = useLang();
  const c = copy[lang];

  return (
    <section ref={ref} className="py-24 bg-[#F0EDE8]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#1a1a1a]/35 mb-4">{c.label}</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] tracking-tight leading-[1.1]">
            {c.heading1}<br />
            <em className="not-italic text-green-600">{c.heading2}</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* PROBLEM */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white rounded-2xl p-7 border border-black/8"
          >
            <p className="text-[10px] uppercase tracking-widest text-[#1a1a1a]/35 font-semibold mb-1">{c.badLabel}</p>
            <h3 className="font-serif text-xl text-[#1a1a1a] mb-6">{c.badTitle}</h3>

            <div className="flex flex-col items-center">
              <StepBlock number={c.bad[0].n} label={c.bad[0].label} sub={c.bad[0].sub} variant="default" delay={0.2} inView={inView} />
              <BranchConnector delay={0.35} inView={inView} />
              <div className="grid grid-cols-2 gap-2 w-full">
                {[c.bad[1], c.bad[2]].map((s, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 8 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.35, delay: 0.45 + idx * 0.05 }}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl border bg-red-50 border-red-200"
                  >
                    <div className="w-4 h-4 rounded-full bg-red-300 text-white flex items-center justify-center text-[9px] font-bold shrink-0">{s.n}</div>
                    <div>
                      <p className="text-[10px] font-semibold text-red-800 leading-tight">{s.label}</p>
                      <p className="text-[9px] text-red-600/70 mt-0.5">{s.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <MergeConnector delay={0.6} inView={inView} />
              <StepBlock number={c.bad[3].n} label={c.bad[3].label} sub={c.bad[3].sub} variant="bad" delay={0.7} inView={inView} />
              <Connector color="red" delay={0.85} />
              <StepBlock number={c.bad[4].n} label={c.bad[4].label} sub={c.bad[4].sub} variant="end_bad" delay={0.9} inView={inView} />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.1 }}
              className="mt-5 p-3 bg-red-50 rounded-xl border border-red-100 text-center"
            >
              <p className="text-xs font-semibold text-red-500">{c.badFooter}</p>
            </motion.div>
          </motion.div>

          {/* SOLUTION */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="bg-white rounded-2xl p-7 border border-black/8"
          >
            <p className="text-[10px] uppercase tracking-widest text-green-600 font-semibold mb-1">{c.goodLabel}</p>
            <h3 className="font-serif text-xl text-[#1a1a1a] mb-6">{c.goodTitle}</h3>

            <div className="flex flex-col items-center">
              {c.good.map((step, i) => (
                <div key={i} className="w-full flex flex-col items-center">
                  <StepBlock number={step.n} label={step.label} sub={step.sub} variant={step.v} delay={0.3 + i * 0.15} inView={inView} />
                  {i < c.good.length - 1 && <Connector color="green" delay={0.3 + i * 0.15 + 0.1} />}
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.1 }}
              className="mt-5 p-3 bg-green-50 rounded-xl border border-green-100 text-center"
            >
              <p className="text-xs font-semibold text-green-600">{c.goodFooter}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}