import { IPlanetItem } from '@/models'

import { PositionType } from '../types'

export type PlanetsContainerProps = {
  scale: number
  position: PositionType
  planetsList: IPlanetItem[]
  isMapDragging: boolean
  isMapDragged: boolean
}
