import { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useAuth } from '@/lib/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICE_OPTIONS = [
  { value: 'landing_page',        label: 'Landing Page', note: 'Rp 1.490.000' },
  { value: 'business_website',    label: 'Business Website', note: 'Rp 2.790.000' },
  { value: 'website_local_boost', label: 'Website + Local Boost', note: 'Rp 4.990.000' },
  { value: 'custom',              label: 'Custom Package', note: 'Negotiated' },
  { value: 'unknown',             label: "I'm not sure yet", note: '' },
];

const FIELD = ({ label, required, children, hint }) => (
  <div>
    <label className="block text-xs font-semibold text-[#1a1a1a]/60 uppercase tracking-widest mb-1.5">
      {label} {required && <span className="text-red-400">*</span>}
    </label>
    {children}
    {hint && <p className="text-[11px] text-[#1a1a1a]/35 mt-1">{hint}</p>}
  </div>
);

const INPUT_CLS = "w-full px-4 py-3 rounded-xl border border-black/10 bg-white text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 focus:outline-none focus:ring-2 focus:ring-green-500/40 focus:border-green-500/50 transition-all";

export default function PortalLeadForm() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    prospect_name: '',
    prospect_business: '',
    prospect_phone: '',
    prospect_email: '',
    service_interest: 'unknown',
    notes: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.prospect_name || !form.prospect_business || !form.prospect_phone) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setSubmitting(true);

    await base44.entities.ReferralLead.create({
      ...form,
      partner_email: user.email,
      partner_name: user.full_name,
      status: 'pending',
    });

    setSubmitting(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="p-6 md:p-10 max-w-lg mx-auto flex flex-col items-center justify-center min-h-[60vh] text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-16 h-16 bg-green-100 border border-green-200 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 className="w-7 h-7 text-green-600" />
          </div>
          <h2 className="font-serif text-2xl text-[#1a1a1a] mb-2">Lead Registered!</h2>
          <p className="text-sm text-[#1a1a1a]/50 leading-relaxed mb-8">
            Your lead has been submitted and is pending review by the Akar Systems team. You'll see updates in your pipeline as we progress.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => { setSuccess(false); setForm({ prospect_name: '', prospect_business: '', prospect_phone: '', prospect_email: '', service_interest: 'unknown', notes: '' }); }}
              className="px-6 py-2.5 rounded-full border border-black/15 text-sm font-medium text-[#1a1a1a] hover:bg-black/5 transition-colors"
            >
              Register Another
            </button>
            <Link
              to="/portal/leads"
              className="px-6 py-2.5 rounded-full bg-green-600 text-white text-sm font-semibold hover:bg-green-700 transition-colors"
            >
              View My Pipeline →
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link to="/portal/leads" className="inline-flex items-center gap-1.5 text-xs text-[#1a1a1a]/40 hover:text-[#1a1a1a]/70 transition-colors mb-4">
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to My Leads
        </Link>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-1">Partner Portal</p>
        <h1 className="font-serif text-3xl text-[#1a1a1a] mb-2">Register a Lead</h1>
        <p className="text-sm text-[#1a1a1a]/45 leading-relaxed">
          Fill in the details below to claim your lead. Once submitted, the Akar Systems team will review and reach out within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Prospect Info */}
        <div className="bg-white rounded-2xl border border-black/7 p-6 space-y-5">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a]/35">Prospect Information</p>

          <FIELD label="Contact Name" required>
            <input
              type="text"
              value={form.prospect_name}
              onChange={e => set('prospect_name', e.target.value)}
              placeholder="e.g. Budi Santoso"
              className={INPUT_CLS}
            />
          </FIELD>

          <FIELD label="Business / Company Name" required hint="The business this lead represents">
            <input
              type="text"
              value={form.prospect_business}
              onChange={e => set('prospect_business', e.target.value)}
              placeholder="e.g. Toko Maju Jaya"
              className={INPUT_CLS}
            />
          </FIELD>

          <div className="grid sm:grid-cols-2 gap-5">
            <FIELD label="WhatsApp / Phone" required>
              <input
                type="text"
                value={form.prospect_phone}
                onChange={e => set('prospect_phone', e.target.value)}
                placeholder="e.g. 08123456789"
                className={INPUT_CLS}
              />
            </FIELD>
            <FIELD label="Email" hint="Optional but helps us prepare">
              <input
                type="email"
                value={form.prospect_email}
                onChange={e => set('prospect_email', e.target.value)}
                placeholder="e.g. budi@example.com"
                className={INPUT_CLS}
              />
            </FIELD>
          </div>
        </div>

        {/* Service Interest */}
        <div className="bg-white rounded-2xl border border-black/7 p-6 space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a]/35">Service Interest</p>
          <div className="grid sm:grid-cols-2 gap-2.5">
            {SERVICE_OPTIONS.map(opt => (
              <button
                key={opt.value}
                type="button"
                onClick={() => set('service_interest', opt.value)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-medium text-left transition-all duration-150 ${
                  form.service_interest === opt.value
                    ? 'border-green-500 bg-green-50 text-green-700 shadow-sm'
                    : 'border-black/8 bg-white text-[#1a1a1a]/60 hover:border-black/15 hover:text-[#1a1a1a]'
                }`}
              >
                <span>{opt.label}</span>
                {opt.note && <span className="text-[11px] font-semibold opacity-60 ml-2">{opt.note}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div className="bg-white rounded-2xl border border-black/7 p-6">
          <FIELD label="Your Notes" hint="Any context that helps us close this lead (how you know them, what they need, timing, etc.)">
            <textarea
              value={form.notes}
              onChange={e => set('notes', e.target.value)}
              placeholder="e.g. Runs a clothing store, currently using Instagram only, mentioned wanting a website last week..."
              className={`${INPUT_CLS} h-28 resize-none`}
            />
          </FIELD>
        </div>

        {error && (
          <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
            <AlertCircle className="w-4 h-4 shrink-0" />
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full py-4 rounded-full bg-green-600 text-white font-semibold text-sm hover:bg-green-700 disabled:opacity-60 transition-colors shadow-md shadow-green-500/20"
        >
          {submitting ? 'Submitting…' : 'Register This Lead →'}
        </button>

        <p className="text-center text-xs text-[#1a1a1a]/30 leading-relaxed">
          By registering, you confirm you are in an active conversation with this prospect and have their consent to be contacted by Akar Systems.
        </p>
      </form>
    </div>
  );
}