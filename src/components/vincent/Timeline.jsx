import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionLabel from './SectionLabel';

const nodes = [
  {
    period: '2019 — 2021',
    title: 'The Foundation',
    items: [
      'Scaled private label Shopify stores (US Market). Certified Shopify Partner.',
      'Special Projects Manager at PT Perkasa Surya Prima. Grew equipment parts revenue by 400%.',
    ],
  },
  {
    period: '2022 — Early 2023',
    title: 'Product & Execution',
    items: [
      'RevoU Full Stack Product Management. Awarded Top Honors (100/100 perfect score across 28 skill rubrics).',
      'Associate Product Manager Intern at Astro (SEA).',
    ],
  },
  {
    period: 'The 2023 Blitz',
    title: 'The Ultimate Proof of Bandwidth',
    items: [
      'Big 4 Consulting: KPMG Management Consulting Intern (Business Transformation).',
      'Global AI: Siemens Professional Education (Germany) — AI Data and Process Analysis.',
      'Tech Up-skilling: Microsoft AI Fundamentals Bootcamp (Azure AI-900).',
      'B2G Strategy: CEO Office Analyst at Pensieve Technology. Served in a strategic think tank working alongside The Philippines President\'s (BBM) OPS Undersecretary and Indonesia\'s Coordinating Minister, Pak Luhut. Sole analyst to stand up a new portfolio company, certifying it as Indonesia\'s 10th licensed e-sign provider.',
    ],
  },
  {
    period: '2024 — 2025',
    title: 'The Executive Level',
    items: [
      'Corporate Strategy to CEO Office (Expansion): McEasy. Led P0 initiatives, rebuilt CRM systems, slashed churn, and 16x\'d a new business unit.',
      'Subject Matter Expert: Engaged by Deloitte SEA.',
      'Chief of Staff: Co-pilot to YC-backed Alumni and Forbes 30-under-30 Founders.',
    ],
  },
  {
    period: 'Present',
    title: 'The Hybrid Builder',
    items: [
      'Venture Building & Applied AI: Architecting custom AI workflows, deploying automation infrastructure, and engineering high-leverage web applications.',
    ],
  },
];

function Node({ period, title, items, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="absolute left-0 -translate-x-1/2 top-1.5 w-3 h-3 rounded-full bg-[#050505] border-2 border-[#00E5A0] shadow-[0_0_10px_rgba(0,229,160,0.7)]"
      />
      <p className="font-tech text-[11px] tracking-[0.2em] text-[#00E5A0] mb-2">{period}</p>
      <h3 className="font-sans text-lg md:text-2xl font-semibold text-[#f0f0f0] mb-3">{title}</h3>
      <ul className="space-y-2.5">
        {items.map((it, j) => {
          const idx = it.indexOf(':');
          const hasLabel = idx > 0 && idx < 28;
          return (
            <li key={j} className="text-sm text-[#9a9a9a] leading-relaxed flex gap-2.5">
              <span className="text-[#00E5A0] mt-0.5 shrink-0">▸</span>
              <span>
                {hasLabel ? (
                  <>
                    <span className="text-[#00E5A0] font-medium">{it.slice(0, idx + 1)}</span>
                    {it.slice(idx + 1)}
                  </>
                ) : (
                  it
                )}
              </span>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}

export default function Timeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.4'] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="relative px-6 py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        <SectionLabel num="04" title="Velocity & Bandwidth" />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-base text-[#9a9a9a] leading-relaxed max-w-2xl mb-16"
        >
          I do not operate on traditional timelines. My entire career has been built on parallel
          execution. While pursuing my BSc in Integrated Marketing Communications (Universitas
          Pelita Harapan), I concurrently ran ventures, accelerated through intensive academics,
          and delivered in elite corporate environments. None of these internships were for college
          credit or required time off; they were executed independently alongside a full-time
          academic load.
        </motion.p>

        <div className="relative pl-8 md:pl-10">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-white/[0.08]" />
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-0 top-2 bottom-2 w-px bg-[#00E5A0] origin-top shadow-[0_0_8px_rgba(0,229,160,0.6)]"
          />
          <div className="space-y-12">
            {nodes.map((n, i) => (
              <Node key={i} {...n} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}