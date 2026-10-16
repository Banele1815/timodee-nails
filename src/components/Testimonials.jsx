import { testimonials } from '../data/site';
import Reveal from './common/Reveal';

export default function Testimonials() {
  return (
    <section id="reviews" className="px-6 md:px-10 py-28">
      <div className="max-w-7xl mx-auto">
        <div className="section-label">Reviews</div>
        <h2 className="section-heading">What clients <em>say.</em></h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div className="p-9 bg-bg-card border border-white/10 rounded-3xl transition-all duration-300 hover:border-white/20 hover:-translate-y-1 h-full flex flex-col">
                <div className="text-accent text-sm tracking-[0.2em] mb-5">★★★★★</div>
                <p className="font-serif text-[1.05rem] leading-relaxed font-light mb-7 flex-1">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3.5 pt-6 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-deep flex items-center justify-center font-serif font-semibold text-sm text-[#1a0a10]">
                    {t.initial}
                  </div>
                  <div>
                    <strong className="block text-sm font-medium">{t.name}</strong>
                    <span className="text-[0.7rem] text-cream-faint tracking-wide">{t.role}</span>
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