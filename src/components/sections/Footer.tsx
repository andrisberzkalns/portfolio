import { portfolioData } from '../../data/portfolio'

export default function Footer() {
  return (
    <footer className="bg-black px-6 py-10 text-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6">
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/70">
          {portfolioData.socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="transition hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-xs text-white/50">
          © {new Date().getFullYear()} {portfolioData.hero.name}
        </p>
      </div>
    </footer>
  )
}
