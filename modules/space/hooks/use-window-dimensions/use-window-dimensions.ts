import { useState, useEffect } from 'react'
import { DimensionsType } from '../../types'
import { useIsMobile } from '@hooks'

export const useWindowDimensions = () => {
  const isMobile = useIsMobile()
  const fontSize = getComputedStyle(document.body).fontSize

  const [dimensions, setDimensions] = useState<DimensionsType>({
    width: window.innerWidth,
    height: (isMobile ? 720 : 900) * +fontSize.replace('px', ''),
  })

  useEffect(() => {
    const handleResize = () => {
      setDimensions((prev) => ({
        ...prev,
        width: window.innerWidth,
      }))
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { dimensions }
}
