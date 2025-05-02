import { FC } from 'react'
import { extend } from '@pixi/react'
import { Container, Graphics, Text } from 'pixi.js'

import { TooltipPlanetProps } from './types'
import { drawBackground, nameStyles } from './styles'

extend({
  Graphics,
  Container,
  Text,
})

export const TooltipPlanet: FC<TooltipPlanetProps> = ({ x, y, scale, planetName }) => {
  return (
    <pixiContainer x={x} y={y} scale={scale} anchor={0.5}>
      <pixiGraphics draw={drawBackground} />
      <pixiContainer x={10} y={10}>
        <pixiText text={planetName} x={105 / 2} y={120} style={nameStyles} anchor={0.5} />
      </pixiContainer>
    </pixiContainer>
  )
}

export default TooltipPlanet
