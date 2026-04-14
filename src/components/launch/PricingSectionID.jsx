import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

const paket = [
  {
    id: 1,
    nama: 'Landing Page',
    tagline: 'Cocok untuk kebutuhan iklan digital',
    hargaCoret: 'Rp 2.500.000',
    harga: 'Rp 1.490.000',
    highlight: false,
    badge: null,
    fitur: [
      '1 halaman landing page',
      'Domain & Hosting Premium',
      'Web Performance Analytics',
      'FREE Integrasi Pixel (Meta, TikTok, dll)',
      'FREE Konsultasi & Pre-Production Meeting',
    ],
    note: 'Konsultasikan kebutuhan landing page Anda yang terhubung langsung dengan kampanye iklan digital di Meta, TikTok, dan platform lainnya.',
    cta: 'Pilih Paket Ini',
  },
  {
    id: 2,
    nama: 'Website Bisnis',
    tagline: 'Multi-page untuk bisnis yang serius',
    hargaCoret: 'Rp 5.500.000',
    harga: 'Rp 2.790.000',
    highlight: false,
    badge: null,
    fitur: [
      'Website 2–5 halaman',
      'Domain & Hosting Premium',
      'Web Performance Analytics',
      'FREE Integrasi Pixel (Meta, TikTok, dll)',
      'FREE Konsultasi & Pre-Production Meeting',
      'Direktori Blog & SEO',
      'Akses Admin untuk Blog Publishing',
      'FREE Training Blog Publishing (sampai bisa)',
    ],
    note: 'Blog & SEO membantu calon pelanggan menemukan bisnis Anda di Google dengan keyword yang mereka cari.',
    cta: 'Pilih Paket Ini',
  },
  {
    id: 3,
    nama: 'Website + Local Boost',
    tagline: 'Dominasi Google Maps di kota Anda',
    hargaCoret: 'Rp 8.000.000',
    harga: 'Rp 4.990.000',
    highlight: true,
    badge: 'Terpopuler',
    fitur: [
      'Website 2–5 halaman',
      'Domain & Hosting Premium',
      'Web Performance Analytics',
      'FREE Integrasi Pixel (Meta, TikTok, dll)',
      'FREE Konsultasi & Pre-Production Meeting',
      'Direktori Blog & SEO',
      'Akses Admin untuk Blog Publishing',
      'FREE Training Blog Publishing (sampai bisa)',
    ],
    gbp: true,
    note: null,
    cta: 'Pilih Paket Ini',
  },
  {
    id: 4,
    nama: 'Paket Kustom',
    tagline: 'Sesuai kebutuhan spesifik bisnis Anda',
    hargaCoret: null,
    harga: 'Mulai Rp 2.790.000',
    highlight: false,
    badge: 'Fleksibel',
    fitur: [
      'Website multi-page kustom',
      'Google Business Profile Boosting',
      'SEO Bulanan & Laporan Performa',
      'Google Ads Management',
      'Integrasi Marketplace (Tokopedia, Shopee, dll)',
      'Fitur Booking / Kalender Online',
      'Payment Gateway Integration',
      'Custom Feature & Aplikasi Web',
    ],
    note: 'Komunikasikan kebutuhan Anda dan dapatkan penawaran terbaik. Bisa dikustomisasi mulai dari paket Website Bisnis.',
    cta: 'Konsultasi Gratis',
    isCustom: true,
  },
];

export default function PricingSectionID() {
  const handleCta = (p) => {
    if (p.isCustom) {
      window.open('https://wa.me/62', '_blank');
    } else {
      document.getElementById('pesan')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-6 bg-[#F0EDE8]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-3">Transparan & Terjangkau</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] tracking-tight mb-4">
            Pilih Paket yang Tepat
          </h2>
          <p className="text-[#1a1a1a]/50 max-w-xl mx-auto text-sm leading-relaxed">
            Semua paket dikerjakan dalam <strong className="text-[#1a1a1a]">48 jam</strong> dan sudah termasuk desain kustom, SSL, serta pendampingan 30 hari pasca-launch.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 items-stretch">
          {paket.map((p, i) => (
            <motion.div
              key={p.id}
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
              {/* Popular badge */}
              {p.badge && (
                <div className={`absolute top-0 right-0 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-bl-xl ${
                  p.highlight ? 'bg-green-600 text-white' : 'bg-[#1a1a1a] text-white'
                }`}>
                  {p.badge}
                </div>
              )}

              {/* Top */}
              <div className={`px-6 pt-7 pb-5 ${p.highlight ? 'bg-green-600' : ''}`}>
                <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${p.highlight ? 'text-white/60' : 'text-[#1a1a1a]/35'}`}>
                  Paket {p.id}
                </p>
                <h3 className={`font-serif text-xl font-bold mb-1 ${p.highlight ? 'text-white' : 'text-[#1a1a1a]'}`}>
                  {p.nama}
                </h3>
                <p className={`text-xs leading-relaxed mb-5 ${p.highlight ? 'text-white/65' : 'text-[#1a1a1a]/45'}`}>
                  {p.tagline}
                </p>
                <div>
                  {p.hargaCoret && (
                    <p className={`text-xs line-through mb-0.5 ${p.highlight ? 'text-white/40' : 'text-[#1a1a1a]/30'}`}>
                      {p.hargaCoret}
                    </p>
                  )}
                  <p className={`font-serif text-2xl font-bold ${p.highlight ? 'text-white' : 'text-green-600'}`}>
                    {p.harga}
                  </p>
                  {p.isCustom && (
                    <p className={`text-[10px] mt-0.5 ${p.highlight ? 'text-white/50' : 'text-[#1a1a1a]/35'}`}>
                      harga disesuaikan kebutuhan
                    </p>
                  )}
                </div>
              </div>

              {/* Divider */}
              <div className={`h-px mx-6 ${p.highlight ? 'bg-green-500/30' : 'bg-black/6'}`} />

              {/* Features */}
              <div className="px-6 py-5 flex-1 flex flex-col gap-4">
                <ul className="space-y-2.5">
                  {p.fitur.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2 text-xs text-[#1a1a1a]/65 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* GBP highlight block for paket 3 */}
                {p.gbp && (
                  <div className="mt-1 rounded-xl border border-green-200 bg-green-50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-green-600 shrink-0" />
                      <p className="text-xs font-bold text-green-700 uppercase tracking-wide">Google Business Boosting</p>
                    </div>
                    <p className="text-xs text-green-800/70 leading-relaxed">
                      Profil Google Bisnis Anda akan dioptimasi hingga muncul di peringkat teratas Google Maps — sehingga pelanggan yang mencari produk/jasa Anda di area tertentu langsung menemukan bisnis Anda.
                    </p>
                    <div className="mt-3 rounded-lg overflow-hidden border border-green-200">
                      <img
                        src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&q=80"
                        alt="Google Maps peringkat teratas"
                        className="w-full h-28 object-cover object-center opacity-80"
                      />
                      <p className="text-[10px] text-center text-green-700/60 py-1.5 bg-green-50">
                        Contoh: bisnis muncul #1 di pencarian lokal Google Maps
                      </p>
                    </div>
                  </div>
                )}

                {/* Note */}
                {p.note && (
                  <p className="text-[11px] text-[#1a1a1a]/40 leading-relaxed italic border-t border-black/5 pt-3">
                    {p.note}
                  </p>
                )}

                {/* Add-ons note for custom */}
                {p.isCustom && (
                  <div className="rounded-xl bg-[#F8F6F2] border border-black/6 p-3 mt-1">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#1a1a1a]/50" />
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-[#1a1a1a]/40">Add-on Tersedia</p>
                    </div>
                    <p className="text-[11px] text-[#1a1a1a]/45 leading-relaxed">
                      Marketplace integration, kalender booking, payment gateway, fitur member, dan lainnya — sesuai permintaan.
                    </p>
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => handleCta(p)}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                    p.highlight
                      ? 'bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-500/20'
                      : p.isCustom
                      ? 'bg-[#1a1a1a] text-white hover:bg-[#333]'
                      : 'border border-[#1a1a1a]/15 text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white'
                  }`}
                >
                  {p.isCustom
                    ? <><MessageCircle className="w-4 h-4" />{p.cta}</>
                    : <>{p.cta}<ArrowRight className="w-3.5 h-3.5" /></>
                  }
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-xs text-[#1a1a1a]/35 mt-8"
        >
          Semua harga sudah termasuk desain kustom, SSL, domain, hosting, dan pendampingan 30 hari. Tidak ada biaya tersembunyi.
        </motion.p>
      </div>
    </section>
  );
}