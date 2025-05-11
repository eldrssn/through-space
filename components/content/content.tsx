'use client'

import { FC } from 'react'

import { ButtonDown } from '@/ui-kit'

import * as S from './content.styled'

export const Content: FC = () => {
  const scrollToSpace = () => {
    const spaceBox = document.querySelector('#space') as HTMLElement

    if (!spaceBox) return
    spaceBox.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }

  return (
    <S.Wrapper>
      <S.Conteiner>
        <S.Header> Together Through the&nbsp;Space</S.Header>
        <S.Description>
          Immerse yourself in&nbsp;the vastness of&nbsp;space. Travel among twinkling stars and&nbsp;distant planets
          as&nbsp;you glide across a&nbsp;map of&nbsp;the&nbsp;universe. Fly through galaxies where every world is
          a&nbsp;new story
        </S.Description>

        <ButtonDown onClick={scrollToSpace} />
      </S.Conteiner>
    </S.Wrapper>
  )
}

export default Content
