import * as PIXI from 'pixi.js'

import { PositionType } from '../../types'

export interface TouchProps {
  scaleRef: React.RefObject<number>
  positionRef: React.RefObject<PositionType>
  handleZoom: (e: PIXI.FederatedPointerEvent) => void
  tweenUpdateHandler: (scale: number, position: PositionType) => void
}
