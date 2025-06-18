import { useEffect, useMemo, useState } from 'react'

import { preloadTextures } from '@/modules/space/utils'

import { useGetPlanets } from '../use-get-planets'

export const useAssetsLoading = () => {
  const { isLoading, planets } = useGetPlanets()

  const [loadingProgress, setLoadingProgress] = useState(0)
  const [showLoader, setShowLoader] = useState(true)
  const [isAssetsLoaded, setAssetsLoaded] = useState(false)

  const handleAssetsProgress = (progress: number) => {
    setLoadingProgress(progress)
  }

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

  const isLoadingCompleted = isAssetsLoaded && !!planets.length && !isLoading && !showLoader

  const value = useMemo(
    () => ({ isLoadingCompleted, loadingProgress, isAssetsLoaded }),
    [isAssetsLoaded, isLoadingCompleted, loadingProgress]
  )

  return value
}
