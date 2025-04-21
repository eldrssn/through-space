'use client'

import { Content } from '@/components'
import * as S from './styled'
import { AnimatedPlanets } from '@/modules'

export default function Home() {
  return (
    <S.Main>
      <Content />
      <AnimatedPlanets />
    </S.Main>
  )
}
