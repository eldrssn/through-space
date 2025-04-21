import { MouseEvent } from 'react'

export interface ButtonTooltipProps {
  text: string
  onButtonClick?: (e: MouseEvent) => void
}
