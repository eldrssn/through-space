'use client'

import { Suspense } from 'react'

import dynamic from 'next/dynamic'

import { SearchBar } from '@components'
import { useGetPlanets } from '@hooks'

import { MapWrapper, SpaceContainer } from './space.styled'
import { useSpaceStore } from './store'

const Map = dynamic(() => import('./map'), {
  ssr: false,
})

export const Space = () => {
  const { selectedPlanet, setSelectedPlanet } = useSpaceStore()
  const { planets: planetsList } = useGetPlanets()

  return (
    <SpaceContainer id="space">
      <SearchBar setSelectedPlanet={setSelectedPlanet} />
      <MapWrapper>
        <Suspense>{planetsList && <Map planetsList={planetsList} searchResult={selectedPlanet} />}</Suspense>
      </MapWrapper>
    </SpaceContainer>
  )
}
