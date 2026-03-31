import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    q: "What makes Akar Systems different from a traditional digital agency?",
    a: (
      <p>
        Traditional agencies focus on vanity metrics like <span className="line-through text-[#1a1a1a]/30">"likes"</span> and <span className="line-through text-[#1a1a1a]/30">"awareness,"</span> and they take <em className="not-italic font-semibold text-[#1a1a1a]">months</em> to build bloated websites. Akar Systems is a <span className="bg-green-100 text-green-800 px-1.5 py-0.5 rounded font-medium">digital infrastructure firm.</span> We deploy lightning-fast, enterprise-grade websites in <em className="not-italic font-semibold">days.</em> We don't just make you look good online — we build the technical pipelines that turn your ad traffic directly into booked appointments.
      </p>
    ),
  },
  {
    q: "I'm already running Meta and Google Ads. Why do I need a new website?",
    a: (
      <p>
        If you're sending paid traffic to a slow, confusing website — or worse, you don't have one — your marketing funnel is <span className="bg-red-100 text-red-700 px-1.5 py-0.5 rounded font-medium">leaking.</span> Modern consumers bounce if a site takes more than 3 seconds to load. We migrate you to a <span className="font-semibold text-[#1a1a1a]">sub-second, edge-network infrastructure.</span> Not to mention if your existing site looks like it was made in the Internet Explorer age. We plug the leaks, ensuring the traffic you're already paying for actually converts.
      </p>
    ),
  },
  {
    q: "How fast can you launch my website?",
    a: (
      <p>
        Because we utilize advanced development frameworks with a team of senior operators, we deploy your Level 01 or Level 02 infrastructure in{' '}
        <span className="font-serif text-2xl font-bold text-green-600 align-middle">48–72 hours.</span>
        {' '}No three-month waiting periods. No endless revisions. Just a world-class digital presence launched immediately.
      </p>
    ),
  },
  {
    q: 'How does the "Automated Pipeline" (Level 03) actually work?',
    a: (
      <p>
        Think of it as a <span className="bg-[#1a1a1a] text-white px-1.5 py-0.5 rounded font-medium text-sm">24/7 digital receptionist.</span> We install an omnichannel conversational AI into your digital storefront and social channels. When a customer messages you at <em className="not-italic font-semibold">2 AM</em> asking for prices, our AI answers them, qualifies their budget, captures their contact info, and routes the <span className="text-green-600 font-semibold">"hot lead"</span> directly to your sales team's WhatsApp by morning.
      </p>
    ),
  },
  {
    q: "Do I need a technical team to manage this once it's live?",
    a: (
      <p>
        Not at all. <span className="font-serif text-lg italic text-[#1a1a1a]">We build the engine, you just drive the car.</span> Every system we build routes the final, qualified leads directly to the tools you already use — like WhatsApp or your existing CRM. We handle the complex data architecture, GA4 tracking, and server maintenance in the background.
      </p>
    ),
  },
  {
    q: "Do you build custom software, or just landing pages?",
    a: (
      <p>
        Our core focus for local businesses is high-speed lead capture. However, Akar Systems has its own advanced tech department of <span className="font-semibold text-[#1a1a1a]">elite full-stack developers and AI/ML engineers.</span> For scaling enterprises, we build bespoke web applications, custom operational dashboards, and native mobile apps. Book a systems audit to discuss custom engineering scope.
      </p>
    ),
  },
  {
    q: "Who is actually building my infrastructure?",
    a: (
      <p>
        Akar Systems was founded by operators and engineers with backgrounds from the world's top tech, academia, and consulting firms — including{' '}
        <span className="font-semibold text-[#1a1a1a]">Microsoft, BCG, and Yale.</span>{' '}
        We are bringing the exact same conversion architectures used by Silicon Valley startups to our roots of local Indonesian businesses.
      </p>
    ),
  },
  {
    q: "This looks expensive. Are you guys expensive?",
    a: (
      <>
        <p className="mb-3">
          It looks expensive because it's built to <span className="font-semibold text-[#1a1a1a]">world-class standards.</span> But Akar Systems was built to disrupt traditional agency pricing. Most software houses charge for their bloated overhead, account managers, and the three months it takes them to finish a project. We don't.
        </p>
        <p className="mb-3">
          We are a lean team of operators who deploy high-performance infrastructure in 48 hours. Because we cut out the <span className="line-through text-[#1a1a1a]/40">"agency fat"</span>, we deliver <span className="bg-green-100 text-green-800 px-1.5 py-0.5 rounded font-medium">premium, Silicon Valley-grade websites</span> at prices that often beat basic, off-the-shelf template freelancers. You pay for the conversion engine, not our overhead.
        </p>
        <p className="text-[#1a1a1a]/50 text-sm italic border-l-2 border-green-400 pl-3">
          For early-stage founders with a strong vision, we also have flexible launch pricing. If we believe in what you're building, we make the numbers work. Book a call and let's talk.
        </p>
      </>
    ),
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 bg-[#F0EDE8]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#1a1a1a]/35 mb-4">Questions & Answers</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] tracking-tight leading-[1.1]">
            Everything you're<br />
            <em className="not-italic text-green-600">probably wondering.</em>
          </h2>
        </motion.div>

        {/* FAQ list */}
        <div className="space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-black/10 shadow-sm'
                      : 'bg-white/50 border-black/6 hover:bg-white hover:border-black/10'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
                  >
                    <div className="flex items-start gap-4">
                      <span className="font-serif text-xs text-[#1a1a1a]/20 mt-0.5 shrink-0 w-5">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className={`font-medium text-sm leading-snug transition-colors ${isOpen ? 'text-[#1a1a1a]' : 'text-[#1a1a1a]/70'}`}>
                        {faq.q}
                      </span>
                    </div>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen ? 'bg-[#1a1a1a] text-white' : 'bg-[#1a1a1a]/6 text-[#1a1a1a]/40'
                    }`}>
                      {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="px-7 pb-6 pl-16 text-sm text-[#1a1a1a]/60 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 p-8 bg-[#1a1a1a] rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
        >
          <div>
            <p className="font-serif text-xl text-white leading-snug">Still have questions?</p>
            <p className="text-white/40 text-sm mt-1">Book a free 15-minute audit and we'll answer everything live.</p>
          </div>
          <Link
            to="/strategy"
            className="shrink-0 bg-white text-[#1a1a1a] font-semibold px-6 py-3 rounded-full text-sm hover:bg-white/90 transition-colors whitespace-nowrap"
          >
            Book a Free Audit
          </Link>
        </motion.div>
      </div>
    </section>
  );
}