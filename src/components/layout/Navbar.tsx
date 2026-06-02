'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] px-6 md:px-10 py-5 flex items-center justify-between transition-all duration-300"
      style={{
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        background: scrolled ? 'var(--bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <Link
        href="/"
        className="font-mono text-[13px] tracking-[0.05em] transition-colors duration-200"
        style={{ color: 'var(--text2)' }}
      >
        JS / 2025
      </Link>

      <ul className="hidden md:flex items-center gap-8 list-none">
        {links.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              className="font-sans text-[13px] tracking-[0.03em] transition-colors duration-200 hover:opacity-100"
              style={{ color: 'var(--text2)' }}
              onMouseEnter={e =>
                (e.currentTarget.style.color = 'var(--text)')
              }
              onMouseLeave={e =>
                (e.currentTarget.style.color = 'var(--text2)')
              }
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {mounted && (
        <button
          onClick={toggleTheme}
          className="font-mono text-[11px] tracking-[0.05em] px-3 py-1.5 rounded-full transition-all duration-200"
          style={{
            color: 'var(--text2)',
            border: '1px solid var(--border2)',
            background: 'transparent',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = 'var(--text)'
            e.currentTarget.style.borderColor = 'var(--text)'
            e.currentTarget.style.background = 'var(--bg2)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = 'var(--text2)'
            e.currentTarget.style.borderColor = 'var(--border2)'
            e.currentTarget.style.background = 'transparent'
          }}
        >
          {theme === 'dark' ? 'light' : 'dark'}
        </button>
      )}
    </nav>
  )
}
