import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { site } from '../data/site';

export default function CTA() {
  return (
    <section className="px-6 md:px-10 py-32 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(232,164,184,.35)_0%,transparent_60%)] blur-[70px] opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="font-serif font-normal text-[clamp(2.4rem,5vw,4rem)] leading-[1.02] tracking-[-0.03em] mb-6">
          Book your slot.<br />
          <em className="italic bg-gradient-to-br from-accent to-accent-deep bg-clip-text text-transparent">
            Come through.
          </em>
        </h2>
        <p className="text-cream-dim text-base font-light max-w-lg mx-auto mb-10 leading-[1.7]">
          Limited slots each week. New clients — send a quick WhatsApp and we'll sort the details.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group"
          >
            Book on WhatsApp
            <FaWhatsapp className="transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#" className="btn-ghost">
            <FaInstagram /> See Instagram
          </a>
        </div>
      </div>
    </section>
  );
}