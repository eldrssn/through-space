import React, { FC, useRef } from 'react'
import Lottie from 'react-lottie'
import { ButtonDownProps } from './types'

import * as S from './button-down.styled'
import arrowDownData from '@app/assets/lottie/arrow-down.json'

const lottieOptions = {
  loop: false,
  autoplay: false,
  animationData: arrowDownData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

export const ButtonDown: FC<ButtonDownProps> = ({ onClick }) => {
  const lottieRef = useRef<any>(null)

  const handleMouseEnter = () => {
    const anim = lottieRef.current?.anim
    if (anim) {
      anim.stop()
      anim.goToAndPlay(0, true)
    }
  }

  return (
    <S.DownButton onClick={onClick} onMouseEnter={handleMouseEnter}>
      <Lottie ref={lottieRef} options={lottieOptions} height="34rem" width="34rem" isClickToPauseDisabled />
    </S.DownButton>
  )
}
