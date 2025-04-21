import { ImageResource } from '@api'

export interface SearchBarProps {
  setSearchResult: React.Dispatch<React.SetStateAction<ImageResource | null>>
}
