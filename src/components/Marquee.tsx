import { TRUSTED_COMPANIES } from '../data';

export default function Marquee() {
  // To create a seamless loop, we double the companies list
  const duplicatedCompanies = [...TRUSTED_COMPANIES, ...TRUSTED_COMPANIES];

  return (
    <section className="py-12 border-y border-white/5 bg-[#050816]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-8">
        <h3 className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-text-muted">
          TRUSTED BY INNOVATIVE TEAMS AT
        </h3>
      </div>
      
      {/* Infinite marquee container */}
      <div className="animate-marquee-container relative w-full">
        <div className="animate-marquee-track">
          {duplicatedCompanies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex items-center justify-center gap-2 px-8 py-2 text-text-muted hover:text-white transition-all duration-300 scale-95 hover:scale-105 group select-none"
            >
              {/* Dynamic Logo Graphics */}
              <span className="font-display font-bold text-xl md:text-2xl tracking-tighter opacity-40 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                {company.logoType === 'airbnb' && <span className="text-red-500 font-mono text-base mr-1">▲</span>}
                {company.logoType === 'google' && <span className="text-blue-500 font-sans text-base mr-1">G</span>}
                {company.logoType === 'nike' && <span className="italic font-extrabold mr-1">✓</span>}
                {company.logoType === 'uber' && <span className="font-mono text-base mr-1">■</span>}
                {company.logoType === 'stripe' && <span className="text-indigo-400 font-semibold mr-1">S</span>}
                {company.logoType === 'vercel' && <span className="font-mono text-base mr-1">▲</span>}
                {company.logoType === 'openai' && <span className="text-teal-400 font-mono text-base mr-1">❖</span>}
                {company.logoType === 'github' && <span className="font-mono text-base mr-1">⚙</span>}
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
