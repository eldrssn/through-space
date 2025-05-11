import { FC, memo } from 'react'
import { PopupPlanetProps } from './types'
import CloseSvg from '@images/close.svg'

import * as S from './popup-planet.styled'

export const PopupPlanet: FC<PopupPlanetProps> = memo(({ planet, onClosePopup }) => {
  const { planet_name } = planet
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title>{planet_name}</S.Title>
        <S.CloseButton type="button" onClick={onClosePopup} onTouchEnd={onClosePopup}>
          <CloseSvg />
        </S.CloseButton>
      </S.TitleWrapper>
    </S.Wrapper>
  )
})

export default PopupPlanet
