import useSWR from 'swr'

import { IPlanetItem } from '@models'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function useGetPlanetByName(query: string) {
  const shouldFetch = query.length > 0
  const { data, error, isLoading } = useSWR<IPlanetItem[]>(
    shouldFetch ? `/api/search?q=${encodeURIComponent(query)}` : null,
    fetcher
  )
  return { suggestions: data || [], isError: !!error, isLoading }
}
