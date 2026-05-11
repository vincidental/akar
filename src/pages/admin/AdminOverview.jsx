import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, TrendingUp, DollarSign, Trophy, ArrowRight } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function AdminOverview() {
  const { data: leads = [], isLoading } = useQuery({
    queryKey: ['admin-leads'],
    queryFn: () => base44.entities.ReferralLead.list('-created_date', 200),
  });

  const wonLeads = leads.filter(l => l.status === 'closed_won');
  const pendingLeads = leads.filter(l => l.status === 'pending');
  const activeLeads = leads.filter(l => !['closed_won', 'closed_lost'].includes(l.status));
  const totalDealValue = wonLeads.reduce((s, l) => s + (l.deal_value || 0), 0);
  const totalCommissions = wonLeads.reduce((s, l) => s + (l.commission_amount || 0), 0);
  const unpaidCommissions = wonLeads.filter(l => !l.commission_paid).reduce((s, l) => s + (l.commission_amount || 0), 0);

  const stats = [
    { icon: Users, label: 'Total Leads', value: leads.length, color: 'text-blue-600' },
    { icon: TrendingUp, label: 'Active Pipeline', value: activeLeads.length, color: 'text-purple-600' },
    { icon: Trophy, label: 'Closed Won', value: wonLeads.length, color: 'text-green-600' },
    { icon: DollarSign, label: 'Total Revenue', value: totalDealValue ? `Rp ${totalDealValue.toLocaleString('id-ID')}` : '—', color: 'text-green-700' },
    { icon: DollarSign, label: 'Total Commissions', value: totalCommissions ? `Rp ${totalCommissions.toLocaleString('id-ID')}` : '—', color: 'text-orange-600' },
    { icon: DollarSign, label: 'Unpaid Commissions', value: unpaidCommissions ? `Rp ${unpaidCommissions.toLocaleString('id-ID')}` : '—', color: 'text-red-500' },
  ];

  return (
    <div className="p-6 md:p-8 max-w-5xl mx-auto">
      <motion.div {...fadeUp(0)} className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-1">Admin Panel</p>
        <h1 className="font-serif text-3xl text-[#1a1a1a]">Overview</h1>
      </motion.div>

      <motion.div {...fadeUp(0.06)} className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {stats.map((s, i) => (
          <div key={i} className="bg-white rounded-2xl border border-black/7 p-5 flex flex-col gap-2">
            <s.icon className={`w-4 h-4 ${s.color}`} />
            <p className={`font-serif text-2xl font-bold ${s.color}`}>{isLoading ? '—' : s.value}</p>
            <p className="text-xs text-[#1a1a1a]/40 font-medium">{s.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Pending review alert */}
      {pendingLeads.length > 0 && (
        <motion.div {...fadeUp(0.1)} className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5 flex items-center justify-between gap-4 mb-6">
          <div>
            <p className="font-semibold text-yellow-800 text-sm">{pendingLeads.length} lead{pendingLeads.length > 1 ? 's' : ''} awaiting review</p>
            <p className="text-xs text-yellow-700/70 mt-0.5">These leads have been submitted by partners and need approval.</p>
          </div>
          <Link to="/admin/leads" className="inline-flex items-center gap-1.5 text-xs font-semibold text-yellow-800 hover:underline shrink-0">
            Review Now <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      )}

      {/* Recent leads */}
      <motion.div {...fadeUp(0.12)}>
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a]/35">Recent Leads</p>
          <Link to="/admin/leads" className="text-xs text-[#1a1a1a]/45 hover:text-[#1a1a1a] transition-colors">View all →</Link>
        </div>
        <div className="bg-white rounded-2xl border border-black/7 overflow-hidden">
          {leads.slice(0, 8).map((lead, i) => (
            <div key={lead.id} className={`flex items-center justify-between px-5 py-3.5 gap-3 ${i < 7 ? 'border-b border-black/5' : ''}`}>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-[#1a1a1a] truncate">{lead.prospect_business}</p>
                <p className="text-xs text-[#1a1a1a]/40 truncate">{lead.partner_name}</p>
              </div>
              <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border shrink-0 ${
                { pending: 'bg-yellow-50 text-yellow-700 border-yellow-200', approved: 'bg-blue-50 text-blue-700 border-blue-200', contacted: 'bg-purple-50 text-purple-700 border-purple-200', proposal_sent: 'bg-orange-50 text-orange-700 border-orange-200', closed_won: 'bg-green-50 text-green-700 border-green-200', closed_lost: 'bg-red-50 text-red-600 border-red-200' }[lead.status]
              }`}>
                {lead.status.replace('_', ' ')}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}