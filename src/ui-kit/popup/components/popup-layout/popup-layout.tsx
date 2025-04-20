import { FC, useEffect, useRef, useState } from 'react'

import { clearAllBodyScrollLocks } from 'body-scroll-lock'
import { CSSTransition } from 'react-transition-group'

import { PopupProps } from '../../types'
import * as S from './styled-components'
import { POPUP_DELAY } from '@app/constants'

export const PopupLayout: FC<PopupProps> = ({ onClose, opened, children, mounted, ...rest }) => {
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const targetRef = useRef<HTMLDivElement | null>(null)

  const [animationIn, setAnimationIn] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    setAnimationIn(opened)

    if (!targetRef.current) return

    if (opened) {
      const currentScroll = window.pageYOffset
      setScrollPosition(currentScroll)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      clearAllBodyScrollLocks()
      document.body.style.overflow = ''
    }
  }, [opened])

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFullscreen =
        document.fullscreenElement ||
        (document as unknown as { webkitFullscreenElement?: Element }).webkitFullscreenElement

      if (isFullscreen) {
        const historyElement = document.getElementById('history')
        if (historyElement) {
          historyElement.scrollIntoView()
        }
      } else {
        const historyElement = document.getElementById('history')
        if (historyElement) {
          historyElement.scrollIntoView()
        }
      }
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange)
    }
  }, [scrollPosition])

  return (
    <S.PopupLayout ref={targetRef} $mounted={mounted}>
      <CSSTransition
        in={Boolean(animationIn)}
        nodeRef={overlayRef}
        timeout={POPUP_DELAY}
        classNames={S.overlayAnimation}
      >
        <S.PopupOverlay ref={overlayRef} onClick={onClose} />
      </CSSTransition>
      <CSSTransition
        in={Boolean(animationIn)}
        nodeRef={contentRef}
        timeout={POPUP_DELAY}
        classNames={S.contentAnimation}
      >
        <S.PopupContainer {...rest} ref={contentRef}>
          {children}
        </S.PopupContainer>
      </CSSTransition>
    </S.PopupLayout>
  )
}
