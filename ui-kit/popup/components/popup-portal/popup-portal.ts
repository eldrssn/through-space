'use client'

import { FC, PropsWithChildren, useEffect, useState } from 'react'

import ReactDOM from 'react-dom'

import { POPUPS_CONTAINER_ID } from '@app/constants'

export const PopupPortal: FC<PropsWithChildren> = ({ children }) => {
  const [container, setContainer] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (typeof document === 'undefined') return

    setContainer(document.getElementById(POPUPS_CONTAINER_ID))
  }, [])

  if (!container) return null

  return ReactDOM.createPortal(children, container)
}
