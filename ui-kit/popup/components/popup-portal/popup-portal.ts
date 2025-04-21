'use client'

import { POPUPS_CONTAINER_ID } from '@app/constants'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

export const PopupPortal: FC<PropsWithChildren> = ({ children }) => {
  const [container, setContainer] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setContainer(document.getElementById(POPUPS_CONTAINER_ID))
  }, [])

  if (!container) return null

  return ReactDOM.createPortal(children, container)
}
