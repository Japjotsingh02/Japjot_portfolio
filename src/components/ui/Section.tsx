import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import Reveal from '@/components/effects/Reveal'
import SectionLabel from '@/components/ui/SectionLabel'
import Divider from '@/components/ui/Divider'

type Props = {
  id: string
  children: ReactNode
  label?: string
  className?: string
  showDivider?: boolean
}

export default function Section({
  id,
  children,
  label,
  className,
  showDivider = true,
}: Props) {
  return (
    <>
      {showDivider && <Divider />}
      <section
        id={id}
        className={cn(
          'mx-auto max-w-[1100px] px-6 py-24 md:px-10 md:py-22',
          className
        )}
      >
        {label && (
          <Reveal>
            <SectionLabel>{label}</SectionLabel>
          </Reveal>
        )}
        {children}
      </section>
    </>
  )
}
