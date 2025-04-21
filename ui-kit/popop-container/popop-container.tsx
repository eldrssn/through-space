import { FC } from 'react'

import { Popup, PopupProps } from '../popup'

export const PopopContainer: FC<PopupProps> = ({ children, opened, onClose }) => {
  return (
    <Popup opened={opened} onClose={onClose}>
      {children}
    </Popup>
  )
}

export default PopopContainer
