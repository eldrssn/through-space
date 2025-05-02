'use client'

import { FC } from 'react'

import * as S from './content.styled'

export const Content: FC = () => {
  const scrollToSpace = () => {
    const spaceBox = document.querySelector('#space') as HTMLElement

    if (!spaceBox) return
    spaceBox.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }

  return (
    <S.Wrapper>
      <S.Conteiner>
        <S.Header> Together Through the&nbsp;Starlight</S.Header>
        <S.Description>
          Immerse yourself in&nbsp;the vastness of&nbsp;space. Travel among twinkling stars and&nbsp;distant planets
          as&nbsp;you glide across a&nbsp;map of&nbsp;the&nbsp;universe. Fly through galaxies where every world is
          a&nbsp;new story
        </S.Description>

        <S.DownButton onClick={scrollToSpace}>
          <S.ArrowDown />
        </S.DownButton>
      </S.Conteiner>
    </S.Wrapper>
  )
}

export default Content
