'use client'

import { Content, SpaceWrapper } from '@/components'
import * as S from './styled'
import { AnimatedPlanets } from '@modules'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'
// import Space from '@/modules/space/space'

// const Space = dynamic(() => import('@/modules/space/space'), {
//   ssr: false,
// })

export default function Home() {
  return (
    <S.Main>
      <Content />
      <AnimatedPlanets />
      {/* <Space /> */}
      <ErrorBoundary errorComponent={() => <div>Canvas error</div>}>
        {/* <PixiWrapper /> */}
        {/* <Space /> */}
        <SpaceWrapper />
      </ErrorBoundary>
    </S.Main>
  )
}
