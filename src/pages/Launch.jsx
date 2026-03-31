import { motion } from 'framer-motion';
import { Zap, Clock, Wifi, MessageCircle, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const bullets = [
  { icon: Zap, text: 'Guaranteed live deployment in 48–72 hours' },
  { icon: Wifi, text: 'Sub-second load times on our local-optimized edge network' },
  { icon: MessageCircle, text: 'Direct WhatsApp lead routing integrated' },
  { icon: Lock, text: 'Strictly limited monthly availability to ensure speed' },
];

export default function Launch() {
  return (
    <div className="bg-[#F0EDE8] min-h-screen">
      {/* Hero band */}
      <section className="pt-32 pb-0 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-0"
          >
            {/* Scarcity badge */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-600 text-white text-xs font-bold uppercase tracking-widest rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
                Fast-Tracked Deployment
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl text-[#1a1a1a] tracking-tight leading-[1.05] mb-6 max-w-4xl mx-auto">
              The{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-green-600">48-Hour Launch.</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
                  className="absolute bottom-1 left-0 right-0 h-2 bg-green-100 -z-0 origin-left rounded"
                />
              </span>
              <br />
              <span className="text-[#1a1a1a]">Your Premium Website,</span>
              <br />
              <span className="text-[#1a1a1a]/45 font-serif">Live by the Weekend.</span>
            </h1>
            <p className="text-lg text-[#1a1a1a]/50 max-w-2xl mx-auto leading-relaxed mb-4">
              Skip the 3-month agency build times and endless revisions. For ambitious founders who need immediate results, we reserve a highly limited number of slots each month to design, build, and deploy a premium functional website in just 48 hours.{' '}
              <span className="font-semibold text-[#1a1a1a]">Secure your spot and start capturing revenue this weekend.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content: bullets + Calendly */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_1.1fr] gap-10 items-start">

            {/* Left: trust signals */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-col gap-5"
            >
              {/* Bullet cards */}
              <div className="space-y-3">
                {bullets.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                    className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-black/8"
                  >
                    <div className="w-9 h-9 bg-green-50 border border-green-100 rounded-xl flex items-center justify-center shrink-0">
                      <b.icon className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-sm text-[#1a1a1a]/70 leading-relaxed pt-1.5">{b.text}</p>
                  </motion.div>
                ))}
              </div>

              {/* Scarcity callout */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.65 }}
                className="p-5 bg-[#1a1a1a] rounded-2xl"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-green-500/15 border border-green-400/20 flex items-center justify-center text-green-400 font-bold text-xs shrink-0 font-serif mt-0.5">
                    !
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">Limited Monthly Slots</p>
                    <p className="text-white/45 text-xs leading-relaxed">
                      To guarantee 48-hour delivery, we strictly cap the number of Launch projects per month. Once slots fill, the next availability is next month.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Trust quote */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.75 }}
                className="p-5 bg-green-600 rounded-2xl"
              >
                <p className="text-white font-serif text-base italic leading-relaxed mb-2">
                  "Stop waiting months for slow agencies. Start capturing revenue this week."
                </p>
                <p className="text-white/50 text-xs">— Akar Systems</p>
              </motion.div>

              {/* Link to full strategy */}
              <p className="text-xs text-[#1a1a1a]/35 leading-relaxed">
                Need SEO, AI automation, or custom software instead?{' '}
                <Link to="/strategy" className="text-[#1a1a1a]/60 underline underline-offset-2 hover:text-[#1a1a1a] transition-colors">
                  Book a full Strategy Session →
                </Link>
              </p>
            </motion.div>

            {/* Right: Calendly widget container */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl border border-black/8 shadow-sm overflow-hidden sticky top-28">
                {/* Card header with green accent */}
                <div className="bg-green-600 px-7 py-5">
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-4 h-4 text-white/70" />
                    <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest">Secure Your Slot</p>
                  </div>
                  <h3 className="font-serif text-2xl text-white">Book Your 48-Hour Launch</h3>
                  <p className="text-white/60 text-sm mt-1">Pick a time — we'll deploy before you know it.</p>
                </div>

                {/* Calendly placeholder */}
                <div
                  id="calendly-launch"
                  className="min-h-[480px] flex flex-col items-center justify-center gap-4 p-8 bg-[#F8F6F2]"
                >
                  <div className="text-center">
                    <div className="w-14 h-14 bg-green-50 border border-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-6 h-6 text-green-500" />
                    </div>
                    <h4 className="font-serif text-lg text-[#1a1a1a] mb-2">Calendar Integration</h4>
                    <p className="text-sm text-[#1a1a1a]/45 max-w-xs mb-6">
                      Your Calendly scheduling widget will appear here. Inject the Calendly embed script into this container.
                    </p>
                    <div className="p-3 bg-white rounded-xl border border-black/8 text-xs text-[#1a1a1a]/35 font-mono text-left max-w-xs">
                      {`<!-- Calendly inline widget -->`}<br />
                      {`<div class="calendly-inline-widget"`}<br />
                      {`  data-url="https://calendly.com/YOUR_USERNAME"`}<br />
                      {`  style="min-width:320px;height:700px;">`}<br />
                      {`</div>`}
                    </div>

                    <div className="mt-8 pt-6 border-t border-black/6">
                      <p className="text-xs text-[#1a1a1a]/30 mb-3">Or reach us directly</p>
                      <a
                        href="https://wa.me/62"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-medium rounded-full text-sm hover:bg-green-700 transition-colors"
                      >
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}