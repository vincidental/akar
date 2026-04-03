import HeroSection from '../components/home/HeroSection';
import AuthorityMarquee from '../components/home/AuthorityMarquee';
import LeakyBucketSection from '../components/home/LeakyBucketSection';
import CaseStudySection from '../components/home/CaseStudySection';
import FAQSection from '../components/home/FAQSection';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, MapPin, Bot } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

const offeringsData = {
  en: {
    label: 'What We Build',
    heading: 'Three levels of digital infrastructure.',
    link: 'View our infrastructure & services',
    items: [
      { icon: Zap, title: 'The Digital Storefront', desc: 'Premium, lightning-fast website built to convert traffic into customers. Launched in days.' },
      { icon: MapPin, title: 'Local Dominance Bundle', desc: 'Web + SEO wired directly to Google Business Profile. Own your local search market.' },
      { icon: Bot, title: 'The Automated Pipeline', desc: 'AI chatbot + automated lead routing that qualifies prospects 24/7 while you sleep.' },
    ],
  },
  id: {
    label: 'Yang Kami Bangun',
    heading: 'Tiga level infrastruktur digital.',
    link: 'Lihat infrastruktur & layanan kami',
    items: [
      { icon: Zap, title: 'Digital Storefront', desc: 'Website premium berkecepatan tinggi yang dirancang mengubah pengunjung jadi pelanggan. Selesai dalam hitungan hari.' },
      { icon: MapPin, title: 'Paket Dominasi Lokal', desc: 'Website + SEO yang terhubung langsung ke Google Business Profile. Kuasai hasil pencarian lokal Anda.' },
      { icon: Bot, title: 'Pipeline Otomatis', desc: 'AI chatbot + routing lead otomatis yang seleksi calon pelanggan 24 jam — bahkan saat Anda tidur.' },
    ],
  },
};

const ctaData = {
  en: { heading: "Ready to stop leaving revenue on the table?", cta: 'Plug the Leaks' },
  id: { heading: 'Siap berhenti kehilangan pelanggan setiap harinya?', cta: 'Benahi Sekarang' },
};

export default function Home() {
  const { lang } = useLang();
  const offerings = offeringsData[lang];
  const cta = ctaData[lang];

  return (
    <div>
      <HeroSection />
      <AuthorityMarquee />
      <LeakyBucketSection />

      {/* Quick Offerings */}
      <section className="py-24 bg-[#E8E4DC]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-4">{offerings.label}</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] tracking-tight leading-[1.1]">
              {offerings.heading}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {offerings.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-7 border border-black/8 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-[#F0EDE8] flex items-center justify-center mb-5">
                  <item.icon className="w-4 h-4 text-[#1a1a1a]/60" />
                </div>
                <h3 className="font-serif text-lg text-[#1a1a1a] mb-2">{item.title}</h3>
                <p className="text-sm text-[#1a1a1a]/50 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <Link to="/infrastructure" className="inline-flex items-center gap-2 text-sm font-medium text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors">
              {offerings.link}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <CaseStudySection />
      <FAQSection />

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-[#F0EDE8] px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#c4956a] via-[#b87d5a] to-[#8c6440] rounded-2xl px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-white leading-[1.15] max-w-md">
              {cta.heading}
            </h2>
            <Link
              to="/strategy"
              className="shrink-0 bg-[#1a1a1a] text-white font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-[#333] transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              {cta.cta}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}