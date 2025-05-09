'use client'

import { PopupPlanet } from '@ui-kit'
import { useWindowDimensions } from './hooks'
import { MapWrapper, SpaceContainer } from './space.styled'
import { Suspense, useCallback, useEffect, useState } from 'react'

import { SearchBar } from '@components'

import { useGetPlanets } from '@hooks'
import { IPlanetItem } from '@/models'
import { preloadStarTextures } from './utils'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('./map'), {
  ssr: false,
})

export const Space = () => {
  const { dimensions } = useWindowDimensions()
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedStar, setSelectedStar] = useState<IPlanetItem | null>(null)
  const [searchResult, setSearchResult] = useState<IPlanetItem | null>(null)

  const { planets: planetsList } = useGetPlanets()

  const handleOpenPopup = useCallback((planet: IPlanetItem) => {
    if (selectedStar && selectedStar.id === planet.id) {
      setSelectedStar(null)
      return
    }

    setSelectedStar(planet)
  }, [])

  const handleClosePopup = useCallback(() => {
    setSelectedStar(null)
  }, [])

  const clearSearchResult = () => setSearchResult(null)

  useEffect(() => {
    if (!searchResult) return

    const timer = setTimeout(() => {
      clearSearchResult()
    }, 1000)

    return () => clearTimeout(timer)
  }, [searchResult])

  useEffect(() => {
    preloadStarTextures(() => {}).then(() => {
      setIsLoaded(true)
    })
  }, [])

  return (
    <SpaceContainer id="space">
      <SearchBar setSearchResult={setSearchResult} />
      <MapWrapper>
        <Suspense>
          {planetsList && isLoaded && (
            <Map
              dimensions={dimensions}
              onOpenPopup={handleOpenPopup}
              planetsList={planetsList}
              searchResult={searchResult}
            />
          )}
        </Suspense>
      </MapWrapper>

      {selectedStar && <PopupPlanet planet={selectedStar} onClosePopup={handleClosePopup} />}
    </SpaceContainer>
  )
}
