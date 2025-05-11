import { useEffect, useState } from 'react'

import { useIsMobile } from '@hooks'

import { DimensionsType } from '../../types'

export const useWindowDimensions = () => {
  const isMobile = useIsMobile()

  const [dimensions, setDimensions] = useState<DimensionsType>({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const fontSize = parseFloat(getComputedStyle(document.body).fontSize)
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: (isMobile ? 720 : 1100) * fontSize,
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [isMobile])

  return { dimensions }
}
