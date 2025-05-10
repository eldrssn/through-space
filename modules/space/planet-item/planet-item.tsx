'use client'

import { FC, useState, useRef, useEffect, useCallback } from 'react'
import * as PIXI from 'pixi.js'
import { PlanetItemProps } from './types'
import { getRandomStarTexture } from '../utils'
import { TooltipPlanet } from '@ui-pixi'
import { MAX_GOBAL_SCALE, PARALLAX_DEPTH_FACTOR } from '../constants'
import { extend } from '@pixi/react'
import { Container, Sprite } from 'pixi.js'
import { useSpaceStore } from '../store'

const RADIUS = 1

extend({
  Container,
  Sprite,
})

export const PlanetItem: FC<PlanetItemProps> = ({ planet, globalScale, isMapDragging, globalPosition }) => {
  const { x, y, z, planet_name, id } = planet
  const { setSelectedPlanet, selectedPlanet, clearSelectedPlanet } = useSpaceStore()

  const [hovered, setHovered] = useState(false)

  const texture = useRef<PIXI.Texture>(getRandomStarTexture())

  const parallaxFactor = z * PARALLAX_DEPTH_FACTOR

  const parallaxX = x + globalPosition.x * parallaxFactor
  const parallaxY = y + globalPosition.y * parallaxFactor
  const baseSize = RADIUS * (z + globalScale / 10)

  const handleClick = useCallback(() => {
    setSelectedPlanet(planet)
  }, [])

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
      scale={baseSize / 100}
    >
      <pixiSprite texture={texture.current} anchor={0.5} tint={hovered ? 0x999999 : 0xffffff} />

      {selectedPlanet?.id === id && (
        <TooltipPlanet x={0} y={-150} scale={globalScale / 5} planetName={planet_name} onClose={clearSelectedPlanet} />
      )}
    </pixiContainer>
  )
}
