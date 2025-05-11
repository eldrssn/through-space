import { useCallback, useEffect, useRef } from 'react'

import * as PIXI from 'pixi.js'

import { MAX_SCALE, MIN_SCALE } from '../../constants'
import { PositionType } from '../../types'
import { createTweenMap } from '../../utils'
import { TouchProps } from './types'

export const useTouch = ({ positionRef, scaleRef, tweenUpdateHandler, handleZoom }: TouchProps) => {
  const velocityRef = useRef<PositionType>({ x: 0, y: 0 })
  const lastPosition = useRef<PositionType>({ x: 0, y: 0 })

  const touchStartDistance = useRef<number | null>(null)
  const touchStartCenter = useRef<PositionType | null>(null)
  const touchStartScale = useRef<number>(MIN_SCALE)
  const animationRef = useRef<gsap.core.Tween | null>(null)
  const isPinching = useRef<boolean>(false)

  const lastTapRef = useRef<number>(0)
  const tapTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const animatePositionAndScale = useCallback((newPosition: PositionType, newScale: number) => {
    const currentScale = scaleRef.current
    const currentPos = positionRef.current

    animationRef.current?.kill()
    animationRef.current = createTweenMap({
      scale: currentScale,
      position: currentPos,
      newScale,
      newPosition,
      duration: 0.1,
      tweenUpdateHandler,
    })
  }, [])

  const getDistance = (p1: PositionType, p2: PositionType): number => {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2))
  }

  const getMidpoint = (p1: PositionType, p2: PositionType): PositionType => {
    return {
      x: (p1.x + p2.x) / 2,
      y: (p1.y + p2.y) / 2,
    }
  }

  const handleTouchStart = (e: TouchEvent) => {
    if (e.touches.length === 1 && !isPinching.current) {
      lastPosition.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      }
      velocityRef.current = { x: 0, y: 0 }
    } else if (e.touches.length === 2) {
      isPinching.current = true

      const touch1 = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      const touch2 = { x: e.touches[1].clientX, y: e.touches[1].clientY }
      touchStartDistance.current = getDistance(touch1, touch2)
      touchStartCenter.current = getMidpoint(touch1, touch2)
      touchStartScale.current = scaleRef.current
    }
    e.preventDefault()
  }

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (e.touches.length === 2 && touchStartDistance.current && touchStartCenter.current) {
        const touch1 = e.touches[0]
        const touch2 = e.touches[1]

        const currentDistance = Math.hypot(touch2.clientX - touch1.clientX, touch2.clientY - touch1.clientY)
        const currentCenter = {
          x: (touch1.clientX + touch2.clientX) / 2,
          y: (touch1.clientY + touch2.clientY) / 2,
        }

        const scaleFactor = 1 + (currentDistance / touchStartDistance.current - 1) * 0.1
        const newScale = Math.min(Math.max(MIN_SCALE, touchStartScale.current * scaleFactor), MAX_SCALE)
        const scaleRatio = newScale / touchStartScale.current / 2
        const newPosition = {
          x: positionRef.current.x + (currentCenter.x - touchStartCenter.current.x) * scaleRatio,
          y: positionRef.current.y + (currentCenter.y - touchStartCenter.current.y) * scaleRatio,
        }

        animatePositionAndScale(newPosition, newScale)
        e.preventDefault()
      }
    },
    [animatePositionAndScale]
  )

  const handleTouchEnd = useCallback(() => {
    touchStartDistance.current = null
    touchStartCenter.current = null
    isPinching.current = false
  }, [])

  const handleTouchEndForDoubleTap = (e: TouchEvent) => {
    if (isPinching.current) return

    const currentTime = Date.now()
    const tapDelay = 300 // Максимальная задержка между тапами для двойного тапа
    const touch = e.changedTouches[0]

    if (currentTime - lastTapRef.current < tapDelay) {
      // Это двойной тап
      if (tapTimeoutRef.current) {
        clearTimeout(tapTimeoutRef.current)
        tapTimeoutRef.current = null
      }

      // Создаем синтетическое событие для handleBackgroundClick
      const syntheticEvent = {
        global: {
          x: touch.clientX,
          y: touch.clientY,
        },

        preventDefault: () => {},
      } as unknown as PIXI.FederatedPointerEvent

      handleZoom(syntheticEvent)
    } else {
      // Это одиночный тап, устанавливаем таймер
      tapTimeoutRef.current = setTimeout(() => {
        tapTimeoutRef.current = null
      }, tapDelay)
    }

    lastTapRef.current = currentTime
  }

  useEffect(() => {
    return () => {
      if (tapTimeoutRef.current) {
        clearTimeout(tapTimeoutRef.current)
      }
    }
  }, [])

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleTouchEndForDoubleTap,
    isPinching: isPinching.current,
  }
}
