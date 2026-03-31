import { Link } from 'react-router-dom';
import { Zap, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg text-white">Akar Systems</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              Digital infrastructure and conversion optimization for Indonesia's most ambitious local businesses.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Infrastructure</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/infrastructure" className="hover:text-white transition-colors">Digital Storefront</Link></li>
              <li><Link to="/infrastructure" className="hover:text-white transition-colors">Local Dominance Bundle</Link></li>
              <li><Link to="/infrastructure" className="hover:text-white transition-colors">Automated Pipeline</Link></li>
              <li><Link to="/philosophy#custom" className="hover:text-white transition-colors">Custom Engineering</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/philosophy" className="hover:text-white transition-colors">Our Philosophy</Link></li>
              <li><Link to="/audit" className="hover:text-white transition-colors">Book an Audit</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-blue-400 shrink-0" />
                <span>Jakarta HQ, Indonesia</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:hello@akarsystems.com" className="hover:text-white transition-colors">hello@akarsystems.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="https://wa.me/62" className="hover:text-white transition-colors text-emerald-400">WhatsApp Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© 2026 Akar Systems. All rights reserved.</p>
          <p className="text-sm text-slate-600">Jakarta, Indonesia · Silicon Valley Methodology</p>
        </div>
      </div>
    </footer>
  );
}