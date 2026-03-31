import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Zap, Bot, MessageCircle } from 'lucide-react';

const nodes = [
  {
    id: 'traffic',
    label: 'Traffic Source',
    icon: Globe,
    color: 'bg-slate-700 border-slate-600',
    iconColor: 'text-slate-300',
    tooltip: {
      title: 'Multi-Channel Traffic',
      body: 'Google Ads, Meta Ads, organic search, or direct traffic — all funneled into a unified capture system.',
    },
    x: 0,
  },
  {
    id: 'node',
    label: 'Akar High-Speed Node',
    icon: Zap,
    color: 'bg-blue-600 border-blue-500',
    iconColor: 'text-white',
    tooltip: {
      title: 'Sub-second Vercel Edge Network',
      body: 'Deployed globally on Vercel Edge Network with CDN optimization, ensuring <1s load times from any device in Indonesia.',
    },
    x: 1,
  },
  {
    id: 'ai',
    label: 'AI Lead Qualifier',
    icon: Bot,
    color: 'bg-slate-800 border-blue-400',
    iconColor: 'text-blue-400',
    tooltip: {
      title: 'Omnichannel CRM Routing',
      body: 'Custom AI engine qualifies intent, segments prospects by service interest, and routes high-value leads to priority channels.',
    },
    x: 2,
  },
  {
    id: 'whatsapp',
    label: 'Client WhatsApp',
    icon: MessageCircle,
    color: 'bg-emerald-600 border-emerald-500',
    iconColor: 'text-white',
    tooltip: {
      title: 'Instant WhatsApp Notification',
      body: 'Qualified leads are pushed directly to your WhatsApp in real-time, complete with lead context and contact details.',
    },
    x: 3,
  },
];

export default function WorkflowDiagram() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="relative py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-slate-600 via-blue-500 to-emerald-500 -translate-y-1/2 z-0" />

        {nodes.map((node, i) => (
          <div key={node.id} className="relative z-10 flex flex-col items-center w-full md:w-auto">
            {/* Arrow between nodes on mobile */}
            {i > 0 && (
              <div className="md:hidden w-0.5 h-8 bg-gradient-to-b from-blue-400 to-emerald-400 my-1" />
            )}

            <motion.button
              onHoverStart={() => setHovered(node.id)}
              onHoverEnd={() => setHovered(null)}
              onClick={() => setHovered(hovered === node.id ? null : node.id)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className={`relative w-20 h-20 rounded-2xl border-2 flex flex-col items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer ${node.color} ${hovered === node.id ? 'shadow-lg shadow-blue-500/30 scale-105' : ''}`}
            >
              <node.icon className={`w-7 h-7 ${node.iconColor}`} />
              {hovered === node.id && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute -inset-1 rounded-2xl border-2 border-blue-400/50 animate-pulse"
                />
              )}
            </motion.button>
            <p className="mt-3 text-center text-xs font-semibold text-slate-300 max-w-[90px] leading-tight">{node.label}</p>

            {/* Tooltip */}
            <AnimatePresence>
              {hovered === node.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-4 w-60 bg-slate-900 border border-slate-700 rounded-xl p-4 shadow-2xl z-20"
                >
                  <p className="text-blue-400 font-semibold text-sm mb-1">{node.tooltip.title}</p>
                  <p className="text-slate-400 text-xs leading-relaxed">{node.tooltip.body}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}