import { cn } from '@/lib/utils'

type Props = {
  children: string
  className?: string
}

export default function SectionLabel({ children, className }: Props) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 font-mono text-[11px] tracking-[0.14em] uppercase mb-14',
        className
      )}
      style={{ color: 'var(--text3)' }}
    >
      <span
        className="block w-6 h-px flex-shrink-0"
        style={{ background: 'var(--text3)' }}
      />
      {children}
    </div>
  )
}
