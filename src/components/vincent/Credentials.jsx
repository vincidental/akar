import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';

const credentials = [
  {
    inst: 'Universitas Pelita Harapan',
    prog: 'BSc, Integrated Marketing Communications',
    detail: 'Completed concurrently with all corporate and venture work. No roles yielded college credit; none required time off.',
    year: 'Ongoing',
  },
  {
    inst: 'RevoU',
    prog: 'Full Stack Product Management',
    detail: 'Top Honors — 100/100 across 28 skill rubrics. “Most Best Assignments” out of a 50+ cohort.',
    year: '2022 – 2023',
  },
  {
    inst: 'Siemens Professional Education',
    prog: 'AI Data & Process Analysis',
    detail: 'Attended post-Astro, pre-KPMG.',
    year: '2023 · Germany',
  },
  {
    inst: 'Microsoft',
    prog: 'AI Fundamentals — Azure AI-900',
    detail: 'Completed concurrently with KPMG to deepen theoretical AI knowledge.',
    year: '2023',
  },
  {
    inst: 'Hacktiv8 Indonesia',
    prog: 'Data Classification & Summarization',
    detail: 'IBM Official Student Developer Initiative.',
    year: '2023',
  },
  {
    inst: 'Y Combinator',
    prog: 'Startup School — Aspiring Founders',
    detail: 'Founder-track program.',
    year: '2023',
  },
];

export default function Credentials() {
  return (
    <section className="px-6 py-20 md:py-28 border-t border-[#1a1a1a]/8 bg-[#EFECE6]">
      <div className="max-w-5xl mx-auto">
        <SectionLabel
          num="05 — CREDENTIALS"
          title="Education & upskilling"
          kicker="Formal education and intensive programs, many completed in parallel with full-time work."
        />
        <div className="border-t border-[#1a1a1a]/8">
          {credentials.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-6% 0px' }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="grid md:grid-cols-12 gap-2 md:gap-6 py-6 border-b border-[#1a1a1a]/8"
            >
              <div className="md:col-span-3">
                <p className="font-sans text-sm font-semibold text-[#1a1a1a]">{c.inst}</p>
                <p className="font-tech text-[10px] text-[#1a1a1a]/40 mt-1">{c.year}</p>
              </div>
              <div className="md:col-span-9">
                <p className="font-sans text-sm font-medium text-[#1a1a1a]/80">{c.prog}</p>
                <p className="text-xs text-[#1a1a1a]/55 leading-relaxed mt-1">{c.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}