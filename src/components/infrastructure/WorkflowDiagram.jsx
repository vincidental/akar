import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Zap, Bot, MessageCircle } from 'lucide-react';

const nodes = [
  {
    id: 'traffic',
    label: 'Traffic Source',
    icon: Globe,
    tooltip: {
      title: 'Multi-Channel Traffic',
      body: 'Google Ads, Meta Ads, organic search, or direct traffic — all funneled into a unified capture system.',
    },
  },
  {
    id: 'node',
    label: 'Akar Node',
    icon: Zap,
    tooltip: {
      title: 'Sub-second Local Edge Network',
      body: 'Deployed globally on Local Edge Network with CDN optimization, ensuring <1s load times from any device in Indonesia.',
    },
  },
  {
    id: 'ai',
    label: 'AI Qualifier',
    icon: Bot,
    tooltip: {
      title: 'Omnichannel CRM Routing',
      body: 'Custom AI engine qualifies intent, segments prospects by service interest, and routes high-value leads to priority channels.',
    },
  },
  {
    id: 'whatsapp',
    label: 'Client WhatsApp',
    icon: MessageCircle,
    tooltip: {
      title: 'Instant WhatsApp Notification',
      body: 'Qualified leads are pushed directly to your WhatsApp in real-time, complete with lead context and contact details.',
    },
  },
];

export default function WorkflowDiagram() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="relative py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-white/15 -translate-y-1/2 z-0" />

        {nodes.map((node, i) => (
          <div key={node.id} className="relative z-10 flex flex-col items-center w-full md:w-auto">
            {i > 0 && (
              <div className="md:hidden w-px h-6 bg-white/15 my-1" />
            )}
            <motion.button
              onHoverStart={() => setHovered(node.id)}
              onHoverEnd={() => setHovered(null)}
              onClick={() => setHovered(hovered === node.id ? null : node.id)}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className={`relative w-16 h-16 rounded-2xl border flex items-center justify-center transition-all duration-300 cursor-pointer ${
                hovered === node.id
                  ? 'bg-white text-[#1a1a1a] border-white shadow-xl'
                  : 'bg-white/8 text-white/60 border-white/15 hover:bg-white/12'
              }`}
            >
              <node.icon className="w-6 h-6" />
            </motion.button>
            <p className="mt-2.5 text-center text-xs font-medium text-white/40 max-w-[80px] leading-tight">{node.label}</p>

            <AnimatePresence>
              {hovered === node.id && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full mt-3 w-56 bg-[#2a2520] border border-white/10 rounded-xl p-4 shadow-2xl z-20"
                >
                  <p className="text-white font-semibold text-sm mb-1">{node.tooltip.title}</p>
                  <p className="text-white/45 text-xs leading-relaxed">{node.tooltip.body}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}