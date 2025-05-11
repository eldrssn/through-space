import { useCallback, useEffect, useRef } from 'react'

import { MAX_SCALE, MIN_SCALE, ZOOM_SENSITIVITY } from '../../constants'
import { PositionType } from '../../types'
import { createTweenMap } from '../../utils'
import { ZoomProps } from './types'

export const useZoom = ({ scale, setScale, position, setPosition }: ZoomProps) => {
  const scaleRef = useRef(scale)
  const positionRef = useRef(position)
  const animationRef = useRef<gsap.core.Tween | null>(null)

  const updateRefs = () => {
    scaleRef.current = scale
    positionRef.current = position
  }

  const tweenUpdateHandler = (scale: number, position?: PositionType) => {
    setScale(scale)

    if (position) {
      setPosition(position)
    }
  }

  const animateZoomToPoint = useCallback((clickX: number, clickY: number, targetScale: number) => {
    const currentScale = scaleRef.current
    const currentPos = positionRef.current

    const newScale = Math.min(Math.max(MIN_SCALE, targetScale), MAX_SCALE)

    const offsetX = clickX - currentPos.x
    const offsetY = clickY - currentPos.y

    const newPos = {
      x: clickX - (offsetX / currentScale) * newScale,
      y: clickY - (offsetY / currentScale) * newScale,
    }

    animationRef.current?.kill()

    animationRef.current = createTweenMap({
      scale: currentScale,
      position: currentPos,
      newPosition: newPos,
      duration: 0.5,
      newScale,
      tweenUpdateHandler,
    })
  }, [])

  const zoom = useCallback((delta: number) => {
    const zoomFactor = delta > 0 ? 1 + ZOOM_SENSITIVITY / 4 : 1 - ZOOM_SENSITIVITY / 4
    return scaleRef.current * zoomFactor
  }, [])

  useEffect(() => {
    updateRefs()
  }, [position, scale])

  return {
    animateZoomToPoint,
    zoom,
  }
}
