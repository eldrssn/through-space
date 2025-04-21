import { useApi } from '@providers'
import { useMutation } from '@tanstack/react-query'

export const GET_PLANET_BY_NAME_KEY = 'get-planet-by-name-key'

export const useGetPlanetByName = () => {
  const api = useApi()

  const mutation = useMutation({
    mutationKey: [GET_PLANET_BY_NAME_KEY],
    mutationFn: async (search: string) => {
      try {
        const response = await api.base.searchImage({ search })

        return response.data
      } catch (error) {
        return Promise.reject(error)
      }
    },
  })

  return {
    planet: mutation.data?.data,
    searchPlanet: mutation.mutate,
    searchPlanetAsync: mutation.mutateAsync,
    ...mutation,
  }
}
