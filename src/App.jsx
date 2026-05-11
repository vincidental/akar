import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import { LanguageProvider } from '@/lib/LanguageContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import Layout from '@/components/Layout';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import Infrastructure from '@/pages/Infrastructure';
import Philosophy from '@/pages/Philosophy';
import Strategy from '@/pages/Strategy';
import Launch from '@/pages/Launch';
import LaunchID from '@/pages/LaunchID';
import Portfolio from '@/pages/Portfolio';
import Partners from '@/pages/Partners';
import PortalLayout from '@/components/portal/PortalLayout';
import PortalLogin from '@/pages/portal/PortalLogin';
import PortalDashboard from '@/pages/portal/PortalDashboard';
import PortalLeads from '@/pages/portal/PortalLeads';
import PortalLeadForm from '@/pages/portal/PortalLeadForm';
import PortalEarnings from '@/pages/portal/PortalEarnings';
import PortalPlaybook from '@/pages/portal/PortalPlaybook';
import PortalServices from '@/pages/portal/PortalServices';
import PortalProfile from '@/pages/portal/PortalProfile';
import AdminLayout from '@/components/portal/AdminLayout';
import AdminOverview from '@/pages/admin/AdminOverview';
import AdminLeads from '@/pages/admin/AdminLeads';
import AdminApplications from '@/pages/admin/AdminApplications';
import Apply from '@/pages/Apply';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      {/* ── Public Marketing Site ── */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="/launch" element={<Launch />} />
        <Route path="/id" element={<LaunchID />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/partners" element={<Partners />} />
      </Route>

      {/* ── Partner Portal (auth-gated, separate layout) ── */}
      <Route path="/portal/login" element={<PortalLogin />} />
      <Route path="/portal" element={<PortalLayout />}>
        <Route index element={<PortalDashboard />} />
        <Route path="leads" element={<PortalLeads />} />
        <Route path="leads/new" element={<PortalLeadForm />} />
        <Route path="earnings" element={<PortalEarnings />} />
        <Route path="playbook" element={<PortalPlaybook />} />
        <Route path="services" element={<PortalServices />} />
        <Route path="profile" element={<PortalProfile />} />
      </Route>

      {/* ── Admin Panel (admin-only) ── */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminOverview />} />
        <Route path="leads" element={<AdminLeads />} />
        <Route path="applications" element={<AdminApplications />} />
      </Route>

      {/* ── Partner Application ── */}
      <Route path="/apply" element={<Apply />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
      </LanguageProvider>
    </AuthProvider>
  )
}

export default App