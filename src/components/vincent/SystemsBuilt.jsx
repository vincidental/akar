import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';

const systems = [
  {
    label: 'Growth system',
    org: 'McEasy',
    result: '16× revenue in 3.5 months',
    body: 'Launched a new business unit from a blank spreadsheet, managing pricing, sales, and fulfillment for a 20+ person commercial team.',
  },
  {
    label: 'Retention & CRM',
    org: 'McEasy',
    result: '−30% churn in half the projected timeline',
    body: 'Led a P0 rebuild of the CRM and post-sales function from the ground up.',
  },
  {
    label: 'B2G company formation',
    org: 'Pensieve Technology',
    result: "Indonesia's 10th licensed e-sign provider",
    body: 'Sole analyst standing up a new portfolio company, working with senior government stakeholders in Indonesia and the Philippines.',
  },
  {
    label: 'Commercial growth',
    org: 'PT Perkasa Surya Prima',
    result: '+400% parts revenue',
    body: 'Special Projects Manager driving equipment-parts revenue growth.',
  },
  {
    label: 'Founder execution',
    org: 'Flexilis Tiles',
    result: '$100K+ revenue in Year 1',
    body: 'Bootstrapped an international trade business; became the sole chemical supplier to a major Indonesian rubber-flooring company.',
  },
  {
    label: 'E-commerce operations',
    org: 'GirlChandise · Swire Audio',
    result: '$100+/day, US market',
    body: 'Built and operated Shopify private-label brands across storefront, marketing, and overseas supplier logistics.',
  },
];

const leverage = [
  { group: 'AI & Automation', tools: 'OpenAI · Claude Code · n8n · Azure AI · GitHub Copilot · Cursor' },
  { group: 'Web Architecture', tools: 'Astro · Tailwind CSS · Vercel · Supabase · Base44' },
  { group: 'Operations & RevOps', tools: 'Salesforce · HubSpot · Zoho · SPSE (B2G) · Oracle NetSuite · Docusign CLM · Stripe Billing' },
];

export default function SystemsBuilt() {
  return (
    <section className="px-6 py-20 md:py-28 border-t border-[#1a1a1a]/8">
      <div className="max-w-5xl mx-auto">
        <SectionLabel
          num="04 — SYSTEMS BUILT"
          title="Problems solved, not buzzwords"
          kicker="A selection of real systems I've built and the outcomes they produced."
        />

        <div className="border-t border-[#1a1a1a]/8">
          {systems.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-6% 0px' }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="grid md:grid-cols-12 gap-3 md:gap-6 py-6 border-b border-[#1a1a1a]/8"
            >
              <div className="md:col-span-3">
                <p className="font-tech text-[10px] tracking-[0.2em] text-[#2a7a4f] mb-1.5">{s.label.toUpperCase()}</p>
                <p className="text-xs text-[#1a1a1a]/45">{s.org}</p>
              </div>
              <div className="md:col-span-6">
                <p className="text-sm text-[#1a1a1a]/65 leading-relaxed">{s.body}</p>
              </div>
              <div className="md:col-span-3 md:text-right">
                <p className="font-sans text-sm font-semibold text-[#1a1a1a]">{s.result}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14">
          <p className="font-tech text-[10px] tracking-[0.2em] text-[#1a1a1a]/40 mb-5">HOW I DELIVER LEVERAGE</p>
          <div className="space-y-4">
            {leverage.map((l, i) => (
              <motion.div
                key={l.group}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="grid md:grid-cols-4 gap-2 md:gap-6 py-3 border-b border-[#1a1a1a]/8"
              >
                <p className="font-sans text-sm font-medium text-[#1a1a1a]">{l.group}</p>
                <p className="md:col-span-3 font-tech text-xs text-[#1a1a1a]/55 leading-relaxed">{l.tools}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}