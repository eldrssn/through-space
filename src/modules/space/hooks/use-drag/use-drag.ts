import { useState, useRef, useCallback, useMemo } from 'react'
import { DragProps } from './types'
import { PositionType } from '../../types'
import * as PIXI from 'pixi.js'

export const useDrag = ({ initialPosition, position, setPosition }: DragProps) => {
  const [cursor, setCursor] = useState('grab')

  const dragging = useRef(false)
  const isDragged = useRef(false)
  const lastPosition = useRef<PositionType>(initialPosition)
  const positionRef = useRef<PositionType>(initialPosition)

  const handlePointerDown = useCallback((e: PIXI.FederatedPointerEvent) => {
    dragging.current = true
    lastPosition.current = { x: e.clientX, y: e.clientY }
    isDragged.current = false
    setCursor('grabbing')

    e.preventDefault()
  }, [])

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging.current) return

    const dx = e.clientX - lastPosition.current.x
    const dy = e.clientY - lastPosition.current.y

    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
      isDragged.current = true
    }

    lastPosition.current = { x: e.clientX, y: e.clientY }

    setPosition((prev) => ({
      x: prev.x + dx,
      y: prev.y + dy,
    }))
  }, [])

  const handlePointerUp = useCallback(() => {
    dragging.current = false
    setCursor('grab')
  }, [])

  const results = useMemo(
    () => ({
      position,
      positionRef,
      setPosition,
      cursor,
      draggingRef: dragging,
      isDraggedRef: isDragged,
      handlePointerDown,
      handlePointerMove,
      handlePointerUp,
    }),
    [position, cursor, handlePointerDown, handlePointerMove, handlePointerUp, setPosition]
  )

  return results
}
