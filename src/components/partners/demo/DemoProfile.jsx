import { Mail, Calendar, TrendingUp, Trophy, UserCircle } from 'lucide-react';

export default function DemoProfile({ lang }) {
  const isID = lang === 'id';
  return (
    <div className="p-5">
      <div className="mb-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-0.5">Partner Portal</p>
        <h1 className="font-serif text-xl text-[#1a1a1a]">{isID ? 'Profil Saya' : 'My Profile'}</h1>
      </div>

      {/* Profile card */}
      <div className="bg-white rounded-xl border border-black/7 p-5 mb-4">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center shrink-0">
            <span className="text-white font-serif font-bold text-lg">A</span>
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="font-serif text-base text-[#1a1a1a] font-bold">Alex Santoso</h2>
            <p className="text-[10px] text-[#1a1a1a]/45 flex items-center gap-1 mt-0.5">
              <Mail className="w-3 h-3" />
              alex@example.com
            </p>
            <p className="text-[10px] text-[#1a1a1a]/30 flex items-center gap-1 mt-0.5">
              <Calendar className="w-3 h-3" />
              {isID ? 'Partner sejak Januari 2025' : 'Partner since January 2025'}
            </p>
          </div>
        </div>
        <div className="border-t border-black/5 pt-3">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[#1a1a1a]/35 mb-1">{isID ? 'Tentang' : 'About'}</p>
          <p className="text-[11px] text-[#1a1a1a]/55 leading-relaxed">
            {isID
              ? 'Konsultan marketing digital dengan jaringan di industri F&B dan retail di Jakarta.'
              : 'Digital marketing consultant with a network in the F&B and retail industry in Jakarta.'}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { icon: TrendingUp, label: isID ? 'Total Lead' : 'Total Leads', value: '7', color: 'text-blue-600' },
          { icon: Trophy, label: isID ? 'Deal Closed' : 'Deals Closed', value: '2', color: 'text-green-600' },
          { icon: UserCircle, label: isID ? 'Aktif' : 'Active', value: '4', color: 'text-purple-600' },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-xl border border-black/7 p-3 text-center flex flex-col items-center gap-1">
            <s.icon className={`w-4 h-4 ${s.color}`} />
            <p className={`font-serif text-xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-[9px] text-[#1a1a1a]/40 font-medium">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Earnings banner */}
      <div className="bg-green-600 rounded-xl p-4 text-center">
        <p className="text-white/70 text-[9px] uppercase tracking-widest font-semibold mb-1">
          {isID ? 'Total Komisi Diterima' : 'Total Commissions Earned'}
        </p>
        <p className="font-serif text-2xl font-bold text-white">Rp 3.200.000</p>
      </div>
    </div>
  );
}