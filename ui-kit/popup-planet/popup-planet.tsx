import { FC, memo } from 'react'
import { PopupPlanetProps } from './types'
import CloseSvg from '@images/close.svg'
// import CopySvg from './images/copy.svg?react'
// import CloseSvg from './images/close.svg'

import * as S from './popup-planet.styled'

const planetPlaceholder = '/images/planet-placeholder.png'

export const PopupPlanet: FC<PopupPlanetProps> = memo(({ planet, onClosePopup }) => {
  const { planet_name, image_path, author } = planet
  return (
    // <PopopContainer opened={opened} onClose={onClosePopup}>
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title>{planet_name}</S.Title>
        <S.UserName>{author}</S.UserName>
        <S.CloseButton type="button" onClick={onClosePopup} onTouchEnd={onClosePopup}>
          <CloseSvg />
        </S.CloseButton>
      </S.TitleWrapper>
      <S.ImageWrapper>
        <S.Image src={image_path || planetPlaceholder} />
      </S.ImageWrapper>
    </S.Wrapper>
  )
})

export default PopupPlanet
