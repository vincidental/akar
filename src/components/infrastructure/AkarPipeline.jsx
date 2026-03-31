import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Globe, Bot, MessageCircle, Wrench, ChevronRight } from 'lucide-react';

const steps = [
  {
    id: 1,
    layer: 'Discovery Layer',
    title: 'Traffic Generation',
    icon: Search,
    color: 'bg-[#2a2520] border-white/15',
    iconBg: 'bg-white/10',
    iconColor: 'text-white',
    accentColor: 'text-white/60',
    problem: 'Most businesses rely on just one traffic source.',
    solution: 'We build a dual-engine intake. Local SEO / GBP captures high-intent organic search ("car detailing near me"), while paid ads are captured on both WhatsApp and a premium website.',
    tags: ['Local SEO / GBP', 'Paid Ads (Meta / Google)'],
  },
  {
    id: 2,
    layer: 'Capture Layer',
    title: 'The Digital Storefront',
    icon: Globe,
    color: 'bg-white border-black/10',
    iconBg: 'bg-[#F0EDE8]',
    iconColor: 'text-[#1a1a1a]',
    accentColor: 'text-[#1a1a1a]/50',
    problem: 'Traffic hits a slow, confusing website and bounces.',
    solution: 'All traffic is routed to the Akar High-Converting Website. Loads in under a second with elite UI/UX — trust is immediate and bounce rate drops to near zero.',
    tags: ['<1s Load Time', 'Conversion-First UI', 'Mobile Optimized'],
  },
  {
    id: 3,
    layer: 'Qualification Layer',
    title: 'AI Automation',
    icon: Bot,
    color: 'bg-[#0f2a1a] border-green-800/40',
    iconBg: 'bg-green-500/15',
    iconColor: 'text-green-400',
    accentColor: 'text-green-400/60',
    problem: 'Owners get flooded with "how much?" WhatsApp messages at 2 AM.',
    solution: 'The website funnels clicks into an Omnichannel AI Agent. It instantly answers FAQs, qualifies budget/timeline, and captures contact info 24/7.',
    tags: ['AI Chatbot', 'FAQ Automation', '24/7 Lead Capture'],
  },
  {
    id: 4,
    layer: 'Handoff Layer',
    title: 'CRM & Sales',
    icon: MessageCircle,
    color: 'bg-white border-black/10',
    iconBg: 'bg-[#F0EDE8]',
    iconColor: 'text-[#1a1a1a]',
    accentColor: 'text-[#1a1a1a]/50',
    problem: 'Leads get lost in messy spreadsheets.',
    solution: 'The AI automatically routes qualified lead data directly to the owner\'s WhatsApp or CRM — so they only spend time closing hot deals.',
    tags: ['WhatsApp Routing', 'CRM Integration', 'Hot Leads Only'],
  },
  {
    id: 5,
    layer: 'Scaling Layer',
    title: 'Custom Engineering',
    icon: Wrench,
    color: 'bg-[#1a1520] border-white/10',
    iconBg: 'bg-white/8',
    iconColor: 'text-white/70',
    accentColor: 'text-white/40',
    problem: 'The business now has so many customers they can\'t manage operations.',
    solution: 'Akar\'s network builds bespoke web apps or dashboards — inventory systems, fleet tracking, custom booking portals — to handle the scale.',
    tags: ['Custom Web Apps', 'Dashboards', 'Fleet / Booking Systems'],
  },
];

const connectorColors = [
  'from-white/20 to-white/20',
  'from-white/20 to-green-500/40',
  'from-green-500/40 to-white/20',
  'from-white/20 to-white/20',
];

export default function AkarPipeline() {
  const [active, setActive] = useState(1);
  const current = steps.find((s) => s.id === active);

  return (
    <div className="py-4">
      <div className="grid md:grid-cols-[280px_1fr] gap-6 items-start">
        {/* Left: step list */}
        <div className="flex flex-col gap-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isActive = active === step.id;
            return (
              <div key={step.id} className="flex flex-col">
                <motion.button
                  onClick={() => setActive(step.id)}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border transition-all duration-250 text-left ${
                    isActive
                      ? 'bg-white border-black/12 shadow-sm'
                      : 'border-transparent hover:bg-white/40'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-250 ${
                    isActive ? 'bg-[#1a1a1a]' : 'bg-white/40 border border-white/30'
                  }`}>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#1a1a1a]/50'}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-[10px] font-semibold uppercase tracking-wider leading-tight ${isActive ? 'text-green-600' : 'text-[#1a1a1a]/30'}`}>
                      Step {step.id} — {step.layer}
                    </p>
                    <p className={`text-sm font-semibold leading-tight mt-0.5 truncate ${isActive ? 'text-[#1a1a1a]' : 'text-[#1a1a1a]/50'}`}>
                      {step.title}
                    </p>
                  </div>
                  <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-all duration-200 ${isActive ? 'text-[#1a1a1a] translate-x-0' : 'text-[#1a1a1a]/20 -translate-x-1'}`} />
                </motion.button>
                {/* Connector dot between steps */}
                {i < steps.length - 1 && (
                  <div className="flex items-center justify-start pl-8 my-0.5">
                    <div className={`w-px h-4 ${active === step.id || active === step.id + 1 ? 'bg-[#1a1a1a]/30' : 'bg-[#1a1a1a]/10'} transition-colors`} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right: detail card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.25 }}
            className={`rounded-2xl border p-8 ${current.color}`}
          >
            {/* Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${current.iconBg}`}>
                {(() => { const Icon = current.icon; return <Icon className={`w-5 h-5 ${current.iconColor}`} />; })()}
              </div>
              <div>
                <p className={`text-[10px] font-semibold uppercase tracking-widest ${current.accentColor}`}>
                  Step {current.id} — {current.layer}
                </p>
                <h3 className={`font-serif text-2xl mt-1 ${current.id === 1 || current.id === 3 || current.id === 5 ? 'text-white' : 'text-[#1a1a1a]'}`}>
                  {current.title}
                </h3>
              </div>
            </div>

            {/* Problem / Solution */}
            <div className="space-y-4 mb-6">
              <div className={`p-4 rounded-xl ${current.id === 1 || current.id === 3 || current.id === 5 ? 'bg-white/5 border border-white/8' : 'bg-[#F0EDE8] border border-black/6'}`}>
                <p className={`text-[10px] font-bold uppercase tracking-wider mb-1.5 ${current.id === 1 || current.id === 3 || current.id === 5 ? 'text-red-400/70' : 'text-red-500/70'}`}>
                  The Problem
                </p>
                <p className={`text-sm leading-relaxed ${current.id === 1 || current.id === 3 || current.id === 5 ? 'text-white/55' : 'text-[#1a1a1a]/55'}`}>
                  {current.problem}
                </p>
              </div>
              <div className={`p-4 rounded-xl ${current.id === 1 || current.id === 3 || current.id === 5 ? 'bg-white/5 border border-white/8' : 'bg-green-50/80 border border-green-100'}`}>
                <p className={`text-[10px] font-bold uppercase tracking-wider mb-1.5 ${current.id === 1 || current.id === 3 || current.id === 5 ? 'text-green-400/70' : 'text-green-600/70'}`}>
                  The Akar Solution
                </p>
                <p className={`text-sm leading-relaxed ${current.id === 1 || current.id === 3 || current.id === 5 ? 'text-white/55' : 'text-[#1a1a1a]/55'}`}>
                  {current.solution}
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {current.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${
                    current.id === 1 || current.id === 3 || current.id === 5
                      ? 'bg-white/8 border-white/12 text-white/60'
                      : 'bg-[#F0EDE8] border-black/8 text-[#1a1a1a]/50'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}