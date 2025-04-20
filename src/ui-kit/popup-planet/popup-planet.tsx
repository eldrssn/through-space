import { FC, memo } from 'react'
import { PopupPlanetProps } from './types'
import planetPlaceholder from '@images/planet-placeholder.png'
import CloseSvg from '@images/close.svg?react'
// import CopySvg from '@images/copy.svg?react'
import * as S from './popup-planet.styled'
import { useClipboard } from 'use-clipboard-copy'
// import { PopopContainer } from '../popop-container'

export const PopupPlanet: FC<PopupPlanetProps> = memo(
  ({
    planet,
    onClosePopup,
    // opened
  }) => {
    const { planet_name, image_path, author } = planet
    const clipboardLink = useClipboard()
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
        <S.CopyInput ref={clipboardLink.target} value={'https://master-557.hosting.production-dev.ru/'} readOnly />
        {/* <S.CopyLink onClick={clipboardLink.copy}>
          Скопировать ссылку <CopySvg />
        </S.CopyLink> */}
      </S.Wrapper>
      // </PopopContainer>
    )
  }
)

export default PopupPlanet
