import { FC, useCallback, useState } from 'react'

import * as S from './content.styled'
import { PopupRules } from '@ui-kit'

export const Content: FC = () => {
  const [rulesPopopOpened, setRulesPopopOpened] = useState(false)

  const handleClosePopup = useCallback(() => setRulesPopopOpened(false), [])
  const handleOpenPopup = useCallback(() => setRulesPopopOpened(true), [])

  const scrollToSpace = () => {
    const spaceBox = document.querySelector('#space') as HTMLElement

    if (!spaceBox) return
    spaceBox.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }

  return (
    <S.Wrapper>
      <S.Conteiner>
        <S.Header>Создаём космос вместе с&nbsp;GIGACHAT</S.Header>
        <S.Description>
          Внеси свой вклад в&nbsp;создание космической вселенной в&nbsp;совместном проекте &laquo;ТехИнсайдера&raquo;
          и&nbsp;GigaChat&nbsp;&mdash; и&nbsp;выигрывай призы! Не&nbsp;сдерживай фантазию: генерируй свою планету
          в&nbsp;
          <a href="https://t.me/gigachat_bot?start=mk_120425_cosmos" target="_blank">
            @gigachat_bot
          </a>{' '}
          , отправляй её&nbsp;в&nbsp;специального бота{' '}
          <a href="https://t.me/TechinsiderPlanetBot" target="_blank">
            @TechinsiderPlanetBot
          </a>{' '}
          и&nbsp;ищи среди других планет в&nbsp;космической мультивселенной!
        </S.Description>
        <S.PrimaryButton
          as="a"
          href="https://t.me/gigachat_bot?start=mk_120425_cosmos"
          target="_blank"
          onClick={() => ym(101004048, 'reachGoal', 'click_create')}
        >
          Создать свою планету
        </S.PrimaryButton>

        <S.RulesWrapper>
          <S.UnderlinedButton onClick={handleOpenPopup} type="button">
            Как создать планету?
          </S.UnderlinedButton>
          <PopupRules opened={rulesPopopOpened} onClose={handleClosePopup} />
        </S.RulesWrapper>
        <S.DownButton onClick={scrollToSpace}>
          <S.ArrowDown />
        </S.DownButton>
      </S.Conteiner>
    </S.Wrapper>
  )
}

export default Content
