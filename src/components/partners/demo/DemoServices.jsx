import { CheckCircle2, MessageCircle, MapPin, Globe, Zap, Package } from 'lucide-react';

const SERVICES = [
  {
    icon: Zap,
    name: 'Landing Page',
    price: 'Rp 1.490.000',
    priceSlashed: 'Rp 2.500.000',
    tagline: 'Built for digital ad campaigns',
    commission: 'Rp 150.000 – Rp 300.000',
    idealFor: 'Businesses running Meta/TikTok ads with no dedicated landing page.',
    pitch: '"If you\'re running ads, where are you sending people? A proper landing page can 2-3x your conversion rate."',
    highlight: false,
  },
  {
    icon: Globe,
    name: 'Business Website',
    price: 'Rp 2.790.000',
    priceSlashed: 'Rp 5.500.000',
    tagline: 'Multi-page for serious businesses',
    commission: 'Rp 300.000 – Rp 600.000',
    idealFor: 'Established businesses with no proper web presence who need credibility.',
    pitch: '"Customers Google you before calling. If there\'s no website, they call your competitor."',
    highlight: false,
  },
  {
    icon: MapPin,
    name: 'Website + Local Boost',
    price: 'Rp 4.990.000',
    priceSlashed: 'Rp 8.000.000',
    tagline: 'Dominate Google Maps in your city',
    commission: 'Rp 500.000 – Rp 1.000.000',
    idealFor: 'Local service businesses (clinics, salons, restaurants) wanting top Google Maps ranking.',
    pitch: '"When someone searches for your business type near me — do you come up? We get you top 3 on Maps."',
    highlight: true,
  },
  {
    icon: Package,
    name: 'Custom Package',
    price: 'From Rp 2.790.000',
    priceSlashed: null,
    tagline: 'Tailored to exact business needs',
    commission: 'Negotiated — typically highest',
    idealFor: 'Businesses with specific needs: booking systems, e-commerce, payment gateways, etc.',
    pitch: '"What specific features does your business need? We build custom solutions."',
    highlight: false,
  },
];

export default function DemoServices({ lang }) {
  const isID = lang === 'id';
  return (
    <div className="p-5">
      <div className="mb-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-0.5">Partner Portal</p>
        <h1 className="font-serif text-xl text-[#1a1a1a]">{isID ? 'Katalog Layanan' : 'Service Catalog'}</h1>
        <p className="text-[10px] text-[#1a1a1a]/40 mt-0.5">{isID ? 'Detail komisi & pitch untuk setiap layanan.' : 'Commission details and pitch lines for each service.'}</p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {SERVICES.map((s, i) => (
          <div
            key={i}
            className={`bg-white rounded-xl border-2 overflow-hidden ${s.highlight ? 'border-green-500 shadow-md shadow-green-500/10' : 'border-black/7'}`}
          >
            {s.highlight && (
              <div className="bg-green-600 px-4 py-1 text-center">
                <p className="text-[9px] font-bold uppercase tracking-widest text-white/80">{isID ? 'Terpopuler — Paling Mudah Dijual' : 'Most Popular — Easiest Sell'}</p>
              </div>
            )}
            <div className="p-4 flex gap-3">
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${s.highlight ? 'bg-green-600' : 'bg-green-50 border border-green-100'}`}>
                <s.icon className={`w-3.5 h-3.5 ${s.highlight ? 'text-white' : 'text-green-600'}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div>
                    <p className="font-semibold text-[#1a1a1a] text-xs">{s.name}</p>
                    <p className="text-[10px] text-[#1a1a1a]/40">{s.tagline}</p>
                  </div>
                  <div className="text-right shrink-0">
                    {s.priceSlashed && <p className="text-[9px] line-through text-[#1a1a1a]/25">{s.priceSlashed}</p>}
                    <p className="text-xs font-bold text-green-700">{s.price}</p>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-100 rounded-lg px-3 py-1.5 mt-2">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-green-700">{isID ? 'Komisi Anda' : 'Your Commission'}</p>
                  <p className="text-xs font-semibold text-green-800">{s.commission}</p>
                </div>
                <p className="text-[10px] text-[#1a1a1a]/50 leading-relaxed mt-2 italic bg-[#F8F6F2] rounded-lg p-2">{s.pitch}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-start gap-2.5 bg-[#1a1a1a] rounded-xl p-4">
        <MessageCircle className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
        <p className="text-[10px] text-white/50 leading-relaxed">
          <span className="text-white font-semibold">{isID ? 'Tidak yakin paket mana?' : 'Not sure which package?'} </span>
          {isID ? 'Daftarkan lead dengan minat "Tidak Yakin" — tim kami yang tentukan paket terbaik.' : 'Register the lead as "Not Sure Yet" — the Akar Systems team will assess the best fit.'}
        </p>
      </div>
    </div>
  );
}