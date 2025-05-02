import { IPlanetItem } from '@/models'
import { PositionType } from '../types'

export type PlanetItemProps = {
  planet: IPlanetItem
  globalScale: number
  globalPosition: PositionType
  isMapDragging: boolean
  isMapDragged?: boolean
}
