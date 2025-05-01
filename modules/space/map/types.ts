import { IPlanetItem } from '@models'
import { DimensionsType } from '../types'

export type MapProps = {
  dimensions: DimensionsType
  onOpenPopup: (planet: IPlanetItem) => void
  planetsList: IPlanetItem[]
  searchResult: IPlanetItem | null
}
