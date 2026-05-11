import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PortalLogin() {
  const handleLogin = () => {
    base44.auth.redirectToLogin('/portal');
  };

  return (
    <div className="min-h-screen bg-[#F0EDE8] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-sm"
      >
        {/* Card */}
        <div className="bg-white rounded-3xl border border-black/8 shadow-xl shadow-black/5 overflow-hidden">
          {/* Header */}
          <div className="bg-[#1a1a1a] px-8 py-8 text-center">
            <div className="w-12 h-12 bg-green-600/20 border border-green-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-5 h-5 text-green-400" />
            </div>
            <p className="font-serif text-xl text-white font-bold">Akar Systems</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-green-400 mt-1">Partner Portal</p>
          </div>

          {/* Body */}
          <div className="px-8 py-8 text-center">
            <h1 className="font-serif text-2xl text-[#1a1a1a] mb-2">Partner Sign In</h1>
            <p className="text-sm text-[#1a1a1a]/45 leading-relaxed mb-8">
              Access is restricted to approved Introductory Partners. Sign in with your registered account to continue.
            </p>

            <button
              onClick={handleLogin}
              className="w-full bg-green-600 text-white font-semibold py-3.5 rounded-full text-sm hover:bg-green-700 transition-colors shadow-lg shadow-green-500/20 mb-4"
            >
              Sign In to Partner Portal
            </button>

            <p className="text-xs text-[#1a1a1a]/35 leading-relaxed">
              Not a partner yet?{' '}
              <Link to="/partners" className="text-green-600 hover:text-green-700 font-medium">
                Apply to join →
              </Link>
            </p>
          </div>
        </div>

        {/* Back to site */}
        <div className="text-center mt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs text-[#1a1a1a]/35 hover:text-[#1a1a1a]/60 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Akar Systems
          </Link>
        </div>
      </motion.div>
    </div>
  );
}