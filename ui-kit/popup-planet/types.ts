import { IPlanetItem } from '@/models'

export interface PopupPlanetProps {
  // opened: boolean
  onClosePopup: () => void
  planet: Partial<IPlanetItem>
}
