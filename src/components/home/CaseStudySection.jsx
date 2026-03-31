import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  {
    id: 'detailing',
    label: 'Detailing',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    quote: "Sending our Meta Ad traffic to a basic Linktree was killing our conversions. Akar Systems built us a premium, lightning-fast website. The best part? Their monthly GA4 digital performance reports show us exactly which touchpoints are turning into booked appointments.",
    name: "Budi Santoso",
    title: "Owner, Auto Premium Detailing (Tangerang)",
    tag: "High-Ticket Web & Analytics",
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80',
    quote: "We were spending millions on ads, but our clinic was empty on weekdays. Akar rebuilt our landing page and fixed our Google Maps ranking. Within two weeks, our WhatsApp bookings tripled. People searching locally actually found a professional site they could trust.",
    name: "drg. Andi W.",
    title: "Founder, Dental Clinic (South Jakarta)",
    tag: "Local SEO Dominance",
  },
  {
    id: 'interior',
    label: 'Interior',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    quote: "In our industry, visual trust is everything. Akar deployed a stunning, high-speed portfolio site for us in just 36 hours. It completely changed how high-end clients perceive us. The site does the heavy lifting, capturing leads effortlessly while we focus on design.",
    name: "Rina M.",
    title: "Director, Architecture Studio (Bali)",
    tag: "Premium Website",
  },
  {
    id: 'education',
    label: 'Education',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
    quote: "I used to spend half my day answering the exact same DMs about class schedules and pricing. The automated WhatsApp routing system Akar installed acts like a 24/7 receptionist. It qualifies the parents and only sends me the hot leads ready to enroll. It gave me my time back.",
    name: "Siska P.",
    title: "English Tutor (Bekasi)",
    tag: "WhatsApp Automation",
  },
  {
    id: 'logistics',
    label: 'B2B Logistics',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    quote: "We outgrew our off-the-shelf software. Akar's engineering team built a bespoke web application to manage our fleet and client portal. It's enterprise-grade, flawlessly executed, and has saved us hundreds of operational hours. True technical partners.",
    name: "Haryanto T.",
    title: "Director, PT. MLI",
    tag: "Custom Software",
  },
];

export default function CaseStudySection() {
  const [active, setActive] = useState('detailing');
  const current = tabs.find((t) => t.id === active);

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">Client Results</p>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Trusted by ambitious local businesses<br className="hidden md:block" /> and scaling brands.
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-1 justify-center mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`relative px-5 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg ${
                active === tab.id ? 'text-blue-400' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {tab.label}
              {active === tab.id && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 rounded-2xl overflow-hidden border border-slate-800"
          >
            {/* Image */}
            <div className="relative h-72 md:h-auto overflow-hidden">
              <img
                src={current.image}
                alt={current.label}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                  {current.tag}
                </span>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-slate-900 p-8 md:p-12 flex flex-col justify-center">
              <div className="text-5xl text-blue-500/30 font-serif leading-none mb-4">"</div>
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-light mb-8">
                {current.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white font-bold text-sm">
                  {current.name[0]}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{current.name}</p>
                  <p className="text-slate-500 text-xs">{current.title}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}