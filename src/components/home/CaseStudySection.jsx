import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  {
    id: 'detailing',
    label: 'Detailing',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    quote: "Sending our Meta Ad traffic to a basic Linktree was killing our conversions. Akar built us a premium, lightning-fast website. Their monthly GA4 reports show us exactly which touchpoints are turning into booked appointments.",
    name: "Budi Santoso",
    title: "Owner, Auto Premium Detailing — Tangerang",
    tag: "High-Ticket Web & Analytics",
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80',
    quote: "We were spending millions on ads, but our clinic was empty on weekdays. Akar rebuilt our landing page and fixed our Google Maps ranking. Within two weeks, our WhatsApp bookings tripled.",
    name: "drg. Andi W.",
    title: "Founder, Dental Clinic — South Jakarta",
    tag: "Local SEO Dominance",
  },
  {
    id: 'interior',
    label: 'Interior',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    quote: "In our industry, visual trust is everything. Akar deployed a stunning, high-speed portfolio site in 36 hours. It completely changed how high-end clients perceive us.",
    name: "Rina M.",
    title: "Director, Architecture Studio — Bali",
    tag: "Premium Website",
  },
  {
    id: 'education',
    label: 'Education',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
    quote: "The automated WhatsApp routing system acts like a 24/7 receptionist. It qualifies the parents and only sends me the hot leads ready to enroll. It gave me my time back.",
    name: "Siska P.",
    title: "English Tutor — Bekasi",
    tag: "WhatsApp Automation",
  },
  {
    id: 'logistics',
    label: 'B2B',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    quote: "Akar's engineering team built a bespoke web application to manage our fleet and client portal. Enterprise-grade, flawlessly executed, saving hundreds of operational hours.",
    name: "Haryanto T.",
    title: "Director, PT. MLI",
    tag: "Custom Software",
  },
];

export default function CaseStudySection() {
  const [active, setActive] = useState('detailing');
  const current = tabs.find((t) => t.id === active);

  return (
    <section className="py-24 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30 mb-4">Client Results</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight leading-[1.1]">
            Trusted by ambitious local businesses<br className="hidden md:block" /> and scaling brands.
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-1 mb-8 border-b border-white/10 pb-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`relative px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                active === tab.id ? 'text-white' : 'text-white/35 hover:text-white/60'
              }`}
            >
              {tab.label}
              {active === tab.id && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 rounded-2xl overflow-hidden border border-white/10"
          >
            {/* Image */}
            <div className="relative h-64 md:h-auto overflow-hidden">
              <img src={current.image} alt={current.label} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#1a1a1a]/30" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/15 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/20">
                  {current.tag}
                </span>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-[#2a2520] p-8 md:p-12 flex flex-col justify-center">
              <div className="text-5xl text-white/15 font-serif leading-none mb-4">"</div>
              <p className="font-serif text-lg md:text-xl text-white/80 leading-relaxed italic mb-8">
                {current.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white font-bold text-sm">
                  {current.name[0]}
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{current.name}</p>
                  <p className="text-white/40 text-xs">{current.title}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}