import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';

const experience = [
  { name: 'McEasy', logo: 'https://www.mceasy.com/wp-content/uploads/2024/03/McEasy-Logo1.png', role: 'Corporate Strategy → CEO Office', period: '2024 – 2025' },
  { name: 'Pensieve Technology', logo: 'https://image.pitchbook.com/6Zi3VcKw7LBoEUZymUPeTuUzkFU1643788273599_200x200', role: 'CEO Office Analyst · B2G', period: '2023' },
  { name: 'KPMG', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUS0tag84nvmI5geX0vvDz7_e99OhDzwqosGgf76LAHA&s=10', role: 'Management Consulting Intern', period: 'Q2 2023' },
  { name: 'Deloitte SEA', logo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/Logo_of_Deloitte.svg/3840px-Logo_of_Deloitte.svg.png', role: 'Subject Matter Expert', period: '2024' },
  { name: 'Astro', logo: 'https://storage.googleapis.com/astro-site/karir/revamp/airo-delivery-3d.png', role: 'Associate Product Manager Intern', period: 'Early 2023' },
  { name: 'PT Perkasa Surya Prima', logo: 'https://images.seeklogo.com/logo-png/38/2/psp-investments-logo-png_seeklogo-380392.png', role: 'Special Projects Manager', period: '2019 – 2021' },
];

const clients = [
  { name: 'Telkomsel', logo: 'https://img.maxsi.id/assets/logo-telkomsel-baru.DYhv_uL8_1mDBsA.webp' },
  { name: "Livin' by Mandiri", logo: 'https://wp.logos-download.com/wp-content/uploads/2024/01/Livin_by_Mandiri_Logo.png?dl' },
  { name: 'Ruang Guru', logo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/Ruang_Guru_logo.svg/1280px-Ruang_Guru_logo.svg.png' },
  { name: 'Foom', logo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/Logo_foom.webp/1280px-Logo_foom.webp' },
  { name: 'IndoTrading', logo: 'https://www.growtechindonesia.com/wp-content/uploads/2026/05/INDOTRADING-logo.png' },
  { name: 'Malindo Feedmill', logo: 'https://www.malindofeedmill.com/wp-content/uploads/2022/04/Logo-Malindo-Small-75.png' },
  { name: 'Sunnygold', logo: 'https://www.matari-ad.com/wp-content/uploads/2017/09/sunnygold-logo.png' },
  { name: 'TP-Link', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Tp-Link_logo_2016.png' },
];

function ExpCell({ name, logo, role, period, i }) {
  const [err, setErr] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      className="bg-white border border-[#1a1a1a]/8 rounded-xl px-6 py-5 flex flex-col min-h-[152px] hover:border-[#2a7a4f]/30 transition-colors"
    >
      <div className="flex-1 flex items-center min-h-[44px] mb-3">
        {!err && logo ? (
          <img
            src={logo}
            alt={name}
            loading="lazy"
            onError={() => setErr(true)}
            className="max-h-10 max-w-[160px] object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
          />
        ) : (
          <p className="font-sans text-base font-semibold text-[#1a1a1a] tracking-tight">{name}</p>
        )}
      </div>
      <p className="text-xs text-[#1a1a1a]/50 leading-snug">{role}</p>
      <p className="font-tech text-[10px] text-[#1a1a1a]/35 mt-1.5">{period}</p>
    </motion.div>
  );
}

function ClientCell({ name, logo, i }) {
  const [err, setErr] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      className="bg-white border border-[#1a1a1a]/8 rounded-xl px-6 py-7 flex items-center justify-center min-h-[124px] hover:border-[#2a7a4f]/30 transition-colors"
    >
      {!err && logo ? (
        <img
          src={logo}
          alt={name}
          loading="lazy"
          onError={() => setErr(true)}
          className="max-h-9 max-w-[150px] object-contain opacity-55 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
        />
      ) : (
        <p className="font-sans text-sm font-semibold text-[#1a1a1a]/70">{name}</p>
      )}
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
            <ExpCell key={c.name} {...c} i={i} />
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
              <ClientCell key={c.name} {...c} i={i} />
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