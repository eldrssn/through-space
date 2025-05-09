import * as PIXI from 'pixi.js'
import { PositionType } from '../types'
import { IPlanetItem } from '@/models'

export type PlanetsContainerProps = {
  scale: number
  position: PositionType
  planetsList: IPlanetItem[]
  extraTexture?: PIXI.Texture<PIXI.Resource>
  isMapDragging: boolean
  isMapDragged: boolean
}
