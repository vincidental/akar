import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import TiltCard from './TiltCard';
import GrowthChart from './GrowthChart';
import SectionLabel from './SectionLabel';

const cardBase =
  'rounded-2xl bg-white/[0.025] border border-white/[0.07] backdrop-blur-sm transition-colors duration-500 group-hover:border-[#00E5A0]/25';

export default function BentoGrid() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <SectionLabel num="03" title="The Highlight Reel" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[minmax(300px,auto)]">
          {/* Card 1 — McEasy (wide) */}
          <TiltCard className={`md:col-span-2 ${cardBase}`}>
            <div className="p-6 md:p-7 h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="font-tech text-[10px] tracking-widest text-[#6a6a6a]">01 / OPERATIONS</span>
                <span className="font-tech text-[11px] text-[#00E5A0]">16x</span>
              </div>
              <h3 className="font-sans text-xl md:text-2xl font-semibold text-[#f0f0f0] mb-3">
                Operations &amp; Revenue Scaling
              </h3>
              <p className="text-sm text-[#9a9a9a] leading-relaxed mb-5">
                Ideated and scaled a new business unit from a blank spreadsheet to 16x revenue in
                just 3.5 months. Built the post-sales function from the ground up, cutting churn by
                30% in half the projected timeline. Managed pricing, sales, and fulfillment for a
                commercial team of 20+.
              </p>
              <div className="mt-auto">
                <GrowthChart />
              </div>
            </div>
          </TiltCard>

          {/* Card 2 — KPMG (square) */}
          <TiltCard className={cardBase}>
            <div className="p-6 md:p-7 h-full flex flex-col">
              <span className="font-tech text-[10px] tracking-widest text-[#6a6a6a] mb-4">02 / CONSULTING</span>
              <h3 className="font-sans text-xl md:text-2xl font-semibold text-[#f0f0f0] mb-3">
                KPMG Management Consulting
              </h3>
              <p className="text-sm text-[#9a9a9a] leading-relaxed">
                Secured the fastest return-offer track in division history as a second-year
                university student, handling full client inception phases and business
                transformation strategy.
              </p>
              <div className="mt-auto pt-5 flex items-center gap-2.5">
                <BadgeCheck className="w-5 h-5 text-[#00E5A0] drop-shadow-[0_0_6px_rgba(0,229,160,0.7)]" />
                <span className="font-sans text-sm font-semibold tracking-[0.15em] text-[#e0e0e0]">
                  SOPHOMORE YEAR
                </span>
              </div>
            </div>
          </TiltCard>

          {/* Card 3 — Deloitte (square) */}
          <TiltCard className={cardBase}>
            <div className="p-6 md:p-7 h-full flex flex-col">
              <span className="font-tech text-[10px] tracking-widest text-[#6a6a6a] mb-4">03 / SME</span>
              <h3 className="font-sans text-xl md:text-2xl font-semibold text-[#f0f0f0] mb-3">
                Deloitte SEA
              </h3>
              <p className="text-sm text-[#9a9a9a] leading-relaxed">
                Engaged as the youngest Subject Matter Expert, providing strategic market insights
                on the Indonesian and SEA logistics tech sector.
              </p>
            </div>
          </TiltCard>

          {/* Card 4 — Bootstrapped (tall) */}
          <TiltCard className={`md:col-span-1 md:row-span-2 ${cardBase}`}>
            <div className="p-6 md:p-7 h-full flex flex-col">
              <span className="font-tech text-[10px] tracking-widest text-[#6a6a6a] mb-4">04 / ENTREPRENEURSHIP</span>
              <h3 className="font-sans text-xl md:text-2xl font-semibold text-[#f0f0f0] mb-4">
                Bootstrapped Ventures
              </h3>
              <p className="text-sm text-[#9a9a9a] leading-relaxed mb-5">
                Built <span className="text-[#e0e0e0] font-medium">Flexilis Tiles</span>, an
                international trade business, achieving $100K+ revenue in Year 1 as the sole
                chemical supplier for one of Indonesia's largest rubber flooring companies.
              </p>
              <p className="text-sm text-[#9a9a9a] leading-relaxed mt-auto">
                Scaled US-market Shopify dropshipping brands (GirlChandise, Swire Audio) managing
                end-to-end design, marketing, and overseas supplier logistics to generate
                $100+/day.
              </p>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}