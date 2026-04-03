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
                <div className="px-7 py-5 border-t border-black/6 bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
                  <p className="text-xs text-[#1a1a1a]/40">{c.altContact}</p>
                  <a
                    href="https://wa.me/62"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white font-medium rounded-full text-sm hover:bg-green-700 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    {c.whatsapp}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}