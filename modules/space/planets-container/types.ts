import { PositionType } from '../types'
import { IPlanetItem } from '@/models'

export type PlanetsContainerProps = {
  scale: number
  position: PositionType
  planetsList: IPlanetItem[]
  isMapDragging: boolean
  isMapDragged: boolean
}
