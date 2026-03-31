const logos = [
  {
    name: 'Microsoft',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/3840px-Microsoft_logo_%282012%29.svg.png',
  },
  {
    name: 'BCG',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Boston_Consulting_Group_2020_logo.svg/1280px-Boston_Consulting_Group_2020_logo.svg.png',
  },
  {
    name: 'Shopify',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/960px-Shopify_logo_2018.svg.png',
  },
  {
    name: 'Bosch',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Bosch-logo.svg/1280px-Bosch-logo.svg.png',
  },
  {
    name: 'Yale',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Yale_University_logo.svg/960px-Yale_University_logo.svg.png',
  },
  {
    name: 'Harvard',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/960px-Harvard_University_logo.svg.png',
  },
  {
    name: 'Univ. of Arizona',
    url: 'https://phoenixmed.arizona.edu/sites/default/files/campus/marcomm/brand/master-logo/1-ua-vertical/ua_stack_rgb_4.png',
  },
  {
    name: 'Deloitte',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Logo_of_Deloitte.svg/960px-Logo_of_Deloitte.svg.png',
  },
  {
    name: 'PwC',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/PwC_Company_Logo.svg/500px-PwC_Company_Logo.svg.png',
  },
  {
    name: 'KPMG',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/KPMG_blue_logo.svg/960px-KPMG_blue_logo.svg.png',
  },
];

export default function AuthorityMarquee() {
  return (
    <section className="py-10 border-y border-black/8 bg-[#E8E4DC] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#1a1a1a]/35 text-center">
          Infrastructure engineered by former operators from
        </p>
      </div>
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#E8E4DC] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#E8E4DC] to-transparent" />
        <div className="flex gap-14 animate-marquee whitespace-nowrap items-center">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="inline-flex items-center shrink-0 h-7">
              <img
                src={logo.url}
                alt={logo.name}
                className="h-full w-auto object-contain"
                style={{ filter: 'grayscale(100%) opacity(0.4)' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling.style.display = 'block';
                }}
              />
              <span
                className="hidden text-[#1a1a1a]/35 font-medium text-sm tracking-wide"
              >
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}