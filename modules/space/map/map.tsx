'use client'

import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { gsap } from 'gsap'
import * as PIXI from 'pixi.js'
import { Graphics, Sprite } from 'pixi.js'

import { Application, extend } from '@pixi/react'

import { DEFAULT_SCALE, MAX_GOBAL_SCALE, PARALLAX_DEPTH_FACTOR, ZOOM_SENSITIVITY } from '../constants'
import { Controls } from '../controls'
import { useDrag, useTouch, useZoom } from '../hooks'
import { PlanetsContainer } from '../planets-container'
import { PositionType } from '../types'
import { drawBackground } from './styles'
import { MapProps } from './types'

extend({
  Graphics,
  Sprite,
})

export const Map: FC<MapProps> = ({ planetsList, searchResult }) => {
  const initialPosition = useMemo(
    () => ({
      x: window?.innerWidth / 2,
      y: window?.innerWidth / 2,
    }),
    []
  )

  const [position, setPosition] = useState<PositionType>(initialPosition)
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
    animateZoomToPoint(initialPosition.x, initialPosition.y, scaleRef.current * 1.2)
  }, [animateZoomToPoint])

  const handleZoomOut = useCallback(() => {
    animateZoomToPoint(initialPosition.x, initialPosition.y, scaleRef.current / 1.2)
  }, [animateZoomToPoint])

  const { handleTouchStart, handleTouchMove, handleTouchEnd, handleTouchEndForDoubleTap } = useTouch({
    handleZoom: handleBackgroundClick,
    positionRef,
    scaleRef,
    tweenUpdateHandler,
  })

  useEffect(() => {
    if (typeof document === 'undefined') return

    const element = document?.querySelector('#space-container') as HTMLElement

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
  }, [handleTouchStart, handleTouchMove, handleTouchEnd, handleTouchEndForDoubleTap])

  useEffect(() => {
    if (!searchResult) return

    const planet = searchResult
    const targetScale = MAX_GOBAL_SCALE - 2

    const parallaxFactor = planet.z * PARALLAX_DEPTH_FACTOR
    const { innerHeight, innerWidth } = window

    const targetX = (innerWidth / 2 - planet.x * targetScale) / (1 + parallaxFactor * targetScale)
    const targetY = (innerHeight / 2 - planet.y * targetScale) / (1 + parallaxFactor * targetScale)

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
        <Application backgroundAlpha={0} resizeTo={window}>
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
