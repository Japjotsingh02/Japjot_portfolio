'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Project } from '@/config/projects'

type Props = {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: Props) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    cardRef.current.style.setProperty(
      '--mouse-x',
      e.clientX - rect.left + 'px'
    )
    cardRef.current.style.setProperty(
      '--mouse-y',
      e.clientY - rect.top + 'px'
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div
        ref={cardRef}
        className="project-card relative rounded-2xl p-8 md:p-10 transition-all duration-300 overflow-hidden"
        onMouseMove={handleMouseMove}
        style={{
          background: project.featured ? 'var(--bg3)' : 'var(--bg2)',
          border: '1px solid var(--border)',
        }}
        onMouseEnter={e =>
          (e.currentTarget.style.borderColor = 'var(--border2)')
        }
        onMouseLeave={e =>
          (e.currentTarget.style.borderColor = 'var(--border)')
        }
      >
        {/* Spotlight effect */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 hover-spotlight"
          style={{
            background:
              'radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.03), transparent 40%)',
          }}
        />

        <div className="relative z-10 flex flex-col md:flex-row justify-between gap-6 items-start">
          <div className="flex-1 min-w-0">
            <div
              className="font-mono text-[11px] tracking-[0.1em] mb-5"
              style={{ color: 'var(--text3)' }}
            >
              {project.num}
              {project.featured && ' — Featured'}
            </div>

            <h3
              className="font-serif font-normal leading-[1.1] tracking-[-0.01em] mb-4"
              style={{
                fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)',
                color: 'var(--text)',
              }}
            >
              {project.name}
            </h3>

            <p
              className="font-sans text-[14px] font-light leading-[1.75] max-w-xl mb-6"
              style={{ color: 'var(--text2)' }}
            >
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="font-mono text-[10px] tracking-[0.06em] px-2.5 py-1 rounded-full"
                  style={{
                    color: 'var(--text3)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex md:flex-col items-center md:items-end gap-4 flex-shrink-0">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] tracking-[0.06em] flex items-center gap-1.5 transition-colors duration-200"
                style={{ color: 'var(--text3)' }}
                onMouseEnter={e =>
                  (e.currentTarget.style.color = 'var(--text)')
                }
                onMouseLeave={e =>
                  (e.currentTarget.style.color = 'var(--text3)')
                }
              >
                Live{' '}
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] tracking-[0.06em] flex items-center gap-1.5 transition-colors duration-200"
                style={{ color: 'var(--text3)' }}
                onMouseEnter={e =>
                  (e.currentTarget.style.color = 'var(--text)')
                }
                onMouseLeave={e =>
                  (e.currentTarget.style.color = 'var(--text3)')
                }
              >
                GitHub <span>↗</span>
              </a>
            )}
            {project.private && (
              <span
                className="font-mono text-[10px] tracking-[0.06em]"
                style={{ color: 'var(--text3)' }}
              >
                Private
              </span>
            )}
          </div>
        </div>

        {/* Mini heatmap preview for Coindra */}
        {project.featured && (
          <div
            className="mt-8 rounded-xl overflow-hidden"
            style={{
              border: '1px solid var(--border)',
              background: 'var(--bg)',
              height: 100,
              display: 'grid',
              gridTemplateColumns: 'repeat(14, 1fr)',
              gap: 3,
              padding: '10px',
            }}
          >
            {Array.from({ length: 28 }).map((_, i) => {
              const colors = [
                '#1a0808', '#0a1f10', '#1a0d0d', '#0d1515',
                '#1a1400', '#0a1f10', '#1a0808',
              ]
              return (
                <div
                  key={i}
                  style={{
                    background: colors[i % colors.length],
                    borderRadius: 3,
                  }}
                />
              )
            })}
          </div>
        )}
      </div>
    </motion.div>
  )
}
