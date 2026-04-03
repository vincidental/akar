import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

const copy = {
  en: {
    badge1: '50+ Businesses Deployed',
    badge2: '3× Average Lead Increase',
    h1a: 'Your ads are working.',
    h1b: 'But your website is ',
    h1em: 'losing the leads.',
    sub: 'Akar Systems deploys lightning-fast websites, local SEO, and AI automation so no lead goes to waste.',
    cta1: 'Plug the Leaks',
    cta2: 'See How It Works',
  },
  id: {
    badge1: '50+ Bisnis Sudah Berjalan',
    badge2: '3× Rata-rata Peningkatan Lead',
    h1a: 'Iklan Anda sudah jalan.',
    h1b: 'Tapi websitenya ',
    h1em: 'yang buang pelanggan.',
    sub: 'Akar Systems bangun website super cepat, SEO lokal, dan otomasi AI — supaya tidak ada satu pun lead yang terlewat.',
    cta1: 'Benahi Sekarang',
    cta2: 'Lihat Cara Kerjanya',
  },
};

export default function HeroSection() {
  const { lang } = useLang();
  const c = copy[lang];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#F0EDE8] pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <span className="px-3 py-1 bg-white border border-black/10 rounded-full text-xs font-medium text-[#1a1a1a]/60">
            {c.badge1}
          </span>
          <span className="px-3 py-1 bg-white border border-black/10 rounded-full text-xs font-medium text-green-600 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
            {c.badge2}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl text-[#1a1a1a] leading-[1.08] tracking-tight mb-6"
        >
          {c.h1a}{' '}
          <br className="hidden md:block" />
          {c.h1b}
          <em className="not-italic text-green-600">{c.h1em}</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-[#1a1a1a]/55 max-w-xl mx-auto leading-relaxed mb-10"
        >
          {c.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link to="/strategy" className="btn-black flex items-center gap-2 px-6 py-3 text-sm">
            {c.cta1}
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link to="/infrastructure" className="btn-outline-pill text-sm px-6 py-3">
            {c.cta2}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}