import { PositionType } from '../../types'

export interface ZoomProps {
  scale: number
  setScale: React.Dispatch<React.SetStateAction<number>>
  position: PositionType
  setPosition: React.Dispatch<React.SetStateAction<PositionType>>
}
