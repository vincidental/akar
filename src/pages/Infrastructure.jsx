import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import AkarPipeline from '../components/infrastructure/AkarPipeline';
import { useLang } from '@/lib/LanguageContext';

const copy = {
  en: {
    label: 'Infrastructure & Services',
    h1a: 'Digital infrastructure.',
    h1em: 'Built for revenue.',
    sub: "We don't 'just' sell websites. We install complete lead-capture systems tailored to your business size.",
    workflowLabel: 'How the System Works',
    workflowTitle: 'The Akar Lead Lifecycle',
    workflowSub: 'Click each step to reveal the strategy and technology powering it.',
    tiersLabel: 'Choose Your Level',
    tiersHeading: 'Three tiers of market dominance.',
    mostPopular: 'Most Popular',
    tiers: [
      {
        level: '01', title: 'The Digital Storefront', tag: 'The high-speed foundation.',
        desc: 'A premium, mobile-optimized website engineered strictly to convert traffic into customers. Built and launched in days.',
        features: ['Sub-second Load Times', 'Conversion-Optimized UI/UX', 'Direct WhatsApp Lead Routing', 'Custom Domain'],
        highlight: false, cta: 'Get Started',
      },
      {
        level: '02', title: 'The Local Dominance Bundle', tag: 'The ultimate traffic & capture system.',
        desc: 'We build your high-speed website, then wire it directly to a fully optimized Google Business Profile so you own your local search market.',
        features: ['Everything in Level 01', 'Google Maps Ranking Optimization', 'Local Keyword Targeting', 'Advanced ROI Tracking'],
        highlight: true, cta: 'Get the Bundle', badge: true,
      },
      {
        level: '03', title: 'The Automated Pipeline', tag: 'Capture and qualify 24/7.',
        desc: 'Your Web and Local SEO infrastructure, supercharged with omnichannel conversational AI to answer FAQs and qualify leads while you sleep.',
        features: ['Everything in Level 02', 'Custom AI Chatbot', 'Automated Lead Routing', '24/7 Prospect Engagement'],
        highlight: false, cta: 'Build My Pipeline',
      },
    ],
  },
  id: {
    label: 'Infrastruktur & Layanan',
    h1a: 'Infrastruktur digital.',
    h1em: 'Dirancang untuk menghasilkan.',
    sub: 'Kami bukan sekadar jual website. Kami pasang sistem penangkap lead yang disesuaikan dengan skala bisnis Anda.',
    workflowLabel: 'Cara Sistem Bekerja',
    workflowTitle: 'Siklus Lead Akar',
    workflowSub: 'Klik setiap tahap untuk melihat strategi dan teknologi di baliknya.',
    tiersLabel: 'Pilih Level Anda',
    tiersHeading: 'Tiga level dominasi pasar.',
    mostPopular: 'Paling Populer',
    tiers: [
      {
        level: '01', title: 'Digital Storefront', tag: 'Fondasi berkecepatan tinggi.',
        desc: 'Website premium yang dioptimalkan untuk mobile, dirancang khusus mengubah traffic jadi pelanggan. Selesai dan tayang dalam hitungan hari.',
        features: ['Muat di Bawah 1 Detik', 'UI/UX Teroptimasi Konversi', 'Routing Lead ke WhatsApp', 'Domain Kustom'],
        highlight: false, cta: 'Mulai Sekarang',
      },
      {
        level: '02', title: 'Paket Dominasi Lokal', tag: 'Sistem traffic & penangkap lead terlengkap.',
        desc: 'Kami bangun website kecepatan tinggi Anda, lalu hubungkan langsung ke Google Business Profile yang teroptimasi penuh — supaya Anda kuasai pencarian lokal.',
        features: ['Semua di Level 01', 'Optimasi Ranking Google Maps', 'Penargetan Kata Kunci Lokal', 'Pelacakan ROI Lanjutan'],
        highlight: true, cta: 'Ambil Paketnya', badge: true,
      },
      {
        level: '03', title: 'Pipeline Otomatis', tag: 'Tangkap dan seleksi lead 24 jam.',
        desc: 'Infrastruktur Web dan SEO Lokal Anda, diperkuat dengan AI percakapan omnichannel yang jawab pertanyaan dan seleksi lead — bahkan saat Anda istirahat.',
        features: ['Semua di Level 02', 'AI Chatbot Kustom', 'Routing Lead Otomatis', 'Engagement Prospek 24/7'],
        highlight: false, cta: 'Bangun Pipeline Saya',
      },
    ],
  },
};

export default function Infrastructure() {
  const { lang } = useLang();
  const c = copy[lang];

  return (
    <div className="bg-[#F0EDE8]">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-5">{c.label}</p>
            <h1 className="font-serif text-5xl md:text-7xl text-[#1a1a1a] tracking-tight leading-[1.08] mb-6">
              {c.h1a}{' '}
              <em className="not-italic text-green-600">{c.h1em}</em>
            </h1>
            <p className="text-lg text-[#1a1a1a]/50 max-w-xl leading-relaxed">{c.sub}</p>
          </motion.div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 bg-[#E8E4DC]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#1a1a1a]/35 mb-3">{c.workflowLabel}</p>
            <h2 className="font-serif text-4xl text-[#1a1a1a] tracking-tight">{c.workflowTitle}</h2>
            <p className="text-[#1a1a1a]/45 mt-2 text-sm">{c.workflowSub}</p>
          </motion.div>
          <AkarPipeline />
        </div>
      </section>

      {/* Tiers */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-4">{c.tiersLabel}</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] tracking-tight leading-[1.1]">{c.tiersHeading}</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 items-start">
            {c.tiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  tier.highlight
                    ? 'bg-[#1a1a1a] border border-[#1a1a1a] shadow-xl'
                    : 'bg-white border border-black/8 hover:border-black/15 hover:shadow-md transition-all duration-300'
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-6">
                    <span className="px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full">{c.mostPopular}</span>
                  </div>
                )}
                <div className="mb-7">
                  <span className={`text-xs font-bold uppercase tracking-widest ${tier.highlight ? 'text-white/40' : 'text-[#1a1a1a]/35'}`}>
                    Level {tier.level}
                  </span>
                  <h3 className={`font-serif text-xl mt-1.5 mb-2 ${tier.highlight ? 'text-white' : 'text-[#1a1a1a]'}`}>{tier.title}</h3>
                  <p className={`text-xs font-semibold mb-3 ${tier.highlight ? 'text-green-400' : 'text-green-600'}`}>{tier.tag}</p>
                  <p className={`text-sm leading-relaxed ${tier.highlight ? 'text-white/50' : 'text-[#1a1a1a]/50'}`}>{tier.desc}</p>
                </div>
                <div className="mb-8 flex-1">
                  <ul className="space-y-2.5">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${tier.highlight ? 'bg-white/15' : 'bg-[#F0EDE8]'}`}>
                          <Check className={`w-2.5 h-2.5 ${tier.highlight ? 'text-white' : 'text-[#1a1a1a]/60'}`} />
                        </div>
                        <span className={`text-sm ${tier.highlight ? 'text-white/70' : 'text-[#1a1a1a]/60'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Link
                    to="/strategy"
                    className={`group flex items-center justify-center gap-2 w-full py-3 rounded-full font-medium text-sm transition-all duration-200 ${
                      tier.highlight ? 'bg-white text-[#1a1a1a] hover:bg-white/90' : 'bg-[#1a1a1a] text-white hover:bg-[#333]'
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
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