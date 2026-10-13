import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';

const trackLabels = {
  corp: 'Corporate & Consulting',
  vent: 'Ventures',
  edu: 'Education & Upskilling',
};

const yearRows = [
  {
    year: '2019',
    cells: {
      corp: [
        { title: 'PT Perkasa Surya Prima', range: '2019 – 2021', detail: 'Special Projects Manager. Grew equipment-parts revenue 400%.' },
        { title: 'Minor Figures', range: '2020 – 2021', detail: 'Remote Jr. Media Buyer. Developed and negotiated media-buying strategies across health media outlets.' },
      ],
      vent: [{ title: 'Shopify private-label brands', range: '2019 – 2021', detail: 'GirlChandise & Swire Audio, US-market dropshipping. $100+/day.' }],
      edu: [{ title: 'Universitas Pelita Harapan', range: 'Ongoing', detail: 'BSc, Integrated Marketing Communications. Concurrent with all roles.' }],
    },
  },
  {
    year: '2021',
    cells: {
      corp: [],
      vent: [{ title: 'Flexilis Tiles', range: '2021', detail: 'International trade; sole chemical supplier to a major rubber-flooring company. $100K+ in Year 1.' }],
      edu: [],
    },
  },
  {
    year: '2022',
    cells: {
      corp: [
        { title: 'Astro', range: 'Sep 2022 – Jan 2023', detail: "Associate PM (Labs), Discovery Team. Revamped the Discovery Channel for SEA's premier quick-commerce app — introduced an ML-like algorithm for frequently shopped items. Presented directly to Head of Product." },
      ],
      vent: [],
      edu: [{ title: 'RevoU', range: '2022 – 2023', detail: 'Full Stack PM. Top Honors, 100/100 across 28 rubrics.' }],
    },
  },
  {
    year: '2023',
    cells: {
      corp: [
        { title: 'KPMG', range: 'Jan – Aug 2023', detail: 'Management Consultant, Business Transformation. Fastest return-offer track in division history. Led full client-inception phases across IT, urban planning, and ESG.' },
        { title: 'Pensieve Technology', range: 'Jul – Dec 2023', detail: "CEO Office Analyst, Defence & Intelligence Office. Served in a strategic think tank alongside the Philippine President's OPS Undersecretary and Indonesia's Coordinating Minister Pak Luhut. Sole analyst to stand up a new portfolio company — certified as Indonesia's 10th licensed e-sign provider." },
        { title: 'McEasy', range: 'Nov 2023 – Nov 2024', detail: 'Strategy & Operations Manager, CEO Office. Launched and scaled a new business unit (SPS). Managed a 20+ person team end-to-end. 16× growth in 3.5 months; led a P0 initiative that cut churn 30%.' },
      ],
      vent: [],
      edu: [
        { title: 'Y Combinator', range: '2023', detail: 'Startup School — Aspiring Founders.' },
        { title: 'Siemens Professional Education', range: '2023', detail: 'AI Data & Process Analysis (Germany).' },
        { title: 'Microsoft', range: '2023', detail: 'AI Fundamentals, Azure AI-900.' },
        { title: 'Hacktiv8 Indonesia', range: '2023', detail: 'Data Classification (IBM initiative).' },
      ],
    },
  },
  {
    year: '2024',
    cells: {
      corp: [
        { title: 'Deloitte SEA', range: 'Jul 2024 – Aug 2025', detail: 'Subject Matter Expert — the youngest SME engaged by Deloitte SEA. Advised on the FMS industry across Indonesia and Southeast Asia.', tag: 'Concurrent' },
        { title: 'Peeba × GetFound', range: 'Nov 2024 – Oct 2025', detail: 'Founding Chief of Staff to Kevin Cho (YC W23, Forbes 30u30). Drove elite growth-consultancy initiatives.' },
      ],
      vent: [],
      edu: [],
    },
  },
  {
    year: '2025',
    cells: {
      corp: [
        { title: 'Ruangguru', range: 'Oct 2025 – Sep 2026', detail: "Chief of Staff. Co-piloted executive operations alongside Belva (CEO) and Iman (COO) at SEA's largest EdTech — >22M users, $150M Series C, Forbes 30u30." },
      ],
      vent: [],
      edu: [],
    },
  },
  {
    year: 'Present',
    cells: {
      corp: [
        { title: 'Akar Systems', range: 'Oct 2026 – Present', detail: 'Founder & Systems Architect. Architecting enterprise AI workflows, digital infrastructure, and operational automations. Secured two state-owned enterprise clients (Bank Mandiri & Telkom Indonesia) in the first quarter.' },
      ],
      vent: [{ title: 'Akar Systems', range: 'Present', detail: 'Founder. Digital infrastructure agency serving enterprise & SME clients.' }],
      edu: [],
    },
  },
];

function Entry({ e }) {
  return (
    <div className="bg-white border border-[#1a1a1a]/8 rounded-lg px-4 py-3 hover:border-[#2a7a4f]/30 transition-colors">
      <div className="flex items-start justify-between gap-2">
        <p className="font-sans text-sm font-semibold text-[#1a1a1a] leading-snug">{e.title}</p>
        {e.tag && (
          <span className="shrink-0 mt-0.5 inline-flex items-center text-[9px] font-tech font-semibold uppercase tracking-[0.15em] text-[#2a7a4f] border border-[#2a7a4f]/30 rounded-full px-2 py-0.5">
            {e.tag}
          </span>
        )}
      </div>
      <p className="font-tech text-[10px] text-[#2a7a4f] mt-1">{e.range}</p>
      <p className="text-xs text-[#1a1a1a]/55 leading-relaxed mt-1.5">{e.detail}</p>
    </div>
  );
}

function Cell({ entries }) {
  if (!entries || entries.length === 0) return <div />;
  return (
    <div className="space-y-2.5">
      {entries.map((e, i) => (
        <Entry key={i} e={e} />
      ))}
    </div>
  );
}

function YearRow({ row }) {
  return (
    <>
      <div className="relative pt-5 border-t border-l border-dotted border-t-[#1a1a1a]/15 border-l-[#1a1a1a]/25">
        <span className="absolute -left-[5px] top-7 w-2 h-2 rounded-full bg-[#2a7a4f] ring-[3px] ring-[#EFECE6]" />
        <p className="font-tech text-xs font-semibold text-[#1a1a1a]/60">{row.year}</p>
      </div>
      <div className="pt-5 border-t border-dotted border-[#1a1a1a]/15">
        <Cell entries={row.cells.corp} />
      </div>
      <div className="pt-5 border-t border-dotted border-[#1a1a1a]/15">
        <Cell entries={row.cells.vent} />
      </div>
      <div className="pt-5 border-t border-dotted border-[#1a1a1a]/15">
        <Cell entries={row.cells.edu} />
      </div>
    </>
  );
}

function MobileTracks() {
  return (
    <div className="md:hidden space-y-7">
      {yearRows.map((row) => {
        const keys = ['corp', 'vent', 'edu'].filter((k) => row.cells[k] && row.cells[k].length > 0);
        if (keys.length === 0) return null;
        return (
          <div key={row.year} className="relative border-l border-dotted border-[#1a1a1a]/25 pl-5">
            <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-[#2a7a4f] ring-[3px] ring-[#EFECE6]" />
            <p className="font-tech text-sm font-semibold text-[#1a1a1a]/60 mb-3">{row.year}</p>
            <div className="space-y-4">
              {keys.map((k) => (
                <div key={k}>
                  <p className="font-tech text-[10px] tracking-[0.2em] text-[#2a7a4f] mb-2">
                    {trackLabels[k].toUpperCase()}
                  </p>
                  <div className="space-y-2">
                    {row.cells[k].map((e, i) => (
                      <Entry key={i} e={e} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function ParallelTracks() {
  return (
    <section className="px-6 py-20 md:py-28 border-t border-[#1a1a1a]/8 bg-[#EFECE6]">
      <div className="max-w-5xl mx-auto">
        <SectionLabel
          num="03 — THE PARALLEL TIMELINE"
          title="Three tracks, running concurrently"
          kicker="These tracks ran at the same time. I completed my BSc at Universitas Pelita Harapan without pausing my studies for any of these roles — none yielded college credit, and none required time off. The overlap is the point: it's how this range of experience fits into 25 years."
        />

        {/* Desktop: synchronized grid */}
        <div className="hidden md:grid grid-cols-[84px_1fr_1fr_1fr] gap-x-5">
          <div className="pb-4" />
          <div className="pb-4">
            <p className="font-tech text-[10px] tracking-[0.2em] text-[#2a7a4f]">CORPORATE & CONSULTING</p>
          </div>
          <div className="pb-4">
            <p className="font-tech text-[10px] tracking-[0.2em] text-[#2a7a4f]">VENTURES</p>
          </div>
          <div className="pb-4">
            <p className="font-tech text-[10px] tracking-[0.2em] text-[#2a7a4f]">EDUCATION & UPSKILLING</p>
          </div>

          {yearRows.map((row) => (
            <YearRow key={row.year} row={row} />
          ))}
        </div>

        {/* Mobile: stacked by year */}
        <MobileTracks />
      </div>
    </section>
  );
}