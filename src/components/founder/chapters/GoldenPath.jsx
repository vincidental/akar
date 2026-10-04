import ChapterHeader from '../ChapterHeader';
import Reveal from '../Reveal';
import PullQuote from '../PullQuote';

export default function GoldenPath() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[640px] mx-auto px-6">
        <ChapterHeader n="01" title="The Golden Path, Revoked" />

        <div className="space-y-8 md:space-y-10 text-base md:text-lg leading-[1.75]">
          <Reveal>
            <p className="dropcap">Up until junior high, I had the game completely figured out. I was the student athlete, the main roster for all sports, the mini soccer team captain, and the main guitarist for the school band. Academically, I was sitting comfortably in the top three of my class. By all traditional metrics, I was the golden kid. Basically, what you'd call peaked in high school. I had my senior high life pictured perfectly in my mind, and I fully expected to run that shit the exact same way I always did.</p>
          </Reveal>
        </div>

        <PullQuote dataEra="1">Then the universe just said, <em>nope.</em></PullQuote>

        <div className="space-y-8 md:space-y-10 text-base md:text-lg leading-[1.75]">
          <Reveal>
            <p>Due to conditions completely outside my control, my parents pulled me out of regular schooling after I graduated junior high. Everything I had built, the momentum, the social hierarchy, the identity I had created for myself, the idea of me that everyone knew and expected of, was taken away from me early. I was forced into homeschooling, with no options for extracurriculars, which guaranteed me to be a no-lifer now.</p>
          </Reveal>
          <Reveal>
            <p>I still remember it as clear as day, late 2016 to early 2019. That was the dark period. For over two years, I fell into a suffocating period of my life. I didn't have a chance to experience the 'teenage' life anymore, couldn't relate to anything my old junior high friends were talking about. I was completely isolated, secretly seeing an online psychiatrist on my own without a single person in my life knowing. I couldn't get myself to even see the sun for weeks, sometimes months at a time, and I always seemed to fall back to that hollow state every other month. I had to sit there and watch my peers get everything presented with endless options to choose from, while I was stuck in a bedroom, lights off, feeling completely victimized by the hand I had been dealt.</p>
          </Reveal>
          <Reveal>
            <p>But eventually, that depression turned into disgust. I got very sick of my own shit. Yes, I hated my circumstances, but more than that, I developed a deep, visceral hatred for the feeling of hating myself. I started to absolutely despise my own victim mentality. I realized you can complain and blame your surroundings all you want, and yes, it might truly not be your fault, but so what? until when? until when are you gonna keep doing that? until when are you just going to sit there and bitch forever? At the end of the day, any man has to take absolute responsibility for his own life, because you are the only one who can pick yourself up.</p>
          </Reveal>
        </div>

        <PullQuote>I realized you either complain, or you fucking do something about it.</PullQuote>
      </div>
    </section>
  );
}