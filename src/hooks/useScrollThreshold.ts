import { useEffect, useState } from 'react'

export function useScrollThreshold(threshold = 8) {
  const [isBeyond, setIsBeyond] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    let frame = 0

    const update = () => {
      frame = 0
      setIsBeyond(window.scrollY > threshold)
    }

    const onScroll = () => {
      if (frame) {
        return
      }
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) {
        window.cancelAnimationFrame(frame)
      }
    }
  }, [threshold])

  return isBeyond
}
