import { POPUPS_CONTAINER_ID } from '@app/constants'
import { FC, PropsWithChildren } from 'react'

import ReactDOM from 'react-dom'

export const PopupPortal: FC<PropsWithChildren> = ({ children }) => {
  const container = document.getElementById(POPUPS_CONTAINER_ID)!

  return container && ReactDOM.createPortal(children, container)
}
