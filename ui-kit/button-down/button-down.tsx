'use client'

import React, { FC, useRef } from 'react'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'

import arrowDownData from '@app/assets/lottie/arrow-down.json'
import * as S from './button-down.styled'
import { ButtonDownProps } from './types'

export const ButtonDown: FC<ButtonDownProps> = ({ onClick }) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null)

  const handleMouseEnter = () => {
    lottieRef.current?.stop()
    lottieRef.current?.goToAndPlay(0, true)
  }

  return (
    <S.DownButton onClick={onClick} onMouseEnter={handleMouseEnter}>
      <Lottie
        lottieRef={lottieRef}
        animationData={arrowDownData}
        loop={false}
        autoplay={false}
        style={{ width: '34rem', height: '34rem' }}
      />
    </S.DownButton>
  )
}
