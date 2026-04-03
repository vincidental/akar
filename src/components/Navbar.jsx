import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

const navLinks = {
  en: [
    { label: 'Infrastructure', to: '/infrastructure' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Philosophy', to: '/philosophy' },
  ],
  id: [
    { label: 'Layanan', to: '/infrastructure' },
    { label: 'Portofolio', to: '/portfolio' },
    { label: 'Filosofi', to: '/philosophy' },
  ],
};

const t = {
  en: { cta: 'Book a Strategy Call', launch: '48-Hour Launch' },
  id: { cta: 'Konsultasi Gratis', launch: 'Launch 48 Jam' },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { lang, toggle } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  const links = navLinks[lang];
  const copy = t[lang];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <motion.nav
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-5xl rounded-full px-5 py-2.5 flex items-center justify-between transition-all duration-500"
        style={{
          background: scrolled
            ? 'linear-gradient(135deg, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.48) 100%)'
            : 'linear-gradient(135deg, rgba(255,255,255,0.60) 0%, rgba(255,255,255,0.35) 100%)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          border: '1px solid rgba(255,255,255,0.75)',
          boxShadow: scrolled
            ? '0 8px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.95), inset 0 -1px 0 rgba(255,255,255,0.30)'
            : '0 4px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.90)',
        }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div
            className="w-6 h-6 rounded-md flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #2a2520 0%, #1a1a1a 100%)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.12)',
            }}
          >
            <span className="text-white text-[9px] font-bold tracking-tight">AS</span>
          </div>
          <span className="font-semibold text-[#1a1a1a] text-sm tracking-tight drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
            Akar Systems
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-0.5">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                location.pathname === link.to
                  ? 'bg-white/60 text-[#1a1a1a] shadow-[0_1px_4px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)]'
                  : 'text-[#1a1a1a]/60 hover:text-[#1a1a1a] hover:bg-white/40'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="w-px h-4 bg-black/10 mx-1" />
          <Link
            to="/launch"
            className={`px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 transition-all duration-200 ${
              location.pathname === '/launch'
                ? 'bg-green-50/80 text-green-700'
                : 'text-[#1a1a1a]/55 hover:text-green-600 hover:bg-green-50/50'
            }`}
          >
            <span className="relative flex items-center justify-center w-1.5 h-1.5">
              <span className="absolute w-2.5 h-2.5 rounded-full bg-green-400/30 animate-ping" />
              <span className="relative w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.8)]" />
            </span>
            {copy.launch}
          </Link>
        </div>

        {/* Right: Lang toggle + CTA */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Language Toggle */}
          <button
            onClick={toggle}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-200 hover:bg-white/50"
            style={{
              background: 'rgba(255,255,255,0.35)',
              border: '1px solid rgba(255,255,255,0.6)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8)',
              color: '#1a1a1a',
            }}
          >
            <span className={lang === 'en' ? 'opacity-100' : 'opacity-35'}>EN</span>
            <span className="text-black/25 mx-0.5">|</span>
            <span className={lang === 'id' ? 'opacity-100' : 'opacity-35'}>ID</span>
          </button>

          <Link
            to="/strategy"
            className="text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200"
            style={{
              background: 'linear-gradient(135deg, #2a2520 0%, #1a1a1a 100%)',
              color: 'white',
              boxShadow: '0 2px 12px rgba(0,0,0,0.20), inset 0 1px 0 rgba(255,255,255,0.12)',
            }}
          >
            {copy.cta}
          </Link>
        </div>

        {/* Mobile: lang toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase"
            style={{
              background: 'rgba(255,255,255,0.5)',
              border: '1px solid rgba(255,255,255,0.7)',
              color: '#1a1a1a',
            }}
          >
            {lang === 'en' ? 'ID' : 'EN'}
          </button>
          <button
            className="p-1.5 rounded-full transition-colors"
            style={{ background: 'rgba(255,255,255,0.35)' }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-4 right-4 rounded-2xl p-4 flex flex-col gap-1"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.70) 100%)',
              backdropFilter: 'blur(24px) saturate(180%)',
              WebkitBackdropFilter: 'blur(24px) saturate(180%)',
              border: '1px solid rgba(255,255,255,0.80)',
              boxShadow: '0 16px 48px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.95)',
            }}
          >
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-[#1a1a1a]/70 hover:text-[#1a1a1a] hover:bg-white/60 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/launch"
              className="px-4 py-2.5 rounded-xl text-sm font-medium text-green-600 hover:bg-green-50/60 transition-colors flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              {copy.launch}
            </Link>
            <div className="pt-2 border-t border-black/5">
              <Link
                to="/strategy"
                className="w-full text-center block text-xs font-semibold py-2.5 rounded-full transition-colors"
                style={{
                  background: 'linear-gradient(135deg, #2a2520 0%, #1a1a1a 100%)',
                  color: 'white',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
                }}
              >
                {copy.cta}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}