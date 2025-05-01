'use client'

import { FC, memo, useCallback, useState } from 'react'
import { ControlsProps } from './types'
import * as S from './controls.styled'
import { PopupControl } from '@ui-kit'

const InfoBox: FC = memo(() => {
  const [openedPopup, setOpenedPopup] = useState(true)

  const handleClosePopup = useCallback(() => setOpenedPopup(false), [])
  const handleOpenPopup = useCallback(() => setOpenedPopup(true), [])

  return (
    <S.InfoConteiner>
      <S.InfoButton type="button" onClick={handleOpenPopup}>
        <S.InfoIconImg />
      </S.InfoButton>
      <PopupControl opened={openedPopup} onClose={handleClosePopup} />
    </S.InfoConteiner>
  )
})

export const Controls: FC<ControlsProps> = memo(({ onZoomIn, onZoomOut }) => {
  return (
    <S.Container>
      <S.Button type="button" onClick={onZoomIn}>
        <S.PlusImg />
      </S.Button>
      <S.Button type="button" onClick={onZoomOut}>
        <S.MinusImg />
      </S.Button>
      <InfoBox />
    </S.Container>
  )
})
