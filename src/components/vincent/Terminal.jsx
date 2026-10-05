import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionLabel from './SectionLabel';

const tabs = [
  {
    id: 'ai',
    label: 'AI PM & Solutions Architect',
    body: "I don't just write PRDs; I prototype the AI workflows myself. Proficiency in integrating LLM capabilities directly into business logic. Expert in custom n8n workflows, RAG pipeline architecture, data classification, and automation of legacy ops.",
    tags: ['OpenAI API', 'Anthropic', 'n8n', 'Azure AI', 'Siemens AI', 'Cursor'],
  },
  {
    id: 'tpm',
    label: 'Technical PM & Web Architecture',
    body: 'End-to-end product lifecycle ownership. From PRD drafting and solution validation to deploying highly performant, scalable web applications.',
    tags: ['Astro', 'Tailwind CSS', 'Vercel', 'Supabase', 'Base44', 'Shopify'],
  },
  {
    id: 'revops',
    label: 'RevOps Leader & Founding Operator',
    body: 'Turning chaos into P&L impact. I treat sales pipelines as engineering problems. Expertise in CRM rebuilding, churn reduction, pricing strategy, cross-border logistics, and managing B2B/B2G stakeholder relationships at the highest government levels.',
    tags: [],
  },
];

export default function Terminal() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <SectionLabel num="05" title="The Technical Arsenal" />

        <div className="rounded-2xl bg-[#0a0a0a] border border-white/[0.08] overflow-hidden shadow-2xl shadow-black/50">
          {/* window chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
            </div>
            <p className="font-tech text-[10px] text-[#6a6a6a] ml-3">vincent@akar: ~/arsenal</p>
          </div>

          {/* tabs */}
          <div className="flex overflow-x-auto border-b border-white/[0.06] bg-white/[0.01] scrollbar-none">
            {tabs.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={`relative px-4 py-3 font-tech text-[11px] whitespace-nowrap transition-colors ${
                  active === i ? 'text-[#00E5A0]' : 'text-[#6a6a6a] hover:text-[#b0b0b0]'
                }`}
              >
                {t.label}
                {active === i && (
                  <motion.div
                    layoutId="termtab"
                    className="absolute bottom-0 left-0 right-0 h-px bg-[#00E5A0] shadow-[0_0_8px_rgba(0,229,160,0.7)]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* content */}
          <div className="p-6 md:p-8 min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <p className="text-sm md:text-base text-[#c0c0c0] leading-relaxed mb-6">{tab.body}</p>
                {tab.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {tab.tags.map((tg) => (
                      <span
                        key={tg}
                        className="font-tech text-[11px] px-2.5 py-1 rounded-md bg-[#00E5A0]/[0.07] border border-[#00E5A0]/20 text-[#00E5A0]"
                      >
                        {tg}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}