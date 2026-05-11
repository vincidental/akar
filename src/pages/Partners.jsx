import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Users, TrendingUp, Shield, Star, CheckCircle2,
  DollarSign, Network, Lock, Briefcase, ChevronRight, Zap
} from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';
import PortalDemoShell from '@/components/partners/PortalDemoShell';

const content = {
  en: {
    badge: 'Introductory Partner Program',
    headline1: 'Turn Your Network',
    headline2: 'Into Revenue.',
    sub: "Akar Systems' Introductory Partner (IP) Program is an exclusive ecosystem for well-connected professionals who want to monetize their relationships — without selling anything.",
    subBold: "You make the introduction. We close the deal. You earn.",
    ctaPortal: 'Access Partner Portal',
    ctaLearn: 'Learn How It Works',
    notAffiliate: "This isn't affiliate marketing.",
    notAffiliateDesc: "We don't do cheap referral links or spammy commissions. This is a curated, professional partnership program designed for people with real influence in their industry.",
    howTitle: 'How It Works',
    howSteps: [
      {
        step: '01',
        title: 'Apply & Get Approved',
        desc: 'Submit your application. We review your profile and professional network. Approved IPs gain access to the full Partner Portal.',
      },
      {
        step: '02',
        title: 'Identify Opportunities',
        desc: 'Browse our Service Catalog and Sales Playbook to understand exactly who Akar Systems serves best — and match it to your network.',
      },
      {
        step: '03',
        title: 'Register the Lead',
        desc: "When you're in active conversation with a potential client, register them in the portal. This protects your claim and locks in your commission.",
      },
      {
        step: '04',
        title: 'We Close. You Earn.',
        desc: "Akar Systems handles the pitch, proposal, and delivery. Once the deal closes, your commission is logged and paid out.",
      },
    ],
    earningTitle: 'What You Can Earn',
    earningDesc: 'Commissions are structured based on project value and your partnership tier. The more impactful introductions you make, the more you earn.',
    earningItems: [
      { label: 'Entry-Level Projects', range: 'Rp 500K – Rp 2M', note: 'Per closed deal' },
      { label: 'Mid-Tier Projects', range: 'Rp 2M – Rp 7M', note: 'Per closed deal' },
      { label: 'Enterprise / Custom', range: 'Negotiated', note: 'Based on deal size' },
    ],
    earningNote: '* Exact commission percentages and tier structures are detailed within the Partner Portal after approval.',
    whyTitle: 'Why Partner With Akar?',
    whyItems: [
      { icon: Shield, title: 'Protected Leads', desc: 'First-registered, first-protected. Your lead is locked in the moment you register it — no disputes.' },
      { icon: TrendingUp, title: 'Full Pipeline Visibility', desc: 'Track every lead from introduction to payout in real time via your personal dashboard.' },
      { icon: Briefcase, title: 'Professional Resources', desc: 'Branded one-pagers, sales playbooks, and a full service catalog — everything you need to make a great introduction.' },
      { icon: DollarSign, title: 'Transparent Payouts', desc: 'No hidden calculations. You see exactly what you\'ve earned and when to expect payment.' },
      { icon: Network, title: 'Tier-Based Rewards', desc: 'Unlock higher commissions, personalized assets, and exclusive benefits as you grow within the program.' },
      { icon: Lock, title: 'Exclusive Access', desc: 'This program is invite-only and application-gated. Every partner here is vetted and serious.' },
    ],
    whoTitle: 'Who Is This For?',
    whoItems: [
      'University students with strong campus or industry networks',
      'Sales professionals with connections to SME decision-makers',
      'Consultants who regularly advise businesses on growth',
      'Marketing professionals who understand digital needs',
      'Entrepreneurs with peer networks in specific verticals',
      'Anyone with genuine influence and trusted relationships',
    ],
    ctaTitle: 'Ready to Monetize Your Network?',
    ctaDesc: 'Join a curated community of Introductory Partners and start earning from the connections you already have.',
    ctaApply: 'Apply to Become an IP',
    ctaSignIn: 'Already a Partner? Sign In',
  },
  id: {
    badge: 'Program Introductory Partner',
    headline1: 'Jadikan Jaringan Anda',
    headline2: 'Sumber Penghasilan.',
    sub: "Program Introductory Partner (IP) Akar Systems adalah ekosistem eksklusif bagi para profesional berpengaruh yang ingin memonetisasi koneksi mereka — tanpa harus menjual apapun.",
    subBold: "Anda yang mengenalkan. Kami yang closing. Anda yang cuan.",
    ctaPortal: 'Akses Partner Portal',
    ctaLearn: 'Pelajari Cara Kerjanya',
    notAffiliate: "Ini bukan affiliate marketing.",
    notAffiliateDesc: "Kami tidak melakukan referral link murahan atau komisi spam. Ini adalah program kemitraan profesional yang dikurasi untuk orang-orang dengan pengaruh nyata di industri mereka.",
    howTitle: 'Cara Kerjanya',
    howSteps: [
      {
        step: '01',
        title: 'Daftar & Dapatkan Persetujuan',
        desc: 'Ajukan lamaran Anda. Kami meninjau profil dan jaringan profesional Anda. IP yang disetujui mendapatkan akses ke Partner Portal lengkap.',
      },
      {
        step: '02',
        title: 'Identifikasi Peluang',
        desc: 'Jelajahi Katalog Layanan dan Sales Playbook kami untuk memahami siapa yang paling cocok dengan layanan Akar Systems — dan cocokkan dengan jaringan Anda.',
      },
      {
        step: '03',
        title: 'Daftarkan Lead',
        desc: "Ketika Anda sedang dalam percakapan aktif dengan calon klien, daftarkan mereka di portal. Ini melindungi klaim Anda dan mengunci komisi Anda.",
      },
      {
        step: '04',
        title: 'Kami Closing. Anda Cuan.',
        desc: "Akar Systems menangani pitch, proposal, dan delivery. Setelah deal closed, komisi Anda dicatat dan dibayarkan.",
      },
    ],
    earningTitle: 'Potensi Penghasilan Anda',
    earningDesc: 'Komisi disusun berdasarkan nilai proyek dan tier kemitraan Anda. Semakin berdampak pengenalan yang Anda buat, semakin besar penghasilan Anda.',
    earningItems: [
      { label: 'Proyek Entry-Level', range: 'Rp 500K – Rp 2M', note: 'Per deal closed' },
      { label: 'Proyek Mid-Tier', range: 'Rp 2M – Rp 7M', note: 'Per deal closed' },
      { label: 'Enterprise / Custom', range: 'Dinegosiasikan', note: 'Berdasarkan nilai deal' },
    ],
    earningNote: '* Persentase komisi dan struktur tier lengkap dijelaskan di dalam Partner Portal setelah persetujuan.',
    whyTitle: 'Kenapa Bermitra dengan Akar?',
    whyItems: [
      { icon: Shield, title: 'Lead Terlindungi', desc: 'Siapa yang pertama daftar, pertama dilindungi. Lead Anda terkunci di saat Anda mendaftarkannya — tanpa sengketa.' },
      { icon: TrendingUp, title: 'Visibilitas Pipeline Penuh', desc: 'Lacak setiap lead dari pengenalan hingga pembayaran secara real time melalui dashboard pribadi Anda.' },
      { icon: Briefcase, title: 'Sumber Daya Profesional', desc: 'One-pager bermerek, sales playbook, dan katalog layanan lengkap — semua yang Anda butuhkan untuk membuat pengenalan yang hebat.' },
      { icon: DollarSign, title: 'Pembayaran Transparan', desc: 'Tidak ada kalkulasi tersembunyi. Anda melihat persis berapa yang Anda hasilkan dan kapan pembayaran akan dilakukan.' },
      { icon: Network, title: 'Reward Berbasis Tier', desc: 'Buka komisi lebih tinggi, aset yang dipersonalisasi, dan manfaat eksklusif seiring pertumbuhan Anda dalam program.' },
      { icon: Lock, title: 'Akses Eksklusif', desc: 'Program ini hanya melalui undangan dan pendaftaran. Setiap partner di sini telah diverifikasi dan serius.' },
    ],
    whoTitle: 'Untuk Siapa Program Ini?',
    whoItems: [
      'Mahasiswa dengan jaringan kampus atau industri yang kuat',
      'Profesional sales dengan koneksi ke pengambil keputusan UKM',
      'Konsultan yang secara rutin menasihati bisnis tentang pertumbuhan',
      'Profesional marketing yang memahami kebutuhan digital',
      'Wirausahawan dengan jaringan rekan di vertikal tertentu',
      'Siapa saja dengan pengaruh nyata dan hubungan yang dipercaya',
    ],
    ctaTitle: 'Siap Memonetisasi Jaringan Anda?',
    ctaDesc: 'Bergabunglah dengan komunitas Introductory Partner yang dikurasi dan mulai menghasilkan dari koneksi yang sudah Anda miliki.',
    ctaApply: 'Daftar Menjadi IP',
    ctaSignIn: 'Sudah Menjadi Partner? Masuk',
  },
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Partners() {
  const { lang } = useLang();
  const c = content[lang];

  return (
    <div className="bg-[#F0EDE8] min-h-screen">

      {/* ── HERO ── */}
      <section className="pt-36 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1a1a1a] text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              {c.badge}
            </span>
          </motion.div>

          <motion.h1 {...fadeUp(0.08)} className="font-serif text-5xl md:text-7xl text-[#1a1a1a] tracking-tight leading-[1.06] mb-6">
            {c.headline1}
            <br />
            <span className="text-green-700 relative inline-block">
              {c.headline2}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.65, delay: 0.5, ease: 'easeOut' }}
                className="absolute inset-x-0 origin-left rounded-sm pointer-events-none"
                style={{ bottom: '8%', height: '38%', background: 'rgba(134,239,172,0.45)', zIndex: 0 }}
              />
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.16)} className="text-lg text-[#1a1a1a]/50 max-w-2xl mx-auto leading-relaxed mb-4">
            {c.sub}
          </motion.p>
          <motion.p {...fadeUp(0.2)} className="text-base font-semibold text-[#1a1a1a] mb-10">
            {c.subBold}
          </motion.p>

          <motion.div {...fadeUp(0.26)} className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 bg-green-600 text-white font-semibold px-8 py-4 rounded-full text-sm hover:bg-green-700 transition-colors shadow-lg shadow-green-500/20"
            >
              {c.ctaApply}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#how-it-works"
              onClick={e => { e.preventDefault(); document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 border border-[#1a1a1a]/20 text-[#1a1a1a] font-medium px-8 py-4 rounded-full text-sm hover:bg-[#1a1a1a]/5 transition-colors"
            >
              {c.ctaLearn}
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── NOT AFFILIATE MARKETING ── */}
      <section className="py-10 px-6 bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp(0)}>
            <p className="font-serif text-2xl md:text-3xl text-white mb-3 italic">"{c.notAffiliate}"</p>
            <p className="text-white/45 text-sm leading-relaxed">{c.notAffiliateDesc}</p>
          </motion.div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-3">Simple Process</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] tracking-tight">{c.howTitle}</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-5">
            {c.howSteps.map((s, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.08)}
                className="bg-white rounded-2xl p-7 border border-black/7 relative overflow-hidden"
              >
                <span className="font-serif text-6xl font-bold text-green-600/10 absolute top-4 right-6">{s.step}</span>
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-serif text-xl text-[#1a1a1a] mb-2">{s.title}</h3>
                <p className="text-sm text-[#1a1a1a]/50 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EARNING POTENTIAL ── */}
      <section className="py-20 px-6 bg-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-400 mb-3">Commission Structure</p>
            <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight mb-4">{c.earningTitle}</h2>
            <p className="text-white/45 max-w-xl mx-auto text-sm leading-relaxed">{c.earningDesc}</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5 mb-6">
            {c.earningItems.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.08)}
                className="bg-white/5 border border-white/10 rounded-2xl p-7 text-center hover:bg-white/8 transition-colors"
              >
                <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-3">{item.label}</p>
                <p className="font-serif text-3xl font-bold text-green-400 mb-2">{item.range}</p>
                <p className="text-white/30 text-xs">{item.note}</p>
              </motion.div>
            ))}
          </div>
          <motion.p {...fadeUp(0.2)} className="text-center text-white/25 text-xs leading-relaxed">
            {c.earningNote}
          </motion.p>
        </div>
      </section>

      {/* ── WHY PARTNER ── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-3">The Advantage</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] tracking-tight">{c.whyTitle}</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {c.whyItems.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.06)}
                className="bg-white rounded-2xl p-6 border border-black/7 flex gap-4 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 bg-green-50 border border-green-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                  <item.icon className="w-4.5 h-4.5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1a1a1a] text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-[#1a1a1a]/50 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTAL DEMO ── */}
      <section className="py-20 px-6 bg-[#F0EDE8]">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-3">
              {lang === 'id' ? 'Eksklusif untuk Approved Partners' : 'Exclusive to Approved Partners'}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] tracking-tight mb-4">
              {lang === 'id' ? 'Jelajahi Portal Anda' : 'Explore Your Portal'}
            </h2>
            <p className="text-[#1a1a1a]/50 max-w-lg mx-auto text-sm leading-relaxed">
              {lang === 'id'
                ? 'Setelah disetujui, Anda mendapatkan akses ke dashboard lengkap ini — kelola lead, lacak komisi, dan akses semua resource.'
                : 'Once approved, you get access to this full dashboard — manage leads, track commissions, and access all resources.'}
            </p>
          </motion.div>
          <motion.div {...fadeUp(0.1)}>
            <PortalDemoShell lang={lang} />
          </motion.div>
        </div>
      </section>

      {/* ── WHO IS THIS FOR ── */}
      <section className="py-20 px-6 bg-[#E8E4DC]">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-3">Ideal Partners</p>
            <h2 className="font-serif text-4xl text-[#1a1a1a] tracking-tight">{c.whoTitle}</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-3">
            {c.whoItems.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.06)}
                className="flex items-start gap-3 bg-white rounded-xl px-5 py-4 border border-black/7"
              >
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <p className="text-sm text-[#1a1a1a]/70 leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-6 bg-green-700">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp(0)}>
            <div className="flex items-center justify-center gap-2 mb-6">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-white/30 text-white/30" />)}
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight mb-5">{c.ctaTitle}</h2>
            <p className="text-white/60 text-base leading-relaxed max-w-xl mx-auto mb-10">{c.ctaDesc}</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/apply"
                className="inline-flex items-center gap-2 bg-white text-green-700 font-bold px-8 py-4 rounded-full text-sm hover:bg-green-50 transition-colors shadow-lg"
              >
                {c.ctaApply}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/portal"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-medium px-8 py-4 rounded-full text-sm hover:bg-white/10 transition-colors"
              >
                {c.ctaSignIn}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}