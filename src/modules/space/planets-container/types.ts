import * as PIXI from 'pixi.js'
import { PositionType, PlanetDataType } from '../types'

export type PlanetsContainerProps = {
  scale: number
  position: PositionType
  planetsList: PlanetDataType[]
  extraTexture?: PIXI.Texture<PIXI.Resource>
  onOpenPopup: (planet: PlanetDataType) => void
  isMapDragging: boolean
  isMapDragged: boolean
}
