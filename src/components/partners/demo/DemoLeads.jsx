import { CheckCircle2, Clock, Phone, TrendingUp, XCircle, PlusCircle } from 'lucide-react';

const STATUS_STYLES = {
  pending:       { label: 'Pending',        color: 'bg-yellow-50 text-yellow-700 border-yellow-200' },
  contacted:     { label: 'Contacted',      color: 'bg-blue-50 text-blue-700 border-blue-200' },
  proposal_sent: { label: 'Proposal Sent',  color: 'bg-purple-50 text-purple-700 border-purple-200' },
  closed_won:    { label: 'Closed Won',     color: 'bg-green-50 text-green-700 border-green-200' },
  closed_lost:   { label: 'Closed Lost',    color: 'bg-red-50 text-red-600 border-red-200' },
};

const leads = [
  { prospect: 'Budi Restoran Padang', service: 'Business Website', status: 'closed_won', commission: 'Rp 2.790.000', date: '2 Apr' },
  { prospect: 'Klinik Sehat Mandiri', service: 'Website + Local Boost', status: 'proposal_sent', commission: 'Rp 4.990.000', date: '28 Apr' },
  { prospect: 'Toko Batik Nusantara', service: 'Landing Page', status: 'contacted', commission: 'Rp 1.490.000', date: '5 May' },
  { prospect: 'CV Maju Bersama', service: 'Custom Package', status: 'pending', commission: '—', date: '8 May' },
  { prospect: 'Salon Cantika Beauty', service: 'Business Website', status: 'closed_lost', commission: '—', date: '1 Apr' },
];

export default function DemoLeads({ lang }) {
  const isID = lang === 'id';
  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-0.5">Partner Portal</p>
          <h1 className="font-serif text-xl text-[#1a1a1a]">{isID ? 'Lead Saya' : 'My Leads'}</h1>
        </div>
        <button className="flex items-center gap-1.5 bg-green-600 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full">
          <PlusCircle className="w-3 h-3" />
          {isID ? 'Daftar Lead' : 'Register Lead'}
        </button>
      </div>

      {/* Pipeline stats */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {[
          { label: isID ? 'Total' : 'Total', value: '7', icon: TrendingUp, color: 'text-[#1a1a1a]' },
          { label: isID ? 'Aktif' : 'Active', value: '4', icon: Clock, color: 'text-blue-600' },
          { label: isID ? 'Menang' : 'Won', value: '2', icon: CheckCircle2, color: 'text-green-600' },
          { label: isID ? 'Hilang' : 'Lost', value: '1', icon: XCircle, color: 'text-red-500' },
        ].map((s, i) => (
          <div key={i} className="bg-white border border-black/7 rounded-xl p-2.5 flex flex-col gap-1">
            <s.icon className={`w-3 h-3 ${s.color}`} />
            <p className={`font-serif text-lg font-bold ${s.color}`}>{s.value}</p>
            <p className="text-[9px] text-[#1a1a1a]/40 font-medium">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Lead list */}
      <div className="space-y-1.5">
        {leads.map((lead, i) => {
          const st = STATUS_STYLES[lead.status];
          return (
            <div key={i} className="flex items-center gap-3 bg-white border border-black/7 rounded-xl px-4 py-3">
              <div className="w-7 h-7 rounded-lg bg-[#F0EDE8] flex items-center justify-center shrink-0">
                <Phone className="w-3 h-3 text-[#1a1a1a]/40" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-[#1a1a1a] truncate">{lead.prospect}</p>
                <p className="text-[10px] text-[#1a1a1a]/40">{lead.service} · {lead.date}</p>
              </div>
              <span className={`text-[9px] font-semibold border px-2 py-0.5 rounded-full whitespace-nowrap ${st.color}`}>{st.label}</span>
              <p className="text-[10px] font-semibold text-green-700 w-20 text-right shrink-0">{lead.commission}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}