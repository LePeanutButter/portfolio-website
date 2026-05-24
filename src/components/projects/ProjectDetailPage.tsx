import Link from "next/link";
import type { ProjectCase } from "@/src/types";

interface ProjectDetailPageProps {
  project: ProjectCase;
}

export default function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const categoryLabel =
    project.category === "academic" ? "Academic Project" : "Personal Project";

  return (
    <main className="mx-auto max-w-content px-6 pb-24 pt-28 sm:px-8">
      <Link
        className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted transition-colors duration-500 ease-premium hover:text-ink"
        href="/#projects"
      >
        &lt;- Back to projects
      </Link>

      <section className="pt-16">
        <div className="flex flex-wrap gap-2">
          <span className="rounded border border-ink bg-ink px-3 py-1 font-mono text-xs text-canvas">
            {categoryLabel}
          </span>
          <span className="rounded border border-border-subtle bg-surface px-3 py-1 font-mono text-xs text-ink-muted">
            {project.kind === "case-study" ? "Case Study" : "Repository"}
          </span>
          {project.dateRange ? (
            <span className="rounded border border-border-subtle bg-surface px-3 py-1 font-mono text-xs text-ink-muted">
              {project.dateRange}
            </span>
          ) : null}
        </div>

        <h1 className="mt-8 max-w-5xl text-5xl font-extrabold leading-[1.05] text-ink sm:text-6xl">
          {project.title}
        </h1>
        <p className="mt-8 max-w-3xl text-lg font-light leading-8 text-ink-secondary">
          {project.summary}
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              className="rounded border border-border-subtle bg-surface px-3 py-1 font-mono text-xs text-ink-muted"
              key={technology}
            >
              {technology}
            </span>
          ))}
        </div>
      </section>

      <section className="grid gap-6 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-card border border-border-subtle bg-surface p-7 shadow-premium md:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
            Product narrative
          </p>
          <div className="mt-6 grid gap-5">
            {project.narrative.map((paragraph) => (
              <p
                className="text-sm leading-7 text-ink-secondary"
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="rounded-card border border-border-subtle bg-surface p-7 shadow-premium md:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
            Source signals
          </p>
          <ul className="mt-6 grid gap-3 text-sm leading-6 text-ink-secondary">
            {project.sourceSignals.map((signal) => (
              <li className="border-l border-border-subtle pl-4" key={signal}>
                {signal}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
              Repository map
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
              Modules behind the product
            </h2>
          </div>
          <span className="w-fit rounded border border-border-subtle bg-surface px-3 py-1 font-mono text-xs text-ink-muted">
            {project.modules.length} module{project.modules.length === 1 ? "" : "s"}
          </span>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {project.modules.map((module) => (
            <article
              className="flex flex-col rounded-card border border-border-subtle bg-surface p-7 shadow-premium transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-black/15 hover:shadow-premium-hover"
              key={module.repositoryUrl}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
                    {module.role}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold leading-7 text-ink">
                    {module.name}
                  </h3>
                </div>
                <a
                  className="w-fit rounded border border-border-subtle bg-canvas px-3 py-1 font-mono text-xs text-ink-muted transition-colors duration-500 ease-premium hover:border-ink hover:text-ink"
                  href={module.repositoryUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>

              <p className="mt-5 text-sm leading-7 text-ink-secondary">
                {module.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {module.technologies.map((technology) => (
                  <span
                    className="rounded border border-border-subtle bg-canvas px-2.5 py-1 font-mono text-[11px] text-ink-muted"
                    key={technology}
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-7 border-t border-border-subtle pt-5">
                <p className="font-mono text-xs text-ink-muted">
                  {module.localPath}
                </p>
                <ul className="mt-4 grid gap-3 text-sm leading-6 text-ink-secondary">
                  {module.evidence.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
