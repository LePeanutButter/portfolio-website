import { skillGroups } from "@/src/data/portfolio";
import SectionHeading from "@/src/components/ui/SectionHeading";

export default function Skills() {
  return (
    <section className="mx-auto max-w-content px-6 py-20 sm:px-8">
      <SectionHeading
        eyebrow="Capabilities"
        title="Technical Skills"
      />
      <div className="mt-12 space-y-12 overflow-hidden">
        {skillGroups.map((group, index) => {
          // Double the items array to create the infinite scroll effect seamlessly
          const marqueeItems = [...group.items, ...group.items, ...group.items, ...group.items];
          const isReverse = index % 2 === 1;
          
          return (
            <div key={group.domain}>
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-ink-muted mb-4 pb-3 border-b border-border-subtle">
                {group.title}
              </p>
              
              <div 
                className="overflow-hidden py-2 relative w-full" 
                style={{ 
                  maskImage: 'linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)'
                }}
              >
                <div 
                  className={`flex flex-row items-center gap-3 w-max whitespace-nowrap hover:[animation-play-state:paused] animate-marquee-horizontal ${isReverse ? "[animation-direction:reverse]" : ""}`}
                  style={{
                    animationDuration: `${40 + (index % 3) * 5}s`
                  }}
                >
                  {marqueeItems.map((item, i) => (
                    <div 
                      key={`${item}-${i}`}
                      aria-hidden={i >= group.items.length ? "true" : undefined}
                      className="inline-flex items-center gap-2.5 px-3 py-1.5 border border-border-subtle bg-surface hover:bg-canvas hover:border-black/20 transition-all duration-300 rounded-sm hover:-translate-y-0.5 group cursor-default"
                    >
                      {/* PLACEHOLDER_IMAGE_SOURCE - Update src below when logos are ready */}
                      <div className="w-5 h-5 rounded-sm border border-border-subtle bg-canvas flex items-center justify-center shrink-0 overflow-hidden">
                        <img 
                          src={`https://placehold.co/20x20/e5e7eb/6b7280?text=${encodeURIComponent(item.substring(0, 2).toUpperCase())}`}
                          alt={`${item} logo`}
                          className="w-full h-full object-contain opacity-80 group-hover:scale-110 transition-transform"
                        />
                      </div>
                      <span className="text-border-subtle font-mono text-[0.66rem] select-none">|</span>
                      <span className="font-mono text-xs tracking-wide text-ink-secondary group-hover:text-ink">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
