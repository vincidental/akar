import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Infrastructure', to: '/infrastructure' },
  { label: 'Philosophy', to: '/philosophy' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`w-full max-w-4xl bg-white/95 backdrop-blur-md rounded-full border border-black/10 px-5 py-2.5 flex items-center justify-between transition-shadow duration-300 ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-6 h-6 bg-[#1a1a1a] rounded-sm flex items-center justify-center">
            <span className="text-white text-[9px] font-bold tracking-tight">AS</span>
          </div>
          <span className="font-semibold text-[#1a1a1a] text-sm tracking-tight">Akar Systems</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.to
                  ? 'bg-[#1a1a1a]/8 text-[#1a1a1a]'
                  : 'text-[#1a1a1a]/60 hover:text-[#1a1a1a] hover:bg-[#1a1a1a]/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="w-px h-4 bg-black/10 mx-1" />
          <Link
            to="/audit"
            className={`px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 transition-colors duration-200 ${
              location.pathname === '/audit'
                ? 'text-green-600'
                : 'text-[#1a1a1a]/60 hover:text-[#1a1a1a]'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
            Free Audit
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/audit" className="btn-black text-xs px-4 py-2">
            Book a Strategy Call
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1.5 rounded-full hover:bg-black/5 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-4 right-4 bg-white rounded-2xl border border-black/10 shadow-xl p-4 flex flex-col gap-1"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-[#1a1a1a]/70 hover:text-[#1a1a1a] hover:bg-black/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/audit"
              className="px-4 py-2.5 rounded-xl text-sm font-medium text-green-600 hover:bg-green-50 transition-colors flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Free Audit
            </Link>
            <div className="pt-2 border-t border-black/5">
              <Link to="/audit" className="btn-black w-full text-center block text-xs">
                Book a Strategy Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}