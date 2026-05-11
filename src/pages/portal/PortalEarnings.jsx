import { useAuth } from '@/lib/AuthContext';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { DollarSign, CheckCircle2, Clock, TrendingUp, Trophy } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] },
});

const SERVICE_LABELS = {
  landing_page:        'Landing Page',
  business_website:    'Business Website',
  website_local_boost: 'Website + Local Boost',
  custom:              'Custom Package',
  unknown:             'Not Sure Yet',
};

function EarningsRow({ lead }) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-black/5 last:border-0 gap-3">
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm text-[#1a1a1a] truncate">{lead.prospect_business}</p>
        <p className="text-xs text-[#1a1a1a]/45 mt-0.5">{SERVICE_LABELS[lead.service_interest]}</p>
      </div>
      <div className="text-right shrink-0">
        <p className="font-bold text-sm text-green-700">
          Rp {(lead.commission_amount || 0).toLocaleString('id-ID')}
        </p>
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
          lead.commission_paid
            ? 'bg-green-100 text-green-700'
            : 'bg-yellow-100 text-yellow-700'
        }`}>
          {lead.commission_paid ? 'Paid' : 'Pending'}
        </span>
      </div>
    </div>
  );
}

export default function PortalEarnings() {
  const { user } = useAuth();

  const { data: leads = [], isLoading } = useQuery({
    queryKey: ['referral-leads', user?.email],
    queryFn: () => base44.entities.ReferralLead.filter({ partner_email: user?.email }, '-created_date'),
    enabled: !!user?.email,
  });

  const wonLeads = leads.filter(l => l.status === 'closed_won');
  const totalEarned = wonLeads.reduce((sum, l) => sum + (l.commission_amount || 0), 0);
  const totalPaid = wonLeads.filter(l => l.commission_paid).reduce((sum, l) => sum + (l.commission_amount || 0), 0);
  const totalPending = totalEarned - totalPaid;
  const paidLeads = wonLeads.filter(l => l.commission_paid);
  const unpaidLeads = wonLeads.filter(l => !l.commission_paid);

  const stats = [
    { icon: DollarSign, label: 'Total Earned', value: totalEarned ? `Rp ${totalEarned.toLocaleString('id-ID')}` : '—', color: 'text-green-600' },
    { icon: CheckCircle2, label: 'Paid Out', value: totalPaid ? `Rp ${totalPaid.toLocaleString('id-ID')}` : '—', color: 'text-blue-600' },
    { icon: Clock, label: 'Pending Payout', value: totalPending ? `Rp ${totalPending.toLocaleString('id-ID')}` : '—', color: 'text-yellow-600' },
    { icon: Trophy, label: 'Closed Deals', value: wonLeads.length || '0', color: 'text-purple-600' },
  ];

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto">
      {/* Header */}
      <motion.div {...fadeUp(0)} className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-1">Partner Portal</p>
        <h1 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">My Earnings</h1>
        <p className="text-sm text-[#1a1a1a]/45 mt-2">Track your commissions and payout history.</p>
      </motion.div>

      {/* Stats */}
      <motion.div {...fadeUp(0.06)} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {stats.map((s, i) => (
          <div key={i} className="bg-white rounded-2xl border border-black/7 p-5 flex flex-col gap-2">
            <s.icon className={`w-4 h-4 ${s.color}`} />
            <p className={`font-serif text-xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-xs text-[#1a1a1a]/40 font-medium">{s.label}</p>
          </div>
        ))}
      </motion.div>

      {isLoading ? (
        <div className="flex items-center justify-center py-20">
          <div className="w-7 h-7 border-4 border-slate-200 border-t-green-600 rounded-full animate-spin" />
        </div>
      ) : wonLeads.length === 0 ? (
        <motion.div {...fadeUp(0.1)} className="text-center py-20">
          <TrendingUp className="w-10 h-10 text-[#1a1a1a]/15 mx-auto mb-3" />
          <p className="text-sm text-[#1a1a1a]/35">No closed deals yet. Keep registering leads to start earning.</p>
        </motion.div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {/* Pending Payout */}
          {unpaidLeads.length > 0 && (
            <motion.div {...fadeUp(0.1)} className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-yellow-600" />
                <p className="text-xs font-bold uppercase tracking-widest text-yellow-700">Pending Payout</p>
              </div>
              {unpaidLeads.map(lead => <EarningsRow key={lead.id} lead={lead} />)}
            </motion.div>
          )}

          {/* Paid Out */}
          {paidLeads.length > 0 && (
            <motion.div {...fadeUp(0.14)} className="bg-white border border-black/7 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <p className="text-xs font-bold uppercase tracking-widest text-green-700">Paid Out</p>
              </div>
              {paidLeads.map(lead => <EarningsRow key={lead.id} lead={lead} />)}
            </motion.div>
          )}
        </div>
      )}

      {/* Payout note */}
      <motion.div {...fadeUp(0.18)} className="mt-8 bg-[#F0EDE8] rounded-2xl border border-black/7 p-5">
        <p className="text-xs text-[#1a1a1a]/45 leading-relaxed">
          <span className="font-semibold text-[#1a1a1a]/70">How payouts work:</span> Commissions are logged once a deal is marked as Closed-Won by the Akar Systems team. Payouts are processed within 7 business days of deal confirmation. For any payout questions, contact your account manager directly.
        </p>
      </motion.div>
    </div>
  );
}