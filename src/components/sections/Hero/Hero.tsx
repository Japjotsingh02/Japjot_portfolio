'use client'

import { motion } from 'framer-motion'
import MagneticButton from '@/components/ui/MagneticButton'
import { siteConfig } from '@/config/site'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
})

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-32 pb-20"
      id="hero"
    >
      <div className="max-w-[1100px] mx-auto w-full">

        <motion.div
          {...fadeUp(0.2)}
          className="flex items-center gap-3 font-mono text-[12px] tracking-[0.12em] uppercase mb-8"
          style={{ color: 'var(--text3)' }}
        >
          <span className="block w-6 h-px" style={{ background: 'var(--text3)' }} />
          Available for opportunities
        </motion.div>

        <motion.h1
          {...fadeUp(0.35)}
          className="font-serif leading-[1.0] tracking-[-0.02em] mb-6"
          style={{
            fontSize: 'clamp(3.5rem, 8vw, 7.5rem)',
            color: 'var(--text)',
            fontWeight: 400,
          }}
        >
          {siteConfig.name.split(' ')[0]}
          <br />
          <em style={{ color: 'var(--text2)' }}>
            {siteConfig.name.split(' ')[1]}
          </em>
        </motion.h1>

        <motion.p
          {...fadeUp(0.5)}
          className="font-sans text-base md:text-lg font-light leading-relaxed max-w-md mb-12"
          style={{ color: 'var(--text2)' }}
        >
          {siteConfig.bio}
        </motion.p>

        <motion.div {...fadeUp(0.65)} className="flex flex-wrap gap-4">
          <MagneticButton>
            <a
              href="#projects"
              className="inline-block font-sans text-[13px] tracking-[0.04em] px-7 py-3 rounded-full transition-all duration-300"
              style={{
                background: 'var(--text)',
                color: 'var(--bg)',
                border: '1px solid var(--text)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'var(--text)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--text)'
                e.currentTarget.style.color = 'var(--bg)'
              }}
            >
              View work
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="#contact"
              className="inline-block font-sans text-[13px] tracking-[0.04em] px-7 py-3 rounded-full transition-all duration-300"
              style={{
                background: 'transparent',
                color: 'var(--text2)',
                border: '1px solid var(--border2)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--text)'
                e.currentTarget.style.borderColor = 'var(--text)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text2)'
                e.currentTarget.style.borderColor = 'var(--border2)'
              }}
            >
              Get in touch
            </a>
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-6 md:left-10 hidden md:flex items-center gap-3"
        style={{ color: 'var(--text3)' }}
      >
        <span className="font-mono text-[11px] tracking-[0.1em] uppercase">
          scroll
        </span>
        <motion.span
          className="block w-px bg-current"
          initial={{ height: 0 }}
          animate={{ height: 48 }}
          transition={{ delay: 1.5, duration: 1.0, ease: 'easeOut' }}
          style={{ background: 'var(--text3)' }}
        />
      </motion.div>
    </section>
  )
}
