import { motion } from 'framer-motion';
import { FileText, Download, FileCheck, Palette, DollarSign, ScrollText, File } from 'lucide-react';
import { useAuth } from '@/lib/AuthContext';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] },
});

const STATIC_DOCS = [
  {
    id: 'agreement',
    title: 'Partner Agreement',
    description: 'Your signed introductory partner terms and conditions.',
    icon: ScrollText,
    color: 'bg-blue-50 text-blue-600',
    href: '/docs/partner-agreement.pdf',
  },
  {
    id: 'commission',
    title: 'Commission Structure',
    description: 'Full breakdown of tiers, rates, and payout timelines.',
    icon: DollarSign,
    color: 'bg-green-50 text-green-600',
    href: '/docs/commission-structure.pdf',
  },
  {
    id: 'brand',
    title: 'Brand Asset Kit',
    description: 'Logos, colours, and usage guidelines for Akar Systems.',
    icon: Palette,
    color: 'bg-purple-50 text-purple-600',
    href: '/docs/brand-kit.zip',
  },
  {
    id: 'pitch',
    title: 'Partner Pitch Deck',
    description: 'Slide deck to help you pitch Akar Systems to prospects.',
    icon: FileCheck,
    color: 'bg-orange-50 text-orange-600',
    href: '/docs/pitch-deck.pdf',
  },
];

const CATEGORY_ICONS = {
  agreement: ScrollText,
  commission: DollarSign,
  brand: Palette,
  pitch: FileCheck,
  other: File,
};

const CATEGORY_COLORS = {
  agreement: 'bg-blue-50 text-blue-600',
  commission: 'bg-green-50 text-green-600',
  brand: 'bg-purple-50 text-purple-600',
  pitch: 'bg-orange-50 text-orange-600',
  other: 'bg-slate-50 text-slate-500',
};

function DocCard({ title, description, icon: Icon, color, href, fileName }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      download={fileName}
      className="flex items-start gap-4 bg-white rounded-2xl border border-black/7 p-5 hover:shadow-md transition-all duration-200 group"
    >
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
        <Icon className="w-4.5 h-4.5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-[#1a1a1a] text-sm">{title}</p>
        {description && <p className="text-xs text-[#1a1a1a]/45 mt-0.5 leading-relaxed">{description}</p>}
      </div>
      <Download className="w-4 h-4 text-[#1a1a1a]/20 group-hover:text-green-600 transition-colors shrink-0 mt-0.5" />
    </a>
  );
}

export default function PortalDocuments() {
  const { user } = useAuth();

  const { data: adminDocs = [], isLoading } = useQuery({
    queryKey: ['partner-documents', user?.email],
    queryFn: () => base44.entities.PartnerDocument.list('-created_date'),
    enabled: !!user?.email,
    select: (docs) =>
      docs.filter(
        (d) => d.target === 'all' || d.partner_email === user?.email
      ),
  });

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto">
      {/* Header */}
      <motion.div {...fadeUp(0)} className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-1">Partner Portal</p>
        <h1 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">Documents</h1>
        <p className="text-[#1a1a1a]/45 text-sm mt-2">Your resources, agreements, and files from Akar Systems.</p>
      </motion.div>

      {/* Static Resources */}
      <motion.div {...fadeUp(0.06)} className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-4">Program Resources</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {STATIC_DOCS.map((doc) => (
            <DocCard key={doc.id} {...doc} />
          ))}
        </div>
      </motion.div>

      {/* Admin-uploaded docs */}
      <motion.div {...fadeUp(0.12)}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-4">Shared by Akar Systems</p>
        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="w-6 h-6 border-4 border-slate-200 border-t-green-600 rounded-full animate-spin" />
          </div>
        ) : adminDocs.length === 0 ? (
          <div className="bg-white rounded-2xl border border-black/7 p-10 text-center">
            <FileText className="w-8 h-8 text-[#1a1a1a]/15 mx-auto mb-3" />
            <p className="text-sm text-[#1a1a1a]/35">No documents shared yet.</p>
            <p className="text-xs text-[#1a1a1a]/25 mt-1">Akar Systems will upload files here when available.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {adminDocs.map((doc) => {
              const Icon = CATEGORY_ICONS[doc.category] || File;
              const color = CATEGORY_COLORS[doc.category] || CATEGORY_COLORS.other;
              return (
                <DocCard
                  key={doc.id}
                  title={doc.title}
                  description={doc.description}
                  icon={Icon}
                  color={color}
                  href={doc.file_url}
                  fileName={doc.file_name}
                />
              );
            })}
          </div>
        )}
      </motion.div>
    </div>
  );
}