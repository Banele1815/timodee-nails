import { FaCut } from 'react-icons/fa';
import Reveal from './common/Reveal';

const stats = [
  { num: '2', accent: '+', label: 'Years Experience' },
  { num: '1', accent: ':1', label: 'Client Focus' },
  { num: '5.0', accent: '★', label: 'Client Rating' },
];

export default function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-28 bg-bg-card border-y border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <Reveal>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/15 bg-bg">
            <img
              src="/timodee.jpg"
              alt="Timodee — founder of Timodee Nails"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 25%' }}
              onError={(e) => { e.currentTarget.style.opacity = 0; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/90 to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-10">
              <div>
                <strong className="block font-serif font-medium text-lg mb-1">Timodee</strong>
                <span className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-accent">
                  Founder · Nail &amp; Lash Tech
                </span>
              </div>
              <FaCut className="text-accent text-2xl" />
            </div>
          </div>
        </Reveal>

        <div>
          <div className="section-label">About</div>
          <h2 className="section-heading">
            I'm Timodee. I do <em>nails &amp; lashes.</em>
          </h2>
          <p className="section-desc mb-6">
            One chair, full attention, no rushed appointments. Every set of nails
            and every lash application gets the time it needs to be done properly —
            because that's the only way I know how to work.
          </p>
          <p className="section-desc">
            Whether you want a clean structured set, something loud and custom,
            or lashes that wake up with you — the studio is built around quality
            over quantity.
          </p>

          <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/10 max-md:grid-cols-1 max-md:text-center max-md:gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-serif text-[2.8rem] font-normal leading-none mb-2">
                  {s.num}
                  <span className="italic bg-gradient-to-br from-accent to-accent-deep bg-clip-text text-transparent">
                    {s.accent}
                  </span>
                </div>
                <div className="text-[0.65rem] tracking-[0.2em] uppercase text-cream-dim">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}