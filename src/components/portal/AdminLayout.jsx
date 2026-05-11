import { Outlet, Link, useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '@/lib/AuthContext';
import { LayoutDashboard, Users, LogOut, Menu, X, ChevronRight, Shield, ClipboardList, UserCheck, FolderOpen } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { icon: LayoutDashboard, label: 'Overview',     to: '/admin' },
  { icon: Users,           label: 'All Leads',    to: '/admin/leads' },
  { icon: ClipboardList,   label: 'Applications', to: '/admin/applications' },
  { icon: UserCheck,       label: 'Partners',     to: '/admin/partners' },
  { icon: FolderOpen,      label: 'Documents',    to: '/admin/documents' },
];

function Sidebar({ onClose }) {
  const location = useLocation();
  return (
    <div className="flex flex-col h-full">
      <div className="px-6 py-5 border-b border-black/8 flex items-center justify-between">
        <div>
          <Link to="/" className="font-serif text-lg text-[#1a1a1a] font-bold tracking-tight">Akar Systems</Link>
          <div className="flex items-center gap-1.5 mt-0.5">
            <Shield className="w-3 h-3 text-red-500" />
            <p className="text-[10px] font-bold uppercase tracking-widest text-red-500">Admin Panel</p>
          </div>
        </div>
        {onClose && (
          <button onClick={onClose} className="md:hidden p-1.5 rounded-lg hover:bg-black/5">
            <X className="w-4 h-4 text-[#1a1a1a]/50" />
          </button>
        )}
      </div>
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to || (item.to !== '/admin' && location.pathname.startsWith(item.to));
          return (
            <Link
              key={item.to}
              to={item.to}
              onClick={onClose}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
                isActive ? 'bg-[#1a1a1a] text-white' : 'text-[#1a1a1a]/60 hover:bg-black/5 hover:text-[#1a1a1a]'
              }`}
            >
              <item.icon className="w-4 h-4 shrink-0" />
              {item.label}
              {isActive && <ChevronRight className="w-3.5 h-3.5 ml-auto" />}
            </Link>
          );
        })}
      </nav>
      <div className="px-3 py-4 border-t border-black/8">
        <Link
          to="/portal"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-[#1a1a1a]/40 hover:text-[#1a1a1a]/70 hover:bg-black/5 transition-all"
        >
          <LogOut className="w-4 h-4 shrink-0" />
          Partner Portal
        </Link>
      </div>
    </div>
  );
}

export default function AdminLayout() {
  const { user, isLoadingAuth } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  if (isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#F0EDE8]">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-[#1a1a1a] rounded-full animate-spin" />
      </div>
    );
  }

  if (!user || user.role !== 'admin') {
    return <Navigate to="/portal" replace />;
  }

  return (
    <div className="flex min-h-screen bg-[#F8F6F2]">
      <aside className="hidden md:flex flex-col w-60 shrink-0 bg-white border-r border-black/8 fixed inset-y-0 left-0 z-30">
        <Sidebar />
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <aside className="relative w-64 bg-white h-full shadow-2xl">
            <Sidebar onClose={() => setMobileOpen(false)} />
          </aside>
        </div>
      )}

      <div className="flex-1 md:ml-60 flex flex-col min-h-screen">
        <header className="md:hidden sticky top-0 z-20 bg-white border-b border-black/8 px-4 py-3 flex items-center gap-3">
          <button onClick={() => setMobileOpen(true)} className="p-2 rounded-xl hover:bg-black/5">
            <Menu className="w-5 h-5 text-[#1a1a1a]/60" />
          </button>
          <div>
            <p className="font-serif text-base font-bold text-[#1a1a1a]">Admin Panel</p>
          </div>
        </header>
        <main className="flex-1"><Outlet /></main>
      </div>
    </div>
  );
}