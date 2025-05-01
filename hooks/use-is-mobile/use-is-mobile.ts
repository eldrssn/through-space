import { useEffect, useState } from 'react'

import debounce from 'lodash/debounce'

import { Breakpoints } from '@app/tokens'

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null)

  useEffect(() => {
    if (isMobile === null) {
      setIsMobile(document.body.clientWidth < Breakpoints.DESKTOP)
    }
    const handleWindowResize = debounce(() => {
      setIsMobile(window.innerWidth < Breakpoints.DESKTOP)
    }, 200)

    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return isMobile
}
