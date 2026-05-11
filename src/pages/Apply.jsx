import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

// ── Step config ──────────────────────────────────────────────────────────────

const STEPS = [
  { id: 'intro',      label: 'Welcome'    },
  { id: 'basics',     label: 'About You'  },
  { id: 'work',       label: 'Your Work'  },
  { id: 'network',    label: 'Your Reach' },
  { id: 'motivation', label: 'Your Why'   },
  { id: 'confirm',    label: 'Confirm'    },
];

const OCCUPATION_OPTIONS = [
  { value: 'student',        emoji: '🎓', label: 'Student' },
  { value: 'employed',       emoji: '💼', label: 'Employed' },
  { value: 'freelancer',     emoji: '🧑‍💻', label: 'Freelancer' },
  { value: 'business_owner', emoji: '🏢', label: 'Business Owner' },
  { value: 'consultant',     emoji: '🤝', label: 'Consultant' },
  { value: 'other',          emoji: '✨', label: 'Something Else' },
];

const INDUSTRY_OPTIONS = [
  { value: 'marketing_agency',    emoji: '📣', label: 'Marketing & Advertising' },
  { value: 'it_tech',             emoji: '💻', label: 'IT & Tech' },
  { value: 'finance_accounting',  emoji: '💰', label: 'Finance & Accounting' },
  { value: 'education',           emoji: '📚', label: 'Education' },
  { value: 'real_estate',         emoji: '🏠', label: 'Real Estate' },
  { value: 'retail_ecommerce',    emoji: '🛍️', label: 'Retail & E-Commerce' },
  { value: 'hospitality_fnb',     emoji: '🍽️', label: 'Hospitality & F&B' },
  { value: 'consulting',          emoji: '🎯', label: 'Consulting' },
  { value: 'media_creative',      emoji: '🎨', label: 'Media & Creative' },
  { value: 'other',               emoji: '🔮', label: 'Other' },
];

const NETWORK_SIZE_OPTIONS = [
  { value: 'small',   emoji: '🌱', label: 'Under 50',   note: 'Quality over quantity' },
  { value: 'medium',  emoji: '🌿', label: '50 – 200',   note: 'Growing network'       },
  { value: 'large',   emoji: '🌳', label: '200 – 500',  note: 'Well-connected'        },
  { value: 'massive', emoji: '🌲', label: '500+',        note: 'Power connector'       },
];

const NETWORK_TYPE_OPTIONS = [
  { value: 'local_businesses',     emoji: '🏪', label: 'Local Businesses'     },
  { value: 'startups',             emoji: '🚀', label: 'Startups & Tech'      },
  { value: 'campus_community',     emoji: '🎓', label: 'Campus Community'     },
  { value: 'online_community',     emoji: '🌐', label: 'Online Community'     },
  { value: 'corporate_contacts',   emoji: '🏢', label: 'Corporate Contacts'   },
  { value: 'social_media_following', emoji: '📱', label: 'Social Media Following' },
  { value: 'real_estate_clients',  emoji: '🏠', label: 'Real Estate Clients'  },
  { value: 'other',                emoji: '✨', label: 'Other'                },
];

const REFERRAL_OPTIONS = [
  { value: 'friend_referral',    emoji: '👋', label: 'A Friend Told Me'       },
  { value: 'social_media',       emoji: '📱', label: 'Social Media'           },
  { value: 'google_search',      emoji: '🔍', label: 'Google Search'          },
  { value: 'existing_client',    emoji: '🤝', label: "I'm an Akar Client"     },
  { value: 'event_or_seminar',   emoji: '🎤', label: 'Event or Seminar'       },
  { value: 'other',              emoji: '✨', label: 'Other'                  },
];

const MOTIVATION_OPTIONS = [
  { value: 'earn_commission',         emoji: '💸', label: 'Earn Commission'           },
  { value: 'grow_my_network',         emoji: '🌐', label: 'Grow My Network'           },
  { value: 'add_value_to_contacts',   emoji: '🎁', label: 'Add Value to My Contacts'  },
  { value: 'build_resume_experience', emoji: '📈', label: 'Build Resume / Experience' },
  { value: 'believe_in_akar',         emoji: '💚', label: 'I Believe in Akar Systems' },
  { value: 'all_of_the_above',        emoji: '🔥', label: 'All of the Above!'         },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

const slideVariants = {
  enter: { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
};

function OptionCard({ emoji, label, note, selected, onClick, multi }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl border text-left transition-all duration-150 w-full ${
        selected
          ? 'border-green-500 bg-green-50 shadow-sm ring-1 ring-green-400/40'
          : 'border-black/8 bg-white hover:border-black/20 hover:bg-[#F8F6F2]'
      }`}
    >
      <span className="text-xl shrink-0">{emoji}</span>
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-semibold ${selected ? 'text-green-700' : 'text-[#1a1a1a]'}`}>{label}</p>
        {note && <p className="text-[11px] text-[#1a1a1a]/40 mt-0.5">{note}</p>}
      </div>
      {selected && <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />}
    </button>
  );
}

function InputField({ label, hint, children }) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a]/40">{label}</label>
      {children}
      {hint && <p className="text-[11px] text-[#1a1a1a]/35">{hint}</p>}
    </div>
  );
}

const INPUT = "w-full px-4 py-3.5 rounded-xl border border-black/10 bg-white text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/25 focus:outline-none focus:ring-2 focus:ring-green-500/40 focus:border-green-400 transition-all";

// ── Main component ────────────────────────────────────────────────────────────

export default function Apply() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    occupation_type: '',
    company_or_institution: '',
    job_title_or_major: '',
    industry: '',
    network_size: '',
    network_type: [],
    referral_source: '',
    linkedin_url: '',
    motivation: '',
    agreed_to_terms: false,
  });

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }));

  const toggleNetworkType = (val) => {
    setForm(f => ({
      ...f,
      network_type: f.network_type.includes(val)
        ? f.network_type.filter(v => v !== val)
        : [...f.network_type, val],
    }));
  };

  const goNext = () => {
    setDirection(1);
    setStep(s => Math.min(s + 1, STEPS.length - 1));
  };

  const goBack = () => {
    setDirection(-1);
    setStep(s => Math.max(s - 1, 0));
  };

  const canProceed = () => {
    if (step === 0) return true;
    if (step === 1) return form.full_name && form.email && form.phone;
    if (step === 2) return form.occupation_type && form.company_or_institution && form.industry;
    if (step === 3) return form.network_size && form.network_type.length > 0;
    if (step === 4) return form.referral_source && form.motivation;
    if (step === 5) return form.agreed_to_terms;
    return true;
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    await base44.entities.PartnerApplication.create({ ...form, status: 'pending' });
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#F0EDE8] flex items-center justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-md w-full text-center"
        >
          <div className="w-20 h-20 bg-green-100 border-2 border-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-9 h-9 text-green-600" />
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-green-600 mb-2">Application Received</p>
          <h1 className="font-serif text-3xl text-[#1a1a1a] mb-4">You're in the queue.</h1>
          <p className="text-sm text-[#1a1a1a]/50 leading-relaxed mb-8">
            Thank you, <strong>{form.full_name.split(' ')[0]}</strong>. The Akar Systems team will review your application and reach out within <strong>2–3 business days</strong> via email.
          </p>
          <div className="bg-white rounded-2xl border border-black/7 p-5 mb-8 text-left space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a]/35 mb-3">What Happens Next</p>
            {['Our team reviews your application', 'If approved, you\'ll receive an invitation email', 'You gain access to the full Partner Portal', 'Start earning from your very first introduction'].map((s, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-green-100 border border-green-200 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[9px] font-bold text-green-700">{i + 1}</span>
                </div>
                <p className="text-sm text-[#1a1a1a]/60">{s}</p>
              </div>
            ))}
          </div>
          <Link to="/partners" className="inline-flex items-center gap-2 text-sm text-[#1a1a1a]/50 hover:text-[#1a1a1a] transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Partner Program
          </Link>
        </motion.div>
      </div>
    );
  }

  const progress = ((step) / (STEPS.length - 1)) * 100;

  return (
    <div className="min-h-screen bg-[#F0EDE8] flex flex-col">
      {/* Top bar */}
      <div className="sticky top-0 z-20 bg-[#F0EDE8]/80 backdrop-blur-md border-b border-black/6 px-6 py-4">
        <div className="max-w-xl mx-auto flex items-center justify-between gap-4">
          <Link to="/partners" className="text-xs text-[#1a1a1a]/40 hover:text-[#1a1a1a]/70 flex items-center gap-1.5 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            Back
          </Link>
          <div className="flex-1 bg-black/8 rounded-full h-1.5 overflow-hidden">
            <motion.div
              className="h-full bg-green-600 rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
          <p className="text-xs font-semibold text-[#1a1a1a]/40 shrink-0">
            {step + 1} / {STEPS.length}
          </p>
        </div>
      </div>

      {/* Step content */}
      <div className="flex-1 flex items-start justify-center px-6 py-10">
        <div className="max-w-xl w-full">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* ── Step 0: Intro ── */}
              {step === 0 && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-green-600 mb-3">Partner Application</p>
                  <h1 className="font-serif text-4xl text-[#1a1a1a] mb-4 leading-tight">
                    Let's see if we're<br />a great match.
                  </h1>
                  <p className="text-sm text-[#1a1a1a]/50 leading-relaxed max-w-sm mx-auto mb-8">
                    This takes about <strong>2 minutes</strong>. No essays, no stress — just a few quick questions so we can get to know you.
                  </p>
                  <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto mb-8">
                    {[
                      { val: '2 min', label: 'To complete' },
                      { val: '100%', label: 'Free to join' },
                      { val: '24h', label: 'Review time' },
                    ].map((s, i) => (
                      <div key={i} className="bg-white rounded-2xl border border-black/7 p-3 text-center">
                        <p className="font-serif text-xl font-bold text-green-600">{s.val}</p>
                        <p className="text-[10px] text-[#1a1a1a]/40 font-medium mt-0.5">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Step 1: Basics ── */}
              {step === 1 && (
                <div>
                  <h2 className="font-serif text-3xl text-[#1a1a1a] mb-2">Nice to meet you.</h2>
                  <p className="text-sm text-[#1a1a1a]/45 mb-8">Let's start with the basics.</p>
                  <div className="space-y-4">
                    <InputField label="Full Name *">
                      <input type="text" value={form.full_name} onChange={e => set('full_name', e.target.value)} placeholder="Your full name" className={INPUT} autoFocus />
                    </InputField>
                    <InputField label="Email Address *" hint="This will be used for your portal invite">
                      <input type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="you@example.com" className={INPUT} />
                    </InputField>
                    <InputField label="WhatsApp Number *">
                      <input type="tel" value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="e.g. 08123456789" className={INPUT} />
                    </InputField>
                  </div>
                </div>
              )}

              {/* ── Step 2: Work ── */}
              {step === 2 && (
                <div>
                  <h2 className="font-serif text-3xl text-[#1a1a1a] mb-2">What do you do?</h2>
                  <p className="text-sm text-[#1a1a1a]/45 mb-6">Pick the one that fits best.</p>
                  <div className="grid grid-cols-2 gap-2.5 mb-6">
                    {OCCUPATION_OPTIONS.map(opt => (
                      <OptionCard key={opt.value} {...opt} selected={form.occupation_type === opt.value} onClick={() => set('occupation_type', opt.value)} />
                    ))}
                  </div>
                  {form.occupation_type && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                      <InputField label={form.occupation_type === 'student' ? 'University / Institution *' : 'Company / Organization *'}>
                        <input type="text" value={form.company_or_institution} onChange={e => set('company_or_institution', e.target.value)} placeholder={form.occupation_type === 'student' ? 'e.g. Universitas Indonesia' : 'e.g. PT Maju Jaya'} className={INPUT} />
                      </InputField>
                      <InputField label={form.occupation_type === 'student' ? 'Field of Study / Major *' : 'Job Title / Role *'}>
                        <input type="text" value={form.job_title_or_major} onChange={e => set('job_title_or_major', e.target.value)} placeholder={form.occupation_type === 'student' ? 'e.g. Business Administration' : 'e.g. Sales Manager'} className={INPUT} />
                      </InputField>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a]/40 mb-3">Industry / Niche *</p>
                        <div className="grid grid-cols-2 gap-2">
                          {INDUSTRY_OPTIONS.map(opt => (
                            <OptionCard key={opt.value} {...opt} selected={form.industry === opt.value} onClick={() => set('industry', opt.value)} />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              )}

              {/* ── Step 3: Network ── */}
              {step === 3 && (
                <div>
                  <h2 className="font-serif text-3xl text-[#1a1a1a] mb-2">Tell us about your network.</h2>
                  <p className="text-sm text-[#1a1a1a]/45 mb-6">This is what makes you valuable as a partner.</p>
                  <div className="mb-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a]/40 mb-3">How large is your professional network? *</p>
                    <div className="grid grid-cols-2 gap-2.5">
                      {NETWORK_SIZE_OPTIONS.map(opt => (
                        <OptionCard key={opt.value} {...opt} selected={form.network_size === opt.value} onClick={() => set('network_size', opt.value)} />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a]/40 mb-1">Who's in your network? *</p>
                    <p className="text-[11px] text-[#1a1a1a]/35 mb-3">Select all that apply</p>
                    <div className="grid grid-cols-2 gap-2.5">
                      {NETWORK_TYPE_OPTIONS.map(opt => (
                        <OptionCard key={opt.value} {...opt} multi selected={form.network_type.includes(opt.value)} onClick={() => toggleNetworkType(opt.value)} />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ── Step 4: Motivation ── */}
              {step === 4 && (
                <div>
                  <h2 className="font-serif text-3xl text-[#1a1a1a] mb-2">Almost there!</h2>
                  <p className="text-sm text-[#1a1a1a]/45 mb-6">Just two more quick questions.</p>
                  <div className="mb-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a]/40 mb-3">How did you hear about us? *</p>
                    <div className="grid grid-cols-2 gap-2.5">
                      {REFERRAL_OPTIONS.map(opt => (
                        <OptionCard key={opt.value} {...opt} selected={form.referral_source === opt.value} onClick={() => set('referral_source', opt.value)} />
                      ))}
                    </div>
                  </div>
                  <div className="mb-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a]/40 mb-3">Why do you want to join? *</p>
                    <div className="grid grid-cols-2 gap-2.5">
                      {MOTIVATION_OPTIONS.map(opt => (
                        <OptionCard key={opt.value} {...opt} selected={form.motivation === opt.value} onClick={() => set('motivation', opt.value)} />
                      ))}
                    </div>
                  </div>
                  <InputField label="LinkedIn URL" hint="Optional — helps us verify your profile">
                    <input type="url" value={form.linkedin_url} onChange={e => set('linkedin_url', e.target.value)} placeholder="https://linkedin.com/in/yourname" className={INPUT} />
                  </InputField>
                </div>
              )}

              {/* ── Step 5: Confirm ── */}
              {step === 5 && (
                <div>
                  <h2 className="font-serif text-3xl text-[#1a1a1a] mb-2">Ready to submit?</h2>
                  <p className="text-sm text-[#1a1a1a]/45 mb-6">Review your details and confirm.</p>
                  <div className="bg-white rounded-2xl border border-black/7 p-5 mb-5 space-y-3 text-sm">
                    {[
                      { label: 'Name', val: form.full_name },
                      { label: 'Email', val: form.email },
                      { label: 'Phone', val: form.phone },
                      { label: 'Occupation', val: OCCUPATION_OPTIONS.find(o => o.value === form.occupation_type)?.label },
                      { label: 'Organisation', val: form.company_or_institution },
                      { label: 'Industry', val: INDUSTRY_OPTIONS.find(o => o.value === form.industry)?.label },
                      { label: 'Network Size', val: NETWORK_SIZE_OPTIONS.find(o => o.value === form.network_size)?.label },
                      { label: 'Why Join', val: MOTIVATION_OPTIONS.find(o => o.value === form.motivation)?.label },
                    ].map(({ label, val }) => val ? (
                      <div key={label} className="flex items-start justify-between gap-3">
                        <p className="text-[#1a1a1a]/35 text-xs font-semibold uppercase tracking-wide shrink-0">{label}</p>
                        <p className="text-[#1a1a1a]/80 text-right text-sm">{val}</p>
                      </div>
                    ) : null)}
                  </div>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div
                      onClick={() => set('agreed_to_terms', !form.agreed_to_terms)}
                      className={`mt-0.5 w-5 h-5 rounded border flex items-center justify-center shrink-0 transition-all ${
                        form.agreed_to_terms ? 'bg-green-600 border-green-600' : 'bg-white border-black/20 group-hover:border-black/40'
                      }`}
                    >
                      {form.agreed_to_terms && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                    </div>
                    <p className="text-sm text-[#1a1a1a]/60 leading-relaxed" onClick={() => set('agreed_to_terms', !form.agreed_to_terms)}>
                      I confirm that my information is accurate and I agree to the Akar Systems{' '}
                      <span className="text-green-700 underline underline-offset-2">Partner Program Terms & Conditions</span>.
                    </p>
                  </label>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 gap-4">
            {step > 0 ? (
              <button onClick={goBack} className="flex items-center gap-2 text-sm text-[#1a1a1a]/40 hover:text-[#1a1a1a]/70 transition-colors px-4 py-2.5 rounded-full hover:bg-black/5">
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            ) : <div />}

            {step < STEPS.length - 1 ? (
              <button
                onClick={goNext}
                disabled={!canProceed()}
                className="flex items-center gap-2 bg-green-600 text-white font-semibold px-8 py-3 rounded-full text-sm hover:bg-green-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md shadow-green-500/20"
              >
                {step === 0 ? "Let's Go" : 'Continue'}
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canProceed() || submitting}
                className="flex items-center gap-2 bg-green-600 text-white font-semibold px-8 py-3 rounded-full text-sm hover:bg-green-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md shadow-green-500/20"
              >
                {submitting ? 'Submitting…' : 'Submit Application'}
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}