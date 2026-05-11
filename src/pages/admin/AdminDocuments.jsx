import { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Upload, Trash2, File, Plus, X } from 'lucide-react';

const CATEGORIES = [
  { value: 'agreement', label: 'Agreement' },
  { value: 'commission', label: 'Commission' },
  { value: 'brand', label: 'Brand Assets' },
  { value: 'pitch', label: 'Pitch Deck' },
  { value: 'other', label: 'Other' },
];

function UploadModal({ onClose, onSaved }) {
  const [form, setForm] = useState({ title: '', description: '', category: 'other', target: 'all', partner_email: '' });
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    setUploading(true);
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    await base44.entities.PartnerDocument.create({
      ...form,
      file_url,
      file_name: file.name,
    });
    setUploading(false);
    onSaved();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-6 space-y-4"
      >
        <div className="flex items-center justify-between mb-1">
          <p className="font-semibold text-[#1a1a1a]">Upload Document</p>
          <button onClick={onClose} className="text-[#1a1a1a]/30 hover:text-[#1a1a1a]/70 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            required
            placeholder="Document title"
            value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-black/10 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30"
          />
          <textarea
            placeholder="Short description (optional)"
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-black/10 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30 resize-none h-20"
          />
          <select
            value={form.category}
            onChange={e => setForm({ ...form, category: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-black/10 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30 bg-white"
          >
            {CATEGORIES.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
          </select>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setForm({ ...form, target: 'all' })}
              className={`flex-1 py-2 rounded-xl text-xs font-semibold border transition-all ${form.target === 'all' ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]' : 'bg-white text-[#1a1a1a]/50 border-black/10'}`}
            >All Partners</button>
            <button
              type="button"
              onClick={() => setForm({ ...form, target: 'specific' })}
              className={`flex-1 py-2 rounded-xl text-xs font-semibold border transition-all ${form.target === 'specific' ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]' : 'bg-white text-[#1a1a1a]/50 border-black/10'}`}
            >Specific Partner</button>
          </div>

          {form.target === 'specific' && (
            <input
              required
              placeholder="Partner email address"
              value={form.partner_email}
              onChange={e => setForm({ ...form, partner_email: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-black/10 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30"
            />
          )}

          <label className="flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-dashed border-black/10 cursor-pointer hover:border-green-400 transition-colors">
            <Upload className="w-4 h-4 text-[#1a1a1a]/30" />
            <span className="text-sm text-[#1a1a1a]/45">{file ? file.name : 'Choose a file to upload'}</span>
            <input type="file" className="hidden" onChange={e => setFile(e.target.files[0])} />
          </label>

          <button
            type="submit"
            disabled={uploading || !file}
            className="w-full py-3 bg-green-600 text-white font-semibold text-sm rounded-full hover:bg-green-700 disabled:opacity-60 transition-colors"
          >
            {uploading ? 'Uploading…' : 'Upload Document'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default function AdminDocuments() {
  const queryClient = useQueryClient();
  const [showModal, setShowModal] = useState(false);

  const { data: docs = [], isLoading } = useQuery({
    queryKey: ['partner-documents-admin'],
    queryFn: () => base44.entities.PartnerDocument.list('-created_date'),
  });

  const handleDelete = async (id) => {
    await base44.entities.PartnerDocument.delete(id);
    queryClient.invalidateQueries({ queryKey: ['partner-documents-admin'] });
  };

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-1">Admin Panel</p>
          <h1 className="font-serif text-3xl text-[#1a1a1a]">Partner Documents</h1>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-green-600 text-white text-sm font-semibold rounded-full hover:bg-green-700 transition-colors"
        >
          <Plus className="w-4 h-4" /> Upload Doc
        </button>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-20">
          <div className="w-7 h-7 border-4 border-slate-200 border-t-green-600 rounded-full animate-spin" />
        </div>
      ) : docs.length === 0 ? (
        <div className="text-center py-20 text-[#1a1a1a]/30 text-sm">No documents uploaded yet.</div>
      ) : (
        <div className="space-y-2">
          {docs.map((doc, i) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              className="flex items-center gap-4 bg-white rounded-2xl border border-black/7 p-4"
            >
              <div className="w-9 h-9 bg-[#F0EDE8] rounded-xl flex items-center justify-center shrink-0">
                <File className="w-4 h-4 text-[#1a1a1a]/40" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-[#1a1a1a]">{doc.title}</p>
                <p className="text-xs text-[#1a1a1a]/40 truncate">
                  {doc.target === 'specific' ? `→ ${doc.partner_email}` : 'All partners'} · {doc.category}
                </p>
              </div>
              <a
                href={doc.file_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-green-700 hover:underline shrink-0"
              >
                View
              </a>
              <button
                onClick={() => handleDelete(doc.id)}
                className="p-1.5 rounded-lg text-[#1a1a1a]/25 hover:text-red-500 hover:bg-red-50 transition-all"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      )}

      {showModal && (
        <UploadModal
          onClose={() => setShowModal(false)}
          onSaved={() => queryClient.invalidateQueries({ queryKey: ['partner-documents-admin'] })}
        />
      )}
    </div>
  );
}