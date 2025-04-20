import { PopupPlanet } from '@ui-kit'
import { useWindowDimensions } from './hooks'
import { MapWrapper, SpaceContainer } from './space.styled'
import { useCallback, useEffect, useState } from 'react'
import { PlanetDataType } from './types'
import { Map } from './map'

import { SearchBar } from '@components'

import { useGetPlanets } from '@hooks'
import { ImageResource } from '@api'

export const Space = () => {
  // const [planetPopupOpened, setPlanetPopupOpened] = useState(false)
  const { dimensions } = useWindowDimensions()
  const [selectedStar, setSelectedStar] = useState<PlanetDataType | null>(null)
  const [searchResult, setSearchResult] = useState<ImageResource | null>(null)

  const { planets: planetsList } = useGetPlanets()

  const handleOpenPopup = useCallback((planet: PlanetDataType) => {
    if (selectedStar && selectedStar.id === planet.id) {
      setSelectedStar(null)
      return
    }

    setSelectedStar(planet)
    // setPlanetPopupOpened(true)
  }, [])

  const handleClosePopup = useCallback(() => {
    setSelectedStar(null)
  }, [])

  const clearSearchResult = () => setSearchResult(null)

  useEffect(() => {
    if (!searchResult) return

    const timer = setTimeout(() => {
      handleOpenPopup(searchResult)
      clearSearchResult()
    }, 1000)

    return () => clearTimeout(timer)
  }, [searchResult])

  return (
    <>
      <SpaceContainer id="space">
        <SearchBar setSearchResult={setSearchResult} />
        <MapWrapper>
          {planetsList && (
            <Map
              dimensions={dimensions}
              onOpenPopup={handleOpenPopup}
              planetsList={planetsList}
              searchResult={searchResult}
            />
          )}
        </MapWrapper>
        {selectedStar && <PopupPlanet planet={selectedStar} onClosePopup={handleClosePopup} />}
      </SpaceContainer>
    </>
  )
}
