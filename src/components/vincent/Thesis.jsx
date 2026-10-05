import { motion } from 'framer-motion';

export default function Thesis() {
  return (
    <section className="relative px-6 py-28 md:py-40">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl p-8 md:p-16 bg-white/[0.02] border border-white/[0.07] transition-colors duration-700 hover:border-[#00E5A0]/30"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute -inset-px rounded-3xl pointer-events-none"
            style={{ boxShadow: '0 0 70px -12px rgba(0,229,160,0.22) inset' }}
          />
          <p className="font-tech text-[10px] tracking-[0.3em] text-[#00E5A0] mb-8">THE THESIS</p>
          <blockquote className="font-serif text-2xl md:text-[2.6rem] leading-[1.28] tracking-[-0.01em] text-[#eaeaea] italic">
            "The technical bottleneck for companies right now is no longer writing raw code—it is
            workflow integration and productization. Elite strategists fail because they make
            beautiful slide decks but can't wire Supabase to an n8n workflow. Pure technical
            builders fail because they build over-engineered AI toys that don't solve actual P&amp;L
            bottlenecks. I don't need to be the world's best coder. I need to be the world's best
            deployer of leverage."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}