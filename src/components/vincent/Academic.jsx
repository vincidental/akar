import SectionLabel from './SectionLabel';

const items = [
  {
    tag: 'Top Honors',
    title: 'RevoU',
    body: 'Scored 100/100 in a 6-month intensive PM bootcamp (<10% acceptance rate). Perfect score across 28 skill set rubrics. Awarded "Most Best Assignments" out of 50+ cohort.',
  },
  {
    tag: 'YC',
    title: 'Y Combinator Startup School',
    body: 'Aspiring Founders Program.',
  },
  {
    tag: 'IBM',
    title: 'Hacktiv8 Indonesia',
    body: 'Data Classification and Summarization (IBM Official Student Developer Initiative).',
  },
  {
    tag: 'BSc',
    title: 'Universitas Pelita Harapan',
    body: 'BSc Integrated Marketing Communications (Conducted concurrently in parallel with all corporate roles).',
  },
];

function Card({ item }) {
  return (
    <div className="w-[300px] shrink-0 rounded-2xl bg-white/[0.025] border border-white/[0.07] p-6 backdrop-blur-sm hover:border-[#00E5A0]/25 transition-colors">
      <span className="font-tech text-[10px] tracking-widest text-[#00E5A0] mb-4 block">{item.tag}</span>
      <h3 className="font-sans text-lg font-semibold text-[#f0f0f0] mb-2">{item.title}</h3>
      <p className="text-sm text-[#9a9a9a] leading-relaxed">{item.body}</p>
    </div>
  );
}

export default function Academic() {
  const loop = [...items, ...items];
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel num="06" title="The Academic Anomaly" />
      </div>
      <div className="relative">
        <div className="flex gap-4 animate-marquee w-max hover:[animation-play-state:paused]">
          {loop.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
        {/* edge fades */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}