'use client'

import { PopupPlanet } from '@ui-kit'
import { useWindowDimensions } from './hooks'
import { MapWrapper, SpaceContainer } from './space.styled'
import { ComponentType, Suspense, useCallback, useEffect, useRef, useState } from 'react'

import { Map } from './map'

import { SearchBar } from '@components'

import { useGetPlanets } from '@hooks'
import { IPlanetItem } from '@/models'
import { getCellTexture, preloadStarTextures } from './utils'

const Space = () => {
  // const [planetPopupOpened, setPlanetPopupOpened] = useState(false)
  const { dimensions } = useWindowDimensions()
  const [selectedStar, setSelectedStar] = useState<IPlanetItem | null>(null)
  const [searchResult, setSearchResult] = useState<IPlanetItem | null>(null)

  const { planets: planetsList } = useGetPlanets()

  const handleOpenPopup = useCallback((planet: IPlanetItem) => {
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

  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    preloadStarTextures(() => {}).then(() => {
      // setCellTexture(getCellTexture())
      setIsLoaded(true)
    })
  }, [])

  return (
    <>
      <SpaceContainer id="space">
        {/* <SearchBar setSearchResult={setSearchResult} /> */}
        {/* <Suspense> */}
        <MapWrapper>
          {planetsList && isLoaded && (
            <Map
              dimensions={dimensions}
              onOpenPopup={handleOpenPopup}
              planetsList={planetsList}
              searchResult={searchResult}
            />
          )}
        </MapWrapper>
        {/* </Suspense> */}
        {selectedStar && <PopupPlanet planet={selectedStar} onClosePopup={handleClosePopup} />}
      </SpaceContainer>
    </>
  )
}

export default Space
