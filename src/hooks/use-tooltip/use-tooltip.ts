import { useCallback, useState } from 'react'

type UseTooltipProps = {
  delayEntering?: number
  delayExiting?: number
}

export const useTooltip = ({ delayEntering, delayExiting }: UseTooltipProps) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)
  const [isTooltipExiting, setIsTooltipExiting] = useState(false)
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)

  const clearHoverTimeout = useCallback(() => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
  }, [hoverTimeout])

  const showTooltip = useCallback(() => {
    setHoverTimeout(
      setTimeout(() => {
        setIsTooltipVisible(true)
        clearHoverTimeout()
      }, delayEntering)
    )
  }, [clearHoverTimeout, delayEntering])

  const hideTooltip = useCallback(() => {
    clearHoverTimeout()

    setIsTooltipExiting(true)
    const timeoutId = setTimeout(() => {
      setIsTooltipVisible(false)
      setIsTooltipExiting(false)
      clearTimeout(timeoutId)
    }, delayExiting)
  }, [delayExiting, clearHoverTimeout])

  return {
    isTooltipVisible,
    isTooltipExiting,
    showTooltip,
    hideTooltip,
  }
}
