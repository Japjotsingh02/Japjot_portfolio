import Reveal from '@/components/ui/Reveal'
import SectionLabel from '@/components/ui/SectionLabel'
import Divider from '@/components/ui/Divider'
import { experiences } from '@/config/experience'

export default function Experience() {
  return (
    <>
      <Divider />
      <section
        id="experience"
        className="py-24 md:py-32 px-6 md:px-10 max-w-[1100px] mx-auto"
      >
        <Reveal>
          <SectionLabel>Experience</SectionLabel>
        </Reveal>

        <div>
          {experiences.map((exp, i) => (
            <Reveal key={exp.company + exp.period} delay={i * 0.1}>
              <div
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-10"
                style={{ borderTop: '1px solid var(--border)' }}
              >
                <div className="pt-0.5">
                  <div
                    className="font-mono text-[11px] tracking-[0.06em] mb-1.5"
                    style={{ color: 'var(--text3)' }}
                  >
                    {exp.period}
                  </div>
                  <div
                    className="font-sans text-[13px] font-light mb-1"
                    style={{ color: 'var(--text2)' }}
                  >
                    {exp.company}
                  </div>
                  <div
                    className="font-mono text-[11px] tracking-[0.04em]"
                    style={{ color: 'var(--text3)' }}
                  >
                    {exp.location}
                  </div>
                </div>

                <div>
                  <h3
                    className="font-serif font-normal leading-[1.1] tracking-[-0.01em] mb-5"
                    style={{
                      fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                      color: 'var(--text)',
                    }}
                  >
                    {exp.role}
                  </h3>

                  <ul className="flex flex-col gap-2.5">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="font-sans text-[14px] font-light leading-[1.65] pl-5 relative"
                        style={{ color: 'var(--text2)' }}
                      >
                        <span
                          className="absolute left-0 top-0"
                          style={{ color: 'var(--text3)' }}
                        >
                          —
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}

          <div
            className="h-px w-full"
            style={{ background: 'var(--border)' }}
          />
        </div>
      </section>
    </>
  )
}
