'use client'

import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Application, extend } from '@pixi/react'
import * as PIXI from 'pixi.js'
import { gsap } from 'gsap'
import { Graphics, Sprite } from 'pixi.js'
import { Controls } from '../controls'

import { PositionType } from '../types'
import { DEFAULT_SCALE, MAX_GOBAL_SCALE, PARALLAX_DEPTH_FACTOR, ZOOM_SENSITIVITY } from '../constants'
import { PlanetsContainer } from '../planets-container'
import { MapProps } from './types'
import { useDrag, useTouch, useZoom } from '../hooks'
import { drawBackground } from './styles'
import { useIsMobile } from '@/hooks'

extend({
  Graphics,
  Sprite,
})

export const Map: FC<MapProps> = ({ dimensions, planetsList, searchResult }) => {
  const isMobile = useIsMobile()
  const initialPosition = useMemo(
    () => ({
      x: dimensions.width / 2,
      y: dimensions.height / 2,
    }),
    [dimensions]
  )

  const [position, setPosition] = useState<PositionType>({ x: 900, y: 900 })
  const [scale, setScale] = useState(DEFAULT_SCALE)

  const scaleRef = useRef(DEFAULT_SCALE)

  const { positionRef, cursor, draggingRef, isDraggedRef, handlePointerDown, handlePointerMove, handlePointerUp } =
    useDrag({
      initialPosition,
      position,
      setPosition,
    })

  const { animateZoomToPoint } = useZoom({
    scale,
    setScale,
    position,
    setPosition,
  })

  useEffect(() => {
    scaleRef.current = scale
  }, [scale])

  useEffect(() => {
    positionRef.current = position
  }, [position])

  const tweenUpdateHandler = (scale: number, position: PositionType) => {
    setScale(scale)
    setPosition(position)
  }

  const handleBackgroundClick = (e: PIXI.FederatedPointerEvent) => {
    if (isDraggedRef.current) return

    const { global } = e
    const clickX = global.x
    const clickY = global.y

    animateZoomToPoint(clickX, clickY, scaleRef.current * (1 + ZOOM_SENSITIVITY))
  }

  const handleZoomIn = useCallback(() => {
    animateZoomToPoint(dimensions.width / 2, dimensions.height / 2, scaleRef.current * 1.2)
  }, [animateZoomToPoint])

  const handleZoomOut = useCallback(() => {
    animateZoomToPoint(dimensions.width / 2, dimensions.height / 2, scaleRef.current / 1.2)
  }, [animateZoomToPoint])

  const { handleTouchStart, handleTouchMove, handleTouchEnd, handleTouchEndForDoubleTap } = useTouch({
    handleZoom: handleBackgroundClick,
    positionRef,
    scaleRef,
    tweenUpdateHandler,
  })

  useEffect(() => {
    const element = document.querySelector('#space-container') as HTMLElement

    if (element) {
      element.addEventListener('touchstart', handleTouchStart, { passive: false })
      element.addEventListener('touchmove', handleTouchMove, { passive: false })
      element.addEventListener('touchend', handleTouchEnd)
      element.addEventListener('touchend', handleTouchEndForDoubleTap)
      element.addEventListener('touchcancel', handleTouchEnd)
    }

    return () => {
      if (element) {
        element.removeEventListener('touchstart', handleTouchStart)
        element.removeEventListener('touchmove', handleTouchMove)
        element.removeEventListener('touchend', handleTouchEnd)
        element.removeEventListener('touchend', handleTouchEndForDoubleTap)
        element.removeEventListener('touchcancel', handleTouchEnd)
      }
    }
  }, [handleTouchStart, handleTouchMove, handleTouchEnd])

  useEffect(() => {
    if (!searchResult) return

    const planet = searchResult
    const targetScale = MAX_GOBAL_SCALE - 2

    const parallaxFactor = planet.z * PARALLAX_DEPTH_FACTOR

    const targetX = (dimensions.width / 2 - planet.x * targetScale) / (1 + parallaxFactor * targetScale)
    const targetY = (dimensions.height / 2 - planet.y * targetScale) / (1 + parallaxFactor * targetScale)

    gsap.to(
      { x: position.x, y: position.y, scale: scale },
      {
        x: targetX,
        y: targetY,
        scale: targetScale,
        duration: 0.8,
        ease: 'power1.out',
        onUpdate: function () {
          const target = this.targets()[0]
          tweenUpdateHandler(target.scale, { x: target.x, y: target.y })
        },
      }
    )
  }, [searchResult])

  return (
    <>
      <div id="space-container">
        <Application width={dimensions.width} height={dimensions.height} backgroundAlpha={0}>
          <pixiGraphics
            draw={drawBackground}
            eventMode="static"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            onClick={handleBackgroundClick}
            cursor={cursor}
          />
          <PlanetsContainer
            scale={scale}
            position={position}
            planetsList={planetsList}
            isMapDragging={draggingRef.current}
            isMapDragged={isDraggedRef.current}
          />
        </Application>
      </div>
      <Controls onZoomIn={handleZoomIn} onZoomOut={handleZoomOut} />
    </>
  )
}

export default Map
