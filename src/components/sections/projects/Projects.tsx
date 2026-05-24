import AcademicProjects from "@/src/components/sections/projects/AcademicProjects";
import PersonalProjects from "@/src/components/sections/projects/PersonalProjects";
import ProjectTabs from "@/src/components/sections/projects/ProjectTabs";
import SectionHeading from "@/src/components/ui/SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-content px-6 py-20 sm:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading eyebrow="Selected work" title="Featured Projects" />
        <ProjectTabs activeCategory="academic" />
      </div>
      <div className="mt-12 grid gap-14">
        <AcademicProjects />
        <PersonalProjects />
      </div>
    </section>
  );
}
