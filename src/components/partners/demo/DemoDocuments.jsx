import { FileText, Download, FileCheck, Palette, DollarSign, ScrollText } from 'lucide-react';

const DOCS = [
  {
    title: 'Partner Agreement',
    description: 'Your signed introductory partner terms and conditions.',
    icon: ScrollText,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Commission Structure',
    description: 'Full breakdown of tiers, rates, and payout timelines.',
    icon: DollarSign,
    color: 'bg-green-50 text-green-600',
  },
  {
    title: 'Brand Asset Kit',
    description: 'Logos, colours, and usage guidelines for Akar Systems.',
    icon: Palette,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'Partner Pitch Deck',
    description: 'Slide deck to help you pitch Akar Systems to prospects.',
    icon: FileCheck,
    color: 'bg-orange-50 text-orange-600',
  },
];

export default function DemoDocuments({ lang }) {
  const isID = lang === 'id';
  return (
    <div className="p-5">
      <div className="mb-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-0.5">Partner Portal</p>
        <h1 className="font-serif text-xl text-[#1a1a1a]">{isID ? 'Dokumen' : 'Documents'}</h1>
        <p className="text-[10px] text-[#1a1a1a]/40 mt-0.5">{isID ? 'Perjanjian, resource, dan file dari Akar Systems.' : 'Your agreements, resources, and files from Akar Systems.'}</p>
      </div>

      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-3">{isID ? 'Resource Program' : 'Program Resources'}</p>
      <div className="space-y-2 mb-6">
        {DOCS.map((doc, i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-white rounded-xl border border-black/7 p-4 group hover:shadow-sm transition-all"
          >
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${doc.color}`}>
              <doc.icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-[#1a1a1a] text-xs">{doc.title}</p>
              <p className="text-[10px] text-[#1a1a1a]/40 mt-0.5 leading-relaxed">{doc.description}</p>
            </div>
            <Download className="w-3.5 h-3.5 text-[#1a1a1a]/20 group-hover:text-green-600 transition-colors shrink-0" />
          </div>
        ))}
      </div>

      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-3">{isID ? 'Dibagikan oleh Akar Systems' : 'Shared by Akar Systems'}</p>
      <div className="bg-white rounded-xl border border-black/7 p-8 text-center">
        <FileText className="w-7 h-7 text-[#1a1a1a]/15 mx-auto mb-2" />
        <p className="text-xs text-[#1a1a1a]/35">{isID ? 'Belum ada dokumen yang dibagikan.' : 'No documents shared yet.'}</p>
        <p className="text-[10px] text-[#1a1a1a]/25 mt-1">{isID ? 'File akan muncul di sini bila tersedia.' : 'Files will appear here when available.'}</p>
      </div>
    </div>
  );
}