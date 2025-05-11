import { FC } from 'react'

import { Container, FederatedPointerEvent, Graphics, Sprite, Text } from 'pixi.js'

import { extraTextures } from '@/modules/space/utils'
import { extend } from '@pixi/react'

import { closeTextStyle, nameStyles } from './styles'
import { TooltipPlanetProps } from './types'

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
