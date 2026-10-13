import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

export default function CaseStudyHero({ tag, title, category, description, url, urlLabel, children }) {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white transition-colors mb-10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to portfolio
        </Link>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 mb-4"
        >
          {tag}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl md:text-6xl text-white tracking-tight leading-[1.05] mb-4"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-sm text-white/40 mb-6"
        >
          {category}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18 }}
          className="text-lg text-white/60 max-w-2xl leading-relaxed mb-8"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.26 }}
          className="flex flex-col sm:flex-row sm:items-center gap-4"
        >
          {children}
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white border border-white/15 hover:border-white/30 rounded-full px-4 py-2 transition-colors"
            >
              {urlLabel}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}