import * as PIXI from 'pixi.js'

import { HEIGHT, WIDTH } from '../constants'

export const drawBackground = (g: PIXI.Graphics) => {
  g.clear()
  g.fill({ color: 0x000000, alpha: 0 }).rect(0, 0, WIDTH, HEIGHT)
  g.hitArea = new PIXI.Rectangle(0, 0, WIDTH, HEIGHT)
}
