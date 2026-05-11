import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { Shield, ArrowLeft, Users, TrendingUp, DollarSign } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const perks = [
  { icon: Users, text: 'Track your full referral pipeline' },
  { icon: TrendingUp, text: 'Monitor lead status in real time' },
  { icon: DollarSign, text: 'View earnings & commission history' },
];

export default function PortalLogin() {
  const navigate = useNavigate();

  useEffect(() => {
    // Base44 redirects to /login?access_token=... after successful auth.
    // app-params.js stores the token in localStorage, but the base44 client
    // was already initialized without it. We must hard-reload so the client
    // reinitializes with the stored token.
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('access_token')) {
      window.location.replace('/portal');
    }
  }, []);

  const handleLogin = () => {
    base44.auth.redirectToLogin('/portal');
  };

  return (
    <div className="min-h-screen bg-[#F0EDE8] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 items-center">

        {/* Left: Branding */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:block"
        >
          <Link to="/" className="font-serif text-2xl font-bold text-[#1a1a1a] tracking-tight">Akar Systems</Link>
          <p className="text-[10px] font-bold uppercase tracking-widest text-green-600 mt-1 mb-10">Introductory Partner Portal</p>

          <h2 className="font-serif text-4xl text-[#1a1a1a] leading-tight mb-4">
            Your partnership,<br />
            <span className="text-green-700">all in one place.</span>
          </h2>
          <p className="text-sm text-[#1a1a1a]/50 leading-relaxed mb-10">
            Manage your referrals, track commissions, and access resources — exclusively for approved Akar Systems Introductory Partners.
          </p>

          <div className="space-y-3">
            {perks.map((perk, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-8 bg-green-600/10 border border-green-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <perk.icon className="w-3.5 h-3.5 text-green-600" />
                </div>
                <p className="text-sm text-[#1a1a1a]/65 font-medium">{perk.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Login Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="bg-white rounded-3xl border border-black/8 shadow-xl shadow-black/5 overflow-hidden">
            {/* Header */}
            <div className="bg-[#1a1a1a] px-8 py-8 text-center">
              <div className="w-12 h-12 bg-green-600/20 border border-green-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-5 h-5 text-green-400" />
              </div>
              <p className="font-serif text-xl text-white font-bold">Partner Sign In</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-green-400 mt-1">Approved Partners Only</p>
            </div>

            {/* Body */}
            <div className="px-8 py-8 text-center">
              <p className="text-sm text-[#1a1a1a]/45 leading-relaxed mb-8">
                Access is restricted to approved Introductory Partners. Sign in with your registered account to continue.
              </p>

              <button
                onClick={handleLogin}
                className="w-full bg-green-600 text-white font-semibold py-3.5 rounded-full text-sm hover:bg-green-700 transition-colors shadow-lg shadow-green-500/20 mb-6"
              >
                Sign In to Partner Portal
              </button>

              <div className="border-t border-black/6 pt-6 space-y-2">
                <p className="text-xs text-[#1a1a1a]/35">
                  Not a partner yet?{' '}
                  <Link to="/apply" className="text-green-600 hover:text-green-700 font-medium">
                    Apply to join →
                  </Link>
                </p>
                <p className="text-xs text-[#1a1a1a]/25">
                  Invitation sent after your application is approved.
                </p>
              </div>
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
    </div>
  );
}