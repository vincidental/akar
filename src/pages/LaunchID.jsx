/**
 * LaunchID.jsx — Halaman 48-Hour Launch versi Bahasa Indonesia
 * Route: /id
 * Halaman ini berdiri sendiri dan TIDAK terhubung ke language toggle.
 * Edit teks di sini secara langsung untuk menyesuaikan copywriting Bahasa Indonesia.
 */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Zap, Clock, Shield, Globe, Smartphone, Search, Wifi,
  MessageCircle, Lock, CheckCircle2, Star, ArrowRight, Users, TrendingUp, Award
} from 'lucide-react';
import CalendlyWidget from '@/components/CalendlyWidget';

// ─────────────────────────────────────────────────────────────────────────────
// COPY — Edit bebas di sini. Ini bukan terjemahan otomatis.
// ─────────────────────────────────────────────────────────────────────────────
const fitur = [
  {
    icon: Shield,
    title: 'Sertifikat SSL',
    desc: 'Keamanan HTTPS penuh. Pengunjung langsung percaya, dan Google wajibkan ini untuk peringkat pencarian.',
  },
  {
    icon: Globe,
    title: 'Domain Premium',
    desc: 'Domain .com atau .id profesional atas nama bisnis Anda. Kami urus semua — dari registrasi sampai pengaturan DNS.',
  },
  {
    icon: Zap,
    title: 'Cloud Hosting Berperforma Tinggi',
    desc: 'Website muat dalam hitungan milidetik. Infrastruktur enterprise-grade — bukan hosting murah yang lemot.',
  },
  {
    icon: Smartphone,
    title: 'Tampil Sempurna di HP',
    desc: 'Lebih dari 70% pengguna internet Indonesia browsing lewat HP. Website Anda 100% responsif dan nyaman di semua layar.',
  },
  {
    icon: Search,
    title: 'Struktur Ramah SEO',
    desc: 'Dibangun dengan standar Google: meta tag, sitemap, schema markup. Fondasi pencarian yang kuat dari hari pertama.',
  },
  {
    icon: MessageCircle,
    title: 'Tombol WhatsApp Langsung',
    desc: 'Satu klik, calon pelanggan langsung chat Anda di WhatsApp. Saluran penjualan nomor satu di Indonesia.',
  },
  {
    icon: Globe,
    title: 'Blog & Direktori Artikel',
    desc: 'Ruang konten lengkap untuk bangun otoritas, datangkan traffic organik, dan edukasi calon pelanggan Anda.',
  },
  {
    icon: Wifi,
    title: 'Google Analytics & Tracking',
    desc: 'Pantau siapa yang datang, dari mana asalnya, dan apa yang mereka lakukan. Keputusan berbasis data, bukan tebak-tebakan.',
  },
  {
    icon: Award,
    title: 'Desain Kustom Sesuai Brand',
    desc: 'Bukan template yang juga dipakai ribuan orang lain. Desain dibuat khusus sesuai identitas bisnis Anda.',
  },
  {
    icon: TrendingUp,
    title: 'UI yang Mendorong Konversi',
    desc: 'Setiap tombol, seksi, dan CTA dirancang dengan satu tujuan: mengubah pengunjung jadi pelanggan yang bayar.',
  },
  {
    icon: Lock,
    title: 'Akses Dashboard Admin',
    desc: 'Update konten, ganti foto, ubah harga sendiri kapan saja — tanpa perlu minta bantuan developer.',
  },
  {
    icon: Users,
    title: 'Pendampingan 30 Hari Pasca-Launch',
    desc: 'Kami tidak pergi setelah launch. Selama 30 hari ke depan, semua revisi dan perbaikan sudah termasuk.',
  },
];

const langkah = [
  {
    step: '01',
    title: 'Meeting Dengan Tim Kami',
    desc: 'Pilih jadwal, isi brief singkat kami. Tidak sampai 10 menit.',
  },
  {
    step: '02',
    title: 'Kami Bangun',
    desc: 'Tim kami langsung kerja. Desain, development, testing — selesai dalam 48 jam.',
  },
  {
    step: '03',
    title: 'Website Anda Tayang',
    desc: 'Kami launch, serahkan semua akses, dan bisnis Anda siap dapat pelanggan baru.',
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function LaunchID() {
  return (
    <div className="bg-[#F0EDE8] min-h-screen">

      {/* ── HERO ── */}
      <section className="pt-36 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-600 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
              Slot Bulan Ini Terbatas
            </span>
          </motion.div>

          <motion.h1 {...fadeUp(0.08)} className="font-serif text-5xl md:text-7xl text-[#1a1a1a] tracking-tight leading-[1.06] mb-6">
            <span className="relative inline-block">
              <span className="relative z-10 text-green-700">Website 48 Jam.</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.65, delay: 0.45, ease: 'easeOut' }}
                className="absolute inset-x-0 origin-left rounded-sm pointer-events-none"
                style={{ bottom: '8%', height: '38%', background: 'rgba(134,239,172,0.45)', zIndex: 0 }}
              />
            </span>
            <br />
            Website Premium Anda,
            <br />
            <span className="text-[#1a1a1a]/40">Online Sebelum Weekend.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.16)} className="text-lg text-[#1a1a1a]/50 max-w-2xl mx-auto leading-relaxed mb-8">
            Agensi digital biasa minta waktu 3 bulan dan revisi tak berujung. Kami tidak.
            Untuk pemilik bisnis yang butuh hasil nyata sekarang — kami desain, bangun, dan luncurkan
            website profesional lengkap{' '}
            <span className="font-semibold text-[#1a1a1a]">hanya dalam 48 jam. Sebelum slot bulan ini penuh.</span>
          </motion.p>

          {/* Stats */}
          <motion.div {...fadeUp(0.22)} className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              { value: '<48 Jam', label: 'Waktu Pengerjaan' },
              { value: '98/100', label: 'Skor Performa Rata-rata' },
              { value: '100%', label: 'Mobile Optimized' },
              { value: '30 Hari', label: 'Pendampingan Pasca-Launch' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="font-serif text-2xl font-bold text-green-600">{s.value}</p>
                <p className="text-[11px] uppercase tracking-widest text-[#1a1a1a]/35 font-semibold">{s.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div {...fadeUp(0.28)}>
            <a
              href="#pesan"
              onClick={(e) => { e.preventDefault(); document.getElementById('pesan')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white font-semibold px-8 py-4 rounded-full text-sm hover:bg-[#333] transition-colors shadow-lg"
            >
              Pesan Slot Saya Sekarang
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── PSYCHOLOGY ── */}
      <section className="py-16 px-6 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-5 leading-[1.15]">
              Sementara Anda Menunggu, Kompetitor Anda Sudah Jalan Duluan.
            </h2>
            <p className="text-white/50 text-base leading-relaxed max-w-2xl mx-auto mb-8">
              Bisnis yang menang bukan yang paling lama riset. Tapi yang paling cepat bergerak.
              Di Indonesia, pelanggan Google nama bisnis Anda sebelum menelepon. Kalau mereka tidak
              menemukan website yang meyakinkan — mereka pergi ke kompetitor yang lebih siap.
            </p>
            <blockquote className="border-l-4 border-green-500 pl-6 text-left max-w-xl mx-auto">
              <p className="font-serif text-lg text-white/80 italic leading-relaxed mb-2">
                "Pelanggan sudah Google bisnis Anda sebelum menelepon. Kalau tidak ketemu website yang profesional, mereka akan ketemu kompetitor Anda."
              </p>
              <p className="text-white/30 text-xs">— Akar Systems</p>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ── APA YANG ANDA DAPAT ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-3">Paket Lengkap</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] tracking-tight mb-3">
              Semua yang Anda Dapatkan
            </h2>
            <p className="text-[#1a1a1a]/45 max-w-xl mx-auto text-sm leading-relaxed">
              Bukan template murahan. Bukan page builder gratisan. Website profesional sungguhan — siap tayang dan siap konversi.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {fitur.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="bg-white rounded-2xl p-6 border border-black/7 hover:shadow-md hover:border-black/12 transition-all duration-300 flex gap-4"
              >
                <div className="w-10 h-10 bg-green-50 border border-green-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                  <f.icon className="w-4 h-4 text-green-600" />
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

      {/* ── CARA KERJA ── */}
      <section className="py-20 px-6 bg-[#E8E4DC]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="font-serif text-4xl text-[#1a1a1a] tracking-tight">
              Cara Kerjanya — 3 Langkah Saja
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {langkah.map((p, i) => (
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

      {/* ── BOOKING ── */}
      <section id="pesan" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_1.15fr] gap-10 items-start">

            {/* Left */}
            <div className="flex flex-col gap-5">

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-2xl border border-black/8"
              >
                <h3 className="font-serif text-xl text-[#1a1a1a] mb-3">Kenapa Bisa Selesai 48 Jam?</h3>
                <p className="text-sm text-[#1a1a1a]/55 leading-relaxed">
                  Karena kami tidak pakai proses agensi konvensional yang penuh meeting dan basa-basi.
                  Sistem kami sudah teruji: brief yang efisien, tim yang fokus, dan workflow yang memangkas
                  semua pemborosan waktu. Hasilnya — website premium selesai sebelum kompetitor Anda bahkan
                  selesai onboarding di agensi lain.
                </p>
              </motion.div>

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
                    <p className="text-white font-semibold text-sm mb-1">⚠ Slot Terbatas — Bulan Ini Saja</p>
                    <p className="text-white/45 text-xs leading-relaxed">
                      Demi menjaga kualitas dan kecepatan 48 jam, kami batasi jumlah proyek per bulan.
                      Begitu slot penuh, Anda harus tunggu bulan berikutnya. Tidak ada pengecualian.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="p-5 bg-green-600 rounded-2xl"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-4 h-4 text-white/70" />
                  <p className="text-white font-semibold text-sm">Sudah Termasuk Semua:</p>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {['SSL', 'Domain', 'Hosting', 'Mobile', 'SEO', 'WhatsApp', 'Blog', 'Analytics', 'CMS Admin', '30 Hari Support'].map((item) => (
                    <div key={item} className="flex items-center gap-1.5 text-white/80 text-xs">
                      <CheckCircle2 className="w-3 h-3 text-white/60 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>

              <p className="text-xs text-[#1a1a1a]/35 leading-relaxed">
                <Link to="/strategy" className="text-[#1a1a1a]/60 underline underline-offset-2 hover:text-[#1a1a1a] transition-colors">
                  Butuh lebih dari sekadar website? SEO, AI automation, atau software custom? Pesan Sesi Strategi →
                </Link>
              </p>
            </div>

            {/* Right: Booking */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl border border-black/8 shadow-sm overflow-hidden sticky top-28">
                <div className="bg-green-600 px-7 py-5">
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-4 h-4 text-white/70" />
                    <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest">Amankan Slot Anda</p>
                  </div>
                  <h3 className="font-serif text-2xl text-white">Pesan Slot 48 Jam Anda</h3>
                  <p className="text-white/60 text-sm mt-1">Pilih jadwal — website Anda online sebelum minggu ini berakhir.</p>
                </div>

                <div className="bg-[#F8F6F2]">
                  <CalendlyWidget />
                </div>
                <div className="px-7 py-5 border-t border-black/6 bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
                  <p className="text-xs text-[#1a1a1a]/40">Atau hubungi kami langsung</p>
                  <a href="https://wa.me/62" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white font-medium rounded-full text-sm hover:bg-green-700 transition-colors">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    Chat di WhatsApp
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