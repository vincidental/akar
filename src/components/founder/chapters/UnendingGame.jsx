import ChapterHeader from '../ChapterHeader';
import Reveal from '../Reveal';
import PullQuote from '../PullQuote';

export default function UnendingGame() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[640px] mx-auto px-6">
        <ChapterHeader n="04" title="The Unending Game" dataEra="4" />

        <div className="space-y-8 md:space-y-10 text-base md:text-lg leading-[1.75]">
          <Reveal>
            <p className="dropcap">I thought I had beaten all the games. I had hacked the educational system. I had hacked the corporate ladder. But once I got inside those elite executive rooms, I noticed a completely different, invisible wall.</p>
          </Reveal>
          <Reveal>
            <p>When I was CoS for Kevin Cho (YC-backed founder), I'm 5'9 and weighed almost 80kg. I was hired for my brain, but physically, I looked soft, so I was basically hidden. I rarely got invited to client meetings. Every time we went out, he would eye me up and down, picking on my hair, my clothes, or my shoes with this look of disappointment. He always had something to comment on. But if you think about it, he had every reason to. That was probably his risk management lol</p>
          </Reveal>
          <Reveal>
            <p>So I treated my physical reality the exact same way I treated my career. After that stint, I made it a project, and dropped from 79kg to 66kg at 15 percent body fat (from over 22%).</p>
          </Reveal>
          <Reveal>
            <p>I took a new role working for Belva and Iman, the founders of Ruangguru (the biggest SEA edtech). Man, the difference was insane. I was suddenly front and center for every investor and media meeting. Iman even pulled me into his film ventures, putting me in projects with Indonesian mega-stars like Anggun, Maudy Ayunda, Cinta Laura, Angga Yunanda, etc. and assigning me to cut international partnerships for the Sundance Film Festival in Utah.</p>
          </Reveal>
        </div>

        <PullQuote>As you can see, it's an unending game.</PullQuote>

        <div className="space-y-8 md:space-y-10 text-base md:text-lg leading-[1.75]">
          <Reveal>
            <p>You're probably reading this thinking, "It's unfair", right? "Is it really that complicated?" "Why does it have to be this complicated?" "Why can't we just give a fair chance to everyone?"*</p>
          </Reveal>
          <Reveal>
            <p>I don't know, and honestly, I'm not here to find out the answer. What I know is that I understand how it feels, and even just wanting to try to change your situation, that bravery is already enough for me, and it will always push me forward in whatever venture I'm in.</p>
          </Reveal>
          <Reveal>
            <p>
              Maybe that is why I'm building{' '}
              <a
                href="/#faq-7"
                className="underline decoration-current decoration-1 underline-offset-[6px] hover:opacity-70 transition-opacity"
              >
                flexible pricing for early-stage founders with a strong vision
              </a>
              , as a sign of my respect for people who are actually willing to change and take action. Maybe that is also why I'm always circling back to ideating self-help and self-improvement consumer apps, because deep down I want the Vincents out there to know there is light at the end of the tunnel. Maybe that is also why, if you know me personally, you know how much I love giving free guidance to high school and college students navigating their future, connecting them with people from my network if there's even the slightest chance it can help them unlock a door.
            </p>
          </Reveal>
          <Reveal>
            <p>I know how you might feel reading this. Writing it gives me a bit of an ick too. I always felt like a lot of these college, looks, and stuff were superficial vanity and didn't matter much. And maybe they shouldn't matter much. But they do anyway, and we do what we can.</p>
          </Reveal>
        </div>

        <PullQuote>You can either understand the game, you can break the game, or hell, you can make your own game.</PullQuote>

        <div className="space-y-8 md:space-y-10 text-base md:text-lg leading-[1.75]">
          <Reveal>
            <p>This is not a pitch for Akar. This is not a pitch for my future businesses or future products. This is just me letting it out and telling a story. It is a reminder to myself that whatever it is I'm building next, be it a tech consultancy, a consumer product, a B2B product, or anything else, it comes from the aspiration to build something bigger than myself.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}