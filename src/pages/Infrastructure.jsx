import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Star } from 'lucide-react';
import WorkflowDiagram from '../components/infrastructure/WorkflowDiagram';

const tiers = [
  {
    level: '01',
    title: 'The Digital Storefront',
    tag: 'The high-speed foundation.',
    desc: 'A premium, mobile-optimized website engineered strictly to convert traffic into customers. Built and launched in days.',
    features: [
      'Sub-second Load Times',
      'Conversion-Optimized UI/UX',
      'Direct WhatsApp Lead Routing',
      'Custom Domain',
    ],
    highlight: false,
    cta: 'Get Started',
    price: 'Starting at Rp 5.5M',
  },
  {
    level: '02',
    title: 'The Local Dominance Bundle',
    tag: 'The ultimate traffic & capture system.',
    desc: 'We build your high-speed website, then wire it directly to a fully optimized Google Business Profile so you own your local search market.',
    features: [
      'Everything in Level 01',
      'Google Maps Ranking Optimization',
      'Local Keyword Targeting',
      'Advanced ROI Tracking',
    ],
    highlight: true,
    cta: 'Get the Bundle',
    price: 'Starting at Rp 12M',
    badge: 'Most Popular',
  },
  {
    level: '03',
    title: 'The Automated Pipeline',
    tag: 'Capture and qualify 24/7.',
    desc: 'Your Web and Local SEO infrastructure, supercharged with omnichannel conversational AI to answer FAQs and qualify leads while you sleep.',
    features: [
      'Everything in Level 02',
      'Custom AI Chatbot',
      'Automated Lead Routing',
      '24/7 Prospect Engagement',
    ],
    highlight: false,
    cta: 'Build My Pipeline',
    price: 'Starting at Rp 22M',
  },
];

export default function Infrastructure() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500 mb-3">Infrastructure & Pricing</p>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-6">
              Digital Infrastructure.{' '}
              <span className="text-gradient">Built for Revenue.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              We don't sell websites. We install complete lead-capture systems tailored to your business size.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Workflow Diagram */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">How the System Works</p>
            <h2 className="text-3xl font-black text-white tracking-tight">The Akar Lead Lifecycle</h2>
            <p className="text-slate-400 mt-2 text-sm">Hover over each node to reveal the technology powering it.</p>
          </motion.div>
          <WorkflowDiagram />
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">Choose Your Level</p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Three Tiers of{' '}
              <span className="text-gradient">Market Dominance</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {tiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  tier.highlight
                    ? 'bg-slate-900 border-2 border-blue-500 shadow-2xl shadow-blue-500/20 scale-105'
                    : 'bg-white border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300'
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <span className={`text-xs font-bold uppercase tracking-widest ${tier.highlight ? 'text-blue-400' : 'text-blue-600'}`}>
                    Level {tier.level}
                  </span>
                  <h3 className={`text-xl font-black mt-1 mb-2 ${tier.highlight ? 'text-white' : 'text-slate-900'}`}>
                    {tier.title}
                  </h3>
                  <p className={`text-sm font-semibold mb-3 ${tier.highlight ? 'text-blue-400' : 'text-blue-600'}`}>
                    {tier.tag}
                  </p>
                  <p className={`text-sm leading-relaxed ${tier.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                    {tier.desc}
                  </p>
                </div>

                <div className="mb-8 flex-1">
                  <ul className="space-y-3">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${tier.highlight ? 'bg-blue-500' : 'bg-emerald-100'}`}>
                          <Check className={`w-2.5 h-2.5 ${tier.highlight ? 'text-white' : 'text-emerald-600'}`} />
                        </div>
                        <span className={`text-sm ${tier.highlight ? 'text-slate-300' : 'text-slate-600'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className={`text-xs mb-3 ${tier.highlight ? 'text-slate-500' : 'text-slate-400'}`}>{tier.price}</p>
                  <Link
                    to="/audit"
                    className={`group flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                      tier.highlight
                        ? 'bg-blue-600 text-white hover:bg-blue-500 glow-blue'
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}