'use client'

import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import { stack } from '@/config/site'

export default function Stack() {
  return (
    <Section id="stack" label="Technologies">
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
    </Section>
  )
}
