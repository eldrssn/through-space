import { PlanetDataType } from '@app/modules/space/types'

export interface PopupPlanetProps {
  // opened: boolean
  onClosePopup: () => void
  planet: Partial<PlanetDataType>
}
