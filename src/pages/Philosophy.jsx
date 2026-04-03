import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Cpu, BarChart2, Shield } from 'lucide-react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';

const copy = {
  en: {
    rootsLabel: 'Our Roots',
    h1a: 'Silicon Valley tech.',
    h1em: 'Planted in local roots.',
    heroSub: 'We brought the automated growth systems and AI architectures used by top tech companies back to Indonesia. Akar Systems exists to give local service businesses the exact same conversion power as global enterprises.',
    principlesLabel: 'How We Think',
    principlesTitle: 'The four engineering principles.',
    principles: [
      { icon: Globe, title: 'Infrastructure First', desc: 'We treat every website as a load-bearing pillar — not a brochure. Every decision is engineered for speed, uptime, and conversion.' },
      { icon: BarChart2, title: 'Revenue-Centric Measurement', desc: 'Vanity metrics are noise. We instrument your funnel with GA4, heatmaps, and conversion tracking so every rupiah is accountable.' },
      { icon: Cpu, title: 'Automation as Leverage', desc: "The world's best companies don't answer the same question 50 times a day. We build systems that let your team focus on high-value work." },
      { icon: Shield, title: 'Trust Through Design', desc: 'Your website is your firm handshake. We design experiences that signal premium quality before a single word is read.' },
    ],
    originLabel: 'The Origin',
    originTitle: 'Why we came\nback home.',
    originBody: [
      'After working inside the systems that power Google, Shopify, and McKinsey — we saw the same pattern everywhere: Indonesian businesses were paying global ad rates but receiving no returns because their digital infrastructure was fundamentally broken.',
      "The gap wasn't talent or budget. It was architecture. The same AI-driven, performance-optimized systems that Fortune 500 companies take for granted simply didn't exist for local service businesses here.",
      'We built Akar Systems to close that gap permanently.',
    ],
    stats: [
      { stat: '3×', label: 'Average lead increase' },
      { stat: '<1s', label: 'Target page load time' },
      { stat: '50+', label: 'Businesses deployed' },
      { stat: '100%', label: 'Client retention rate' },
    ],
    customBadge: 'By invitation only',
    customTitle: 'Beyond the core:\nCustom engineering\n& bespoke AI.',
    customSub: 'Need something more complex? Our network of AI/ML engineers and full-stack developers build bespoke web applications, native mobile apps, and custom workflow architectures for scaling operations.',
    customItems: [
      { title: 'Custom Web Applications', desc: 'Fleet management, client portals, dashboards' },
      { title: 'AI/ML Systems', desc: 'Custom models, NLP pipelines, automation engines' },
      { title: 'Native Mobile Apps', desc: 'iOS & Android for enterprise-grade experiences' },
    ],
    customCta: 'Inquire for Custom Scope',
  },
  id: {
    rootsLabel: 'Tentang Kami',
    h1a: 'Teknologi Silicon Valley.',
    h1em: 'Berakar di tanah sendiri.',
    heroSub: 'Kami bawa pulang sistem pertumbuhan otomatis dan arsitektur AI yang dipakai perusahaan teknologi terbaik dunia — dan terapkan untuk bisnis lokal Indonesia. Akar Systems hadir supaya usaha lokal punya kekuatan konversi yang sama dengan perusahaan global.',
    principlesLabel: 'Cara Kami Berpikir',
    principlesTitle: 'Empat prinsip rekayasa kami.',
    principles: [
      { icon: Globe, title: 'Infrastruktur Dulu', desc: 'Kami perlakukan setiap website sebagai pilar utama bisnis — bukan sekadar brosur online. Setiap keputusan direkayasa untuk kecepatan, uptime, dan konversi.' },
      { icon: BarChart2, title: 'Ukur yang Menghasilkan', desc: 'Metrik kosong itu tidak bermakna. Kami pasang GA4, heatmap, dan tracking konversi supaya setiap rupiah bisa dipertanggungjawabkan.' },
      { icon: Cpu, title: 'Otomasi sebagai Leverage', desc: 'Perusahaan terbaik dunia tidak menjawab pertanyaan yang sama 50 kali sehari. Kami bangun sistem yang membebaskan tim Anda untuk fokus pada pekerjaan bernilai tinggi.' },
      { icon: Shield, title: 'Kepercayaan Lewat Desain', desc: 'Website Anda adalah jabat tangan pertama dengan pelanggan. Kami rancang pengalaman yang menyampaikan kualitas premium — bahkan sebelum satu kata pun dibaca.' },
    ],
    originLabel: 'Asal Mula',
    originTitle: 'Kenapa kami\npulang kampung.',
    originBody: [
      'Setelah bekerja di dalam sistem yang menggerakkan Google, Shopify, dan McKinsey — kami melihat pola yang sama di mana-mana: bisnis Indonesia membayar biaya iklan sekelas global, tapi hasilnya nol karena infrastruktur digital mereka rusak dari dasarnya.',
      'Masalahnya bukan soal kurang talent atau kurang modal. Tapi soal arsitektur. Sistem berperforma tinggi yang ditenagai AI — yang dianggap wajar oleh perusahaan Fortune 500 — sama sekali tidak tersedia untuk bisnis lokal di sini.',
      'Kami bangun Akar Systems untuk menutup kesenjangan itu selamanya.',
    ],
    stats: [
      { stat: '3×', label: 'Rata-rata peningkatan lead' },
      { stat: '<1 detik', label: 'Target waktu muat halaman' },
      { stat: '50+', label: 'Bisnis yang sudah berjalan' },
      { stat: '100%', label: 'Tingkat retensi klien' },
    ],
    customBadge: 'Hanya untuk undangan',
    customTitle: 'Lebih dari sekadar itu:\nEngineering kustom\n& AI bespoke.',
    customSub: 'Butuh sesuatu yang lebih kompleks? Jaringan AI/ML engineer dan full-stack developer kami bangun web application kustom, native mobile apps, dan arsitektur workflow untuk operasi yang sedang berkembang.',
    customItems: [
      { title: 'Web Application Kustom', desc: 'Manajemen armada, portal klien, dashboard operasional' },
      { title: 'Sistem AI/ML', desc: 'Model kustom, pipeline NLP, mesin otomasi' },
      { title: 'Native Mobile Apps', desc: 'iOS & Android untuk pengalaman sekelas enterprise' },
    ],
    customCta: 'Konsultasi Scope Kustom',
  },
};

export default function Philosophy() {
  const location = useLocation();
  const { lang } = useLang();
  const c = copy[lang];

  useEffect(() => {
    if (location.hash === '#custom') {
      setTimeout(() => document.getElementById('custom')?.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  }, [location]);

  return (
    <div className="bg-[#F0EDE8]">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-5">{c.rootsLabel}</p>
            <h1 className="font-serif text-5xl md:text-7xl text-[#1a1a1a] tracking-tight leading-[1.08] mb-8 max-w-3xl">
              {c.h1a}{' '}
              <em className="not-italic text-green-600">{c.h1em}</em>
            </h1>
            <p className="text-lg text-[#1a1a1a]/50 max-w-2xl leading-relaxed">{c.heroSub}</p>
          </motion.div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 bg-[#E8E4DC]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-4">{c.principlesLabel}</p>
            <h2 className="font-serif text-4xl text-[#1a1a1a] tracking-tight">{c.principlesTitle}</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {c.principles.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 bg-white rounded-2xl border border-black/8 hover:shadow-md transition-all duration-300"
              >
                <div className="w-9 h-9 bg-[#F0EDE8] rounded-lg flex items-center justify-center mb-4">
                  <p.icon className="w-4 h-4 text-[#1a1a1a]/50" />
                </div>
                <h3 className="font-serif text-base text-[#1a1a1a] mb-2">{p.title}</h3>
                <p className="text-sm text-[#1a1a1a]/50 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 bg-[#F0EDE8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-4">{c.originLabel}</p>
              <h2 className="font-serif text-4xl text-[#1a1a1a] tracking-tight leading-[1.1] mb-6">
                {c.originTitle.split('\n').map((line, i) => <span key={i}>{line}{i < c.originTitle.split('\n').length - 1 && <br />}</span>)}
              </h2>
              <div className="space-y-4 text-[#1a1a1a]/55 text-base leading-relaxed">
                {c.originBody.map((para, i) => (
                  <p key={i} className={i === c.originBody.length - 1 ? 'font-medium text-[#1a1a1a]/80' : ''}>{para}</p>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-2 gap-4">
              {c.stats.map((item, i) => (
                <div key={i} className="p-7 bg-white rounded-2xl border border-black/8 text-center">
                  <p className="font-serif text-4xl text-green-600 mb-1">{item.stat}</p>
                  <p className="text-sm text-[#1a1a1a]/45">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Custom Engineering */}
      <section id="custom" className="py-24 bg-[#1a1a1a]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/8 border border-white/12 rounded-full text-white/60 text-xs font-medium mb-8">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
              {c.customBadge}
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight leading-[1.1] mb-6">
              {c.customTitle.split('\n').map((line, i, arr) => (
                <span key={i}>
                  {i === 1 ? <em className="not-italic text-green-400">{line}</em> : line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </h2>
            <p className="text-lg text-white/45 max-w-2xl leading-relaxed mb-12">{c.customSub}</p>
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {c.customItems.map((item, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <h4 className="text-white font-serif text-base mb-2">{item.title}</h4>
                  <p className="text-white/40 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <Link to="/strategy" className="inline-flex items-center gap-2 bg-white text-[#1a1a1a] font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-white/90 transition-colors">
              {c.customCta}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}