import { Link } from 'react-router-dom';

export default function Footer() {
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
              Digital infrastructure for businesses that refuse to leave revenue on the table.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#1a1a1a]/40 mb-3">Services</p>
            <ul className="space-y-2">
              {['Digital Storefront', 'Local SEO', 'AI Pipeline', 'Analytics'].map((s) => (
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
            <p className="text-xs font-semibold uppercase tracking-widest text-[#1a1a1a]/40 mb-3">Company</p>
            <ul className="space-y-2">
              {[['Philosophy', '/philosophy'], ['Infrastructure', '/infrastructure'], ['Free Audit', '/audit']].map(([label, to]) => (
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
            <p className="text-xs font-semibold uppercase tracking-widest text-[#1a1a1a]/40 mb-3">Contact</p>
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
                <span className="text-sm text-[#1a1a1a]/40">Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-black/8 gap-4">
          <p className="text-xs text-[#1a1a1a]/40">© 2026 Akar Systems. All rights reserved.</p>
          <p className="text-xs text-[#1a1a1a]/40">Jakarta, Indonesia</p>
        </div>
      </div>
    </footer>
  );
}