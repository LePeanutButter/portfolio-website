import { education } from "@/src/data/portfolio";
import SectionHeading from "@/src/components/ui/SectionHeading";

export default function Education() {
  return (
    <section className="mx-auto max-w-content px-6 py-20 sm:px-8">
      <SectionHeading eyebrow="Academic base" title="Education" />
      <div className="mt-12 grid gap-6">
        {education.map((item) => (
          <article
            className="rounded-card border border-border-subtle bg-surface p-7 shadow-premium"
            key={item.degree}
          >
            <p className="font-mono text-xs text-ink-muted">
              {item.startDate} - {item.endDate}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-ink">
              {item.degree}
            </h3>
            <p className="mt-1 text-sm text-ink-secondary">
              {item.institution} / {item.location}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.focusAreas.map((area) => (
                <span
                  className="rounded border border-border-subtle bg-canvas px-3 py-1 font-mono text-xs text-ink-muted"
                  key={area}
                >
                  {area}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
