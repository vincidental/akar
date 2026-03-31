import HeroSection from '../components/home/HeroSection';
import AuthorityMarquee from '../components/home/AuthorityMarquee';
import LeakyBucketSection from '../components/home/LeakyBucketSection';
import CaseStudySection from '../components/home/CaseStudySection';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, MapPin, Bot } from 'lucide-react';

const offerings = [
  {
    icon: Zap,
    title: 'The Digital Storefront',
    desc: 'Premium, lightning-fast website built to convert traffic into customers. Launched in days.',
    color: 'blue',
  },
  {
    icon: MapPin,
    title: 'Local Dominance Bundle',
    desc: 'Web + SEO wired directly to Google Business Profile. Own your local search market.',
    color: 'emerald',
  },
  {
    icon: Bot,
    title: 'The Automated Pipeline',
    desc: 'AI chatbot + automated lead routing that qualifies prospects 24/7 while you sleep.',
    color: 'blue',
  },
];

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AuthorityMarquee />
      <LeakyBucketSection />

      {/* Quick Offerings */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">What We Build</p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Three Levels of<br />
              <span className="text-gradient">Digital Infrastructure</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {offerings.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center ${item.color === 'blue' ? 'bg-blue-50' : 'bg-emerald-50'}`}>
                  <item.icon className={`w-6 h-6 ${item.color === 'blue' ? 'text-blue-600' : 'text-emerald-600'}`} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/infrastructure"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-all duration-200 hover:scale-105"
            >
              View Full Infrastructure & Pricing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CaseStudySection />

      {/* Bottom CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
              Ready to stop leaving<br />
              <span className="text-gradient">revenue on the table?</span>
            </h2>
            <p className="text-xl text-slate-500 mb-10">
              Book a free 15-minute systems audit. We'll show you exactly where your leads are dropping off.
            </p>
            <Link
              to="/audit"
              className="inline-flex items-center gap-2 px-10 py-4 bg-blue-600 text-white font-bold rounded-xl text-lg hover:bg-blue-700 transition-all duration-200 glow-blue hover:scale-105"
            >
              Book Your Free Audit
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}