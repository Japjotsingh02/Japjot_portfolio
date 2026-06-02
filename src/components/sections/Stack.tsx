'use client'

import { motion } from 'framer-motion'
import Reveal from '@/components/ui/Reveal'
import SectionLabel from '@/components/ui/SectionLabel'
import Divider from '@/components/ui/Divider'
import { stack } from '@/config/site'

export default function Stack() {
  return (
    <>
      <Divider />
      <section
        id="stack"
        className="py-24 md:py-32 px-6 md:px-10 max-w-[1100px] mx-auto"
      >
        <Reveal>
          <SectionLabel>Technologies</SectionLabel>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {stack.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: i * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="stack-item font-mono text-[11px] tracking-[0.04em] text-center py-4 px-3 rounded-xl transition-all duration-200 cursor-default"
              style={{
                color: 'var(--text2)',
                border: '1px solid var(--border)',
              }}
              whileHover={{
                borderColor: 'var(--border2)',
                color: 'var(--text)',
                background: 'var(--bg2)',
              }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
