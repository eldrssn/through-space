import React, { FC, useRef } from 'react'

import type { AnimationItem } from 'lottie-web'
import Lottie from 'react-lottie'

import arrowDownData from '@app/assets/lottie/arrow-down.json'

import * as S from './button-down.styled'
import { ButtonDownProps } from './types'

const lottieOptions = {
  loop: false,
  autoplay: false,
  animationData: arrowDownData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

export const ButtonDown: FC<ButtonDownProps> = ({ onClick }) => {
  const lottieRef = useRef<{ anim: AnimationItem } | null>(null)

  const handleMouseEnter = () => {
    const anim = lottieRef.current?.anim
    console.log(anim)

    if (anim) {
      anim.stop()
      anim.goToAndPlay(0, true)
    }
  }

  return (
    <S.DownButton onClick={onClick} onMouseEnter={handleMouseEnter}>
      <Lottie
        ref={lottieRef as React.Ref<Lottie>}
        options={lottieOptions}
        height="34rem"
        width="34rem"
        isClickToPauseDisabled
      />
    </S.DownButton>
  )
}
