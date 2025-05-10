import { FC } from 'react'
import { extend } from '@pixi/react'
import { Container, FederatedPointerEvent, Graphics, Sprite, Text } from 'pixi.js'

import { TooltipPlanetProps } from './types'
import { closeTextStyle, nameStyles } from './styles'
import { extraTextures } from '@/modules/space/utils'

extend({
  Graphics,
  Container,
  Text,
  Sprite,
})

export const TooltipPlanet: FC<TooltipPlanetProps> = ({ x, y, scale, planetName, onClose }) => {
  return (
    <pixiContainer x={x} y={y} scale={scale} anchor={1}>
      <pixiSprite texture={extraTextures['tooltip']} width={300} height={68} anchor={0.5} />
      <pixiText text={planetName} x={0} y={0} style={nameStyles} anchor={0.5} />
      <pixiText
        text="×"
        style={closeTextStyle}
        x={115}
        y={-12}
        anchor={0.5}
        eventMode="static"
        cursor="pointer"
        onPointerTap={(e: FederatedPointerEvent) => {
          e.stopPropagation()
          onClose()
        }}
      />
    </pixiContainer>
  )
}

export default TooltipPlanet
