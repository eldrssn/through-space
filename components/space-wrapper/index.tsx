'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const Space = dynamic(() => import('@/modules/space'), {
  ssr: false,
})

export const SpaceWrapper = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return <Space />
}
