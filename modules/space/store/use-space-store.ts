import { create } from 'zustand'

import { IPlanetItem } from '@/models'

interface ModalsStore {
  selectedPlanet: IPlanetItem | null
  setSelectedPlanet: (planet: IPlanetItem) => void
  clearSelectedPlanet: () => void
}

export const useSpaceStore = create<ModalsStore>((set) => ({
  selectedPlanet: null,
  setSelectedPlanet: (planet: IPlanetItem) => set({ selectedPlanet: planet }),
  clearSelectedPlanet: () => set({ selectedPlanet: null }),
}))
