import { useState } from 'react';
import { ChevronDown, Target, MessageCircle, Shield } from 'lucide-react';

const sections = [
  {
    icon: Target,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    title: 'Who to Target',
    titleID: 'Siapa Target Anda',
    content: 'Businesses without a professional website, or with outdated/slow sites. Focus on: local restaurants, clinics, retail shops, consultants, and SMEs actively running ads.',
    contentID: 'Bisnis tanpa website profesional, atau dengan situs yang usang/lambat. Fokus pada: restoran lokal, klinik, toko retail, konsultan, dan UKM yang aktif beriklan.',
  },
  {
    icon: MessageCircle,
    color: 'text-green-600',
    bg: 'bg-green-50',
    title: 'Opening Script',
    titleID: 'Script Pembuka',
    content: '"Hey [Name], I noticed your business doesn\'t have a strong online presence yet. I\'ve been working with a team that builds premium websites in just 48 hours — would it be worth a quick chat?"',
    contentID: '"Hei [Nama], saya perhatikan bisnis kamu belum punya kehadiran online yang kuat. Saya kenal tim yang bangun website premium dalam 48 jam — worth a quick chat?"',
  },
  {
    icon: Shield,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    title: 'Handling Objections',
    titleID: 'Menangani Keberatan',
    content: '"Too expensive" → Frame it as investment, not cost. "Already have a website" → Ask about performance scores, mobile speed, and leads generated. "Not the right time" → Urgency: limited monthly slots.',
    contentID: '"Terlalu mahal" → Frame sebagai investasi, bukan biaya. "Sudah punya website" → Tanya skor performa, kecepatan mobile, berapa lead yang masuk. "Belum waktunya" → Slot terbatas setiap bulan.',
  },
];

export default function DemoPlaybook({ lang }) {
  const isID = lang === 'id';
  const [open, setOpen] = useState(0);

  return (
    <div className="p-5">
      <div className="mb-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-0.5">Partner Portal</p>
        <h1 className="font-serif text-xl text-[#1a1a1a]">{isID ? 'Sales Playbook' : 'Sales Playbook'}</h1>
        <p className="text-[10px] text-[#1a1a1a]/40 mt-0.5">{isID ? 'Panduan lengkap untuk closing deal.' : 'Your complete guide to closing deals.'}</p>
      </div>

      {/* Golden rule */}
      <div className="bg-[#1a1a1a] rounded-xl p-4 mb-4">
        <p className="text-[9px] font-bold uppercase tracking-widest text-green-400 mb-1">{isID ? 'Aturan Emas' : 'Golden Rule'}</p>
        <p className="font-serif text-sm text-white leading-relaxed italic">
          {isID
            ? '"Jangan jual — perkenalkan. Tugas Anda adalah menghubungkan orang yang tepat."'
            : '"Don\'t sell — introduce. Your job is to connect the right people."'}
        </p>
      </div>

      {/* Accordion */}
      <div className="space-y-2">
        {sections.map((s, i) => (
          <div key={i} className="bg-white border border-black/7 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full flex items-center gap-3 px-4 py-3 text-left"
            >
              <div className={`w-6 h-6 rounded-lg ${s.bg} flex items-center justify-center shrink-0`}>
                <s.icon className={`w-3 h-3 ${s.color}`} />
              </div>
              <span className="text-xs font-semibold text-[#1a1a1a] flex-1">{isID ? s.titleID : s.title}</span>
              <ChevronDown className={`w-3.5 h-3.5 text-[#1a1a1a]/30 transition-transform ${open === i ? 'rotate-180' : ''}`} />
            </button>
            {open === i && (
              <div className="px-4 pb-3 border-t border-black/5">
                <p className="text-[11px] text-[#1a1a1a]/55 leading-relaxed pt-2">{isID ? s.contentID : s.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Tip footer */}
      <div className="mt-4 bg-green-50 border border-green-100 rounded-xl px-4 py-3">
        <p className="text-[9px] font-bold uppercase tracking-widest text-green-700 mb-1">{isID ? 'Tips Cepat' : 'Quick Tip'}</p>
        <p className="text-[11px] text-green-800/70 leading-relaxed">
          {isID
            ? 'Daftarkan lead sesegera mungkin setelah percakapan pertama — ini mengunci klaim komisi Anda.'
            : 'Register the lead as soon as you have the first conversation — this locks in your commission claim.'}
        </p>
      </div>
    </div>
  );
}