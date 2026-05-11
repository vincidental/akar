import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle, MapPin, Globe, Zap, Package } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] },
});

const SERVICES = [
  {
    icon: Zap,
    name: 'Landing Page',
    price: 'Rp 1.490.000',
    priceSlashed: 'Rp 2.500.000',
    tagline: 'Built for digital ad campaigns',
    commission: 'Rp 150.000 – Rp 300.000',
    idealFor: 'Businesses running Meta/TikTok ads with no dedicated landing page.',
    features: [
      '1-page high-conversion design',
      'Premium domain & hosting',
      'Pixel integration (Meta, TikTok)',
      'Mobile-optimized',
      'WhatsApp CTA button',
    ],
    pitch: "\"If you're running ads, where are you sending people? A proper landing page can easily 2-3x your conversion rate.\"",
    color: 'border-black/8',
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
    features: [
      '2–5 page professional website',
      'Premium domain & hosting',
      'Blog & SEO directory',
      'Admin CMS access',
      'Blog publishing training',
    ],
    pitch: "\"Customers Google you before calling. If there's no website, they call your competitor.\"",
    color: 'border-black/8',
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
    features: [
      'Full business website (2-5 pages)',
      'Google Business Profile Boosting',
      'Top 3 Google Maps ranking strategy',
      'Local SEO optimisation',
      'All features from Business Website',
    ],
    pitch: "\"When someone searches for [business type] near me in your city, do you come up? We can get you to the top 3 on Google Maps.\"",
    color: 'border-green-500',
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
    features: [
      'Custom multi-page website',
      'Online booking / calendar integration',
      'Payment gateway integration',
      'Marketplace integration',
      'Monthly SEO & performance reports',
    ],
    pitch: "\"What specific features does your business need that a standard website doesn't offer? We build custom solutions.\"",
    color: 'border-black/8',
    highlight: false,
  },
];

export default function PortalServices() {
  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-1">Partner Portal</p>
        <h1 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">Service Catalog</h1>
        <p className="text-sm text-[#1a1a1a]/45 mt-2 max-w-lg">
          Everything Akar Systems offers — with commission details and ready-to-use pitch lines for each service.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5">
        {SERVICES.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className={`bg-white rounded-2xl border-2 ${s.color} ${s.highlight ? 'shadow-lg shadow-green-500/10' : ''} overflow-hidden flex flex-col`}
          >
            {s.highlight && (
              <div className="bg-green-600 px-5 py-1.5 text-center">
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/80">Most Popular — Easiest Sell</p>
              </div>
            )}
            <div className="p-6 flex-1 flex flex-col gap-4">
              {/* Title */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${s.highlight ? 'bg-green-600' : 'bg-green-50 border border-green-100'}`}>
                    <s.icon className={`w-4 h-4 ${s.highlight ? 'text-white' : 'text-green-600'}`} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#1a1a1a]">{s.name}</h3>
                    <p className="text-xs text-[#1a1a1a]/45">{s.tagline}</p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  {s.priceSlashed && (
                    <p className="text-xs line-through text-[#1a1a1a]/30">{s.priceSlashed}</p>
                  )}
                  <p className="font-serif font-bold text-green-700 text-base">{s.price}</p>
                </div>
              </div>

              {/* Commission */}
              <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3">
                <p className="text-[10px] font-bold uppercase tracking-widest text-green-700 mb-0.5">Your Commission</p>
                <p className="font-semibold text-green-800 text-sm">{s.commission}</p>
              </div>

              {/* Ideal for */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/35 mb-1.5">Ideal For</p>
                <p className="text-sm text-[#1a1a1a]/60 leading-relaxed">{s.idealFor}</p>
              </div>

              {/* Features */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/35 mb-2">What's Included</p>
                <ul className="space-y-1.5">
                  {s.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-xs text-[#1a1a1a]/65">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pitch line */}
              <div className="mt-auto pt-4 border-t border-black/5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/35 mb-1.5">Use This Pitch</p>
                <p className="text-xs text-[#1a1a1a]/60 leading-relaxed italic bg-[#F8F6F2] rounded-xl p-3">
                  {s.pitch}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8 flex items-start gap-3 bg-[#1a1a1a] rounded-2xl p-5"
      >
        <MessageCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
        <p className="text-sm text-white/55 leading-relaxed">
          <span className="text-white font-semibold">Not sure which package to suggest?</span> Register the lead with service interest as "Not Sure Yet" — the Akar Systems team will assess the best fit during the initial consultation and ensure your commission is attributed correctly.
        </p>
      </motion.div>
    </div>
  );
}