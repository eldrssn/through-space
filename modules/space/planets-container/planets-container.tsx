'use client'

import { FC, useMemo } from 'react'

import { Container, Graphics, Sprite } from 'pixi.js'

import { useIsMobile } from '@hooks'
import { extend } from '@pixi/react'

import { PlanetItem } from '../planet-item'
import { getVisiblePlanets } from '../utils'
import { PlanetsContainerProps } from './types'

extend({
  Container,
  Graphics,
  Sprite,
})

export const PlanetsContainer: FC<PlanetsContainerProps> = ({
  scale,
  position,
  planetsList,
  isMapDragging,
  isMapDragged,
}) => {
  const isMobile = useIsMobile()
  const visiblePlanets = useMemo(
    () => getVisiblePlanets(planetsList, position, scale, isMobile ? 100 : 200),
    [planetsList, position, scale]
  )

  return (
    <pixiContainer sortableChildren={true} zIndex={0} scale={scale} position={position} interactiveChildren={true}>
      {visiblePlanets.map((planet) => (
        <PlanetItem
          key={planet.id}
          planet={planet}
          globalScale={scale}
          isMapDragging={isMapDragging}
          isMapDragged={isMapDragged}
          globalPosition={position}
        />
      ))}
    </pixiContainer>
  )
}
