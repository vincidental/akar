import { useState } from 'react';
import { useAuth } from '@/lib/AuthContext';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { UserCircle, Mail, Calendar, TrendingUp, Trophy, Edit2, CheckCircle2, Save } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] },
});

const INPUT_CLS = "w-full px-4 py-3 rounded-xl border border-black/10 bg-white text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 focus:outline-none focus:ring-2 focus:ring-green-500/40 focus:border-green-500/50 transition-all";

export default function PortalProfile() {
  const { user } = useAuth();
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [phone, setPhone] = useState(user?.phone || '');
  const [bio, setBio] = useState(user?.bio || '');

  const { data: leads = [] } = useQuery({
    queryKey: ['referral-leads', user?.email],
    queryFn: () => base44.entities.ReferralLead.filter({ partner_email: user?.email }),
    enabled: !!user?.email,
  });

  const wonLeads = leads.filter(l => l.status === 'closed_won');
  const activeLeads = leads.filter(l => !['closed_won', 'closed_lost'].includes(l.status));
  const totalEarned = wonLeads.reduce((sum, l) => sum + (l.commission_amount || 0), 0);
  const memberSince = user?.created_date ? new Date(user.created_date).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' }) : '—';

  const handleSave = async () => {
    setSaving(true);
    await base44.auth.updateMe({ phone, bio });
    setSaving(false);
    setSaved(true);
    setEditing(false);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="p-6 md:p-10 max-w-3xl mx-auto">
      {/* Header */}
      <motion.div {...fadeUp(0)} className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-1">Partner Portal</p>
        <h1 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">My Profile</h1>
      </motion.div>

      {/* Profile Card */}
      <motion.div {...fadeUp(0.06)} className="bg-white rounded-2xl border border-black/7 p-6 mb-6">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-green-600 flex items-center justify-center shrink-0">
            <span className="text-white font-serif font-bold text-xl">
              {user?.full_name?.charAt(0) || '?'}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="font-serif text-xl text-[#1a1a1a] font-bold">{user?.full_name}</h2>
            <p className="text-sm text-[#1a1a1a]/45 flex items-center gap-1.5 mt-1">
              <Mail className="w-3.5 h-3.5" />
              {user?.email}
            </p>
            <p className="text-xs text-[#1a1a1a]/30 flex items-center gap-1.5 mt-1">
              <Calendar className="w-3 h-3" />
              Partner since {memberSince}
            </p>
          </div>
          <button
            onClick={() => setEditing(e => !e)}
            className="p-2 rounded-xl hover:bg-black/5 transition-colors shrink-0"
          >
            <Edit2 className="w-4 h-4 text-[#1a1a1a]/40" />
          </button>
        </div>

        {/* Editable fields */}
        <div className={`space-y-4 overflow-hidden transition-all duration-300 ${editing ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="h-px bg-black/5" />
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-[#1a1a1a]/40 mb-1.5">WhatsApp / Phone</label>
            <input
              type="text"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder="e.g. 08123456789"
              className={INPUT_CLS}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-[#1a1a1a]/40 mb-1.5">About You</label>
            <textarea
              value={bio}
              onChange={e => setBio(e.target.value)}
              placeholder="Brief intro about your background and how you typically source leads..."
              className={`${INPUT_CLS} h-24 resize-none`}
            />
          </div>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white text-sm font-semibold rounded-full hover:bg-green-700 disabled:opacity-60 transition-colors"
          >
            <Save className="w-3.5 h-3.5" />
            {saving ? 'Saving…' : 'Save Changes'}
          </button>
        </div>

        {/* Read-only bio/phone if set */}
        {!editing && (user?.phone || user?.bio) && (
          <div className="space-y-2 pt-2 border-t border-black/5">
            {user?.phone && (
              <p className="text-sm text-[#1a1a1a]/60 flex items-center gap-2">
                <span className="text-xs font-semibold text-[#1a1a1a]/35 uppercase tracking-widest w-16">Phone</span>
                {user.phone}
              </p>
            )}
            {user?.bio && (
              <p className="text-sm text-[#1a1a1a]/60 leading-relaxed">{user.bio}</p>
            )}
          </div>
        )}
      </motion.div>

      {/* Save confirmation */}
      {saved && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-green-700 text-sm bg-green-50 border border-green-200 rounded-xl px-4 py-3 mb-6"
        >
          <CheckCircle2 className="w-4 h-4" />
          Profile updated successfully.
        </motion.div>
      )}

      {/* Stats summary */}
      <motion.div {...fadeUp(0.1)} className="grid grid-cols-3 gap-4">
        {[
          { icon: TrendingUp, label: 'Total Leads', value: leads.length || '0', color: 'text-blue-600' },
          { icon: Trophy, label: 'Deals Closed', value: wonLeads.length || '0', color: 'text-green-600' },
          { icon: UserCircle, label: 'Active Leads', value: activeLeads.length || '0', color: 'text-purple-600' },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-2xl border border-black/7 p-5 text-center flex flex-col items-center gap-2">
            <s.icon className={`w-5 h-5 ${s.color}`} />
            <p className={`font-serif text-2xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-xs text-[#1a1a1a]/40 font-medium">{s.label}</p>
          </div>
        ))}
      </motion.div>

      {totalEarned > 0 && (
        <motion.div {...fadeUp(0.14)} className="mt-4 bg-green-600 rounded-2xl p-5 text-center">
          <p className="text-white/70 text-xs uppercase tracking-widest font-semibold mb-1">Total Commissions Earned</p>
          <p className="font-serif text-3xl font-bold text-white">Rp {totalEarned.toLocaleString('id-ID')}</p>
        </motion.div>
      )}
    </div>
  );
}