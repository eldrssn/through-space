import { DimensionsType, PlanetDataType } from '../types'

export type MapProps = {
  dimensions: DimensionsType
  onOpenPopup: (planet: PlanetDataType) => void
  planetsList: PlanetDataType[]
  searchResult: PlanetDataType | null
}
