import { FC, useMemo } from 'react'
import * as PIXI from 'pixi.js'

import { ButtonTooltipProps } from './types'
import { Container, Sprite, Text, useApp } from '@pixi/react'
import { style } from './styles'

export const ButtonTooltip: FC<ButtonTooltipProps> = ({ text, onButtonClick }) => {
  const app = useApp()

  const buttonTexture = useMemo(() => {
    const graphics = new PIXI.Graphics()
    graphics.beginFill(0x1eeeae, 0.22) // rgba(30, 238, 174, 0.22)
    graphics.drawRoundedRect(0, 0, 105 / 2, 25 / 2, 12)
    graphics.endFill()
    return app.renderer.generateTexture(graphics)
  }, [])

  return (
    <Container x={105 / 2} y={162} anchor={0.5} interactive={true} cursor="pointer" pointertap={onButtonClick}>
      <Sprite texture={buttonTexture} width={105} height={25} anchor={0.5} />
      <Text text={text} anchor={0.5} style={style} />
    </Container>
  )
}

export default ButtonTooltip
