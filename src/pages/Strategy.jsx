import { motion } from 'framer-motion';
import { Clock, TrendingUp, Shield, CheckCircle, Bot } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';
import CalendlyWidget from '@/components/CalendlyWidget';

const copy = {
  en: {
    label: 'Systems Architecture',
    h1a: 'Ready to capture the revenue you\'re leaving',
    h1em: 'on the table?',
    sub: 'Book an in-depth strategy session with our engineering team. Whether you need to dominate your local Google Maps rankings, implement 24/7 AI lead automation, or build custom operational software, let\'s map out your exact infrastructure.',
    benefits: [
      { icon: Clock, text: 'Free 15-minute deep-dive call with a systems engineer' },
      { icon: TrendingUp, text: 'Live analysis of your current website performance' },
      { icon: Shield, text: 'Google Maps ranking audit and gap identification' },
      { icon: CheckCircle, text: 'Exact breakdown of where your leads are dropping off' },
      { icon: Bot, text: 'Architecting AI lead automation for your Social Media touchpoints (WhatsApp, IG)' },
    ],
    quote: '"Deploying infrastructure that pays for itself in weeks, not years."',
    quoteAuthor: '— Akar Systems Guarantee',
    bookTitle: 'Book Your Strategy Session',
    bookSub: 'Select a time that works for you',
    calLabel: 'Calendar Integration',
    calSub: 'Your Calendly scheduling widget will appear here. Inject the Calendly embed script into this container.',
    altContact: 'Or reach us directly',
    whatsapp: 'Chat on WhatsApp',
  },
  id: {
    label: 'Arsitektur Sistem',
    h1a: 'Siap menangkap pendapatan yang selama ini',
    h1em: 'terbuang begitu saja?',
    sub: 'Jadwalkan sesi strategi mendalam dengan tim engineer kami. Mau dominasi ranking Google Maps lokal, implementasi otomasi lead AI 24 jam, atau bangun software operasional kustom — kami petakan infrastruktur yang tepat untuk bisnis Anda.',
    benefits: [
      { icon: Clock, text: 'Sesi 15 menit gratis langsung dengan systems engineer kami' },
      { icon: TrendingUp, text: 'Analisis langsung performa website Anda saat ini' },
      { icon: Shield, text: 'Audit ranking Google Maps dan identifikasi celah yang ada' },
      { icon: CheckCircle, text: 'Breakdown tepat di mana lead Anda jatuh dan terlewat' },
      { icon: Bot, text: 'Perancangan otomasi lead AI untuk touchpoint media sosial Anda (WhatsApp, IG)' },
    ],
    quote: '"Infrastruktur yang balik modal dalam hitungan minggu, bukan tahun."',
    quoteAuthor: '— Garansi Akar Systems',
    bookTitle: 'Jadwalkan Sesi Strategi Anda',
    bookSub: 'Pilih waktu yang paling cocok untuk Anda',
    calLabel: 'Integrasi Kalender',
    calSub: 'Widget Calendly Anda akan muncul di sini.',
    altContact: 'Atau hubungi kami langsung',
    whatsapp: 'Chat di WhatsApp',
  },
};

export default function Strategy() {
  const { lang } = useLang();
  const c = copy[lang];

  return (
    <div className="bg-[#F0EDE8] min-h-screen">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-600 mb-5">{c.label}</p>
              <h1 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] tracking-tight leading-[1.1] mb-6">
                {c.h1a}{' '}
                <em className="not-italic text-green-600">{c.h1em}</em>
              </h1>
              <p className="text-base text-[#1a1a1a]/55 leading-relaxed mb-10">{c.sub}</p>

              <div className="space-y-3 mb-10">
                {c.benefits.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shrink-0 border border-black/8">
                      <b.icon className="w-3.5 h-3.5 text-[#1a1a1a]/40" />
                    </div>
                    <p className="text-[#1a1a1a]/60 text-sm leading-relaxed">{b.text}</p>
                  </motion.div>
                ))}
              </div>

              <div className="p-6 bg-[#1a1a1a] rounded-2xl">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white font-semibold text-sm shrink-0 font-serif">
                    AS
                  </div>
                  <div>
                    <p className="text-white/80 text-sm font-serif italic leading-relaxed">{c.quote}</p>
                    <p className="text-white/30 text-xs mt-2">{c.quoteAuthor}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Calendly */}
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
              <div className="bg-white rounded-2xl border border-black/8 shadow-sm overflow-hidden">
                <div className="px-7 py-6 border-b border-black/6">
                  <h3 className="font-serif text-xl text-[#1a1a1a]">{c.bookTitle}</h3>
                  <p className="text-sm text-[#1a1a1a]/45 mt-1">{c.bookSub}</p>
                </div>
                <div className="bg-[#F8F6F2]">
                  <CalendlyWidget />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}