import { Container, Sprite } from '@pixi/react'
import { FC, useMemo } from 'react'
import { PlanetsContainerProps } from './types'
import { PlanetItem } from '../planet-item'
import { getVisiblePlanets } from '../utils'
import { useIsMobile } from '@hooks'

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

  return (
    <Container sortableChildren={true} zIndex={0} scale={scale} position={position} interactiveChildren={true}>
      {extraTexture && <Sprite texture={extraTexture} anchor={0.5} />}

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
    </Container>
  )
}
