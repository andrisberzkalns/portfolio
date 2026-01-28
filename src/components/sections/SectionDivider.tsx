import { cn } from '../../lib/utils'

type SectionDividerProps = {
  fill: string
  flip?: boolean
  className?: string
}

export default function SectionDivider({
  fill,
  flip = false,
  className,
}: SectionDividerProps) {
  return (
    <div
      className={cn('section-divider', flip && 'rotate-180', className)}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path
          fill={fill}
          d="M0,30 C 280,90 620,0 960,30 C 1180,50 1320,70 1440,20 L1440,100 L0,100 Z"
        />
      </svg>
    </div>
  )
}
