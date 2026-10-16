import { FaGem, FaBolt, FaEye, FaFeather } from 'react-icons/fa';
import { services } from '../data/site';
import Reveal from './common/Reveal';

const icons = { gem: FaGem, bolt: FaBolt, eye: FaEye, feather: FaFeather };

export default function Services() {
  return (
    <section id="services" className="px-6 md:px-10 py-28 relative">
      <div className="max-w-7xl mx-auto">
        <div className="section-label">Services</div>
        <h2 className="section-heading">
          Nails. Lashes. <em>Done right.</em>
        </h2>
        <p className="section-desc">
          Every service is shaped to you — your hands, your eyes, your lifestyle.
          No template sets, no shortcuts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <Reveal key={s.title} delay={i * 80}>
                <div className="group p-10 bg-bg-card border border-white/10 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-bg-elevated relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />

                  <div className="flex justify-between items-start mb-6">
                    <div className="w-13 h-13 w-[52px] h-[52px] rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-xl">
                      <Icon />
                    </div>
                    <span className="font-mono text-xs text-cream-faint tracking-widest">{s.num}</span>
                  </div>

                  <h3 className="font-serif font-medium text-2xl mb-2.5 tracking-tight">{s.title}</h3>
                  <p className="text-cream-dim text-sm leading-relaxed font-light mb-6">{s.desc}</p>

                  <div className="flex justify-between items-center pt-6 border-t border-white/10 text-xs">
                    <span className="text-cream-faint tracking-widest uppercase text-[0.65rem]">{s.duration}</span>
                    <strong className="text-accent font-semibold">{s.price}</strong>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}