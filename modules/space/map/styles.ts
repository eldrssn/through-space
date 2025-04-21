import { HEIGHT, WIDTH } from '../constants'

import * as PIXI from 'pixi.js'

export const drawBackground = (g: PIXI.Graphics) => {
  g.clear()
  g.beginFill(0x000000, 0)
  g.drawRect(0, 0, WIDTH, HEIGHT)
  g.hitArea = new PIXI.Rectangle(0, 0, WIDTH, HEIGHT)
  g.endFill()
}
