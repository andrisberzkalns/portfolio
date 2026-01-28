import { useEffect } from 'react'
import type { RefObject } from 'react'

import { HeroGlowRenderer } from '../components/hero/HeroGlowRenderer'

type HeroGlowRefs = {
  canvasRef: RefObject<HTMLCanvasElement | null>
  containerRef: RefObject<HTMLElement | null>
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)

export function useHeroGlow({ canvasRef, containerRef }: HeroGlowRefs) {
  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) {
      return
    }

    const renderer = new HeroGlowRenderer(canvas, {
      primaryColor: { r: 88, g: 214, b: 255 },
      secondaryColor: { r: 255, g: 176, b: 120 },
      ambientColor: { r: 190, g: 225, b: 230 },
      primaryOpacity: 0.24,
      secondaryOpacity: 0.16,
      ambientOpacity: 0.06,
      primaryRadiusScale: 0.58,
      secondaryRadiusScale: 0.95,
      ambientRadiusScale: 1.2,
      centerFadeRadius: 0.1,
      centerFadeStrength: 0.8,
      centerFadeExponent: 1,
      smoothing: 0.1,
      tiltStrength: 0.09,
    })

    const defaultTarget = { x: 0.5, y: 0.35 }
    renderer.setTarget(defaultTarget.x, defaultTarget.y)
    renderer.resize()

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    )

    const updateMotionPreference = () => {
      if (prefersReducedMotion.matches) {
        renderer.stop()
        renderer.renderOnce()
        return
      }
      renderer.start()
    }

    const handlePointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect()
      if (rect.width === 0 || rect.height === 0) {
        return
      }
      const x = (event.clientX - rect.left) / rect.width
      const y = (event.clientY - rect.top) / rect.height
      renderer.setTarget(x, y)
    }

    const handleWindowLeave = () => {
      renderer.setTarget(defaultTarget.x, defaultTarget.y)
    }

    const handleOrientation = (event: DeviceOrientationEvent) => {
      const tiltX = clamp((event.gamma ?? 0) / 30, -1, 1)
      const tiltY = clamp((event.beta ?? 0) / 30, -1, 1)
      renderer.setTilt(tiltX, -tiltY)
    }

    const handleResize = () => renderer.resize()
    const resizeObserver =
      'ResizeObserver' in window ? new ResizeObserver(handleResize) : null

    resizeObserver?.observe(container)
    window.addEventListener('resize', handleResize)
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerdown', handlePointerMove, { passive: true })
    window.addEventListener('pointerleave', handleWindowLeave, {
      passive: true,
    })
    window.addEventListener('deviceorientation', handleOrientation)

    prefersReducedMotion.addEventListener('change', updateMotionPreference)

    updateMotionPreference()

    return () => {
      renderer.stop()
      resizeObserver?.disconnect()
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerdown', handlePointerMove)
      window.removeEventListener('pointerleave', handleWindowLeave)
      window.removeEventListener('deviceorientation', handleOrientation)
      prefersReducedMotion.removeEventListener('change', updateMotionPreference)
    }
  }, [canvasRef, containerRef])
}
