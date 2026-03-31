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
    <div className="pt-16 min-h-screen">
      <section className="py-20 min-h-screen bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left: Pitch */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="pt-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500 mb-4">Free Systems Audit</p>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.05] mb-6">
                Ready to capture the revenue you're leaving{' '}
                <span className="text-gradient">on the table?</span>
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed mb-10">
                Book a free 15-minute systems audit. We will analyze your current website performance, your Google Maps ranking, and show you exactly where your leads are dropping off.
              </p>

              <div className="space-y-4 mb-10">
                {benefits.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                      <b.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <p className="text-slate-600 text-sm">{b.text}</p>
                  </motion.div>
                ))}
              </div>

              {/* Trust Badge */}
              <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                    AS
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium leading-relaxed">
                      "Deploying infrastructure that pays for itself in weeks, not years."
                    </p>
                    <p className="text-slate-500 text-xs mt-2">— Akar Systems Guarantee</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Calendly Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-8"
            >
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
                  <h3 className="text-white font-bold text-xl">Book Your Free Audit</h3>
                  <p className="text-blue-200 text-sm mt-1">Select a time that works for you</p>
                </div>

                {/* Calendly embed placeholder */}
                <div
                  id="calendly-placeholder"
                  className="min-h-[500px] bg-slate-50 flex flex-col items-center justify-center gap-4 p-8"
                >
                  {/* Replace this div with Calendly embed script */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">Calendar Integration</h4>
                    <p className="text-sm text-slate-500 max-w-xs mb-6">
                      Your Calendly scheduling widget will appear here. Inject the Calendly embed script into this container.
                    </p>
                    <div className="p-3 bg-slate-100 rounded-lg border border-slate-200 text-xs text-slate-400 font-mono text-left max-w-xs">
                      {`<!-- Calendly inline widget -->`}<br />
                      {`<div class="calendly-inline-widget"`}<br />
                      {`  data-url="https://calendly.com/YOUR_USERNAME"`}<br />
                      {`  style="min-width:320px;height:700px;">`}<br />
                      {`</div>`}
                    </div>

                    {/* Fallback WhatsApp CTA */}
                    <div className="mt-8 pt-6 border-t border-slate-200">
                      <p className="text-xs text-slate-400 mb-3">Or reach us directly</p>
                      <a
                        href="https://wa.me/62"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white font-semibold rounded-xl text-sm hover:bg-emerald-600 transition-all duration-200 glow-emerald"
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