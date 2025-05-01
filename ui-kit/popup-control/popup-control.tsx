import { FC } from 'react'
import { PopupControlProps } from './types'
import * as S from './popup-control.styled'

export const PopupControl: FC<PopupControlProps> = ({ opened, onClose }) => {
  return (
    <S.Container $visible={opened}>
      <S.HeaderBlock>
        <S.CloseButton type="button" onClick={onClose}>
          {/* <S.CrossImg /> */}
        </S.CloseButton>
      </S.HeaderBlock>

      <S.List>
        <S.ListItem>
          {/* <S.Control1Img /> */}
          <span>Перемещайте карту с&nbsp;помощью пальцев или зажатой кнопкой мыши</span>
        </S.ListItem>
        <S.ListItem>
          {/* <S.Control2Img /> */}

          <span>
            Продвигайтесь по&nbsp;космосу с&nbsp;помощью жеста пальцами или кнопок <a>+</a> и&nbsp;<a>-</a>
          </span>
        </S.ListItem>
        <S.ListItem>
          {/* <S.Control3Img /> */}

          <span>Кликайте на&nbsp;планету, чтобы рассмотреть ее&nbsp;получше</span>
        </S.ListItem>
      </S.List>
    </S.Container>
  )
}

export default PopupControl
