import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

const copy = {
  en: {
    badge1: '50+ Businesses Deployed',
    badge2: '3× Average Lead Increase',
    h1a: 'Your ads are working.',
    h1b: 'But your website is ',
    h1em: 'losing the leads.',
    sub: 'Akar Systems deploys lightning-fast websites, local SEO, and AI automation so no lead goes to waste.',
    cta1: 'Plug the Leaks',
    cta2: 'See How It Works',
  },
  id: {
    badge1: '50+ Bisnis Sudah Berjalan',
    badge2: '3× Rata-rata Peningkatan Lead',
    h1a: 'Iklan Anda sudah jalan.',
    h1b: 'Tapi websitenya ',
    h1em: 'gagal tangkep pelanggan.',
    sub: 'Akar Systems bangun website super cepat, SEO lokal, dan otomasi AI, supaya tidak ada satu pun lead yang terlewat.',
    cta1: 'Benahi Sekarang',
    cta2: 'Lihat Cara Kerjanya',
  },
};

const VIDEO_SRC =
  'https://media.base44.com/videos/public/69cc2ed917e94df8870cff9d/c428b0e72_gemini_generated_video_cffdda4b.mp4';
const VIDEO_POSTER =
  'https://media.base44.com/images/public/69cc2ed917e94df8870cff9d/952ed5abb_generated_e4a3c252.jpg';

const actionBase =
  'hero-action inline-flex items-center justify-center gap-[11px] min-h-[44px] px-[19px] rounded-full text-[13px] font-semibold tracking-[0.01em] cursor-pointer hover:-translate-y-px active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[#9ce0aa]';

const pillBase =
  'inline-flex items-center gap-[9px] px-[13px] py-[9px] rounded-full border border-[rgba(226,241,229,0.2)] bg-[rgba(9,23,15,0.58)] text-[12px] leading-[1.25] tracking-[0.025em] backdrop-blur-[8px]';

export default function HeroSection() {
  const { lang } = useLang();
  const c = copy[lang];

  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.2, 0.75, 0.25, 1] }}
      className="relative isolate flex flex-col justify-between overflow-hidden min-h-screen bg-[#08120d] border-b border-[#25372c] text-[#f4f6f2] px-6 md:px-[52px] pt-28 md:pt-32 pb-10"
    >
      {/* Looping footage — muted, aspect-ratio safe cover crop */}
      <video
        className="hero-footage absolute inset-0 w-full h-full object-cover object-[center_48%] z-[-2] pointer-events-none"
        src={VIDEO_SRC}
        poster={VIDEO_POSTER}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* Readability veil */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[-1] pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, rgba(5,14,9,0.92) 0%, rgba(5,14,9,0.78) 44%, rgba(5,14,9,0.34) 100%), linear-gradient(0deg, rgba(4,12,8,0.75) 0%, rgba(4,12,8,0) 45%, rgba(4,12,8,0.32) 100%)',
        }}
      />

      {/* Proof pills */}
      <div className="flex flex-wrap items-center gap-[10px]">
        <span className={`${pillBase} text-[#e8eee9]`}>{c.badge1}</span>
        <span className={`${pillBase} text-[#c0e5c9]`}>
          <span className="w-[7px] h-[7px] rounded-full bg-[#76d28e] shadow-[0_0_12px_rgba(118,210,142,0.8)] shrink-0" />
          {c.badge2}
        </span>
      </div>

      {/* Copy */}
      <div className="w-full max-w-[690px] flex flex-col gap-4 my-12 md:my-8">
        <h1 className="font-serif font-medium text-[#f5f6f2] text-[34px] sm:text-[44px] md:text-[53px] leading-[1.04] tracking-[-0.045em]">
          {c.h1a}
          <br />
          {c.h1b}
          <em className="not-italic text-[#8ed29d]">{c.h1em}</em>
        </h1>

        <p className="max-w-[570px] text-[15px] leading-[1.65] tracking-[0.005em] text-[rgba(239,244,239,0.77)]">
          {c.sub}
        </p>

        <div className="flex flex-wrap items-center gap-3 mt-[5px]">
          <Link
            to="/strategy"
            className={`${actionBase} bg-[#e5f1e7] text-[#102016] border border-[#e5f1e7] shadow-[0_8px_22px_rgba(0,0,0,0.16)] hover:bg-[#cde8d2] hover:shadow-[0_10px_24px_rgba(0,0,0,0.25)]`}
          >
            {c.cta1}
            <ArrowRight className="w-[15px] h-[15px]" />
          </Link>
          <Link
            to="/infrastructure"
            className={`${actionBase} text-[#f6f8f4] border border-[rgba(236,245,237,0.36)] bg-[rgba(7,18,11,0.34)] hover:bg-[rgba(225,241,227,0.12)] hover:border-[rgba(236,245,237,0.65)]`}
          >
            {c.cta2}
          </Link>
        </div>
      </div>

      {/* Footer rule */}
      <div className="flex items-center justify-between">
        <span className="h-px w-[74px] bg-[linear-gradient(90deg,#8ed29d,rgba(142,210,157,0))]" />
      </div>
    </motion.section>
  );
}