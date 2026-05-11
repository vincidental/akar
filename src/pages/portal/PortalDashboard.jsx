import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, DollarSign, FileText, ArrowRight, PlusCircle, BookOpen, Package } from 'lucide-react';
import { useAuth } from '@/lib/AuthContext';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] },
});

const quickLinks = [
  { icon: PlusCircle, label: 'Register a Lead', to: '/portal/leads/new', color: 'bg-green-600 text-white', border: '' },
  { icon: TrendingUp, label: 'My Pipeline', to: '/portal/leads', color: 'bg-white text-[#1a1a1a]', border: 'border border-black/8' },
  { icon: DollarSign, label: 'My Earnings', to: '/portal/earnings', color: 'bg-white text-[#1a1a1a]', border: 'border border-black/8' },
  { icon: BookOpen, label: 'Sales Playbook', to: '/portal/playbook', color: 'bg-white text-[#1a1a1a]', border: 'border border-black/8' },
  { icon: Package, label: 'Service Catalog', to: '/portal/services', color: 'bg-white text-[#1a1a1a]', border: 'border border-black/8' },
  { icon: FileText, label: 'My Documents', to: '/portal/documents', color: 'bg-white text-[#1a1a1a]', border: 'border border-black/8' },
];

export default function PortalDashboard() {
  const { user } = useAuth();
  const firstName = user?.full_name?.split(' ')[0] || 'Partner';

  const { data: leads = [] } = useQuery({
    queryKey: ['referral-leads', user?.email],
    queryFn: () => base44.entities.ReferralLead.filter({ partner_email: user?.email }),
    enabled: !!user?.email,
  });

  const activeLeads = leads.filter(l => !['closed_won', 'closed_lost'].includes(l.status)).length;
  const closedWon = leads.filter(l => l.status === 'closed_won');
  const totalEarned = closedWon.reduce((sum, l) => sum + (l.commission_amount || 0), 0);

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto">
      {/* Greeting */}
      <motion.div {...fadeUp(0)} className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-1">Partner Portal</p>
        <h1 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">
          Welcome back, {firstName}.
        </h1>
        <p className="text-[#1a1a1a]/45 text-sm mt-2">Here's your partnership overview.</p>
      </motion.div>

      {/* Stats row */}
      <motion.div {...fadeUp(0.06)} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { icon: Users, label: 'Total Leads', value: leads.length || '0' },
          { icon: TrendingUp, label: 'Active Pipeline', value: activeLeads || '0' },
          { icon: DollarSign, label: 'Total Earned', value: totalEarned ? `Rp ${totalEarned.toLocaleString('id-ID')}` : '—' },
          { icon: FileText, label: 'Deals Closed', value: closedWon.length || '0' },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl border border-black/7 p-5 flex flex-col gap-2">
            <stat.icon className="w-4 h-4 text-green-600" />
            <p className="font-serif text-2xl font-bold text-[#1a1a1a]">{stat.value}</p>
            <p className="text-xs text-[#1a1a1a]/40 font-medium">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Quick Links */}
      <motion.div {...fadeUp(0.1)}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-4">Quick Actions</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {quickLinks.map((link, i) => (
            <Link
              key={i}
              to={link.to}
              className={`flex items-center gap-3 rounded-2xl px-5 py-4 ${link.color} ${link.border} hover:shadow-md transition-all duration-200 group`}
            >
              <link.icon className="w-4 h-4 shrink-0" />
              <span className="text-sm font-medium">{link.label}</span>
              <ArrowRight className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}