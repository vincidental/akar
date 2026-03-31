import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-16">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />
      
      {/* Gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse_dot" />
          Stop paying for clicks you can't catch.
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight mb-6"
        >
          Your Ads Are Working.{' '}
          <br />
          <span className="text-gradient">But Your Website</span>
          <br />
          is Losing the Leads.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Traffic is useless if your digital storefront is slow or broken. Akar Systems deploys lightning-fast, premium websites, local SEO, and AI automation to ensure no lead goes to waste.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/audit"
            className="group flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl text-base hover:bg-blue-700 transition-all duration-200 glow-blue hover:scale-105"
          >
            Plug The Leaks
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/infrastructure"
            className="group flex items-center gap-2 px-8 py-4 border-2 border-slate-200 text-slate-700 font-semibold rounded-xl text-base hover:border-slate-300 hover:bg-slate-50 transition-all duration-200"
          >
            <Play className="w-4 h-4" />
            See How It Works
          </Link>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-500"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {['B','S','D','R'].map((l, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                  {l}
                </div>
              ))}
            </div>
            <span>50+ businesses deployed</span>
          </div>
          <div className="w-px h-4 bg-slate-200 hidden sm:block" />
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Average 3x lead increase in 2 weeks</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}