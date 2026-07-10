import Reveal from "@/components/effects/Reveal";
import Section from "@/components/ui/Section";
import ProjectCard from "./ProjectCard";
import { projects } from "@/config/projects";

export default function Projects() {
  return (
    <Section id="projects" label="Selected work">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.08} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
