import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, Users, DollarSign, BookOpen,
  Package, FileText, UserCircle, ChevronRight, Shield
} from 'lucide-react';
import DemoDashboard from './demo/DemoDashboard';
import DemoLeads from './demo/DemoLeads';
import DemoEarnings from './demo/DemoEarnings';
import DemoPlaybook from './demo/DemoPlaybook';
import DemoServices from './demo/DemoServices';
import DemoDocuments from './demo/DemoDocuments';
import DemoProfile from './demo/DemoProfile';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
  { icon: Users, label: 'My Leads', id: 'leads' },
  { icon: DollarSign, label: 'Earnings', id: 'earnings' },
  { icon: BookOpen, label: 'Sales Playbook', id: 'playbook' },
  { icon: Package, label: 'Service Catalog', id: 'services' },
  { icon: FileText, label: 'Documents', id: 'documents' },
  { icon: UserCircle, label: 'My Profile', id: 'profile' },
];

const screens = {
  dashboard: DemoDashboard,
  leads: DemoLeads,
  earnings: DemoEarnings,
  playbook: DemoPlaybook,
  services: DemoServices,
  documents: DemoDocuments,
  profile: DemoProfile,
};

export default function PortalDemoShell({ lang }) {
  const [active, setActive] = useState('dashboard');
  const Screen = screens[active] || DemoDashboard;

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Browser chrome */}
      <div className="bg-[#E8E4DC] rounded-t-2xl border border-black/10 px-4 py-3 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
          <div className="w-3 h-3 rounded-full bg-green-400/70" />
        </div>
        <div className="flex-1 bg-white/60 rounded-full px-3 py-1 text-[11px] text-[#1a1a1a]/35 font-medium text-center mx-8">
          partner.akarsystems.com/portal
        </div>
        <div className="flex items-center gap-1 bg-green-600/15 border border-green-500/20 rounded-full px-2 py-0.5">
          <Shield className="w-2.5 h-2.5 text-green-600" />
          <span className="text-[9px] font-bold text-green-700 uppercase tracking-wider">Live Preview</span>
        </div>
      </div>

      {/* Main portal frame */}
      <div className="flex bg-[#F8F6F2] border-x border-b border-black/10 rounded-b-2xl overflow-hidden shadow-2xl shadow-black/10" style={{ height: '540px' }}>
        {/* Sidebar */}
        <aside className="w-52 shrink-0 bg-white border-r border-black/8 flex flex-col hidden sm:flex">
          <div className="px-5 py-4 border-b border-black/8">
            <p className="font-serif text-sm font-bold text-[#1a1a1a] tracking-tight">Akar Systems</p>
            <p className="text-[9px] font-bold uppercase tracking-widest text-green-600 mt-0.5">Partner Portal</p>
          </div>
          <nav className="flex-1 px-2.5 py-3 space-y-0.5 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => !item.disabled && setActive(item.id)}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-all duration-150 ${
                    item.disabled
                      ? 'text-[#1a1a1a]/25 cursor-default'
                      : isActive
                      ? 'bg-green-600 text-white shadow-sm'
                      : 'text-[#1a1a1a]/60 hover:bg-black/5 hover:text-[#1a1a1a]'
                  }`}
                >
                  <item.icon className="w-3.5 h-3.5 shrink-0" />
                  {item.label}
                  {isActive && <ChevronRight className="w-3 h-3 ml-auto" />}
                </button>
              );
            })}
          </nav>
          <div className="px-2.5 py-3 border-t border-black/8">
            <div className="flex items-center gap-2.5 px-3 py-2">
              <div className="w-6 h-6 rounded-full bg-green-600/15 border border-green-500/20 flex items-center justify-center shrink-0">
                <span className="text-[9px] font-bold text-green-700">A</span>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-semibold text-[#1a1a1a] truncate">Alex Santoso</p>
                <p className="text-[9px] text-[#1a1a1a]/35 truncate">alex@example.com</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Content area */}
        <div className="flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="h-full"
            >
              <Screen lang={lang} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Tab nav for mobile (below the frame) */}
      <div className="sm:hidden flex overflow-x-auto gap-1 mt-2 pb-1">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              active === item.id ? 'bg-green-600 text-white' : 'bg-white border border-black/10 text-[#1a1a1a]/55'
            }`}
          >
            <item.icon className="w-3 h-3" />
            {item.label}
          </button>
        ))}
      </div>

      {/* Overlay hint */}
      <p className="text-center text-[10px] text-[#1a1a1a]/30 mt-3 font-medium">
        {lang === 'id' ? '↑ Klik menu di sidebar untuk menjelajahi portal' : '↑ Click the sidebar to explore the partner portal'}
      </p>
    </div>
  );
}