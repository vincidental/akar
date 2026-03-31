import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  {
    id: 'detailing',
    label: 'Detailing',
    bgColor: 'from-[#2a1f0f] to-[#4a3520]',
    quote: "Sending our Meta Ad traffic to a basic Linktree was killing our conversions. Akar built us a premium, lightning-fast website. Their monthly GA4 reports show us exactly which touchpoints are turning into booked appointments.",
    name: "Budi Santoso",
    title: "Owner, Auto Premium Detailing — Tangerang",
    tag: "High-Ticket Web & Analytics",
    metric: { value: '4×', label: 'Bookings increase' },
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    bgColor: 'from-[#0f2a1a] to-[#1a4a2a]',
    quote: "We were spending millions on ads, but our clinic was empty on weekdays. Akar rebuilt our landing page and fixed our Google Maps ranking. Within two weeks, our WhatsApp bookings tripled.",
    name: "drg. Andi W.",
    title: "Founder, Dental Clinic — South Jakarta",
    tag: "Local SEO Dominance",
    metric: { value: '3×', label: 'WhatsApp bookings' },
  },
  {
    id: 'interior',
    label: 'Interior',
    bgColor: 'from-[#1a1520] to-[#2a2040]',
    quote: "In our industry, visual trust is everything. Akar deployed a stunning, high-speed portfolio site in 36 hours. It completely changed how high-end clients perceive us.",
    name: "Rina M.",
    title: "Director, Architecture Studio — Bali",
    tag: "Premium Website",
    metric: { value: '36h', label: 'Deploy time' },
  },
  {
    id: 'education',
    label: 'Education',
    bgColor: 'from-[#1a200f] to-[#2a3a1a]',
    quote: "The automated WhatsApp routing system acts like a 24/7 receptionist. It qualifies the parents and only sends me the hot leads ready to enroll. It gave me my time back.",
    name: "Siska P.",
    title: "English Tutor — Bekasi",
    tag: "WhatsApp Automation",
    metric: { value: '80%', label: 'Less admin time' },
  },
  {
    id: 'logistics',
    label: 'B2B',
    bgColor: 'from-[#0f1a2a] to-[#1a2a40]',
    quote: "Akar's engineering team built a bespoke web application to manage our fleet and client portal. Enterprise-grade, flawlessly executed, saving hundreds of operational hours.",
    name: "Haryanto T.",
    title: "Director, PT. MLI",
    tag: "Custom Software",
    metric: { value: '200h', label: 'Saved per month' },
  },
];

export default function CaseStudySection() {
  const [active, setActive] = useState('detailing');
  const current = tabs.find((t) => t.id === active);

  return (
    <section className="py-24 bg-[#1a1a1a]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/25 mb-4">Client Results</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight leading-[1.1]">
            Trusted by ambitious local<br className="hidden md:block" /> businesses across Indonesia.
          </h2>
        </motion.div>

        {/* GTMLab-style: dark rounded card with tabs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl overflow-hidden border border-white/8"
          style={{ background: 'linear-gradient(135deg, #2a2018 0%, #1e1a14 100%)' }}
        >
          {/* Tab bar */}
          <div className="flex border-b border-white/8 px-2 pt-2 gap-0 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`relative px-5 py-3 text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  active === tab.id ? 'text-white' : 'text-white/35 hover:text-white/60'
                }`}
              >
                {tab.label}
                {active === tab.id && (
                  <motion.div
                    layoutId="case-tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Content — GTMLab style: left image panel, right large quote */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid md:grid-cols-[280px_1fr]"
            >
              {/* Left: gradient brand panel */}
              <div className={`bg-gradient-to-br ${current.bgColor} p-8 flex flex-col justify-between min-h-[280px]`}>
                <div>
                  <span className="text-white/40 text-[10px] font-semibold uppercase tracking-widest">{current.tag}</span>
                  <div className="mt-6 w-12 h-12 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white font-serif text-xl font-bold">
                    {current.name[0]}
                  </div>
                </div>
                <div className="mt-auto pt-8">
                  <div className={`inline-flex px-3 py-1.5 rounded-full border border-white/15 bg-white/8`}>
                    <span className="text-white font-serif text-2xl font-bold">{current.metric.value}</span>
                  </div>
                  <p className="text-white/40 text-xs mt-1.5">{current.metric.label}</p>
                </div>
              </div>

              {/* Right: large serif quote */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <p className="font-serif text-2xl md:text-3xl text-white leading-[1.4] mb-8">
                  "{current.quote}"
                </p>
                <div>
                  <p className="text-white font-medium text-sm">{current.name}</p>
                  <p className="text-white/35 text-xs mt-0.5">{current.title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}