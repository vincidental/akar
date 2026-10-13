const stores = [
  {
    sub: 'GET IT ON',
    name: 'Google Play',
    url: 'https://play.google.com/store/apps/details?id=id.bmri.livin&hl=in&gl=US',
    icon: 'https://cdn.simpleicons.org/googleplay/ffffff',
  },
  {
    sub: 'Download on the',
    name: 'App Store',
    url: 'https://apps.apple.com/id/app/livin-by-mandiri/id1555414743?l=id',
    icon: 'https://cdn.simpleicons.org/apple/ffffff',
  },
  {
    sub: 'Explore it on',
    name: 'AppGallery',
    url: 'https://appgallery.huawei.com/#/app/C104709719',
    icon: 'https://cdn.simpleicons.org/huawei/ffffff',
  },
];

export default function StoreBadges() {
  return (
    <div className="flex flex-wrap gap-3">
      {stores.map((s) => (
        <a
          key={s.name}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-black border border-white/15 hover:border-white/40 rounded-xl pl-3 pr-5 py-2.5 transition-colors"
        >
          <img
            src={s.icon}
            alt={s.name}
            className="w-6 h-6"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="text-left leading-none">
            <p className="text-[9px] uppercase tracking-wide text-white/50">{s.sub}</p>
            <p className="text-sm font-semibold text-white mt-0.5">{s.name}</p>
          </div>
        </a>
      ))}
    </div>
  );
}