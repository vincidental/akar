import { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Users, TrendingUp, DollarSign, Search, CheckCircle2, Mail, Phone } from 'lucide-react';

const INDUSTRY_LABELS = {
  marketing_agency: 'Marketing Agency', it_tech: 'IT / Tech',
  finance_accounting: 'Finance', education: 'Education',
  real_estate: 'Real Estate', retail_ecommerce: 'Retail / E-commerce',
  hospitality_fnb: 'Hospitality', consulting: 'Consulting',
  media_creative: 'Media / Creative', other: 'Other',
};

const NETWORK_SIZE_LABELS = { small: '<50', medium: '50–200', large: '200–500', massive: '500+' };

function PartnerCard({ partner, leads }) {
  const partnerLeads = leads.filter(l => l.partner_email === partner.email);
  const activeLeads = partnerLeads.filter(l => !['closed_won', 'closed_lost'].includes(l.status)).length;
  const closedWon = partnerLeads.filter(l => l.status === 'closed_won');
  const totalEarned = closedWon.reduce((sum, l) => sum + (l.commission_amount || 0), 0);

  return (
    <div className="bg-white rounded-2xl border border-black/7 p-5 hover:shadow-md transition-all duration-200">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-10 h-10 bg-green-50 border border-green-100 rounded-full flex items-center justify-center shrink-0 font-semibold text-green-700 text-sm">
          {partner.full_name?.[0]?.toUpperCase()}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-[#1a1a1a] text-sm">{partner.full_name}</p>
          <p className="text-xs text-[#1a1a1a]/45 truncate">{INDUSTRY_LABELS[partner.industry] || partner.industry}</p>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wide text-green-700 bg-green-50 border border-green-200 px-2 py-1 rounded-full shrink-0">
          {NETWORK_SIZE_LABELS[partner.network_size]}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { label: 'Total Leads', value: partnerLeads.length },
          { label: 'Active', value: activeLeads },
          { label: 'Won', value: closedWon.length },
        ].map((s, i) => (
          <div key={i} className="bg-[#F8F6F2] rounded-xl p-2.5 text-center">
            <p className="font-bold text-[#1a1a1a] text-base">{s.value}</p>
            <p className="text-[10px] text-[#1a1a1a]/40 font-medium">{s.label}</p>
          </div>
        ))}
      </div>

      {totalEarned > 0 && (
        <div className="flex items-center gap-2 bg-green-50 border border-green-100 rounded-xl px-3 py-2 mb-4">
          <DollarSign className="w-3.5 h-3.5 text-green-600 shrink-0" />
          <p className="text-xs font-semibold text-green-700">
            Rp {totalEarned.toLocaleString('id-ID')} earned
          </p>
        </div>
      )}

      <div className="space-y-1.5 border-t border-black/5 pt-3">
        <a href={`mailto:${partner.email}`} className="flex items-center gap-2 text-xs text-[#1a1a1a]/50 hover:text-[#1a1a1a]/80 transition-colors">
          <Mail className="w-3 h-3 shrink-0" />
          <span className="truncate">{partner.email}</span>
        </a>
        {partner.phone && (
          <a href={`https://wa.me/${partner.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-[#1a1a1a]/50 hover:text-[#1a1a1a]/80 transition-colors">
            <Phone className="w-3 h-3 shrink-0" />
            {partner.phone}
          </a>
        )}
      </div>
    </div>
  );
}

export default function AdminPartners() {
  const [search, setSearch] = useState('');

  const { data: applications = [], isLoading: loadingApps } = useQuery({
    queryKey: ['approved-partners'],
    queryFn: () => base44.entities.PartnerApplication.filter({ status: 'approved' }, '-created_date'),
  });

  const { data: leads = [], isLoading: loadingLeads } = useQuery({
    queryKey: ['all-leads'],
    queryFn: () => base44.entities.ReferralLead.list('-created_date'),
  });

  const filtered = applications.filter(p =>
    !search || p.full_name?.toLowerCase().includes(search.toLowerCase()) || p.email?.toLowerCase().includes(search.toLowerCase())
  );

  const totalLeads = leads.length;
  const totalEarned = leads.filter(l => l.status === 'closed_won').reduce((sum, l) => sum + (l.commission_amount || 0), 0);

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-1">Admin Panel</p>
        <h1 className="font-serif text-3xl text-[#1a1a1a]">Partners</h1>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        {[
          { icon: Users, label: 'Active Partners', value: applications.length, color: 'text-green-600' },
          { icon: TrendingUp, label: 'Total Leads Submitted', value: totalLeads, color: 'text-[#1a1a1a]' },
          { icon: DollarSign, label: 'Total Commissions Earned', value: totalEarned ? `Rp ${totalEarned.toLocaleString('id-ID')}` : '—', color: 'text-green-600' },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-2xl border border-black/7 p-4 flex items-center gap-3">
            <s.icon className={`w-5 h-5 ${s.color} shrink-0`} />
            <div>
              <p className="font-bold text-xl text-[#1a1a1a]">{s.value}</p>
              <p className="text-xs text-[#1a1a1a]/40 font-medium">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="relative mb-6 max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1a1a1a]/30" />
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search by name or email…"
          className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-black/10 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30"
        />
      </div>

      {/* Partner Grid */}
      {loadingApps || loadingLeads ? (
        <div className="flex justify-center py-20">
          <div className="w-7 h-7 border-4 border-slate-200 border-t-green-600 rounded-full animate-spin" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 text-[#1a1a1a]/30 text-sm">
          {applications.length === 0 ? 'No approved partners yet.' : 'No partners match your search.'}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((partner, i) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
            >
              <PartnerCard partner={partner} leads={leads} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}