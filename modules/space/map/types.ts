import { IPlanetItem } from '@models'

import { DimensionsType } from '../types'

export type MapProps = {
  dimensions: DimensionsType
  planetsList: IPlanetItem[]
  searchResult: IPlanetItem | null
}
