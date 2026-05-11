import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { Search, ChevronDown, CheckCircle2, Save, Send, X } from 'lucide-react';

const STATUS_OPTIONS = [
  { value: 'pending', label: 'Pending Review' },
  { value: 'approved', label: 'Approved' },
  { value: 'contacted', label: 'Contacted' },
  { value: 'proposal_sent', label: 'Proposal Sent' },
  { value: 'closed_won', label: 'Closed — Won' },
  { value: 'closed_lost', label: 'Closed — Lost' },
];

const STATUS_COLORS = {
  pending:       'bg-yellow-50 text-yellow-700 border-yellow-200',
  approved:      'bg-blue-50 text-blue-700 border-blue-200',
  contacted:     'bg-purple-50 text-purple-700 border-purple-200',
  proposal_sent: 'bg-orange-50 text-orange-700 border-orange-200',
  closed_won:    'bg-green-50 text-green-700 border-green-200',
  closed_lost:   'bg-red-50 text-red-600 border-red-200',
};

const SERVICE_LABELS = {
  landing_page:        'Landing Page',
  business_website:    'Business Website',
  website_local_boost: 'Website + Local Boost',
  custom:              'Custom',
  unknown:             'Unknown',
};

function LeadEditDrawer({ lead, onClose, onSaved }) {
  const [form, setForm] = useState({
    status: lead.status,
    deal_value: lead.deal_value || '',
    commission_amount: lead.commission_amount || '',
    commission_paid: lead.commission_paid || false,
    admin_notes: lead.admin_notes || '',
  });
  const [saving, setSaving] = useState(false);
  const [notifying, setNotifying] = useState(false);
  const [notified, setNotified] = useState(false);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSave = async () => {
    setSaving(true);
    await base44.entities.ReferralLead.update(lead.id, {
      status: form.status,
      deal_value: form.deal_value ? Number(form.deal_value) : undefined,
      commission_amount: form.commission_amount ? Number(form.commission_amount) : undefined,
      commission_paid: form.commission_paid,
      admin_notes: form.admin_notes,
    });
    setSaving(false);
    onSaved();
  };

  const handleNotify = async () => {
    setNotifying(true);
    await base44.functions.invoke('notifyPartnerLeadUpdate', { lead_id: lead.id });
    setNotifying(false);
    setNotified(true);
    setTimeout(() => setNotified(false), 3000);
  };

  const INPUT = "w-full px-4 py-2.5 rounded-xl border border-black/10 bg-white text-sm text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/20 transition-all";
  const LABEL = "block text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/40 mb-1.5";

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-md bg-white h-full overflow-y-auto shadow-2xl flex flex-col"
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-black/8 flex items-start justify-between gap-3 sticky top-0 bg-white z-10">
          <div>
            <p className="font-semibold text-[#1a1a1a]">{lead.prospect_business}</p>
            <p className="text-xs text-[#1a1a1a]/45 mt-0.5">{lead.prospect_name} · {lead.partner_name}</p>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-black/5 shrink-0">
            <X className="w-4 h-4 text-[#1a1a1a]/40" />
          </button>
        </div>

        {/* Form */}
        <div className="px-6 py-6 flex-1 space-y-5">
          {/* Prospect info */}
          <div className="bg-[#F8F6F2] rounded-xl p-4 space-y-1.5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/35 mb-2">Prospect Info</p>
            <p className="text-sm text-[#1a1a1a]/70"><span className="font-medium">Phone:</span> {lead.prospect_phone || '—'}</p>
            <p className="text-sm text-[#1a1a1a]/70"><span className="font-medium">Email:</span> {lead.prospect_email || '—'}</p>
            <p className="text-sm text-[#1a1a1a]/70"><span className="font-medium">Service:</span> {SERVICE_LABELS[lead.service_interest]}</p>
            {lead.notes && <p className="text-xs text-[#1a1a1a]/45 italic mt-1">"{lead.notes}"</p>}
          </div>

          {/* Status */}
          <div>
            <label className={LABEL}>Pipeline Status</label>
            <div className="relative">
              <select
                value={form.status}
                onChange={e => set('status', e.target.value)}
                className={`${INPUT} appearance-none pr-8`}
              >
                {STATUS_OPTIONS.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-[#1a1a1a]/40 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Deal value + Commission */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={LABEL}>Deal Value (Rp)</label>
              <input type="number" value={form.deal_value} onChange={e => set('deal_value', e.target.value)} placeholder="e.g. 2790000" className={INPUT} />
            </div>
            <div>
              <label className={LABEL}>Commission (Rp)</label>
              <input type="number" value={form.commission_amount} onChange={e => set('commission_amount', e.target.value)} placeholder="e.g. 300000" className={INPUT} />
            </div>
          </div>

          {/* Commission paid */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => set('commission_paid', !form.commission_paid)}
              className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                form.commission_paid ? 'bg-green-600 border-green-600' : 'bg-white border-black/20'
              }`}
            >
              {form.commission_paid && <CheckCircle2 className="w-3 h-3 text-white" />}
            </button>
            <label className="text-sm text-[#1a1a1a]/70 cursor-pointer" onClick={() => set('commission_paid', !form.commission_paid)}>
              Commission has been paid out
            </label>
          </div>

          {/* Admin notes */}
          <div>
            <label className={LABEL}>Internal Notes</label>
            <textarea
              value={form.admin_notes}
              onChange={e => set('admin_notes', e.target.value)}
              placeholder="Notes for the team or for the partner notification..."
              className={`${INPUT} h-24 resize-none`}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="px-6 py-5 border-t border-black/8 space-y-2.5 sticky bottom-0 bg-white">
          <button
            onClick={handleSave}
            disabled={saving}
            className="w-full flex items-center justify-center gap-2 py-3 bg-[#1a1a1a] text-white text-sm font-semibold rounded-full hover:bg-[#333] disabled:opacity-60 transition-colors"
          >
            <Save className="w-4 h-4" />
            {saving ? 'Saving…' : 'Save Changes'}
          </button>
          <button
            onClick={handleNotify}
            disabled={notifying}
            className={`w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold rounded-full border transition-colors ${
              notified
                ? 'bg-green-50 text-green-700 border-green-200'
                : 'border-black/15 text-[#1a1a1a] hover:bg-black/5'
            } disabled:opacity-60`}
          >
            {notified ? <CheckCircle2 className="w-4 h-4" /> : <Send className="w-4 h-4" />}
            {notified ? 'Notification Sent!' : notifying ? 'Sending…' : 'Notify Partner via Email'}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default function AdminLeads() {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [editingLead, setEditingLead] = useState(null);

  const { data: leads = [], isLoading } = useQuery({
    queryKey: ['admin-leads'],
    queryFn: () => base44.entities.ReferralLead.list('-created_date', 200),
  });

  const filtered = leads.filter(l => {
    const matchStatus = statusFilter === 'all' || l.status === statusFilter;
    const q = search.toLowerCase();
    const matchSearch = !q || [l.prospect_name, l.prospect_business, l.partner_name, l.partner_email].some(f => f?.toLowerCase().includes(q));
    return matchStatus && matchSearch;
  });

  const counts = Object.fromEntries(STATUS_OPTIONS.map(s => [s.value, leads.filter(l => l.status === s.value).length]));

  return (
    <div className="p-6 md:p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-1">Admin Panel</p>
        <h1 className="font-serif text-3xl text-[#1a1a1a]">All Leads</h1>
        <p className="text-sm text-[#1a1a1a]/45 mt-1">{leads.length} total leads across all partners.</p>
      </div>

      {/* Status filter pills */}
      <div className="flex flex-wrap gap-2 mb-5">
        <button
          onClick={() => setStatusFilter('all')}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${statusFilter === 'all' ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]' : 'bg-white text-[#1a1a1a]/50 border-black/10 hover:border-black/20'}`}
        >
          All ({leads.length})
        </button>
        {STATUS_OPTIONS.map(s => (
          <button
            key={s.value}
            onClick={() => setStatusFilter(statusFilter === s.value ? 'all' : s.value)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
              statusFilter === s.value
                ? 'ring-2 ring-offset-1 ring-[#1a1a1a] ' + STATUS_COLORS[s.value]
                : STATUS_COLORS[s.value] + ' opacity-70 hover:opacity-100'
            }`}
          >
            {s.label} ({counts[s.value] || 0})
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="w-4 h-4 text-[#1a1a1a]/30 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search by prospect, business, or partner..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-2xl border border-black/10 bg-white text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/15 transition-all"
        />
      </div>

      {/* Table */}
      {isLoading ? (
        <div className="flex items-center justify-center py-20">
          <div className="w-7 h-7 border-4 border-slate-200 border-t-[#1a1a1a] rounded-full animate-spin" />
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-black/7 overflow-hidden">
          {filtered.length === 0 ? (
            <p className="text-center text-sm text-[#1a1a1a]/35 py-16">No leads match your filters.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-black/6 bg-[#F8F6F2]">
                    {['Prospect', 'Partner', 'Service', 'Status', 'Commission', 'Registered', ''].map((h, i) => (
                      <th key={i} className="text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/40">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((lead, i) => (
                    <motion.tr
                      key={lead.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.02 }}
                      className="border-b border-black/5 last:border-0 hover:bg-[#F8F6F2] transition-colors"
                    >
                      <td className="px-4 py-3.5">
                        <p className="font-semibold text-[#1a1a1a]">{lead.prospect_business}</p>
                        <p className="text-xs text-[#1a1a1a]/45">{lead.prospect_name}</p>
                      </td>
                      <td className="px-4 py-3.5">
                        <p className="text-[#1a1a1a]/70">{lead.partner_name || '—'}</p>
                        <p className="text-xs text-[#1a1a1a]/35">{lead.partner_email}</p>
                      </td>
                      <td className="px-4 py-3.5 text-[#1a1a1a]/55 text-xs">{SERVICE_LABELS[lead.service_interest]}</td>
                      <td className="px-4 py-3.5">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold border ${STATUS_COLORS[lead.status]}`}>
                          {STATUS_OPTIONS.find(s => s.value === lead.status)?.label}
                        </span>
                      </td>
                      <td className="px-4 py-3.5">
                        {lead.commission_amount ? (
                          <div>
                            <p className="text-green-700 font-semibold text-xs">Rp {lead.commission_amount.toLocaleString('id-ID')}</p>
                            <p className={`text-[10px] font-bold ${lead.commission_paid ? 'text-green-600' : 'text-yellow-600'}`}>
                              {lead.commission_paid ? 'Paid' : 'Pending'}
                            </p>
                          </div>
                        ) : <span className="text-[#1a1a1a]/25 text-xs">—</span>}
                      </td>
                      <td className="px-4 py-3.5 text-xs text-[#1a1a1a]/35">
                        {new Date(lead.created_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                      </td>
                      <td className="px-4 py-3.5">
                        <button
                          onClick={() => setEditingLead(lead)}
                          className="px-3 py-1.5 rounded-lg border border-black/10 text-xs font-medium text-[#1a1a1a]/60 hover:bg-black/5 hover:text-[#1a1a1a] transition-colors"
                        >
                          Edit
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* Edit Drawer */}
      {editingLead && (
        <LeadEditDrawer
          lead={editingLead}
          onClose={() => setEditingLead(null)}
          onSaved={() => {
            queryClient.invalidateQueries({ queryKey: ['admin-leads'] });
            setEditingLead(null);
          }}
        />
      )}
    </div>
  );
}