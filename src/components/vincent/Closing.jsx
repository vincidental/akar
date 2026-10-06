import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NOTION_URL = 'https://vincentius.notion.site/Vincentius-Theodore-6a4026cfae8543a986910a73afa37414';

export default function Closing() {
  return (
    <section className="px-6 py-24 md:py-32 border-t border-[#1a1a1a]/8">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-tech text-[10px] tracking-[0.28em] text-[#2a7a4f] mb-5"
        >
          GET IN TOUCH
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-3xl md:text-5xl text-[#1a1a1a] tracking-tight mb-5"
        >
          Let's talk.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-base text-[#1a1a1a]/55 leading-relaxed max-w-xl mx-auto mb-9"
        >
          Open to remote full-time engagements, fractional executive roles, and applied AI
          consulting. If you need a builder who operates with extreme ownership, understands the
          P&amp;L, and ships the systems to scale it — write to me.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
        >
          <a
            href="mailto:vtheodore7@gmail.com"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#1a1a1a] text-white text-sm font-medium hover:bg-[#2a7a4f] transition-colors"
          >
            vtheodore7@gmail.com
          </a>
          <a
            href="https://wa.me/6281809006757"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-[#1a1a1a]/15 text-[#1a1a1a] text-sm font-medium hover:border-[#2a7a4f]/40 hover:bg-white transition-colors"
          >
            WhatsApp
          </a>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-tech text-[11px]">
          <a href="https://www.linkedin.com/in/vincentiustheodore" target="_blank" rel="noopener noreferrer" className="text-[#1a1a1a]/50 hover:text-[#1a1a1a] transition-colors">
            LinkedIn
          </a>
          <span className="text-[#1a1a1a]/15">/</span>
          <a href={NOTION_URL} target="_blank" rel="noopener noreferrer" className="text-[#1a1a1a]/50 hover:text-[#1a1a1a] transition-colors">
            Product Portfolio
          </a>
          <span className="text-[#1a1a1a]/15">/</span>
          <a href="https://www.threads.com/@vincidental" target="_blank" rel="noopener noreferrer" className="text-[#1a1a1a]/50 hover:text-[#1a1a1a] transition-colors">
            Threads
          </a>
          <span className="text-[#1a1a1a]/15">/</span>
          <Link to="/founder" className="text-[#1a1a1a]/50 hover:text-[#1a1a1a] transition-colors">
            Founder's Manifesto
          </Link>
        </div>
        <p className="text-[11px] text-[#1a1a1a]/40 italic max-w-md mx-auto mt-5 leading-relaxed">
          (i drafted something at 3am to capture my journey, feel free to have a read if you want
          to learn more about who Vincent is)
        </p>
        <p className="font-tech text-[10px] text-[#1a1a1a]/30 mt-10">© 2026 Vincentius Theodore</p>
      </div>
    </section>
  );
}