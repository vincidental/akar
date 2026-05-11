import { TrendingUp, Users, DollarSign, FileText, ArrowRight, PlusCircle, BookOpen, Package } from 'lucide-react';

const quickLinks = [
  { icon: PlusCircle, label: 'Register a Lead', color: 'bg-green-600 text-white' },
  { icon: TrendingUp, label: 'My Pipeline', color: 'bg-white text-[#1a1a1a] border border-black/8' },
  { icon: DollarSign, label: 'My Earnings', color: 'bg-white text-[#1a1a1a] border border-black/8' },
  { icon: BookOpen, label: 'Sales Playbook', color: 'bg-white text-[#1a1a1a] border border-black/8' },
  { icon: Package, label: 'Service Catalog', color: 'bg-white text-[#1a1a1a] border border-black/8' },
  { icon: FileText, label: 'My Documents', color: 'bg-white text-[#1a1a1a] border border-black/8' },
];

export default function DemoDashboard({ lang }) {
  const isID = lang === 'id';
  return (
    <div className="p-5 max-w-3xl">
      <div className="mb-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-0.5">{isID ? 'Partner Portal' : 'Partner Portal'}</p>
        <h1 className="font-serif text-xl text-[#1a1a1a]">
          {isID ? 'Selamat datang, Alex.' : 'Welcome back, Alex.'}
        </h1>
        <p className="text-[#1a1a1a]/40 text-xs mt-0.5">{isID ? 'Ini ringkasan kemitraan Anda.' : "Here's your partnership overview."}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-2.5 mb-5">
        {[
          { icon: Users, label: isID ? 'Total Lead' : 'Total Leads', value: '7' },
          { icon: TrendingUp, label: isID ? 'Pipeline Aktif' : 'Active Pipeline', value: '4' },
          { icon: DollarSign, label: isID ? 'Total Earned' : 'Total Earned', value: 'Rp 3,2M' },
          { icon: FileText, label: isID ? 'Deal Closed' : 'Deals Closed', value: '2' },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-xl border border-black/7 p-3 flex flex-col gap-1.5">
            <s.icon className="w-3.5 h-3.5 text-green-600" />
            <p className="font-serif text-lg font-bold text-[#1a1a1a] leading-none">{s.value}</p>
            <p className="text-[9px] text-[#1a1a1a]/40 font-medium leading-tight">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Quick links */}
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-2.5">{isID ? 'Aksi Cepat' : 'Quick Actions'}</p>
      <div className="grid grid-cols-3 gap-2">
        {quickLinks.map((link, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 rounded-xl px-3 py-2.5 ${link.color} cursor-default group`}
          >
            <link.icon className="w-3.5 h-3.5 shrink-0" />
            <span className="text-[11px] font-medium leading-tight">{link.label}</span>
            <ArrowRight className="w-3 h-3 ml-auto opacity-30" />
          </div>
        ))}
      </div>
    </div>
  );
}