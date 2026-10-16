import { FaCircle } from 'react-icons/fa';
import { marqueeItems } from '../data/site';

export default function Marquee() {
  const row = (
    <span className="font-serif text-2xl font-normal text-cream-dim inline-flex items-center gap-12 tracking-[-0.01em] pr-12">
      {marqueeItems.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-12">
          <span className={i === 3 ? 'italic text-cream' : ''}>{item}</span>
          <FaCircle className="text-accent text-xs" />
        </span>
      ))}
    </span>
  );

  return (
    <div className="py-6 border-y border-white/10 overflow-hidden bg-bg-card">
      <div className="flex gap-12 animate-scroll whitespace-nowrap">
        {row}
        {row}
      </div>
    </div>
  );
}