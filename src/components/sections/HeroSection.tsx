import { useRef } from 'react'

import { portfolioData } from '../../data/portfolio'
import { useHeroGlow } from '../../hooks/useHeroGlow'
import SectionDivider from './SectionDivider'

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useHeroGlow({ canvasRef, containerRef: sectionRef })

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-[70vh] scroll-mt-24 items-center justify-center overflow-hidden px-6 py-24 text-white"
    >
      <div
        className="absolute inset-0 z-0 bg-slate-950/60"
        aria-hidden="true"
      />
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-1 h-full w-full"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
        <img
          src="/profile-color.webp"
          alt="Andris Bērzkalns"
          className="h-36 w-36 rounded-full border border-white/40 object-cover shadow-xl"
        />
        <div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {portfolioData.hero.name}
          </h1>
          <p className="mt-2 text-lg text-white/80">
            {portfolioData.hero.role}
          </p>
        </div>
        <p className="text-base text-white/70">{portfolioData.hero.tagline}</p>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={portfolioData.hero.ctaHref}
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            {portfolioData.hero.ctaLabel}
          </a>
          <a
            href="#projects"
            className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/70"
          >
            View projects
          </a>
        </div>
      </div>
      <SectionDivider
        fill="#ffffff"
        className="absolute bottom-0 left-0 z-20"
      />
    </section>
  )
}
