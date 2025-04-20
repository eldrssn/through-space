import { FC, useEffect } from 'react'
import * as S from './main-page.styled'
import { Content, Footer, Header } from '@components'
import { ButtonUp } from '@ui-kit'
import { AnimatedPlanets, Space } from '@app/modules'
import { preloadStarTextures } from '@app/modules/space/utils'

export const MainPage: FC = () => {
  useEffect(() => {
    const loadTextures = async () => {
      await preloadStarTextures()
    }

    loadTextures()
  }, [])

  return (
    <>
      <S.Main>
        <Header />
        <AnimatedPlanets />
        <Content />
        <Space />
        <ButtonUp />
        <Footer />
      </S.Main>
    </>
  )
}

export default MainPage
