import { FC, MouseEvent } from 'react'

import { TooltipPlanetProps } from './types'
import { Container, Graphics, Text } from '@pixi/react'
import { RoundedImage } from '../rounded-image'
import { ButtonTooltip } from '../button-tooltip'
import { autorStyles, drawBackground, nameStyles } from './styles'

export const TooltipPlanet: FC<TooltipPlanetProps> = ({ image, x, y, scale, planetName, onOpenPopup, author }) => {
  const hanldeButtonClick = (e: MouseEvent) => {
    e.stopPropagation()
    onOpenPopup()
  }
  return (
    <Container x={x} y={y} scale={scale} anchor={0.5}>
      <Graphics draw={drawBackground} />
      <Container x={10} y={10}>
        <RoundedImage image={image} width={105} height={105} x={105 / 2} y={105 / 2} radius={6} />
        <Text text={planetName} x={105 / 2} y={120} style={nameStyles} anchor={0.5} />
        <Text text={author || 'Автор'} x={105 / 2} y={136} style={autorStyles} anchor={0.5} />
        <ButtonTooltip text="Открыть" onButtonClick={hanldeButtonClick} />
      </Container>
    </Container>
  )
}

export default TooltipPlanet
