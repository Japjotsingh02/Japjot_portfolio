'use client';

import Reveal from '@/components/effects/Reveal'
import SectionLabel from '@/components/ui/SectionLabel'
import Section from '@/components/ui/Section'
import { siteConfig } from '@/config/site'

const contactLinks = [
  {
    type: 'Email',
    value: 'sjapjot2002@gmail.com',
    href: 'mailto:sjapjot2002@gmail.com',
  },
  {
    type: 'LinkedIn',
    value: 'linkedin.com/in/japjot-singh-9a7b541a8',
    href: siteConfig.linkedin,
  },
  {
    type: 'GitHub',
    value: 'github.com/Japjotsingh02',
    href: siteConfig.github,
  },
  {
    type: 'LeetCode',
    value: '300+ problems · Rating 1510',
    href: siteConfig.leetcode,
  },
]

export default function Contact() {
  return (
    <Section id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
        <div>
          <Reveal>
            <SectionLabel>Contact</SectionLabel>
          </Reveal>

          <Reveal delay={0.1}>
            <h2
              className="font-serif font-normal leading-[1.15] tracking-[-0.01em] mb-5"
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                color: 'var(--text)',
              }}
            >
              Let&apos;s build something{' '}
              <em style={{ color: 'var(--text2)' }}>together</em>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p
              className="font-sans text-[15px] font-light leading-[1.8]"
              style={{ color: 'var(--text2)' }}
            >
              Open to full-time roles, freelance projects, and interesting
              collaborations. Based in Delhi, India - open to remote work globally.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-3 pt-0 md:pt-12">
          {contactLinks.map((link, i) => (
            <Reveal key={link.type} delay={0.1 + i * 0.08}>
              <a
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="contact-link flex items-center justify-between p-5 rounded-xl transition-all duration-250 group"
                style={{
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--border2)'
                  e.currentTarget.style.background = 'var(--bg2)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                <div className="flex flex-col gap-0.5">
                  <span
                    className="font-mono text-[10px] tracking-[0.1em] uppercase"
                    style={{ color: 'var(--text3)' }}
                  >
                    {link.type}
                  </span>
                  <span
                    className="font-sans text-[14px] font-light"
                    style={{ color: 'var(--text)' }}
                  >
                    {link.value}
                  </span>
                </div>
                <span
                  className="text-lg transition-transform duration-250 group-hover:translate-x-1 group-hover:-translate-y-1"
                  style={{ color: 'var(--text3)' }}
                >
                  ↗
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
