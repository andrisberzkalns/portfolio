import { useCallback, useEffect, useRef, useState } from 'react'
import type { PointerEvent } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { portfolioData, type Project } from '../../data/portfolio'
import { useDragScroll } from '../../hooks/useDragScroll'
import { cn } from '../../lib/utils'

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex h-full w-[320px] shrink-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:w-[360px] snap-start">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        draggable={false}
        data-click-priority
        onDragStart={(event) => event.preventDefault()}
        className={cn(
          'relative w-full aspect-4/3 overflow-hidden block cursor-pointer transition duration-200 hover:brightness-107',
          project.gradientClass,
        )}
      >
        <img
          src={project.imageSrc}
          alt={project.imageAlt ?? `${project.title} preview`}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          draggable={false}
          onDragStart={(event) => event.preventDefault()}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/35 via-black/0 to-transparent" />
      </a>
      <div className="flex flex-1 flex-col space-y-3 p-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            {project.subtitle}
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            draggable={false}
            data-click-priority
            onDragStart={(event) => event.preventDefault()}
            className="mt-1 inline-block text-lg font-semibold text-slate-900 transition hover:text-slate-700 hover:underline cursor-pointer"
          >
            {project.title}
          </a>
          <p className="mt-2 text-sm text-slate-500">{project.description}</p>
        </div>
        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  const [isAtStart, setIsAtStart] = useState(true)
  const [isAtEnd, setIsAtEnd] = useState(false)
  const [isSnapping, setIsSnapping] = useState(false)
  const cancelScrollAnimation = useCallback(() => {
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current)
      animationFrameRef.current = null
    }
    setIsSnapping(false)
  }, [])
  const animateScrollTo = useCallback(
    (target: number) => {
      const scroller = scrollerRef.current
      if (!scroller) {
        return
      }
      cancelScrollAnimation()
      const start = scroller.scrollLeft
      if (Math.abs(target - start) < 1) {
        setIsSnapping(false)
        return
      }
      const duration = 300
      let startTime: number | null = null
      setIsSnapping(true)
      const step = (timestamp: number) => {
        if (startTime === null) {
          startTime = timestamp
        }
        const elapsed = timestamp - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        scroller.scrollLeft = start + (target - start) * eased
        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(step)
        } else {
          animationFrameRef.current = null
          setIsSnapping(false)
        }
      }
      animationFrameRef.current = requestAnimationFrame(step)
    },
    [cancelScrollAnimation],
  )
  const getScrollMetrics = useCallback(() => {
    const scroller = scrollerRef.current
    if (!scroller) {
      return null
    }
    const firstCard = scroller.querySelector<HTMLElement>('[data-project-card]')
    if (!firstCard) {
      return null
    }
    const gap = parseFloat(getComputedStyle(scroller).columnGap || '0')
    const step = firstCard.offsetWidth + gap
    const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth
    return { scroller, step, maxScrollLeft }
  }, [])
  const snapToIntent = useCallback(
    (direction: 'next' | 'prev', currentScrollLeft?: number) => {
      const metrics = getScrollMetrics()
      if (!metrics) {
        return
      }
      const { scroller, step, maxScrollLeft } = metrics
      if (step <= 0) {
        return
      }
      const current = currentScrollLeft ?? scroller.scrollLeft
      const nextIndex =
        direction === 'next'
          ? Math.floor(current / step) + 1
          : Math.ceil(current / step) - 1
      const target = Math.min(Math.max(nextIndex * step, 0), maxScrollLeft)
      animateScrollTo(target)
    },
    [animateScrollTo, getScrollMetrics],
  )
  const {
    handlers: dragHandlers,
    isDragging,
    isPressed,
  } = useDragScroll({
    ignoreSelector: '[data-click-priority]',
    onDragEnd: (payload) => {
      if (!payload.hasDragged || payload.pointerType !== 'touch') {
        return
      }
      const scrollDelta = payload.endScrollLeft - payload.startScrollLeft
      if (Math.abs(scrollDelta) < 2) {
        return
      }
      snapToIntent(scrollDelta > 0 ? 'next' : 'prev', payload.endScrollLeft)
    },
  })
  const pointerHandlers = {
    ...dragHandlers,
    onPointerDown: (event: PointerEvent<HTMLDivElement>) => {
      cancelScrollAnimation()
      dragHandlers.onPointerDown(event)
    },
  }

  const scrollByCard = (direction: 'next' | 'prev') => {
    const metrics = getScrollMetrics()
    if (!metrics) {
      return
    }
    const { scroller, step, maxScrollLeft } = metrics
    const target =
      direction === 'next'
        ? Math.min(scroller.scrollLeft + step, maxScrollLeft)
        : Math.max(scroller.scrollLeft - step, 0)
    animateScrollTo(target)
  }

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) {
      return
    }

    const updateEdges = () => {
      const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth
      setIsAtStart(scroller.scrollLeft <= 4)
      setIsAtEnd(scroller.scrollLeft >= maxScrollLeft - 4)
    }

    updateEdges()
    scroller.addEventListener('scroll', updateEdges, { passive: true })
    window.addEventListener('resize', updateEdges)

    return () => {
      scroller.removeEventListener('scroll', updateEdges)
      window.removeEventListener('resize', updateEdges)
    }
  }, [])

  return (
    <section id="projects" className="bg-white px-6 py-20 scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Projects</h2>
          <p className="mt-3 text-base text-slate-500">
            A small selection of side projects and experiments I have built
          </p>
        </div>
      </div>
      <div className="relative w-full">
        <div
          className={cn(
            'pointer-events-none absolute left-0 top-0 z-10 hidden h-full w-16 bg-linear-to-r from-white to-transparent transition-opacity duration-200 sm:block',
            isAtStart ? 'opacity-0' : 'opacity-100',
          )}
          aria-hidden="true"
        />
        <button
          type="button"
          onClick={() => scrollByCard('prev')}
          className={cn(
            'absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-md transition-opacity duration-300 hover:bg-white',
            isAtStart ? 'pointer-events-none opacity-0' : 'opacity-100',
          )}
          aria-label="Scroll to previous project"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div
          className={cn(
            'pointer-events-none absolute right-0 top-0 z-10 hidden h-full w-16 bg-linear-to-l from-white to-transparent transition-opacity duration-200 sm:block',
            isAtEnd ? 'opacity-0' : 'opacity-100',
          )}
          aria-hidden="true"
        />
        <button
          type="button"
          onClick={() => scrollByCard('next')}
          className={cn(
            'absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-md transition-opacity duration-300 hover:bg-white',
            isAtEnd ? 'pointer-events-none opacity-0' : 'opacity-100',
          )}
          aria-label="Scroll to next project"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        <div
          ref={scrollerRef}
          {...pointerHandlers}
          className={cn(
            'items-stretch flex snap-x gap-6 overflow-x-auto py-4 hide-scrollbar select-none',
            isDragging
              ? 'snap-none cursor-grabbing'
              : isSnapping
                ? 'snap-none'
                : 'snap-mandatory',
            isPressed ? 'cursor-grabbing' : 'hover:cursor-grab',
          )}
          style={{ touchAction: 'pan-y' }}
        >
          {portfolioData.projects.map((project) => (
            <div key={project.id} data-project-card>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
