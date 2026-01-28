import { cn } from '../lib/utils'
import { useScrollThreshold } from '../hooks/useScrollThreshold'

type NavItem = {
  label: string
  href: string
}

const navItems: Array<NavItem> = [
  { label: 'Home', href: '#' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
]

export default function PortfolioHeader() {
  const isScrolled = useScrollThreshold(12)

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 transition-colors duration-300 z-30',
        isScrolled ? 'bg-slate-950/70 backdrop-blur' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="text-lg font-semibold tracking-tight text-white"
        >
          Andris Bērzkalns
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-white/30 px-4 py-2 text-sm text-white transition hover:border-white/70"
        >
          Contact me
        </a>
      </div>
      <div
        className={cn(
          'h-px w-full bg-white/10 transition-opacity duration-300',
          isScrolled ? 'opacity-100' : 'opacity-0',
        )}
      />
    </header>
  )
}
