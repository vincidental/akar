import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Zap, Clock, Shield, Globe, Smartphone, Search, Wifi,
  MessageCircle, Lock, CheckCircle2, Star, ArrowRight, Users, TrendingUp, Award
} from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

const content = {
  en: {
    badge: 'Limited Monthly Slots',
    headline1: 'The 48-Hour Launch.',
    headline2: 'Your Premium Website,',
    headline3: 'Live by the Weekend.',
    sub: "Skip the 3-month agency build times and endless revisions. For ambitious business owners who need immediate results — we design, build, and deploy a complete, professional website in just 48 hours.",
    subBold: "Secure your spot before slots run out.",
    whatYouGet: "Everything You Get",
    whatYouGetSub: "A fully equipped, battle-ready website — not a template, not a page builder. A real premium product.",
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
      { step: '03', title: 'You\'re Live', desc: 'We launch, hand over access, and you start capturing revenue.' },
    ],
  },
  id: {
    badge: 'Slot Bulanan Terbatas',
    headline1: 'Website 48 Jam.',
    headline2: 'Website Premium Anda,',
    headline3: 'Online Sebelum Weekend.',
    sub: "Lupakan agensi yang minta waktu 3 bulan dan revisi tak berujung. Untuk pemilik bisnis yang butuh hasil nyata — kami desain, bangun, dan luncurkan website profesional lengkap hanya dalam 48 jam.",
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
    psychDesc: 'Bisnis yang menang di pasar digital Indonesia bukan yang "tunggu dan lihat dulu." Mereka bergerak cepat. Mereka muncul online lebih dulu. Mereka mengkonversi traffic yang dilewatkan orang lain. Pertanyaannya bukan APAKAH Anda butuh kehadiran web profesional — tapi seberapa cepat Anda bisa mendapatkannya.',
    quoteText: '"Pelanggan cari Anda di Google sebelum menelepon. Kalau mereka tidak menemukan website yang profesional, mereka menemukan kompetitor Anda."',
    quoteAuthor: '— Akar Systems',
    bookTitle: 'Pesan Slot 48 Jam Anda',
    bookSub: 'Pilih waktu — website Anda akan online sebelum minggu ini berakhir.',
    bookAlt: 'Atau hubungi kami langsung',
    whatsapp: 'Chat di WhatsApp',
    strategyLink: 'Butuh lebih dari sekadar website? Pesan Sesi Strategi lengkap →',
    processTitle: 'Cara Kerjanya — 3 Langkah Mudah',
    process: [
      { step: '01', title: 'Pesan Slot', desc: 'Pilih waktu, isi brief onboarding kami. Hanya butuh 10 menit.' },
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

  return (
    <div className="bg-[#F0EDE8] min-h-screen">

      {/* ── HERO ── */}
      <section className="pt-36 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-600 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
              {c.badge}
            </span>
          </motion.div>

          <motion.h1 {...fadeUp(0.08)} className="font-serif text-5xl md:text-7xl text-[#1a1a1a] tracking-tight leading-[1.06] mb-6">
            <span className="relative inline-block text-green-600">
              {c.headline1}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
                className="absolute bottom-1 left-0 right-0 h-2 bg-green-100 -z-0 origin-left rounded"
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
      <section className="py-16 px-6 bg-[#1a1a1a]">
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
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-3">{lang === 'id' ? 'Paket Lengkap' : 'Full Package'}</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] tracking-tight mb-3">{c.whatYouGet}</h2>
            <p className="text-[#1a1a1a]/45 max-w-xl mx-auto text-sm leading-relaxed">{c.whatYouGetSub}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
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
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 px-6 bg-[#E8E4DC]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
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

      {/* ── MAIN CONTENT: trust + booking ── */}
      <section id="book" className="py-20 px-6">
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

                <div className="min-h-[480px] flex flex-col items-center justify-center gap-4 p-8 bg-[#F8F6F2]">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-green-50 border border-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-6 h-6 text-green-500" />
                    </div>
                    <h4 className="font-serif text-lg text-[#1a1a1a] mb-2">Calendar Integration</h4>
                    <p className="text-sm text-[#1a1a1a]/45 max-w-xs mb-6">
                      {lang === 'id' ? 'Widget Calendly Anda akan muncul di sini.' : 'Your Calendly scheduling widget will appear here.'}
                    </p>
                    <div className="p-3 bg-white rounded-xl border border-black/8 text-xs text-[#1a1a1a]/35 font-mono text-left max-w-xs">
                      {`<!-- Calendly inline widget -->`}<br />
                      {`<div class="calendly-inline-widget"`}<br />
                      {`  data-url="https://calendly.com/YOUR_USERNAME"`}<br />
                      {`  style="min-width:320px;height:700px;">`}<br />
                      {`</div>`}
                    </div>
                    <div className="mt-8 pt-6 border-t border-black/6">
                      <p className="text-xs text-[#1a1a1a]/30 mb-3">{c.bookAlt}</p>
                      <a
                        href="https://wa.me/62"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-medium rounded-full text-sm hover:bg-green-700 transition-colors"
                      >
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        {c.whatsapp}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}