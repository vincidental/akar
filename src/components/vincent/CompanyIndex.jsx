import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';

const experience = [
  { name: 'McEasy', role: 'Corporate Strategy → CEO Office', period: '2024 – 2025' },
  { name: 'Pensieve Technology', role: 'CEO Office Analyst · B2G', period: '2023' },
  { name: 'KPMG', role: 'Management Consulting Intern', period: 'Q2 2023' },
  { name: 'Deloitte SEA', role: 'Subject Matter Expert', period: '2024' },
  { name: 'Astro', role: 'Associate Product Manager Intern', period: 'Early 2023' },
  { name: 'PT Perkasa Surya Prima', role: 'Special Projects Manager', period: '2019 – 2021' },
];

const clients = [
  { name: 'Telkomsel', logo: 'https://www.uncen.ac.id/wp-content/uploads/logo-telkomsel.png' },
  { name: "Livin' by Mandiri", logo: 'https://images.seeklogo.com/logo-png/67/1/livin-mandiri-logo-png_seeklogo-674745.png' },
];

function WordCell({ name, role, period, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      className="bg-white border border-[#1a1a1a]/8 rounded-xl px-6 py-5 flex flex-col justify-between min-h-[124px] hover:border-[#2a7a4f]/30 transition-colors"
    >
      <p className="font-sans text-base font-semibold text-[#1a1a1a] tracking-tight">{name}</p>
      <div>
        <p className="text-xs text-[#1a1a1a]/50 leading-snug">{role}</p>
        <p className="font-tech text-[10px] text-[#1a1a1a]/35 mt-1.5">{period}</p>
      </div>
    </motion.div>
  );
}

function LogoCell({ name, logo, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      className="bg-white border border-[#1a1a1a]/8 rounded-xl px-6 py-7 flex items-center justify-center min-h-[124px] hover:border-[#2a7a4f]/30 transition-colors"
    >
      <img
        src={logo}
        alt={name}
        loading="lazy"
        className="max-h-9 max-w-[150px] object-contain opacity-55 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
      />
    </motion.div>
  );
}

export default function CompanyIndex() {
  return (
    <section className="px-6 py-20 md:py-28 border-t border-[#1a1a1a]/8">
      <div className="max-w-5xl mx-auto">
        <SectionLabel
          num="01 — EXPERIENCE"
          title="Where I've worked"
          kicker="Employment and consulting roles, listed separately from client work below."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {experience.map((c, i) => (
            <WordCell key={c.name} {...c} i={i} />
          ))}
        </div>

        <div className="mt-16">
          <SectionLabel
            num="02 — CLIENT WORK"
            title="Selected clients, via Akar Systems"
            kicker="Companies I've built for as founder of Akar Systems. These are clients, not employers."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {clients.map((c, i) => (
              <LogoCell key={c.name} {...c} i={i} />
            ))}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.5, delay: clients.length * 0.05 }}
              className="bg-white border border-[#1a1a1a]/8 rounded-xl px-6 py-5 flex flex-col justify-center min-h-[124px] hover:border-[#2a7a4f]/30 transition-colors"
            >
              <p className="font-sans text-sm font-medium text-[#1a1a1a]/70 leading-snug">
                and enterprise &amp; SME clients across Indonesia
              </p>
              <p className="font-tech text-[10px] text-[#1a1a1a]/35 mt-2">via Akar Systems</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}