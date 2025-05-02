'use client'

import { Content } from '@/components'
import * as S from './styled'
import { AnimatedPlanets, Space } from '@modules'

export default function Home() {
  return (
    <S.Main>
      <AnimatedPlanets />
      <Content />
      <Space />
    </S.Main>
  )
}
