import { motion } from 'framer-motion';

const logos = [
  {
    name: 'Ruangguru',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Ruangguru_logo.svg/3840px-Ruangguru_logo.svg.png',
    invert: true,
  },
  {
    name: 'Astro',
    url: 'https://upload.wikimedia.org/wikipedia/id/b/bd/Logo-astro-indonesia.png',
    invert: false,
  },
  {
    name: 'Foom',
    url: 'https://images.glints.com/unsafe/glints-dashboard.oss-ap-southeast-1.aliyuncs.com/company-logo/02dd783f1a7a9055dc756b703c494c58.png',
    invert: true,
  },
  {
    name: 'TP-Link',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/TPLINK_Logo_2.svg/1280px-TPLINK_Logo_2.svg.png',
    invert: true,
  },
  {
    name: 'McEasy',
    url: 'https://www.mceasy.com/wp-content/uploads/2024/03/McEasy-Logo1.png',
    invert: true,
  },
  {
    name: 'Indotrading',
    url: 'https://resources.indotrading.com/frontend/images/logo.png',
    invert: true,
  },
  {
    name: 'Jetinno',
    url: 'https://sc04.alicdn.com/kf/Hf2aa88cad0b245a0bcbf3d7ad73c2f32C.jpg',
    invert: false,
    rounded: true,
  },
  {
    name: 'SunnyGold',
    url: 'https://www.matari-ad.com/wp-content/uploads/2017/09/sunnygold-logo.png',
    invert: true,
  },
  {
    name: 'Malindo',
    url: 'https://www.malindofeedmill.com/wp-content/uploads/2022/03/LOGO-MALINDO-APPROVAL-e1648183463719.png',
    invert: false,
  },
  {
    name: 'Ibengcam',
    url: 'https://media.base44.com/images/public/69cc2ed917e94df8870cff9d/e4b9af989_Logo_Ibeng-Cam-02__1_-removebg-preview.png',
    invert: false,
  },
  {
    name: 'ESBC',
    url: 'https://media.base44.com/images/public/69cc2ed917e94df8870cff9d/b51bab792_logopng.png',
    invert: false,
    rounded: true,
  },
];

// Duplicate for seamless loop
const track = [...logos, ...logos];

export default function ClientLogoMarquee() {
  return (
    <section className="py-14 relative overflow-hidden">
      {/* Top separator line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {/* Bottom separator line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/25">
          Trusted by businesses across Indonesia
        </p>
      </motion.div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[#0a0a0a] to-transparent" />

      {/* Marquee track */}
      <div className="flex">
        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 32,
            ease: 'linear',
            repeat: Infinity,
          }}
          style={{ willChange: 'transform' }}
        >
          {track.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex-shrink-0 flex items-center justify-center px-2"
              style={{ height: '52px', minWidth: '120px' }}
            >
              <img
                src={logo.url}
                alt={logo.name}
                className={`max-h-[40px] w-auto max-w-[130px] object-contain transition-all duration-300 ${
                  logo.invert ? 'brightness-0 invert opacity-40 hover:opacity-70' : 'opacity-55 hover:opacity-90'
                } ${logo.rounded ? 'rounded-lg' : ''}`}
                draggable={false}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}