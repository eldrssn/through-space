import { PositionType } from '../../types'

export interface DragProps {
  initialPosition: PositionType
  position: PositionType
  setPosition: React.Dispatch<React.SetStateAction<PositionType>>
}
