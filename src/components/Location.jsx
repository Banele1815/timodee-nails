import { FaMapMarkerAlt, FaWhatsapp, FaClock } from 'react-icons/fa';
import { site } from '../data/site';
import Reveal from './common/Reveal';

export default function Location() {
  const mapQuery = encodeURIComponent(
    `${site.address.line1}, ${site.address.line2}, ${site.address.line3}`
  );

  return (
    <section id="location" className="px-6 md:px-10 py-28 bg-bg-card border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="section-label">Visit</div>
        <h2 className="section-heading">Find the <em>studio.</em></h2>
        <p className="section-desc">
          Based in Rabie Ridge, Midrand. Bookings only — send a WhatsApp to lock in your slot.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-center mt-12">
          <Reveal>
            <div className="flex flex-col gap-7">
              <InfoItem
                icon={<FaMapMarkerAlt />}
                label="Address"
                title={
                  <>
                    {site.address.line1}<br />
                    {site.address.line2}<br />
                    {site.address.line3}
                  </>
                }
              />
              <InfoItem
                icon={<FaWhatsapp />}
                label="WhatsApp"
                title={
                  <a
                    href={`https://wa.me/${site.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    {site.whatsappDisplay}
                  </a>
                }
                sub="Fastest way to book"
              />
              <InfoItem
                icon={<FaClock />}
                label="Hours"
                title={site.hours}
                sub={site.hoursNote}
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="aspect-square max-h-[520px] rounded-3xl overflow-hidden border border-white/15 bg-bg-elevated">
              <iframe
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Timodee Nails location"
                className="w-full h-full border-0"
                style={{ filter: 'invert(90%) hue-rotate(180deg) contrast(.92) saturate(.7)' }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoItem({ icon, label, title, sub }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-lg shrink-0">
        {icon}
      </div>
      <div>
        <strong className="block text-[0.65rem] tracking-[0.22em] uppercase text-accent mb-1.5 font-semibold">
          {label}
        </strong>
        <p className="text-[0.92rem] text-cream font-normal leading-snug">{title}</p>
        {sub && <span className="block text-[0.78rem] text-cream-dim mt-0.5 font-light">{sub}</span>}
      </div>
    </div>
  );
}