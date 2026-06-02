import Reveal from '@/components/ui/Reveal'
import SectionLabel from '@/components/ui/SectionLabel'
import Divider from '@/components/ui/Divider'
import ProjectCard from './ProjectCard'
import { projects } from '@/config/projects'

export default function Projects() {
  return (
    <>
      <Divider />
      <section
        id="projects"
        className="py-24 md:py-32 px-6 md:px-10 max-w-[1100px] mx-auto"
      >
        <Reveal>
          <SectionLabel>Selected work</SectionLabel>
        </Reveal>

        <div className="flex flex-col gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </section>
    </>
  )
}
