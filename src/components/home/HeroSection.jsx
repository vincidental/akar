import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#F0EDE8] pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <span className="px-3 py-1 bg-white border border-black/10 rounded-full text-xs font-medium text-[#1a1a1a]/60">
            50+ Businesses Deployed
          </span>
          <span className="px-3 py-1 bg-white border border-black/10 rounded-full text-xs font-medium text-green-600 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
            3× Average Lead Increase
          </span>
        </motion.div>

        {/* H1 — serif like GTMLab */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl text-[#1a1a1a] leading-[1.08] tracking-tight mb-6"
        >
          Your ads are working.{' '}
          <br className="hidden md:block" />
          But your website is{' '}
          <em className="not-italic text-green-600">losing the leads.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-[#1a1a1a]/55 max-w-xl mx-auto leading-relaxed mb-10"
        >
          Akar Systems deploys lightning-fast websites, local SEO, and AI automation so no lead goes to waste.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link to="/audit" className="btn-black flex items-center gap-2 px-6 py-3 text-sm">
            Plug the Leaks
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link to="/infrastructure" className="btn-outline-pill text-sm px-6 py-3">
            See how it works
          </Link>
        </motion.div>
      </div>
    </section>
  );
}