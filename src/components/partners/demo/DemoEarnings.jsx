import { DollarSign, CheckCircle2, Clock, TrendingUp } from 'lucide-react';

const deals = [
  { business: 'Budi Restoran Padang', service: 'Business Website', amount: 'Rp 558.000', paid: true, date: 'Apr 10' },
  { business: 'Warung Pak Joko', service: 'Landing Page', amount: 'Rp 298.000', paid: true, date: 'Mar 22' },
  { business: 'Klinik Sehat Mandiri', service: 'Website + Local Boost', amount: 'Rp 998.000', paid: false, date: 'Pending' },
  { business: 'Toko Batik Nusantara', service: 'Landing Page', amount: 'Rp 298.000', paid: false, date: 'Pending' },
];

export default function DemoEarnings({ lang }) {
  const isID = lang === 'id';
  return (
    <div className="p-5">
      <div className="mb-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-0.5">Partner Portal</p>
        <h1 className="font-serif text-xl text-[#1a1a1a]">{isID ? 'Penghasilan Saya' : 'My Earnings'}</h1>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-3 gap-2.5 mb-5">
        {[
          { icon: DollarSign, label: isID ? 'Total Earned' : 'Total Earned', value: 'Rp 3.200.000', sub: isID ? '4 deal' : '4 deals', color: 'text-green-700' },
          { icon: CheckCircle2, label: isID ? 'Sudah Dibayar' : 'Paid Out', value: 'Rp 856.000', sub: isID ? '2 deal' : '2 deals', color: 'text-green-600' },
          { icon: Clock, label: isID ? 'Menunggu' : 'Pending', value: 'Rp 1.296.000', sub: isID ? '2 deal aktif' : '2 active deals', color: 'text-yellow-600' },
        ].map((s, i) => (
          <div key={i} className="bg-white border border-black/7 rounded-xl p-3">
            <s.icon className={`w-4 h-4 mb-2 ${s.color}`} />
            <p className="text-[10px] text-[#1a1a1a]/40 font-medium mb-0.5">{s.label}</p>
            <p className={`font-serif text-base font-bold ${s.color}`}>{s.value}</p>
            <p className="text-[9px] text-[#1a1a1a]/30 mt-0.5">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Commission bar graphic */}
      <div className="bg-white border border-black/7 rounded-xl p-4 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-3.5 h-3.5 text-green-600" />
          <p className="text-[10px] font-semibold text-[#1a1a1a]/60 uppercase tracking-wider">{isID ? 'Progres Tier' : 'Tier Progress'}</p>
        </div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] text-[#1a1a1a]/40 w-12 shrink-0">Starter</span>
          <div className="flex-1 h-2 bg-[#F0EDE8] rounded-full overflow-hidden">
            <div className="h-full bg-green-500 rounded-full" style={{ width: '55%' }} />
          </div>
          <span className="text-[10px] text-green-700 font-bold w-10 text-right shrink-0">55%</span>
        </div>
        <p className="text-[9px] text-[#1a1a1a]/30 mt-1">{isID ? '5 deal lagi untuk naik ke tier Profesional' : '5 more deals to reach Professional tier'}</p>
      </div>

      {/* Commission history */}
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-2">{isID ? 'Riwayat Komisi' : 'Commission History'}</p>
      <div className="space-y-1.5">
        {deals.map((d, i) => (
          <div key={i} className="flex items-center gap-3 bg-white border border-black/7 rounded-xl px-4 py-2.5">
            <div className={`w-1.5 h-6 rounded-full shrink-0 ${d.paid ? 'bg-green-400' : 'bg-yellow-300'}`} />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-[#1a1a1a] truncate">{d.business}</p>
              <p className="text-[10px] text-[#1a1a1a]/40">{d.service}</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-xs font-bold text-green-700">{d.amount}</p>
              <p className={`text-[9px] font-semibold ${d.paid ? 'text-green-600' : 'text-yellow-600'}`}>
                {d.paid ? (isID ? 'Dibayar' : 'Paid') : d.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}