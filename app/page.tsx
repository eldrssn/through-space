'use client'

import { useEffect, useState } from 'react'

import { Content, Loader } from '@/components'
import { useGetPlanets } from '@/hooks'
import { preloadTextures } from '@/modules/space/utils'
import {
  AnimatedPlanets,
  // Space
} from '@modules'

import * as S from './styled'

export default function Home() {
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [showLoader, setShowLoader] = useState(true)
  const handleAssetsProgress = (progress: number) => {
    setLoadingProgress(progress)
  }

  const { isLoading, planets: planesList } = useGetPlanets()

  const [isAssetsLoaded, setAssetsLoaded] = useState(false)

  useEffect(() => {
    const fakeLoaderTimer = setTimeout(() => {
      setShowLoader(false)
    }, 2000)

    const loadTextures = async () => {
      await preloadTextures((progress) => {
        handleAssetsProgress(progress)
      })
      setAssetsLoaded(true)
    }

    loadTextures()

    return () => {
      clearTimeout(fakeLoaderTimer)
    }
  }, [])

  return (
    <>
      <S.Main>
        <AnimatedPlanets />
        <Content />
        {/* {isAssetsLoaded && <Space />} */}
      </S.Main>
      {(showLoader || !planesList || isLoading || !isAssetsLoaded) && <Loader progress={loadingProgress} />}
    </>
  )
}
