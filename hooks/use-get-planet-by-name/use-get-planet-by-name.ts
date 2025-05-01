import useSWR from 'swr'
import { IPlanetItem } from '@models'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function useGetPlanetByName(query: string) {
  const shouldFetch = query.length > 0
  const { data, error } = useSWR<IPlanetItem[]>(
    shouldFetch ? `/api/planets?q=${encodeURIComponent(query)}` : null,
    fetcher
  )
  return { suggestions: data || [], isError: !!error }
}

// import { useApi } from '@providers'
// import { useMutation } from '@tanstack/react-query'

// export const GET_PLANET_BY_NAME_KEY = 'get-planet-by-name-key'

// export const useGetPlanetByName = () => {
//   const api = useApi()

//   const mutation = useMutation({
//     mutationKey: [GET_PLANET_BY_NAME_KEY],
//     mutationFn: async (search: string) => {
//       try {
//         const response = await api.base.searchImage({ search })

//         return response.data
//       } catch (error) {
//         return Promise.reject(error)
//       }
//     },
//   })

//   return {
//     planet: mutation.data?.data,
//     searchPlanet: mutation.mutate,
//     searchPlanetAsync: mutation.mutateAsync,
//     ...mutation,
//   }
// }
