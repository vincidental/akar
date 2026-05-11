import { Outlet, Link, useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '@/lib/AuthContext';
import {
  LayoutDashboard, Users, DollarSign, BookOpen,
  Package, FileText, UserCircle, LogOut, Menu, X, ChevronRight
} from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', to: '/portal' },
  { icon: Users, label: 'My Leads', to: '/portal/leads' },
  { icon: DollarSign, label: 'Earnings', to: '/portal/earnings' },
  { icon: BookOpen, label: 'Sales Playbook', to: '/portal/playbook' },
  { icon: Package, label: 'Service Catalog', to: '/portal/services' },
  { icon: FileText, label: 'Documents', to: '/portal/documents' },
  { icon: UserCircle, label: 'My Profile', to: '/portal/profile' },
];

function Sidebar({ onClose }) {
  const location = useLocation();

  return (
    <div className="flex flex-col h-full">
      {/* Brand */}
      <div className="px-6 py-5 border-b border-black/8 flex items-center justify-between">
        <div>
          <Link to="/" className="font-serif text-lg text-[#1a1a1a] font-bold tracking-tight">Akar Systems</Link>
          <p className="text-[10px] font-bold uppercase tracking-widest text-green-600 mt-0.5">Partner Portal</p>
        </div>
        {onClose && (
          <button onClick={onClose} className="md:hidden p-1.5 rounded-lg hover:bg-black/5 transition-colors">
            <X className="w-4 h-4 text-[#1a1a1a]/50" />
          </button>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to || (item.to !== '/portal' && location.pathname.startsWith(item.to));
          return (
            <Link
              key={item.to}
              to={item.to}
              onClick={onClose}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 group ${
                isActive
                  ? 'bg-green-600 text-white shadow-sm shadow-green-500/20'
                  : 'text-[#1a1a1a]/60 hover:bg-black/5 hover:text-[#1a1a1a]'
              }`}
            >
              <item.icon className="w-4 h-4 shrink-0" />
              {item.label}
              {isActive && <ChevronRight className="w-3.5 h-3.5 ml-auto" />}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-3 py-4 border-t border-black/8">
        <Link
          to="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-[#1a1a1a]/40 hover:text-[#1a1a1a]/70 hover:bg-black/5 transition-all duration-150"
        >
          <LogOut className="w-4 h-4 shrink-0" />
          Back to Main Site
        </Link>
      </div>
    </div>
  );
}

export default function PortalLayout() {
  const { user, isLoadingAuth } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  if (isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#F0EDE8]">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-green-600 rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/portal/login" replace />;
  }

  return (
    <div className="flex min-h-screen bg-[#F8F6F2]">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-60 shrink-0 bg-white border-r border-black/8 fixed inset-y-0 left-0 z-30">
        <Sidebar />
      </aside>

      {/* Mobile Sidebar Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <aside className="relative w-64 bg-white h-full shadow-2xl">
            <Sidebar onClose={() => setMobileOpen(false)} />
          </aside>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 md:ml-60 flex flex-col min-h-screen">
        {/* Mobile topbar */}
        <header className="md:hidden sticky top-0 z-20 bg-white border-b border-black/8 px-4 py-3 flex items-center gap-3">
          <button onClick={() => setMobileOpen(true)} className="p-2 rounded-xl hover:bg-black/5 transition-colors">
            <Menu className="w-5 h-5 text-[#1a1a1a]/60" />
          </button>
          <div>
            <p className="font-serif text-base font-bold text-[#1a1a1a]">Akar Systems</p>
            <p className="text-[9px] font-bold uppercase tracking-widest text-green-600 leading-none">Partner Portal</p>
          </div>
        </header>

        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}