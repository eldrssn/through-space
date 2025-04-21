import { useEffect, useState } from 'react'

import { PopupLayout, PopupPortal } from './components'
import { PopupProps } from './types'
import { POPUP_DELAY } from '@app/constants'

export const Popup = (props: PopupProps) => {
  const { opened } = props
  const { mounted } = useMountPopup(opened)

  return (
    <PopupPortal>
      <PopupLayout {...props} mounted={mounted} />
    </PopupPortal>
  )
}

function useMountPopup(opened: boolean) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (opened && !mounted) {
      setMounted(true)
    } else if (!opened && mounted) {
      setTimeout(() => {
        setMounted(false)
      }, POPUP_DELAY)
    }
  }, [opened])

  return { mounted }
}
