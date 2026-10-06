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
      corp: [{ title: 'PT Perkasa Surya Prima', range: '2019 – 2021', detail: 'Special Projects Manager. Grew equipment-parts revenue 400%.' }],
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
      corp: [],
      vent: [],
      edu: [{ title: 'RevoU', range: '2022 – 2023', detail: 'Full Stack PM. Top Honors, 100/100 across 28 rubrics.' }],
    },
  },
  {
    year: '2023',
    cells: {
      corp: [
        { title: 'Astro', range: 'Early 2023', detail: 'Associate PM Intern in SEA quick-commerce.' },
        { title: 'KPMG', range: 'Q2 2023', detail: 'Management Consulting Intern. Fastest return-offer track as a sophomore.' },
        { title: 'Pensieve Technology', range: '2023', detail: "CEO Office Analyst, B2G. Stood up Indonesia's 10th licensed e-sign provider." },
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
        { title: 'Deloitte SEA', range: '2024', detail: 'Subject Matter Expert on Indonesian & SEA logistics tech.' },
        { title: 'McEasy', range: '2024 – 2025', detail: 'Corporate Strategy → CEO Office. 16× revenue on a new unit; rebuilt CRM, cut churn 30%.' },
      ],
      vent: [],
      edu: [],
    },
  },
  {
    year: 'Present',
    cells: {
      corp: [],
      vent: [{ title: 'Akar Systems', range: 'Present', detail: 'Founder. Digital infrastructure agency serving enterprise & SME clients.' }],
      edu: [],
    },
  },
];

function Entry({ e }) {
  return (
    <div className="bg-white border border-[#1a1a1a]/8 rounded-lg px-4 py-3 hover:border-[#2a7a4f]/30 transition-colors">
      <p className="font-sans text-sm font-semibold text-[#1a1a1a] leading-snug">{e.title}</p>
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