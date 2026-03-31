import { motion } from 'framer-motion';

const logos = [
  'Auto Premium Detailing', 'Dental Clinic Jakarta', 'Architecture Studio Bali',
  'English Tutor Bekasi', 'PT. MLI Logistics', 'Resto Group Jakarta',
  'Klinik Estetika', 'Property Consultant',
];

export default function AuthorityMarquee() {
  return (
    <section className="py-10 border-y border-black/8 bg-[#E8E4DC] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 text-center">
          Trusted by ambitious local businesses across Indonesia
        </p>
      </div>
      <div className="relative">
        <div className="flex gap-10 animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <span
              key={i}
              className="inline-flex items-center text-[#1a1a1a]/35 font-medium text-sm tracking-wide shrink-0"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}