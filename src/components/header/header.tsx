import { FC } from 'react'

import * as S from './header.styled'
import gigaLogoImg from '@images/giga-logo.svg'
import techLogoImg from '@images/tech-logo.svg'

export const Header: FC = () => {
  return (
    <S.Wrapper id='header'>
      <S.Container>
        <S.Link target="_blank" href="https://giga.chat/">
          <S.LogoImg src={gigaLogoImg} width={'101rem'} height={'35rem'} />
        </S.Link>
        <S.Link target="_blank" href="https://www.techinsider.ru/">
          <S.LogoImg src={techLogoImg} width={'171rem'} height={'25rem'} />
        </S.Link>
      </S.Container>
    </S.Wrapper>
  )
}

export default Header
