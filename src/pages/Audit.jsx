import { motion } from 'framer-motion';
import { CheckCircle, Clock, TrendingUp, Shield, ArrowRight } from 'lucide-react';

const benefits = [
  { icon: Clock, text: 'Free 15-minute deep-dive call with a systems engineer' },
  { icon: TrendingUp, text: 'Live analysis of your current website performance score' },
  { icon: Shield, text: 'Google Maps ranking audit and gap identification' },
  { icon: CheckCircle, text: 'Exact breakdown of where your leads are dropping off' },
];

export default function Audit() {
  return (
    <div className="bg-[#F0EDE8] min-h-screen">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left: Pitch */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-600 mb-5">Free Systems Audit</p>
              <h1 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] tracking-tight leading-[1.1] mb-6">
                Ready to capture the revenue you're leaving{' '}
                <em className="not-italic text-green-600">on the table?</em>
              </h1>
              <p className="text-base text-[#1a1a1a]/55 leading-relaxed mb-10">
                Book a free 15-minute systems audit. We will analyze your current website performance, your Google Maps ranking, and show you exactly where your leads are dropping off.
              </p>

              <div className="space-y-3 mb-10">
                {benefits.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shrink-0 border border-black/8">
                      <b.icon className="w-3.5 h-3.5 text-[#1a1a1a]/40" />
                    </div>
                    <p className="text-[#1a1a1a]/60 text-sm">{b.text}</p>
                  </motion.div>
                ))}
              </div>

              {/* Trust Badge */}
              <div className="p-6 bg-[#1a1a1a] rounded-2xl">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white font-semibold text-sm shrink-0 font-serif">
                    AS
                  </div>
                  <div>
                    <p className="text-white/80 text-sm font-serif italic leading-relaxed">
                      "Deploying infrastructure that pays for itself in weeks, not years."
                    </p>
                    <p className="text-white/30 text-xs mt-2">— Akar Systems Guarantee</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Calendly */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="bg-white rounded-2xl border border-black/8 shadow-sm overflow-hidden">
                <div className="px-7 py-6 border-b border-black/6">
                  <h3 className="font-serif text-xl text-[#1a1a1a]">Book Your Free Audit</h3>
                  <p className="text-sm text-[#1a1a1a]/45 mt-1">Select a time that works for you</p>
                </div>

                <div
                  id="calendly-placeholder"
                  className="min-h-[500px] flex flex-col items-center justify-center gap-4 p-8 bg-[#F8F6F2]"
                >
                  <div className="text-center">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 border border-black/8">
                      <Clock className="w-6 h-6 text-[#1a1a1a]/30" />
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
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] text-white font-medium rounded-full text-sm hover:bg-[#333] transition-colors"
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