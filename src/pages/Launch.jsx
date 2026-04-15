import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Zap, Clock, Shield, Globe, Smartphone, Search, Wifi,
  MessageCircle, Lock, CheckCircle2, Star, ArrowRight, Users, TrendingUp, Award, MapPin, Eye
} from 'lucide-react';
import { useState } from 'react';
import { useLang } from '@/lib/LanguageContext';
import CalendlyWidget from '@/components/CalendlyWidget';
import GBPShowcaseSection from '@/components/launch/GBPShowcaseSection';
import CurvedConnector from '@/components/launch/CurvedConnector';
import FeatureModal from '@/components/launch/FeatureModal';

const content = {
  en: {
    badge: 'Limited Monthly Slots',
    headline1: 'The 48-Hour Launch.',
    headline2: 'Your Premium Website,',
    headline3: 'Live by the Weekend.',
    sub: "Skip the 3-month agency build times and endless revisions. For ambitious business owners who need immediate results — we design, build, and deploy a complete, professional website in just 48 hours.",
    subBold: "Secure your spot before slots run out.",
    whatYouGet: "Everything You Get",
    whatYouGetSub: "A fully equipped, battle-ready website. Not a template, not a page builder. A real premium product.",
    features: [
      { icon: Shield, title: 'SSL Certificate', desc: 'Full HTTPS security. Builds trust instantly with visitors and required by Google for ranking.' },
      { icon: Globe, title: 'Premium Domain', desc: 'Your own professional .com or .id domain. We handle registration and DNS setup completely.' },
      { icon: Zap, title: 'High-Performance Cloud Hosting', desc: 'Sub-second load times on enterprise-grade cloud infrastructure. No shared hosting slowness.' },
      { icon: Smartphone, title: 'Mobile Responsive', desc: '100% optimized for phones and tablets. Over 70% of Indonesian web traffic is mobile.' },
      { icon: Search, title: 'SEO-Friendly Architecture', desc: 'Built with Google-approved structure, meta tags, sitemaps, and schema markup from day one.' },
      { icon: MessageCircle, title: 'WhatsApp CTA Integration', desc: 'One-tap WhatsApp button to capture leads instantly. The #1 sales channel in Indonesia.' },
      { icon: Globe, title: 'Blog / Article Directory', desc: 'Full content section to build authority, drive organic traffic, and educate your customers.' },
      { icon: Wifi, title: 'Google Analytics + Tracking', desc: 'See exactly who visits, where they come from, and what they do. Data-driven from day one.' },
      { icon: Award, title: 'Custom Branding & Design', desc: 'Pixel-perfect design tailored to your brand identity — not a template anyone else uses.' },
      { icon: TrendingUp, title: 'Conversion-Optimized UI', desc: 'Every button, section, and CTA engineered to turn visitors into paying customers.' },
      { icon: Lock, title: 'Admin Dashboard Access', desc: 'Full CMS access to update content, photos, and pricing yourself — no coding needed.' },
      { icon: Users, title: '30-Day Post-Launch Support', desc: 'We stay by your side for 30 days after launch. Edits, fixes, tweaks — all included.' },
    ],
    whyFast: 'Why 48 Hours?',
    whyFastDesc: "Because in business, speed is money. Every day your website is down or underperforming is a day you're handing customers to your competitors. We've built a system that eliminates waste and delivers results fast.",
    stats: [
      { value: '<48hrs', label: 'Delivery Time' },
      { value: '98/100', label: 'Avg. Performance Score' },
      { value: '100%', label: 'Mobile Optimized' },
      { value: '30 Days', label: 'Post-Launch Support' },
    ],
    scarcityTitle: '⚠ Limited Slots — This Month Only',
    scarcityDesc: 'To guarantee 48-hour delivery quality, we cap the number of Launch projects per month. Once slots fill, the next availability is next month. No exceptions.',
    psychTitle: 'While You\'re Reading This, Your Competitors Are Getting Ahead.',
    psychDesc: 'The businesses that win in Indonesia\'s digital market aren\'t the ones that "wait and see." They move fast. They show up online before anyone else. They convert traffic others are losing. The question isn\'t IF you need a professional web presence — it\'s how fast you can get one.',
    quoteText: '"Customers Google you before they call you. If they don\'t find a professional website, they find your competitor."',
    quoteAuthor: '— Akar Systems',
    bookTitle: 'Book Your 48-Hour Launch',
    bookSub: 'Pick a time — your website will be live before the week is out.',
    bookAlt: 'Or reach us directly',
    whatsapp: 'Chat on WhatsApp',
    strategyLink: 'Need more than a website? Book a full Strategy Session →',
    processTitle: 'How It Works — 3 Simple Steps',
    process: [
      { step: '01', title: 'Book a Slot', desc: 'Pick a time, fill out our onboarding brief. Takes 10 minutes.' },
      { step: '02', title: 'We Build', desc: 'Our team gets to work immediately. Design, build, test — all in 48 hours.' },
      { step: '03', title: 'You\'re Live', desc: 'We launch, the site is live, and you start capturing revenue.' },
    ],
  },
  id: {
    badge: 'Slot Terbatas',
    headline1: 'Langsung LIVE Hanya 48 Jam.',
    headline2: 'Buat Website Premium Anda,',
    headline3: 'Online Sebelum Weekend.',
    sub: "Lupakan agensi yang minta waktu 3 bulan dan revisi tak berujung. Untuk pemilik bisnis yang butuh hasil nyata ; kami desain, bangun, dan luncurkan website profesional lengkap hanya dalam 48 jam.",
    subBold: "Amankan slot Anda sebelum kehabisan.",
    whatYouGet: "Semua yang Anda Dapatkan",
    whatYouGetSub: "Website siap pakai dan siap jualan — bukan template murahan, bukan page builder gratisan. Produk premium sesungguhnya.",
    features: [
      { icon: Shield, title: 'Sertifikat SSL', desc: 'Keamanan HTTPS penuh. Bangun kepercayaan pengunjung seketika dan wajib untuk peringkat Google.' },
      { icon: Globe, title: 'Domain Premium', desc: 'Domain .com atau .id profesional milik Anda. Kami urus pendaftaran dan pengaturan DNS sepenuhnya.' },
      { icon: Zap, title: 'Cloud Hosting Performa Tinggi', desc: 'Kecepatan muat di bawah 1 detik dengan infrastruktur cloud enterprise. Tidak ada lambatnya hosting murah.' },
      { icon: Smartphone, title: 'Responsif di Semua Perangkat', desc: '100% dioptimalkan untuk HP dan tablet. Lebih dari 70% traffic internet Indonesia berasal dari mobile.' },
      { icon: Search, title: 'Arsitektur Ramah SEO', desc: 'Dibangun dengan struktur yang disetujui Google, meta tag, sitemap, dan schema markup dari hari pertama.' },
      { icon: MessageCircle, title: 'Integrasi WhatsApp CTA', desc: 'Tombol WhatsApp satu klik untuk menangkap calon pelanggan seketika. Saluran penjualan #1 di Indonesia.' },
      { icon: Globe, title: 'Direktori Blog / Artikel', desc: 'Bagian konten lengkap untuk membangun otoritas, mendatangkan traffic organik, dan mendidik pelanggan Anda.' },
      { icon: Wifi, title: 'Google Analytics + Pelacakan', desc: 'Lihat siapa yang mengunjungi, dari mana asalnya, dan apa yang mereka lakukan. Berbasis data dari hari pertama.' },
      { icon: Award, title: 'Desain & Branding Kustom', desc: 'Desain yang sempurna disesuaikan dengan identitas brand Anda — bukan template yang juga dipakai orang lain.' },
      { icon: TrendingUp, title: 'UI Teroptimasi Konversi', desc: 'Setiap tombol, seksi, dan CTA dirancang untuk mengubah pengunjung menjadi pelanggan yang membayar.' },
      { icon: Lock, title: 'Akses Dashboard Admin', desc: 'Akses CMS penuh untuk mengupdate konten, foto, dan harga sendiri — tanpa perlu coding.' },
      { icon: Users, title: 'Support 30 Hari Pasca-Launch', desc: 'Kami mendampingi Anda selama 30 hari setelah launch. Edit, perbaikan, penyesuaian — semua sudah termasuk.' },
    ],
    whyFast: 'Kenapa 48 Jam?',
    whyFastDesc: "Karena dalam bisnis, kecepatan adalah uang. Setiap hari website Anda tidak ada atau kurang optimal adalah hari di mana Anda menyerahkan pelanggan ke kompetitor. Kami telah membangun sistem yang menghilangkan pemborosan dan menghasilkan hasil dengan cepat.",
    stats: [
      { value: '<48 Jam', label: 'Waktu Pengerjaan' },
      { value: '98/100', label: 'Rata-rata Skor Performa' },
      { value: '100%', label: 'Mobile Optimized' },
      { value: '30 Hari', label: 'Support Pasca-Launch' },
    ],
    scarcityTitle: '⚠ Slot Terbatas — Bulan Ini Saja',
    scarcityDesc: 'Untuk menjamin kualitas pengiriman 48 jam, kami membatasi jumlah proyek Launch per bulan. Begitu slot penuh, ketersediaan berikutnya baru bulan depan. Tanpa pengecualian.',
    psychTitle: 'Sementara Anda Membaca Ini, Kompetitor Anda Sedang Maju.',
    psychDesc: 'Bisnis yang menang di pasar digital Indonesia bukan yang "tunggu dan lihat dulu." Mereka bergerak cepat. Mereka muncul online lebih dulu. Mereka mengkonversi traffic yang dilewatkan orang lain. Pertanyaannya bukan APAKAH Anda butuh kehadiran web profesional, tapi seberapa cepat Anda bisa mendapatkannya.',
    quoteText: '"Pelanggan cari Anda di Google sebelum menelepon. Kalau mereka tidak menemukan website yang profesional, mereka menemukan kompetitor Anda."',
    quoteAuthor: '— Akar Systems',
    bookTitle: 'Pesan Slot 48 Jam Anda',
    bookSub: 'Pilih waktu — website Anda akan online sebelum minggu ini berakhir.',
    bookAlt: 'Atau hubungi kami langsung',
    whatsapp: 'Chat di WhatsApp',
    strategyLink: 'Butuh lebih dari sekadar website? Pesan Sesi Strategi lengkap →',
    processTitle: 'Cara Kerjanya — 3 Langkah Mudah',
    process: [
      { step: '01', title: 'Meeting Dengan Tim', desc: 'Pilih waktu, isi brief onboarding kami. Hanya butuh 10 menit.' },
      { step: '02', title: 'Kami Bangun', desc: 'Tim kami langsung bekerja. Desain, bangun, test — semua dalam 48 jam.' },
      { step: '03', title: 'Anda Online', desc: 'Kami launch, serahkan akses, dan Anda mulai mendapatkan pelanggan.' },
    ],
  },
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Launch() {
  const { lang } = useLang();
  const c = content[lang];
  const paket3Ref = useRef(null);
  const gbpRef = useRef(null);
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <div className="bg-[#F0EDE8] min-h-screen relative">

      {/* ── WHATSAPP STICKY BUTTON ── */}
      <a
        href="https://wa.me/62"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-7 right-7 z-50 group"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
        {/* Button */}
        <div className="relative flex items-center gap-3 bg-[#25D366] hover:bg-[#20bc5a] text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-all duration-300 hover:scale-105">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="text-sm font-semibold tracking-wide whitespace-nowrap">
            {lang === 'id' ? 'Chat WhatsApp' : 'Chat with Us'}
          </span>
        </div>
      </a>

      {/* ── HERO ── */}
      <section className="pt-36 pb-8 md:pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-600 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
              {c.badge}
            </span>
          </motion.div>

          <motion.h1 {...fadeUp(0.08)} className="font-serif text-5xl md:text-7xl text-[#1a1a1a] tracking-tight leading-[1.06] mb-6">
            <span className="relative inline-block">
              <span className="relative z-10 text-green-700">{c.headline1}</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.65, delay: 0.45, ease: 'easeOut' }}
                className="absolute inset-x-0 origin-left rounded-sm pointer-events-none"
                style={{ bottom: '8%', height: '38%', background: 'rgba(134,239,172,0.45)', zIndex: 0 }}
              />
            </span>
            <br />
            {c.headline2}
            <br />
            <span className="text-[#1a1a1a]/40">{c.headline3}</span>
          </motion.h1>

          <motion.p {...fadeUp(0.16)} className="text-lg text-[#1a1a1a]/50 max-w-2xl mx-auto leading-relaxed mb-8">
            {c.sub}{' '}
            <span className="font-semibold text-[#1a1a1a]">{c.subBold}</span>
          </motion.p>

          {/* Quick stats row */}
          <motion.div {...fadeUp(0.22)} className="flex flex-wrap justify-center gap-6 mb-10">
            {c.stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="font-serif text-2xl font-bold text-green-600">{s.value}</p>
                <p className="text-[11px] uppercase tracking-widest text-[#1a1a1a]/35 font-semibold">{s.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div {...fadeUp(0.28)}>
            <Link
              to="#book"
              onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white font-semibold px-8 py-4 rounded-full text-sm hover:bg-[#333] transition-colors shadow-lg"
            >
              {c.bookTitle}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── PSYCHOLOGY SECTION ── */}
      <section className="py-8 md:py-16 px-6 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-5 leading-[1.15]">{c.psychTitle}</h2>
            <p className="text-white/50 text-base leading-relaxed max-w-2xl mx-auto mb-8">{c.psychDesc}</p>
            <blockquote className="border-l-4 border-green-500 pl-6 text-left max-w-xl mx-auto">
              <p className="font-serif text-lg text-white/80 italic leading-relaxed mb-2">{c.quoteText}</p>
              <p className="text-white/30 text-xs">{c.quoteAuthor}</p>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section className="py-10 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-14 text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-3">{lang === 'id' ? 'Paket Lengkap' : 'Full Package'}</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] tracking-tight mb-3">{c.whatYouGet}</h2>
            <p className="text-[#1a1a1a]/45 max-w-xl mx-auto text-sm leading-relaxed">{c.whatYouGetSub}</p>
          </motion.div>

          {/* Desktop: full cards */}
          <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {c.features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="bg-white rounded-2xl p-6 border border-black/7 hover:shadow-md hover:border-black/12 transition-all duration-300 flex gap-4"
              >
                <div className="w-10 h-10 bg-green-50 border border-green-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                  <f.icon className="w-4.5 h-4.5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1a1a1a] text-sm mb-1">{f.title}</h3>
                  <p className="text-xs text-[#1a1a1a]/50 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: 4×3 icon grid — tap to expand modal */}
          <div className="md:hidden grid grid-cols-4 gap-2">
            {c.features.map((f, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                onClick={() => setActiveFeature(f)}
                className="flex flex-col items-center justify-center gap-1.5 bg-white rounded-2xl border border-black/7 p-3 aspect-square active:scale-95 transition-all duration-150 hover:border-green-200 hover:shadow-sm"
              >
                <div className="w-8 h-8 bg-green-50 border border-green-100 rounded-xl flex items-center justify-center shrink-0">
                  <f.icon className="w-3.5 h-3.5 text-green-600" />
                </div>
                <p className="text-[9px] font-semibold text-[#1a1a1a]/70 text-center leading-tight line-clamp-2">{f.title}</p>
              </motion.button>
            ))}
          </div>

          {/* Mobile hint */}
          <p className="md:hidden text-center text-[10px] text-[#1a1a1a]/30 mt-3 font-medium">
            {lang === 'id' ? 'Ketuk ikon untuk detail' : 'Tap any icon for details'}
          </p>
        </div>
      </section>

      <FeatureModal feature={activeFeature} onClose={() => setActiveFeature(null)} />

      {/* ── HOW IT WORKS ── */}
      <section className="py-10 md:py-20 px-6 bg-[#E8E4DC]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-12 text-center"
          >
            <h2 className="font-serif text-4xl text-[#1a1a1a] tracking-tight">{c.processTitle}</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {c.process.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-black/7 relative"
              >
                <span className="font-serif text-5xl font-bold text-green-600/15 absolute top-5 right-6">{p.step}</span>
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-serif text-xl text-[#1a1a1a] mb-2">{p.title}</h3>
                <p className="text-sm text-[#1a1a1a]/50 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-10 md:py-24 px-6 bg-[#F0EDE8]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-3">
              {lang === 'id' ? 'Transparan & Terjangkau' : 'Transparent Pricing'}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] tracking-tight mb-4">
              {lang === 'id' ? 'Pilih Paket yang Tepat' : 'Choose Your Package'}
            </h2>
            <p className="text-[#1a1a1a]/50 max-w-xl mx-auto text-sm leading-relaxed">
              {lang === 'id'
                ? 'Semua paket dikerjakan dalam 48 jam dan sudah termasuk desain kustom, SSL, serta pendampingan 30 hari pasca-launch.'
                : 'Every package is delivered in 48 hours and includes custom design, SSL, and 30 days of post-launch support.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 items-stretch">
            {[
              {
                id: 1,
                nama: lang === 'id' ? 'Landing Page' : 'Landing Page',
                tagline: lang === 'id' ? 'Cocok untuk kebutuhan iklan digital' : 'Built for digital ad campaigns',
                hargaCoret: 'Rp 2.500.000',
                harga: 'Rp 1.490.000',
                highlight: false,
                badge: null,
                isCustom: false,
                fitur: lang === 'id'
                  ? ['1 halaman landing page', 'Domain & Hosting Premium', 'Web Performance Analytics', 'FREE Integrasi Pixel (Meta, TikTok, dll)', 'FREE Konsultasi & Pre-Production Meeting']
                  : ['1-page landing page', 'Premium Domain & Hosting', 'Web Performance Analytics', 'FREE Pixel Integration (Meta, TikTok, etc.)', 'FREE Consultation & Pre-Production Meeting'],
                note: lang === 'id'
                  ? 'Konsultasikan kebutuhan landing page Anda yang terhubung dengan kampanye iklan digital di Meta, TikTok, dan platform lainnya.'
                  : 'Tell us your ad campaign goals — we align the page structure to convert traffic from Meta, TikTok, and more.',
              },
              {
                id: 2,
                nama: lang === 'id' ? 'Website Bisnis' : 'Business Website',
                tagline: lang === 'id' ? 'Multi-page untuk bisnis yang serius' : 'Multi-page for serious businesses',
                hargaCoret: 'Rp 5.500.000',
                harga: 'Rp 2.790.000',
                highlight: false,
                badge: null,
                isCustom: false,
                fitur: lang === 'id'
                  ? ['Website 2–5 halaman', 'Domain & Hosting Premium', 'Web Performance Analytics', 'FREE Integrasi Pixel', 'FREE Konsultasi & Pre-Production Meeting', 'Direktori Blog & SEO', 'Akses Admin Blog Publishing', 'FREE Training Blog Publishing (sampai bisa)']
                  : ['2–5 page website', 'Premium Domain & Hosting', 'Web Performance Analytics', 'FREE Pixel Integration', 'FREE Consultation & Pre-Production Meeting', 'Blog & SEO Directory', 'Admin Access for Blog Publishing', 'FREE Blog Publishing Training'],
                note: lang === 'id'
                  ? 'Blog & SEO membantu calon pelanggan menemukan bisnis Anda di Google dengan keyword yang mereka cari.'
                  : 'Blog & SEO helps customers discover you on Google for the exact keywords they search.',
              },
              {
                id: 3,
                nama: lang === 'id' ? 'Website + Local Boost' : 'Website + Local Boost',
                tagline: lang === 'id' ? 'Dominasi Google Maps di kota Anda' : 'Dominate Google Maps in your city',
                hargaCoret: 'Rp 8.000.000',
                harga: 'Rp 4.990.000',
                highlight: true,
                badge: lang === 'id' ? 'Terpopuler' : 'Most Popular',
                isCustom: false,
                gbp: true,
                fitur: lang === 'id'
                  ? ['Website 2–5 halaman', 'Domain & Hosting Premium', 'Web Performance Analytics', 'FREE Integrasi Pixel', 'FREE Konsultasi & Pre-Production Meeting', 'Direktori Blog & SEO', 'Akses Admin Blog Publishing', 'FREE Training Blog Publishing (sampai bisa)']
                  : ['2–5 page website', 'Premium Domain & Hosting', 'Web Performance Analytics', 'FREE Pixel Integration', 'FREE Consultation & Pre-Production Meeting', 'Blog & SEO Directory', 'Admin Access for Blog Publishing', 'FREE Blog Publishing Training'],
                note: null,
              },
              {
                id: 4,
                nama: lang === 'id' ? 'Paket Kustom' : 'Custom Package',
                tagline: lang === 'id' ? 'Sesuai kebutuhan spesifik bisnis Anda' : 'Tailored to your exact business needs',
                hargaCoret: null,
                harga: lang === 'id' ? 'Mulai Rp 2.790.000' : 'From Rp 2.790.000',
                highlight: false,
                badge: lang === 'id' ? 'Fleksibel' : 'Flexible',
                isCustom: true,
                fitur: lang === 'id'
                  ? ['Website multi-page kustom', 'Google Business Profile Boosting', 'SEO Bulanan & Laporan Performa', 'Google Ads Management', 'Integrasi Marketplace', 'Fitur Booking / Kalender Online', 'Payment Gateway Integration', 'Custom Feature & Aplikasi Web']
                  : ['Custom multi-page website', 'Google Business Profile Boosting', 'Monthly SEO & Performance Reports', 'Google Ads Management', 'Marketplace Integration', 'Online Booking / Calendar Feature', 'Payment Gateway Integration', 'Custom Features & Web Apps'],
                note: lang === 'id'
                  ? 'Komunikasikan kebutuhan Anda dan dapatkan penawaran terbaik. Bisa dikustomisasi mulai dari paket Website Bisnis.'
                  : 'Tell us what you need and get the best offer. Fully customizable from the Business Website package up.',
              },
            ].map((p, i) => (
              <motion.div
                key={p.id}
                ref={p.highlight ? paket3Ref : undefined}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className={`relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 ${
                  p.highlight
                    ? 'border-green-500 shadow-xl shadow-green-500/10 bg-white'
                    : 'border-black/8 bg-white hover:shadow-md'
                }`}
              >
                {p.badge && (
                  <div className={`absolute top-0 right-0 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-bl-xl ${
                    p.highlight ? 'bg-green-600 text-white' : 'bg-[#1a1a1a] text-white'
                  }`}>
                    {p.badge}
                  </div>
                )}
                <div className={`px-6 pt-7 pb-5 ${p.highlight ? 'bg-green-600' : ''}`}>
                  <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${p.highlight ? 'text-white/60' : 'text-[#1a1a1a]/35'}`}>
                    {lang === 'id' ? `Paket ${p.id}` : `Package ${p.id}`}
                  </p>
                  <h3 className={`font-serif text-xl font-bold mb-1 ${p.highlight ? 'text-white' : 'text-[#1a1a1a]'}`}>{p.nama}</h3>
                  <p className={`text-xs leading-relaxed mb-5 ${p.highlight ? 'text-white/65' : 'text-[#1a1a1a]/45'}`}>{p.tagline}</p>
                  <div>
                    {p.hargaCoret && (
                      <p className={`text-xs line-through mb-0.5 ${p.highlight ? 'text-white/40' : 'text-[#1a1a1a]/30'}`}>{p.hargaCoret}</p>
                    )}
                    <p className={`font-serif text-2xl font-bold ${p.highlight ? 'text-white' : 'text-green-600'}`}>{p.harga}</p>
                    {p.isCustom && (
                      <p className={`text-[10px] mt-0.5 ${p.highlight ? 'text-white/50' : 'text-[#1a1a1a]/35'}`}>
                        {lang === 'id' ? 'harga disesuaikan kebutuhan' : 'price tailored to your needs'}
                      </p>
                    )}
                  </div>
                </div>

                <div className={`h-px mx-6 ${p.highlight ? 'bg-green-500/30' : 'bg-black/6'}`} />

                <div className="px-6 py-5 flex-1 flex flex-col gap-4">
                  <ul className="space-y-2.5">
                    {p.fitur.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-xs text-[#1a1a1a]/65 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {p.gbp && (
                    <div className="mt-1 rounded-xl border border-green-200 bg-green-50 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-green-600 shrink-0" />
                        <p className="text-xs font-bold text-green-700 uppercase tracking-wide">Google Business Boosting</p>
                      </div>
                      <p className="text-xs text-green-800/70 leading-relaxed">
                        {lang === 'id'
                          ? 'Profil Google Bisnis Anda dioptimasi hingga muncul di peringkat teratas Google Maps — pelanggan yang cari produk/jasa Anda langsung menemukan bisnis Anda.'
                          : 'Your Google Business Profile is optimized to rank at the top of Google Maps — customers searching for your product/service find you first.'}
                      </p>
                      {/* Mobile CTA — visible only below xl */}
                      <button
                        onClick={() => gbpRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                        className="xl:hidden mt-3 w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-green-600 text-white rounded-full text-xs font-bold uppercase tracking-wide hover:bg-green-700 transition-colors shadow-md shadow-green-500/20"
                      >
                        <MapPin className="w-3.5 h-3.5" />
                        {lang === 'id' ? 'Lihat GBP Boosting ↓' : 'Explore GBP Boosting ↓'}
                      </button>
                    </div>
                  )}

                  {p.note && (
                    <p className="text-[11px] text-[#1a1a1a]/40 leading-relaxed italic border-t border-black/5 pt-3">{p.note}</p>
                  )}

                  {p.isCustom && (
                    <div className="rounded-xl bg-[#F8F6F2] border border-black/6 p-3 mt-1">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-[#1a1a1a]/40 mb-1">
                        {lang === 'id' ? 'Add-on Tersedia' : 'Add-ons Available'}
                      </p>
                      <p className="text-[11px] text-[#1a1a1a]/45 leading-relaxed">
                        {lang === 'id'
                          ? 'Marketplace integration, kalender booking, payment gateway, fitur member, dan lainnya — sesuai permintaan.'
                          : 'Marketplace integration, booking calendar, payment gateway, member features, and more — on request.'}
                      </p>
                    </div>
                  )}
                </div>

                <div className="px-6 pb-6 pt-2 flex flex-col gap-2">
                  <button
                    onClick={() => p.isCustom
                      ? window.open('https://wa.me/62', '_blank')
                      : document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                      p.highlight
                        ? 'bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-500/20'
                        : p.isCustom
                        ? 'bg-[#1a1a1a] text-white hover:bg-[#333]'
                        : 'border border-[#1a1a1a]/15 text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white'
                    }`}
                  >
                    {p.isCustom
                      ? <><MessageCircle className="w-4 h-4" />{lang === 'id' ? 'Konsultasi Gratis' : 'Free Consultation'}</>
                      : <>{lang === 'id' ? 'Pilih Paket Ini' : 'Choose This Package'}<ArrowRight className="w-3.5 h-3.5" /></>
                    }
                  </button>
                  <Link
                    to="/portfolio"
                    className={`w-full flex items-center justify-center gap-1.5 py-2 text-xs font-medium transition-colors ${
                      p.highlight ? 'text-green-600 hover:text-green-700' : 'text-[#1a1a1a]/40 hover:text-[#1a1a1a]/70'
                    }`}
                  >
                    <Eye className="w-3 h-3" />
                    {lang === 'id' ? 'Lihat Contoh Portfolio →' : 'View Sample Portfolio →'}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center text-xs text-[#1a1a1a]/35 mt-8 relative"
          style={{ zIndex: 10 }}
          >
            {lang === 'id'
              ? 'Semua harga sudah termasuk desain kustom, SSL, domain, hosting, dan pendampingan 30 hari. Tidak ada biaya tersembunyi.'
              : 'All prices include custom design, SSL, domain, hosting, and 30-day support. No hidden fees.'}
          </motion.p>
        </div>
      </section>

      {/* ── CURVED CONNECTOR (desktop only) ── */}
      <CurvedConnector sourceRef={paket3Ref} targetRef={gbpRef} lang={lang} />

      {/* ── GBP SHOWCASE ── */}
      <div ref={gbpRef}>
        <GBPShowcaseSection lang={lang} />
      </div>

      {/* ── MAIN CONTENT: trust + booking ── */}
      <section id="book" className="py-10 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_1.15fr] gap-10 items-start">

            {/* Left: scarcity + why fast */}
            <div className="flex flex-col gap-5">
              {/* Why fast */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-2xl border border-black/8"
              >
                <h3 className="font-serif text-xl text-[#1a1a1a] mb-3">{c.whyFast}</h3>
                <p className="text-sm text-[#1a1a1a]/55 leading-relaxed">{c.whyFastDesc}</p>
              </motion.div>

              {/* Scarcity */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-5 bg-[#1a1a1a] rounded-2xl"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-green-500/15 border border-green-400/20 flex items-center justify-center text-green-400 font-bold text-sm shrink-0 mt-0.5">!</div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">{c.scarcityTitle}</p>
                    <p className="text-white/45 text-xs leading-relaxed">{c.scarcityDesc}</p>
                  </div>
                </div>
              </motion.div>

              {/* Checklist recap */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="p-5 bg-green-600 rounded-2xl"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-4 h-4 text-white/70" />
                  <p className="text-white font-semibold text-sm">{lang === 'id' ? 'Sudah Termasuk Semua:' : 'Everything Included:'}</p>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {['SSL', 'Domain', 'Hosting', 'Mobile', 'SEO', 'WhatsApp', 'Blog', 'Analytics', 'CMS', '30-Day Support'].map((item) => (
                    <div key={item} className="flex items-center gap-1.5 text-white/80 text-xs">
                      <CheckCircle2 className="w-3 h-3 text-white/60 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>

              <p className="text-xs text-[#1a1a1a]/35 leading-relaxed">
                <Link to="/strategy" className="text-[#1a1a1a]/60 underline underline-offset-2 hover:text-[#1a1a1a] transition-colors">
                  {c.strategyLink}
                </Link>
              </p>
            </div>

            {/* Right: Booking widget */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl border border-black/8 shadow-sm overflow-hidden sticky top-28">
                <div className="bg-green-600 px-7 py-5">
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-4 h-4 text-white/70" />
                    <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest">{lang === 'id' ? 'Amankan Slot Anda' : 'Secure Your Slot'}</p>
                  </div>
                  <h3 className="font-serif text-2xl text-white">{c.bookTitle}</h3>
                  <p className="text-white/60 text-sm mt-1">{c.bookSub}</p>
                </div>

                <div className="bg-[#F8F6F2]">
                  <CalendlyWidget />
                </div>
                <div className="px-7 py-5 border-t border-black/6 bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
                  <p className="text-xs text-[#1a1a1a]/40">{c.bookAlt}</p>
                  <a href="https://wa.me/62" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white font-medium rounded-full text-sm hover:bg-green-700 transition-colors">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
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