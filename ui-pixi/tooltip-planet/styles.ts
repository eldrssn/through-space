import * as PIXI from 'pixi.js'

export const nameStyles = new PIXI.TextStyle({
  fontSize: 7,
  fill: '#1eeeae',
  align: 'center',
  wordWrap: true,
  wordWrapWidth: 105,
})

export const drawBackground = (g: PIXI.Graphics) => {
  g.clear()
  // Основной фон
  g.beginFill(0x0c0e0f, 0.65)
  g.lineStyle(1, 0x1eeeae)
  g.drawRoundedRect(0, 0, 126, 197, 6)
  g.endFill()
  // Дополнительный эффект
  g.beginFill(0x000000, 0.2)
  g.drawRoundedRect(0, 0, 126, 197, 6)
  g.endFill()
}
