import { FC, useEffect, useRef } from 'react'

import { gsap } from 'gsap'

import * as S from './loader.styled'
import { LoaderProps } from './types'

export const Loader: FC<LoaderProps> = ({ progress }) => {
  const progressTextRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (progress >= 0) {
      gsap.to(progressTextRef.current, {
        innerText: progress,
        ease: 'power2.out',
        snap: { innerText: 1 },
      })
    }
  }, [progress])

  return (
    <S.LoaderWrapper>
      <S.OrbitBox1>
        <S.Orbit />
        <S.Planet1 />
      </S.OrbitBox1>
      <S.ProcentsWrap>
        <S.Procents ref={progressTextRef}>{progress}</S.Procents>
        <span>%</span>
      </S.ProcentsWrap>
    </S.LoaderWrapper>
  )
}

export default Loader
