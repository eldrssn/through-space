import { PositionType, PlanetDataType } from '../types'

export type PlanetItemProps = {
  planet: PlanetDataType
  globalScale: number
  globalPosition: PositionType
  onOpenPopup: (planet: PlanetDataType) => void
  isMapDragging: boolean
  isMapDragged?: boolean
}
