import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Smartphone, Banknote, Building2, MapPin, ArrowLeft,
  Wrench, Truck, ClipboardCheck,
} from 'lucide-react';
import CaseStudyHero from '@/components/portfolio/CaseStudyHero';
import ProjectGallery from '@/components/portfolio/ProjectGallery';
import TechGrid from '@/components/portfolio/TechGrid';
import FlowSteps from '@/components/portfolio/FlowSteps';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-8% 0px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const modules = [
  {
    icon: Smartphone,
    name: 'SOA Mobile / Android',
    desc: 'Used by field engineers and technicians — Second Level Maintenance (SLM) and First Level Maintenance (FLM) teams — to report and track jobs in real time.',
  },
  {
    icon: Banknote,
    name: 'CIT Mobile / SAPRIVA BCA',
    desc: 'Integrated apps for cash-in-transit (CIT) operations and specific banking-partner workflows.',
  },
];

const tech = [
  { icon: Smartphone, title: 'SOA Mobile phase 2', desc: 'Akar Systems delivered SOA Mobile phase 2 — extending the Android application used by field teams.' },
  { icon: Wrench, title: 'FLM & SLM', desc: 'First and Second Level Maintenance teams report and track jobs in real time through SOA Mobile.' },
  { icon: Truck, title: 'CIT operations', desc: 'Cash-in-transit crews use CIT Mobile / SAPRIVA BCA for cash management workflows.' },
  { icon: ClipboardCheck, title: 'Field evidence', desc: 'Job progress, seal/segment verification, and field evidence are captured and tracked from the portal.' },
];

const flow = [
  { title: 'Assign', desc: 'A maintenance or cash-management job is assigned to a field team — FLM, SLM, or CIT.' },
  { title: 'Report', desc: 'Technicians capture and report job progress in real time through SOA Mobile on Android.' },
  { title: 'Track', desc: 'Operations track job status, seal/segment verification, and field evidence from the web portal.' },
  { title: 'Reconcile', desc: 'Cash-in-transit workflows reconcile through CIT Mobile / SAPRIVA BCA.' },
];

const profile = [
  { icon: Building2, label: 'Parent Group', value: 'PT. Swadharma Sarana Informatika (SSI) — part of Telkom Indonesia via TelkomMetra.' },
  { icon: MapPin, label: 'Coverage', value: 'Nationwide — ATM managed services and cash management across Indonesia.' },
];

const gallery = [
  'https://media.base44.com/images/public/69cc2ed917e94df8870cff9d/448b50811_IMG_4023.jpg',
  'https://media.base44.com/images/public/69cc2ed917e94df8870cff9d/cc0b30d43_IMG_1734.jpg',
  'https://media.base44.com/images/public/69cc2ed917e94df8870cff9d/51d5683c8_9225be45-cef8-4077-9070-365a39b7db61.jpg',
  'https://media.base44.com/images/public/69cc2ed917e94df8870cff9d/b3cc8b16f_IMG_1736.jpg',
];

const ACCENT = '#e53935';

export default function SSICaseStudy() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <CaseStudyHero
        tag="Client Work · Telkom Indonesia"
        title="SSI Operational Application (SOA)"
        category="Field Operations · Mobile + Web Portal"
        description="SOA is the internal mobile and web portal built by Akar Systems for PT. Swadharma Sarana Informatika (SSI) — a Telkom Indonesia company — powering field service, ATM maintenance, cash management, and technician tracking across Indonesia."
        url="https://www.ssi-soa.com/"
        urlLabel="Visit SSI SOA"
      />

      {/* What is SOA */}
      <section className="px-6 py-16 border-t border-white/8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <motion.p {...fadeUp(0)} className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#ef5350] mb-3">
              What is SOA
            </motion.p>
            <motion.h2 {...fadeUp(0.05)} className="font-serif text-3xl md:text-4xl text-white tracking-tight">
              SSI Operational Application.
            </motion.h2>
          </div>
          <div className="md:col-span-8">
            <motion.p {...fadeUp(0.1)} className="text-base text-white/60 leading-relaxed">
              SOA stands for <span className="text-white">SSI Operational Application</span> — the platform
              that manages daily field service tasks, ATM maintenance, cash management, and technician
              tracking for SSI's operations across Indonesia. It is the system of record for the teams
              that keep the country's ATM and cash infrastructure running.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Technical approach */}
      <section className="px-6 py-16 border-t border-white/8 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <motion.p {...fadeUp(0)} className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#ef5350] mb-3">
            Technical Approach
          </motion.p>
          <motion.h2 {...fadeUp(0.05)} className="font-serif text-3xl md:text-4xl text-white tracking-tight mb-4">
            A field-ops system for the teams that keep ATMs running.
          </motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-base text-white/55 max-w-2xl leading-relaxed mb-10">
            SOA was built as the internal system of record for SSI's field operations — the technicians,
            FLM/SLM teams, and cash-in-transit crews who maintain and replenish ATMs across Indonesia.
            Akar Systems delivered SOA Mobile phase 2, extending the Android application used in the field.
          </motion.p>
          <TechGrid items={tech} accent={ACCENT} />
        </div>
      </section>

      {/* Core modules */}
      <section className="px-6 py-16 border-t border-white/8">
        <div className="max-w-5xl mx-auto">
          <motion.p {...fadeUp(0)} className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 mb-3">
            Core Modules
          </motion.p>
          <motion.h2 {...fadeUp(0.05)} className="font-serif text-3xl md:text-4xl text-white tracking-tight mb-10">
            Built for the field.
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {modules.map((m, i) => (
              <motion.div
                key={m.name}
                {...fadeUp(i * 0.08)}
                className="group bg-white/[0.03] border border-white/8 rounded-2xl p-6 hover:border-[#e53935]/40 transition-colors flex gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#e53935]/15 border border-[#e53935]/25 flex items-center justify-center shrink-0">
                  <m.icon className="w-5 h-5 text-[#ef5350]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-white mb-1.5">{m.name}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product logic & flow */}
      <section className="px-6 py-16 border-t border-white/8 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <motion.p {...fadeUp(0)} className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 mb-3">
            Product Logic & Flow
          </motion.p>
          <motion.h2 {...fadeUp(0.05)} className="font-serif text-3xl md:text-4xl text-white tracking-tight mb-10">
            From job assignment to cash management.
          </motion.h2>
          <FlowSteps steps={flow} accent={ACCENT} />
        </div>
      </section>

      {/* Company profile */}
      <section className="px-6 py-16 border-t border-white/8">
        <div className="max-w-5xl mx-auto">
          <motion.p {...fadeUp(0)} className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 mb-3">
            Company Profile
          </motion.p>
          <motion.h2 {...fadeUp(0.05)} className="font-serif text-3xl md:text-4xl text-white tracking-tight mb-10">
            SSI by Telkom Indonesia.
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profile.map((p, i) => (
              <motion.div
                key={p.label}
                {...fadeUp(i * 0.08)}
                className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 flex gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <p.icon className="w-4 h-4 text-white/60" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-1.5">{p.label}</p>
                  <p className="text-sm text-white/65 leading-relaxed">{p.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.p {...fadeUp(0.15)} className="text-sm text-white/40 leading-relaxed mt-6 max-w-2xl">
            SSI specializes in ATM managed services, cash replenishment, first and second level
            maintenance, and cash management solutions — the operational backbone SOA was built to run.
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 py-16 border-t border-white/8 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <motion.p {...fadeUp(0)} className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 mb-3">
            Project Documentation
          </motion.p>
          <motion.h2 {...fadeUp(0.05)} className="font-serif text-3xl md:text-4xl text-white tracking-tight mb-10">
            Inside the build.
          </motion.h2>
          <ProjectGallery images={gallery} />
        </div>
      </section>

      {/* Closing */}
      <section className="px-6 py-20 border-t border-white/8 text-center">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to portfolio
        </Link>
      </section>
    </div>
  );
}