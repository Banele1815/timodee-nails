import { useEffect, useState } from 'react';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import { site } from '../data/site';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#location', label: 'Visit' },
  { href: '#reviews', label: 'Reviews' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex justify-between items-center
        bg-bg/75 backdrop-blur-xl transition-colors duration-300
        ${scrolled || open ? 'border-b border-white/10' : 'border-b border-transparent'}`}
    >
      <a href="#" className="font-serif font-semibold text-lg tracking-[0.02em] flex items-center gap-2.5">
        <span className="w-[30px] h-[30px] rounded-full bg-gradient-to-br from-accent to-accent-deep flex items-center justify-center text-[0.8rem] font-extrabold text-[#1a0a10] font-serif">
          T
        </span>
        {site.brandShort}<em className="not-italic text-accent">.</em>NAILS
      </a>

      <div className="hidden md:flex gap-8 text-[0.72rem] tracking-[0.18em] uppercase font-medium">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-cream-dim hover:text-cream transition-colors relative group"
          >
            {l.label}
            <span className="absolute left-0 -bottom-1.5 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>

      <a
        href={`https://wa.me/${site.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full bg-wa text-[#04150a] text-[0.68rem] font-bold tracking-[0.14em] uppercase transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,211,102,0.35)]"
      >
        <FaWhatsapp /> Book
      </a>

      <button
        type="button"
        className="md:hidden text-xl p-2 -mr-2"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 right-0 bg-bg border-b border-white/10 px-6 py-6 flex flex-col gap-1"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-sm tracking-[0.18em] uppercase font-medium text-cream-dim hover:text-cream border-b border-white/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-wa text-[#04150a] text-[0.7rem] font-bold tracking-[0.14em] uppercase"
          >
            <FaWhatsapp /> Book on WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}