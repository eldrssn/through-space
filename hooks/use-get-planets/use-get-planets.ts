import { useApi } from '@providers'
import { useQuery } from '@tanstack/react-query'

export const GET_SETTINGS_KEY = 'get-planets-key'

export const useGetPlanets = (onProgress?: (progress: number) => void) => {
  const api = useApi()

  async function queryFn() {
    try {
      const response = await api.base.getImagesByCoordinates(
        { xMin: -1920, xMax: 1080, yMin: -1920, yMax: 1080 },
        {
          onDownloadProgress: (progressEvent) => {
            if (!onProgress) return
            if (progressEvent.total && onProgress) {
              const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
              onProgress(percentCompleted)
            }
          },
        }
      )
      return response.data
    } catch (error) {
      return Promise.reject(error)
    }
  }

  const { data, ...rest } = useQuery({
    queryKey: [GET_SETTINGS_KEY],
    queryFn,
    refetchOnMount: false,
  })

  return {
    planets: data?.data,
    data,
    ...rest,
  }
}
