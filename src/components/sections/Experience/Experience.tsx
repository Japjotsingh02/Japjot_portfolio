import Reveal from '@/components/effects/Reveal'
import Section from '@/components/ui/Section'
import { experiences } from '@/config/experience'
import ExperienceCard from './ExperienceCard'

export default function Experience() {
  const expLength = experiences.length;
  return (
    <Section id="experience" label="Experience">
      <div>
        {experiences.map((exp, i) => (
          <Reveal key={exp.company + exp.period} delay={i * 0.1}>
            <ExperienceCard exp={exp} index={i} n={expLength} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
