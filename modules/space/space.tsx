'use client'

import { useWindowDimensions } from './hooks'
import { MapWrapper, SpaceContainer } from './space.styled'
import { Suspense, useEffect, useState } from 'react'

import { SearchBar } from '@components'

import { useGetPlanets } from '@hooks'

import { preloadStarTextures } from './utils'
import dynamic from 'next/dynamic'
import { useSpaceStore } from './store'

const Map = dynamic(() => import('./map'), {
  ssr: false,
})

export const Space = () => {
  const { dimensions } = useWindowDimensions()
  const { selectedPlanet, setSelectedPlanet, clearSelectedPlanet } = useSpaceStore()
  const [isLoaded, setIsLoaded] = useState(false)
  const { planets: planetsList } = useGetPlanets()

  useEffect(() => {
    if (!selectedPlanet) return

    const timer = setTimeout(() => {
      clearSelectedPlanet()
    }, 1000)

    return () => clearTimeout(timer)
  }, [selectedPlanet])

  // TODO: вынести в стор и добавить лоадер
  useEffect(() => {
    preloadStarTextures(() => {}).then(() => {
      setIsLoaded(true)
    })
  }, [])

  return (
    <SpaceContainer id="space">
      <SearchBar setSelectedPlanet={setSelectedPlanet} />
      <MapWrapper>
        <Suspense>
          {planetsList && isLoaded && (
            <Map dimensions={dimensions} planetsList={planetsList} searchResult={selectedPlanet} />
          )}
        </Suspense>
      </MapWrapper>
    </SpaceContainer>
  )
}
