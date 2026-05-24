import type { ProjectCategory } from "@/src/types";

interface ProjectTabsProps {
  activeCategory: ProjectCategory;
}

export default function ProjectTabs({ activeCategory }: ProjectTabsProps) {
  const tabs: ProjectCategory[] = ["academic", "personal"];

  return (
    <div
      aria-label="Project category tabs"
      className="flex w-fit rounded-control border border-border-subtle bg-surface p-1 shadow-premium"
    >
      {tabs.map((tab) => (
        <span
          className={
            activeCategory === tab
              ? "rounded-[6px] bg-ink px-4 py-2 text-sm font-medium capitalize text-canvas"
              : "px-4 py-2 text-sm font-medium capitalize text-ink-secondary"
          }
          data-active={activeCategory === tab}
          key={tab}
        >
          {tab}
        </span>
      ))}
    </div>
  );
}
