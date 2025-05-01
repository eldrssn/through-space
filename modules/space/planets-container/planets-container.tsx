'use client'

import { FC, useMemo } from 'react'
import { PlanetsContainerProps } from './types'
import { PlanetItem } from '../planet-item'
import { getVisiblePlanets } from '../utils'
import { useIsMobile } from '@hooks'

import { Container, Graphics, Sprite } from 'pixi.js'
import { extend } from '@pixi/react'

extend({
  Container,
  Graphics,
  Sprite,
})

export const PlanetsContainer: FC<PlanetsContainerProps> = ({
  scale,
  position,
  planetsList,
  extraTexture,
  isMapDragging,
  isMapDragged,
  onOpenPopup,
}) => {
  const isMobile = useIsMobile()
  const visiblePlanets = useMemo(
    () => getVisiblePlanets(planetsList, position, scale, isMobile ? 100 : 200),
    [planetsList, position, scale]
  )

  console.log('planetsList', planetsList)

  return (
    <pixiContainer sortableChildren={true} zIndex={0} scale={scale} position={position} interactiveChildren={true}>
      {extraTexture && <pixiSprite texture={extraTexture} anchor={0.5} />}

      {visiblePlanets.map((planet) => (
        <PlanetItem
          key={planet.id}
          planet={planet}
          globalScale={scale}
          isMapDragging={isMapDragging}
          isMapDragged={isMapDragged}
          globalPosition={position}
          onOpenPopup={onOpenPopup}
        />
      ))}
    </pixiContainer>
  )
}
