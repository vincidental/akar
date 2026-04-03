import { Link } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';

const copy = {
  en: {
    tagline: 'Digital infrastructure for businesses that refuse to leave revenue on the table.',
    services: 'Services',
    serviceItems: ['Digital Storefront', 'Local SEO', 'AI Pipeline', 'Analytics'],
    company: 'Company',
    companyItems: [['Philosophy', '/philosophy'], ['Infrastructure', '/infrastructure'], ['Strategy Call', '/strategy'], ['48-Hour Launch', '/launch']],
    contact: 'Contact',
    rights: '© 2026 Akar Systems. All rights reserved.',
    location: 'Jakarta, Indonesia',
  },
  id: {
    tagline: 'Infrastruktur digital untuk bisnis yang tidak mau kehilangan satu pun pelanggan.',
    services: 'Layanan',
    serviceItems: ['Website Premium', 'SEO Lokal', 'Pipeline AI', 'Analytics'],
    company: 'Perusahaan',
    companyItems: [['Filosofi', '/philosophy'], ['Infrastruktur', '/infrastructure'], ['Konsultasi', '/strategy'], ['Launch 48 Jam', '/launch']],
    contact: 'Kontak',
    rights: '© 2026 Akar Systems. Hak cipta dilindungi.',
    location: 'Jakarta, Indonesia',
  },
};

export default function Footer() {
  const { lang } = useLang();
  const c = copy[lang];

  return (
    <footer className="bg-[#F0EDE8] border-t border-black/8 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-[#1a1a1a] rounded-sm flex items-center justify-center">
                <span className="text-white text-[9px] font-bold tracking-tight">AS</span>
              </div>
              <span className="font-semibold text-[#1a1a1a] text-sm">Akar Systems</span>
            </div>
            <p className="text-sm text-[#1a1a1a]/50 leading-relaxed max-w-[180px]">
              {c.tagline}
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#1a1a1a]/40 mb-3">{c.services}</p>
            <ul className="space-y-2">
              {c.serviceItems.map((s) => (
                <li key={s}>
                  <Link to="/infrastructure" className="text-sm text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#1a1a1a]/40 mb-3">{c.company}</p>
            <ul className="space-y-2">
              {c.companyItems.map(([label, to]) => (
                <li key={label}>
                  <Link to={to} className="text-sm text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#1a1a1a]/40 mb-3">{c.contact}</p>
            <ul className="space-y-2">
              <li>
                <a href="https://wa.me/62" target="_blank" rel="noopener noreferrer" className="text-sm text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:hello@akarsystems.id" className="text-sm text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors">
                  hello@akarsystems.id
                </a>
              </li>
              <li>
                <span className="text-sm text-[#1a1a1a]/40">{c.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-black/8 gap-4">
          <p className="text-xs text-[#1a1a1a]/40">{c.rights}</p>
          <p className="text-xs text-[#1a1a1a]/40">{c.location}</p>
        </div>
      </div>
    </footer>
  );
}