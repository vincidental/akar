import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function PortfolioCTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-green-600/12 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs font-medium mb-8">
            <Sparkles className="w-3 h-3" />
            Ready to be next?
          </div>

          <h2 className="font-serif text-4xl md:text-6xl text-white leading-[1.1] tracking-tight mb-6">
            Your business deserves{' '}
            <em className="not-italic text-green-400">this level</em> of execution.
          </h2>

          <p className="text-lg text-white/40 mb-10 leading-relaxed max-w-xl mx-auto">
            Every project above started with a single conversation.
            Let's talk about what we can build for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/strategy"
              className="inline-flex items-center gap-2 bg-white text-[#0a0a0a] font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-white/90 transition-colors"
            >
              Book a Strategy Call
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/infrastructure"
              className="inline-flex items-center gap-2 bg-white/8 text-white/70 font-medium px-7 py-3.5 rounded-full text-sm border border-white/12 hover:bg-white/12 transition-colors"
            >
              See Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}