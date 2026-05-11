import { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Users, Clock, CheckCircle2, XCircle, Hourglass, Search, ExternalLink } from 'lucide-react';

const STATUS_CONFIG = {
  pending:    { label: 'Pending',    color: 'bg-yellow-50 text-yellow-700 border-yellow-200',  dot: 'bg-yellow-400' },
  approved:   { label: 'Approved',   color: 'bg-green-50 text-green-700 border-green-200',    dot: 'bg-green-500'  },
  rejected:   { label: 'Rejected',   color: 'bg-red-50 text-red-600 border-red-200',          dot: 'bg-red-400'    },
  waitlisted: { label: 'Waitlisted', color: 'bg-purple-50 text-purple-700 border-purple-200', dot: 'bg-purple-400' },
};

const OCCUPATION_LABELS = {
  student: 'Student', employed: 'Employed', freelancer: 'Freelancer',
  business_owner: 'Business Owner', consultant: 'Consultant', other: 'Other',
};

const NETWORK_SIZE_LABELS = {
  small: '<50', medium: '50–200', large: '200–500', massive: '500+',
};

const MOTIVATION_LABELS = {
  earn_commission: 'Earn Commission', grow_my_network: 'Grow Network',
  add_value_to_contacts: 'Add Value', build_resume_experience: 'Build Resume',
  believe_in_akar: 'Believes in Akar', all_of_the_above: 'All of the Above',
};

function ApplicationDrawer({ app, onClose, onStatusChange }) {
  const [status, setStatus] = useState(app.status);
  const [notes, setNotes] = useState(app.admin_notes || '');
  const [saving, setSaving] = useState(false);

  const save = async () => {
    setSaving(true);
    await base44.entities.PartnerApplication.update(app.id, { status, admin_notes: notes });
    onStatusChange(app.id, status, notes);
    setSaving(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
      <motion.aside
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 28, stiffness: 260 }}
        className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col overflow-y-auto"
      >
        <div className="px-6 py-5 border-b border-black/8 flex items-center justify-between">
          <div>
            <p className="font-semibold text-[#1a1a1a]">{app.full_name}</p>
            <p className="text-xs text-[#1a1a1a]/45">{app.email}</p>
          </div>
          <button onClick={onClose} className="text-[#1a1a1a]/30 hover:text-[#1a1a1a]/70 transition-colors text-lg font-light">✕</button>
        </div>

        <div className="flex-1 px-6 py-5 space-y-5">
          {/* Profile */}
          <div className="bg-[#F8F6F2] rounded-xl p-4 space-y-2.5 text-sm">
            {[
              { label: 'Phone', val: app.phone },
              { label: 'Occupation', val: OCCUPATION_LABELS[app.occupation_type] },
              { label: 'Organisation', val: app.company_or_institution },
              { label: 'Role / Major', val: app.job_title_or_major },
              { label: 'Network Size', val: NETWORK_SIZE_LABELS[app.network_size] },
              { label: 'Motivation', val: MOTIVATION_LABELS[app.motivation] },
            ].filter(r => r.val).map(({ label, val }) => (
              <div key={label} className="flex justify-between gap-3">
                <p className="text-[#1a1a1a]/40 text-xs font-semibold uppercase tracking-wide shrink-0">{label}</p>
                <p className="text-[#1a1a1a]/80 text-right">{val}</p>
              </div>
            ))}
            {app.linkedin_url && (
              <a href={app.linkedin_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-green-700 hover:underline">
                <ExternalLink className="w-3 h-3" /> LinkedIn Profile
              </a>
            )}
          </div>

          {/* Network types */}
          {app.network_type?.length > 0 && (
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a]/35 mb-2">Network Types</p>
              <div className="flex flex-wrap gap-1.5">
                {app.network_type.map(t => (
                  <span key={t} className="text-[11px] bg-green-50 text-green-700 border border-green-200 px-2.5 py-1 rounded-full font-medium">
                    {t.replace(/_/g, ' ')}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Status */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a]/35 mb-2">Decision</p>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(STATUS_CONFIG).map(([key, cfg]) => (
                <button
                  key={key}
                  onClick={() => setStatus(key)}
                  className={`px-3 py-2.5 rounded-xl border text-xs font-semibold transition-all ${
                    status === key ? `${cfg.color} ring-2 ring-offset-1 ring-current` : 'bg-white border-black/8 text-[#1a1a1a]/50 hover:border-black/20'
                  }`}
                >
                  {cfg.label}
                </button>
              ))}
            </div>
          </div>

          {/* Admin notes */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a]/35 mb-2">Internal Notes</p>
            <textarea
              value={notes}
              onChange={e => setNotes(e.target.value)}
              placeholder="Add notes for the team…"
              className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/25 focus:outline-none focus:ring-2 focus:ring-green-500/30 resize-none h-24"
            />
          </div>
        </div>

        <div className="px-6 py-4 border-t border-black/8">
          <button
            onClick={save}
            disabled={saving}
            className="w-full py-3 bg-green-600 text-white font-semibold text-sm rounded-full hover:bg-green-700 disabled:opacity-60 transition-colors"
          >
            {saving ? 'Saving…' : 'Save Decision'}
          </button>
        </div>
      </motion.aside>
    </div>
  );
}

export default function AdminApplications() {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selected, setSelected] = useState(null);

  const { data: apps = [], isLoading } = useQuery({
    queryKey: ['partner-applications'],
    queryFn: () => base44.entities.PartnerApplication.list('-created_date'),
  });

  const filtered = apps.filter(a => {
    const matchStatus = statusFilter === 'all' || a.status === statusFilter;
    const matchSearch = !search || a.full_name?.toLowerCase().includes(search.toLowerCase()) || a.email?.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  const handleStatusChange = (id, status, admin_notes) => {
    queryClient.setQueryData(['partner-applications'], old =>
      old.map(a => a.id === id ? { ...a, status, admin_notes } : a)
    );
  };

  const counts = Object.fromEntries(Object.keys(STATUS_CONFIG).map(s => [s, apps.filter(a => a.status === s).length]));

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-1">Admin Panel</p>
        <h1 className="font-serif text-3xl text-[#1a1a1a]">Partner Applications</h1>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {[
          { label: 'Total', value: apps.length, icon: Users, color: 'text-[#1a1a1a]' },
          { label: 'Pending', value: counts.pending || 0, icon: Clock, color: 'text-yellow-600' },
          { label: 'Approved', value: counts.approved || 0, icon: CheckCircle2, color: 'text-green-600' },
          { label: 'Rejected', value: counts.rejected || 0, icon: XCircle, color: 'text-red-500' },
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

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-5">
        <div className="relative flex-1 min-w-48">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1a1a1a]/30" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by name or email…"
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-black/10 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {['all', ...Object.keys(STATUS_CONFIG)].map(s => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all ${
                statusFilter === s ? 'bg-[#1a1a1a] text-white' : 'bg-white border border-black/10 text-[#1a1a1a]/50 hover:border-black/20'
              }`}
            >
              {s === 'all' ? 'All' : STATUS_CONFIG[s].label}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      {isLoading ? (
        <div className="flex justify-center py-20">
          <div className="w-7 h-7 border-4 border-slate-200 border-t-green-600 rounded-full animate-spin" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 text-[#1a1a1a]/30 text-sm">No applications found.</div>
      ) : (
        <div className="space-y-2">
          {filtered.map((app, i) => {
            const cfg = STATUS_CONFIG[app.status] || STATUS_CONFIG.pending;
            return (
              <motion.button
                key={app.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                onClick={() => setSelected(app)}
                className="w-full bg-white rounded-2xl border border-black/7 p-4 hover:shadow-md transition-all duration-200 flex items-center gap-4 text-left"
              >
                <div className="w-10 h-10 bg-[#F0EDE8] rounded-full flex items-center justify-center shrink-0 font-semibold text-[#1a1a1a]/60 text-sm">
                  {app.full_name?.[0]?.toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[#1a1a1a] text-sm">{app.full_name}</p>
                  <p className="text-xs text-[#1a1a1a]/45 truncate">{app.email} · {OCCUPATION_LABELS[app.occupation_type]}</p>
                </div>
                <div className="hidden md:block text-xs text-[#1a1a1a]/35">
                  {new Date(app.created_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                </div>
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${cfg.color} shrink-0`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                  {cfg.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      )}

      {selected && (
        <ApplicationDrawer
          app={selected}
          onClose={() => setSelected(null)}
          onStatusChange={handleStatusChange}
        />
      )}
    </div>
  );
}