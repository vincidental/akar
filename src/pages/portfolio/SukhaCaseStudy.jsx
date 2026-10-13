import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Film, Gift, Newspaper, Plane, Mountain, Cpu, Ticket, ArrowLeft } from 'lucide-react';
import CaseStudyHero from '@/components/portfolio/CaseStudyHero';
import ProjectGallery from '@/components/portfolio/ProjectGallery';
import StoreBadges from '@/components/portfolio/StoreBadges';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-8% 0px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const context = [
  { label: 'Embedded in', value: "Livin' by Mandiri super-app WebView" },
  { label: 'Sole source of funds', value: 'Bank Mandiri · Closed-Amount VA' },
  { label: 'Built by', value: 'Akar Systems' },
];

const modules = [
  { icon: Play, name: 'SukhaTV', desc: 'Live broadcasts and replays, anytime — streaming built for the Livin’ WebView.' },
  { icon: Film, name: 'SukhaReels', desc: 'Bite-sized entertainment and inspiration for your downtime.' },
  { icon: Gift, name: 'SukhaPromo', desc: 'Stacked discounts and a steady stream of partner promotions.' },
  { icon: Newspaper, name: 'SukhaNews', desc: 'Stay current with the latest news, even when you’re busy.' },
];

const categories = [
  { icon: Plane, name: 'Travel', partners: 'Garuda Indonesia · Injourney · KAI · WHOOSH · Traveloka · Pelni' },
  { icon: Mountain, name: 'Rekreasi', partners: 'Proliga · LaLaLa Festival · Majestic Fast Ferry · Atourin' },
  { icon: Cpu, name: 'Elektronik & Barang Digital', partners: 'IT Galeri · TP-Link · Foom' },
  { icon: Ticket, name: 'Hobby & Event', partners: 'Timnas Jersey · Hartadinata Gold · Sunnygold' },
];

const gallery = [
  'https://media.base44.com/images/public/69cc2ed917e94df8870cff9d/b2c0ce26e_Screenshot1294.png',
  'https://media.base44.com/images/public/69cc2ed917e94df8870cff9d/137e94961_Screenshot1296.png',
  'https://media.base44.com/images/public/69cc2ed917e94df8870cff9d/c4bf38db0_Screenshot1299.png',
  'https://media.base44.com/images/public/69cc2ed917e94df8870cff9d/220ac3c99_Screenshot2026-10-13091016.png',
  'https://media.base44.com/images/public/69cc2ed917e94df8870cff9d/ce2729125_97f0788b-e0a3-4c09-beaa-cedf084a9c57.JPG',
  'https://media.base44.com/images/public/69cc2ed917e94df8870cff9d/9f62293c4_849decca-fb3c-4c92-b345-60fa79acc74b.JPG',
];

export default function SukhaCaseStudy() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <CaseStudyHero
        tag="Client Work · Bank Mandiri"
        title="Mandiri Livin' Sukha"
        category="Fintech Super-App · Content & Partner Marketplace"
        description="Akar Systems designed and built the Sukha experience inside Bank Mandiri's Livin' super-app — SukhaTV, SukhaReels, SukhaPromo, and SukhaNews, plus a partner marketplace across travel, recreation, electronics, and events. Bank Mandiri remains the sole source of funds via Closed-Amount Virtual Accounts."
        url="https://www.bankmandiri.co.id/livin/sukha"
        urlLabel="Visit Sukha"
      >
        <StoreBadges />
      </CaseStudyHero>

      {/* Context strip */}
      <section className="px-6 py-12 border-t border-white/8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {context.map((c, i) => (
            <motion.div
              key={c.label}
              {...fadeUp(i * 0.08)}
              className="bg-white/[0.03] border border-white/8 rounded-2xl p-5"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-2">{c.label}</p>
              <p className="text-sm text-white/70 leading-snug">{c.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modules */}
      <section className="px-6 py-16 border-t border-white/8">
        <div className="max-w-5xl mx-auto">
          <motion.p {...fadeUp(0)} className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 mb-3">
            The Sukha Modules
          </motion.p>
          <motion.h2 {...fadeUp(0.05)} className="font-serif text-3xl md:text-4xl text-white tracking-tight mb-10">
            Everything you love, inside Livin'.
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {modules.map((m, i) => (
              <motion.div
                key={m.name}
                {...fadeUp(i * 0.06)}
                className="group bg-white/[0.03] border border-white/8 rounded-2xl p-6 hover:border-[#3949ab]/40 transition-colors flex gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#3949ab]/15 border border-[#3949ab]/25 flex items-center justify-center shrink-0">
                  <m.icon className="w-5 h-5 text-[#7986cb]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-white mb-1.5">{m.name}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner marketplace */}
      <section className="px-6 py-16 border-t border-white/8 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <motion.p {...fadeUp(0)} className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 mb-3">
            Partner Marketplace
          </motion.p>
          <motion.h2 {...fadeUp(0.05)} className="font-serif text-3xl md:text-4xl text-white tracking-tight mb-10">
            A curated marketplace across four categories.
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((c, i) => (
              <motion.div
                key={c.name}
                {...fadeUp(i * 0.06)}
                className="bg-[#0a0a0a] border border-white/8 rounded-2xl p-6 hover:border-white/20 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <c.icon className="w-4 h-4 text-[#7986cb]" />
                  <h3 className="font-sans text-sm font-semibold text-white uppercase tracking-wide">{c.name}</h3>
                </div>
                <p className="text-xs text-white/45 leading-relaxed">{c.partners}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 py-16 border-t border-white/8">
        <div className="max-w-5xl mx-auto">
          <motion.p {...fadeUp(0)} className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 mb-3">
            Project Documentation
          </motion.p>
          <motion.h2 {...fadeUp(0.05)} className="font-serif text-3xl md:text-4xl text-white tracking-tight mb-10">
            Inside the build.
          </motion.h2>
          <ProjectGallery images={gallery} />
        </div>
      </section>

      {/* Closing */}
      <section className="px-6 py-20 border-t border-white/8 text-center">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to portfolio
        </Link>
      </section>
    </div>
  );
}