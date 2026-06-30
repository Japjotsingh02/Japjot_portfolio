import { siteConfig } from '@/config/site'

export default function Footer() {
  return (
    <footer
      className="px-6 md:px-10 py-8 flex flex-col md:flex-row justify-between items-center gap-3"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <span
        className="font-mono text-[11px] tracking-[0.06em]"
        style={{ color: 'var(--text3)' }}
      >
        © 2026 {siteConfig.name}
      </span>
      <span
        className="font-mono text-[11px] tracking-[0.06em]"
        style={{ color: 'var(--text3)' }}
      >
        {siteConfig.location} · Open to work
      </span>
    </footer>
  )
}
