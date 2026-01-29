import { useCallback, useRef, useState } from 'react'
import type { MouseEvent, PointerEvent } from 'react'

type DragScrollOptions = {
  threshold?: number
  ignoreSelector?: string
  onDragEnd?: (payload: DragEndPayload) => void
}

type DragEndPayload = {
  deltaX: number
  startX: number
  endX: number
  startScrollLeft: number
  endScrollLeft: number
  hasDragged: boolean
  pointerType: PointerEvent<HTMLDivElement>['pointerType']
}

type DragScrollHandlers = {
  onPointerDown: (event: PointerEvent<HTMLDivElement>) => void
  onPointerMove: (event: PointerEvent<HTMLDivElement>) => void
  onPointerUp: (event: PointerEvent<HTMLDivElement>) => void
  onPointerLeave: (event: PointerEvent<HTMLDivElement>) => void
  onPointerCancel: (event: PointerEvent<HTMLDivElement>) => void
  onClickCapture: (event: MouseEvent<HTMLDivElement>) => void
}

export function useDragScroll(options: DragScrollOptions = {}) {
  const { threshold = 6, ignoreSelector, onDragEnd } = options
  const [isDragging, setIsDragging] = useState(false)
  const [hasDragged, setHasDragged] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const startXRef = useRef(0)
  const startScrollLeftRef = useRef(0)
  const isPressedRef = useRef(false)
  const hasDraggedRef = useRef(false)

  const resetDragState = useCallback(() => {
    isPressedRef.current = false
    setIsPressed(false)
    setIsDragging(false)
    hasDraggedRef.current = false
    setHasDragged(false)
  }, [])

  const onPointerDown = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (event.button !== 0 && event.pointerType === 'mouse') {
        return
      }

      if (ignoreSelector && event.target instanceof Element) {
        const ignoreTarget = event.target.closest(ignoreSelector)
        if (ignoreTarget) {
          return
        }
      }

      event.currentTarget.setPointerCapture(event.pointerId)
      isPressedRef.current = true
      hasDraggedRef.current = false
      setHasDragged(false)
      setIsPressed(true)
      startXRef.current = event.clientX
      startScrollLeftRef.current = event.currentTarget.scrollLeft
    },
    [ignoreSelector],
  )

  const onPointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (!isPressedRef.current) {
        return
      }

      const deltaX = event.clientX - startXRef.current
      if (!hasDraggedRef.current && Math.abs(deltaX) > threshold) {
        hasDraggedRef.current = true
        setHasDragged(true)
        setIsDragging(true)
      }

      if (!hasDraggedRef.current) {
        return
      }

      event.preventDefault()
      event.currentTarget.scrollLeft = startScrollLeftRef.current - deltaX
    },
    [threshold],
  )

  const onPointerEnd = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId)
      }
      if (isPressedRef.current && onDragEnd) {
        const endX = event.clientX
        onDragEnd({
          deltaX: endX - startXRef.current,
          startX: startXRef.current,
          endX,
          startScrollLeft: startScrollLeftRef.current,
          endScrollLeft: event.currentTarget.scrollLeft,
          hasDragged: hasDraggedRef.current,
          pointerType: event.pointerType,
        })
      }
      resetDragState()
    },
    [onDragEnd, resetDragState],
  )

  const onClickCapture = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (!hasDraggedRef.current) {
        return
      }
      if (event.target instanceof Element) {
        const priorityTarget = event.target.closest('[data-click-priority]')
        if (priorityTarget) {
          hasDraggedRef.current = false
          setHasDragged(false)
          return
        }
      }
      event.preventDefault()
      event.stopPropagation()
    },
    [],
  )

  const handlers: DragScrollHandlers = {
    onPointerDown,
    onPointerMove,
    onPointerUp: onPointerEnd,
    onPointerLeave: onPointerEnd,
    onPointerCancel: onPointerEnd,
    onClickCapture,
  }

  return { handlers, isDragging, hasDragged, isPressed }
}
