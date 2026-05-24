"use client";

import { useState } from "react";
import { skillGroups } from "@/src/data/portfolio";
import SectionHeading from "@/src/components/ui/SectionHeading";

const INITIAL_SKILL_GROUP_LIMIT = 4;

export default function Skills() {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasMoreSkillGroups = skillGroups.length > INITIAL_SKILL_GROUP_LIMIT;
  const visibleSkillGroups = isExpanded
    ? skillGroups
    : skillGroups.slice(0, INITIAL_SKILL_GROUP_LIMIT);
  const hiddenCount = skillGroups.length - INITIAL_SKILL_GROUP_LIMIT;

  return (
    <section className="mx-auto max-w-content px-6 py-20 sm:px-8">
      <SectionHeading
        eyebrow="Capabilities"
        title="Technical Skills"
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {visibleSkillGroups.map((group) => (
          <article
            className="rounded-card border border-border-subtle bg-surface p-7 shadow-premium transition-all duration-500 ease-premium hover:-translate-y-1 hover:shadow-premium-hover"
            key={group.domain}
          >
            <h3 className="text-lg font-semibold text-ink">{group.title}</h3>
            <p className="mt-3 text-sm leading-6 text-ink-secondary">
              {group.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  className="rounded border border-border-subtle bg-canvas px-3 py-1 font-mono text-xs text-ink-muted"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-5 font-mono text-xs leading-6 text-ink-muted">
              Evidence: {group.evidence.join(" / ")}
            </p>
          </article>
        ))}
      </div>
      {hasMoreSkillGroups ? (
        <div className="mt-10 flex justify-center">
          <button
            className="flex items-center gap-2 rounded-full border border-border-subtle bg-transparent px-6 py-3 text-sm font-semibold text-ink-secondary transition-all duration-500 ease-premium hover:border-black/30 hover:bg-black/[0.01] hover:text-ink"
            onClick={() => setIsExpanded((currentState) => !currentState)}
            type="button"
          >
            <span>{isExpanded ? "Show fewer skills" : `Show ${hiddenCount} more skills`}</span>
            <span aria-hidden="true">{isExpanded ? "^" : "v"}</span>
          </button>
        </div>
      ) : null}
    </section>
  );
}
