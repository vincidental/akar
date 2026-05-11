import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, Target, MessageCircle, ShieldAlert, Lightbulb, Star, CheckCircle2 } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] },
});

const IDEAL_PROSPECTS = [
  'Business owners currently using only Instagram/WhatsApp as their online presence',
  'Restaurants, clinics, salons, or retail stores with no professional website',
  'Businesses running paid ads (Meta/TikTok) but sending traffic to a social profile',
  'Local service businesses wanting to rank on Google Maps',
  "SME owners who have mentioned \"needing a website\" but haven't acted yet",
];

const PITCH_SCRIPTS = [
  {
    trigger: 'They rely only on Instagram',
    script: '"Have you thought about having a proper website? I know a team that builds premium ones in 48 hours. Your Instagram bio could link directly to a site that converts visitors into customers — and it comes with Google Analytics so you can see exactly where your sales come from."',
  },
  {
    trigger: 'They run paid ads',
    script: '"Where are you sending your ad traffic right now? If it\'s to your Instagram or WhatsApp, you\'re losing a huge chunk of conversions. A proper landing page can easily double your return on ad spend. I can introduce you to the team that handles this."',
  },
  {
    trigger: 'They want more local customers',
    script: '"Are you on Google Maps? If someone searches for [their business type] in [their city], do you show up? There\'s a way to get you to the top 3 results. It\'s called Google Business Profile Boosting — the team I\'m referring you to specialises in this."',
  },
  {
    trigger: 'They\'re cost-conscious',
    script: '"I get it, agency prices can be crazy. But the team I work with has packages starting at Rp 1.5 million — that\'s a complete, professional website live in 48 hours. It\'s not a template, it\'s a real custom product. Worth a quick call at least."',
  },
];

const OBJECTIONS = [
  {
    objection: '"I already have a website."',
    response: 'Ask: "How is it performing? Do you know your monthly visitors or conversion rate?" Most old sites have terrible performance scores and no analytics. Offer an introduction for a free audit.',
  },
  {
    objection: '"I\'ll do it later / I\'m busy."',
    response: '"I totally understand — that\'s exactly why the 48-hour delivery model exists. You don\'t need to spend weeks on it. One meeting, 48 hours, and it\'s done. No long projects."',
  },
  {
    objection: '"I don\'t think I need one."',
    response: '"Customers Google you before they call you. If they don\'t find a professional website, they find your competitor. It\'s not about wanting one — it\'s about not losing sales you don\'t even know you\'re losing."',
  },
  {
    objection: '"It\'s too expensive."',
    response: '"Compare it to one lost customer. If your average sale is Rp 500K and the website brings in just 3 extra customers a month, it pays for itself in the first week. It\'s an investment, not a cost."',
  },
];

function AccordionItem({ title, icon: Icon, children, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen || false);
  return (
    <div className="bg-white rounded-2xl border border-black/7 overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-black/2 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-green-50 border border-green-100 rounded-xl flex items-center justify-center">
            <Icon className="w-4 h-4 text-green-600" />
          </div>
          <span className="font-semibold text-sm text-[#1a1a1a]">{title}</span>
        </div>
        <ChevronDown className={`w-4 h-4 text-[#1a1a1a]/40 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="px-6 pb-6">{children}</div>}
    </div>
  );
}

export default function PortalPlaybook() {
  return (
    <div className="p-6 md:p-10 max-w-3xl mx-auto">
      {/* Header */}
      <motion.div {...fadeUp(0)} className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35 mb-1">Partner Portal</p>
        <h1 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">Sales Playbook</h1>
        <p className="text-sm text-[#1a1a1a]/45 mt-2 max-w-lg">
          Everything you need to identify, approach, and convert the right prospects into Akar Systems clients.
        </p>
      </motion.div>

      {/* Golden Rule */}
      <motion.div {...fadeUp(0.06)} className="bg-[#1a1a1a] rounded-2xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <Star className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-white font-semibold text-sm mb-1">The Golden Rule</p>
            <p className="text-white/55 text-sm leading-relaxed">
              You are not a salesperson. You are a trusted connector. Your job is to identify a real need, make a warm introduction, and let Akar Systems do the rest. Never hard-sell — just open the door.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="space-y-3">
        {/* Ideal Prospects */}
        <motion.div {...fadeUp(0.1)}>
          <AccordionItem title="Who to Target — Ideal Prospect Profile" icon={Target} defaultOpen>
            <ul className="space-y-2.5 mt-2">
              {IDEAL_PROSPECTS.map((p, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-[#1a1a1a]/65 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>
          </AccordionItem>
        </motion.div>

        {/* Pitch Scripts */}
        <motion.div {...fadeUp(0.13)}>
          <AccordionItem title="What to Say — Pitch Scripts by Situation" icon={MessageCircle}>
            <div className="space-y-4 mt-2">
              {PITCH_SCRIPTS.map((s, i) => (
                <div key={i} className="rounded-xl bg-[#F8F6F2] border border-black/6 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-green-700 mb-2">When: {s.trigger}</p>
                  <p className="text-sm text-[#1a1a1a]/70 leading-relaxed italic">
                    {s.script}
                  </p>
                </div>
              ))}
            </div>
          </AccordionItem>
        </motion.div>

        {/* Objection Handling */}
        <motion.div {...fadeUp(0.16)}>
          <AccordionItem title="Handling Objections" icon={ShieldAlert}>
            <div className="space-y-4 mt-2">
              {OBJECTIONS.map((o, i) => (
                <div key={i} className="rounded-xl border border-black/7 p-4">
                  <p className="text-sm font-semibold text-[#1a1a1a] mb-1.5">"{o.objection}"</p>
                  <p className="text-sm text-[#1a1a1a]/55 leading-relaxed">→ {o.response}</p>
                </div>
              ))}
            </div>
          </AccordionItem>
        </motion.div>

        {/* Pro Tips */}
        <motion.div {...fadeUp(0.19)}>
          <AccordionItem title="Pro Tips from Top Partners" icon={Lightbulb}>
            <ul className="space-y-3 mt-2">
              {[
                'Register the lead the moment you start a conversation — not after. This protects your commission immediately.',
                'Add context in the Notes field. The more we know about the prospect, the faster we can close.',
                "Don't pitch cold. Find the need first. Ask about their current online presence before mentioning Akar.",
                "Follow up with your prospect 2–3 days after registering. A warm lead you're still talking to converts faster.",
                'The Website + Local Boost package is the easiest sell — Google Maps ranking is a concrete, visible result.',
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-[#1a1a1a]/65 leading-relaxed">
                  <span className="w-5 h-5 bg-green-600 text-white rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">{i + 1}</span>
                  {tip}
                </li>
              ))}
            </ul>
          </AccordionItem>
        </motion.div>
      </div>
    </div>
  );
}