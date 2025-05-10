'use client'

import { Content, Loader } from '@/components'
import * as S from './styled'
import { AnimatedPlanets, Space } from '@modules'
import { useEffect, useState } from 'react'
import { useGetPlanets } from '@/hooks'
import { preloadTextures } from '@/modules/space/utils'

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
        {isAssetsLoaded && <Space />}
      </S.Main>
      {(showLoader || !planesList || isLoading || !isAssetsLoaded) && <Loader progress={loadingProgress} />}
    </>
  )
}
