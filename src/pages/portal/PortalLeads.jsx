import { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '@/lib/AuthContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PlusCircle, Clock, CheckCircle2, Phone, Mail, Briefcase, ChevronRight, XCircle, TrendingUp, Send, Trophy } from 'lucide-react';

const STATUS_CONFIG = {
  pending:       { label: 'Pending Review', color: 'bg-yellow-50 text-yellow-700 border-yellow-200', dot: 'bg-yellow-400' },
  approved:      { label: 'Approved', color: 'bg-blue-50 text-blue-700 border-blue-200', dot: 'bg-blue-400' },
  contacted:     { label: 'Contacted', color: 'bg-purple-50 text-purple-700 border-purple-200', dot: 'bg-purple-400' },
  proposal_sent: { label: 'Proposal Sent', color: 'bg-orange-50 text-orange-700 border-orange-200', dot: 'bg-orange-400' },
  closed_won:    { label: 'Closed — Won', color: 'bg-green-50 text-green-700 border-green-200', dot: 'bg-green-500' },
  closed_lost:   { label: 'Closed — Lost', color: 'bg-red-50 text-red-600 border-red-200', dot: 'bg-red-400' },
};

const SERVICE_LABELS = {
  landing_page:        'Landing Page',
  business_website:    'Business Website',
  website_local_boost: 'Website + Local Boost',
  custom:              'Custom Package',
  unknown:             'Not Sure Yet',
};

const STATUS_ICONS = {
  pending:       Clock,
  approved:      CheckCircle2,
  contacted:     Phone,
  proposal_sent: Send,
  closed_won:    Trophy,
  closed_lost:   XCircle,
};

function LeadCard({ lead }) {
  const cfg = STATUS_CONFIG[lead.status] || STATUS_CONFIG.pending;
  const Icon = STATUS_ICONS[lead.status] || Clock;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="bg-white rounded-2xl border border-black/7 p-5 hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <p className="font-semibold text-[#1a1a1a] text-sm">{lead.prospect_name}</p>
          <p className="text-xs text-[#1a1a1a]/50 flex items-center gap-1 mt-0.5">
            <Briefcase className="w-3 h-3" />
            {lead.prospect_business}
          </p>
        </div>
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${cfg.color}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
          {cfg.label}
        </span>
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        <span className="text-[11px] bg-[#F0EDE8] text-[#1a1a1a]/60 px-2.5 py-1 rounded-full font-medium">
          {SERVICE_LABELS[lead.service_interest]}
        </span>
        {lead.prospect_phone && (
          <a
            href={`https://wa.me/${lead.prospect_phone.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] bg-green-50 text-green-700 px-2.5 py-1 rounded-full font-medium flex items-center gap-1 hover:bg-green-100 transition-colors"
          >
            <Phone className="w-3 h-3" />
            {lead.prospect_phone}
          </a>
        )}
        {lead.prospect_email && (
          <span className="text-[11px] bg-[#F0EDE8] text-[#1a1a1a]/50 px-2.5 py-1 rounded-full font-medium flex items-center gap-1">
            <Mail className="w-3 h-3" />
            {lead.prospect_email}
          </span>
        )}
      </div>

      {lead.notes && (
        <p className="text-xs text-[#1a1a1a]/45 italic leading-relaxed border-t border-black/5 pt-3 mt-1">
          "{lead.notes}"
        </p>
      )}

      {lead.status === 'closed_won' && lead.commission_amount && (
        <div className="mt-3 pt-3 border-t border-black/5 flex items-center justify-between">
          <p className="text-xs text-green-700 font-semibold">
            Commission: Rp {lead.commission_amount.toLocaleString('id-ID')}
          </p>
          <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${lead.commission_paid ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
            {lead.commission_paid ? 'Paid' : 'Pending Payment'}
          </span>
        </div>
      )}

      <p className="text-[10px] text-[#1a1a1a]/25 mt-3">
        Registered {new Date(lead.created_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
      </p>
    </motion.div>
  );
}

export default function PortalLeads() {
  const { user } = useAuth();
  const [activeFilter, setActiveFilter] = useState('all');

  const { data: leads = [], isLoading } = useQuery({
    queryKey: ['referral-leads', user?.email],
    queryFn: () => base44.entities.ReferralLead.filter({ partner_email: user?.email }, '-created_date'),
    enabled: !!user?.email,
  });

  const filtered = activeFilter === 'all' ? leads : leads.filter(l => l.status === activeFilter);
  const counts = Object.fromEntries(
    Object.keys(STATUS_CONFIG).map(s => [s, leads.filter(l => l.status === s).length])
  );

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-1">Partner Portal</p>
          <h1 className="font-serif text-3xl text-[#1a1a1a]">My Leads</h1>
        </div>
        <Link
          to="/portal/leads/new"
          className="inline-flex items-center gap-2 bg-green-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-green-700 transition-colors shadow-sm shadow-green-500/20"
        >
          <PlusCircle className="w-4 h-4" />
          Register Lead
        </Link>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-6">
        {Object.entries(STATUS_CONFIG).map(([key, cfg]) => (
          <button
            key={key}
            onClick={() => setActiveFilter(activeFilter === key ? 'all' : key)}
            className={`rounded-xl border p-3 text-center transition-all duration-150 ${
              activeFilter === key ? 'ring-2 ring-green-500 ring-offset-1' : 'hover:shadow-sm'
            } ${cfg.color}`}
          >
            <p className="font-bold text-lg">{counts[key] || 0}</p>
            <p className="text-[10px] font-semibold leading-tight mt-0.5">{cfg.label}</p>
          </button>
        ))}
      </div>

      {/* Filter label */}
      {activeFilter !== 'all' && (
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-3.5 h-3.5 text-[#1a1a1a]/35" />
          <p className="text-xs text-[#1a1a1a]/45">Filtering by: <span className="font-semibold text-[#1a1a1a]/70">{STATUS_CONFIG[activeFilter].label}</span></p>
          <button onClick={() => setActiveFilter('all')} className="text-xs text-green-600 hover:underline ml-1">Clear</button>
        </div>
      )}

      {/* Leads List */}
      {isLoading ? (
        <div className="flex items-center justify-center py-20">
          <div className="w-7 h-7 border-4 border-slate-200 border-t-green-600 rounded-full animate-spin" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-[#1a1a1a]/30 text-sm mb-4">
            {activeFilter === 'all' ? "You haven't registered any leads yet." : `No leads with status "${STATUS_CONFIG[activeFilter].label}".`}
          </p>
          {activeFilter === 'all' && (
            <Link
              to="/portal/leads/new"
              className="inline-flex items-center gap-2 text-sm text-green-600 font-medium hover:underline"
            >
              <PlusCircle className="w-4 h-4" />
              Register your first lead
            </Link>
          )}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map(lead => <LeadCard key={lead.id} lead={lead} />)}
        </div>
      )}
    </div>
  );
}