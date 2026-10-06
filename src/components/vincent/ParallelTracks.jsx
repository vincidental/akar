import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';

const lanes = [
  {
    title: 'Corporate & Consulting',
    items: [
      { year: '2024 – 2025', title: 'McEasy', detail: 'Corporate Strategy → CEO Office. 16× revenue on a new unit; rebuilt CRM, cut churn 30%.' },
      { year: '2024', title: 'Deloitte SEA', detail: 'Subject Matter Expert on Indonesian & SEA logistics tech.' },
      { year: '2023', title: 'Pensieve Technology', detail: 'CEO Office Analyst, B2G. Stood up Indonesia’s 10th licensed e-sign provider.' },
      { year: 'Q2 2023', title: 'KPMG', detail: 'Management Consulting Intern. Full client inception; fastest return-offer track as a sophomore.' },
      { year: 'Early 2023', title: 'Astro', detail: 'Associate PM Intern in SEA quick-commerce.' },
      { year: '2019 – 2021', title: 'PT Perkasa Surya Prima', detail: 'Special Projects Manager. Grew equipment-parts revenue 400%.' },
    ],
  },
  {
    title: 'Ventures',
    items: [
      { year: 'Present', title: 'Akar Systems', detail: 'Founder. Digital infrastructure agency serving enterprise & SME clients.' },
      { year: '2021', title: 'Flexilis Tiles', detail: 'Founder. International trade; sole chemical supplier to a major rubber-flooring company. $100K+ in Year 1.' },
      { year: '2019 – 2021', title: 'Shopify private-label brands', detail: 'Founder. GirlChandise & Swire Audio, US-market dropshipping. $100+/day. Certified Shopify Partner.' },
    ],
  },
  {
    title: 'Education & Upskilling',
    items: [
      { year: 'Ongoing', title: 'Universitas Pelita Harapan', detail: 'BSc, Integrated Marketing Communications. Completed concurrently with all roles; no college credit, no time off.' },
      { year: '2022 – 2023', title: 'RevoU', detail: 'Full Stack Product Management. Top Honors, 100/100 across 28 rubrics; “Most Best Assignments.”' },
      { year: '2023', title: 'Y Combinator', detail: 'Startup School — Aspiring Founders Program.' },
      { year: '2023', title: 'Siemens Professional Education', detail: 'AI Data & Process Analysis (Germany).' },
      { year: '2023', title: 'Microsoft', detail: 'AI Fundamentals, Azure AI-900.' },
      { year: '2023', title: 'Hacktiv8 Indonesia', detail: 'Data Classification & Summarization (IBM Student Developer Initiative).' },
    ],
  },
];

function Lane({ title, items, i }) {
  return (
    <div className="relative pl-5 border-l border-[#1a1a1a]/10">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-[#2a7a4f]/0" />
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-tech text-[10px] tracking-[0.2em] text-[#2a7a4f] mb-5"
      >
        {title.toUpperCase()}
      </motion.p>
      <div className="space-y-5">
        {items.map((it, j) => (
          <motion.div
            key={j}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-6% 0px' }}
            transition={{ duration: 0.5, delay: j * 0.04 }}
          >
            <p className="font-tech text-[10px] text-[#1a1a1a]/40 mb-1">{it.year}</p>
            <p className="font-sans text-sm font-semibold text-[#1a1a1a]">{it.title}</p>
            <p className="text-xs text-[#1a1a1a]/55 leading-relaxed mt-1">{it.detail}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function ParallelTracks() {
  return (
    <section className="px-6 py-20 md:py-28 border-t border-[#1a1a1a]/8 bg-[#EFECE6]">
      <div className="max-w-5xl mx-auto">
        <SectionLabel
          num="03 — THE PARALLEL TIMELINE"
          title="Three tracks, running concurrently"
          kicker="These tracks ran at the same time. I completed my BSc at Universitas Pelita Harapan without pausing my studies for any of these roles — none yielded college credit, and none required time off. The overlap is the point: it's how this range of experience fits into 25 years."
        />
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {lanes.map((l, i) => (
            <Lane key={l.title} {...l} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}