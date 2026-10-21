import { FaExternalLinkAlt } from 'react-icons/fa';
import { work } from '../data/site';
import Reveal from './common/Reveal';

export default function Work() {
  return (
    <section id="work" className="px-6 md:px-10 py-28 bg-bg-card border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="section-label">Selected Work</div>
        <h2 className="section-heading">Recent <em>sets.</em></h2>
        <p className="section-desc">Real work, real clients. Full archive on Instagram.</p>

        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[170px] md:auto-rows-[220px] gap-3 md:gap-4 mt-16">
          {work.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 40}
              className={item.tall ? 'row-span-2' : ''}
            >
              <div className="group relative w-full h-full rounded-2xl overflow-hidden border border-white/10 cursor-pointer transition-transform duration-500 hover:scale-[1.015] hover:z-10 bg-bg">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => { e.currentTarget.style.opacity = 0; }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/30 to-transparent z-10 pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 md:bottom-5 md:left-5 md:right-5 flex justify-between items-end z-20">
                  <div>
                    <strong className="block font-serif font-medium text-sm md:text-base mb-1">{item.title}</strong>
                    <span className="text-[0.55rem] md:text-[0.6rem] tracking-[0.2em] uppercase text-cream-dim">{item.tag}</span>
                  </div>
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-black/60 border border-white/15 backdrop-blur-md flex items-center justify-center text-cream text-xs transition-colors duration-300 group-hover:bg-accent group-hover:text-[#1a0a10] group-hover:border-accent shrink-0">
                    <FaExternalLinkAlt />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}