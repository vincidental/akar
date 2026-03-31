import { motion } from 'framer-motion';

const logos = [
  'Microsoft', 'BCG', 'Shopify', 'Bosch', 'Yale', 'Harvard',
  'University of Arizona', 'Deloitte', 'PwC', 'KPMG',
];

export default function AuthorityMarquee() {
  return (
    <section className="py-12 border-y border-slate-100 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 text-center">
          Infrastructure Engineered by Former Operators From
        </p>
      </div>
      <div className="relative">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="inline-flex items-center px-6 py-2 text-slate-400 font-bold text-sm tracking-wide uppercase hover:text-slate-600 transition-colors duration-200 shrink-0"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}