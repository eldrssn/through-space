'use client'

import { FC, memo } from 'react'
import { ControlsProps } from './types'
import * as S from './controls.styled'

export const Controls: FC<ControlsProps> = memo(({ onZoomIn, onZoomOut }) => {
  return (
    <S.Container>
      <S.Button type="button" onClick={onZoomIn}>
        <S.PlusImg />
      </S.Button>
      <S.Button type="button" onClick={onZoomOut}>
        <S.MinusImg />
      </S.Button>
    </S.Container>
  )
})
