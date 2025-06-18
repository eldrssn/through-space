'use client'

import { Content, Loader } from '@/components'
import { useAssetsLoading } from '@/hooks'
import { AnimatedPlanets, Space } from '@/modules'

import * as S from './styled'

export default function Home() {
  const { isLoadingCompleted, isAssetsLoaded, loadingProgress } = useAssetsLoading()

  return (
    <>
      <Loader progress={loadingProgress} isLoadingCompleted={isLoadingCompleted} />
      <S.Main>
        <S.ImageBackground src={'/images/bg.svg'} alt="background" fill />
        <AnimatedPlanets />
        <Content />
        {isAssetsLoaded && <Space />}
      </S.Main>
    </>
  )
}
