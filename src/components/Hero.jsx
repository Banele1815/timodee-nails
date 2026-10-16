import { FaWhatsapp, FaStar, FaEye } from 'react-icons/fa';
import { site } from '../data/site';

export default function Hero() {
  return (
    <section className="min-h-screen px-6 md:px-10 pt-32 pb-16 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-12 items-center relative overflow-hidden">
      <div className="absolute -top-[30%] -right-[15%] w-[750px] h-[750px] rounded-full bg-[radial-gradient(circle,rgba(232,164,184,.35)_0%,transparent_65%)] blur-[50px] pointer-events-none opacity-50" />

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 border border-white/15 rounded-full text-[0.65rem] tracking-[0.2em] uppercase text-cream-dim mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] animate-pulse-dot" />
          Now booking · Nails &amp; Lashes
        </div>

        <h1 className="font-serif font-normal text-[clamp(2.8rem,6vw,5rem)] leading-[0.98] tracking-[-0.03em] mb-6">
          Nails &amp; lashes,<br />
          done{' '}
          <em className="italic font-light bg-gradient-to-br from-accent to-accent-deep bg-clip-text text-transparent">
            properly.
          </em>
        </h1>

        <p className="text-base text-cream-dim font-light max-w-lg leading-[1.7] mb-10">
          Custom sets, structured builds, and lash extensions — all shaped to you.
          One chair, full attention, work that holds up.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group"
          >
            Book on WhatsApp
            <FaWhatsapp className="transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#work" className="btn-ghost">See the Work</a>
        </div>
      </div>

      <div className="relative aspect-[1/1.1] max-h-[640px] z-10">
        <div className="absolute inset-x-0 top-0 bottom-[15%] left-[10%] rounded-3xl overflow-hidden border border-white/15 bg-bg-card animate-float">
          <img
            src="/hero.jpg"
            alt="Custom nail set by Timodee Nails"
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-transparent pointer-events-none" />
        </div>

        <div className="absolute top-[8%] right-0 px-5 py-4 bg-bg-card/90 backdrop-blur-xl border border-white/15 rounded-2xl flex items-center gap-3 z-20 animate-float-mid">
          <FaStar className="text-accent text-lg" />
          <div className="leading-tight">
            <strong className="block text-sm font-semibold">5.0 / 5.0</strong>
            <small className="text-[0.62rem] text-cream-dim tracking-wider">Client rated</small>
          </div>
        </div>

        <div className="absolute bottom-[8%] left-0 px-5 py-4 bg-bg-card/90 backdrop-blur-xl border border-white/15 rounded-2xl flex items-center gap-3 z-20 animate-float-slow">
          <FaEye className="text-accent text-lg" />
          <div className="leading-tight">
            <strong className="block text-sm font-semibold">Nails + Lashes</strong>
            <small className="text-[0.62rem] text-cream-dim tracking-wider">Two services, one studio</small>
          </div>
        </div>
      </div>
    </section>
  );
}