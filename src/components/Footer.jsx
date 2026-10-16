import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { site } from '../data/site';

export default function Footer() {
  return (
    <footer className="bg-bg-card border-t border-white/10 px-6 md:px-10 pt-20 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 lg:gap-12 pb-12 border-b border-white/10">
          <div>
            <a href="#" className="font-serif font-semibold text-lg tracking-[0.02em] flex items-center gap-2.5 mb-5">
              <span className="w-[30px] h-[30px] rounded-full bg-gradient-to-br from-accent to-accent-deep flex items-center justify-center text-[0.8rem] font-extrabold text-[#1a0a10] font-serif">
                T
              </span>
              {site.brandShort}<em className="not-italic text-accent">.</em>NAILS
            </a>
            <p className="text-cream-dim text-sm font-light leading-relaxed max-w-xs mb-6">
              A one-chair nail and lash studio in Rabie Ridge, Midrand.
              Custom work, structured builds, and lashes done properly.
            </p>
            <div className="flex gap-3">
              <Social href="#" aria-label="Instagram"><FaInstagram /></Social>
              <Social href="#" aria-label="TikTok"><FaTiktok /></Social>
              <Social href={`https://wa.me/${site.whatsapp}`} aria-label="WhatsApp"><FaWhatsapp /></Social>
            </div>
          </div>

          <FooterCol title="Studio" links={[
            { label: 'Services', href: '#services' },
            { label: 'Work', href: '#work' },
            { label: 'About', href: '#about' },
            { label: 'Reviews', href: '#reviews' },
          ]} />
          <FooterCol title="Info" links={[
            { label: 'Aftercare', href: '#' },
            { label: 'Pricing', href: '#' },
            { label: 'FAQ', href: '#' },
            { label: 'Cancellation', href: '#' },
          ]} />
          <FooterCol title="Contact" links={[
            { label: `WhatsApp: ${site.whatsappDisplay}`, href: `https://wa.me/${site.whatsapp}` },
            { label: `@${site.instagram}`, href: '#' },
            { label: site.address.line1, href: '#location' },
            { label: `${site.address.line2}, ${site.address.line3}`, href: '#location' },
          ]} />
        </div>

        <div className="pt-8 flex flex-wrap justify-between items-center gap-4 text-[0.72rem] text-cream-faint tracking-wide">
          <span>© {new Date().getFullYear()} {site.brand}. All rights reserved.</span>
          <span>
            <a href="#" className="hover:text-cream-dim transition-colors">Privacy</a>
            {' · '}
            <a href="#" className="hover:text-cream-dim transition-colors">Terms</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

function Social({ href, children, ...rest }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-cream-dim text-sm transition-all hover:border-accent hover:text-accent hover:-translate-y-0.5"
      {...rest}
    >
      {children}
    </a>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h5 className="text-[0.65rem] tracking-[0.22em] uppercase text-cream font-semibold mb-5">
        {title}
      </h5>
      <ul className="flex flex-col gap-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-cream-dim text-[0.82rem] font-light transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}