import Reveal from '@/components/effects/Reveal'
import Section from '@/components/ui/Section'
import { stats } from '@/config/site'

export default function About() {
  return (
    <Section id="about" label="About">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
        <div>
          <Reveal delay={0.1}>
            <h2
              className="font-serif font-normal leading-[1.15] tracking-[-0.01em] mb-6"
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                color: 'var(--text)',
              }}
            >
              Building products that{' '}
              <em style={{ color: 'var(--text2)' }}>work and look</em> the
              part
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p
              className="font-sans text-[15px] font-light leading-[1.8] mb-4"
              style={{ color: 'var(--text2)' }}
            >
              I&apos;m a full stack developer with 2+ years of production
              experience at fintech SaaS companies. My work spans from
              building LLM-powered document automation to crafting real-time
              data visualization interfaces.
            </p>
            <p
              className="font-sans text-[15px] font-light leading-[1.8]"
              style={{ color: 'var(--text2)' }}
            >
              I care about both the engineering and the experience, clean
              architecture, readable code, and interfaces users actually enjoy
              using.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.1 + i * 0.08}>
              <div
                className="pt-5"
                style={{ borderTop: '1px solid var(--border)' }}
              >
                <div
                  className="font-serif text-4xl font-normal mb-1.5"
                  style={{ color: 'var(--text)' }}
                >
                  {stat.num}
                </div>
                <div
                  className="font-mono text-[11px] tracking-[0.05em]"
                  style={{ color: 'var(--text3)' }}
                >
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
