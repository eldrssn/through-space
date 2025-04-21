'use client'

import { FC } from 'react'
import { PopupRulesProps } from './types'
import * as S from './popup-rules.styled'
import { PopopContainer } from '../popop-container'
// import CrossSvg from '@images/cross.svg'

export const PopupRules: FC<PopupRulesProps> = ({ opened, onClose }) => {
  return (
    <PopopContainer opened={opened} onClose={onClose}>
      <S.Container>
        <S.HeaderBlock>
          <S.Header>правила создания своей планеты</S.Header>
          <S.CloseButton type="button" onClick={onClose}>
            {/* <S.CrossImg /> */}
            {/* <CrossSvg /> */}
          </S.CloseButton>
        </S.HeaderBlock>
        <S.Content>
          <S.List>
            <S.ListItem>
              Придумай, как будет выглядеть твоя планета. <br />
              Представь её&nbsp;форму, размер, климат, поверхность, обитателей и&nbsp;странности. Это может быть ледяная
              сфера, горячий газовый гигант, планета в&nbsp;виде пончика или мир, где день длится 3&nbsp;секунды.
            </S.ListItem>
            <S.ListItem>
              Попроси{' '}
              <a href="https://t.me/gigachat_bot?start=mk_120425_cosmos" target="_blank">
                @gigachat_bot
              </a>{' '}
              нарисовать планету по&nbsp;твоему описанию. Чтобы получить подходящую картинку, опиши вид планеты
              издалека, как будто смотришь на&nbsp;неё из&nbsp;космоса. Например: &laquo;Нарисуй планету в&nbsp;виде
              кристалла, окружённую кольцами. Вид издалека, в&nbsp;тёмном космосе&raquo;.
            </S.ListItem>
            <S.ListItem>
              Полученную картинку отправь в&nbsp;специального бота&nbsp;&mdash;{' '}
              <a href="https://t.me/TechinsiderPlanetBot" target="_blank">
                @TechinsiderPlanetBot
              </a>
              . <br />
              Он&nbsp;примет твою работу на&nbsp;модерацию&nbsp;и, если всё в&nbsp;порядке, планета появится
              в&nbsp;мультивселенной на&nbsp;сайте проекта.
            </S.ListItem>
          </S.List>
        </S.Content>
      </S.Container>
    </PopopContainer>
  )
}

export default PopupRules
