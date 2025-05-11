'use client'

import { Suspense } from 'react'

import dynamic from 'next/dynamic'

import { SearchBar } from '@components'
import { useGetPlanets } from '@hooks'

import { useWindowDimensions } from './hooks'
import { MapWrapper, SpaceContainer } from './space.styled'
import { useSpaceStore } from './store'

const Map = dynamic(() => import('./map'), {
  ssr: false,
})

export const Space = () => {
  const { dimensions } = useWindowDimensions()
  const { selectedPlanet, setSelectedPlanet } = useSpaceStore()
  const { planets: planetsList } = useGetPlanets()

  return (
    <SpaceContainer id="space">
      <SearchBar setSelectedPlanet={setSelectedPlanet} />
      <MapWrapper>
        <Suspense>
          {planetsList && <Map dimensions={dimensions} planetsList={planetsList} searchResult={selectedPlanet} />}
        </Suspense>
      </MapWrapper>
    </SpaceContainer>
  )
}
