import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NOTION_URL = 'https://vincentius.notion.site/Vincentius-Theodore-6a4026cfae8543a986910a73afa37414';

export default function Closing() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl border border-white/[0.08] bg-white/[0.02] p-10 md:p-16 text-center overflow-hidden"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ boxShadow: '0 0 90px -20px rgba(0,229,160,0.22) inset' }}
          />
          <p className="font-tech text-[10px] tracking-[0.3em] text-[#00E5A0] mb-6">THE CLOSING PROTOCOL</p>
          <h2 className="font-sans text-4xl md:text-6xl font-semibold tracking-[-0.03em] text-[#f0f0f0] mb-6">
            Ready to scale.
          </h2>
          <p className="text-base text-[#9a9a9a] leading-relaxed max-w-xl mx-auto mb-10">
            I am currently open to remote full-time engagements, fractional executive roles, and
            applied AI consulting. If your company requires a builder who operates with extreme
            ownership, understands the P&amp;L, and builds the tech to scale it, we should talk.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:vtheodore7@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#00E5A0] text-[#050505] font-semibold text-sm hover:shadow-[0_0_30px_rgba(0,229,160,0.5)] transition-shadow"
            >
              Initialize Contact →
            </a>
            <a
              href="https://wa.me/6281809006757"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-[#f0f0f0] font-medium text-sm hover:border-[#00E5A0]/40 hover:bg-white/5 transition-all"
            >
              WhatsApp
            </a>
          </div>
          <p className="font-tech text-[10px] text-[#6a6a6a] mt-6">
            vtheodore7@gmail.com // +62 81809006757
          </p>
        </motion.div>

        {/* footer links */}
        <div className="mt-16 flex flex-col items-center gap-6">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-tech text-[11px]">
            <a
              href="https://www.linkedin.com/in/vincentiustheodore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6a6a6a] hover:text-[#00E5A0] transition-colors"
            >
              [ LinkedIn ]
            </a>
            <a
              href={NOTION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6a6a6a] hover:text-[#00E5A0] transition-colors"
            >
              [ Product Portfolio ]
            </a>
            <a
              href="https://www.threads.com/@vincidental"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6a6a6a] hover:text-[#00E5A0] transition-colors"
            >
              [ Threads ]
            </a>
            <Link to="/founder" className="text-[#6a6a6a] hover:text-[#00E5A0] transition-colors">
              [ Founder's Manifesto ]
            </Link>
          </div>
          <p className="text-[11px] text-[#5a5a5a] italic max-w-md text-center leading-relaxed">
            (i drafted something at 3am to capture my journey, feel free to have a read if you want
            to learn more about who Vincent is)
          </p>
          <p className="font-tech text-[10px] text-[#3a3a3a] mt-4">© 2026 Vincentius Theodore</p>
        </div>
      </div>
    </section>
  );
}