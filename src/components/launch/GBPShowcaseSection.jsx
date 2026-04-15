import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Star, Phone, Globe, CheckCircle2, ArrowRight, TrendingUp, Users, Eye, ChevronDown } from 'lucide-react';

const BeforeCard = ({ lang }) => (
  <div className="flex-1 min-w-0">
    <div className="text-center mb-3">
      <span className="inline-block px-3 py-1 bg-red-100 text-red-600 text-[10px] font-bold uppercase tracking-widest rounded-full">
        {lang === 'id' ? 'Sebelum' : 'Before'}
      </span>
    </div>
    <div className="bg-white rounded-2xl border border-red-200 overflow-hidden shadow-lg">
      <div className="bg-[#f8f9fa] px-4 py-3 border-b border-gray-200 flex items-center gap-2">
        <div className="flex-1 bg-white rounded-full px-3 py-1.5 border border-gray-300 flex items-center gap-2">
          <MapPin className="w-3 h-3 text-gray-400 shrink-0" />
          <span className="text-[11px] text-gray-500">
            {lang === 'id' ? '"salon kecantikan jakarta selatan"' : '"beauty salon south jakarta"'}
          </span>
        </div>
      </div>
      <div className="p-3 space-y-2">
        <div className="p-3 bg-white border border-gray-200 rounded-xl">
          <div className="flex items-start justify-between mb-1">
            <div>
              <p className="text-[11px] font-semibold text-[#1a77d2]">Salon Cantik Prima</p>
              <div className="flex items-center gap-1 mt-0.5">
                <div className="flex">{[1,2,3,4,5].map(i => <Star key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />)}</div>
                <span className="text-[9px] text-gray-500">4.9 (312)</span>
              </div>
            </div>
            <span className="text-[9px] bg-green-100 text-green-700 px-2 py-0.5 rounded font-medium">Buka</span>
          </div>
          <p className="text-[9px] text-gray-500">0.3 km · Salon kecantikan</p>
        </div>
        <div className="p-3 bg-white border border-gray-200 rounded-xl">
          <div className="flex items-start justify-between mb-1">
            <div>
              <p className="text-[11px] font-semibold text-[#1a77d2]">Beauty Lounge Senayan</p>
              <div className="flex items-center gap-1 mt-0.5">
                <div className="flex">{[1,2,3,4].map(i => <Star key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />)}<Star className="w-2.5 h-2.5 text-gray-300" /></div>
                <span className="text-[9px] text-gray-500">4.4 (198)</span>
              </div>
            </div>
            <span className="text-[9px] bg-green-100 text-green-700 px-2 py-0.5 rounded font-medium">Buka</span>
          </div>
          <p className="text-[9px] text-gray-500">0.7 km · Salon kecantikan</p>
        </div>
        <div className="p-3 bg-white border border-gray-200 rounded-xl">
          <div className="flex items-start justify-between mb-1">
            <div>
              <p className="text-[11px] font-semibold text-[#1a77d2]">Glam Studio Jakarta</p>
              <div className="flex items-center gap-1 mt-0.5">
                <div className="flex">{[1,2,3,4].map(i => <Star key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />)}<Star className="w-2.5 h-2.5 text-gray-300" /></div>
                <span className="text-[9px] text-gray-500">4.2 (87)</span>
              </div>
            </div>
          </div>
          <p className="text-[9px] text-gray-500">1.1 km · Salon kecantikan</p>
        </div>
        <div className="p-3 bg-red-50 border border-red-200 rounded-xl relative">
          <div className="absolute -top-1 -left-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-[8px] text-white font-bold">4</span>
          </div>
          <div className="flex items-start justify-between mb-1">
            <div>
              <p className="text-[11px] font-semibold text-[#1a77d2]">
                {lang === 'id' ? 'Bisnis Anda' : 'Your Business'}
              </p>
              <div className="flex items-center gap-1 mt-0.5">
                <div className="flex">{[1,2,3].map(i => <Star key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />)}<Star className="w-2.5 h-2.5 text-gray-300" /><Star className="w-2.5 h-2.5 text-gray-300" /></div>
                <span className="text-[9px] text-gray-500">3.8 (12)</span>
              </div>
            </div>
          </div>
          <p className="text-[9px] text-gray-500">1.8 km · {lang === 'id' ? 'Tidak ada foto' : 'No photos'}</p>
          <p className="text-[9px] text-red-400 mt-0.5">
            {lang === 'id' ? '⚠ Profil tidak lengkap' : '⚠ Incomplete profile'}
          </p>
        </div>
      </div>
      <div className="px-3 pb-3">
        <div className="bg-red-50 border border-red-100 rounded-lg p-2.5 text-center">
          <p className="text-[10px] font-semibold text-red-600">
            {lang === 'id' ? '~3 panggilan/bulan' : '~3 calls/month'}
          </p>
          <p className="text-[9px] text-red-400 mt-0.5">
            {lang === 'id' ? 'Tersembunyi di posisi ke-4' : 'Hidden at position #4'}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const AfterCard = ({ lang }) => (
  <div className="flex-1 min-w-0">
    <div className="text-center mb-3">
      <span className="inline-block px-3 py-1 bg-green-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
        {lang === 'id' ? 'Sesudah Akar' : 'After Akar'}
      </span>
    </div>
    <div className="bg-white rounded-2xl border-2 border-green-400 overflow-hidden shadow-xl shadow-green-500/15">
      <div className="bg-[#f8f9fa] px-4 py-3 border-b border-gray-200 flex items-center gap-2">
        <div className="flex-1 bg-white rounded-full px-3 py-1.5 border border-gray-300 flex items-center gap-2">
          <MapPin className="w-3 h-3 text-[#4285F4] shrink-0" />
          <span className="text-[11px] text-gray-500">
            {lang === 'id' ? '"salon kecantikan jakarta selatan"' : '"beauty salon south jakarta"'}
          </span>
        </div>
      </div>
      <div className="px-3 pt-3 pb-1">
        <div className="p-3 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-400 rounded-xl relative shadow-sm shadow-green-200">
          <div className="absolute -top-2 -left-2 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center shadow-md">
            <span className="text-[9px] text-white font-bold">#1</span>
          </div>
          <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-green-600 rounded text-[8px] text-white font-bold">
            {lang === 'id' ? 'TERATAS' : 'TOP'}
          </div>
          <div className="flex gap-1 mb-2 mt-1">
            <div className="h-10 w-14 rounded-md bg-gradient-to-br from-pink-300 to-rose-400 flex items-center justify-center text-[8px] text-white font-medium">foto 1</div>
            <div className="h-10 w-14 rounded-md bg-gradient-to-br from-purple-300 to-indigo-400 flex items-center justify-center text-[8px] text-white font-medium">foto 2</div>
            <div className="h-10 w-14 rounded-md bg-gradient-to-br from-amber-300 to-orange-400 flex items-center justify-center text-[8px] text-white font-medium">foto 3</div>
          </div>
          <div className="flex items-start justify-between mb-1">
            <div>
              <p className="text-[12px] font-bold text-[#1a77d2]">
                {lang === 'id' ? 'Bisnis Anda ✓' : 'Your Business ✓'}
              </p>
              <div className="flex items-center gap-1 mt-0.5">
                <div className="flex">{[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}</div>
                <span className="text-[10px] text-gray-600 font-medium">4.9 (247)</span>
              </div>
            </div>
            <span className="text-[9px] bg-green-600 text-white px-2 py-0.5 rounded font-medium">Buka</span>
          </div>
          <p className="text-[10px] text-gray-600">0.3 km · Salon kecantikan · {lang === 'id' ? 'Terverifikasi' : 'Verified'} ✓</p>
          <div className="flex items-center gap-1 mt-1.5">
            <div className="flex items-center gap-1 px-2 py-1 bg-white border border-green-200 rounded-full">
              <Phone className="w-2.5 h-2.5 text-green-600" />
              <span className="text-[9px] text-green-700 font-medium">{lang === 'id' ? 'Telepon' : 'Call'}</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 bg-white border border-green-200 rounded-full">
              <Globe className="w-2.5 h-2.5 text-green-600" />
              <span className="text-[9px] text-green-700 font-medium">Website</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 bg-white border border-green-200 rounded-full">
              <MapPin className="w-2.5 h-2.5 text-green-600" />
              <span className="text-[9px] text-green-700 font-medium">{lang === 'id' ? 'Rute' : 'Route'}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-3 py-2 space-y-1.5 opacity-40">
        <div className="p-2.5 bg-white border border-gray-100 rounded-xl">
          <p className="text-[10px] font-semibold text-[#1a77d2]">Salon Cantik Prima</p>
          <p className="text-[9px] text-gray-400">4.5 (198) · 0.7 km</p>
        </div>
        <div className="p-2.5 bg-white border border-gray-100 rounded-xl">
          <p className="text-[10px] font-semibold text-[#1a77d2]">Beauty Lounge Senayan</p>
          <p className="text-[9px] text-gray-400">4.2 (87) · 1.1 km</p>
        </div>
      </div>
      <div className="px-3 pb-3">
        <div className="bg-green-600 rounded-lg p-2.5 text-center">
          <p className="text-[10px] font-bold text-white">
            {lang === 'id' ? '~47 panggilan/bulan' : '~47 calls/month'}
          </p>
          <p className="text-[9px] text-white/70 mt-0.5">
            {lang === 'id' ? 'Peringkat #1 di area Anda' : 'Ranked #1 in your area'}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default function GBPShowcaseSection({ lang }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* ── Connector from Paket 3 ── */}
      <div className="bg-[#F0EDE8] flex flex-col items-center py-6 gap-0">
        {/* Top stem */}
        <div className="w-0.5 h-8 bg-gradient-to-b from-transparent to-green-500" />
        {/* Label pill */}
        <div className="flex items-center gap-2 px-5 py-2.5 bg-green-600 rounded-full shadow-lg shadow-green-500/25 z-10">
          <MapPin className="w-3.5 h-3.5 text-white shrink-0" />
          <span className="text-[11px] font-bold text-white uppercase tracking-widest whitespace-nowrap">
            {lang === 'id' ? 'Termasuk di Paket 3' : 'Included in Package 3'}
          </span>
        </div>
        {/* Bottom stem */}
        <div className="w-0.5 h-6 bg-green-500" />
        {/* Arrowhead */}
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
          <path d="M8 10L0.5 0.5H15.5L8 10Z" fill="#16a34a" />
        </svg>
      </div>

      {/* ── GBP Section ── */}
      <section className="bg-[#1a1a1a]">
        {/* Always-visible teaser — click to expand */}
        <div className="max-w-6xl mx-auto px-6 pt-14 pb-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-600/20 border border-green-500/30 rounded-full mb-5">
              <MapPin className="w-3.5 h-3.5 text-green-400" />
              <span className="text-green-400 text-[10px] font-bold uppercase tracking-widest">Google Business Profile Boosting</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight mb-3">
              {lang === 'id'
                ? 'Bisnis Anda Muncul Pertama. Pelanggan Langsung Menelepon.'
                : 'Your Business Ranks First. Customers Call You Directly.'}
            </h2>
            <p className="text-white/45 max-w-lg mx-auto text-sm leading-relaxed mb-7">
              {lang === 'id'
                ? '67% pelanggan mengklik salah satu dari 3 hasil teratas di Google Maps. Termasuk di Paket 3.'
                : '67% of customers click one of the top 3 Google Maps results. Included in Package 3.'}
            </p>

            {/* Toggle button */}
            <button
              onClick={() => setExpanded(v => !v)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/8 hover:bg-white/14 border border-white/15 hover:border-white/30 text-white rounded-full text-sm font-medium transition-all duration-200"
            >
              {expanded
                ? (lang === 'id' ? 'Sembunyikan Detail' : 'Hide Details')
                : (lang === 'id' ? 'Lihat Cara Kerjanya →' : 'See How It Works →')}
              <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
                <ChevronDown className="w-4 h-4 text-green-400" />
              </motion.span>
            </button>
          </div>
        </div>

        {/* Expandable content */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="gbp-detail"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div className="max-w-6xl mx-auto px-6 pb-20">

                {/* Before / After */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="mb-14"
                >
                  <div className="flex flex-col md:flex-row gap-6 items-stretch max-w-3xl mx-auto">
                    <BeforeCard lang={lang} />
                    <div className="flex md:flex-col items-center justify-center gap-3 shrink-0">
                      <div className="hidden md:block w-px flex-1 bg-white/10" />
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-green-400" />
                      </div>
                      <div className="hidden md:block w-px flex-1 bg-white/10" />
                    </div>
                    <AfterCard lang={lang} />
                  </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18, duration: 0.5 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
                >
                  {[
                    { icon: Eye, value: '5×', label: lang === 'id' ? 'Lebih banyak dilihat' : 'More profile views' },
                    { icon: Phone, value: '15×', label: lang === 'id' ? 'Lebih banyak panggilan' : 'More phone calls' },
                    { icon: TrendingUp, value: '#1', label: lang === 'id' ? 'Peringkat lokal target' : 'Target local ranking' },
                    { icon: Users, value: '67%', label: lang === 'id' ? 'Klik ke 3 teratas' : 'Clicks go to top 3' },
                  ].map((s, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                      <s.icon className="w-5 h-5 text-green-400 mx-auto mb-2" />
                      <p className="font-serif text-3xl font-bold text-white mb-1">{s.value}</p>
                      <p className="text-white/45 text-[11px] leading-tight">{s.label}</p>
                    </div>
                  ))}
                </motion.div>

                {/* What we do + results */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.5 }}
                  className="grid md:grid-cols-2 gap-5 mb-10"
                >
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-green-400 mb-3">
                      {lang === 'id' ? 'Yang Kami Optimalkan' : 'What We Optimize'}
                    </p>
                    <ul className="space-y-2.5">
                      {(lang === 'id' ? [
                        'Profil bisnis lengkap & terverifikasi Google',
                        'Foto produk/tempat berkualitas tinggi',
                        'Kategori & atribut bisnis yang tepat',
                        'Manajemen & respons review pelanggan',
                        'Konsistensi NAP (Nama, Alamat, Telepon)',
                        'Keyword lokal di deskripsi bisnis',
                      ] : [
                        'Complete & Google-verified business profile',
                        'High-quality product & location photos',
                        'Correct business categories & attributes',
                        'Customer review management & responses',
                        'NAP consistency (Name, Address, Phone)',
                        'Local keywords in business description',
                      ]).map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-white/65 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-green-400 mb-3">
                      {lang === 'id' ? 'Hasilnya Nyata' : 'Real Results'}
                    </p>
                    <div className="space-y-3">
                      {(lang === 'id' ? [
                        { label: 'Visibilitas Google Maps', before: '12%', after: '74%' },
                        { label: 'Klik ke website', before: '8/bln', after: '91/bln' },
                        { label: 'Permintaan rute', before: '3/bln', after: '38/bln' },
                      ] : [
                        { label: 'Google Maps Visibility', before: '12%', after: '74%' },
                        { label: 'Website clicks', before: '8/mo', after: '91/mo' },
                        { label: 'Direction requests', before: '3/mo', after: '38/mo' },
                      ]).map((row, i) => (
                        <div key={i}>
                          <div className="flex justify-between text-[10px] mb-1">
                            <span className="text-white/50">{row.label}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-red-400 line-through">{row.before}</span>
                              <span className="text-green-400 font-bold">{row.after}</span>
                            </div>
                          </div>
                          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: '85%' }}
                              transition={{ duration: 1, delay: i * 0.15 }}
                              className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 p-4 bg-green-600/20 border border-green-500/30 rounded-xl">
                      <p className="text-xs text-green-300 leading-relaxed font-medium">
                        {lang === 'id'
                          ? '✦ Rata-rata waktu untuk masuk 3 besar: 30–60 hari. Hasil bervariasi tergantung kompetisi lokal.'
                          : '✦ Average time to reach top 3: 30–60 days. Results vary by local competition.'}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.32, duration: 0.4 }}
                  className="text-center"
                >
                  <button
                    onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center gap-2 bg-green-600 text-white font-semibold px-8 py-4 rounded-full text-sm hover:bg-green-700 transition-colors shadow-lg shadow-green-500/25"
                  >
                    {lang === 'id' ? 'Dapatkan Paket Local Boost' : 'Get the Local Boost Package'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-white/30 text-xs mt-3">
                    {lang === 'id' ? 'Termasuk website premium 2–5 halaman + GBP Boosting' : 'Includes premium 2–5 page website + GBP Boosting'}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom padding when collapsed */}
        {!expanded && <div className="pb-12" />}
      </section>
    </>
  );
}