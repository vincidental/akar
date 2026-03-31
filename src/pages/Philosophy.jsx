import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Cpu, BarChart2, Shield } from 'lucide-react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const principles = [
  {
    icon: Globe,
    title: 'Infrastructure First',
    desc: 'We treat every website as a load-bearing pillar — not a brochure. Every decision is engineered for speed, uptime, and conversion.',
  },
  {
    icon: BarChart2,
    title: 'Revenue-Centric Measurement',
    desc: 'Vanity metrics are noise. We instrument your funnel with GA4, heatmaps, and conversion tracking so every rupiah is accountable.',
  },
  {
    icon: Cpu,
    title: 'Automation as Leverage',
    desc: 'The world\'s best companies don\'t answer the same question 50 times a day. We build systems that let your team focus on high-value work.',
  },
  {
    icon: Shield,
    title: 'Trust Through Design',
    desc: 'Your website is your firm handshake. We design experiences that signal premium quality before a single word is read.',
  },
];

export default function Philosophy() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#custom') {
      setTimeout(() => {
        document.getElementById('custom')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500 mb-3">Our Roots</p>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-8 max-w-3xl leading-[1.05]">
              Silicon Valley Tech.{' '}
              <span className="text-gradient">Planted in Local Roots.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
              We brought the automated growth systems and AI architectures used by top tech companies back to Indonesia. Akar Systems exists to give local service businesses the exact same conversion power as global enterprises. We are former operators from the world's top tech and consulting firms, building the digital backbone for local growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">How We Think</p>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">The Four Engineering Principles</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <p.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">The Origin</p>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-6">
                Why we came<br />back home.
              </h2>
              <div className="space-y-4 text-slate-500 leading-relaxed">
                <p>
                  After working inside the systems that power Google, Shopify, and McKinsey — we saw the same pattern everywhere: Indonesian businesses were paying global ad rates but receiving no returns because their digital infrastructure was fundamentally broken.
                </p>
                <p>
                  The gap wasn't talent or budget. It was architecture. The same AI-driven, performance-optimized systems that Fortune 500 companies take for granted simply didn't exist for local service businesses here.
                </p>
                <p>
                  We built Akar Systems to close that gap permanently.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { stat: '3x', label: 'Average lead increase' },
                { stat: '<1s', label: 'Target page load time' },
                { stat: '50+', label: 'Businesses deployed' },
                { stat: '100%', label: 'Client retention rate' },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                  <p className="text-3xl font-black text-blue-600 mb-1">{item.stat}</p>
                  <p className="text-sm text-slate-500">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Custom Engineering - Dark Section */}
      <section id="custom" className="py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              By invitation only
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
              Beyond the Core:<br />
              <span className="text-gradient">Custom Engineering</span><br />
              & Bespoke AI.
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
              Need something more complex? Our network of AI/ML engineers and full-stack developers build bespoke web applications, native mobile apps, and custom workflow architectures for scaling operations.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {[
                { title: 'Custom Web Applications', desc: 'Fleet management, client portals, dashboards' },
                { title: 'AI/ML Systems', desc: 'Custom models, NLP pipelines, automation engines' },
                { title: 'Native Mobile Apps', desc: 'iOS & Android for enterprise-grade experiences' },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl text-left">
                  <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <Link
              to="/audit"
              className="inline-flex items-center gap-2 px-10 py-4 bg-blue-600 text-white font-bold rounded-xl text-base hover:bg-blue-500 transition-all duration-200 glow-blue hover:scale-105"
            >
              Inquire for Custom Scope
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}