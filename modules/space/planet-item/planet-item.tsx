'use client'

import { FC, useState, useRef, useEffect, useCallback } from 'react'
import * as PIXI from 'pixi.js'
import { PlanetItemProps } from './types'
import { getRandomStarTexture } from '../utils'
import { TooltipPlanet } from '@ui-pixi'
import { MAX_GOBAL_SCALE, PARALLAX_DEPTH_FACTOR } from '../constants'
import { extend } from '@pixi/react'
import { Container, Sprite } from 'pixi.js'

const RADIUS = 1

extend({
  Container,
  Sprite,
})

export const PlanetItem: FC<PlanetItemProps> = ({
  planet,
  globalScale,
  isMapDragging,
  globalPosition,
  onOpenPopup,
}) => {
  const { x, y, z, planet_name, compressed_image_path, author } = planet

  const [hovered, setHovered] = useState(false)

  const [showTooltip, setShowTooltip] = useState(false)

  const texture = useRef<PIXI.Texture>(getRandomStarTexture())

  const parallaxFactor = z * PARALLAX_DEPTH_FACTOR

  const parallaxX = x + globalPosition.x * parallaxFactor
  const parallaxY = y + globalPosition.y * parallaxFactor
  const baseSize = RADIUS * (z + globalScale / 10)

  useEffect(() => {
    if (globalScale >= MAX_GOBAL_SCALE) {
      setShowTooltip(true)
    } else {
      setShowTooltip(false)
    }
  }, [globalScale])

  const handleClick = useCallback(() => {
    onOpenPopup(planet)
  }, [onOpenPopup])

  const handleMouseOut = useCallback(() => setHovered(false), [])
  const handleMouseOver = useCallback(() => {
    if (!isMapDragging) {
      setHovered(true)
    }
  }, [isMapDragging])

  return (
    <pixiContainer
      x={parallaxX}
      y={parallaxY}
      zIndex={Math.round(z * 100)}
      eventMode="dynamic"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onPointerTap={handleClick}
      cursor="pointer"
      interactive={!isMapDragging}
    >
      <pixiSprite texture={texture.current} anchor={0.5} scale={baseSize / 100} tint={hovered ? 0x999999 : 0xffffff} />

      {/* {showTooltip && (
        <TooltipPlanet
          x={0}
          y={-18}
          scale={globalScale / 100}
          image={compressed_image_path}
          planetName={planet_name}
          author={author}
          onOpenPopup={handleClick}
        />
      )} */}
    </pixiContainer>
  )
}
