import useSWR from 'swr'

import { IPlanetItem } from '@models'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function useGetPlanets() {
  const { data, error, isLoading } = useSWR<IPlanetItem[]>('/api/planets', fetcher)

  return { planets: data || [], isLoading, isError: !!error }
}
