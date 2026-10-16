import { FaWhatsapp } from 'react-icons/fa';
import { site } from '../data/site';

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${site.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 md:bottom-6 md:right-6 w-14 h-14 md:w-[58px] md:h-[58px] rounded-full bg-wa text-[#04150a] flex items-center justify-center text-2xl z-50 animate-wa-pulse transition-transform hover:scale-110"
    >
      <FaWhatsapp />
    </a>
  );
}